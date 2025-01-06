const express = require('express');

const app = express();
const {createTodo, updateTodo} = require('./types');
const { todo } = require('./db');

app.use(express.json());

//api to post todo
app.post('/todo' , async (req,res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong data!! please recheck"
        })
        return 
    }
    // connect to db and add todo
    await todo.create({
        title : createPayload.title ,
        description : createPayload.description,
        completed : false
    })

    res.status(201).json({
        msg : "Todo Create Successfully"
    })

});

app.get('/todos' , async (req,res) => {
    const todos =  await todo.find({});

    res.status(201).json({
        todos
    })

    return ;


});

app.put('completed' , async (req,res) => {
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the worng data !! please check again"
        })
        return ;
    }
    //connect to Db and update todo
    const updateTodo = todo.update({
        _id : req.body.id
    },{
        completed : true
    })

    res.status(201).json({
        msg : "Todo Completed Successfully"
    })

})
