const request = require('supertest');
import { LocalStorage } from "node-localstorage";
import { registerUserTest } from "./registerUserTest";
import { loginUserTest } from "./loginUserTest";
import { deleteUserTest } from "./deleteUserTest";


describe('user api requests', () => {

    global.localStorage = new LocalStorage('./tests/storage');
    registerUserTest();
    loginUserTest();
    deleteUserTest()

  
});


