enum Colors {
  RED,
  BLUE,
  YELLOW,
}

console.log(Colors);
console.log(Colors.RED);
console.log(Colors[Colors.RED]);

enum StatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
}

enum StatusCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
}

enum StatusCode {
  INTERNAL_SERVER_ERROR = 500,
}

console.log(StatusCode);

enum Url {
  GOOGLE = 'https://google.com/',
  DUCKDUCKGO = 'https://duckduckgo.com/',
}

console.log(Url);

async function getPage(url: Url): Promise<Response> {
  return await fetch(url);
}

getPage(Url.DUCKDUCKGO).then((response) => {
  const statusCode = response.status;
  console.log(StatusCode[statusCode]);
});
