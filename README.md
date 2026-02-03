# PlayWright-Basic-with-Java-Script
At a glance


1. Annotation

What: A way to add metadata or notes to tests (like marking a test as @smoke or @regression).

When to use: When you want to categorize, skip, or tag tests for specific runs.

2. Assertion

What: Statements that check if your app behaves as expected.

When to use: Always! After an action, to verify results (like expect(title).toBe("Home")).

3. Data Driven Testing (CSV / Other Sources)

What: Running the same test with multiple sets of data.

How to use: Read data from CSV, JSON, or Excel, and loop through each row in the test.

Why: Avoids writing multiple similar tests and covers more scenarios.

4. Date Picker

What: UI component to select dates.

How to use: Locate the date input or picker element and set value programmatically or click calendar options.

5. Dropdown

What: Select element with multiple options.

How to use: Use Playwright’s selectOption method or click and choose option.

6. Failed Test Case Screenshot

What: Capture screenshots of failing tests.

Why: Helps debug issues visually.

How: Use page.screenshot({ path: 'screenshot.png' }) in the catch block or hooks.

7. Group Tests

What: Organize tests using describe blocks.

How it works: Group related tests for better structure and selective running.

8. Hooks

What: Functions that run before/after tests (beforeAll, afterEach, etc.).

How to use: Setup preconditions, cleanups, or repetitive actions.

9. Iframe Handling

What: Webpages inside other pages.

How to use: Use frameLocator in Playwright to access elements inside an iframe.

10. Keyboard Actions

What: Simulate keyboard inputs.

How to use: Use page.keyboard.type('text'), press('Enter'), etc.

11. Locator Strategy

What: Ways to find elements (id, class, text, xpath, css).

When to use: Choose the most stable and readable selector. Prefer data-test-id if available.

12. Mouse Actions

What: Click, hover, drag-and-drop, etc.

How to use: page.click(), page.hover(), page.dragAndDrop().

13. Parameterized Tests

What: Tests that run with multiple sets of input parameters.

Why: Reduce repetitive code and test more scenarios efficiently.

14. Environment Variables

What: Store configuration like URLs, credentials, or API keys.

When to use: When you want tests to run on different environments without changing code.

15. Record Feature

What: Playwright recorder captures actions automatically.

Why: Helps beginners generate scripts quickly and see selectors in action.

16. Screenshot Usage

What & Why: Capture the browser state at specific points for debugging and reporting.

17. Visual Testing

What: Compare screenshots with a baseline to detect UI changes.

When: Use in regression tests to catch unexpected UI shifts.
