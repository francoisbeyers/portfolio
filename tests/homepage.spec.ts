import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully on mobile', async ({ page }) => {
    // Mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check main heading
    await expect(page.getByRole('heading', { name: /FRANCOIS BEYERS/i })).toBeVisible();

    // Check services section
    await expect(page.getByText(/SERVICES I OFFER/i)).toBeVisible();

    // Check Snake game section
    await expect(page.getByText(/SNAKE GAME/i)).toBeVisible();
  });

  test('should display visitor counter', async ({ page }) => {
    await page.goto('/');

    // Visitor counter should be visible
    await expect(page.getByText(/VISITORS:/i)).toBeVisible();
  });

  test('should have working navigation to services', async ({ page }) => {
    await page.goto('/');

    // Click on services button
    await page.getByRole('link', { name: /SEE ALL SERVICES/i }).click();

    // Should navigate to services page
    await expect(page).toHaveURL(/\/services/);
  });

  test('should display retro animated marquee', async ({ page }) => {
    await page.goto('/');

    // Marquee should be visible
    await expect(page.getByText(/WELCOME TO MY RETRO PORTFOLIO/i)).toBeVisible();
  });

  test('should show service cards on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check for service cards
    await expect(page.getByText(/SEO & MARKETING/i)).toBeVisible();
    await expect(page.getByText(/WORDPRESS DEV/i)).toBeVisible();
    await expect(page.getByText(/AI CONTENT/i)).toBeVisible();
  });

  test('should have accessible heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Check proper heading structure
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();

    const h2s = page.getByRole('heading', { level: 2 });
    await expect(h2s.first()).toBeVisible();
  });
});
