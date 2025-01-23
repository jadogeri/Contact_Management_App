import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const getContactTest = () => {

  test('get a contact', async () => {

    let initContact = localStorage.getItem("contact");   
    let initUser = localStorage.getItem("user");      
   

    console.log("init contact ========================",initContact,typeof initContact)
    const contact = JSON.parse(initContact as string)
    const user = JSON.parse(initUser as string)

    const { _id} = contact
    const {token} = user

    //get token from user
    const res = await request(BASE_URL).get(`/api/contacts/${_id}`).set('Authorization', `Bearer ${token}`)  

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
   if(res.statusCode < 300){
    let updatedCreds = {... contact, ...res.body}   
    console.log("updated creds ========================",updatedCreds,typeof updatedCreds)
    
    localStorage.setItem("contact",JSON.stringify(updatedCreds, null, 2))

   }

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();

 
  },60000)


  
}



















