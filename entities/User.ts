import { IUser } from "../interfaces/IUser";
class User implements IUser {

    private id : string  ;
    private username: string ;
    private email : string  ;
    private createdAt : string = "";
    private updatedAt : string = "";

  
    public constructor(username: string, id : string, email : string) {
 
      this.id = id;
      this.username = username;
      this.email = email;
    }
  password?: string | undefined;
    public setID(id : string): void {
        this.id = id;
    }
    
    public getID(): string {
        return this.id;
    }
  
    public setName(username : string): void {
      this.username = username;
    }
  
    public getName(): string {
      return this.username;
    }
    public setEmail(email : string): void {
      this.email = email;
    }
  
    public getEmail(): string {
      return this.email;
    }
  }
  
  module.exports = {User}

