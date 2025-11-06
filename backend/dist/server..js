import app from "./index.js";
import http from "http";
const server = http.createServer(app);
server.on("error", (err) => {
    console.log(err);
    process.exit();
});
server.listen(3000, () => console.log("server is listning on port 3000"));
//# sourceMappingURL=server..js.map