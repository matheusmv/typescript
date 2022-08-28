// null check
const bodyOne = document.querySelector('body');
if (bodyOne) {
  bodyOne.style.background = 'red';
}

// type assertion
const bodyThree = document.querySelector('body') as HTMLBodyElement;
bodyThree.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'username';
input.focus();

// non-null assertion (!)
const bodyTwo = document.querySelector('body')!;
bodyTwo.style.background = 'red';
