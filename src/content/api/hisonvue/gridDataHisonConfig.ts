//Ko
//bagic
export const utilsConfigGridDataKo = [
    {
        prop: "dateFormat",
        type: "DateFormat",
        default: "yyyy-MM-dd",
        explain:
        "날짜를 표시할 기본 형식입니다.\n이 형식은 `hisondev` 솔루션 전반에서 날짜 값을 파싱하고 포맷팅할 때 사용됩니다.\n`setDateFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "timeFormat",
        type: "TimeFormat",
        default: "hh:mm:ss",
        explain:
        "시간을 표시할 기본 형식입니다.\n이 형식은 `hisondev` 솔루션 전반에서 시간 값을 파싱하고 포맷팅할 때 사용됩니다.\n`setTimeFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "datetimeFormat",
        type: "DateTimeFormat",
        default: "yyyy-MM-dd hh:mm:ss",
        explain:
        "날짜와 시간을 함께 표시할 기본 형식입니다.\n이 형식은 `hisondev` 솔루션 전반에서 날짜시간 값을 파싱하고 포맷팅할 때 사용됩니다.\n`setDatetimeFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "yearFormat",
        type: "YearFormat",
        default: "yyyy",
        explain:
        "년도를 표시할 기본 형식입니다.\n날짜 관련 연산에서 사용됩니다.\n`setYearFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "monthFormat",
        type: "MonthFormat",
        default: "M",
        explain:
        "월을 표시할 기본 형식입니다.\n날짜 관련 연산에서 사용됩니다.\n`setMonthFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "yearMonthFormat",
        type: "YearMonthFormat",
        default: "yyyy-MM",
        explain:
        "년월을 함께 표시할 기본 형식입니다.\n년과 월을 조합한 값을 나타낼 때 사용됩니다.\n`setYearMonthFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "dayFormat",
        type: "DayFormat",
        default: "d",
        explain:
        "일(day)을 표시할 기본 형식입니다.\n날짜 관련 연산에서 사용됩니다.\n`setDayFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "dayOfWeekFormat",
        type: "DayOfWeekFormat",
        default: "d",
        explain:
        "요일을 표시할 기본 형식입니다.\n요일 값을 표현할 때 사용됩니다.\n`setDayOfWeekFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "hourFormat",
        type: "HourFormat",
        default: "h",
        explain:
        "24시간제 시간 표시에 사용되는 기본 형식입니다.\n'h' → 앞에 0을 붙이지 않음 (예: '5', '13')\n'hh' → 한 자리수일 때 앞에 0을 붙임 (예: '05', '13')\n`setHourFormat(format: HourFormat)`으로 변경할 수 있습니다.",
    },
    {
        prop: "hourMinuteFormat",
        type: "HourMinuteFormat",
        default: "hh:mm",
        explain:
        "시와 분을 표시할 기본 형식입니다.\n시간을 시:분 형식으로 표현할 때 사용됩니다.\n`setHourMinuteFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "minuteFormat",
        type: "MinuteFormat",
        default: "m",
        explain:
        "분(minute)을 표시할 기본 형식입니다.\n시간 관련 연산에서 사용됩니다.\n`setMinuteFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "secondFormat",
        type: "SecondFormat",
        default: "s",
        explain:
        "초(second)를 표시할 기본 형식입니다.\n시간 관련 연산에서 사용됩니다.\n`setSecondFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "numberFormat",
        type: "string",
        default: "#,##0.##",
        explain:
        "숫자를 표시할 기본 형식입니다.\n숫자 값을 그룹 구분자와 소수점 자릿수로 표현합니다.\n`setNumberFormat(format: string)`으로 변경할 수 있습니다.",
    },
    {
        prop: "LESSOREQ_0X7FF_BYTE",
        type: "number",
        default: "2",
        explain:
        "`charCode <= 0x7FF`인 문자에 사용되는 바이트 크기입니다.\n이 범위의 문자를 인코딩하는 데 필요한 바이트 수를 정의합니다.",
    },
    {
        prop: "LESSOREQ_0XFFFF_BYTE",
        type: "number",
        default: "3",
        explain:
        "`charCode <= 0xFFFF`인 문자에 사용되는 바이트 크기입니다.\n이 범위의 문자를 인코딩하는 데 필요한 바이트 수를 정의합니다.",
    },
    {
        prop: "GREATER_0XFFFF_BYTE",
        type: "number",
        default: "4",
        explain:
        "`charCode > 0xFFFF`인 문자에 사용되는 바이트 크기입니다.\n이 범위의 문자를 인코딩하는 데 필요한 바이트 수를 정의합니다.",
    },
]

export const shieldConfigGridDataKo = [
    {
        prop: "shieldURL",
        type: "string",
        default: '""',
        explain:
        "접근 제한을 적용할 URL입니다.\n이 값이 설정되면 시스템은 현재 위치가 지정된 URL과 일치하는지 확인하며, 일치하지 않으면 접근이 차단될 수 있습니다.\n`shield.excute(hison: Hison)`에서 URL 검증 시 사용됩니다.",
    },
    {
        prop: "exposeIpList",
        type: "string[]",
        default: '["0:0:0:0:0:0:0:1"]',
        explain:
        "보안 제한을 우회할 수 있는 허용된 IP 주소 목록입니다.\nShield 기능이 활성화되면 해당 IP만 접근이 허용됩니다.\n`shield.excute(hison: Hison)`에서 접근 권한 검증 시 사용됩니다.",
    },
    {
        prop: "isFreeze",
        type: "boolean",
        default: "true",
        explain:
        "`Hison` 인스턴스를 수정 불가능하도록 고정(freeze)할지 여부를 결정합니다.\n`true`인 경우, `Object.freeze()`를 통해 `Hison` 객체와 속성이 깊은 복사 형태로 동결되어 더 이상 변경할 수 없습니다.\n`shield.excute(hison: Hison)` 내부에서 `deepFreeze(hison)`이 적용됩니다.",
    },
    {
        prop: "isPossibleGoBack",
        type: "boolean",
        default: "false",
        explain:
        "브라우저의 뒤로가기 기능 허용 여부를 결정합니다.\n`false`인 경우, `history.pushState()`를 활용하여 사용자의 뒤로가기를 방지합니다.\n`shield.excute(hison: Hison)`에서 사용됩니다.",
    },
    {
        prop: "isPossibleOpenDevTool",
        type: "boolean",
        default: "false",
        explain:
        "개발자 도구(DevTool) 열기 허용 여부를 결정합니다.\n`false`인 경우, F12 키나 브라우저 크기 조정 등 개발자 도구 접근 시도를 감지하고 사용자에게 경고할 수 있습니다.\n`shield.excute(hison: Hison)`에서 `shieldFuncCreateBlockDevMode()`가 호출됩니다.",
    },
    {
        prop: "doDetectDevTool",
        type: "() => void",
        default: "() => {}",
        explain:
        "개발자 도구 접근이 감지될 때 실행되는 사용자 정의 함수입니다.\n개발자가 직접 동작을 정의할 수 있으며, 예를 들어 `debugger;` 삽입이나 경고 표시, 실행 중단 등을 수행할 수 있습니다.\n`shield.excute(hison: Hison)`에서 DevTool 활동이 의심될 때 호출됩니다.\n`hison.setDoDetectDevTool(func)`으로 설정할 수 있습니다.",
    },
]

export const dataConfigGridDataKo = [
  {
    prop: "convertValue",
    type: "(value: any) => any",
    default: "(value) => value",
    explain:
      "`DataModel`에 특정 객체가 삽입될 때 그 변환 방식을 사용자 정의할 수 있는 함수입니다.\n`hisondev`에서는 `DataModel`에 삽입되는 모든 값이 데이터 무결성을 위해 복사됩니다. 그러나 `Date`와 같은 객체는 복사 과정에서 별도의 처리 로직이 필요할 수 있습니다.\n`convertValue`는 이러한 객체의 변환 로직을 개발자가 직접 정의할 수 있도록 합니다.\n`DataModel._deepCopy(object)`에서 비단순 객체(non-plain object)를 처리할 때 호출됩니다.\n기본적으로 입력값을 그대로 반환합니다.\n\n예시:\n```typescript\nhison.setConvertValue((value: any) => {\n  return value instanceof Date ? value.getTime() : value;\n});\n```\n위 예시는 `Date` 객체를 `DataModel`에 삽입할 때 참조 대신 타임스탬프(`number`)로 변환하여 저장합니다.",
  },
]

export const linkConfigGridDataKo = [
    {
        prop: "protocol",
        type: "string",
        default: "'http://'",
        explain:
        "API 통신에 사용되는 기본 프로토콜입니다.\n`ApiLink`에서 요청 URL을 구성할 때 사용됩니다.",
    },
    {
        prop: "domain",
        type: "string",
        default: "'localhost:8080'",
        explain:
        "API 요청에 사용되는 기본 도메인입니다.\n`ApiLink`에서 전체 요청 URL을 구성할 때 사용됩니다.",
    },
    {
        prop: "controllerPath",
        type: "string",
        default: "'/hison-api-link'",
        explain:
        "API 요청의 기본 컨트롤러 경로입니다.\n요청 시 `protocol`과 `domain` 뒤에 추가됩니다.\n`ApiLink`에서 API 요청 URL을 구성할 때 사용됩니다.",
    },
    {
        prop: "timeout",
        type: "number",
        default: "10000",
        explain:
        "API 요청의 타임아웃 시간(밀리초)입니다.\n요청이 해당 시간 내에 완료되지 않으면 중단됩니다.\n`ApiLink._getFetch()`에서 설정됩니다.",
    },
    {
        prop: "webSocketProtocol",
        type: "string",
        default: "'ws://'",
        explain:
        "WebSocket 통신에 사용되는 기본 프로토콜입니다.\n`ApiLink`에서 WebSocket 초기화 시 사용됩니다.",
    },
    {
        prop: "webSocketEndPoint",
        type: "string",
        default: "'/hison-websocket-endpoint'",
        explain:
        "캐싱 관련 통신을 위한 기본 WebSocket 엔드포인트입니다.\n`ApiLink`에서 WebSocket 연결 시 사용됩니다.",
    },
    {
        prop: "cachingLimit",
        type: "number",
        default: "10",
        explain:
        "API 응답 캐시의 최대 저장 개수입니다.\n최대 개수를 초과하면 오래된 항목이 제거됩니다.\n`ApiLink._getCachingResult()`에서 캐시 관리에 사용됩니다.",
    },

    // ---- 요청 전 훅 ----
    {
        prop: "beforeGetRequest",
        type: "(resourcePath?: string, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "GET 요청 전 실행되는 훅입니다.\n요청 파라미터를 수정하거나 요청을 취소할 수 있습니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },
    {
        prop: "beforePostRequest",
        type: "(requestData?: InterfaceDataWrapper, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "POST 요청 전 실행되는 훅입니다.\n요청 데이터를 수정하거나 취소할 수 있습니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },
    {
        prop: "beforePutRequest",
        type: "(requestData?: InterfaceDataWrapper, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "PUT 요청 전 실행되는 훅입니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },
    {
        prop: "beforePatchRequest",
        type: "(requestData?: InterfaceDataWrapper, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "PATCH 요청 전 실행되는 훅입니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },
    {
        prop: "beforeDeleteRequest",
        type: "(requestData?: InterfaceDataWrapper, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "DELETE 요청 전 실행되는 훅입니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },

    // ---- 요청 후 훅 ----
    {
        prop: "afterGetRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "GET 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },
    {
        prop: "afterPostRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "POST 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },
    {
        prop: "afterPutRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "PUT 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },
    {
        prop: "afterPatchRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "PATCH 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },
    {
        prop: "afterDeleteRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "DELETE 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },

    // ---- URL 기반 요청 전 훅 ----
    {
        prop: "beforeGetUrlRequest",
        type: "(url?: string, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "특정 URL로 GET 요청을 보내기 전 실행되는 훅입니다.\n요청을 수정하거나 취소할 수 있습니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },
    {
        prop: "beforePostUrlRequest",
        type: "(url?: string, requestData?: any, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "특정 URL로 POST 요청을 보내기 전 실행되는 훅입니다.\n요청 데이터를 수정하거나 취소할 수 있습니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },
    {
        prop: "beforePutUrlRequest",
        type: "(url?: string, requestData?: any, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "특정 URL로 PUT 요청 전 실행되는 훅입니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },
    {
        prop: "beforePatchUrlRequest",
        type: "(url?: string, requestData?: any, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "특정 URL로 PATCH 요청 전 실행되는 훅입니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },
    {
        prop: "beforeDeleteUrlRequest",
        type: "(url?: string, requestData?: any, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "특정 URL로 DELETE 요청 전 실행되는 훅입니다.\n`false`를 반환하면 요청이 취소됩니다.",
    },

    // ---- URL 기반 요청 후 훅 ----
    {
        prop: "afterGetUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "특정 URL의 GET 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },
    {
        prop: "afterPostUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "특정 URL의 POST 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },
    {
        prop: "afterPutUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "특정 URL의 PUT 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },
    {
        prop: "afterPatchUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "특정 URL의 PATCH 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },
    {
        prop: "afterDeleteUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "특정 URL의 DELETE 요청 완료 후 실행되는 훅입니다.\n응답 후처리를 할 수 있으며, `false`를 반환하면 응답이 무효화됩니다.",
    },

    // ---- 인터셉터 ----
    {
        prop: "interceptApiResult",
        type: "(result: InterfaceDataWrapper | undefined, response: Response) => boolean | void",
        default: "() => true",
        explain:
        "API 응답을 호출자에게 반환하기 전에 가로채서 처리합니다.\n`false`를 반환하면 이후 처리가 중단됩니다.",
    },
    {
        prop: "interceptApiError",
        type: "(error: any) => boolean | void",
        default: "() => true",
        explain:
        "API 오류를 호출자에게 반환하기 전에 가로채서 처리합니다.\n`false`를 반환하면 추가 오류 처리가 중단됩니다.",
    },
]

//component
export const componentConfigGridDataKo = [
    {
        prop: "note",
        type: "VanillanoteConfig",
        default: "-",
        explain:
        "npm 패키지 `vanillanote2`를 사용합니다. 상세 스펙은 vanillanote2 문서를 따릅니다.\n" +
        "`HisonConfig.componentStyle` 기준으로 스타일이 적용되므로, vanillanote의 일부 속성은 무시될 수 있습니다."
    },
    {
        prop: "grid",
        type: "VanillagridConfig",
        default: "-",
        explain:
        "npm 패키지 `vanillagrid2`를 사용합니다. 상세 스펙은 vanillagrid2 문서를 따릅니다.\n" +
        "스타일은 `HisonConfig.componentStyle`을 따르므로, vanillagrid의 일부 속성은 무시될 수 있습니다."
    },
    {
        prop: "chart",
        type: "Defaults /* chart.js */",
        default: "-",
        explain:
        "`chart.js`(v^4.5.0)를 사용합니다. 이 객체는 chart.js의 기본 옵션을 나타냅니다.\n" +
        "전체 스키마는 chart.js 문서를 참고하세요."
    },
    {
        prop: "filesetTotalSize",
        type: "number /* bytes */",
        default: "-",
        explain:
        "단일 HFileSet 컴포넌트에서 업로드되는 모든 파일의 **총합** 최대 용량(바이트)입니다.\n" +
        "`hison.setMaxFilesetTotalSize(bytes)`로 전역 설정할 수 있습니다."
    },
    {
        prop: "filesetSize",
        type: "number /* bytes */",
        default: "-",
        explain:
        "HFileSet에서 **개별 파일**의 최대 업로드 용량(바이트)입니다.\n" +
        "`hison.setMaxFilesetSize(bytes)`로 전역 설정할 수 있습니다."
    }
]

//componentStyle
export const componentStyleConfigGridDataKo = [
    {
        prop: "size",
        type: "'s' | 'm' | 'l' | 'xl'",
        default: "'m'",
        explain:
        "전역 컴포넌트의 기본 크기입니다.\n모든 컴포넌트의 기본 레이아웃과 간격을 결정합니다.\n가능한 값: 작음(s), 보통(m), 큼(l), 매우 큼(xl).",
    },
    {
        prop: "primaryColor",
        type: "string",
        default: "-",
        explain:
        "모든 컴포넌트에서 사용되는 주요 색상입니다.\n주로 버튼, 강조 요소, 활성 상태 등에 적용됩니다.",
    },
    {
        prop: "mutedColor",
        type: "string",
        default: "-",
        explain:
        "보조 또는 비활성화된 요소에 사용되는 중간톤의 색상입니다.",
    },
    {
        prop: "infoColor",
        type: "string",
        default: "-",
        explain: "정보성 메시지나 요소에 사용되는 색상입니다.",
    },
    {
        prop: "successColor",
        type: "string",
        default: "-",
        explain: "성공 상태 또는 완료 동작을 나타내는 색상입니다.",
    },
    {
        prop: "dangerColor",
        type: "string",
        default: "-",
        explain: "에러, 경고, 삭제 등의 위험 동작을 나타내는 색상입니다.",
    },
    {
        prop: "warningColor",
        type: "string",
        default: "-",
        explain: "주의 또는 경고 상태를 표시할 때 사용되는 색상입니다.",
    },
    {
        prop: "filledColor",
        type: "string",
        default: "-",
        explain:
        "채워진(filled) 형태의 요소에 적용되는 배경색입니다.\n예: 버튼, 배지 등.",
    },
    {
        prop: "emptyColor",
        type: "string",
        default: "-",
        explain:
        "비어 있는(empty) 또는 투명한 상태의 요소에 사용되는 배경색입니다.",
    },
    {
        prop: "filledTextColor",
        type: "string",
        default: "-",
        explain:
        "채워진(filled) 요소 내 텍스트 색상입니다.\n예: 채워진 버튼의 글자색.",
    },
    {
        prop: "emptyTextColor",
        type: "string",
        default: "-",
        explain:
        "비어 있는(empty) 또는 외곽선(outline) 요소 내 텍스트 색상입니다.",
    },
    {
        prop: "invertColor",
        type: "boolean",
        default: "false",
        explain:
        "색상을 반전할지 여부입니다.\n다크 모드에서 배경색과 텍스트 색상을 반전시킬 때 사용됩니다.",
    },
    {
        prop: "minHeightS",
        type: "number",
        default: "1.7",
        explain:
        "컴포넌트 크기가 small(`s`)일 때의 기본 높이입니다. 단위: rem.\n작은 크기의 요소에 적용됩니다.",
    },
    {
        prop: "minHeightM",
        type: "number",
        default: "2",
        explain:
        "컴포넌트 크기가 medium(`m`)일 때의 기본 높이입니다. 단위: rem.\n기본적인 컴포넌트 높이로 사용됩니다.",
    },
    {
        prop: "minHeightL",
        type: "number",
        default: "2.3",
        explain:
        "컴포넌트 크기가 large(`l`)일 때의 기본 높이입니다. 단위: rem.\n입력창, 버튼 등 큰 요소에 적용됩니다.",
    },
    {
        prop: "minHeightXL",
        type: "number",
        default: "2.6",
        explain:
        "컴포넌트 크기가 extra large(`xl`)일 때의 기본 높이입니다. 단위: rem.\n히어로 섹션이나 확장된 UI에 사용됩니다.",
    },
    {
        prop: "fontSizeS",
        type: "number",
        default: "0.8",
        explain:
        "크기가 small(`s`)일 때의 기본 폰트 크기입니다. 단위: rem.\n컴팩트한 UI 요소에 적용됩니다.",
    },
    {
        prop: "fontSizeM",
        type: "number",
        default: "0.9",
        explain:
        "크기가 medium(`m`)일 때의 기본 폰트 크기입니다. 단위: rem.\n대부분의 기본 컴포넌트에 사용됩니다.",
    },
    {
        prop: "fontSizeL",
        type: "number",
        default: "1.0",
        explain:
        "크기가 large(`l`)일 때의 기본 폰트 크기입니다. 단위: rem.\n제목이나 큰 버튼 등에 사용됩니다.",
    },
    {
        prop: "fontSizeXL",
        type: "number",
        default: "1.1",
        explain:
        "크기가 extra large(`xl`)일 때의 기본 폰트 크기입니다. 단위: rem.\n헤더나 강조 텍스트에 사용됩니다.",
    },
]

//cssEvent
export const cssEventConfigGridDataKo = [
    // ---- Textbox 이벤트 ----
    {
        prop: "textbox_onBeforeFocus",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain:
        "텍스트박스가 포커스를 받기 **전에** 호출됩니다. `false`를 반환하면 포커스가 취소됩니다.",
    },
    {
        prop: "textbox_onAfterFocus",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "텍스트박스가 포커스를 받은 **후에** 호출됩니다.",
    },
    {
        prop: "textbox_onBeforeBlur",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "텍스트박스가 포커스를 잃기 **전에** 호출됩니다. `false`를 반환하면 블러가 취소됩니다.",
    },
    {
        prop: "textbox_onAfterBlur",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "텍스트박스가 포커스를 잃은 **후에** 호출됩니다.",
    },
    {
        prop: "textbox_onBeforeClick",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "텍스트박스를 클릭하기 **전에** 호출됩니다. `false`를 반환하면 클릭이 취소됩니다.",
    },
    {
        prop: "textbox_onAfterClick",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "텍스트박스를 클릭한 **후에** 호출됩니다.",
    },
    {
        prop: "textbox_onBeforeMouseover",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "텍스트박스 위로 마우스가 올라가기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "textbox_onAfterMouseover",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "텍스트박스 위로 마우스가 올라간 **후에** 호출됩니다.",
    },
    {
        prop: "textbox_onBeforeMouseout",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "텍스트박스에서 마우스가 벗어나기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "textbox_onAfterMouseout",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "텍스트박스에서 마우스가 벗어난 **후에** 호출됩니다.",
    },
    {
        prop: "textbox_onBeforeTouchstart",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "텍스트박스를 터치하기 **전에** 호출됩니다. `false`를 반환하면 터치가 취소됩니다.",
    },
    {
        prop: "textbox_onAfterTouchstart",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "텍스트박스를 터치한 **후에** 호출됩니다.",
    },
    {
        prop: "textbox_onBeforeTouchend",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "텍스트박스 터치가 종료되기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "textbox_onAfterTouchend",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "텍스트박스 터치가 종료된 **후에** 호출됩니다.",
    },

    // ---- Button 이벤트 ----
    {
        prop: "button_onBeforeFocus",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "버튼이 포커스를 받기 **전에** 호출됩니다. `false`를 반환하면 포커스가 취소됩니다.",
    },
    {
        prop: "button_onAfterFocus",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "버튼이 포커스를 받은 **후에** 호출됩니다.",
    },
    {
        prop: "button_onBeforeBlur",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "버튼이 포커스를 잃기 **전에** 호출됩니다. `false`를 반환하면 블러가 취소됩니다.",
    },
    {
        prop: "button_onAfterBlur",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "버튼이 포커스를 잃은 **후에** 호출됩니다.",
    },
    {
        prop: "button_onBeforeClick",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "버튼을 클릭하기 **전에** 호출됩니다. `false`를 반환하면 클릭이 취소됩니다.",
    },
    {
        prop: "button_onAfterClick",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "버튼을 클릭한 **후에** 호출됩니다.",
    },
    {
        prop: "button_onBeforeMouseover",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "버튼 위로 마우스가 올라가기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "button_onAfterMouseover",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "버튼 위로 마우스가 올라간 **후에** 호출됩니다.",
    },
    {
        prop: "button_onBeforeMouseout",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "버튼에서 마우스가 벗어나기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "button_onAfterMouseout",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "버튼에서 마우스가 벗어난 **후에** 호출됩니다.",
    },
    {
        prop: "button_onBeforeTouchstart",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "버튼을 터치하기 **전에** 호출됩니다. `false`를 반환하면 터치가 취소됩니다.",
    },
    {
        prop: "button_onAfterTouchstart",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "버튼을 터치한 **후에** 호출됩니다.",
    },
    {
        prop: "button_onBeforeTouchend",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "버튼 터치가 종료되기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "button_onAfterTouchend",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "버튼 터치가 종료된 **후에** 호출됩니다.",
    },

    // ---- Input 이벤트 ----
    {
        prop: "input_onBeforeFocus",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "입력 요소가 포커스를 받기 **전에** 호출됩니다. `false`를 반환하면 포커스가 취소됩니다.",
    },
    {
        prop: "input_onAfterFocus",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "입력 요소가 포커스를 받은 **후에** 호출됩니다.",
    },
    {
        prop: "input_onBeforeBlur",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "입력 요소가 포커스를 잃기 **전에** 호출됩니다. `false`를 반환하면 블러가 취소됩니다.",
    },
    {
        prop: "input_onAfterBlur",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "입력 요소가 포커스를 잃은 **후에** 호출됩니다.",
    },
    {
        prop: "input_onBeforeMouseover",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "입력 요소 위로 마우스가 올라가기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "input_onAfterMouseover",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "입력 요소 위로 마우스가 올라간 **후에** 호출됩니다.",
    },
    {
        prop: "input_onBeforeMouseout",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "입력 요소에서 마우스가 벗어나기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "input_onAfterMouseout",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "입력 요소에서 마우스가 벗어난 **후에** 호출됩니다.",
    },
    {
        prop: "input_onBeforeTouchstart",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "입력 요소를 터치하기 **전에** 호출됩니다. `false`를 반환하면 터치가 취소됩니다.",
    },
    {
        prop: "input_onAfterTouchstart",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "입력 요소를 터치한 **후에** 호출됩니다.",
    },
    {
        prop: "input_onBeforeTouchend",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "입력 요소 터치가 종료되기 **전에** 호출됩니다. `false`를 반환하면 취소됩니다.",
    },
    {
        prop: "input_onAfterTouchend",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "입력 요소 터치가 종료된 **후에** 호출됩니다.",
    },
]

//En
//bagic
export const utilsConfigGridDataEn = [
    {
        prop: "dateFormat",
        type: "DateFormat",
        default: "yyyy-MM-dd",
        explain:
        "The default format for displaying dates.\nThis format is used throughout the `hisondev` solution for parsing and formatting date values.\nCan be modified using `setDateFormat(format: string)`.",
    },
    {
        prop: "timeFormat",
        type: "TimeFormat",
        default: "hh:mm:ss",
        explain:
        "The default format for displaying time.\nUsed throughout the `hisondev` solution for parsing and formatting time values.\nCan be modified using `setTimeFormat(format: string)`.",
    },
    {
        prop: "datetimeFormat",
        type: "DateTimeFormat",
        default: "yyyy-MM-dd hh:mm:ss",
        explain:
        "The default format for displaying both date and time.\nUsed for parsing and formatting datetime values across the solution.\nCan be modified using `setDatetimeFormat(format: string)`.",
    },
    {
        prop: "yearFormat",
        type: "YearFormat",
        default: "yyyy",
        explain:
        "The default format for displaying the year.\nUsed in date-related operations.\nCan be modified using `setYearFormat(format: string)`.",
    },
    {
        prop: "monthFormat",
        type: "MonthFormat",
        default: "M",
        explain:
        "The default format for displaying the month.\nUsed in date-related operations.\nCan be modified using `setMonthFormat(format: string)`.",
    },
    {
        prop: "yearMonthFormat",
        type: "YearMonthFormat",
        default: "yyyy-MM",
        explain:
        "The default format for displaying year and month.\nUsed to represent combined year–month values.\nCan be modified using `setYearMonthFormat(format: string)`.",
    },
    {
        prop: "dayFormat",
        type: "DayFormat",
        default: "d",
        explain:
        "The default format for displaying the day of the month.\nUsed in date-related operations.\nCan be modified using `setDayFormat(format: string)`.",
    },
    {
        prop: "dayOfWeekFormat",
        type: "DayOfWeekFormat",
        default: "d",
        explain:
        "The default format for displaying the day of the week.\nUsed to represent weekday values.\nCan be modified using `setDayOfWeekFormat(format: string)`.",
    },
    {
        prop: "hourFormat",
        type: "HourFormat",
        default: "h",
        explain:
        "Defines the default format for displaying the hour in 24-hour time operations.\n'h' → hour without leading zero (e.g., '5', '13')\n'hh' → hour with leading zero (e.g., '05', '13')\nCan be modified using `setHourFormat(format: HourFormat)`.",
    },
    {
        prop: "hourMinuteFormat",
        type: "HourMinuteFormat",
        default: "hh:mm",
        explain:
        "The default format for displaying hour and minute.\nUsed to represent time in hours and minutes.\nCan be modified using `setHourMinuteFormat(format: string)`.",
    },
    {
        prop: "minuteFormat",
        type: "MinuteFormat",
        default: "m",
        explain:
        "The default format for displaying the minute.\nUsed in time-related operations.\nCan be modified using `setMinuteFormat(format: string)`.",
    },
    {
        prop: "secondFormat",
        type: "SecondFormat",
        default: "s",
        explain:
        "The default format for displaying the second.\nUsed in time-related operations.\nCan be modified using `setSecondFormat(format: string)`.",
    },
    {
        prop: "numberFormat",
        type: "string",
        default: "#,##0.##",
        explain:
        "The default format for displaying numbers.\nRepresents numeric values with grouping separators and decimal precision.\nCan be modified using `setNumberFormat(format: string)`.",
    },
    {
        prop: "LESSOREQ_0X7FF_BYTE",
        type: "number",
        default: "2",
        explain:
        "The byte size used for characters with `charCode <= 0x7FF`.\nDefines the number of bytes required to encode characters in this range.",
    },
    {
        prop: "LESSOREQ_0XFFFF_BYTE",
        type: "number",
        default: "3",
        explain:
        "The byte size used for characters with `charCode <= 0xFFFF`.\nDefines the number of bytes required to encode characters in this range.",
    },
    {
        prop: "GREATER_0XFFFF_BYTE",
        type: "number",
        default: "4",
        explain:
        "The byte size used for characters with `charCode > 0xFFFF`.\nDefines the number of bytes required to encode characters in this range.",
    },
]

export const shieldConfigGridDataEn = [
    {
        prop: "shieldURL",
        type: "string",
        default: '""',
        explain:
        "The URL used to enforce access restrictions.\nIf this value is set, the system verifies whether the current location matches the specified URL. If not, access may be blocked.\nUsed in `shield.excute(hison: Hison)` to validate the URL.",
    },
    {
        prop: "exposeIpList",
        type: "string[]",
        default: '["0:0:0:0:0:0:0:1"]',
        explain:
        "A list of IP addresses that are allowed to bypass security restrictions.\nWhen the shield mechanism is activated, only these IPs are granted access.\nUsed in `shield.excute(hison: Hison)` to verify access permissions.",
    },
    {
        prop: "isFreeze",
        type: "boolean",
        default: "true",
        explain:
        "Determines whether the `Hison` instance should be frozen to prevent modifications.\nIf `true`, the `Hison` object and its properties are deeply frozen using `Object.freeze()` to ensure immutability.\nUsed in `shield.excute(hison: Hison)`, where `deepFreeze(hison)` is applied.",
    },
    {
        prop: "isPossibleGoBack",
        type: "boolean",
        default: "false",
        explain:
        "Determines whether browser back navigation is allowed.\nIf `false`, a mechanism prevents the user from navigating back using `history.pushState()`.\nUsed in `shield.excute(hison: Hison)`.",
    },
    {
        prop: "isPossibleOpenDevTool",
        type: "boolean",
        default: "false",
        explain:
        "Determines whether developer tools can be opened.\nIf `false`, an event listener detects devtool access (F12, resize, or debugging) and may alert the user.\nUsed in `shield.excute(hison: Hison)` with `shieldFuncCreateBlockDevMode()`.",
    },
    {
        prop: "doDetectDevTool",
        type: "() => void",
        default: "() => {}",
        explain:
        "A custom function executed when developer tools are detected.\nAllows developers to define custom behavior, such as pausing execution or alerting the user.\nTriggered in `shield.excute(hison: Hison)` when devtool activity is suspected.\nCan be set using `hison.setDoDetectDevTool(func)`.\nCommon actions include inserting a `debugger;` statement or halting program flow.",
    },
]

export const dataConfigGridDataEn = [
  {
    prop: "convertValue",
    type: "(value: any) => any",
    default: "(value) => value",
    explain:
      "A function that allows customization of how specific objects are inserted into a `DataModel`.\nIn `hisondev`, all values inserted into a `DataModel` are copied to maintain data integrity. However, some objects (e.g., `Date`) may require special handling.\nThis function lets developers define custom conversion logic before a value is inserted into the `DataModel`.\nUsed in `DataModel._deepCopy(object)` when handling non-plain objects.\nBy default, it returns the input value as is.\n\nExample:\n```typescript\nhison.setConvertValue((value: any) => {\n  return value instanceof Date ? value.getTime() : value;\n});\n```\nThe above converts `Date` objects into timestamps before insertion.",
  },
]

export const linkConfigGridDataEn = [
    {
        prop: "protocol",
        type: "string",
        default: "'http://'",
        explain:
        "The default protocol used for API communication.\nUsed in `ApiLink` to construct request URLs.",
    },
    {
        prop: "domain",
        type: "string",
        default: "'localhost:8080'",
        explain:
        "The default domain for API requests.\nUsed in `ApiLink` when constructing full request URLs.",
    },
    {
        prop: "controllerPath",
        type: "string",
        default: "'/hison-api-link'",
        explain:
        "The default controller path for API requests.\nAppended to `protocol` and `domain` when making API calls.\nUsed in `ApiLink` when constructing API request URLs.",
    },
    {
        prop: "timeout",
        type: "number",
        default: "10000",
        explain:
        "The timeout duration (ms) for API requests.\nIf a request does not complete within this time, it will be aborted.\nUsed in `ApiLink._getFetch()` to set request timeouts.",
    },
    {
        prop: "webSocketProtocol",
        type: "string",
        default: "'ws://'",
        explain:
        "The default protocol used for WebSocket communication.\nUsed in `ApiLink` when initializing WebSocket connections.",
    },
    {
        prop: "webSocketEndPoint",
        type: "string",
        default: "'/hison-websocket-endpoint'",
        explain:
        "The default WebSocket endpoint for caching-related communication.\nUsed in `ApiLink` when establishing WebSocket connections.",
    },
    {
        prop: "cachingLimit",
        type: "number",
        default: "10",
        explain:
        "The caching limit for stored API responses.\nDetermines the maximum number of cached responses before old ones are removed.\nUsed in `ApiLink._getCachingResult()` for cache management.",
    },

    // ---- Before request hooks ----
    {
        prop: "beforeGetRequest",
        type: "(resourcePath?: string, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a GET request.\nCan modify request parameters or cancel the request.\nReturning `false` cancels the request.",
    },
    {
        prop: "beforePostRequest",
        type: "(requestData?: InterfaceDataWrapper, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a POST request.\nAllows modifying the request or canceling it.\nReturning `false` cancels the request.",
    },
    {
        prop: "beforePutRequest",
        type: "(requestData?: InterfaceDataWrapper, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a PUT request.\nReturning `false` cancels the request.",
    },
    {
        prop: "beforePatchRequest",
        type: "(requestData?: InterfaceDataWrapper, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a PATCH request.\nReturning `false` cancels the request.",
    },
    {
        prop: "beforeDeleteRequest",
        type: "(requestData?: InterfaceDataWrapper, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a DELETE request.\nReturning `false` cancels the request.",
    },

    // ---- After request hooks ----
    {
        prop: "afterGetRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a GET request.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },
    {
        prop: "afterPostRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a POST request.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },
    {
        prop: "afterPutRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a PUT request.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },
    {
        prop: "afterPatchRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a PATCH request.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },
    {
        prop: "afterDeleteRequest",
        type: "(responseData?: { data: InterfaceDataWrapper; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a DELETE request.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },

    // ---- URL-based before hooks ----
    {
        prop: "beforeGetUrlRequest",
        type: "(url?: string, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a GET request to a specific URL.\nAllows modifying or canceling the request.\nReturning `false` cancels it.",
    },
    {
        prop: "beforePostUrlRequest",
        type: "(url?: string, requestData?: any, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a POST request to a specific URL.\nAllows modifying or canceling the request.\nReturning `false` cancels it.",
    },
    {
        prop: "beforePutUrlRequest",
        type: "(url?: string, requestData?: any, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a PUT request to a specific URL.\nReturning `false` cancels it.",
    },
    {
        prop: "beforePatchUrlRequest",
        type: "(url?: string, requestData?: any, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a PATCH request to a specific URL.\nReturning `false` cancels it.",
    },
    {
        prop: "beforeDeleteUrlRequest",
        type: "(url?: string, requestData?: any, options?: Record<string, any>) => boolean | void",
        default: "() => true",
        explain:
        "Hook executed before making a DELETE request to a specific URL.\nReturning `false` cancels it.",
    },

    // ---- URL-based after hooks ----
    {
        prop: "afterGetUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a GET request to a specific URL.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },
    {
        prop: "afterPostUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a POST request to a specific URL.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },
    {
        prop: "afterPutUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a PUT request to a specific URL.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },
    {
        prop: "afterPatchUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a PATCH request to a specific URL.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },
    {
        prop: "afterDeleteUrlRequest",
        type: "(responseData?: { data: any; response: Response }) => boolean | void",
        default: "() => {}",
        explain:
        "Hook executed after completing a DELETE request to a specific URL.\nAllows post-processing of the response.\nReturning `false` nullifies the response.",
    },

    // ---- Interceptors ----
    {
        prop: "interceptApiResult",
        type: "(result: InterfaceDataWrapper | undefined, response: Response) => boolean | void",
        default: "() => true",
        explain:
        "Intercepts and processes API responses before returning them to the caller.\nReturning `false` cancels further processing.",
    },
    {
        prop: "interceptApiError",
        type: "(error: any) => boolean | void",
        default: "() => true",
        explain:
        "Intercepts and processes API errors before returning them to the caller.\nReturning `false` cancels further error handling.",
    },
]

//component
export const componentConfigGridDataEn = [
    {
        prop: "note",
        type: "VanillanoteConfig",
        default: "-",
        explain:
        "Uses the npm package `vanillanote2`. Follow vanillanote2’s own spec.\n" +
        "Note that visual styles follow `HisonConfig.componentStyle`, so some vanillanote properties may be ignored."
    },
    {
        prop: "grid",
        type: "VanillagridConfig",
        default: "-",
        explain:
        "Uses the npm package `vanillagrid2`. Follow vanillagrid2’s own spec.\n" +
        "Visual styles follow `HisonConfig.componentStyle`, so some vanillagrid properties may be ignored."
    },
    {
        prop: "chart",
        type: "Defaults /* chart.js */",
        default: "-",
        explain:
        "Uses `chart.js` (v^4.5.0). This object represents chart.js default options.\n" +
        "Refer to chart.js documentation for the full schema."
    },
    {
        prop: "filesetTotalSize",
        type: "number /* bytes */",
        default: "-",
        explain:
        "Maximum total upload size across a single HFileSet component (sum of all selected files).\n" +
        "Can be set globally via `hison.setMaxFilesetTotalSize(bytes)`."
    },
    {
        prop: "filesetSize",
        type: "number /* bytes */",
        default: "-",
        explain:
        "Maximum per-file upload size for HFileSet.\n" +
        "Can be set globally via `hison.setMaxFilesetSize(bytes)`."
    }
]

//componentStyle
export const componentStyleConfigGridDataEn = [
    {
        prop: "size",
        type: "'s' | 'm' | 'l' | 'xl'",
        default: "'m'",
        explain:
        "The default global component size.\nDetermines the base layout and spacing of all components.\nPossible values: small(s), medium(m), large(l), extra-large(xl).",
    },
    {
        prop: "primaryColor",
        type: "string",
        default: "-",
        explain:
        "The primary color used across all components.\nTypically applied to highlights, buttons, and active elements.",
    },
    {
        prop: "mutedColor",
        type: "string",
        default: "-",
        explain:
        "A neutral or subdued color used for secondary or disabled elements.",
    },
    {
        prop: "infoColor",
        type: "string",
        default: "-",
        explain: "The color used for informational messages and components.",
    },
    {
        prop: "successColor",
        type: "string",
        default: "-",
        explain: "The color representing successful actions or statuses.",
    },
    {
        prop: "dangerColor",
        type: "string",
        default: "-",
        explain: "The color used for errors, alerts, or destructive actions.",
    },
    {
        prop: "warningColor",
        type: "string",
        default: "-",
        explain: "The color used for warnings and cautionary messages.",
    },
    {
        prop: "filledColor",
        type: "string",
        default: "-",
        explain:
        "The background color applied to filled elements (e.g., buttons, badges).",
    },
    {
        prop: "emptyColor",
        type: "string",
        default: "-",
        explain:
        "The background color used for empty or transparent states of elements.",
    },
    {
        prop: "filledTextColor",
        type: "string",
        default: "-",
        explain:
        "The text color used inside filled elements (e.g., text on filled buttons).",
    },
    {
        prop: "emptyTextColor",
        type: "string",
        default: "-",
        explain:
        "The text color used inside empty or outline elements (e.g., text on border-only buttons).",
    },
    {
        prop: "invertColor",
        type: "boolean",
        default: "false",
        explain:
        "Whether to invert colors for dark mode.\nWhen true, background and text colors are inverted for contrast.",
    },
    {
        prop: "minHeightS",
        type: "number",
        default: "1.7",
        explain:
        "The default element height when size is small (`s`). Unit: rem.\nUsed to ensure consistent vertical alignment.",
    },
    {
        prop: "minHeightM",
        type: "number",
        default: "2",
        explain:
        "The default element height when size is medium (`m`). Unit: rem.\nDefault global component height.",
    },
    {
        prop: "minHeightL",
        type: "number",
        default: "2.3",
        explain:
        "The default element height when size is large (`l`). Unit: rem.\nUsed for larger controls such as primary inputs or buttons.",
    },
    {
        prop: "minHeightXL",
        type: "number",
        default: "2.6",
        explain:
        "The default element height when size is extra large (`xl`). Unit: rem.\nApplied to hero elements or expanded UI blocks.",
    },
    {
        prop: "fontSizeS",
        type: "number",
        default: "0.8",
        explain:
        "The default font size when size is small (`s`). Unit: rem.\nUsed in compact UI elements.",
    },
    {
        prop: "fontSizeM",
        type: "number",
        default: "0.9",
        explain:
        "The default font size when size is medium (`m`). Unit: rem.\nStandard font size across most components.",
    },
    {
        prop: "fontSizeL",
        type: "number",
        default: "1",
        explain:
        "The default font size when size is large (`l`). Unit: rem.\nUsed for headers or larger interactive elements.",
    },
    {
        prop: "fontSizeXL",
        type: "number",
        default: "1.1",
        explain:
        "The default font size when size is extra large (`xl`). Unit: rem.\nUsed for titles or emphasized text.",
    },
]

//cssEvent
export const cssEventConfigGridDataEn = [
    // ---- Textbox Events ----
    {
        prop: "textbox_onBeforeFocus",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain:
        "Triggered **before** the textbox gains focus. Returning `false` cancels focus.",
    },
    {
        prop: "textbox_onAfterFocus",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "Triggered **after** the textbox gains focus.",
    },
    {
        prop: "textbox_onBeforeBlur",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "Triggered **before** the textbox loses focus. Returning `false` cancels blur.",
    },
    {
        prop: "textbox_onAfterBlur",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "Triggered **after** the textbox loses focus.",
    },
    {
        prop: "textbox_onBeforeClick",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "Triggered **before** clicking the textbox. Returning `false` cancels the click.",
    },
    {
        prop: "textbox_onAfterClick",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "Triggered **after** clicking the textbox.",
    },
    {
        prop: "textbox_onBeforeMouseover",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a mouseover on the textbox. Returning `false` cancels hover.",
    },
    {
        prop: "textbox_onAfterMouseover",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "Triggered **after** a mouseover on the textbox.",
    },
    {
        prop: "textbox_onBeforeMouseout",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "Triggered **before** the mouse leaves the textbox. Returning `false` cancels it.",
    },
    {
        prop: "textbox_onAfterMouseout",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "Triggered **after** the mouse leaves the textbox.",
    },
    {
        prop: "textbox_onBeforeTouchstart",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a touch starts on the textbox. Returning `false` cancels touch.",
    },
    {
        prop: "textbox_onAfterTouchstart",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "Triggered **after** a touch starts on the textbox.",
    },
    {
        prop: "textbox_onBeforeTouchend",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a touch ends on the textbox. Returning `false` cancels end.",
    },
    {
        prop: "textbox_onAfterTouchend",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "Triggered **after** a touch ends on the textbox.",
    },

    // ---- Button Events ----
    {
        prop: "button_onBeforeFocus",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "Triggered **before** the button gains focus. Returning `false` cancels focus.",
    },
    {
        prop: "button_onAfterFocus",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "Triggered **after** the button gains focus.",
    },
    {
        prop: "button_onBeforeBlur",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "Triggered **before** the button loses focus. Returning `false` cancels blur.",
    },
    {
        prop: "button_onAfterBlur",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "Triggered **after** the button loses focus.",
    },
    {
        prop: "button_onBeforeClick",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "Triggered **before** clicking the button. Returning `false` cancels the click.",
    },
    {
        prop: "button_onAfterClick",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "Triggered **after** clicking the button.",
    },
    {
        prop: "button_onBeforeMouseover",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a mouseover on the button. Returning `false` cancels hover.",
    },
    {
        prop: "button_onAfterMouseover",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "Triggered **after** a mouseover on the button.",
    },
    {
        prop: "button_onBeforeMouseout",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "Triggered **before** the mouse leaves the button. Returning `false` cancels it.",
    },
    {
        prop: "button_onAfterMouseout",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "Triggered **after** the mouse leaves the button.",
    },
    {
        prop: "button_onBeforeTouchstart",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a touch starts on the button. Returning `false` cancels touch.",
    },
    {
        prop: "button_onAfterTouchstart",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "Triggered **after** a touch starts on the button.",
    },
    {
        prop: "button_onBeforeTouchend",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a touch ends on the button. Returning `false` cancels end.",
    },
    {
        prop: "button_onAfterTouchend",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "Triggered **after** a touch ends on the button.",
    },

    // ---- Input Events ----
    {
        prop: "input_onBeforeFocus",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "Triggered **before** the input gains focus. Returning `false` cancels focus.",
    },
    {
        prop: "input_onAfterFocus",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "Triggered **after** the input gains focus.",
    },
    {
        prop: "input_onBeforeBlur",
        type: "(e: FocusEvent) => boolean",
        default: "-",
        explain: "Triggered **before** the input loses focus. Returning `false` cancels blur.",
    },
    {
        prop: "input_onAfterBlur",
        type: "(e: FocusEvent) => void",
        default: "-",
        explain: "Triggered **after** the input loses focus.",
    },
    {
        prop: "input_onBeforeMouseover",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a mouseover on the input. Returning `false` cancels hover.",
    },
    {
        prop: "input_onAfterMouseover",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "Triggered **after** a mouseover on the input.",
    },
    {
        prop: "input_onBeforeMouseout",
        type: "(e: MouseEvent) => boolean",
        default: "-",
        explain: "Triggered **before** the mouse leaves the input. Returning `false` cancels it.",
    },
    {
        prop: "input_onAfterMouseout",
        type: "(e: MouseEvent) => void",
        default: "-",
        explain: "Triggered **after** the mouse leaves the input.",
    },
    {
        prop: "input_onBeforeTouchstart",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a touch starts on the input. Returning `false` cancels touch.",
    },
    {
        prop: "input_onAfterTouchstart",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "Triggered **after** a touch starts on the input.",
    },
    {
        prop: "input_onBeforeTouchend",
        type: "(e: TouchEvent) => boolean",
        default: "-",
        explain: "Triggered **before** a touch ends on the input. Returning `false` cancels end.",
    },
    {
        prop: "input_onAfterTouchend",
        type: "(e: TouchEvent) => void",
        default: "-",
        explain: "Triggered **after** a touch ends on the input.",
    },
]