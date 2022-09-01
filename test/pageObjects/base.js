//const { Browser } = require("puppeteer-core")

module.exports=class Base 
{
    async openHomePage()
    {
        return await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async pauseShort()
    {
       return  await browser.pause(3000)
    }
}