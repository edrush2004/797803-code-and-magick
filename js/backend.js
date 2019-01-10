'use strict';

(function () {

  var serverRequest = function (methodRequest, URL, data, onLoad, onError) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open(methodRequest, URL);
    xhr.send(data);

  };

  window.backend = {

    save: function (data, onLoad, onError) {

      var URL = 'https://js.dump.academy/code-and-magick';
      var methodRequest = 'POST';

      serverRequest(methodRequest, URL, data, onLoad, onError);
    },

    load: function (onLoad, onError) {

      var URL = 'https://js.dump.academy/code-and-magick/data';
      var methodRequest = 'GET';

      serverRequest(methodRequest, URL, null, onLoad, onError);
    }
  };

})();

