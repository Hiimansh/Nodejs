//read file
//write file
//append file
//delete file

const fs= require('fs')

//readfile
// fs.readFile('./abc.txt', (error, data)=>{
//     if(error){
//         console.log("error");
//         console.log(error);
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// console.log("terminated")

//write

// let content= "this is a example of synamic content for write operation in nodejs.";
// fs.writeFile('new_file.txt', content, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("saved");
//     }
// })

//append

// fs.appendFile("./new_file.txt", "new content", (err)=>{
//     if(err)
//     {
//         console.log("error"+ err);
//     }else{
//         console.log("saved");
//     }
// })

//deletefile

// fs.unlink("./fs.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("deleted");
//     }
// })