# Cypress Test Codelens

Cypress Test Codelens is a Visual Studio Code extension that enhances your experience when working with Cypress tests. It adds a CodeLens above each test case that contains a specific test case identifier (e.g., `[TC-1234]`), allowing you to quickly navigate to the corresponding issue or documentation by clicking on it.

## Features

- **Test Case Links**: Automatically detects test case identifiers in your Cypress test descriptions and provides a clickable link directly in the editor.
- **Quick Navigation**: Clicking on a CodeLens takes you to a configurable URL, such as a test case management tool or GitHub issue, based on the test case ID.
- **Customizable**: Easily configure the base URL for your project's test case management system or issue tracker.

## Installation

You can install the Cypress Test Codelens extension directly from the Visual Studio Code Marketplace:

1. Open VS Code.
2. Go to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for "Cypress Test Codelens".
4. Click on the "Install" button.

Alternatively, you can install it by launching the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing:

```
ext install your-publisher-name.cypress-test-codelens
```

Replace `your-publisher-name` with the actual publisher name you used when publishing the extension.

## Usage

After installing the extension, it will automatically detect test cases in your Cypress test files that match the pattern `[TC-XXXX]` in your `it` test descriptions. A CodeLens link labeled "Open Test Case" will appear above each detected test case.

Clicking on the CodeLens will open the corresponding URL in your default web browser, allowing you to quickly access the test case documentation or issue.

## Configuration

To customize the base URL for your project's test case management system or issue tracker, add the following settings to your `settings.json` file in VS Code:

```json
"cypressTestCodelens.baseUrl": "https://your-organization.test-management.com/issues/"
```
## Contributing

We welcome contributions and suggestions! If you'd like to contribute to the Cypress Test Codelens extension, please feel free to create a pull request or open an issue on our GitHub repository.

## License

This extension is licensed under the MIT License.
