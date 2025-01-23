const request = require('supertest');
import { LocalStorage } from "node-localstorage";
import { registerUserTest } from "./registerUserTest";
import { loginUserTest } from "./loginUserTest";
import { deleteUserTest } from "./deleteUserTest";
import { currentUserTest } from "./currentUserTest";
import { createContactTest } from "./createContactTest";
import { getContactTest } from "./getContactTest";
import { getAllContactsTest } from "./getAllContactsTest";
import { deleteAllContactsTest } from "./deleteAllContactsTest";
import { deleteContactTest } from "./deleteContactTest";


describe('user api requests', () => {

    global.localStorage = new LocalStorage('./tests/storage');
    //registerUserTest();
    //loginUserTest();
    //currentUserTest()
    //createContactTest()
    //deleteUserTest()
    //getContactTest();
    //getAllContactsTest()
    //deleteAllContactsTest()
    //deleteContactTest()


  
});


