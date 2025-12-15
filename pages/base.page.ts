import { Page, Locator } from '@playwright/test';

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
}