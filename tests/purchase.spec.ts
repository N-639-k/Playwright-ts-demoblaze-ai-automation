import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { generateUser } from '../utils/aiDataGenerator';
import { analyzeFailure } from '../utils/aiFailureLogger';

test('AI Powered Purchase Flow', async ({ page }) => {

  try {

    const login = new LoginPage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.open();
    await login.login('demo', 'demo');

    await product.selectProduct();
    await product.addToCart();

    await cart.openCart();
    await cart.placeOrder();

    const user = generateUser();
    await checkout.fillOrderDetails(user);
    await checkout.purchase();

  }
  catch (err) {
    await analyzeFailure(err);
    throw err;
  }

});