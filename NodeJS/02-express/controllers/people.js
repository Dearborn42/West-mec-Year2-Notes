let {people} = require('../data');

const readPeople = (req, res) => {
    res.json({success: true, data:people});
}

const createPeople = (req, res) => {
    console.log(req.body);
    const {name} = req.body;
    if(name)
        return res.status(201).json({success: true, person: name});
    res.status(404).json({success: false});
}

const updatePeople = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => person.id === Number(id));
    if(!person)
        return express.json({success: false});
    const newPeople = people.map((person) => {
        if(person.id === Number(id))
            person.name = name
        return person;
    })

    res.status(202).json({data: newPeople, success: true});
}

const deletePerson = (req, res) => {
    
}

module.exports = readPeople