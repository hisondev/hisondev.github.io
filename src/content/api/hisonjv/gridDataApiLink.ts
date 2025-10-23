export const apiLinkGridDataKo = [
    // ApiController
    {
    method: 'POST',
    param: '@RequestBody DataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'POST 요청에 대한 통합 API를 제공합니다.',
    note: 'DataWrapper에 cmd로 서비스.메소드 명을 보내면 해당 서비스 로직 후 결과를 반환합니다.\n서비스단 메소드의 허용되는 형식은 4가지입니다: void methodName(),\nvoid methodName(@RequestBody DataWrapper dw),\nDataWrapper methodName(),\nDataWrapper methodName(@RequestBody DataWrapper dw)'
    },
    {
    method: 'PUT',
    param: '@RequestBody DataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'PUT 요청에 대한 통합 API를 제공합니다.',
    note: 'DataWrapper에 cmd로 서비스.메소드 명을 보내면 해당 서비스 로직 후 결과를 반환합니다.\n서비스단 메소드의 허용되는 형식은 4가지입니다: void methodName(),\nvoid methodName(@RequestBody DataWrapper dw),\nDataWrapper methodName(),\nDataWrapper methodName(@RequestBody DataWrapper dw)'
    },
    {
    method: 'PATCH',
    param: '@RequestBody DataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'PATCH 요청에 대한 통합 API를 제공합니다.',
    note: 'DataWrapper에 cmd로 서비스.메소드 명을 보내면 해당 서비스 로직 후 결과를 반환합니다.\n서비스단 메소드의 허용되는 형식은 4가지입니다: void methodName(),\nvoid methodName(@RequestBody DataWrapper dw),\nDataWrapper methodName(),\nDataWrapper methodName(@RequestBody DataWrapper dw)'
    },
    {
    method: 'DELETE',
    param: '@RequestBody DataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'DELETE 요청에 대한 통합 API를 제공합니다.',
    note: 'DataWrapper에 cmd로 서비스.메소드 명을 보내면 해당 서비스 로직 후 결과를 반환합니다.\n서비스단 메소드의 허용되는 형식은 4가지입니다: void methodName(),\nvoid methodName(@RequestBody DataWrapper dw),\nDataWrapper methodName(),\nDataWrapper methodName(@RequestBody DataWrapper dw)'
    },
    // ApiHandlerDefault
    {
    method: 'beforeHandleRequest',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'DataModel',
    explain: '모든 요청 전 우선적으로 호출되는 메소드로, 전처리 로직을 작성할 수 있습니다.',
    note: 'HttpServletRequest에서 요청 분석이 가능하며, DataWrapper는 요청 body입니다.'
    },
    {
    method: 'handleAuthority',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'DataModel',
    explain: 'beforeHandleRequest 이후 호출되며, 권한 체크 등에 사용될 수 있습니다.',
    note: 'HttpServletRequest에서 요청 분석이 가능하며, DataWrapper는 요청 body입니다.'
    },
    {
    method: 'handleLog',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'void',
    explain: 'beforeHandleRequest -> handleAuthority -> handleLog 순서로 호출되며,\n로깅 등에 사용될 수 있습니다.',
    note: 'HttpServletRequest에서 요청 분석이 가능하며, DataWrapper는 요청 body입니다.'
    },
    {
    method: 'handleApiException',
    param: 'ApiException e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: '요청 처리 중 ApiException 발생 시 호출되며,\n에러 처리 후 결과값을 클라이언트로 보냅니다.',
    note: 'ApiException은 ApiController 내부에서 발생되는 Exception입니다.\n기본적으로 DataWrapper에 "status":"error"와 code, message를 담아 클라이언트에 전송합니다.'
    },
    {
    method: 'handleServiceRuntimeException',
    param: 'ServiceRuntimeException e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: '요청 처리 중 ServiceRuntimeException 발생 시 호출되며,\n에러 처리 후 결과값을 클라이언트로 보냅니다.',
    note: 'ServiceRuntimeException은 서비스 로직에서 사용자 호출되는 Exception입니다.\n기본적으로 DataWrapper에 "status":"error"와 code, message를 담아 클라이언트에 전송합니다.'
    },
    {
    method: 'handleException',
    param: 'Exception e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: '요청 처리 중 Exception 발생 시 호출되며, 에러 처리 후 결과값을 클라이언트로 보냅니다.',
    note: '기본적으로 DataWrapper에 "status":"error"와 code, message를 담아 클라이언트에 전송합니다.'
    },
    {
    method: 'handleThrowable',
    param: 'Throwable t,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: '요청 처리 중 Throwable 발생 시 호출되며, 에러 처리 후 결과값을 클라이언트로 보냅니다.',
    note: '기본적으로 DataWrapper에 "status":"error"와 code, message를 담아 클라이언트에 전송합니다.'
    },
    {
    method: 'afterHandleRequest',
    param: 'DataWrapper requestDw,\nDataWrapper responesDw,\nHttpServletRequest req',
    return: 'void',
    explain: '요청을 보내기 전에 마지막으로 호출되는 메소드로, 요청 처리 후 보내질 정보를 처리할 수 있습니다.',
    note: ''
    },
    // ServiceRuntimeException
    {
    method: 'constructor',
    param: 'String message',
    return: 'ServiceRuntimeException',
    explain: 'message를 통해 ServiceRuntimeException를 생성합니다.\ncode는 기본 "0000"입니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'message와 code를 통해 ServiceRuntimeException를 생성합니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nThrowable cause',
    return: 'ServiceRuntimeException',
    explain: 'message와 cause를 통해 ServiceRuntimeException를 생성합니다.\ncode는 기본 "0000"입니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nThrowable cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'message와 cause, code를 통해 ServiceRuntimeException를 생성합니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'Throwable cause',
    return: 'ServiceRuntimeException',
    explain: 'cause를 통해 ServiceRuntimeException를 생성합니다.\ncode는 기본 "0000"입니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'Throwable cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'cause와 code를 통해 ServiceRuntimeException를 생성합니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'ServiceRuntimeException cause',
    return: 'ServiceRuntimeException',
    explain: 'ServiceRuntimeException의 cause를 통해 ServiceRuntimeException를 생성합니다.\ncode는 기본 "0000"입니다.',
    note: '예외 체인 구축'
    },
    {
    method: 'constructor',
    param: 'ServiceRuntimeException cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'ServiceRuntimeException의 cause와 code를 통해 ServiceRuntimeException를 생성합니다.',
    note: '예외 체인 구축'
    },
    {
    method: 'getCode',
    param: 'none',
    return: 'String (code)',
    explain: '코드를 가져옵니다.',
    note: '서비스단 메소드 내부에서 throw new ServiceRuntimeException("message", "code"); 발생 시\nApiHandlerDefault의 handleServiceRuntimeException에 의해 클라이언트에\n{ code: "code", message: "message", status: "error" }가 전달됩니다.'
    },
    // CachingHandlerDefault
    {
    method: 'setRegistry',
    param: 'WebSocketHandlerRegistration registry',
    return: 'void',
    explain: 'WebSocketHandler를 등록하고 추가적인 설정을 지원합니다.\n(ex: cross origin 설정)',
    note: ''
    },
    {
    method: 'addSession',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nWebSocketSession session',
    return: 'void',
    explain: 'CopyOnWriteArrayList<WebSocketSession>에 해당 WebSocketSession을 추가합니다.',
    note: ''
    },
    {
    method: 'removeSession',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nWebSocketSession session',
    return: 'void',
    explain: 'CopyOnWriteArrayList<WebSocketSession>에서 해당 WebSocketSession을 제거합니다.',
    note: ''
    },
    {
    method: 'notifyAllSessions',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nString message',
    return: 'void',
    explain: 'CopyOnWriteArrayList<WebSocketSession>에 추가된\n모든 WebSocketSession에 String message를 보냅니다.',
    note: '서비스단 메소드 내에서 cachingWebSocketSessionManager.notifyAllSessions("message"); 호출 시\n클라이언트 CachingModule에서는 .onmessage 이벤트로 캐싱 커스텀 가능합니다.'
    },
    {
    method: 'getEndPoint',
    param: 'none',
    return: 'String',
    explain: 'End Point 주소를 반환합니다.\n기본값은 "hison-caching-websocket-endpoint"입니다.',
    note: '변경 시 JavaScript 모듈과 동기화가 필요합니다.'
    }
]

export const apiHandlerDefaultGridDataKo = [
    {
    method: 'beforeHandleRequest',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'DataModel',
    explain: '모든 요청 전 우선적으로 호출되는 메소드.\n전처리 로직을 작성할 수 있다.',
    note: 'HttpServletRequest에서 요청 분석 가능, DataWrapper는 요청 body이다.'
    },
    {
    method: 'handleAuthority',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'DataModel',
    explain: 'beforeHandleRequest 이후 호출되는 메소드.\n권한체크 등에 사용할 수 있다.',
    note: 'HttpServletRequest에서 요청 분석 가능, DataWrapper는 요청 body이다.'
    },
    {
    method: 'handleLog',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'void',
    explain: 'beforeHandleReques -> handleAuthority -> handleLog 순서로 호출됨.\n로깅 등에 사용할 수 있다.',
    note: 'HttpServletRequest에서 요청 분석 가능, DataWrapper는 요청 body이다.'
    },
    {
    method: 'handleApiException',
    param: 'ApiException e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: '요청을 처리하는 중 ApiException 발생 시 호출되는 메소드.\n에러 처리 후 결과값을 클라이언트로 보낸다.',
    note: 'ApiException은 ApiController내부에서 발생되는 exception이다.\nDefault : DataWrapper에 status : "error"와 code, message(An undefined error occurred)를 담고\nResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(DataWrapper)\n형태로 클라이언트에 전송한다.'
    },
    {
    method: 'handleServiceRuntimeException',
    param: 'ServiceRuntimeException e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: '요청을 처리하는 중 ServiceRuntimeException 발생 시 호출되는 메소드.\n에러 처리 후 결과값을 클라이언트로 보낸다.',
    note: 'ServiceRuntimeException은 서비스 로직에서 사용자 호출되는 exception이다.\nDefault : DataWrapper에 status : "error"와 code, message(An undefined error occurred)를 담고\nResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(DataWrapper)\n형태로 클라이언트에 전송한다.'
    },
    {
    method: 'handleException',
    param: 'Exception e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: '요청을 처리하는 중 Exception 발생 시 호출되는 메소드.\n에러 처리 후 결과값을 클라이언트로 보낸다.',
    note: 'Default : DataWrapper에 status : "error"와 code, message(An undefined error occurred)를 담고\nResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(DataWrapper)\n형태로 클라이언트에 전송한다.'
    },
    {
    method: 'handleThrowable',
    param: 'Throwable t,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: '요청을 처리하는 중 Throwable 발생 시 호출되는 메소드.\n에러 처리 후 결과값을 클라이언트로 보낸다.',
    note: 'Default : DataWrapper에 status : "error"와 code, message(An undefined error occurred)를 담고\nResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(DataWrapper)\n형태로 클라이언트에 전송한다.'
    },
    {
    method: 'afterHandleRequest',
    param: 'DataWrapper requestDw,\nDataWrapper responesDw,\nHttpServletRequest req',
    return: 'void',
    explain: '요청을 보내기 전에 마지막으로 호출되는 메소드.\n요청 처리 후 보내질 정보를 처리 할 수 있다.',
    note: ''
    }
]

export const serviceRuntimeExceptionGridDataKo = [
    {
    method: 'constructor',
    param: 'String message',
    return: 'ServiceRuntimeException',
    explain: 'message를 통해 ServiceRuntimeException를 생성합니다.\ncode는 기본 "0000"입니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'message와 code를 통해 ServiceRuntimeException를 생성합니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nThrowable cause',
    return: 'ServiceRuntimeException',
    explain: 'message와 cause를 통해 ServiceRuntimeException를 생성합니다.\ncode는 기본 "0000"입니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nThrowable cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'message와 cause, code를 통해 ServiceRuntimeException를 생성합니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'Throwable cause',
    return: 'ServiceRuntimeException',
    explain: 'cause를 통해 ServiceRuntimeException를 생성합니다.\ncode는 기본 "0000"입니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'Throwable cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'cause와 code를 통해 ServiceRuntimeException를 생성합니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'ServiceRuntimeException cause',
    return: 'ServiceRuntimeException',
    explain: 'ServiceRuntimeException의 cause를 통해 ServiceRuntimeException를 생성합니다.\ncode는 기본 "0000"입니다.',
    note: '예외 체인 구축'
    },
    {
    method: 'constructor',
    param: 'ServiceRuntimeException cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'ServiceRuntimeException의 cause와 code를 통해 ServiceRuntimeException를 생성합니다.',
    note: '예외 체인 구축'
    },
    {
    method: 'getCode',
    param: 'none',
    return: 'String (code)',
    explain: '코드를 가져옵니다.',
    note: '서비스단 메소드 내부에서 throw new ServiceRuntimeException("message", "code"); 발생 시\nApiHandlerDefault의 handleServiceRuntimeException에 의해 클라이언트에\n{ code: "code", message: "message", status: "error" }가 전달됩니다.'
    }
]

export const cachingHandlerDefaultGridDataKo = [
    {
    method: 'setRegistry',
    param: 'WebSocketHandlerRegistration registry',
    return: 'void',
    explain: 'WebSocketHandler를 등록 후 추가적인 설정을 지원합니다.\n(ex: cross origin 설정)',
    note: ''
    },
    {
    method: 'addSession',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nWebSocketSession session',
    return: 'void',
    explain: 'CopyOnWriteArrayList<WebSocketSession>에 해당 WebSocketSession을 추가합니다.',
    note: ''
    },
    {
    method: 'removeSession',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nWebSocketSession session',
    return: 'void',
    explain: 'CopyOnWriteArrayList<WebSocketSession>에서 해당 WebSocketSession을 제거합니다.',
    note: ''
    },
    {
    method: 'notifyAllSessions',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nString message',
    return: 'void',
    explain: 'CopyOnWriteArrayList<WebSocketSession>에 추가된 모든 WebSocketSession에 String message를 보냅니다.',
    note: '서비스단 메소드 내에서 cachingWebSocketSessionManager.notifyAllSessions("message"); 호출 시\n클라이언트 CachingModule에서는 .onmessage 이벤트로 캐싱 커스텀 가능합니다.\n(기본적으로 LRU 캐싱 초기화 및 재시작)'
    },
    {
    method: 'getEndPoint',
    param: 'none',
    return: 'String',
    explain: 'End Point 주소를 반환합니다.\n기본값은 "hison-caching-websocket-endpoint"입니다.',
    note: '변경 시 JavaScript 모듈과 동기화가 필요합니다.'
    }
]

export const apiLinkGridDataEn = [
    // ApiController
    {
    method: 'POST',
    param: '@RequestBody DataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Provides a unified API for POST requests.',
    note: 'Sends service.method name as "cmd" in DataWrapper.\nReturns the result after executing the corresponding service logic.\nThe 4 allowed service method signatures are:\nvoid methodName(), void methodName(@RequestBody DataWrapper dw),\nDataWrapper methodName(), DataWrapper methodName(@RequestBody DataWrapper dw)'
    },
    {
    method: 'PUT',
    param: '@RequestBody DataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Provides a unified API for PUT requests.',
    note: 'Sends service.method name as "cmd" in DataWrapper.\nReturns the result after executing the corresponding service logic.\nThe 4 allowed service method signatures are:\nvoid methodName(), void methodName(@RequestBody DataWrapper dw),\nDataWrapper methodName(), DataWrapper methodName(@RequestBody DataWrapper dw)'
    },
    {
    method: 'PATCH',
    param: '@RequestBody DataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Provides a unified API for PATCH requests.',
    note: 'Sends service.method name as "cmd" in DataWrapper.\nReturns the result after executing the corresponding service logic.\nThe 4 allowed service method signatures are:\nvoid methodName(), void methodName(@RequestBody DataWrapper dw),\nDataWrapper methodName(), DataWrapper methodName(@RequestBody DataWrapper dw)'
    },
    {
    method: 'DELETE',
    param: '@RequestBody DataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Provides a unified API for DELETE requests.',
    note: 'Sends service.method name as "cmd" in DataWrapper.\nReturns the result after executing the corresponding service logic.\nThe 4 allowed service method signatures are:\nvoid methodName(), void methodName(@RequestBody DataWrapper dw),\nDataWrapper methodName(), DataWrapper methodName(@RequestBody DataWrapper dw)'
    },
    // ApiHandlerDefault
    {
    method: 'beforeHandleRequest',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'DataModel',
    explain: 'Method called first before all requests. Pre-processing logic can be implemented here.',
    note: 'The request can be analyzed via HttpServletRequest, and DataWrapper is the request body.'
    },
    {
    method: 'handleAuthority',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'DataModel',
    explain: 'Method called after beforeHandleRequest. Can be used for authority checks, etc.',
    note: 'The request can be analyzed via HttpServletRequest, and DataWrapper is the request body.'
    },
    {
    method: 'handleLog',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'void',
    explain: 'Called in the sequence:\nbeforeHandleRequest -> handleAuthority -> handleLog. Can be used for logging, etc.',
    note: 'The request can be analyzed via HttpServletRequest, and DataWrapper is the request body.'
    },
    {
    method: 'handleApiException',
    param: 'ApiException e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Method called when an ApiException occurs during request processing.\nHandles the error and sends the result to the client.',
    note: 'ApiException is an exception generated inside ApiController.\nDefault: Sends to the client in the form of { "status": "error", "code": ..., "message": ... } in DataWrapper.'
    },
    {
    method: 'handleServiceRuntimeException',
    param: 'ServiceRuntimeException e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Method called when a ServiceRuntimeException occurs during request processing.\nHandles the error and sends the result to the client.',
    note: 'ServiceRuntimeException is an exception called by the user in the service logic.\nDefault: Sends to the client in the form of { "status": "error", "code": ..., "message": ... }\nin DataWrapper.'
    },
    {
    method: 'handleException',
    param: 'Exception e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Method called when an Exception occurs during request processing.\nHandles the error and sends the result to the client.',
    note: 'Default: Sends to the client in the form of { "status": "error", "code": ..., "message": ... } in DataWrapper.'
    },
    {
    method: 'handleThrowable',
    param: 'Throwable t,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Method called when a Throwable occurs during request processing.\nHandles the error and sends the result to the client.',
    note: 'Default: Sends to the client in the form of { "status": "error", "code": ..., "message": ... } in DataWrapper.'
    },
    {
    method: 'afterHandleRequest',
    param: 'DataWrapper requestDw,\nDataWrapper responesDw,\nHttpServletRequest req',
    return: 'void',
    explain: 'The final method called before sending the response.\nCan process the information to be sent after request handling.',
    note: ''
    },
    // ServiceRuntimeException
    {
    method: 'constructor',
    param: 'String message',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a message. Default code is "0000".',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a message and a code.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nThrowable cause',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a message and a cause. Default code is "0000".',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nThrowable cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a message, a cause, and a code.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'Throwable cause',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a cause. Default code is "0000".',
    note: ''
    },
    {
    method: 'constructor',
    param: 'Throwable cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a cause and a code.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'ServiceRuntimeException cause',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException through the cause of another ServiceRuntimeException.\nDefault code is "0000".',
    note: 'Exception chaining'
    },
    {
    method: 'constructor',
    param: 'ServiceRuntimeException cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException through the cause of another ServiceRuntimeException and a code.',
    note: 'Exception chaining'
    },
    {
    method: 'getCode',
    param: 'none',
    return: 'String (code)',
    explain: 'Retrieves the code.',
    note: 'If throw new ServiceRuntimeException("message", "code"); occurs\ninside a service method, ApiHandlerDefault\'s handleServiceRuntimeException sends\n{ "code": "code", "message": "message", "status": "error" } to the client.'
    },
    // CachingHandlerDefault
    {
    method: 'setRegistry',
    param: 'WebSocketHandlerRegistration registry',
    return: 'void',
    explain: 'Registers the WebSocketHandler and supports additional configuration\n(e.g., cross-origin setting).',
    note: ''
    },
    {
    method: 'addSession',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nWebSocketSession session',
    return: 'void',
    explain: 'Adds the WebSocketSession to CopyOnWriteArrayList<WebSocketSession>.',
    note: ''
    },
    {
    method: 'removeSession',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nWebSocketSession session',
    return: 'void',
    explain: 'Removes the WebSocketSession from CopyOnWriteArrayList<WebSocketSession>.',
    note: ''
    },
    {
    method: 'notifyAllSessions',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nString message',
    return: 'void',
    explain: 'Sends a String message to all WebSocketSessions added to CopyOnWriteArrayList<WebSocketSession>.',
    note: 'When cachingWebSocketSessionManager.notifyAllSessions("message"); is called\nin a service method, the client CachingModule can customize caching via the .onmessage event.'
    },
    {
    method: 'getEndPoint',
    param: 'none',
    return: 'String',
    explain: 'Returns the End Point address. Default is "hison-caching-websocket-endpoint".',
    note: 'Requires synchronization with the JavaScript module if changed.'
    }
]

export const apiHandlerDefaultGridDataEn = [
    {
    method: 'beforeHandleRequest',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'DataModel',
    explain: 'Method called first before all requests. Pre-processing logic can be implemented here.',
    note: 'The request can be analyzed via HttpServletRequest, and DataWrapper is the request body.'
    },
    {
    method: 'handleAuthority',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'DataModel',
    explain: 'Method called after beforeHandleRequest. Can be used for authority checks, etc.',
    note: 'The request can be analyzed via HttpServletRequest, and DataWrapper is the request body.'
    },
    {
    method: 'handleLog',
    param: 'DataWrapper dw,\nHttpServletRequest req',
    return: 'void',
    explain: 'Called in the sequence: beforeHandleReques -> handleAuthority -> handleLog.\nCan be used for logging, etc.',
    note: 'The request can be analyzed via HttpServletRequest, and DataWrapper is the request body.'
    },
    {
    method: 'handleApiException',
    param: 'ApiException e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Method called when an ApiException occurs during request processing.\nHandles the error and sends the result to the client.',
    note: 'ApiException is an exception generated inside ApiController.\nDefault: Sends to the client in the form of\n{ "status": "error", "code": ..., "message": "An undefined error occurred" }\nwith ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).'
    },
    {
    method: 'handleServiceRuntimeException',
    param: 'ServiceRuntimeException e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Method called when a ServiceRuntimeException occurs during request processing.\nHandles the error and sends the result to the client.',
    note: 'ServiceRuntimeException is an exception called by the user in the service logic.\nDefault: Sends to the client in the form of\n{ "status": "error", "code": ..., "message": "An undefined error occurred" }\nwith ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).'
    },
    {
    method: 'handleException',
    param: 'Exception e,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Method called when an Exception occurs during request processing.\nHandles the error and sends the result to the client.',
    note: 'Default: Sends to the client in the form of\n{ "status": "error", "code": ..., "message": "An undefined error occurred" }\nwith ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).'
    },
    {
    method: 'handleThrowable',
    param: 'Throwable t,\nDataWrapper dw,\nHttpServletRequest req',
    return: 'ResponseEntity<DataWrapper>',
    explain: 'Method called when a Throwable occurs during request processing.\nHandles the error and sends the result to the client.',
    note: 'Default: Sends to the client in the form of\n{ "status": "error", "code": ..., "message": "An undefined error occurred" }\nwith ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).'
    },
    {
    method: 'afterHandleRequest',
    param: 'DataWrapper requestDw,\nDataWrapper responesDw,\nHttpServletRequest req',
    return: 'void',
    explain: 'The final method called before sending the response.\nCan process the information to be sent after request handling.',
    note: ''
    }
]

export const serviceRuntimeExceptionGridDataEn = [
    {
    method: 'constructor',
    param: 'String message',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a message.\nDefault code is "0000".',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a message and a code.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nThrowable cause',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a message and a cause.\nDefault code is "0000".',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String message,\nThrowable cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a message, a cause, and a code.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'Throwable cause',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a cause.\nDefault code is "0000".',
    note: ''
    },
    {
    method: 'constructor',
    param: 'Throwable cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException with a cause and a code.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'ServiceRuntimeException cause',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException through the cause of another ServiceRuntimeException.\nDefault code is "0000".',
    note: 'Exception chaining'
    },
    {
    method: 'constructor',
    param: 'ServiceRuntimeException cause,\nString code',
    return: 'ServiceRuntimeException',
    explain: 'Creates ServiceRuntimeException through the cause of another ServiceRuntimeException and a code.',
    note: 'Exception chaining'
    },
    {
    method: 'getCode',
    param: 'none',
    return: 'String (code)',
    explain: 'Retrieves the code.',
    note: 'If throw new ServiceRuntimeException("message", "code"); occurs\ninside a service method, ApiHandlerDefault\'s handleServiceRuntimeException sends\n{ "code": "code", "message": "message", "status": "error" } to the client.'
    }
]

export const cachingHandlerDefaultGridDataEn = [
    {
    method: 'setRegistry',
    param: 'WebSocketHandlerRegistration registry',
    return: 'void',
    explain: 'Registers the WebSocketHandler and supports additional configuration\n(e.g., cross origin setting).',
    note: ''
    },
    {
    method: 'addSession',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nWebSocketSession session',
    return: 'void',
    explain: 'Adds the WebSocketSession to CopyOnWriteArrayList<WebSocketSession>.',
    note: ''
    },
    {
    method: 'removeSession',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nWebSocketSession session',
    return: 'void',
    explain: 'Removes the WebSocketSession from CopyOnWriteArrayList<WebSocketSession>.',
    note: ''
    },
    {
    method: 'notifyAllSessions',
    param: 'CopyOnWriteArrayList<WebSocketSession> sessions,\nString message',
    return: 'void',
    explain: 'Sends a String message to all WebSocketSessions added to CopyOnWriteArrayList<WebSocketSession>.',
    note: 'When cachingWebSocketSessionManager.notifyAllSessions("message"); is called\nin a service method, the client CachingModule can customize caching via the .onmessage event.\n(Default: LRU caching is reset and restarted)'
    },
    {
    method: 'getEndPoint',
    param: 'none',
    return: 'String',
    explain: 'Returns the End Point address.\nDefault is "hison-caching-websocket-endpoint".',
    note: 'Requires synchronization with the JavaScript module if changed.'
    }
]