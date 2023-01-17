const route = require('express').Router()
const statistic = require('../Controllers/statisticContoller')
route.get('/totalorganisme',statistic.TotalOrganisme)
route.get('/totalemployer',statistic.TotalEmployer)
route.get('/totalformation',statistic.TotalFormation)



module.exports=route