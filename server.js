const http = require("http");
const getReq = require("./Methods/get-request");
const postReq = require("./Methods/post-request");
const putReq = require("./Methods/put-request");
const deleteReq = require("./Methods/delete-request");
let policyholders = require("./data/policyholders.json");
// require("dotenv").config();
const PORT = process.env.PORT || 5001;
const server = http.createServer((req, res) => {
  req.policyholders = policyholders;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title: "Not Found", message: "Route not found" })
      );
      res.end();
  }
});
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
