import { Page, expect } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) { }

    async fillOrderDetails(data: any) {

        await expect(this.page.locator('#orderModal')).toBeVisible();

        await this.page.locator('#name').fill(data.name);
        await this.page.locator('#country').fill(data.country);
        await this.page.locator('#city').fill(data.city);
        await this.page.locator('#card').fill(data.card);
        await this.page.locator('#month').fill(data.month);
        await this.page.locator('#year').fill(data.year);
    }

    async purchase() {

        const purchaseBtn = this.page.locator('text=Purchase');

        await expect(purchaseBtn).toBeVisible();
        await purchaseBtn.click();

        // Confirmation popup validation
        await expect(
            this.page.locator('.sweet-alert')
        ).toBeVisible();
    }
}