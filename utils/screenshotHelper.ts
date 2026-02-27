import { Page, test } from '@playwright/test';

export async function takeStepScreenshot(
    page: Page,
    stepName: string
) {
    const filePath = `test-results/${Date.now()}-${stepName}.png`;

    await page.screenshot({
        path: filePath,
        fullPage: true
    });

    await test.info().attach(stepName, {
        path: filePath,
        contentType: 'image/png'
    });
}