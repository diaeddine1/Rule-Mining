const express = require("express")
const jwt = require("jsonwebtoken")
const Router = express.Router()
const items = require("../../Models/Items")
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate user and generate JWT token
 *     description: Endpoint to authenticate users and generate a JWT token for authorization.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *                 example: dia
 *     responses:
 *       '200':
 *         description: JWT token generated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The generated JWT token.
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpYSIsImlhdCI6MTY0NTY3NTQ2MCwiZXhwIjoxNjQ1Njc5MDYwfQ.SKTcGZgQbKQD1O1FRFyjF
 *       '400':
 *         description: Bad request. Username missing or invalid.
 *       '500':
 *         description: Internal server error. Failed to generate token.
 */

Router.post("/login",async(req,res)=>{
    try{
        
        console.log(req.body)
        const {username} = req.body
        console.log(username)
        const token = jwt.sign({ username: username }, process.env.secret, { expiresIn: '7d' });
        res.json({token:token})
    }catch(error){
        console.log(error)
    }
   
    
})

module.exports=Router
