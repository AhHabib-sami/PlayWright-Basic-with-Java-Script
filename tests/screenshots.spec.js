
const{test,expect} = require ('@playwright/test')

test ("Screenshort", async ({page}) =>{

    //element

    await page.goto("https://www.google.com/");
    await page.getByLabel("Google", {exact: true}).screenshot({path: './screenshots/element.png'});

    //page
     
    await page.screenshot({path: './screenshots/page.png'});

    // fullpage

    await page.screenshot({path: './screenshots/fullpage.png', fullPage: true});


})