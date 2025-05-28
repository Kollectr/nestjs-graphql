import { Test, TestingModule } from '@nestjs/testing';
import { AppResolver } from './app.resolver';
import { GreetingService } from './greeting/greeting.service';

describe('AppResolver', () => {
  let resolver: AppResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppResolver,
        GreetingService
      ],
    }).compile();

    resolver = module.get<AppResolver>(AppResolver);
  });

  it('should return "Hello, World!"', () => {
    expect(resolver.sayHello('World')).toBe('Hello, World!');
  });

  it('should return "Goodbye, World!"', () => {
    expect(resolver.sayGoodbye('World')).toBe('Goodbye, World!');
  });
});
