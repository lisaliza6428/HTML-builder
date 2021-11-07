//05-merge-styles

const fs = require('fs');
const path = require('path');
const stylesFolderPath = path.join(__dirname, 'styles');
const filePath = path.join(__dirname, 'project-dist', 'bundle.css');
  
fs.readdir(stylesFolderPath, {withFileTypes: true}, (error, content) => {
    if (error)
      throw Error;
    else{
        let files = content.filter(file => !file.isDirectory() && file.name.includes('css'));       
        for (let file of files){
        console.log(file)
        fs.readFile(`${__dirname}/styles/${file.name}`, "utf-8", (error, file) => {
          if (error) throw Error;
          fs.appendFile(filePath, file, (error) => {
            if (error) throw Error;       
          });
      })
          
      }
    }     
  })  
 
 