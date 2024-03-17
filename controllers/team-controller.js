const Team = require('../models/app-model');


exports.getPageRank =async (req,res)=>{
    let teams = await Team.find();
    teams = teams.sort((a,b)=>{
        return b.bronze-a.bronze;
    })
    teams = teams.sort((a,b)=>{
        return b.silver-a.silver;
    })
    teams = teams.sort((a,b)=>{
        return b.gold-a.gold;
    })


    let rank = 0;
    res.render('getTeamRank.ejs',{
        pageTitle : 'Teams Rank',
        teams,
        rank
    })
}
exports.getCreateTeam = (req,res)=>{
    res.render('./createTeam.ejs',{
        pageTitle:"ساخت پست"
    })
}
exports.createTeam = async (req,res)=>{
    const {name,color} = req.body;
    try{
        const nam = await Team.findOne({name:name});
        if(nam){
            res.redirect('/create')
        }
        await Team.create({name:name,color:color});
        res.redirect('/')
    }catch(err){
        console.log(err);
        res.status(400).send('team is not created');
    }

}
exports.getEditTeam = async (req,res)=>{
    const teams = await Team.find()
    res.render('getEditTeam.ejs',{
        pageTitle:"ویرایش تیم",
        teams
    })
}
exports.editTeam = async (req,res)=>{
    const {gold,silver,bronze} = req.query;

    try{
        const team = await Team.findById(req.params.id);
        team.gold = parseInt(gold);
        team.silver = parseInt(silver)
        team.bronze = parseInt(bronze);
        team.total = parseInt(gold)+parseInt(silver)+parseInt(bronze);
        await team.save();
        res.status(200).send('okay');
    }catch(err){
        console.log(err);
        res.status(400).send('team is not created');
    }

}
exports.deleteTeam =  (req,res)=>{

        Team.findByIdAndRemove(req.params.id).then((team)=>{
            console.log('team is deleted')
        }).catch((err)=>{
            console.log(err)
        })
        res.redirect('/edit')

}

