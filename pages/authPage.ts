import { Locator, Page } from '@playwright/test';

export class AuthPage {
    readonly page:Page
    readonly username: Locator
    readonly password: Locator
    readonly buttonLogin: Locator
    readonly panelRegister: Locator
    readonly loginText: Locator
    readonly elementWelcome: Locator
    readonly elementLoginFailed: Locator
    
    constructor(page:Page){
        this.page = page
        this.username = page.locator('[name="username"]')
        this.password = page.locator('[name="password"]')
        this.buttonLogin = page.locator('[class="button-bar"]').last()
        this.panelRegister = page.locator('[class="panel register"]')
        this.loginText = page.locator('text=Login')
        this.elementWelcome = page.locator('[id="WelcomeContent"]')
        this.elementLoginFailed = page.locator('[class="panel failed"]')
    }

// Переход на страницу авторизации
    async goToAuthPage(){
        await this.page.goto('https://jpetstore.aspectran.com/account/signonForm')
      }

// Нажатие и очистка поля username
    async clickUsernameField(){
        await this.username.click()
      }
    async clearUsernameField(){
        await this.username.press('Control+A')
        await this.username.press('Backspace')
      }
      async clickUsernameFieldAndClear(){
        await this.clickUsernameField()
        await this.clearUsernameField()
      }

// Нажатие и очистка поля password
      async clickPasswordField(){
        await this.password.click()
      }
    async clearPasswordField(){
        await this.password.press('Control+A')
        await this.password.press('Backspace')
      }
      async clickPasswordFiedlAndClear(){
        await this.clickPasswordField()
        await this.clearPasswordField()
      }

// Нажатие на кнопку buttonLogin
async clickButtonLogin(){
    await this.buttonLogin.click()
  }
}