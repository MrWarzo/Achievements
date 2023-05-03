export class User {
  characterWrited: number = 0;
  terminalOpened: boolean = false;
  filesCreated: Map<string, number> = new Map();
  filesDeleted: Map<string, number> = new Map();

  constructor(obj?: User | undefined) {
    // Load ancient User if not undefined
    if (obj !== undefined) {
      this.characterWrited = 0;
      this.terminalOpened = false;
      this.filesCreated = new Map(Object.entries(obj.filesCreated));
      this.filesDeleted = new Map(Object.entries(obj.filesDeleted));
    }
  }
}
