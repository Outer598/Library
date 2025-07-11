import db from "../db/dbSetup.js";

export const insertBook = async (name, cover, author, synopsis) =>{
    try{
        let authorID = await db.query('SELECT id FROM users WHERE name = $1', [author]); // come and modify when access control is handled
        await db.query("INSERT INTO books (name, cover, author, synopsis) VALUES ($1, $2, $3, $4)", [name, cover, authorID.rows[0], synopsis]);
        console.log('done')
    } catch (error) {
        console.log(error.message);
    }
}