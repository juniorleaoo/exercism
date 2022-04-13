export class Robot {

  _name!: string;
  releaseNames = new Set();

  constructor() {
    this.resetName();
  }

  generateName(): string {
    const firstLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const secondLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const numbers = Math.floor(Math.random() * (999 - 100)) + 100;
    return firstLetter + secondLetter + numbers;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    let generatedName = this.generateName();
    while(this.releaseNames.has(generatedName)){
      this.resetName();
      return;
    }
    this.releaseNames.add(generatedName);
    this._name = generatedName;
  }

  public static releaseNames(): void {
    return;
  }
}
