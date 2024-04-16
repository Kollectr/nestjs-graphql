import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should return user data', () => {
    const userId = 1;
    expect(service.getUser(userId)).toEqual(`data for user ${userId}`);
  });
});