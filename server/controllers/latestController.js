import Model from '../config/db/index.js'

export const latest = async (req, res) =>{
    try{
        const data = await Model.latestInfo.getLatest()
        res.status(200).json(data)
    } catch (error) {
        console.log(error.stack);
        console.log(error.message);
        res.status(500).json({ error: "Server Error" });
    }
}

export const popular = async (req, res) =>{
    try{
        const data = await Model.latestInfo.getPopular()
        res.status(200).json(data)
    } catch (error) {
        console.log(error.stack);
        console.log(error.message);
        res.status(500).json({ error: "Server Error" });
    }
}
