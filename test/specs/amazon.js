//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("Elements",function(){
    it('Filling form',async function()
    {
        browser.url('https://www.amazon.in/')
        
        await browser.maximizeWindow()
        
        await expect(browser).toHaveUrlContaining('amazon');
        //add url
        const login=await $('#nav-link-accountList-nav-line-1')
        await login.click();
        await browser.pause(2000);
        
        const username=await $("input[id='ap_email']")
        await username.setValue("pluthra13@gmail.com")

        const continuebtn=await $("input[id='continue']")
        await continuebtn.click();
     
        //await browser.pause(2000);

        //const pwd=await $("input[name='password']")
        //await pwd.setValue("admin123")

        await browser.pause(2000);
        const btn=await $('#continue')
        const btnstatus=await btn.isClickable();
        console.log("staus of button ")
        console.log(btnstatus)
        await expect(btn).toBeClickable()

        const btnValue=await btn.getAttribute("type")
        console.log(btnValue)

        const loginCss=await btn.getCSSProperty("font-size")
        //console.log(loginCss)



        
        await browser.pause(3000);

    })
})
       