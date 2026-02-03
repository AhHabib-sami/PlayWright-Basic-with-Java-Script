const {test,expect} = require("@playwright/test")


test ("Visual Testing Demo", async ({page}) => {

    await page.goto("https://github.com/login")

    //before actuib

    await expect(page).toHaveScreenshot(  "github_login.png"  )

    await page.locator('input[name="login"]').fill("testuser")
    await page.locator('input[name="password"]').fill("testpassword")


        //after action
    await expect(page).toHaveScreenshot(  "github_login.png"  )


    await page.waitForTimeout(5000);

     


})