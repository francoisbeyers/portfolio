import { test, expect } from '@playwright/test';

test.describe('Snake Game', () => {
  test('should display snake game on page', async ({ page }) => {
    await page.goto('/');

    // Game title should be visible
    await expect(page.getByText(/🐍 SNAKE GAME 🐍/i)).toBeVisible();

    // Start button should be visible
    await expect(page.getByRole('button', { name: /START GAME/i })).toBeVisible();
  });

  test('should start game when clicking start button', async ({ page }) => {
    await page.goto('/');

    // Click start button
    await page.getByRole('button', { name: /START GAME/i }).click();

    // Game should be running (start button should disappear)
    await expect(page.getByRole('button', { name: /START GAME/i })).not.toBeVisible({ timeout: 2000 });

    // Score should be displayed
    await expect(page.getByText(/SCORE:/i)).toBeVisible();
  });

  test('should display game on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Game should be visible and accessible on mobile
    await expect(page.getByText(/🐍 SNAKE GAME 🐍/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /START GAME/i })).toBeVisible();
  });

  test('should show instructions', async ({ page }) => {
    await page.goto('/');

    // Instructions should be visible
    await expect(page.getByText(/Arrow keys to move/i)).toBeVisible();
  });

  test('should display high score', async ({ page }) => {
    await page.goto('/');

    // High score should be displayed
    await expect(page.getByText(/HIGH:/i)).toBeVisible();
  });
});
