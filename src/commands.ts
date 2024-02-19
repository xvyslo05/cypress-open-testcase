import * as vscode from 'vscode';

export function openTestCase(testCaseId: string) {
  // Logic to handle opening or navigating to the test case, possibly using testCaseId
  const baseUrl = 'https://www.github.com/shoptet/cms4/issues/';
  const url = `${baseUrl}${testCaseId}`;
  vscode.window.showInformationMessage(`Open Test Case: ${testCaseId}`);

  vscode.env.openExternal(vscode.Uri.parse(url));
}
