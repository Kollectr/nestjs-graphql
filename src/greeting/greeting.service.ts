import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getGreeting(name: string): string {
    return `Hello, ${name}!`;
  }

  getGoodbye(name: string, timeOfDay?: string): string {
    // Adding conditional logic based on the time of day.
    if (timeOfDay) {
      switch (timeOfDay.toLowerCase()) {
        case 'morning':
          return `Have a great day, ${name}!`;
        case 'afternoon':
          return `Enjoy your day, ${name}!!`;
        case 'evening':
          return `Have a pleasant night, ${name}!!`;
      }
    }
    return `Goodbye, ${name}!`;
  }
}
