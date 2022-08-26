function showMessage(message: string): void {
  console.log(message);
}

function showMessages(...messages: string[]): void {
  messages.forEach((message, index) => console.log(`${message} ${index + 1}`));
}

const user = {
  username: 'Jhon',
  password: '123456',
  email: 'jhon@email.com',

  displayCredentials(): void {
    const template = `username: %s\npassword: %s\nemail: %s`;
    console.log(template, this.username, this.password, this.email);
  },
};

showMessage('this is a message');
showMessages('message', 'message', 'message');
user.displayCredentials();
