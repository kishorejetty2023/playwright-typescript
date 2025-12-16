import { Page, Locator } from '@playwright/test';
import { AdminPage } from './Admin/admin.page';
import { ProcessingPage } from './Processing/processing.page';
import { HomePage } from './home.page';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get getTitle(): Locator {
    return this.page.locator('title');
  }
  get adminTab(): Locator {
    return this.page.getByRole('button', { name: 'Admin' });
  }

  get processTab(): Locator {
    return this.page.getByRole('button', { name: 'Process' });
  }

  get loadingSpinner(): Locator {
    return this.page.locator('.loading-spinner');
  }

  get nextPageButton(): Locator {
    return this.page.getByRole('button', { name: 'Next page' });
  }

  get previousPageButton(): Locator {
    return this.page.getByRole('button', { name: 'Previous page' });
  }

  get lastPageButton(): Locator {
    return this.page.getByRole('button', { name: 'Last page' });
  }

  get firstPageButton(): Locator {
    return this.page.getByRole('button', { name: 'First page' });
  }

  get homeTab(): Locator {
    return this.page.getByRole('button', { name: 'Home' });
  }

  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async type(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  async waitForSelector(selector: string) {
    this.page.waitForSelector(selector);
  }
  async goToAdminPage(): Promise<AdminPage> {
    await this.adminTab.click();
    return new AdminPage(this.page);
  }
  async goToProcessPage(): Promise<ProcessingPage> {
    await this.processTab.click();
    return new ProcessingPage(this.page);
  }
  async goToHomePage(): Promise<HomePage> {
    await this.homeTab.click();
    return new HomePage(this.page);
  }
}
