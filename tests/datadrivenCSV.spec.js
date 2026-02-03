const {test, expect} = require('@playwright/test')

import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';


const records = parse (
    
    fs.readFileSync(path.join(__dirname, '../test-data/qa/TestData.csv')),
            {
                columns: true,
                skip_empty_line: true
            }
)

for (const element of records) {
    test (`Data Drive with CSV - ${element.TestCaseID}`,async ({page}) => {

        await page.goto(process.env.BASE_URL)
        const search = await page.locator("#APjFqb")
        search.click()
        search.fill(element.Skill1)
        search.press("Enter")
        await page.waitForTimeout(5000);
    })
}
    


// for (const[key, value] of Object.entries(ModuleTestName)) {
//     console.log(key, value);
//     //EITA key ar value soho dekhabe. skill1 playwright tutorial , ei type er
// }

