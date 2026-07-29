const {test, expect} = require('@playwright/test');

const GooglePage = require('../pages/GooglePage.spec');

test ('Verify Google Title', async ({page}) =>{

  const google = new GooglePage(page);

  await google.openGoogle();

  await expect(page).toHaveTitle('Google');
});