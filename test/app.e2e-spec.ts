import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('App', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Returns a greeting', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: '{ sayHello(name: "World") }',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.sayHello).toBe('Hello, World!');
      });
  });
});
