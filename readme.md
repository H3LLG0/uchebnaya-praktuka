TRAFIC SIMULATOR не работает
т.к Access to fetch at 'http://prb.sylas.ru/TransferSimulator/fullName' from origin 'null' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

если добавить параметр no-cors то запрос отправляется но ответ от сервера приходит пустой (Uncaught (in promise) Error: HTTP error! Status: 0)

все авторитетные ресурсы (stackoverflow.com, habr) указывают на то что это проблема НА СТОРОНЕ СЕРВЕРА