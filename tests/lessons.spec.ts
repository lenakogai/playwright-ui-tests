import { test, expect, _baseTest } from '@playwright/test';

// Урок 3

test('Текстовый селектор', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const signIn = page.locator('text=Sign In')
    await expect(signIn).toBeVisible()
    await expect(signIn).toHaveText('Sign In')
})

test('CSS селектор с id', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const logo = page.locator('#Logo')
    await expect(logo).toBeVisible()
})

test('CSS селектор с class', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const logoClass = page.locator('.grid-container').nth(4)
    await expect(logoClass).toBeVisible()
})

test('CSS селектор-атрибут', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const masthead = page.locator('[id="masthead"]')
    await expect(masthead).toBeVisible()
})

test('Вложенный элемент. Фильтрация по тексту', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const search = page.locator('.input-group-button', {hasText:'Search'})
    await expect(search).toBeVisible()
})

test('Вложенный элемент. Фильтрация по другому локатору', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const placeholder = page.locator('#Search', {has: page.locator('[placeholder="Product Search"]')})
    await expect(placeholder).toBeVisible()
})

test('Вложенный элемент. Обращение к дочернему элементу', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const searchToClass = page.locator('[id="Search"]>>[class="input-group-field"]')
    await expect(searchToClass).toBeVisible()
})

test.only('Вложенный элемент. Проверка наличия атрибутов через функцию toHaveAttribute()', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/catalog/')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/catalog/')
    const search = page.locator('[id="Search"]')
    await expect (search).toBeVisible()
    const searchToClass = page.locator('[id="Search"]>>[class="input-group-field"]')
    await expect(searchToClass).toHaveAttribute('placeholder','Product Search')
})