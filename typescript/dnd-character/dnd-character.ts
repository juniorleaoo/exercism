export class DnDCharacter {
  strength = DnDCharacter.generateAbilityScore();
  dexterity = DnDCharacter.generateAbilityScore();
  constitution = DnDCharacter.generateAbilityScore();
  intelligence = DnDCharacter.generateAbilityScore();
  wisdom = DnDCharacter.generateAbilityScore();
  charisma = DnDCharacter.generateAbilityScore();
  hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);

  static d6DiceRoller() {
    return Math.floor(Math.random() * 6) + 1;
  }

  public static generateAbilityScore(): number {
    return [this.d6DiceRoller(), this.d6DiceRoller(), this.d6DiceRoller(), this.d6DiceRoller()]
      .sort()
      .slice(1, 4)
      .reduce((acc, current) => acc + current)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
