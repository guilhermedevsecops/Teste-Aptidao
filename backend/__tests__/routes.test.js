const app = require('../src/index.js')

describe('Test My app server', () =>{
    it('should get main route', () =>{
        const rest = request(app).get("/")

        expect(res.body).toHaveProperty('message')
    })
})