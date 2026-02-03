const{test,expect}=require('@playwright/test'); 

test.beforeEach('Run before each test', async ({page}) => { 

    console.log("This is before each hook");    

    await page.goto("https://youtube.com/")

});


test.beforeAll("Run once before all tests", async () => {

    console.log("Running before all tests");
})


test ("Hooks ", async ({page}) => {

    await page.getByPlaceholder("Search", {exact: true}).fill("Playwright Tutorial")


    await expect(page.getByRole('button', { name: 'Search' , exact: true})).toBeVisible();
    await page.getByRole('button', { name: 'Search' , exact: true}).click();
    await page.waitForTimeout(5000);

    //click on first video

    await page.waitForTimeout(3000);

    await page.getByRole('heading', { name: 'Playwright Beginner Tutorials' }).click();

    //validate title


});


test ("Hooks 2 ", async ({page}) => {


    await page.getByPlaceholder("Search").fill("API Testing Tutorial")

    await expect(page.getByRole('button', { name: 'Search' , exact: true})).toBeVisible();
    await page.getByRole('button', { name: 'Search' , exact: true}).click();
    await page.waitForTimeout(5000);

    //click on first video

    await page.waitForTimeout(3000);



});

test.afterEach("This is after each ",async ({page}) => {

    console.log("This is after each hook");
})

test.afterAll( async () => {

    console.log("This is after all hook");
})