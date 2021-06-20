import * as vscode from 'vscode';
import { AchievementPanel } from '../Panel/AchievementPanel';

export class Achievement {
    name!: string;
    description!: string;
    condition!: string;
    done!: boolean;
    checkCondition!: any;

    constructor(name: string, description: string, condition: string, done: boolean, checkCondition: any) {
        this.name = name;
        this.description = description;
        this.condition = condition;
        this.done = done;
        this.checkCondition = checkCondition;
    }

    async finished(context: vscode.ExtensionContext, achievements: Array<Achievement>): Promise<void> {
        this.done = true;
        let answer = await vscode.window.showInformationMessage(
            `✔ ${this.name}`,
            "Show Achievements"
        );
        if (answer === "Show Achievements") {
            AchievementPanel.createOrShow(context.extensionUri, achievements);
        }
    }
}