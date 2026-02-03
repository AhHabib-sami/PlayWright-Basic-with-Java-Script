const {test, expect} = require("@playwright/test")


test.describe("Smoke Testing", () => {

    test ("Assestion demo 1", async ({page}) =>  {

    console.log("Test 1")

    await page.goto("https://www.google.com")
    await expect.soft(page).toHaveURL("https://www.google.com/")

    //soft asseriton 
    await expect(page).toHaveTitle("Google")


} )



test ("Assestion demo 2", async ({page}) =>  {

    console.log("Test 2")

    await page.goto("https://www.google.com")
    await expect.soft(page).toHaveURL("https://www.google.com/")

    //soft asseriton 
    await expect(page).toHaveTitle("Google")


} )


})


test.describe("Regression Testing", () => {

    test ("Assestion demo 3", async ({page}) =>  {

    console.log("Test 3")

    await page.goto("https://www.google.com")
    await expect.soft(page).toHaveURL("https://www.google.com/")

    //soft asseriton 
    await expect(page).toHaveTitle("Google")


} )



})


