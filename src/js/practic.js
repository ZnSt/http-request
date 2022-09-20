// Create a function waitFor that takes a DOM element and a string eventName, such as click. The function returns a Promise that should be resolved when eventName happened on the element with a message It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}. (For example: It was click on the element: INPUT, id: login.)
// Also create a function printMessage that takes a string message and adds <div class="message"> with the message to the DOM

const loginEl = document.querySelector('#login');
const passEl = document.querySelector('#password');
const submitBtn = document.querySelector('#submit');

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

function printMessage(message) {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">
    <p>${message}</p>
  </div>`
  );
}

waitFor(loginEl, 'click').then(printMessage);
waitFor(passEl, 'click').then(printMessage);
waitFor(submitBtn, 'click').then(printMessage);
