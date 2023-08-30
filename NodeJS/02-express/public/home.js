const fs = require('fs'); const path = require('path');
fs.readdir(path.join(__dirname, '../../../../../../../Public/Desktop'), (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }else{
    files.forEach(file => console.log(file));
  }
});
