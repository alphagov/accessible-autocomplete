// @ts-check
import { test, expect } from '@playwright/test'

const { beforeEach, describe } = test

const basicExample = () => {
  /**
   * @type {import("playwright-core").Locator}
   */
  let $wrapper
  /**
   * @type {import("playwright-core").Locator}
   */
  let $input
  /**
   * @type {import("playwright-core").Locator}
   */
  let $menu

  beforeEach(async ({ page }) => {
    await page.reload()
    $wrapper = page.locator("#tt-default")
    $input = $wrapper.getByRole("combobox")
    $menu = $wrapper.getByRole("listbox")
  })

  describe('basic example', () => {
    test('should show the input', async ({ page }) => {
      await expect($input).toBeVisible()
    })

    test('should allow focusing the input', async () => {
      await $input.click()
      await expect($input).toBeFocused()
    })
    
    test('should display suggestions', async () => {
      await $input.click()
      await $input.fill('ita')
      await expect($menu).toBeVisible()
    })
    
    test('should set aria-selected to true on selected option and false on other options', async ({ page }) => {
      await $input.click()
      await $input.fill('ita')

      const $option1 = $menu.getByRole('option').nth(0)
      const $option2 = $menu.getByRole('option').nth(1)

      await page.keyboard.press('ArrowDown')
      await expect($option1).toHaveAttribute('aria-selected', 'true')
      await expect($option2).toHaveAttribute('aria-selected', 'false')

      await page.keyboard.press('ArrowDown')
      await expect($option1).toHaveAttribute('aria-selected', 'false')
      await expect($option2).toHaveAttribute('aria-selected', 'true')
    })

    test('should announce status changes using two alternately updated aria live regions', async () => {
      const $regionA = $wrapper.getByRole('status').nth(0)
      const $regionB = $wrapper.getByRole('status').nth(1)

      await expect($regionA).toBeEmpty()
      await expect($regionB).toBeEmpty()

      await $input.click()
      await $input.fill('a')

      // We can't tell which region will be used first, so wait for either to not be empty
      await expect($regionA.or($regionB).filter({ hasText: /\S/ })).toHaveCount(1)

      const regionAText = await $regionA.textContent()
    
      if (regionAText !== '') {
        await $input.fill('s')
        await expect($regionA).toBeEmpty()
        await expect($regionB).toHaveText(/results are available/)

        await $input.fill('h')
        await expect($regionB).toBeEmpty()
        await expect($regionA).toHaveText(/results are available/)
      } else {
        await $input.fill('s')
        await expect($regionB).toBeEmpty()
        await expect($regionA).toHaveText(/results are available/)

        await $input.fill('h')
        await expect($regionA).toBeEmpty()
        await expect($regionB).toHaveText(/results are available/)
      }
    })
  })

  describe('keyboard use', () => {
    test('should allow typing', async () => {
      await $input.click()
      await $input.fill('ita')
      await expect($input).toHaveValue('ita')
    })

    test('should allow selecting an option', async ({ page }) => {
      await $input.click()
      await $input.fill('ita')

      const $option1 = $menu.getByRole('option').nth(0)
      const $option2 = $menu.getByRole('option').nth(1)

      await page.keyboard.press('ArrowDown')
      await expect($menu).toBeVisible()
      await expect($input).not.toBeFocused()
      await expect($option1).toBeFocused()
      
      await page.keyboard.press('ArrowDown')
      await expect($menu).toBeVisible()
      await expect($input).toHaveValue('ita')
      await expect($option1).not.toBeFocused()
      await expect($option2).toBeFocused()
    })

    test('should allow confirming an option', async ({ page }) => {
      await $input.click()
      await $input.fill('ita')

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')
      await expect($input).toBeFocused()
      await expect($input).toHaveValue('Italy')
    })

    test('should redirect keypresses on an option to input', async ({ page }) => {
      await $input.click()
      await $input.fill('ita')

      const $option1 = $menu.getByRole('option').nth(0)

      await page.keyboard.press('ArrowDown')
      await expect($input).not.toBeFocused()
      await expect($option1).toBeFocused()

      await page.keyboard.type('l')
      await expect($input).toBeFocused()
      await expect($input).toHaveValue('ital')
    })
  })

  describe('mouse use', () => {
    test('should allow confirming an option', async () => {
      await $input.click()
      await $input.fill('ita')

      const $option1 = $menu.getByRole('option').nth(0)
      await $option1.click()

      await expect($input).toBeFocused()
      await expect($input).toHaveValue('Italy')
    })
  })
}

const customTemplatesExample = () => {
  describe('custom templates example', () => {
    /**
     * @type {import("playwright-core").Locator}
     */
    let $wrapper
    /**
     * @type {import("playwright-core").Locator}
     */
    let $input
    /**
     * @type {import("playwright-core").Locator}
     */
    let $menu

    beforeEach(async ({ page }) => {
      await page.reload()
      $wrapper = page.locator("#tt-customTemplates")
      $input = $wrapper.getByRole("combobox")
      $menu = $wrapper.getByRole("listbox")
    })

    describe('mouse use', () => {
      test('should allow confirming an option by clicking on child elements', async ({ browserName }) => {
        await $input.fill('uni')

        const $option1 = $menu.getByRole('option').nth(0)
        const $option1InnerElement = $option1.locator('strong')

        await $option1InnerElement.click({ force: true })
        await expect($input).toBeFocused()
        await expect($input).toHaveValue('United Kingdom')
      })
    })
  })
}

const classesPropsExamples = () => {
  /**
   * @type {import("playwright-core").Locator}
   */
  let $wrapper
  /**
   * @type {import("playwright-core").Locator}
   */
  let $input

  beforeEach(async ({ page }) => {
    await page.reload()
  })

  describe('classes properties', () => {
    test('should set `inputClasses` on both hint and input', async ({ page, browserName, isMobile }) => {
      // Skip this test in Safari where it's not available
      test.skip(isMobile && browserName === "webkit")

      $wrapper = page.locator("#tt-inputClasses")
      $input = $wrapper.getByRole("combobox")

      await expect($input).toContainClass('app-input')

      // Trigger the display of the hint
      await $input.fill('fra')

      const $hint = $wrapper.locator('.autocomplete__hint')
      await expect($hint).toBeVisible()
      await expect($hint).toContainClass('app-input')
    })

    test('should set `hintClasses` on the hint', async ({ page, browserName, isMobile }) => {
      // Skip this test in Safari where it's not available
      test.skip(isMobile && browserName === "webkit")

      $wrapper = page.locator("#tt-hintClasses")
      $input = $wrapper.getByRole("combobox")

      // Trigger the display of the hint
      await $input.fill('fra')

      const $hint = $wrapper.locator('.autocomplete__hint')
      await expect($hint).toBeVisible()
      await expect($hint).toContainClass('app-hint')
    })
  })
}

describe('Accessible Autocomplete', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('should have the right title', async ({ page }) => {
    expect(await page.title()).toBe('Accessible Autocomplete examples')
  })

  basicExample()
  customTemplatesExample()
  classesPropsExamples()
})

describe('Accessible Autocomplete Preact', () => {
  beforeEach(async ({ page }) => {
    await page.goto('preact')
  })

  test('should have the right title', async ({ page }) => {
    expect(await page.title()).toBe('Accessible Autocomplete Preact examples')
  })

  basicExample()
})

describe('Accessible Autocomplete React', () => {
  beforeEach(async ({ page }) => {
    await page.goto('react')
  })

  test('should have the right title', async ({ page }) => {
    expect(await page.title()).toBe('Accessible Autocomplete React examples')
  })

  basicExample()
})