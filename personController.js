const PERSON = require('./personModel');

module.exports ={
//GET ALL 
    getAllPersons:async(req,res)=>{
try{
    let persons = await PERSON.find();
    res.json(persons);
}
catch(err){
    console.log(err);
    res.status(500).json(err);
    return;

    }
},

//FIND ONE
    findPerson:async(req,res)=>{
    try{
    let person = await PERSON.findOne({name: req.params.name});
    res.json(person);
    }
    catch(err){
    console.log(err);
    }
    } ,

    // GET SINGLE by id
    getPersonById:async(req,res)=>{
    try{
    let person = await PERSON.findById(req.params.id);
    res.json(person);
    }
    catch(err){
    console.log(err);
    }},


    //UPDATE ONE
    updatePerson:async(req,res)=>{
    try{
    let person = await PERSON.findByIdAndUpdate(req.params.id,{name: req.body.name},{new: true});
    res.json(person);
    }
    catch(err){
    console.log(err);
    }
},
//DELETE ONe
    deletePerson:async(req,res)=>{
    try{
    let person = await PERSON.findByIdAndRemove(req.params.id);
    res.json(person);
    }
    catch(err){
    console.log(err);
    }},
    //DELETE ALL
    deleteAllPersons:async(req,res)=>{
        try{
        let persons = await PERSON.remove({})
        res.json(persons);
        }
        catch(err){
            console.log(err);
        
        }}
  

}