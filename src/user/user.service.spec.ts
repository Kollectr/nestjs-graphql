import { UserService } from './user.service';

describe('UserProfileService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should return user profile data', () => {
    const userId = 1;
    expect(service.getUser(userId)).toEqual(`data for user ${userId}`);
  });
});
