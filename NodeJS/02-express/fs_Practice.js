const fs = require('fs');
const path = require('path');

// fs.rename(
//     path.join(__dirname, 'Murphy/fs Test/New Text Document.txt'), 
//     path.join(__dirname, "Murphy/fs Test/Latin gobbledygook.txt"),
//     (err) => {if(err) console.error(err); return;}
// );

// fs.rename(
//     path.join(__dirname, 'Murphy/fs Test/New Text Document (2).txt'), 
//     path.join(__dirname, "Murphy/fs Test/Princess Bubblegum is a problem.txt"),
//     (err) => {if(err) console.error(err); return;}
// );

// fs.rename(
//     path.join(__dirname, 'Murphy/fs Test/New Rich Text Document.rtf'),
//     path.join(__dirname, "Murphy/fs Test/Learning is Hard.txt"),
//     (err) => {if(err) console.error(err); return;}
// );

// fs.rename(
//     path.join(__dirname, 'Murphy/fs Test/tryThis/New Text Document.txt'),
//     path.join(__dirname, 'Murphy/fs Test/tryThis/Regular Bros Show.txt'),
//     (err) => {if(err) console.error(err); return;}
// );

// fs.rename(
//     path.join(__dirname, 'Murphy/fs Test/tryThis/Regular Bros Show.txt'), 
//     path.join(__dirname, 'Murphy/fs Test/Regular Bros Show.txt'),
//     (error) => {
//         if(error){
//             console.error(error); 
//             return;
//         }
//     }
// )

// fs.rmdir(
//     path.join(__dirname, 'Murphy/fs Test/tryThis'), 
//     (err) => {if(err){console.error(err);return;}}
// );


// fs.rename(
//     path.join(__dirname, 'Murphy/fs Test/New Folder'), 
//     path.join(__dirname, 'Murphy/fs Test/Answer'), 
//     (err) => {if(err){console.error(err);return;}}
// );

fs.readdir(
    path.join(__dirname, 'Murphy/fs Test'),
    (err, files) => {
        if(err){
            console.error(err);
            return;
        }else{
            files = files.filter(file => {return file.split(".").length == 2});
            let lastWords = [];
            files.forEach(file => {
                let words = fs.readFileSync(path.join(__dirname, `Murphy/fs Test/${file}`), 'utf8', 
                (err, content) => { 
                    if(err){
                        console.error(err);
                    }
                }).split(/\s+/);
                lastWords.push(words[words.length-1]);
            });
            lastWords.forEach( word => {
                fs.appendFile(
                path.join(__dirname, `Murphy/fs Test/Answer/answer.js`), 
                word + '\n', 
                (err) => {
                    if(err){
                        console.error(err);
                        return;
                    }
                })
            })
        }
    }
); 