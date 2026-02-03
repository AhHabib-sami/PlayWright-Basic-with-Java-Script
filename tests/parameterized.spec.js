const { test, expect } = require('@playwright/test')

const testParameters = [

    { searchTerm: 'Playwright tutorial' },
    { searchTerm: 'Playwright testing' },
    { searchTerm: 'Playwright automation' }
];


for (const i of testParameters) {
    
    test(`parameterized test ${i.searchTerm}`, async ({ page }) => {
    
    await page.goto("https://youtube.com/");

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill(i.searchTerm);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.waitForTimeout(5000);
    
});


}

