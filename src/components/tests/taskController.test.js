const request = require('supertest')
const app = require('../app')

describe('TaskController', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({name: 'Test Task', description: 'This is a test task'})

    expect(res.status).toBe(201)
    expect(res.body.name).toBe('Test Task')
  })
})
