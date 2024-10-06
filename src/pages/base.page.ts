import type { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly googleSearchBox: Locator;
  readonly googleSearchButton: Locator;
  readonly googleSearchResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.googleSearchBox = this.page.locator(`[title="Search"]`);
    this.googleSearchButton = this.page.locator(`input[aria-label="Google Search"]`).first();
    this.googleSearchResult = this.page.locator('h3').first();
  }

  /**
   * Searches in Google
   * @param {string} textToSearch - The text to be searched on Google.
   */
  async searchGoogle(textToSearch: string): Promise<void> {
    await this.googleSearchBox.fill(textToSearch);
    await this.googleSearchButton.click();
  }

}