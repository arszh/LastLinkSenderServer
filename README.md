Server on Node.js.

Extension send last url by click to server by route:
    Type: POST
    URI: /url"   
    Example of the expected: {"lastUrl":"https://google.com","name":"John"}
    

Server can give last urls by route:
    Type: GET
    URI: /url/{size}"  size - how much last urls need to send from backend.
    Example of the result: [{"url":"https://google.com","name":"John"}]
