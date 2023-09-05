const fs = require('fs');
const path = require('path');

for(let i=1; i<6; i++) {
      fs.copyFile(path.join(__dirname, 'bell.html'), path.join(__dirname, `fs-bellwork/h${i}.html`), (err) => {
    if (err) {
      console.error('Error copying file:', err);
    }
  });
}


fs.readdir(path.join(__dirname, 'fs-bellwork'), (err, files) => {
  if(err){
    console.error('Error reading directory:', err);
  }else{
    var i = 0;
    files.forEach(file => {
      fs.readFile(path.join(__dirname, `fs-bellwork/${file}`), 'utf8', (err, data) => {

          let titles = ["Home Page", "About", "Contact Us", "Gallery", "Testimonials"];
          let newH1Tag = data.replace(/<h1>.*?<\/h1>/s, `<h1>${titles[i]}</h1>`);
          i++;
          fs.writeFile(path.join(__dirname, `fs-bellwork/${file}`), newH1Tag,'utf8', (err) => {
              if(err){
                console.error(err);
              }
          })
          
      });
    })
  }
});