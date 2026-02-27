import { Page } from '@playwright/test';

export async function smartClick(
    page: Page,
    primary: string,
    fallback: string
) {

    if (await page.locator(primary).isVisible())
        await page.click(primary);
    else
        await page.click(fallback);

}