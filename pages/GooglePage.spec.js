class GooglePage {

  constructor (page) {

    this.page = page;
  }

  async openGoogle() {

    await this.page.goto('https://www.google.com');
  }
}

module.exports = GooglePage;