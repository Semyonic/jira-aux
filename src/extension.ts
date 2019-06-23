import * as vscode from 'vscode';
import { JiraProvider } from './providers';
import { IssueDetailPanel } from './views';

export function activate(context: vscode.ExtensionContext) {
    const viewName: string = 'jiraAux';
    vscode.window.registerTreeDataProvider(viewName, new JiraProvider(context));
    vscode.window.registerWebviewPanelSerializer(viewName, {
        async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel) {
            IssueDetailPanel.revive(webviewPanel, context.extensionPath);
        },
    });

    // context.subscriptions.push(disposable);
}

export function deactivate() {}
