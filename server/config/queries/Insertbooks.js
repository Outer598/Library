import db from "../db/dbSetup.js";

export const insertBook = async (name, cover, author, synopsis) =>{
    try{
        await db.query("INSERT INTO books (name, cover, author, synopsis) VALUES ($1, $2, $3, $4)", [name, cover, author, synopsis]);
        console.log('done')
    } catch (error) {
        console.log(error.message);
    }
}