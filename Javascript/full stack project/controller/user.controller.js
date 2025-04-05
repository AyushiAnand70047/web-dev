import User from "../model/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
    // get user data
    const { name, email, password } = req.body;

    // validate
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }

    // check if user already exist
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            })
        }

        // user not exist, create a user in database
        const user = await User.create({
            name,
            email,
            password
        })

        if (!user) {
            res.status(400).json({
                message: "User not registered"
            })
        }
        console.log(user)

        // create a verification token
        const token = crypto.randomBytes(32).toString("hex")
        console.log(token)

        // save token in database
        user.verificationToken = token

        await user.save()

        // send token as email to user
        var transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD
            }
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Verify your email",
            text: "Please click on the following link:",
            html: `${process.env.BASE_URL}:${process.env.PORT}/api/v1/users/verify/${token}">Verify your account`,
        };
        await transporter.sendMail(mailOption)

        // send success status to user
        res.status(201).json({
            message: "User registered successfully",
            success: true
        })

    } catch (error) {
        res.status(400).json({
            message: "User not registered",
            error,
            success: false
        })
    }
};

const verifyUser = async (req, res) => {
    // get token from url
    const {token} = req.params;
    console.log(token)

    // validate
    if(!token){
        return res.status(400).json({
            message: "Invalid token"
        })
    }

    // find user based on token
    const user = await User.findOne({verificationToken: token})

    // if not
    if(!user){
        return res.status(400).json({
            message: "Invalid token, User not found"
        })
    }

    // if token matched set isVerfied field to true
    user.isVerified = true
    
    // remove verificationToken from db
    user.verificationToken = undefined

    // save
    await user.save()

    // return response
    return res.status(201).json({
        success: true,
        message: "Verified successfully"
    })
}

const login = async (req, res) => {
    const {email, password} = req.body;


    if(!email || !password){
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        console.log(email)
        console.log(password)
        console.log(user)
        console.log(user.password)

        const isMatch = await bcrypt.compare(password, user.password)
        console.log(isMatch)

        if(!isMatch){
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({id: user._id},

            process.env.JWT_SECRET, {
                expiresIn: '24h'
            }
        )

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24*60*60*1000,
        }
        res.cookie("token",token, cookieOptions)
        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user._id,
                name: user.name,
            }
        })

    } catch(error){
        res.status(400).json({
            error
        })
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')

        console.log(user)

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            user
        })
    } catch(error) {
        console.log(error)
        return res.status(400).json({
            success: false
        })
    }
}

const logoutUser = async (req, res) => {
    try {
        res.cookie('token','',{})
        res.status(200).json({
            success: true,
            message: "Logged out successfully"
        })
    } catch(error) {}
}

const forgotPassword = async (req, res) => {
    try {
        // get email
        const email = req.body.email

        // find user by email
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        // if user found, reset token + reset expiry( Date.now() + 10*60*1000), user.save()
        const token = crypto.randomBytes(32).toString("hex")
        user.resetPasswordToken = token
        user.resetPasswordExpires = Date.now() + 10*60*60
        await user.save()

        // send mail => design url
        var transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD
            }
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Reset your password",
            text: "Please click on the following link:",
            html: `${process.env.BASE_URL}:${process.env.PORT}/api/v1/users/resetpassword/${token}">Reset your password`,
        };
        await transporter.sendMail(mailOption)

        // send success status to user
        res.status(201).json({
            message: "mail sent successfully",
            success: true
        })

    } catch(error) {
        res.status(400).json({
            error
        })
    }
}

const resetPassword = async (req, res) => {
    try {
        // collect token from params
        // password from req.body
        const {token} = req.params
        const {password} = req.body

        console.log(token)
        console.log(password)

        try {
            const user = await User.findOne({
                resetPasswordToken: token,
                resetPasswordExpires: {$gt: Date.now()}
            })

            if(!user){
                console.log("User not found")
            }

            // set password in user
            user.password = password

            // resetToken, resetExpiry => reset
            user.resetPasswordToken = undefined
            user.resetPasswordExpires = undefined

            // save
            await user.save()

            res.status(200).json({
                success: true,
                message: "password reset done"
            })
        } catch(error) {
            res.status(400).json({
                message: "Error in reset password"
            })
        }
    } catch(error) {
        res.status(400).json({
            message: "Error in getting token and password from user"
        })
    }
}

export { registerUser, verifyUser, login, getUser, logoutUser, forgotPassword, resetPassword }