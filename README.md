# Cypress Test Codelens

Cypress Test Codelens is a Visual Studio Code extension that enhances your experience when working with Cypress tests. It adds a CodeLens above each test case that contains a specific test case identifier (e.g., `[TC-1234]`), allowing you to quickly navigate to the corresponding issue or documentation by clicking on it.

## Features

- **Test Case Links**: Automatically detects test case identifiers in your Cypress test descriptions and provides a clickable link directly in the editor.
- **Quick Navigation**: Clicking on a CodeLens takes you to a configurable URL, such as a test case management tool or GitHub issue, based on the test case ID.

## Installation

You can install the Cypress Test Codelens extension directly from the Visual Studio Code Marketplace:

1. Open VS Code.
2. Go to the Extensions view by clicking on the square icon on the sidebar.
3. Search for "Test case lense".
4. Click on the "Install" button.

## Usage

After installing the extension, it will automatically detect test cases in your Cypress test files that match the pattern `[TC-XXXX]`. A CodeLens link labeled "Open [TC-XXXX]" will appear above each detected test case.

Clicking on the CodeLens will open the corresponding URL in your default web browser, allowing you to quickly access the test case documentation or issue.

## Contributing

We welcome contributions and suggestions! If you'd like to contribute to the Cypress Test Codelens extension, please feel free to create a pull request or open an issue on our GitHub repository.

## License

This extension is licensed under the MIT License.
