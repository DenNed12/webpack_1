function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('Проект собран на Webpack'));

if (module.hot) {
  module.hot.accept('./myModule', function() {
    // Код для обновления модуля...
  });
}
