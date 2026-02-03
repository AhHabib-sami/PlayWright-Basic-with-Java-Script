const {test,expect} = require ('@playwright/test');

test('Locators Test', async({page}) => {

    await page.goto("https://www.google.com/");
    await page.getByLabel('সার্চ করুন', {exact: true}).fill("API Testing"); //exact search as the value "Search"
    await page.getByLabel('সার্চ করুন', {exact: true}).press('Enter');
    await page.waitForTimeout(10000);
    await page.getByAltText("What is API Testing? Benefits").click();
    await page.waitForTimeout(3000);


});


