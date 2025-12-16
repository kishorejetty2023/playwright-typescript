import { Page } from '@playwright/test';
import { BasePage } from '../base.page';

export class AdminPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Add admin-specific locators here
  readonly adminDashboard = this.page.locator('[data-testid="admin-dashboard"]');
  readonly usersTable = this.page.locator('[data-testid="users-table"]');
  readonly settingsButton = this.page.locator('[data-testid="settings-btn"]');

  // Add admin-specific methods here
  async navigateToAdmin(): Promise<void> {
    await this.page.goto('/admin');
  }

  async viewUsers(): Promise<void> {
    await this.usersTable.click();
  }

  async openSettings(): Promise<void> {
    await this.settingsButton.click();
  }
}
