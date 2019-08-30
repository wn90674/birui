const express = require('express')
const router = express.Router();
const news = require('../data/news')

const send = require('../utils/sendEmail')
router.use(function timeLog(req, res, next) {
    // console.log('Time: ', Date.now());
    if (/news/.test(req.url)) {
        console.log(req.url)
    }
    
    next();
});

router.get('/test', (req, res) => {
    res.send('ok')
    // res.status(504).end()
})

// 新闻状态
router.get('/v1/news',(req,res)=>{
    res.send(news)
})

// 发送email
router.post('/sendEmail', (req, res) => {
    send().then(response => {
        res.send(response)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router