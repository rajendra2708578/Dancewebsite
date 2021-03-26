const express = require("express");
const path = require("path");

const app = express();
const port = 8000;
//EXPRESS SPECFIC STUFF

app.use('/static',express.static('static'))
app.use(express.urlencoded())

//PUG SPECFIC STUFF
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    
    const params={ }
    res.status(200).render('home.pug',params);
})
app.get("/contact", (req, res)=>{ 
    const params ={ }
    res.status(200).render('contact.pug', params);
})

app.listen(port, () => {
    console.log(`This application started successfully at port ${port}`)
});