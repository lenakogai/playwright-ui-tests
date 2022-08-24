import { test, expect } from '@playwright/test';

// Тест из урока

/*
test('Тестовый запуск1', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const locator = page.locator('[id="Search"]')
    await expect(locator).toBeVisible()
    await locator.click()
    await locator.type('Давай мясо!')
    const search = page.locator('[class="input-group-button"]').last()
    await expect(search).toBeVisible()
    await expect(locator).toHaveText('Search')
})
*/








// Домашнее задание

// Задание 1

test('Проверка url страницы авторизации', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')

})


// Задание 2

test('Наличие поля username', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    const locator = page.locator('[name="username"]')
    await expect(locator).toBeVisible()
})

test('Наличие поля password', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    const locator = page.locator('[name="password"]')
    await expect(locator).toBeVisible()
})

test('Наличие кнопки Login', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    const locator = page.locator('[class="button-bar"]').last()
    await expect(locator).toBeVisible()
})

test('Наличие панели регистрации', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    const locator = page.locator('[class="panel register"]')
    await expect(locator).toBeVisible()
})


// Задание 3

test('Ввести валидные данные в поля username и password, нажать на Login → авторизация успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
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

test('Ввести невалидные данные в поля username и password, нажать на Login → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
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
})

test('Ввести валидные данные в поле username, в password невалидные, нажать на Login → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
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
})

test('Ввести невалидные данные в поле username, в поле password валидные, нажать на Login → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
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
})

test('Не заполнять поля username и password, нажать на Login → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
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
})

test('Ввести валидные данные в поле username и не заполнять поле password, нажать на Login → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
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
})

test('Не заполнять поле username и ввести валидные данные в поле password, нажать на Login → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
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
})
