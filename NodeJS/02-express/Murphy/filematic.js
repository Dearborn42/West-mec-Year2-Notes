const fs = require('fs');
const path = require('path');


for(let i=0; i<3; i++){
    fs.copyFile(
        path.join(__dirname, './batchOmatic/html.html'), 
        path.join(__dirname, `./batchOmatic/${i}html.html`), 
        (error, data) => {
            if(error){
                console.error(error);
            }
        }
    )
}


fs.readdir(
    path.join(__dirname, './batchOmatic'), 
    (err, data) => {
        if(err){
            console.error(err);
        }else{
            i=0;
            data.forEach(x=>{
                console.log(x);
                fs.rename(
                    path.join(__dirname, `./batchOmatic/${x}`), 
                    path.join(__dirname, `./batchOmatic/html${i}.html`), 
                    (err, data) => {
                        if(err){
                            console.error(err);
                        }
                    }
                )
                i++;
            })
        }
    } 
)