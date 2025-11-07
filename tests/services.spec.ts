import { test, expect } from '@playwright/test';

test.describe('Services Pages', () => {
  test('should load services page', async ({ page }) => {
    await page.goto('/services');

    // Page should load successfully
    await expect(page.getByRole('heading', { name: /Services/i })).toBeVisible();
  });

  test('should display all service cards', async ({ page }) => {
    await page.goto('/services');

    // Check for all 6 services
    await expect(page.getByText(/SEO & MARKETING/i)).toBeVisible();
    await expect(page.getByText(/WORDPRESS DEV/i)).toBeVisible();
    await expect(page.getByText(/AI CONTENT/i)).toBeVisible();
    await expect(page.getByText(/AI AUTOMATION/i)).toBeVisible();
    await expect(page.getByText(/WEB DEVELOPMENT/i)).toBeVisible();
    await expect(page.getByText(/CONSULTING/i)).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/services');

    // Services should be displayed in single column on mobile
    await expect(page.getByText(/SEO & MARKETING/i)).toBeVisible();
  });

  test('should navigate back to home from services', async ({ page }) => {
    await page.goto('/services');

    // Click home link in navigation
    await page.getByRole('link', { name: /HOME/i }).click();

    // Should be back at homepage
    await expect(page).toHaveURL('/');
  });
});
