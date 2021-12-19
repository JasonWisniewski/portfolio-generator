const fs = require('fs');
const { reject } = require('lodash');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err){
        reject(err);
        // return out fo the fxn here to make sure promise doesn't accidentally execute the resolve() fxn 
        return;
      }
      // if everything else goes well resolve the promise and send the good data to the .then() method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if(err) {
        reject(err);
        return;
      }

      resolve({
        ok:true,
        message: 'Stylesheet created!'
      });
    });
  });
}

module.exports = {writeFile, copyFile};