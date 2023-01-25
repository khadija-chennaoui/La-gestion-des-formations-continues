const request = require('supertest')
const app =  require('../index')

describe('Test login',()=>{
    let body = {
        email: 'Admin@gmail.com',
        password:'111'
    }
    it('email incorrect' , async() => {
        const res = await request(app).post('/emplyer/login').send(body)
        expect(res.text).toBe(400)
    }) 
    it('password incorrect' , async() => {
        const res = await request(app).post('/emplyer/login').send(body)
        expect(res.text).toBe(400)
    }) 
})