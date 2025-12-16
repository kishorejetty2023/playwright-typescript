import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { HomePage } from './home.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getUsernameInput() {
    return this.page.locator('input[name="username"]');
  }

  async getPasswordInput() {
    return this.page.locator('input[name="password"]');
  }

  async getLoginButton() {
    return this.page.locator('button[type="submit"]');
  }

  async getErrorMessage() {
    return this.page.locator('.error-message');
  }

  async login(username: string, password: string): Promise<HomePage> {
    await (await this.getUsernameInput()).fill(username);
    await (await this.getPasswordInput()).fill(password);
    await (await this.getLoginButton()).click();
    return new HomePage(this.page);
  }
}
