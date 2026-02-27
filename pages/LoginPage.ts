import { Page, expect } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) { }

    async open() {
        await this.page.goto('https://demoblaze.com');
        await expect(this.page).toHaveTitle(/STORE/);
    }

    async login(username: string, password: string) {

        // Open login modal
        await this.page.locator('#login2').click();

        // Validate modal visible
        const usernameInput = this.page.locator('#loginusername');
        const passwordInput = this.page.locator('#loginpassword');

        await expect(usernameInput).toBeVisible();
        await expect(passwordInput).toBeVisible();

        // Fill credentials
        await usernameInput.fill(username);
        await passwordInput.fill(password);

        // Login click
        await this.page.locator('button[onclick="logIn()"]').click();

        // Simple locator validation (no success popup exists)
        await expect(
            this.page.locator('#nameofuser')
        ).toBeVisible();
    }
}
