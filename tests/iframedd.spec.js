const {test,expect} = require('@playwright/test')

test ("Iframe demo", async ({page}) => {

    await page.goto("https://jqueryui.com/droppable/")


    //iframe

    const fl = await page.frameLocator(".demo-frame")


    //src and destination

    const drag = fl.locator('#draggable')
    const drop = fl.locator('#droppable')

    //drag and drop

    await drag.dragTo(drop)
    page.waitForTimeout(5000);




})