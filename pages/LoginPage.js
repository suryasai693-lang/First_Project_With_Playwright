const BasePage = require('../utils/BasePage'); 

const LoginLocators = require('../locators/LoginLocators');



class LoginPage extends BasePage {

  constructor (page) {

    super(page);

    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async login(user, pass) {

    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}

module.exports = LoginPage;