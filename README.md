# MERN Stack Project: Build and Deploy a Twitter Clone From Scratch | JWT, Socket.io

![Demo App](https://i.ibb.co/f8y9vGS/Group-82.png)

[Video Tutorial on Youtube](https://youtu.be/4GUVz2psWUg)

Some Features:

-   ⚛️ Tech Stack: React.js, MongoDB, Node.js, Express, Tailwind
-   🔐 Authentication with JSONWEBTOKENS (JWT)
-   🔥 React Query for Data Fetching, Caching etc.
-   👥 Suggested Users to Follow
-   ✍️ Creating Posts
-   🗑️ Deleting Posts
-   💬 Commenting on Posts
-   ❤️ Liking Posts
-   🔒 Delete Posts (if you are the owner)
-   📝 Edit Profile Info
-   🖼️ Edit Cover Image and Profile Image
-   📷 Image Uploads using Cloudinary
-   🔔 Send Notifications
-   🌐 Deployment
-   ⏳ And much more!

### Setup .env file

```js
MONGO_URI=...
PORT=...
JWT_SECRET=...
NODE_ENV=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```


---------------------------------------
# Why we're using .js in imports :
In a Node.js (ESM - ECMAScript Modules) environment, you must explicitly specify the file extension (.js, .mjs, etc.) when importing files.
Alternative Approaches:
Use CommonJS (require()):
If you're using require() in a CommonJS setup ("type": "commonjs" in package.json), you can omit .js
 Advantages of ESM over CommonJS
1️⃣ Native JavaScript Standard (Future-Proof)
ESM is the official module system of JavaScript and is widely used in modern front-end and back-end development.
CommonJS is specific to Node.js and may not be compatible with future web standards.
2️⃣ Better Performance (Supports Tree Shaking)
ESM supports tree shaking, which helps remove unused code when bundling (e.g., in Webpack, Rollup).
CommonJS loads entire modules even if only part of the module is used.
3️⃣ Asynchronous Loading (Better Performance in Large Apps)
ESM modules are asynchronous and use top-level await, allowing non-blocking module loading.
CommonJS uses synchronous require(), which blocks execution while loading.

# USER Routes Working
1️⃣ User Signup (/signup)
User sends a POST request with fullName, username, email, and password.
-Validation and Passoword hashing
-User is Created & Token is Generated
-Response sent exclusing password
2️⃣ User Login (/login)
User sends a POST request with username and password.
-Authentication
-JWT Token Issued and stored in a cookie if valid credentials
-Response
3️⃣ Protected Route (/me)
User sends a GET request to access their profile.
-JWT Token Validation (via Middleware)
-User Data Retrieval 
-Response
4️⃣ User Logout (/logout)
-Clears JWT Cookie
-Response





