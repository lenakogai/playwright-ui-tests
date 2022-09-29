import { test, expect } from '@playwright/test';

test.beforeEach( async({page})=>{    
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
})

test.describe('Урок 2: домашнее задание #1', () => {

    // Задание 1
    test('Проверка url страницы авторизации', async({page})=>{
        await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    })
    
    // Задание 2
    test('Наличие элементов на странице', async({page})=>{
        const fieldUsername = page.locator('[name="username"]')
        const fieldPassword = page.locator('[name="password"]')
        const buttonLogin = page.locator('[class="button-bar"]').last()
        const panelRegister = page.locator('[class="panel register"]')
        await expect(fieldUsername).toBeVisible()
        await expect(fieldPassword).toBeVisible()
        await expect(buttonLogin).toBeVisible()
        await expect(panelRegister).toBeVisible()  
        const loginText = page.locator('text=Login')
        await expect(loginText).toHaveCSS('color','rgb(254, 254, 254)')
        await expect(loginText).toHaveCSS('background-color','rgb(81, 97, 105)')
    })
    
    // Задание 3
    test('Ввести валидные данные в поля username и password, нажать на Login → авторизация успешна', async({page})=>{
        // Очищаем поле и вводим username
        const fieldUsername = page.locator('[name="username"]')
        await expect(fieldUsername).toBeVisible()
        await fieldUsername.click()
        await fieldUsername.press('Control+A')
        await fieldUsername.press('Backspace')
        await fieldUsername.type('j2ee')
        // Очищаем поле и вводим password
        const fieldPassword = page.locator('[name="password"]')
        await expect(fieldPassword).toBeVisible()
        await fieldPassword.click()
        await fieldPassword.press('Control+A')
        await fieldPassword.press('Backspace')
        await fieldPassword.type('j2ee')
        // Нажимаем Login
        const buttonLogin = page.locator('[class="button-bar"]').last()
        await expect(buttonLogin).toBeVisible()
        await buttonLogin.click()
        // Проверяем успешность авторизации
        const elementWelcome = page.locator('[id="WelcomeContent"]')
        await expect(elementWelcome).toBeVisible()
        await expect(elementWelcome).toHaveText('Welcome john!')
    })
    
    test('Ввести невалидные данные в поля username и password, нажать на Login → ошибка, авторизация не успешна', async({page})=>{
        // Очищаем поле и вводим username
        const fieldUsername = page.locator('[name="username"]')
        await expect(fieldUsername).toBeVisible()
        await fieldUsername.click()
        await fieldUsername.press('Control+A')
        await fieldUsername.press('Backspace')
        await fieldUsername.type('какой-то юзер')
        // Очищаем поле и вводим password
        const fieldPassword = page.locator('[name="password"]')
        await expect(fieldPassword).toBeVisible()
        await fieldPassword.click()
        await fieldPassword.press('Control+A')
        await fieldPassword.press('Backspace')
        await fieldPassword.type('123456')
        // Нажимаем Login
        const buttonLogin = page.locator('[class="button-bar"]').last()
        await expect(buttonLogin).toBeVisible()
        await buttonLogin.click()
        // Проверяем ошибку при авторизации
        const elementLoginFailed = page.locator('[class="panel failed"]')
        await expect(elementLoginFailed).toBeVisible()
        await expect(elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести валидные данные в поле username, в password невалидные, нажать на Login → ошибка, авторизация не успешна', async({page})=>{

        // Очищаем поле и вводим username
        const fieldUsername = page.locator('[name="username"]')
        await expect(fieldUsername).toBeVisible()
        await fieldUsername.click()
        await fieldUsername.press('Control+A')
        await fieldUsername.press('Backspace')
        await fieldUsername.type('j2ee')
        // Очищаем поле и вводим password
        const fieldPassword = page.locator('[name="password"]')
        await expect(fieldPassword).toBeVisible()
        await fieldPassword.click()
        await fieldPassword.press('Control+A')
        await fieldPassword.press('Backspace')
        await fieldPassword.type('1234567890')
        // Нажимаем Login
        const buttonLogin = page.locator('[class="button-bar"]').last()
        await expect(buttonLogin).toBeVisible()
        await buttonLogin.click()
        // Проверяем ошибку при авторизации
        const elementLoginFailed = page.locator('[class="panel failed"]')
        await expect(elementLoginFailed).toBeVisible()
        await expect(elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести невалидные данные в поле username, в поле password валидные, нажать на Login → ошибка, авторизация не успешна', async({page})=>{
    
        // Очищаем поле и вводим username
        const fieldUsername = page.locator('[name="username"]')
        await expect(fieldUsername).toBeVisible()
        await fieldUsername.click()
        await fieldUsername.press('Control+A')
        await fieldUsername.press('Backspace')
        await fieldUsername.type('какой-то юзер')
        // Очищаем поле и вводим password
        const fieldPassword = page.locator('[name="password"]')
        await expect(fieldPassword).toBeVisible()
        await fieldPassword.click()
        await fieldPassword.press('Control+A')
        await fieldPassword.press('Backspace')
        await fieldPassword.type('j2ee')
        // Нажимаем Login
        const buttonLogin = page.locator('[class="button-bar"]').last()
        await expect(buttonLogin).toBeVisible()
        await buttonLogin.click()
        // Проверяем ошибку при авторизации
        const elementLoginFailed = page.locator('[class="panel failed"]')
        await expect(elementLoginFailed).toBeVisible()
        await expect(elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Не заполнять поля username и password, нажать на Login → ошибка, авторизация не успешна', async({page})=>{
    
        // Очищаем поле username
        const fieldUsername = page.locator('[name="username"]')
        await expect(fieldUsername).toBeVisible()
        await fieldUsername.click()
        await fieldUsername.press('Control+A')
        await fieldUsername.press('Backspace')
        // Очищаем поле password
        const fieldPassword = page.locator('[name="password"]')
        await expect(fieldPassword).toBeVisible()
        await fieldPassword.click()
        await fieldPassword.press('Control+A')
        await fieldPassword.press('Backspace')
        // Нажимаем Login
        const buttonLogin = page.locator('[class="button-bar"]').last()
        await expect(buttonLogin).toBeVisible()
        await buttonLogin.click()
        // Проверяем ошибку при авторизации
        const elementLoginFailed = page.locator('[class="panel failed"]')
        await expect(elementLoginFailed).toBeVisible()
        await expect(elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Ввести валидные данные в поле username и не заполнять поле password, нажать на Login → ошибка, авторизация не успешна', async({page})=>{
    
        // Вводим username
        const fieldUsername = page.locator('[name="username"]')
        await expect(fieldUsername).toBeVisible()
        await fieldUsername.click()
        await fieldUsername.press('Control+A')
        await fieldUsername.press('Backspace')
        await fieldUsername.type('j2ee')
        // Очищаем поле password
        const fieldPassword = page.locator('[name="password"]')
        await expect(fieldPassword).toBeVisible()
        await fieldPassword.click()
        await fieldPassword.press('Control+A')
        await fieldPassword.press('Backspace')
        // Нажимаем Login
        const buttonLogin = page.locator('[class="button-bar"]').last()
        await expect(buttonLogin).toBeVisible()
        await buttonLogin.click()
        // Проверяем ошибку при авторизации
        const elementLoginFailed = page.locator('[class="panel failed"]')
        await expect(elementLoginFailed).toBeVisible()
        await expect(elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    
    test('Не заполнять поле username и ввести валидные данные в поле password, нажать на Login → ошибка, авторизация не успешна', async({page})=>{
    
        // Очищаем поле username
        const fieldUsername = page.locator('[name="username"]')
        await expect(fieldUsername).toBeVisible()
        await fieldUsername.click()
        await fieldUsername.press('Control+A')
        await fieldUsername.press('Backspace')
        // Очищаем поле и вводим password
        const fieldPassword = page.locator('[name="password"]')
        await expect(fieldPassword).toBeVisible()
        await fieldPassword.click()
        await fieldPassword.press('Control+A')
        await fieldPassword.press('Backspace')
        await fieldPassword.type('j2ee')
        // Нажимаем Login
        const buttonLogin = page.locator('[class="button-bar"]').last()
        await expect(buttonLogin).toBeVisible()
        await buttonLogin.click()
        // Проверяем ошибку при авторизации
        const elementLoginFailed = page.locator('[class="panel failed"]')
        await expect(elementLoginFailed).toBeVisible()
        await expect(elementLoginFailed).toHaveText('Invalid username or password.  Signon failed.')
    })
    });

test.describe('Урок 3: домашнее задание #2', () => {

    // Задание 1
    test('Селекторы: текст', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/catalog/')
        await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
        // Селектор для элемента Fish
        const fish = page.locator('text=Fish').nth(0)
        await expect(fish).toBeVisible()
        // Селектор для элемента Dogs
        const dogs = page.locator('text=Dogs').nth(0)
        await expect(dogs).toBeVisible()
        // Селектор для элемента Reptiles
        const reptiles = page.locator('text=Reptiles').nth(0)
        await expect(reptiles).toBeVisible()
        // Селектор для элемента Cats
        const cats = page.locator('text=Cats').nth(0)
        await expect(cats).toBeVisible()   
        // Селектор для элемента Birds
        const birds = page.locator('text=Birds').nth(0)
        await expect(birds).toBeVisible() 
    })

    // Задание 2
    test('Селекторы: CSS ID', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/catalog/')
        await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
        const navigation = page.locator('#QuickLinks')
        await expect(navigation).toBeVisible()
    })
    test('Селекторы: CSS Class', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/catalog/')
        await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
        const navigationClass = page.locator('.grid-container').nth(2)
        await expect(navigationClass).toBeVisible()
    })

    // Задание 3
    test('Фильтрация по тексту', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/account/signonForm')
        await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
        const loginButton = page.locator('.button-bar', {hasText:'Login'})
        await expect(loginButton).toBeVisible()
    })
    test('Фильтрация по другому локатору', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/account/signonForm')
        await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
        const signonPanel = page.locator('#Signon', {has: page.locator('[class="panel"]')})
        await expect(signonPanel).toBeVisible()
    })
    test('Обращение к дочернему элементу', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/account/signonForm')
        await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
        const headerMenu = page.locator('[id="Header"]>>[id="Menu"]')
        await expect(headerMenu).toBeVisible()
    })
    });

test.describe('Урок 4: домашнее задание #5', () => {
    test.beforeEach( async({page})=>{    
        // Очищаем поле и вводим username
        const fieldUsername = page.locator('[name="username"]')
        await expect(fieldUsername).toBeVisible()
        await fieldUsername.click()
        await fieldUsername.press('Control+A')
        await fieldUsername.press('Backspace')
        await fieldUsername.type('j2ee')
        // Очищаем поле и вводим password
        const fieldPassword = page.locator('[name="password"]')
        await expect(fieldPassword).toBeVisible()
        await fieldPassword.click()
        await fieldPassword.press('Control+A')
        await fieldPassword.press('Backspace')
        await fieldPassword.type('j2ee')
        // Нажимаем Login
        const buttonLogin = page.locator('[class="button-bar"]').last()
        await expect(buttonLogin).toBeVisible()
        await buttonLogin.click()
        // Проверяем успешность авторизации
        const elementWelcome = page.locator('[id="WelcomeContent"]')
        await expect(elementWelcome).toBeVisible()
    })

    // Задание 1

    test('Проверка цветов элементов Pet Favorites', async({page})=>{  
        const petFavoritesText = page.locator('text=Pet Favorites')
        await expect(petFavoritesText).toHaveCSS('color','rgb(10, 10, 10)')
        await expect(petFavoritesText).toHaveCSS('background-color','rgba(0, 0, 0, 0)')
        const shopText = page.locator('text=Shop for more of your favorite pets here.')
        await expect(shopText).toHaveCSS('color','rgb(10, 10, 10)')
        await expect(shopText).toHaveCSS('background-color','rgba(0, 0, 0, 0)')
        const manxText = page.locator('text=Manx')
        await expect(manxText).toHaveCSS('color','rgb(0, 136, 204)')
        await expect(manxText).toHaveCSS('background-color','rgba(0, 0, 0, 0)')
        const persianText = page.locator('text=Persian')
        await expect(persianText).toHaveCSS('color','rgb(0, 136, 204)')
        await expect(persianText).toHaveCSS('background-color','rgba(0, 0, 0, 0)')
    })

    // Задание 2

    test('Проверка цветов элементов Menu Content', async({page})=>{  
        const myOrdersText = page.locator('text=My Orders')
        await expect(myOrdersText).toHaveCSS('color','rgb(234, 172, 0)')
        await expect(myOrdersText).toHaveCSS('background-color','rgba(0, 0, 0, 0)')
        const myAccountText = page.locator('text=My Account')
        await expect(myAccountText).toHaveCSS('color','rgb(234, 172, 0)')
        await expect(myAccountText).toHaveCSS('background-color','rgba(0, 0, 0, 0)')
        const mySignOutText = page.locator('text=Sign Out')
        await expect(mySignOutText).toHaveCSS('color','rgb(234, 172, 0)')
        await expect(mySignOutText).toHaveCSS('background-color','rgba(0, 0, 0, 0)')
        const questionMarkText = page.locator('text=?')
        await expect(questionMarkText).toHaveCSS('color','rgb(234, 172, 0)')
        await expect(questionMarkText).toHaveCSS('background-color','rgba(0, 0, 0, 0)')
    })
});