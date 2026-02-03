const {test,expect} = require('@playwright/test')

test ("Iframe demo 1 @Tag1", async ({page}) => {

    await page.goto("https://jqueryui.com/droppable/")


    //iframe

    const fl = await page.frameLocator(".demo-frame")


    //src and destination

    const drag = fl.locator('#draggable')
    const drop = fl.locator('#droppable')

    //drag and drop

    await drag.dragTo(drop)




})


test ("Iframe demo 2 @Tag2", async ({page}) => {

    await page.goto("https://jqueryui.com/droppable/")


    //iframe

    const fl = await page.frameLocator(".demo-frame")


    //src and destination

    const drag = fl.locator('#draggable')
    const drop = fl.locator('#droppable')

    //drag and drop

    await drag.dragTo(drop)




})



test ("Iframe demo 3 @Tag1 ", async ({page}) => {

    await page.goto("https://jqueryui.com/droppable/")


    //iframe

    const fl = await page.frameLocator(".demo-frame")


    //src and destination

    await page.locator(".view-source > a >i").click();

   




})