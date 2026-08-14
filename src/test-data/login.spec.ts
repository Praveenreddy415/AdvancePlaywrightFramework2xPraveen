import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {createLogger} from '../utils/logger';

const log = createLogger('login.spec.ts');
test.describe('TTACART - Login', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await test.step('Open login page', async () => {
            log.info('Opening the TTACart login page');
            await loginPage.open();
        });
    });
});