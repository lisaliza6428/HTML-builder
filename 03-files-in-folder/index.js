const fs = require('fs')
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');
console.log("Current directory files:");

fs.readdir(folderPath, {withFileTypes: true},(error, content) => {
  if (error)
    console.log(error);
  else {
    let files = content.filter(x => !x.isDirectory());
    for (let file of files){
        let fullFileName = file.name;
        let name = fullFileName.split('.')[0];
        let extension = fullFileName.split('.')[1];
        fs.stat(path.join(folderPath, fullFileName), (error, fileStats) => {
            if (error){
              console.log(error)
            }
            else{
              let size = fileStats.size;
              console.log(`${name} - ${extension} - ${size} Bytes`);

            }
          })
      }
    }
  
}) 


