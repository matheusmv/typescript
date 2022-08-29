export abstract class FileParser {
  constructor(protected filePath: string) {}

  abstract read(): string[];
  abstract write(content: string): void;
}

export class CsvParser extends FileParser {
  read(): string[] {
    console.log(
      `reading contents of csv file located in path: ${this.filePath}`,
    );
    return [];
  }

  write(content: string): void {
    console.log(
      `write ${content} to csv file located in path: ${this.filePath}`,
    );
  }
}

export class TextFileParser extends FileParser {
  read(): string[] {
    console.log(
      `reading contents of text file located in path: ${this.filePath}`,
    );
    return [];
  }

  write(content: string): void {
    console.log(
      `write ${content} to text file located in path: ${this.filePath}`,
    );
  }
}

function writeToFile(parser: FileParser, content: string): void {
  parser.write(content);
}

function readFromFile(parser: FileParser): string[] {
  return parser.read();
}

writeToFile(
  new CsvParser('$HOME/Documents/file.csv'),
  '1,jhon,doe,jhon@email.com',
);

readFromFile(new TextFileParser('$HOME/Documents/file.txt'));
