
const {test, expect} = require('@playwright/test')
import {ModuleTestName} from '../test-data/qa/google.json'

for (const element of Object.values(ModuleTestName)) {

   test (`Data Driven Testing with JSON - ${element}`, async ({page}) => {

    await page.goto(process.env.BASE_URL)
    const search = await page.locator("#APjFqb")
    search.click()
    search.fill(element)
    search.press("Enter")
    await page.waitForTimeout(5000);
    
    //EITA sudhu value gulo dekhabe. playwright tutorial , cypress , selenium ei type er


})
    
}

// for (const[key, value] of Object.entries(ModuleTestName)) {
//     console.log(key, value);
//     //EITA key ar value soho dekhabe. skill1 playwright tutorial , ei type er
// }

