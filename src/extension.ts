import * as vscode from 'vscode';

class TestCaseCodeLensProvider implements vscode.CodeLensProvider {
  public provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
    const codeLenses: vscode.CodeLens[] = [];
    const regex = /\[TC-(\d+)\]/g; // Adjusted regex to capture only numbers
    const text = document.getText();
    let matches: RegExpExecArray | null;

    while ((matches = regex.exec(text)) !== null) {
      const match = matches[0]; // Full match, e.g., [TC-1234]
      const lineNumber = document.positionAt(matches.index).line;
      const line = document.lineAt(lineNumber);
      const numberPart = matches[1]; // Captured number part, e.g., 1234

      const range = new vscode.Range(lineNumber, 0, lineNumber, line.text.length); // Adjusted to create a range covering the start of the line
      const command: vscode.Command = {
        title: `Open [TC-${numberPart}]`, // Text that will appear on the CodeLens
        command: "cypressTestCodelens.openTestCase", // Command to execute
        arguments: [numberPart], // Passing only the number part
      };

      codeLenses.push(new vscode.CodeLens(range, command));
    }

    return codeLenses;
  }
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.languages.registerCodeLensProvider({ scheme: 'file', language: 'javascript' }, new TestCaseCodeLensProvider()));

  let disposable = vscode.commands.registerCommand('cypressTestCodelens.openTestCase', (testCaseNumber: string) => {
    const baseUrl = 'https://www.github.com/shoptet/cms4/issues/';
    const url = `${baseUrl}${testCaseNumber}`; // Using only the number part for URL
    vscode.env.openExternal(vscode.Uri.parse(url))
      .then(success => {
        if (!success) {
          vscode.window.showErrorMessage(`Failed to open ${url}`);
        }
      });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
