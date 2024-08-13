import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';

//configure env
dotenv.config();//This line loads environment variables from the .env file into process.env.
//This allows you to use environment-specific variables without hardcoding them in your code.

//database config
connectDB();

const app = express();//This initializes an instance of an Express application, stored in the app variable.
//This instance will handle incoming requests and define routes.

//middlewares
app.use(express.json());//This middleware is used to parse incoming requests with JSON payloads. It makes the request body available as req.body in your routes.
app.use(morgan('dev'))//This middleware uses morgan to log incoming HTTP requests. The 'dev' format logs concise colored responses, which include the
//HTTP method, status code, response time, and more.


//routes
app.use("/api/v1/auth",authRoutes);

//rest api
app.get('/', (req,res)=>{
    res.send("<h1>Welcome to ecommerce app</h1>")
})
//Lines 20,21,22 is used for defining a route.This defines a route that listens for GET requests at the root URL ('/').
//When a request is made to this URL, it responds with an HTML message: "<h1>Welcome to ecommerce app</h1>".

//Port
const PORT = process.env.PORT || 8080;//This defines the port number on which the server will run. It first checks if there's a PORT 
//value in the environment variables; if not, it defaults to 8080.

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
//Lines 33,34,35 This starts the server, making it listen for incoming requests on the specified PORT. The callback function logs a message to the
//console indicating that the server is running, using colors for emphasis. process.env.DEV_MODE could be used to indicate whether the server is
//running in development or production mode.
