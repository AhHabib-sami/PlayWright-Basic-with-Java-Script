const {test, expect} = require('@playwright/test');

test ("Mouse Action Demo", async({page}) => {

    await page.goto("https://www.google.com/")
    
    //just click

  //  await page.getByRole('link', {name : 'ছবি সার্চ করুন ', exact: true}).click();


    //doule click

    await page.getByLabel("Google অ্যাপ্লিকেশানগুলি").dblclick();
    await page. waitForTimeout(5000); 


    //right click

await page.getByRole('link', { name: 'Gmail' }).click({ button: 'right' });
await page.pause();
    await page.locator('.o3j99.qarstb').click({button: 'right'});



    await page. waitForTimeout(5000); 


})


test ("Mouse Hover Demo", async({page}) => {

await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
await page.locator('.context-menu-one.btn.btn-neutral').click({ button: 'right' });
await page.waitForTimeout(3000);


//Middle Click 

await page.reload();

await page.getByRole('Link',{name:'Example code: Simple Context Menu'}).click({button:'middle'})
await page.waitForTimeout(5000);



//Left Click 

await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

await page.getByRole('Link',{name:'Example code: Simple Context Menu'}).click({button:'left'})
await page.waitForTimeout(5000);


//hvoer

await page.goto('https://practice-automation.com/hover/');

await page.waitForTimeout(3000);
await page.locator('#mouse_over').hover();
})