import { Query, Resolver, Args } from '@nestjs/graphql';
import { GreetingService } from './greeting/greeting.service';

@Resolver()
export class AppResolver {
  constructor(private greetingService: GreetingService) {}

  @Query(() => String)
  sayHello(@Args('name') name: string): string {
    return this.greetingService.getGreeting(name);
  }

  @Query(() => String)
  sayGoodbye(@Args('name') name: string): string {
    return this.greetingService.getGoodbye(name);
  }
}
