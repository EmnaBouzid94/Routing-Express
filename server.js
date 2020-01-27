const express=require('express')
const app=express()

app.use(workTime=(req,res,next)=>{
    var d = new Date();
    var n = d.getHours();
    if (n>=8 && n<=16) {app.use(express.static(__dirname+'/public'))}
    else {
        res.send('Our office is not open now')
    }
    next()
})



app.listen(3000,(err)=>{
    if (err) console.log('The server is not running')
    else console.log('The server is running')
})