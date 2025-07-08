import db from "../db/dbSetup.js";

export const getLatest = async () =>{
    try{
        const response  = await db.query("SELECT id, name, cover, genre FROM books ORDER BY id ASC");
        let data = response.rows;
        return data
    } catch (error){
        console.log(error.message);
    }
}

export const getPopular = async () =>{
    try{
        const response  = await db.query("SELECT id, name, cover, synopsis, views FROM books ORDER BY views DESC LIMIT 5");
        let data = response.rows;
        return data
    } catch (error){
        console.log(error.message);
    }
}