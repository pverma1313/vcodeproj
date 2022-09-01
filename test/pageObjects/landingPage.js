
const Base=require("./base");
class landingPage extends Base
{
    get logo()
    {
        return $("//img[contains(@src,'orangehrm-logo.png')]")
    }

    async verifyLogo()
    {
        //await expect(this.logo).toHaveAttribute(alt,text)
        await this.logo.saveScreenshot('./Screenshots/TClogo.png')

    }


}
module.exports=new landingPage();