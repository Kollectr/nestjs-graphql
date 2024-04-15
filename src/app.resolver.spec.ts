import { Test, TestingModule } from '@nestjs/testing';
import { AppResolver } from './app.resolver';
import { GreetingService } from './greeting/greeting.service';

describe('AppResolver', () => {
  let resolver: AppResolver;
  let greetingService: GreetingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppResolver,
        {
          provide: GreetingService,
          useValue: {
            getGreeting: jest.fn((name) => `Hello, ${name}!`),
            getGoodbye: jest.fn((name) => `Goodbye, ${name}!`),
          },
        },
      ],
    }).compile();

    resolver = module.get<AppResolver>(AppResolver);
    greetingService = module.get<GreetingService>(GreetingService);
  });

  it('should return "Hello, World!"', () => {
    expect(resolver.sayHello('World')).toBe('Hello, World!');
    expect(greetingService.getGreeting).toHaveBeenCalledWith('World');
  });
});
