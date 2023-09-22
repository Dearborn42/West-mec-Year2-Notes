const result = document.querySelector('.result');

const fetchPeople = async() =>{
    try {
        const {data} = await axios.get('/api/people');
        console.log(data);

        // going through the data array and getting the data that holds the value of data
        const people = data.data.map((person)=>{
            const result =`<h5>${person.name}</h5> <button type="button" onclick="deletePerson(${person.id})">Delete</button> <button type="button" onclick="editPerson(${person.id})">Edit</button>`;
            return result;
        })

        result.innerHTML = people.join("");
    }catch(e){
        formAlert.textContent = e.response.data.msg;
    }
}
fetchPeople();

// HTML Submit Form
const btn = document.querySelector('.submit-btn');
const input = document.querySelector('.form-input');
const formAlert = document.querySelector('.form-alert');

btn.addEventListener('click', async(event)=>{
    // prevents page from reloading on submit because we are doing something with the data
    event.preventDefault();
    const nameValue = input.value;

    try{
        const {data} = await axios.post('/api/people', {name: nameValue});
        const h5 = document.createElement('h5');
        h5.textContent = data.person;
        result.appendChild(h5);
    }catch(e){
        console.log(e.response);
        formAlert.textContent = e.response.data.msg;
    }
    input.value='';
});


function deletePerson(id){
    fetch(`/api/people/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: id})
    }).then((res) => {
        if(res.status === 202)
            window.location.reload();
    })
}

function editPerson(id){
    const newName = document.getElementById('name').value;
    fetch(`/api/people/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: newName})
    }).then((res) => {
        if(res.status === 202)
            window.location.reload();
    })
}