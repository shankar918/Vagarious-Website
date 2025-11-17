import mysql  from "mysql2"

const  database= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root",
    database:"staffingdb"
})
database.connect((err)=>{
    if(err){
        console.error("database failed:",err)
    }
    else{
        console.log("database connection succfully:")
    }
})


export default database;