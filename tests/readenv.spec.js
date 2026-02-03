const {test,expect} = require('@playwright/test')




test ("Read env file", async ({page}) => {

    await page.goto(process.env.BASE_URL)
    await page.locator("#APjFqb").click()
    await page.locator("#APjFqb").fill(process.env.USERNAME)
    await page.locator("#APjFqb").press("Enter")

    await page.waitForTimeout(5000);

   




})

