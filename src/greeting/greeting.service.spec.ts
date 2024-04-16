import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    service = new GreetingService();
  });

  it('should return a correct greeting message', () => {
    expect(service.getGreeting('World')).toBe('Hello, World!');
  });

  it('should return a correct goodbye message', () => {
    expect(service.getGoodbye('World')).toBe('Goodbye, World!');
  });

  it('should return a good morning message', () => {
    expect(service.getGoodbye('World', 'morning')).toBe(
      'Have a great day, World!',
    );
  });
});
