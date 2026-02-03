const {test, expect} = require("@playwright/test")



test.only("Assestion demo 1", async ({page}) =>  {

    console.log("Assertions in playwright")

    await page.goto("https://www.google.com")
    await expect.soft(page).toHaveURL("https://www.google.com/")

    //soft asseriton 
    await expect(page).toHaveTitle("Google")


} )


test.skip("Assestion demo 2", async ({page}) =>  {

    console.log("Assertions in playwright")

    await page.goto("https://www.google.com")
    await expect.soft(page).toHaveURL("https://www.google.com/")

    //soft asseriton 
    await expect(page).toHaveTitle("Google")


} )



test ("Assestion demo 3", async ({page}) =>  {

    console.log("Assertions in playwright")

    await page.goto("https://www.google.com")
    await expect.soft(page).toHaveURL("https://www.google.com/")

    //soft asseriton 
    await expect(page).toHaveTitle("Google")


} )