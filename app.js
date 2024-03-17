const express = require('express');
const connectDB = require('./models/database');
const teamController = require('./controllers/team-controller');

connectDB();
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static('./public'));

// views
app.set('view engine','ejs');
app.set('views','views');

//routs
app.get('/create',teamController.getCreateTeam);
app.post('/create',teamController.createTeam);
app.get('/edit',teamController.getEditTeam);
app.post('/edit/:id',teamController.editTeam);
app.get('/delete-team/:id',teamController.deleteTeam)
app.use('/',teamController.getPageRank);


app.listen(3000,()=>{
    console.log("app is listening ....")
})
