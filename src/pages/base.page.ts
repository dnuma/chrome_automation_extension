import type { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

    const searchTerm = "Playwright";
  }

}