type Writer = {
  write(content: string): void;
};

type Reader = {
  read(): string[];
};

export class CsvFileHandler implements Writer, Reader {
  constructor(private filePath: string) {}

  write(content: string): void {
    console.log(
      `write ${content} to csv file located in path: ${this.filePath}`,
    );
  }

  read(): string[] {
    console.log(
      `reading contents of csv file located in path: ${this.filePath}`,
    );
    return [];
  }
}

function writeToFile(writer: Writer, content: string): void {
  writer.write(content);
}

function readFromFile(reader: Reader): string[] {
  return reader.read();
}

writeToFile(
  new CsvFileHandler('$HOME/Documents/file.csv'),
  '1,jhon,doe,jhon@email.com',
);

readFromFile(new CsvFileHandler('$HOME/Documents/file.csv'));
