const {test,expect} = require ('@playwright/test');

test('validate syftet homepage title', async({page}) => {
    await page.goto("https://syftet.com/", { waitUntil: 'load' });

    await expect(page).toHaveTitle("Syftet Ltd | Software Company in Bangladesh.");
});


test('validate syftet button title', async({page}) => {

    await page.goto("https://syftet.com/", { waitUntil: 'load' });

    await expect(page.getByRole('button', { name: 'Services▼' })).toBeVisible();
    await (page.getByRole('button', { name: 'Services▼' })).click();
    await page.waitForTimeout(3000);
    await page.getByRole('navigation').getByRole('link', { name: 'Contact Us' }).click();
    await expect(page).toHaveURL("https://syftetyy.com/contact-uuus");
 

 
});
