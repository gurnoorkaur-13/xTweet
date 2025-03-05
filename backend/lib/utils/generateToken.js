import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => { //res is an arg as we're going to set a cookie and send it back to client as a response
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, //15d in millisecs
		httpOnly: true, // prevent XSS attacks -cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};
