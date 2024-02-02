const fs = require('fs');
function writeToFile(filePath,content){
    fs.writeFile(filePath,content,(err)=>{
     if (err){
        console.error('Error: ' ,err);
     }
     else{
        console.log('Success: ' ,filePath);
     }
    });
    console.log("Data written in output.txt",content)
}
const result =`Hello My name is Sankalp Ghosh. \n
I have participated in 30days of Nodejs Challenge  \n and this is Second day of Nodejs Challenge.`

writeToFile("../testfolder-2/result.txt",result);
writeToFile('../testfolder-2/nonexistent-folder/result.txt', 'Content in a non-existent folder.');
