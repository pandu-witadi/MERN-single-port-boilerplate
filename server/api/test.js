//
//  /routes/test
//
const express = require('express')
const router = new express.Router()
const CF = require('../config')


router.get('/', async (req, res) => {
    try {
        curDate = new Date()
        res.send({
            appName: CF.appName,
            port: CF.port,
            appVersion: CF.appVersion,
            serverDate: curDate.getFullYear() + "-" + (curDate.getMonth() + 1) + "-" + curDate.getDate(),
            serverTime: curDate.toLocaleTimeString(),
            random_test: Math.random()
        })
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router
