import dotenv from "dotenv";
dotenv.config();
export const serverPort = process.env.PORT || 5000; // 5000 is the default value in case if the env variable has not been set
export const mongoUri = process.env.MONGODB_URI || '';

// if (!mongoUri) {
//     console.log("No mongo connection string. Set MONGODB_URI environment variable.");
//     process.exit(1);
// }

// export const jwtSecretKey = process.env.JWT_SECRET_KEY || '';

// if (!jwtSecretKey) {
//     console.log("No JWT secret string. Set JWT_SECRET_KEY environment variable.");
//     process.exit(1);
// }

// export const googleApiKey = process.env.GOOGLE_API_KEY;

