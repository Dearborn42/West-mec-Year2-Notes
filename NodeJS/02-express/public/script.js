const result = document.querySelector('.result');

const fetchPeople = async() =>{
    try {
        const {data} = await axios.get('/api/people');
        console.log(data);

        // going through the data array and getting the data that holds the value of data
        const people = data.data.map((person)=>{
            return '<h5>${person.name}</h5>';
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