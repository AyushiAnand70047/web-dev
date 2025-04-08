import bcrypt from "bcryptjs";
import crypto from "crypto"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const registerUser = async (req,res) => {
    const {name, email, password, phone} = req.body

    if(!name || !email || !password || !phone){
        console.log("Data is missing")
        res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }

    try{
        const existingUser = await prisma.user.findUnique({
            where: {email}
        })

        if(existingUser){
            res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const verificationToken = crypto.randomBytes(32).toString("hex")

        const user = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
                verificationToken
            }
        })

        // send mail

    } catch(error) {
        res.status(400).json({
            success: false,
            message: "Registration failed"
        })
    }
}

export const loginUser = async(req,res) => {
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }

    try{
        const user = await prisma.user.findUnique({
            where: {email}
        })
    
        if(!user){
            res.status(400).json({
                success: false,
                message: "Invalid details"
            })
        }

        const isMatch = bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            {id: user.id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        const cookieOptions = {
            httpOnly: true
        }

        res.cookie('token',token, cookieOptions)

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            message: "User exist"
        })

    } catch(error){
        res.status(400).json({
            success: false,
            message: "Login failed"
        })
    }

}