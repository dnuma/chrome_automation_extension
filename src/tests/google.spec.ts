import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';

test.beforeEach(async ({page}) => {
  const title = "Google"
  const url = "https://www.google.com/";
  
  await page.goto(url);
  expect(page).toHaveTitle(title);
});

test.describe("Simple Google search and validation",
  {
    tag: "@google"
  },
  () => {
    test("Search and asssert", async( { page }) => {
      const basePage = new BasePage(page);
      const searchTerm = "Playwright";

      await basePage.searchGoogle(searchTerm);
      await expect(basePage.googleSearchResult).toContainText(searchTerm);     
    })
  }
)