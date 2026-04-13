const fs = require("fs");
const filePath = "./package.json";

const packageJson = JSON.parse(fs.readFileSync(filePath).toString());

const jsonData = {
  version: packageJson.version,
};

const jsonContent = JSON.stringify(jsonData);

fs.writeFile("./public/meta.json", jsonContent, "utf8", function (error) {
  if (error) {
    console.log("An error occured while saving version to meta.json");
    return console.log(error);
  }

  console.log("Latest version updated in meta.json file");
});
