class User {

    private id : string = "" ;
    private username: string = "";
    private email : string = "" ;
  
    public constructor() {
 
    }
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