// Libs
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
var cors = require('cors');
app.use(cors()); 
var docxConverter = require('docx-pdf');

// Parsers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

// Global Vars
var docx;

app.post('/convertDocx-Pdf', (req, res)=>{
    docx = req.body.path;
    console.log("works")
    console.log(docx);
    docxConverter('./essay.docx','./new.pdf',function(err,result){
        if(err){
          console.log(err);
          res.send(err);
        }else{
            console.log('result'+result);
            res.send(result);
        }
      });
});

//Sets Port
const port = '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));