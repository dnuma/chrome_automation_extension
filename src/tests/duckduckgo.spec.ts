import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';

test.beforeEach(async ({page}) => {
  const title = "DuckDuckGo — Privacy, simplified."
  const url = "https://duckduckgo.com/";
  
  await page.goto(url);
  expect(page).toHaveTitle(title);
});

test.describe("Simple Duck Duck Go search and validation",
  {
    tag: "@duckduckgo"
  },
  () => {
    test("Search and asssert", async( { page }) => {
      const basePage = new BasePage(page);
      const searchTerm = "Playwright";

      await basePage.searchDuck(searchTerm);
      await expect(basePage.duckSearchResult).toContainText(searchTerm);     
    })
  }
)