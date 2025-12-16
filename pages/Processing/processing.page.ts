import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base.page';

export class ProcessingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get getHeader(): Locator {
    return this.page.locator('h1, [role="heading"]');
  }
}
