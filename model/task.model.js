const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    task_name: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('task', TaskSchema)