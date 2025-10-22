export const apiLinkGridDataKo = [
    // Constructor
    {
    method: 'constructor',
    param: 'String cmd, Option {}',
    return: 'ApiLink',
    explain: 'ApiLink를 생성 반환한다. 1. cmd를 세팅한다. cmd는 서비스명 + \'.\' + 메소드명이다. 서버에 지정된 서비스의 메소드를 호출한다. (ex) MemberService.getMember) 2. option을 세팅한다. option은 객체형식이며 세부내용은 아래와 같다. logging : true시 promise통신 시 콘솔에 로그를 출력한다. cachingModule : newCachingModule을 통해 생성한 cachingModule모듈을 삽입하면 해당 ApiLink는 캐싱 로직을 수행한다.',
    note: ''
    },

    // HTTP Methods
    {
    method: 'get',
    param: 'resourcePath "", callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await get => result',
    explain: '1. resourcePath에 대한 GET 요청을 promise를 통해 수행한다. 2. 수행 후처리 함수 callbackWorkedFunc(resultData, response)과 에러 후처리 함수callbackErrorFunc(error)를 주입할 수 있다. 3. option은 객체형식으로 전달하며 세부내용은 아래와 같다. options.headers : 기존 {\'Content-Type\': \'application/json\'}에 더해서 추가할 header 내용을 객체 형태로 담는다. options.timeout : 응답 초과 시간을 제한한다. default는 5초 이다. options.fetchOptions : fetch에 추가할 옵션을 객체 형태로 담는다. 4. (Promise를 반환한다.) 따라서 await newApiLink(\"farboo\").get(url);의 형태로, await로 사용 후 동기화된 결과 값을 받을 수 있으며, promise체이닝 등도 사용가능하다.',
    note: ''
    },
    {
    method: 'post',
    param: 'requestDataWrapper DataWrapper, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await post => result',
    explain: '1. 저장된 cmd에 대한 POST 요청을 promise를 통해 수행한다. 2. requestDataWrapper 는 요청에 대한 body이다. 3. 수행 후처리 함수 callbackWorkedFunc(resultData, response)과 에러 후처리 함수callbackErrorFunc(error)를 주입할 수 있다. 4. option은 객체형식으로 전달하며 세부내용은 아래와 같다. options.headers : 기존 {\'Content-Type\': \'application/json\'}에 더해서 추가할 header 내용을 객체 형태로 담는다. options.timeout : 응답 초과 시간을 제한한다. default는 5초 이다. options.fetchOptions : fetch에 추가할 옵션을 객체 형태로 담는다. 5. await newApiLink(\"farboo\").get(url);의 형태로, await로 사용 후 동기화된 결과 값을 받을 수 있다.',
    note: ''
    },
    {
    method: 'put',
    param: 'requestDataWrapper DataWrapper, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await put => result',
    explain: '1. 저장된 cmd에 대한 PUT 요청을 promise를 통해 수행한다. 2. requestDataWrapper 는 요청에 대한 body이다. 3. 수행 후처리 함수 callbackWorkedFunc(resultData, response)과 에러 후처리 함수callbackErrorFunc(error)를 주입할 수 있다. 4. option은 객체형식으로 전달하며 세부내용은 아래와 같다. options.headers : 기존 {\'Content-Type\': \'application/json\'}에 더해서 추가할 header 내용을 객체 형태로 담는다. options.timeout : 응답 초과 시간을 제한한다. default는 5초 이다. options.fetchOptions : fetch에 추가할 옵션을 객체 형태로 담는다. 5. await newApiLink(\"farboo\").get(url);의 형태로, await로 사용 후 동기화된 결과 값을 받을 수 있다.',
    note: ''
    },
    {
    method: 'patch',
    param: 'requestDataWrapper DataWrapper, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await patch => result',
    explain: '1. 저장된 cmd에 대한 PATCH 요청을 promise를 통해 수행한다. 2. requestDataWrapper 는 요청에 대한 body이다. 3. 수행 후처리 함수 callbackWorkedFunc(resultData, response)과 에러 후처리 함수callbackErrorFunc(error)를 주입할 수 있다. 4. option은 객체형식으로 전달하며 세부내용은 아래와 같다. options.headers : 기존 {\'Content-Type\': \'application/json\'}에 더해서 추가할 header 내용을 객체 형태로 담는다. options.timeout : 응답 초과 시간을 제한한다. default는 5초 이다. options.fetchOptions : fetch에 추가할 옵션을 객체 형태로 담는다. 5. await newApiLink(\"farboo\").get(url);의 형태로, await로 사용 후 동기화된 결과 값을 받을 수 있다.',
    note: ''
    },
    {
    method: 'delete',
    param: 'requestDataWrapper DataWrapper, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await delete => result',
    explain: '1. 저장된 cmd에 대한 DELETE 요청을 promise를 통해 수행한다. 2. requestDataWrapper 는 요청에 대한 body이다. 3. 수행 후처리 함수 callbackWorkedFunc(resultData, response)과 에러 후처리 함수callbackErrorFunc(error)를 주입할 수 있다. 4. option은 객체형식으로 전달하며 세부내용은 아래와 같다. options.headers : 기존 {\'Content-Type\': \'application/json\'}에 더해서 추가할 header 내용을 객체 형태로 담는다. options.timeout : 응답 초과 시간을 제한한다. default는 5초 이다. options.fetchOptions : fetch에 추가할 옵션을 객체 형태로 담는다. 5. await newApiLink(\"farboo\").get(url);의 형태로, await로 사용 후 동기화된 결과 값을 받을 수 있다.',
    note: ''
    },

    // Setter/Utility
    {
    method: 'setCmd',
    param: 'cmd ""',
    return: 'cmd',
    explain: 'cmd를 세팅한다.',
    note: ''
    },
    {
    method: 'onEventEmit',
    param: 'eventName "", eventFunc funtion()',
    return: 'none',
    explain: '각 eventName에 따라 eventFunc를 호출한다. requestStarted_GET : GET 메소드 호출 전에 호출되는 이벤트. 파라메터로 요청 URL과 option을 받는다. requestStarted_POST : POST 메소드 호출 전에 호출되는 이벤트. 파라메터로 요청 DataWrapper와 option을 받는다. requestStarted_PUT : PUT 메소드 호출 전에 호출되는 이벤트. 파라메터로 요청 DataWrapper와 option을 받는다. requestStarted_PATCH : PATCH 메소드 호출 전에 호출되는 이벤트. 파라메터로 요청 DataWrapper와 option을 받는다. requestStarted_DELETE : DELETE 메소드 호출 전에 호출되는 이벤트. 파라메터로 요청 DataWrapper와 option을 받는다. requestCompleted_Response : Promise fetch 응답 후 바로 호출되는 이벤트(logging 이후에 호출). 파라메터로 응답 response객체를 받는다. requestCompleted_Data : Promise fetch 응답 결과 후 바로 호출되는 이벤트. 파라메터로 결과 {resultData, response}를 받는다. requestError : Promise fetch 에러 후 바로 호출되는 이벤트(logging 이후에 호출). 파라메터로 error객체를 받는다.',
    note: ''
    },
    {
    method: 'isApiLink',
    param: '(field)',
    return: 'Boolean true',
    explain: 'newApiLink()을 통해 생성한 ApiLink인지 확인하기 위한 필드. 항상 true를 반환한다.',
    note: ''
    }
]

export const apiLinkPropGridDataKo = [
    {
    prop: "hison.link.protocol",
    explain: "도메인 연결 프로토콜. Default는 'http://'"
    },
    {
    prop: "hison.link.domain",
    explain: "도메인. Default는 'localhost:8080'"
    },
    {
    prop: "hison.link.controllerPath",
    explain: "컨트롤 호출 API. Default는 '/hison-api-link'"
    },
    {
    prop: "hison.link.timeout",
    explain: "API 호출 시 timeout 시간. Default는 10초"
    },
    {
    prop: "hison.link.beforeGetRequst",
    explain: "Get 요청 전 호출되는 메소드.\n파라메터는 resourcePath, callbackWorkedFunction, callbackErrorFunction, options를 받는다.\nreturn false(Boolean)시 Get 요청 수행을 중단한다."
    },
    {
    prop: "hison.link.beforePostRequst",
    explain: "Post 요청 전 호출되는 메소드.\n파라메터는 requestDataWrapper, callbackWorkedFunction, callbackErrorFunction, options를 받는다.\nreturn false(Boolean)시 Post 요청 수행을 중단한다."
    },
    {
    prop: "hison.link.beforePutRequst",
    explain: "Put요청 전 호출되는 메소드.\n파라메터는 requestDataWrapper, callbackWorkedFunction, callbackErrorFunction, options를 받는다.\nreturn false(Boolean)시 Put 요청 수행을 중단한다."
    },
    {
    prop: "hison.link.beforePatchRequst",
    explain: "Patch 요청 전 호출되는 메소드.\n파라메터는 requestDataWrapper, callbackWorkedFunction, callbackErrorFunction, options를 받는다.\nreturn false(Boolean)시 Patch 요청 수행을 중단한다."
    },
    {
    prop: "hison.link.beforeDeleteRequst",
    explain: "Delete 요청 전 호출되는 메소드.\n파라메터는 requestDataWrapper, callbackWorkedFunction, callbackErrorFunction, options를 받는다.\nreturn false(Boolean)시 Delete 요청 수행을 중단한다."
    },
    {
    prop: "hison.link.beforeCallbackWorked",
    explain: "API 요청 성공 시 파라메터로 받은 콜백함수(callbackWorkedFunction) 전에 호출되는 함수.\n파라메터는 Promise요청 결과인 resultData, response를 받는다.\nreturn false(Boolean)시 callbackWorkedFunction을 호출하지 않는다."
    },
    {
    prop: "hison.link.beforeCallbackError",
    explain: "API 요청 실패 시 파라메터로 받은 콜백함수(callbackErrorFunction) 전에 호출되는 함수.\n파라메터는 Promise요청 결과인 error를 받는다.\nreturn false(Boolean)시 callbackErrorFunction을 호출하지 않는다."
    },
]

export const cachingModuleGridDataKo = [
    // Cache Operations
    {
    method: 'getString',
    param: 'key',
    return: '{}',
    explain: '파라메터 key로 캐시에 저장된 값 {}를 가져온다.',
    note: '깊은 복사를 통한 값 반환'
    },
    {
    method: 'putString',
    param: 'key, Object value',
    return: 'none',
    explain: '파라메터 key로 캐시에 값 {}를 저장한다.',
    note: '깊은 복사를 통한 값 저장'
    },
    {
    method: 'remove',
    param: 'String key',
    return: 'none',
    explain: '파라메터 key로 캐시에 key에 해당하는 데이터를 삭제한다.',
    note: ''
    },
    {
    method: 'getAll',
    param: 'none',
    return: '{}',
    explain: '캐시에 저장된 모든 키/값을 가져온다.',
    note: '깊은 복사를 통한 객체 반환'
    },
    {
    method: 'getKeys',
    param: 'none',
    return: '[]',
    explain: '캐시에 저장된 모든 키를 가져온다.',
    note: '깊은 복사를 통한 배열 반환'
    },
    {
    method: 'clear',
    param: 'none',
    return: 'none',
    explain: '캐시에 저장된 모든 키/값을 초기화 한다.',
    note: ''
    },

    // WebSocket Integration
    {
    method: 'onopen',
    param: 'Function',
    return: 'none',
    explain: 'Web Socket의 연결 시 발생 이벤트를 정의한다.',
    note: ''
    },
    {
    method: 'onmessage',
    param: 'Function',
    return: 'none',
    explain: 'Web Socket의 서버 메세지 반환 시 발생 이벤트를 정의한다. Default로 캐싱모듈의 .clear()가 정의되어있다.',
    note: ''
    },
    {
    method: 'onclose',
    param: 'Function',
    return: 'none',
    explain: 'Web Socket의 연결 종료 시 발생 이벤트를 정의한다.',
    note: ''
    },
    {
    method: 'isWebSocketConnection',
    param: 'none',
    return: 'Number 1, 0, -1',
    explain: 'Web Socket의 연결 상태를 반환한다. (1 : 연결됨, 0 : 연결중, -1 : 연결안됨)',
    note: ''
    },

    // Utility
    {
    method: 'isCachingModule',
    param: '(field)',
    return: 'Boolean true',
    explain: 'newCachingModule()을 통해 생성한 CachingModule인지 확인하기 위한 필드. 항상 true를 반환한다.',
    note: ''
    }
]

export const cachingModulePropGridDataKo = [
    {
    prop: "hison.caching.protocol",
    explain: "Web Socket 연결 프로토콜. Default는 'ws://'"
    },
    {
    prop: "hison.caching.wsEndPoint",
    explain: "Web Socket 연결 End Point. Default는 '/hison-caching-websocket-endpoint'"
    },
    {
    prop: "hison.caching.limit",
    explain: "캐싱할 횟수. Default는 10번"
    },
]

export const apiLinkGridDataEn = [
    // Constructor
    {
    method: 'constructor',
    param: 'String cmd, Option {}',
    return: 'ApiLink',
    explain: 'Creates and returns an ApiLink instance. 1. Sets the command (cmd). cmd is serviceName + \'.\' + methodName, which calls a specified service method on the server (e.g., MemberService.getMember). 2. Sets options. Options is an object with the following details: logging: If true, outputs logs to the console during promise communication. cachingModule: If a module created by newCachingModule is inserted, this ApiLink performs caching logic.',
    note: ''
    },

    // HTTP Methods
    {
    method: 'get',
    param: 'resourcePath string, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await get => result',
    explain: '1. Executes a GET request for the resourcePath via a Promise. 2. A success handler callbackWorkedFunc(resultData, response) and an error handler callbackErrorFunc(error) can be injected. 3. options are passed as an object with the following details: options.headers: An object containing additional headers to be added to the existing {\'Content-Type\': \'application/json\'}. options.timeout: Limits the response timeout. Default is 5 seconds. options.fetchOptions: An object containing additional options for fetch. 4. (Returns a Promise). Thus, it can be used with await newApiLink(\"farboo\").get(url); to receive a synchronized result value, and promise chaining is also possible.',
    note: ''
    },
    {
    method: 'post',
    param: 'requestDataWrapper DataWrapper, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await post => result',
    explain: '1. Executes a POST request for the saved cmd via a Promise. 2. requestDataWrapper is the body for the request. 3. A success handler callbackWorkedFunc(resultData, response) and an error handler callbackErrorFunc(error) can be injected. 4. options are passed as an object with the following details: options.headers: An object containing additional headers to be added to the existing {\'Content-Type\': \'application/json\'}. options.timeout: Limits the response timeout. Default is 5 seconds. options.fetchOptions: An object containing additional options for fetch. 5. Can be used with await newApiLink(\"farboo\").post(requestDataWrapper); to receive a synchronized result value.',
    note: ''
    },
    {
    method: 'put',
    param: 'requestDataWrapper DataWrapper, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await put => result',
    explain: '1. Executes a PUT request for the saved cmd via a Promise. 2. requestDataWrapper is the body for the request. 3. A success handler callbackWorkedFunc(resultData, response) and an error handler callbackErrorFunc(error) can be injected. 4. options are passed as an object with the following details: options.headers: An object containing additional headers to be added to the existing {\'Content-Type\': \'application/json\'}. options.timeout: Limits the response timeout. Default is 5 seconds. options.fetchOptions: An object containing additional options for fetch. 5. Can be used with await newApiLink(\"farboo\").put(requestDataWrapper); to receive a synchronized result value.',
    note: ''
    },
    {
    method: 'patch',
    param: 'requestDataWrapper DataWrapper, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await patch => result',
    explain: '1. Executes a PATCH request for the saved cmd via a Promise. 2. requestDataWrapper is the body for the request. 3. A success handler callbackWorkedFunc(resultData, response) and an error handler callbackErrorFunc(error) can be injected. 4. options are passed as an object with the following details: options.headers: An object containing additional headers to be added to the existing {\'Content-Type\': \'application/json\'}. options.timeout: Limits the response timeout. Default is 5 seconds. options.fetchOptions: An object containing additional options for fetch. 5. Can be used with await newApiLink(\"farboo\").patch(requestDataWrapper); to receive a synchronized result value.',
    note: ''
    },
    {
    method: 'delete',
    param: 'requestDataWrapper DataWrapper, callbackWorkedFunc function(), callbackErrorFunc function(), options {}',
    return: 'await delete => result',
    explain: '1. Executes a DELETE request for the saved cmd via a Promise. 2. requestDataWrapper is the body for the request. 3. A success handler callbackWorkedFunc(resultData, response) and an error handler callbackErrorFunc(error) can be injected. 4. options are passed as an object with the following details: options.headers: An object containing additional headers to be added to the existing {\'Content-Type\': \'application/json\'}. options.timeout: Limits the response timeout. Default is 5 seconds. options.fetchOptions: An object containing additional options for fetch. 5. Can be used with await newApiLink(\"farboo\").delete(requestDataWrapper); to receive a synchronized result value.',
    note: ''
    },

    // Setter/Utility
    {
    method: 'setCmd',
    param: 'cmd string',
    return: 'cmd',
    explain: 'Sets the command (cmd).',
    note: ''
    },
    {
    method: 'onEventEmit',
    param: 'eventName string, eventFunc function()',
    return: 'none',
    explain: 'Calls eventFunc based on each eventName. requestStarted_GET: Event called before GET method execution. Receives the request URL and option as parameters. requestStarted_POST: Event called before POST method execution. Receives the request DataWrapper and option as parameters. requestStarted_PUT: Event called before PUT method execution. Receives the request DataWrapper and option as parameters. requestStarted_PATCH: Event called before PATCH method execution. Receives the request DataWrapper and option as parameters. requestStarted_DELETE: Event called before DELETE method execution. Receives the request DataWrapper and option as parameters. requestCompleted_Response: Event called immediately after Promise fetch response (after logging). Receives the response object as a parameter. requestCompleted_Data: Event called immediately after Promise fetch response result. Receives the result {resultData, response} as a parameter. requestError: Event called immediately after Promise fetch error (after logging). Receives the error object as a parameter.',
    note: ''
    },
    {
    method: 'isApiLink',
    param: '(field)',
    return: 'Boolean true',
    explain: 'A field to check if the ApiLink instance was created via newApiLink(). Always returns true.',
    note: ''
    }
]

export const apiLinkPropGridDataEn = [
    {
    prop: "hison.link.protocol",
    explain: "Domain connection protocol. Default is 'http://'"
    },
    {
    prop: "hison.link.domain",
    explain: "Domain name. Default is 'localhost:8080'"
    },
    {
    prop: "hison.link.controllerPath",
    explain: "API path for controller calls. Default is '/hison-api-link'"
    },
    {
    prop: "hison.link.timeout",
    explain: "Timeout duration for API calls (in seconds). Default is 10 seconds"
    },
    {
    prop: "hison.link.beforeGetRequst",
    explain: "Method called before a GET request.\nReceives resourcePath, callbackWorkedFunction, callbackErrorFunction, and options as parameters.\nReturns false (Boolean) to stop the GET request execution."
    },
    {
    prop: "hison.link.beforePostRequst",
    explain: "Method called before a POST request.\nReceives requestDataWrapper, callbackWorkedFunction, callbackErrorFunction, and options as parameters.\nReturns false (Boolean) to stop the POST request execution."
    },
    {
    prop: "hison.link.beforePutRequst",
    explain: "Method called before a PUT request.\nReceives requestDataWrapper, callbackWorkedFunction, callbackErrorFunction, and options as parameters.\nReturns false (Boolean) to stop the PUT request execution."
    },
    {
    prop: "hison.link.beforePatchRequst",
    explain: "Method called before a PATCH request.\nReceives requestDataWrapper, callbackWorkedFunction, callbackErrorFunction, and options as parameters.\nReturns false (Boolean) to stop the PATCH request execution."
    },
    {
    prop: "hison.link.beforeDeleteRequst",
    explain: "Method called before a DELETE request.\nReceives requestDataWrapper, callbackWorkedFunction, callbackErrorFunction, and options as parameters.\nReturns false (Boolean) to stop the DELETE request execution."
    },
    {
    prop: "hison.link.beforeCallbackWorked",
    explain: "Function called before the successful callback function (callbackWorkedFunction) received as a parameter after a successful API request.\nReceives the Promise request result (resultData and response) as parameters.\nReturns false (Boolean) to prevent callbackWorkedFunction from being called."
    },
    {
    prop: "hison.link.beforeCallbackError",
    explain: "Function called before the error callback function (callbackErrorFunction) received as a parameter after a failed API request.\nReceives the Promise request result (error) as a parameter.\nReturns false (Boolean) to prevent callbackErrorFunction from being called."
    },
]

export const cachingModuleGridDataEn = [
    // Cache Operations
    {
    method: 'getString',
    param: 'key',
    return: '{}',
    explain: 'Retrieves the stored value {} from the cache using the parameter key.',
    note: 'Returns value via deep copy.'
    },
    {
    method: 'putString',
    param: 'key, Object value',
    return: 'none',
    explain: 'Stores the value {} in the cache using the parameter key.',
    note: 'Stores value via deep copy.'
    },
    {
    method: 'remove',
    param: 'String key',
    return: 'none',
    explain: 'Deletes the data corresponding to the key from the cache.',
    note: ''
    },
    {
    method: 'getAll',
    param: 'none',
    return: '{}',
    explain: 'Retrieves all stored keys/values from the cache.',
    note: 'Returns object via deep copy.'
    },
    {
    method: 'getKeys',
    param: 'none',
    return: '[]',
    explain: 'Retrieves all stored keys from the cache.',
    note: 'Returns array via deep copy.'
    },
    {
    method: 'clear',
    param: 'none',
    return: 'none',
    explain: 'Initializes (clears) all stored keys/values in the cache.',
    note: ''
    },

    // WebSocket Integration
    {
    method: 'onopen',
    param: 'Function',
    return: 'none',
    explain: 'Defines the event that occurs when the Web Socket connection is established.',
    note: ''
    },
    {
    method: 'onmessage',
    param: 'Function',
    return: 'none',
    explain: 'Defines the event that occurs when a server message is returned via Web Socket. Default behavior is to call the caching module\'s .clear().',
    note: ''
    },
    {
    method: 'onclose',
    param: 'Function',
    return: 'none',
    explain: 'Defines the event that occurs when the Web Socket connection is closed.',
    note: ''
    },
    {
    method: 'isWebSocketConnection',
    param: 'none',
    return: 'Number 1, 0, -1',
    explain: 'Returns the Web Socket connection status. (1: Connected, 0: Connecting, -1: Disconnected)',
    note: ''
    },

    // Utility
    {
    method: 'isCachingModule',
    param: '(field)',
    return: 'Boolean true',
    explain: 'A field to confirm if the CachingModule was created via newCachingModule(). Always returns true.',
    note: ''
    }
]

export const cachingModulePropGridDataEn = [
    {
    prop: "hison.caching.protocol",
    explain: "Web Socket connection protocol. Default is 'ws://'"
    },
    {
    prop: "hison.caching.wsEndPoint",
    explain: "Web Socket connection End Point. Default is '/hison-caching-websocket-endpoint'"
    },
    {
    prop: "hison.caching.limit",
    explain: "Number of times to cache. Default is 10 times"
    },
]