//const { Browser } = require("puppeteer-core")

describe("Elements Commands",function(){
    it('Filling form',async function()
    {
        browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        await browser.maximizeWindow()
        
        await expect(browser).toHaveUrlContaining('orange');
        
        const username=await $("input[name='username']")
        await username.setValue("Admin")
     
        await browser.pause(2000);

        const pwd=await $("input[name='password']")
        await pwd.setValue("admin123")
        
        await browser.pause(2000);

        
       




    })
})