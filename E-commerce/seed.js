const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name:"shirt",
        img:"https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8fDA%3D" ,
        price: 130000,
        desc: "cotton shirt" 
    },
    {
        name:"vivo",
        img:"https://images.unsplash.com/photo-1614441884165-e70d6d432c30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dml2b3xlbnwwfHwwfHx8MA%3D%3D",
        price: 250000 , 
        desc:"best selling phone"
    },
    {
        name:"Bag",
        price:51000,
        img:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFnfGVufDB8fDB8fHww",
        desc:"best"
    },
    {
        name:"iphone", 
        img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww", 
        price: 237900, 
        desc: "better "
    },
    {
        name:"airpods" , 
        img:"https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" , 
        price: 25000 ,
        desc: "badiya hai kamao kamao"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;


