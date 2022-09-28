import { Locator, Page } from '@playwright/test';

export class AuthPage {
    readonly page:Page
    readonly fieldUsername: Locator
    readonly fieldPassword: Locator
    readonly buttonLogin: Locator
    readonly panelRegister: Locator
    readonly loginText: Locator
    readonly elementWelcome: Locator
    readonly elementLoginFailed: Locator
    
    constructor(page:Page){
        this.fieldUsername = page.locator('[name="username"]')
        this.fieldPassword = page.locator('[name="password"]')
        this.buttonLogin = page.locator('[class="button-bar"]').last()
        this.panelRegister = page.locator('[class="panel register"]')
        this.loginText = page.locator('text=Login')
        this.elementWelcome = page.locator('[id="WelcomeContent"]')
        this.elementLoginFailed = page.locator('[class="panel failed"]')
    }
}