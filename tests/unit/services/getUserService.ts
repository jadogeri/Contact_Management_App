import { IUser } from "../../../interfaces/IUser";
import { get  } from "../../../services/userService";

export function getUserServiceTest(email: string) {
    test('should return User Object', async () => {
      const result = await get(email) as IUser;
      console.log("........................................")
      console.log(result)
      expect(result.email).toBe(email);
    });
  }
  
