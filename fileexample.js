//read file
//write file
//append file
//delete file

const fs= require('fs')

//readfile
fs.readFile('./abc.txt', (error, data)=>{
    if(error){
        console.log("error");
        console.log(error);
    }
    else{
        console.log(data.toString());
    }
});

console.log("terminated")