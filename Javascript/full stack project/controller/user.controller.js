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

        const isMatch = bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({id: user._id},
            "shhhhh", {
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

export { registerUser, verifyUser, login }