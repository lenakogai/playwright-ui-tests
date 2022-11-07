import {expect} from '@playwright/test';
import {test} from '../fixtures/authFixture';
import { AuthPage } from '../pages/authPage';

test.describe('Общие проверки', () => {
    
    test.beforeEach(async({authPage})=>{    
        await authPage.goToAuthPage()
    })

    // Задание 2
    test.only('Наличие элементов на странице', async({authPage})=>{
        await expect(authPage.username).toBeVisible()
        await expect(authPage.password).toBeVisible()
        await expect(authPage.buttonLogin).toBeVisible()
        await expect(authPage.panelRegister).toBeVisible()  
        await expect(authPage.loginText).toHaveCSS('color','rgb(254, 254, 254)')
        await expect(authPage.loginText).toHaveCSS('background-color','rgb(81, 97, 105)')
    })
    
    // Задание 3
    test('Ввести валидные данные в поля username и password, нажать на Login → авторизация успешна', async({authPage})=>{
        // Очищаем поле и вводим username
        await authPage.clickUsernameFieldAndClear()
        await authPage.username.type('j2ee')
        // Очищаем поле и вводим password
        await authPage.clearPasswordFieldAndClear()
        await authPage.password.type('j2ee')
        // Нажимаем Login
        await authPage.clickButtonLogin()
        // Проверяем успешность авторизации
        await expect(authPage.elementWelcome).toBeVisible()
        await expect(authPage.elementWelcome).toHaveText('Welcome likhitha!')
    })
    
    test('Ввести невалидные данные в поля username и password, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{
        // Очищаем поле и вводим username
        await authPage.clickUsernameFieldAndClear()
        await authPage.username.type('какой-то юзер')
        // Очищаем поле и вводим password
        await authPage.clearPasswordFieldAndClear()
        await authPage.password.type('123456')
        // Нажимаем Login
        await authPage.clickButtonLogin()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести валидные данные в поле username, в password невалидные, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{
        // Очищаем поле и вводим username
        await authPage.clickUsernameFieldAndClear()
        await authPage.username.type('j2ee')
        // Очищаем поле и вводим password
        await authPage.clearPasswordFieldAndClear()
        await authPage.password.type('1234567890')
        // Нажимаем Login
        await authPage.clickButtonLogin()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести невалидные данные в поле username, в поле password валидные, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{
        // Очищаем поле и вводим username
        await authPage.clickUsernameFieldAndClear()
        await authPage.username.type('какой-то юзер')
        // Очищаем поле и вводим password
        await authPage.clearPasswordFieldAndClear()
        await authPage.password.type('j2ee')
        // Нажимаем Login
        await authPage.clickButtonLogin()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Не заполнять поля username и password, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{  
        // Очищаем поле username
        await authPage.clickUsernameFieldAndClear()
        // Очищаем поле password
        await authPage.clearPasswordFieldAndClear()
        // Нажимаем Login
        await authPage.clickButtonLogin()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести валидные данные в поле username и не заполнять поле password, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{   
        // Вводим username
        await authPage.clickUsernameFieldAndClear()
        await authPage.username.type('j2ee')
        // Очищаем поле password
        await authPage.clearPasswordFieldAndClear()
        // Нажимаем Login
        await authPage.clickButtonLogin()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Не заполнять поле username и ввести валидные данные в поле password, нажать на Login → ошибка, авторизация не успешна', async({authPage})=>{   
        // Очищаем поле username
        await authPage.clickUsernameFieldAndClear()
        // Очищаем поле и вводим password
        await authPage.clearPasswordFieldAndClear()
        await authPage.password.type('j2ee')
        // Нажимаем Login
        await authPage.clickButtonLogin()
        // Проверяем ошибку при авторизации
        await expect(authPage.elementLoginFailed).toBeVisible()
        await expect(authPage.elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    });
