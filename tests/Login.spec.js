const {test, expect} = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const loginData = require('../test-data/loginData.json');

test ('Verify Login with Valid Credentials', async ({page}) =>{

  const login = new LoginPage(page);

  await login.navigate('https://www.saucedemo.com/');

  await login.login (

    loginData.validUser.username,
    loginData.validUser.password
  );

  

});