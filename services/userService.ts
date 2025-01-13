import User from "../models/userModel";


async function get(email : string) {
  return User.findOne({ email : email });
}

async function create(username: string,email : string, password: string) {
  return  User.create({
    username: username,
    email: email,
    password: password
  });
}
/*

async function update(id, data) {
  return Lists.findOneAndUpdate({ _id: id }, data);
}

async function remove(id :) {
  return User.findByIdAndDelete(id);
}

*/
export { get, create, //update, remove 

};