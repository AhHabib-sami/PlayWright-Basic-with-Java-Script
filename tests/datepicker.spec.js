const{test,expect} = require("@playwright/test")

test ("Date picker demo", async ({page}) =>
{
    await page.goto("https://jqueryui.com/datepicker/", {waitUntil:"load"})
    // const DateTime =  page.locator("#datePickerMonthYearInput")
    // DateTime. fill("10/12/2023")
    // await page.keyboard.press('Enter')
    // await page.waitForTimeout(5000);
    //     await page.keyboard.press('Enter')



const frameElement = page.frameLocator(".demo-frame")
await frameElement.locator(".hasDatepicker").click()
const defaultDate = frameElement.locator('.ui-datepicker-today > a')
const currentDateValue = await defaultDate.getAttribute('data-date') // 22 as

let customDate = parseInt(currentDateValue) + 3 // 19 as value

const element = "[data-date='" + customDate.toString() + "']"

await frameElement.locator(element).click()

await page.waitForTimeout(5000)
 

})