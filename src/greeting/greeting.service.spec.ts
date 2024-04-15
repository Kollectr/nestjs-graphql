import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    service = new GreetingService();
  });

  it('should return a correct greeting message', () => {
    expect(service.getGreeting('World')).toBe('Hello, World!');
  });
});
