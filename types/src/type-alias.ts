type Id = number;

type User = {
  id: Id;
  username: string;
  password: string;
  email: string;
  birthday?: Date;
};

type ColorRGBA = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

type Color = {
  name: string;
  code: ColorRGBA;
};

type CharacterClass =
  | 'Warrior'
  | 'Paladin'
  | 'Hunter'
  | 'Rogue'
  | 'Priest'
  | 'Shaman'
  | 'Mage'
  | 'Warlock'
  | 'Monk'
  | 'Druid'
  | 'Demon Hunter'
  | 'Death Knight';

type GameCharacter = {
  owner: User;
  class: CharacterClass;
  color: Color;
  displayCharacterInformation(): void;
};

const gm: GameCharacter = {
  owner: {
    id: 1,
    username: 'Jhon',
    password: '12345',
    email: 'jhon@email.com',
  },
  class: 'Mage',
  color: { name: 'Blue', code: { red: 0, green: 0, blue: 255, alpha: 0 } },
  displayCharacterInformation(): void {
    console.log(`class: ${this.class}`);
  },
};

gm.displayCharacterInformation();
