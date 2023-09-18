const result = document.querySelector(".result");

const fetchPeople = async() => {
    try{
        const {data} = await axios.get('/api/people');
        console.log(data);
        const people = data.data.map((person) =>{
            
        })
    }catch(e){

    }
}