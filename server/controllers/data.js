require('dotenv').config();
// const Data = require('../models/data');
const jwt = require('jsonwebtoken');
const Stock = require('stocks.js');
const stocks = new Stock(process.env.ALPHA_VANTAGE_KEY);

exports.getData = (req, res) =>  {
    let options = {
        symbol: req.body.ticker,
        interval: req.body.timeframe,
        start: new Date(req.body.start),
        end: new Date(req.body.end)
    }
    console.log(options);
    stocks.timeSeries(options).then(result => {
        res.send(result);
    }).catch(err => {
        console.error(err);
        res.json(err);
    });
}