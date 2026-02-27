import { Page, expect } from '@playwright/test';

export class ProductPage {

    constructor(private page: Page) { }

    async selectProduct() {
        await this.page.click('text=Samsung galaxy s6');


        // Validate product page opened
        await expect(
            this.page.locator('text=Add to cart')
        ).toBeVisible();
    }

    async addToCart() {

        // Handle alert popup
        this.page.once('dialog', dialog => dialog.accept());

        const addToCartBtn = this.page.locator('text=Add to cart');

        await expect(addToCartBtn).toBeVisible();
        await addToCartBtn.click();
    }
}