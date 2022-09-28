import {expect} from '@playwright/test';
import {test} from '../fixtures/authFixture';

test.beforeEach(async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
})

test.only('Элементы страницы авторизации', async({authPage})=>{
    await expect(authPage.username).toBeVisible()
    await expect(authPage.password).toBeVisible()
    await expect(authPage.loginButton).toBeVisible()
    await expect(authPage.loginButton).toHaveCSS('color','rgb(254, 254, 254)')
    await expect(authPage.loginButton).toHaveCSS('background-color','rgb(81, 97, 105)')
    await expect(authPage.panelRegister).toBeVisible()
})