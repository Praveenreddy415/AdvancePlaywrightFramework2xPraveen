// Inbuilt fixtures are already available in this case. 

/**
 * test-base — the project's custom Playwright `test`, pre-wired with a fixture
 * for every TTACart Page Object.
 *
 * Instead of `new LoginPage(page)` in each spec, ask for the page you need and
 * it's handed over already constructed against the test's `page`:
 *
 *   import { test, expect } from '@fixtures/test-base';
 *
 *   test('add to cart', async ({ inventoryPage, cartPage }) => {
 *       await inventoryPage.open();
 *       await inventoryPage.addToCart('tta-bike-light');
 *       await cartPage.open();
 *       expect(await cartPage.rowCount()).toBe(1);
 *   });
 *
 * Plain page-object fixtures hand over constructed objects without navigating.
 * State fixtures (`invalidLogin`, `validLogin`, `loginWithInventory`, and
 * `loginWithSelectedItem`) perform reusable setup only when a test requests one.
 */

import { test as base, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { InventoryPage } from '@pages/InventoryPage';
import { CartPage } from '@pages/CartPage';
import { ItemDetailPage } from '@pages/ItemDetailPage';
import { CheckoutStepOnePage } from '@pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '@pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '@pages/CheckoutCompletePage';
import loginTestData from '@testdata/logintestdata.json';

type LoginRecord = {
    username: string;
    password: string;
};
export type InvalidLoginState = {
    loginPage: LoginPage;
    username: string;
};
export type SelectedItemState = {
    inventoryPage: InventoryPage;
    itemId: string;
};

type PageFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    itemDetailPage: ItemDetailPage;
    checkoutStepOnePage: CheckoutStepOnePage;
    checkoutStepTwoPage: CheckoutStepTwoPage;
    checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => use(new LoginPage(page)),
    inventoryPage: async ({ page }, use) => use(new InventoryPage(page)),
    cartPage: async ({ page }, use) => use(new CartPage(page)),
    itemDetailPage: async ({ page }, use) => use(new ItemDetailPage(page)),
    checkoutStepOnePage: async ({ page }, use) => use(new CheckoutStepOnePage(page)),
    checkoutStepTwoPage: async ({ page }, use) => use(new CheckoutStepTwoPage(page)),
    checkoutCompletePage: async ({ page }, use) => use(new CheckoutCompletePage(page)),
});

export { expect };
