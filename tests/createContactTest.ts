import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const createContactTest = () => {

  test('create a new contact', async () => {

    console.log(__dirname)
    let path  : string = __dirname + "\\mocks\\client.json"
    let initContact = fileReader(path)
    console.log("init contact ========================",initContact,typeof initContact)
    localStorage.setItem("contact",initContact);      
    const contact = JSON.parse(initContact as string)

    let userMock = localStorage.getItem("user");
    let user = JSON.parse(userMock as string)
    console.log("user ========================",user,typeof user)

    //get token from user
    const {token} = user
    const res = await request(BASE_URL).post('/api/contacts').send(contact).set('Authorization', `Bearer ${token}`)  

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
   if(res.statusCode < 300){
    let updatedCreds = {... contact, ...res.body}   
    console.log("updated creds ========================",updatedCreds,typeof updatedCreds)

    
    localStorage.setItem("contact",JSON.stringify(updatedCreds, null, 2))

   }

    expect(res.statusCode).toEqual(201);
    expect(res.body).toBeDefined();

 
  },30000)


  
}



















