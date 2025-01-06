const express = require('express');

const app = express();
const {createTodo, updateTodo} = require('./types');

app.use(express.json());

//api to post todo
app.post('todo' , (req,res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong data!! please recheck"
        })
        return 
    }
    // connect to db and add todo

});

app.get('todos' , (req,res) => {

})

app.put('completed' , (req,res) => {
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the worng data !! please check again"
        })
        return ;
    }
    //connect to Db and update todo



})
