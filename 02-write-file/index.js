console.log('Hello! Write something here, please! \nEnter "exit" or press "Ctrl + C" to quit');
const fs = require('fs');
const path = require('path');
const readline = require("readline");
const process = require('process');
const filePath = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(filePath, 'utf-8');

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.on('line', function(input){
  if (input === 'exit') {
    readLine.close();
    return;
  }

  fs.appendFile(filePath, `${input}\n`, function(error){
    if(error) throw error; 
})
});

process.on('exit', () => console.log('Thank you! Bye-bye!'));