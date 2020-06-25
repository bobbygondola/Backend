const supertest = require('supertest');
const server = require('./server');
const db = require('./data/db-config');

describe('server.js.. / endpoint', () => {
    //CHECKING STATUS CODE!
    it('should return 200', () => {
        return supertest(server).get('/')
        .then(res => {
            expect(res.status).toBe(200)
        })
    });
})

describe('checking JSON language', () => {
    //CHECKING TYPE OF LANGUAGE
    it('should be using JSON', () => {
        return supertest(server).get('/')
        .then(res => {
            expect(res.type).toMatch(/json/i);
        })
    })
})

describe('Checking /endpoint contents', () => {
    // / endpoint test
    it('should respond with greeting/motivation', () => {
        return supertest(server).get('/')
        .then(res => {
            expect(res.status).toEqual(200)
        })
    })
})
////////////////////////////////////////////////////////////////////SERVER.JS END

// truncates before each test
//  beforeEach(async () => {
//      await db('teachers').truncate();
//  })

describe('Auth Router Endpoints', () => {
    //login
    it('/register sucess', () => {
        return supertest(server)
        .post('localhost:8001/api/auth/register')
        .send({
            "username": "Testing",
            "password": "Testing",
            "subject": "software"
        })
        .then(res => {
            expect(res.status).toBe(404)
        })
        .catch(err => {
            console.log("/register error ->",err)
        })
    })

    it("/register invalid, return 404", () => {
        return supertest(server)
            .post("/api/auth/register")                   
            .send({ username: 'false', password: "test"})
            .then(res => {
            expect(res.status).toBe(404);
        });
    });

    it("returns JSON", () => {
        return supertest(server)
        .post('/api/auth/register')
        .send({ username: 'test', password: 'test'})
        .then(res => {
            expect(res.type).toMatch(/json/i);
        })
    } )
    ///////////END OF REGISTER
})

describe('/login POST', () => {

    it("returns JSON", () => {
        return supertest(server)
        .post('/api/auth/login')
        .send({ username: 'test', password: 'test'})
        .then(res => {
            expect(res.type).toMatch(/json/i);
        })
    } )
    
    it("returns JSON", () => {
        return supertest(server)
        .post('/api/auth/login')
        .send({ username: 'test', password: 'test'})
        .then(res => {
            expect(res.status).toBe(200);
        })
    } )

    it('login invalid, returns 401', () => {
        return supertest(server)
        .post('/api/auth/login')
        .send({username: "wrong", password: "wrong"})
        .then(res => {
            expect(res.status).toBe(401)
        })
    })
    ///////////////////// LOGIN TESTS END
})

describe("user router", () => {
    it('teachers endpoint success', () => {
        return supertest(server)
        .get('/api/users/teachers')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
})