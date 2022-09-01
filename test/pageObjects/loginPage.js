
//const { default: $ } = require('webdriverio/build/commands/browser/$');
//import Base from './base';


const Base=require('./base')
//const LoginData=require('../TestData/loginData.js')

class loginPage extends Base
{
    get loginInputBox()
    {
        return $("input[name='username']")
    }

    get passwordInputBox()
    {
        return $("input[name='password']")
    }

    get loginButton()
    {
       return $('<button />')
    }


    async fillUsername()
    {
        return await this.loginInputBox.setValue("")
    }
    async fillPassword()
    {
         return await this.passwordInputBox.setValue("")
    }
    clickLoginButton()
    {
        return  this.loginButton.click();
        //console.log("session id is ",browser.sessionId);
    }
    openHomePage()
    {
       // return super.openHomePage();
       browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       //console.log("hye check")
       //return await "1"
    }
}
module.exports=new loginPage()




