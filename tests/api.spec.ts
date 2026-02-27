import { test, expect } from '@playwright/test';

test('API Product List Validation', async ({ request }) => {

    const response = await request.get(
        'https://api.demoblaze.com/entries'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.Items.length).toBeGreaterThan(0);
});