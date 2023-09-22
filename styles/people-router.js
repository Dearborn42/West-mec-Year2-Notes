const express = require('express');
const router = express.Router();

// Below here is to work with the router application

let {people} = require('../NodeJS/02-express/data');

router.get('/', (req,res)=>{
    res.json({success:true,data:people});
});

router.post('/', (req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(201).json({success:true,person:name});
    }
    res.status(404).json({success:false,msg:'Please provide a name'});
});

// put request
router.put('/:prevName', (req,res)=>{
    const {prevName} = req.params;
    const {name} = req.body;
    const person = people.find(person=>{return person.name === prevName});
    if(!person){
        return res.json({success:false, data:[]});
    }

    const newPeople = people.map(person=>{
        if(person === prevName){
            person.name = name;
        }
        return person;
    })

    res.status(200).json({success:true, data:newPeople});
})

// delete request
router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    const person = people.find(person=>person.id === Number(id));

    if(!person){
        return res.status(404).json({success:false, msg:'No matching id found'});
    }

    people = people.filter(person=>{
        return person.id != Number(id);
    })
    return res.status(202).json({success:true, data:people});
});


module.exports = router;