import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';

test.beforeEach(async ({page}) => {
  const title = "Bing"
  const url = "https://www.bing.com/";
  
  await page.goto(url);
  expect(page).toHaveTitle(title);
});

test.describe("Simple Bing search and validation",
  {
    tag: "@bing"
  },
  () => {
    test("Search and asssert", async( { page }) => {
      const basePage = new BasePage(page);
      const searchTerm = "Playwright";

      await basePage.searchBing(searchTerm);
      await expect(basePage.bingSearchResult).toContainText(searchTerm);     
    })
  }
)