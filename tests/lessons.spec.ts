import { test, expect } from '@playwright/test';

// Урок 1

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

// Урок 2

/*
test.only('Тестовый запуск1', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const locator = page.locator('.MenuContent', {hasText: 'Sign Up'})
    await expect(locator).toBeVisible()
})
*/