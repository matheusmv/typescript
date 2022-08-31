export interface Order {
  address: string;
}

export interface TelephoneOrder extends Order {
  callerNumber: string;
}

export interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

export class TelephoneOrderClass implements TelephoneOrder {
  callerNumber: string;
  address: string;

  constructor(callerNumber: string, address: string) {
    this.callerNumber = callerNumber;
    this.address = address;
  }
}

export class InternetOrderClass implements InternetOrder {
  email: string;
  address: string;

  constructor(email: string, address: string) {
    this.email = email;
    this.address = address;
  }
}

function displayContent(obj: PossibleOrders): void {
  // in operator
  if (obj !== undefined && 'email' in obj) console.log(obj.email);

  // instanceof
  if (obj instanceof TelephoneOrderClass) console.log(obj.callerNumber);

  // typeof (only for primitives: strings, objects, numbers...)
  if (typeof obj === 'undefined') console.log(`invalid obj`);
}

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  if (typeof order === 'undefined') return false;

  return order && 'email' in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  if (typeof order === 'undefined') return false;

  return order && 'callerNumber' in order;
}

const orders: PossibleOrders[] = [
  new InternetOrderClass('jhon@email.com', 'address 1'),
  new TelephoneOrderClass('22222-2222', 'address 2'),
];

orders.forEach((order) => {
  if (isAnInternetOrder(order)) {
    console.log('Internet order');
  }

  if (isATelephoneOrder(order)) {
    console.log('Telephone order');
  }

  displayContent(order);
});
