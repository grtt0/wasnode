// import server class module
import { Server } from "./src/server.js";

// instantiate new server object
const server = new Server();

// call server entrypoint method
server.start();

// console.log(server.app)

// we have access to app instance
// server.app.get("/", (req, res) => {
//   res.json({
//     message: [{ hello: "from" }, { the: "json" }, { awesome: "api" }],
//   });
// });
