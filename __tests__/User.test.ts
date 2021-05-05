import request from 'supertest';
import createConnection from '../src/database/connection';
import app from '../src/app';
import { getConnection } from 'typeorm';

// import createConnection from '../src/database/connection';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  
  it('Should be able to create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        email: 'user@example.com',
        name: 'User Example'
      });

    expect(response.status).toBe(201);
  });

  it('Should not be able to create a user with a exists email', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@example.com',
      name: 'User Example'
    });

    expect(response.status).toBe(400);
  });
});