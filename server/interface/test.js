const express = require('express')
const router = express.Router();

const send = require('../utils/sendEmail')
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/test', (req, res) => {
    res.status(504).end()
})
router.get('/test2', (req, res) => {
    // res.status(200).end()
    res.send('1111')
})


router.post('/sendEmail', (req, res) => {
    send().then(response => {
        res.send(response)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router