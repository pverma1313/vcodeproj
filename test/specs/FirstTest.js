//const { Browser } = require("puppeteer-core")

describe("test group:smoke",()=>
{
it('TC001.1_ID', async() => {
    browser.url('https://www.amazon.in/')
    await expect(browser).toHaveUrlContaining('amazon')
  

    await browser.saveScreenshot('./Screenshots/screenshot.png')
    

    const login=await $('#nav-link-accountList-nav-line-1')
    await $('#nav-logo-sprites').saveScreenshot('Screenshots/TC001.png')

    

})

})