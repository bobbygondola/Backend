const supertest = require('supertest');
const server = require('./server');
const db = require('./data/db-config');
const { request } = require('./server');

describe('server.js.. / endpoint', () => {
    //CHECKING STATUS CODE!
    it('should return 200', () => {
        return supertest(server).get('/')
        .then(res => {
            expect(res.status).toBe(200)
        })
    });
})

describe('checking JSON landguage', () => {
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
            .send({ username: 'false', password: 3})
            .then(res => {
            expect(res.status).toBe(500);
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
    //////////LOGIN
describe('/login POST', () => {

    it("returns JSON", () => {
        return supertest(server)
        .post('/api/auth/login')
        .send({ username: 'test', password: 'test'})
        .then(res => {
            expect(res.type).toMatch(/json/i);
        })
    } )
    
    it("logs in [success]", () => {
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


    //////////////USER ROUTER //needs verifiation

describe("user router", () => {
    it('teachers endpoint [success]', () => {
        return supertest(server)
        .get('/api/users/teachers')
        .then(res => {
            expect(res.type).toMatch(/json/i);
        })
    })

            // it('teachers endpoint .get', () => {
            //     return supertest(server)
            //     .post('api/auth/login')
            //     .send({username:"test", password:"test"})
            //     .then(res => {
            //         console.log("logging in res----->", res)
            //         const token = res.body.token;
            //         return supertest(server)
            //         .set('authorization', token)
            //         .get('/api/users/teachers')
            //         .expect(res.status).toBe(200)
            //     })
                
            // })

    it('students endpoint [success]', () => {
        return supertest(server)
        .get('/api/users/teachers/1/students')
        .then(res => {
            expect(res.type).toMatch(/json/i);
        })
    })

            // it('student endpoint .get', () => {
            //     return supertest(server)
            //     .get('/api/users/teachers/1/students')
            //     .then(res => {
            //         expect(res.status).toBe(401);
            //     })
            // })

                    // it('student endpoint .POST', () => {
                    //     return request(server)
                    //     .post('/api/users/teacher/1/students')
                    //     .send({
                    //         "name": "bobbygd",
                    //         "email": "Wei@gmeil.com",
                    //         "subject": "softwaree",
                    //         "teacher_id": "2"
                    //     })
                    //     .then(res => {
                    //     const token = res.body.token
                    //     return request(server)
                    //     .set('authorization', token)
                    //     .send({
                    //         teacher_id: res.body.data.teacher_id,
                            
                    //     })
                    //     })
                    //     .expect(res.status).toBe(200)
                    // })

    it('projects endpoint [success]', () => {
        return supertest(server)
        .get('/api/users/teachers/1/projects')
        .then(res => {
            expect(res.type).toMatch(/json/i);
        })
    })

    it('projects endpoint .get', () => {
        return supertest(server)
        .get('/api/users/teachers/1/students/projects')
        .then(res => {
            expect(res.status).toBe(401);
        })
    })
})