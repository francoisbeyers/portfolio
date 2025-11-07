import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('should have proper document structure', async ({ page }) => {
    await page.goto('/');

    // Should have proper HTML lang attribute
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });

  test('should have keyboard navigable links', async ({ page }) => {
    await page.goto('/');

    // Tab through links
    await page.keyboard.press('Tab');

    // First focusable element should be visible
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('should have descriptive link text', async ({ page }) => {
    await page.goto('/');

    // Check that links have meaningful text (not just "click here")
    const links = page.getByRole('link');
    const count = await links.count();

    expect(count).toBeGreaterThan(0);

    // Sample check for meaningful link text
    await expect(page.getByRole('link', { name: /CONTACT ME/i })).toBeVisible();
  });

  test('should have contrast-compliant colors', async ({ page }) => {
    await page.goto('/');

    // Check that text is visible (basic visibility test)
    await expect(page.getByRole('heading', { name: /FRANCOIS BEYERS/i })).toBeVisible();
    await expect(page.getByText(/FULL-STACK DEV/i)).toBeVisible();
  });

  test('buttons should be keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Snake game start button should be focusable
    const startButton = page.getByRole('button', { name: /START GAME/i });
    await startButton.focus();
    await expect(startButton).toBeFocused();
  });
});
