
const express=require('express');
const app=express();
const port=process.env.Port ||  5000;

const cors=require('cors')
app.use(cors())

const categories=require('./data/categories.json')
const news=require('./data/news.json')

app.get('/',(req,res)=>{
    res.send('Dragon is running')
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})

//direct news
app.get('/news',(req,res)=>{
    res.send(news)
})

//dynamic 
//based on id
app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
     const selectedNews=news.find(n=>n._id===id);
     res.send(selectedNews);
})

//based on category
app.get('/categories/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    if(id===0){
        res.send(news);
    }
    else{
        const categoryNews=news.filter(n=> parseInt(n.category_id)===id);
        res.send(categoryNews);
   }

})
 






app.listen(port,()=>{
    console.log(`Dragon api is running in port ${port}`);
})





