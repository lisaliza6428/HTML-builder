const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'files');
const folderCopiedPath = path.join(__dirname, 'files-copy');

    fs.stat(folderCopiedPath, function(error) {
        if (!error) {
            fs.readdir(folderCopiedPath, (error, files) => {
                if (error) throw Error;
                for (const file of files) {
                  fs.unlink(path.join(folderCopiedPath, file), error => {
                    if (error) throw Error;
                  });
                }
              });
        }
        else{
            fs.mkdir(folderCopiedPath, error => {
                if(error) throw Error; 
             });
        }
    });

function copy(){
 fs.readdir(folderPath,(error, content) => {
    if (error)
      throw Error;
    else {
      for (let i=0; i<content.length; i++){
        fs.copyFile((`${folderPath}/${content[i]}`),
                    (`${folderCopiedPath}/${content[i]}`),
                     error => {
                    if (error) throw Error;
          }); 
      }
      }
      console.log("Files were copied!");
  })  

}


setTimeout(copy, 100);


 