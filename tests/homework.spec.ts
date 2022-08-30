import { test, expect } from '@playwright/test';

test.describe('Урок 3: домашнее задание #2', () => {

// Задание 1
test('Селекторы: текст', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    // Селектор для элемента Fish
    const fish = page.locator('text=Fish').nth(0)
    await expect(fish).toBeVisible()
    await expect(fish).toHaveText('Fish')
    // Селектор для элемента Dogs
    const dogs = page.locator('text=Dogs').nth(0)
    await expect(dogs).toBeVisible()
    await expect(dogs).toHaveText('Dogs')
    // Селектор для элемента Reptiles
    const reptiles = page.locator('text=Reptiles').nth(0)
    await expect(reptiles).toBeVisible()
    await expect(reptiles).toHaveText('Reptiles')
    // Селектор для элемента Cats
    const cats = page.locator('text=Cats').nth(0)
    await expect(cats).toBeVisible()
    await expect(cats).toHaveText('Cats')    
    // Селектор для элемента Birds
    const birds = page.locator('text=Birds').nth(0)
    await expect(birds).toBeVisible()
    await expect(birds).toHaveText('Birds')  
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
    const navigationClass = page.locator('.grid-container').nth(4)
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