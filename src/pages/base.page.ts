import type { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  readonly googleSearchBox: Locator;1
  readonly googleSearchButton: Locator;
  readonly googleSearchResult: Locator;

  readonly duckSearchBox: Locator;
  readonly duckSearchResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.googleSearchBox = this.page.locator(`[title="Search"]`);
    this.googleSearchButton = this.page.locator(`input[aria-label="Google Search"]`).first();
    this.googleSearchResult = this.page.locator('h3').first();

    this.duckSearchBox = this.page.locator(`#searchbox_input`);
    this.duckSearchResult = this.page.locator(`h2`).first();
  }

  /**
   * Searches in Google
   * @param {string} textToSearch - The text to be searched.
   */
  async searchGoogle(textToSearch: string): Promise<void> {
    await this.googleSearchBox.fill(textToSearch);
    await this.googleSearchButton.click();
  }

  /**
   * Searches in Duck Duck Go
   * @param {string} textToSearch - The text to be searched.
   */
  async searchDuck(textToSearch: string): Promise<void> {
    await this.duckSearchBox.fill(textToSearch);
    await this.page.keyboard.press('Enter');
  }

}