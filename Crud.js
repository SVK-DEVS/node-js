const conn = require('./connection');

//READ DATA------------------------>

// const main = async () => {
//   try {
//     let collection = await conn();
//     if (collection) {
//       let data = await collection.find().toArray();
//       console.log(data);
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   } 
// };

// main();


//INSERT DATA----------------->

// const insert=async ()=>{
//     const db=await conn();
//     const result=await db.insertOne(

//         {name:'yk',roll:55}

//     ) 
//     if(result.acknowledged){
//         console.log('inserted')
//     }
// }
// insert();


//UPDATE DATA------------------->


// const update=async()=>{
//     const db=await conn();

//     const res=await db.updateMany({name:"yk"},{$set:{roll:1111}}
//     )
// console.log(res)
// }
// update();


//delete--------->

// const del=async()=>{
// let db=await conn();
// const res=await db.deleteOne({name:"svk"})
// }
// del();
