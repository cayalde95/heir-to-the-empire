// Include header.html using JavaScript
const headerContainer = document.createElement('div');
headerContainer.innerHTML = `<object type="text/html" data="header.html"></object>`;
document.body.prepend(headerContainer);