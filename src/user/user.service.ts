import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(userId: number): string {
    return `data for user ${userId}`;
  }
}
