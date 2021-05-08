const vscode = require('vscode');
const emojis = require('./emojis');

const insertText = (val) => {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showErrorMessage('Can\'t insert log because no document is open');
		return;
	}
	const selection = editor.selection;
	const range = new vscode.Range(selection.start, selection.end);
	editor.edit((editBuilder) => {
			editBuilder.replace(range, val);
	});
}

function activate(context) {
	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', function () {
		const editor = vscode.window.activeTextEditor;
    if (!editor) return;
		const randomIndex = Math.floor(Math.random() * emojis.length);
		insertText(emojis[randomIndex]);
	});
	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
