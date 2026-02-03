const {test,expect} = require("@playwright/test")

test("keyboard action", async ({page}) => {

await page.goto("https://www.google.com")
await page.getByRole('combobox', { name: 'সার্চ করুন' }).click()
await page.getByRole('combobox', { name: 'সার্চ করুন' }).fill("Syftet Limited")
//press enter
//await page.getByRole('combobox', { name: 'সার্চ করুন' }).press("Enter")



//press control+a and delete
await page.getByRole('combobox', { name: 'সার্চ করুন' }).click()
await page.getByRole('combobox', { name: 'সার্চ করুন' }).press("Control+A")
await page.getByRole('combobox', { name: 'সার্চ করুন' }).press("Delete")
// press tab


await page.waitForTimeout(5000);


await page.reload  ()
await page.getByRole('combobox', { name: 'সার্চ করুন' }).click()

await page.keyboard.press('Tab')
await page.keyboard.press('Enter')
await page.waitForTimeout(5000);

})