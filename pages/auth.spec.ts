import {expect} from '@playwright/test';
import {test} from '../fixtures/authFixture';

test.beforeEach( async({page})=>{    
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
})

test.describe('Общие проверки', () => {

    // Задание 2
    test('Наличие элементов на странице', async({authPage})=>{
        await expect(authPage.fieldUsername).toBeVisible()
        await expect(authPage.fieldPassword).toBeVisible()
        await expect(authPage.buttonLogin).toBeVisible()
        await expect(authPage.panelRegister).toBeVisible()  
        await expect(authPage.loginText).toHaveCSS('color','rgb(254, 254, 254)')
        await expect(authPage.loginText).toHaveCSS('background-color','rgb(81, 97, 105)')
    })
    
    // Задание 3
    test('Ввести валидные данные в поля username и password, нажать на Login → авторизация успешна', async({authPage})=>{
        // Очищаем поле и вводим username
        await expect(authPage.fieldUsername).toBeVisible()
        await authPage.fieldUsername.click()
        await authPage.fieldUsername.press('Control+A')
        await authPage.fieldUsername.press('Backspace')
        await authPage.fieldUsername.type('j2ee')
        // Очищаем поле и вводим password
        await expect(authPage.fieldPassword).toBeVisible()
        await authPage.fieldPassword.click()
        await authPage.fieldPassword.press('Control+A')
        await authPage.fieldPassword.press('Backspace')
        await authPage.fieldPassword.type('j2ee')
        // Нажимаем Login
        await expect(authPage.buttonLogin).toBeVisible()
        await authPage.buttonLogin.click()
        // Проверяем успешность авторизации
        await expect(authPage.elementWelcome).toBeVisible()
        await expect(authPage.elementWelcome).toHaveText('Welcome likhitha!')
    })
    
    test('Ввести невалидные данные в поля username и password, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{
        // Очищаем поле и вводим username
        await expect(authPage.fieldUsername).toBeVisible()
        await authPage.fieldUsername.click()
        await authPage.fieldUsername.press('Control+A')
        await authPage.fieldUsername.press('Backspace')
        await authPage.fieldUsername.type('какой-то юзер')
        // Очищаем поле и вводим password
        await expect(authPage.fieldPassword).toBeVisible()
        await authPage.fieldPassword.click()
        await authPage.fieldPassword.press('Control+A')
        await authPage.fieldPassword.press('Backspace')
        await authPage.fieldPassword.type('123456')
        // Нажимаем Login
        await expect(authPage.buttonLogin).toBeVisible()
        await authPage.buttonLogin.click()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести валидные данные в поле username, в password невалидные, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{
        // Очищаем поле и вводим username
        await expect(authPage.fieldUsername).toBeVisible()
        await authPage.fieldUsername.click()
        await authPage.fieldUsername.press('Control+A')
        await authPage.fieldUsername.press('Backspace')
        await authPage.fieldUsername.type('j2ee')
        // Очищаем поле и вводим password
        await expect(authPage.fieldUsername).toBeVisible()
        await authPage.fieldPassword.click()
        await authPage.fieldPassword.press('Control+A')
        await authPage.fieldPassword.press('Backspace')
        await authPage.fieldPassword.type('1234567890')
        // Нажимаем Login
        await expect(authPage.buttonLogin).toBeVisible()
        await authPage.buttonLogin.click()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести невалидные данные в поле username, в поле password валидные, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{
        // Очищаем поле и вводим username
        await expect(authPage.fieldUsername).toBeVisible()
        await authPage.fieldUsername.click()
        await authPage.fieldUsername.press('Control+A')
        await authPage.fieldUsername.press('Backspace')
        await authPage.fieldUsername.type('какой-то юзер')
        // Очищаем поле и вводим password
        await expect(authPage.fieldPassword).toBeVisible()
        await authPage.fieldPassword.click()
        await authPage.fieldPassword.press('Control+A')
        await authPage.fieldPassword.press('Backspace')
        await authPage.fieldPassword.type('j2ee')
        // Нажимаем Login
        await expect(authPage.buttonLogin).toBeVisible()
        await authPage.buttonLogin.click()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Не заполнять поля username и password, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{  
        // Очищаем поле username
        await expect(authPage.fieldUsername).toBeVisible()
        await authPage.fieldUsername.click()
        await authPage.fieldUsername.press('Control+A')
        await authPage.fieldUsername.press('Backspace')
        // Очищаем поле password
        await expect(authPage.fieldPassword).toBeVisible()
        await authPage.fieldPassword.click()
        await authPage.fieldPassword.press('Control+A')
        await authPage.fieldPassword.press('Backspace')
        // Нажимаем Login
        await expect(authPage.buttonLogin).toBeVisible()
        await authPage.buttonLogin.click()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести валидные данные в поле username и не заполнять поле password, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{   
        // Вводим username
        await expect(authPage.fieldUsername).toBeVisible()
        await authPage.fieldUsername.click()
        await authPage.fieldUsername.press('Control+A')
        await authPage.fieldUsername.press('Backspace')
        await authPage.fieldUsername.type('j2ee')
        // Очищаем поле password
        await expect(authPage.fieldPassword).toBeVisible()
        await authPage.fieldPassword.click()
        await authPage.fieldPassword.press('Control+A')
        await authPage.fieldPassword.press('Backspace')
        // Нажимаем Login
        await expect(authPage.buttonLogin).toBeVisible()
        await authPage.buttonLogin.click()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Не заполнять поле username и ввести валидные данные в поле password, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{   
        // Очищаем поле username
        await expect(authPage.fieldUsername).toBeVisible()
        await authPage.fieldUsername.click()
        await authPage.fieldUsername.press('Control+A')
        await authPage.fieldUsername.press('Backspace')
        // Очищаем поле и вводим password
        await expect(authPage.fieldPassword).toBeVisible()
        await authPage.fieldPassword.click()
        await authPage.fieldPassword.press('Control+A')
        await authPage.fieldPassword.press('Backspace')
        await authPage.fieldPassword.type('j2ee')
        // Нажимаем Login
        await expect(authPage.buttonLogin).toBeVisible()
        await authPage.buttonLogin.click()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    });
