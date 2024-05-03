require('dotenv').config()
const express = require("express")
const Route = require("../Routes/v1/Items_route")
const app = express()
const cors = require("cors")
const PORT = 3000
const auth= require("../Routes/v1/Auth_route")
const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")

app.use(cors())
app.use(express.json())
app.use('/items',Route)
app.use('/auth',auth)

const options = {
    definition:{
        openapi: "3.0.0",
        info: { 
            title: "My API",
            version: "1.0.0",
            description: "Description for my Items api",
        },
        servers:[{
            url : "http://localhost:3000"
        }
    ],
    },
    
    apis: ["./Routes/v1/*.js"], // Path to the API routes in your Node.js application
    };
const specs  = swaggerJSDoc(options)
app.use("/docs",swaggerUI.serve,swaggerUI.setup(specs))

app.listen(PORT,()=>{
    console.log(`Express server running at http://localhost:${PORT}/`)
})

module.exports=app