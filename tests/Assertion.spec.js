const {test, expect} = require("@playwright/test")
test ("Assestion demo", async ({page}) =>  {

    console.log("Assertions in playwright")

    await page.goto("https://www.google.com")
    await expect.soft(page).toHaveURL("https://www.google.com/")

    //soft asseriton 
    await expect(page).toHaveTitle("Google")


} )