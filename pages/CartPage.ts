import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) { }

    async openCart() {

        const cartBtn = this.page.locator('#cartur');

        await expect(cartBtn).toBeVisible();
        await cartBtn.click();

        // Cart page validation
        await expect(
            this.page.getByRole('button', { name: 'Place Order' })
        ).toBeVisible();
    }

    async placeOrder() {

        const placeOrderBtn = this.page.getByRole('button', { name: 'Place Order' });

        await expect(placeOrderBtn).toBeVisible();
        await placeOrderBtn.click();

        // Order modal visible
        await expect(
            this.page.locator('#orderModal')
        ).toBeVisible();
    }
}