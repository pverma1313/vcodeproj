const LoginPage=require('../pageObjects.loginPage')
//const LandingPage=require('../pageObjects.landingPage')
//const { Browser } = require('puppeteer-core')

describe('My login Application',()=>
{ 

it('Verify_title', async () =>{

    await browser.url("/")
    //await browser.url("/")
   // await browser.pause(4000)

    //await LoginPage.openHomePage();
   // console.log(browser.getTitle());
    //await LoginPage.verifyTitle();

})

it('Verify_login with valid credentials' , async () =>
{

    await LoginPage.openHomePage();
    await LoginPage.pauseShort();
    //await LoginPage.fillUsername();
    //await LoginPage.fillPassword();
    //await LoginPage.clickloginButton();
    //await browser.pause(5000);


    

})

it(' Verify_landing_Page_URL', async() =>
{
    await LoginPage.verifyEmployeePageURL();
})





})