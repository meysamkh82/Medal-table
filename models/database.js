const mongoose = require('mongoose');
const databaseLocalhost = 'localhost:27017';
async function connectDB(){
    try{
        const conn = await mongoose.connect(`mongodb://${databaseLocalhost}/rank_team`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("database is connected "+conn.connection.host)
    }catch (e){
        console.log(e)
    }

}
module.exports = connectDB;
