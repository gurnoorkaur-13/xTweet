import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import OpenAI from "openai";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";
import summarizeRoute from "./routes/summarize.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
console.log("OPENAI_API_KEY loaded:", process.env.OPENAI_API_KEY ? "✅ Loaded" : "❌ Missing");


// Set up OpenAI client
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});


// Optional: wrap any test in a function, NOT at top-level
// Comment this out unless you're debugging
// async function testOpenAI() {
// 	try {
// 		const response = await openai.chat.completions.create({
// 			model: "gpt-3.5-turbo",
// 			messages: [{ role: "user", content: "Hello!" }],
// 		});
// 		console.log(response.choices[0].message.content);
// 	} catch (error) {
// 		console.error("Error fetching OpenAI response:", error);
// 	}
// }
// testOpenAI();

// Cloudinary config
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/summarize", summarizeRoute);

// Production build handling
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

console.log(`PORT from environment: ${process.env.PORT}`);
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connectMongoDB();
});



// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import { v2 as cloudinary } from "cloudinary";
// import OpenAI from "openai";

// import authRoutes from "./routes/auth.route.js";
// import userRoutes from "./routes/user.route.js";
// import postRoutes from "./routes/post.route.js";
// import notificationRoutes from "./routes/notification.route.js";
// import summarizeRoute from "./routes/summarize.js";

// import connectMongoDB from "./db/connectMongoDB.js";

// dotenv.config();

// // Set up OpenAI client
// const openai = new OpenAI({
// 	apiKey: process.env.OPENAI_API_KEY,
//   });
//   const response = await openai.chat.completions.create({
// 	model: "gpt-3.5-turbo", // or "gpt-4"
// 	messages: [{ role: "user", content: "Hello!" }],
//   });
  
// // // Example function to make a call to OpenAI API
// // async function fetchOpenAIResponse() {
// // 	try {
// // 	  const response = await openai.createCompletion({
// // 		model: "text-davinci-003",  // Or any model you want to use
// // 		prompt: "Say hello to the world.",
// // 		max_tokens: 100,
// // 	  });
  
// // 	  console.log(response.data.choices[0].text);
// // 	} catch (error) {
// // 	  console.error('Error fetching from OpenAI:', error);
// // 	}
// //   }
  
// //   // Call the function
// //   fetchOpenAIResponse();


//   ////////////////////////////////////
// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const app = express();
// const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

// //middlewares
// app.use(express.json({ limit: "5mb" })); // using express middleware to parse req.body
// // limit shouldn't be too high to prevent DOS
// app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

// app.use(cookieParser()); //to parse req and get cookies

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/notifications", notificationRoutes);
// app.use("/api/summarize", summarizeRoute);


// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

// console.log(`PORT from environment: ${process.env.PORT}`);
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// 	connectMongoDB();
// });
