const requestBodyparser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");
module.exports = async (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);

  let id = req.url.split("/")[3];

  const regexV4 = new RegExp();
  /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  if (!regexV4.test(id)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Validation Failed",
        message: "The Given ID not valid",
      })
    );
  } else if (baseUrl === "/api/policyholders/" && regexV4.test(id)) {
    try {
      let body = await requestBodyparser(req);
      const index = req.policyholders.findIndex((policyholder) => {
        return policyholder.id === id;
      });
      if (index === -1) {
        res.statusCode = 404;
        res.write(
          JSON.stringify({
            title: "Not Found",
            message: "policyholder not found",
          })
        );
        res.end();
      } else {
        req.policyholders[index] = { id, ...body };
        writeToFile(req.policyholders);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            title: "Validation Failed",
            message: "Request body is not valid",
          })
        );
      }
    } catch (err) {
      console.log(err);
      res.writeHead(400, { "Content-Type": "application/json" });

      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request body Not Valid",
        })
      );
    }
  }
};
