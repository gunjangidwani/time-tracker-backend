const Task = require('../model/task.model')
const respCtrl = require('./response.controller')

exports.create = (req, res) => {
    let task = new Task
    task = Object.assign(task, req.body)
    task.save((err) => {
        if(err)
            res.json(respCtrl.response(false, err))
        res.json(respCtrl.response(true, task))
        
    })
}

exports.getAllTask = (req, res) => {
    Task.find({}, (err, data) => {
        if(err)
            res.json(respCtrl.response(false, err))
        res.json(respCtrl.response(true, data))
    })
}