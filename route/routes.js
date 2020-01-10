 
const router = require('express').Router()
const userCtrl = require('../controller/user.controller')
const taskCtrl = require('../controller/task.controller')

router.route('/register')
    .post(userCtrl.create)

router.route('/login')
    .post(userCtrl.read)

router.route('/task')
    .post(taskCtrl.create)
    .get(taskCtrl.getAllTask)

module.exports = router