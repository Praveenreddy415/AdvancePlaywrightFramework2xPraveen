# Advanced Playwright Automation Framework 2X

TypeScript-based Playwright automation framework scaffold for UI and API test automation. The project is organized to support page objects, reusable fixtures, test data, API clients, utilities, and separate test suites.

## Technology Stack

- [Playwright Test](https://playwright.dev/) for browser automation and test execution
- TypeScript and Node.js
- `dotenv` for environment configuration
- `@faker-js/faker` for generated test data
- `csv-parse` and `xlsx` for data-driven testing
- `ajv` and `ajv-formats` for JSON schema validation
- `jsonpath-plus` for JSON response and payload queries
- `winston` for application and test logging
- `allure-playwright` for Allure reporting integration

## Prerequisites

- Node.js 18 or later
- npm
- Playwright browser binaries

Install the project dependencies and browsers:

```bash
npm install
npx playwright install
```

## Project Structure

```text
.
├── docs/                    # Framework and supporting documentation
├── rules/                   # Project-specific automation rules
├── src/
│   ├── api/                 # API clients and request helpers
│   ├── components/          # Reusable UI component objects
│   ├── fixtures/            # Shared Playwright fixtures
│   ├── pages/               # Page Object Model classes
│   ├── test-data/           # CSV, XLSX, JSON, and other test data
│   └── utils/               # Shared utilities, logging, and reporters
├── tests/
│   ├── api/                 # API test suites
│   ├── e2e/                 # End-to-end test suites
│   ├── smoke/               # Smoke test suites
│   └── example.spec.ts      # Example Playwright test
├── .env                    # Local environment values; do not commit
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.ts
```

## Environment Configuration

Create a local `.env` file in the project root. Keep credentials and other secrets local; `.env` is excluded by `.gitignore`.

Example:

```dotenv
TTA_ENV=qa
BASE_URL=
QA_BASE_URL=https://example-qa.test
STG_BASE_URL=https://example-staging.test
PROD_BASE_URL=https://example.test
DEV_BASE_URL=http://localhost:3000
API_BASE_URL=https://example-api.test
LOG_LEVEL=info
TEST_ENV=QA
TEST_AUTHOR=YourName
USERNAME=your-username
PASSWORD=your-password
```

`BASE_URL` takes precedence when it is set. Otherwise, `TTA_ENV` selects the target environment. Supported values include `qa`, `dev` or `local`, `stg`, `stage` or `staging`, `prod` or `production`, and `api`.

## Running Tests

Run the configured Playwright test suite:

```bash
npx playwright test
```

Useful commands:

```bash
npx playwright test --headed
npx playwright test --project=chromium
npx playwright test tests/example.spec.ts
npx playwright test --debug
```

The configuration enables screenshots, video, and traces. Test retries are enabled automatically in CI through the `CI` environment variable.

## Reports

Open the Playwright HTML report after a test run:

```bash
npx playwright show-report
```

The configured reporters include the HTML report, console list output, and the custom reporter at `src/utils/CustomReporter.ts` when that reporter is present.

Allure reporting is available through the installed `allure-playwright` package. Generate results with an Allure reporter configuration, then serve the report with the Allure command-line tool:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

## Contributing

1. Add page objects, components, fixtures, API clients, and utilities under their corresponding `src/` directories.
2. Place tests in `tests/api`, `tests/e2e`, or `tests/smoke`.
3. Keep test data in `src/test-data` and sensitive values in `.env`.
4. Run the relevant Playwright tests before committing changes.

## Repository

GitHub: <https://github.com/Praveenreddy415/AdvancePlaywrightFramework2xPraveen>