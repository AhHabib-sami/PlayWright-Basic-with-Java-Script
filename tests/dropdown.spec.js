const {test,expect} = require ('@playwright/test')

test ("Drop down demo of facebook", async ({page}) => {

    await page.goto("https://www.facebook.com/r.php?entry_point=login");


    const DropdownList = page.locator('#month')
    await expect (DropdownList).toHaveValue('12')

    DropdownList.selectOption('10');
    DropdownList.selectOption('5');
    DropdownList.selectOption('Feb')

    await page.waitForTimeout(5000);

})