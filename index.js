const {json}=require("express");
const express=require('express');
const server=express();
const fetch=require('node-fetch');
var todos={};
var user={};
server.get('/todos',(req,res)=>{
   return res.json(todos);
})

server.get('/user',(req,res)=>{
    
    return res.json(user);
 })

fetch("https://jsonplaceholder.typicode.com/todos"
    
).then(res=>{
    return res.json()
})
.then(data=>{
    for(let i=0;i<data.length;i++){
      
            data[i].userId=undefined
            todos=data
        }
        
    })
    
   
.catch(err=>console.log(err))
server.listen(5000);