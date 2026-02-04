
const {test, expect} = require('@playwright/test');
import {QATestData} from '../test-data/qa/google.json';
import {StageQATestData} from '../test-data/qa/stage/google.json';


test.describe('Module Test Name ', () => {

    let testData = null;

    test.beforeAll("Running before all test" , () => {

        if(process.env.ENV == 'qa'){
            testData = QATestData;
        }
        else{
            testData = StageQATestData;
        }

    })

test ('Read data based on ENV variable', async ({page}) => {
   
    await page.goto('https://www.google.com/');
    const search = page.locator("#APjFqb")
    await search.click()
    await search.fill(testData.skill1)

});

})



// for (const[key, value] of Object.entries(ModuleTestName)) {
//     console.log(key, value);
//     //EITA key ar value soho dekhabe. skill1 playwright tutorial , ei type er
// }

