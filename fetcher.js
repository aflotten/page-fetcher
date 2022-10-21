const request = require('request');
const fs = require('fs');
const { exit } = require('process');
const args = process.argv.slice(2);
const link = args[0];
const path = args[1];

function fetcher() {
  request(link, (error, response, body) => {
    if (error) {
      console.log("Error: ", error);
    }
    fs.writeFile(path, body, (error) => {
      if (error) {
        console.log("Error: ", error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
        exit();
      }
    });
  });
};

fetcher();


