export const utilsGridDataKo = [
    // for Boolean
    {
    method: 'isAlpha',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 영문으로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isAlphaNumber',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 영문과 숫자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNumber',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 숫자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNumberSymbols',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 숫자와 특수문자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isIncludeSymbols',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 특수문자를 포함하고 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isLowerAlpha',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 소문자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isLowerAlphaNumber',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 소문자와 숫자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isUpperAlpha',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 대문자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isUpperAlphaNumber',
    param: 'String',
    return: 'Boolean',
    explain: '문자열이 대문자와 숫자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNumeric',
    param: 'String',
    return: 'Boolean',
    explain: '파라메터 값이 유효한 숫자이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isInteger',
    param: 'String or Number',
    return: 'Boolean',
    explain: '파라메터 값이 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isPositiveInteger',
    param: 'String or Number',
    return: 'Boolean',
    explain: '파라메터 값이 양의 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNegativeInteger',
    param: 'String or Number',
    return: 'Boolean',
    explain: '파라메터 값이 음의 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isArray',
    param: 'Array []',
    return: 'Boolean',
    explain: '파라메터 값이 배열이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isObject',
    param: 'Object {}',
    return: 'Boolean',
    explain: '파라메터 값이 키-값 쌍 객체이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isDate',
    param: 'dateObj {y, m, d} or String',
    return: 'Boolean',
    explain: '파라메터 값이 날짜 형식이면 true를 반환한다.\n{}의 y, M, d는 문자열 또는 숫자 형식의 년, 월, 일 값이다.\n문자열의 허용 형식은 yyyymmdd, yyyy-mm-dd, yyyy/mm/dd 이다.',
    note: '월, 일 값이 없으면 1월, 1일을 넣어준다. 1600.01.01 이전은 new Date()활용 이후는 정규식 활용 체크.'
    },
    {
    method: 'isTime',
    param: 'timeObj {h, mi, s} or String',
    return: 'Boolean',
    explain: '파라메터 값이 시간 형식이면 true를 반환한다.\n{}의 h, m, s는 문자열 또는 숫자 형식의 시, 분, 초이다.\n문자열의 허용 형식은 hh:mi:ss, hhmiss 이다.',
    note: '00:00:00 ~ 23:59:59 까지 허용'
    },
    {
    method: 'isDatetime',
    param: 'datatimeObj {y, m, d, h, mi, s} or String',
    return: 'Boolean',
    explain: '파라메터 값이 날짜 시간 형식이면 true를 반환한다.\ny, M, d, h, m, s는 문자열 또는 숫자 형식의 년, 월, 일, 시, 분, 초 값이다.\n문자열 허용 형식은 isDate()형식 공백 isTime()형식 이다.',
    note: 'Hison.utils.isDate와 Hison.utils.isTime을 활용한다. 날짜와 시간이 모두 유효해야 true.'
    },
    {
    method: 'isEmail',
    param: 'String',
    return: 'Boolean',
    explain: '파라메터 값이 메일 형식이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isURL',
    param: 'String',
    return: 'Boolean',
    explain: '파라메터 값이 URL 형식이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isValidMask',
    param: 'String value, String mask',
    return: 'Boolean',
    explain: '파라메터 값이 파라메터 Mask형식이면 true를 반환한다.',
    note: 'Mask형식은 A : 대문자, a : 소문자, 9 : 숫자 이며 다른문자는 마스크 문자와 정확히 일치해야 true'
    },

    // for Date
    {
    method: 'addDate',
    param: 'datatimeObj {y, m, d, h, mi, s} or String,\nString or Number addValue, String addType?, String format?',
    return: 'datatimeObj {y, m, d, h, mi, s} or String',
    explain: '날짜에 시간을 추가한다. 문자열 형태로 정의된 날짜 객체를 반환한다.\n{}의 y, M, d, h, m, s는 문자열 또는 숫자 형식의 년, 월, 일, 시, 분, 초 값이다.\n문자열 허용 형식은 isDate()형식 공백 isTime()형식 이다. 객체 삽입 시 객체 반환, 문자열 삽입 시 문자열 반환.',
    note: '객체 형식은 년도가 없으면 null반환.\n나머지는 기본값 1월, 1일, 0시, 0분, 0초. 문자열 형식은년월일, 또는 년월일 시분초.\naddValue는 숫자 또는 숫자 형태의 문자.\n없으면 null반환. addType이 \'y\'이면 년을 더한다.\naddType이 \'M\'이면 월을 더한다. addType이 \'d\'이면 일을 더한다.\naddType이 \'h\'이면 시간을 더한다. addType이 \'m\'이면 분을 더한다.\naddType이 \'s\'이면 초를 더한다. addType의 default는 \'d\'이다.\nformat의 default는 dateFormat or datetimeFormat'
    },
    {
    method: 'getDateDiff',
    param: 'datatimeObj1 {y, m, d, h, mi, s} or String,\ndatatimeObj2 {y, m, d, h, mi, s} or String, String diffType',
    return: 'Number',
    explain: '두 날짜의 차이를 가져온다. {}의 y, M, d, h, m, s는 문자열 또는 숫자 형식의 년, 월, 일, 시, 분, 초 값이다.\n문자열 허용 형식은 isDate()형식 공백 isTime()형식 이다.',
    note: '객체 형식은 년도가 없으면 null반환. 나머지는 기본값 1월, 1일, 0시, 0분, 0초.\n문자열 형식은년월일, 또는 년월일 시분초. diffType이 \'y\'이면 년 차이를 반환.\ndiffType이 \'M\'이면 월 차이를 반환. diffType이 \'d\'이면 일 차이를 반환.\ndiffType이 \'h\'이면 시간 차이를 반환. diffType이 \'m\'이면 분 차이를 반환.\ndiffType이 \'s\'이면 초 차이를 반환. diffType의 default는 \'d\'이다.'
    },
    {
    method: 'getMonthName',
    param: 'Number or String month, Boolean isFullName',
    return: 'String',
    explain: '해당 월의 영문표기를 가져온다. isFullName에 따라 "January" ~ "December" or "Jan" ~ "Dec" 를 반환',
    note: 'isFullName의 default는 true이다.'
    },
    {
    method: 'getDateWithFormat',
    param: 'datatimeObj {y, m, d, h, mi, s} or String, String format',
    return: 'String',
    explain: '{}의 y, M, d, h, m, s는 문자열 또는 숫자 형식의 년, 월, 일, 시, 분, 초 값이다.\n문자열 허용 형식은 isDate()형식 공백 isTime()형식 이다.\n파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.\ndefault는 \'yyyy-MM-dd hh:mm:ss\'',
    note: '객체 형식은 년도가 없으면 "" 반환. 나머지는 기본값 1월, 1일, 0시, 0분, 0초.\n문자열 형식은년월일, 또는 년월일 시분초. yyyy-MM-dd hh:mm:ss, MMMM은 월명(영문) MMM은 월의 축약어(영문)'
    },
    {
    method: 'getDayOfWeek',
    param: 'dateObj {y, m, d} or String, String dayType',
    return: 'String',
    explain: '해당 날짜의 요일을 반환한다.',
    note: '유효한 날짜가 아니면 ""반환. dayType이 \'d\'이면 0 ~ 6반환.\ndayType이 \'dy\'이면 \'Sun\' ~ \'Sat\'반환.\ndayType이 \'day\'이면 \'Sunday\' ~ \'Saturday\'반환.\ndayType이 \'kdy\'이면 \'일\' ~ \'토\'반환.\ndayType이 \'kday\'이면 \'일요일\' ~ \'토요일\'반환. default는 \'d\'.'
    },
    {
    method: 'getLastDay',
    param: 'dateObj {y, m, d} or String',
    return: 'Number',
    explain: '해당 연월의 마지막 일자를 반환한다.',
    note: '유효한 날짜가 아니면 \'\'반환.'
    },
    {
    method: 'getSysYearString',
    param: 'String',
    return: 'String',
    explain: '현재 년도를 반환한다.',
    note: 'format이 yy이면 끝 두자리 문자열 반환, default 4자리 문자열 반환.'
    },
    {
    method: 'getSysMonthString',
    param: 'String',
    return: 'String',
    explain: '현재 월을 반환한다.',
    note: 'format이 MM이면 \'01\', \'MMMM\'이면 \'January\', \'MMM\'이면 \'Jan\', default \'1\' 반환'
    },
    {
    method: 'getSysYearMonthString',
    param: 'String',
    return: 'String',
    explain: '현재 년월을 반환한다.',
    note: 'Hison.utils.getDateWithFormat을 활용하여 반환. default 는 \'yyyy-MM\'.'
    },
    {
    method: 'getSysDayString',
    param: 'String',
    return: 'String',
    explain: '현재 일자를 반환한다.',
    note: 'format이 dd이면 \'01\' 반환, default \'1\' 반환.'
    },
    {
    method: 'getSysDayOfWeekString',
    param: 'String',
    return: 'String',
    explain: '현재 요일을 반환한다.',
    note: 'Hison.utils.getDayOfWeek를 활용하여 반환. default는 \'d\'.'
    },
    {
    method: 'getSysHourString',
    param: 'String',
    return: 'String',
    explain: '현재 시각은 반환한다.',
    note: 'format이 hh이면 \'00\' 반환, default \'0\' 반환.'
    },
    {
    method: 'getSysHourMinuteString',
    param: 'String',
    return: 'String',
    explain: '현재 시분을 반환한다.',
    note: 'format이 hhmm이면 \'0000\' 반환, default \'00:00\' 반환.'
    },
    {
    method: 'getSysMinuteString',
    param: 'String',
    return: 'String',
    explain: '현재 분을 반환한다.',
    note: 'format이 mm이면 \'00\' 반환, default \'0\' 반환.'
    },
    {
    method: 'getSysSecondString',
    param: 'String',
    return: 'String',
    explain: '현재 초를 반환한다.',
    note: 'format이 ss이면 \'00\' 반환, default \'0\' 반환.'
    },
    {
    method: 'getSysTimeString',
    param: 'String',
    return: 'String',
    explain: '현재 시분초를 반환한다.',
    note: 'format이 hhmmss이면 \'000000\' 반환, default \'00:00:00\' 반환.'
    },
    {
    method: 'getSysDateString',
    param: 'String',
    return: 'String',
    explain: '현재 날짜를 반환한다.',
    note: 'Hison.utils.getDateWithFormat을 활용하여 반환. default 는 \'yyyy-MM-dd hh:mm:ss.'
    },

    // for Number
    {
    method: 'getCeil',
    param: 'Number num, Number precision',
    return: 'Number',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getFloor',
    param: 'Number num, Number precision',
    return: 'Number',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getRound',
    param: 'Number num, Number precision',
    return: 'Number',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getTrunc',
    param: 'Number num, Number precision',
    return: 'Number',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },

    // for String
    {
    method: 'getByteLength',
    param: 'String',
    return: 'Number',
    explain: '문자열의 Byte길이를 반환한다.',
    note: '계산시 Hison.const.LESSOREQ_0X7FF_BYTE : str.charCodeAt() <= 0x7FF 문자 default 2byte.\nHison.const.LESSOREQ_0XFFFF_BYTE: str.charCodeAt() <= 0xFFFF문자 default 3byte.\nHison.const.GREATER_0XFFFF_BYTE: str.charCodeAt() > 0xFFFF문자 default 4byte.\n예) 만약 EUC-KR을 사용하면 해당 변수를 모두 2로 설정하여 계산.'
    },
    {
    method: 'getCutByteLength',
    param: 'String str, Number cutByte',
    return: 'String',
    explain: '파라메터 문자열을 파라메터 Byte로 자른 값을 반환한다.',
    note: '계산시 Hison.const.LESSOREQ_0X7FF_BYTE : str.charCodeAt() <= 0x7FF 문자 default 2byte.\nHison.const.LESSOREQ_0XFFFF_BYTE: str.charCodeAt() <= 0xFFFF문자 default 3byte.\nHison.const.GREATER_0XFFFF_BYTE: str.charCodeAt() > 0xFFFF문자 default 4byte.\n예) 만약 EUC-KR을 사용하면 해당 변수를 모두 2로 설정하여 계산.'
    },
    {
    method: 'getStringLenForm',
    param: 'String str, Number length',
    return: 'String',
    explain: '파라메터 문자열에 사이사이 일정한 공백을 추가하여 길이 규격을 맞춘 값을 반환한다.',
    note: '삽입된 길이만큼 문자 간격을 맟추는데 앞 문자 부터 맞춘다. 길이가 모자르면 뒤 문자 간격이 틀어짐.'
    },
    {
    method: 'getLpad',
    param: 'String str, String pad, Number length',
    return: 'String',
    explain: '파라메터 문자열 왼쪽에 파라메터 특정 문자를 반복해 채운 값을 반환한다.',
    note: '반환될 문자가 length보다 크지 않을 만큼 반복문자를 채운다.'
    },
    {
    method: 'getRpad',
    param: 'String str, String pad, Number length',
    return: 'String',
    explain: '파라메터 문자열 오른쪽에 파라메터 특정 문자를 반복해 채운 값을 반환한다.',
    note: '반환될 문자가 length보다 크지 않을 만큼 반복문자를 채운다.'
    },
    {
    method: 'getTrim',
    param: 'String',
    return: 'String',
    explain: '파라메터 문자열 좌우 공백을 제거한 값을 반환한다.',
    note: '문자열이 아니어도 오류가 발생하지 않는다. \'\'반환'
    },
    {
    method: 'getRplaceAll',
    param: 'String str, String target, String replace',
    return: 'String',
    explain: '파라메터 문자열의 파라메터 문자일부를 파라메터 문자열로 치환한 값을 반환한다.',
    note: '문자열이 아니어도 오류가 발생하지 않는다. \'\'반환'
    },
    {
    method: 'nvl',
    param: 'value, defaultValue',
    return: 'value or defaultValue',
    explain: '값이 undifined, null인 경우 지정된 값을 반환한다.',
    note: ''
    },
    {
    method: 'getNumberFormat',
    param: 'Number value, String format',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: 'format의 형태 : /^(.*?)([#0,.]+)(.*?)$/이며 각 형식에 어긋나면 에러발생.\n기본값 : hison.utils.defaults.numberFormat(#,##0.#####)앞의 문자 + 숫자 형식 + 뒤의 문자 형태이며,\n문자는 그대로 반환되나 뒤의 문자 값이 \'%\' 또는 \' %\' 인 경우 수가 백분율로 계산되어 반환된다.\n숫자 형식은 정수형식 : #,##0(세자리 , 형식이며 null인 경우 0),\n#,###(세자리 , 형식이며 null or 0인 경우 null)\n0(단순 숫자 표현 형식이며 null인 경우 0),\n#(단순 숫자 표현 형식이며 null or 0인 경우 null)\n소수형식 : #(있으면 표현, 없으면 표현(X)), 0(있으면 표현, 없어도 표현) 이다.'
    },
    {
    method: 'getRemoveExceptNumbers',
    param: 'String',
    return: 'String',
    explain: '파라메터 문자열의 숫자를 제외한 모든 문자를 제거한 값을 반환한다.',
    note: '문자열이 아니어도 오류가 발생하지 않는다. \'\'반환'
    },
    {
    method: 'getRemoveNumbers',
    param: 'String',
    return: 'String',
    explain: '파라메터 문자열의 모든 숫자를 제거한 값을 반환한다.',
    note: '문자열이 아니어도 오류가 발생하지 않는다. \'\'반환'
    },
    {
    method: 'getReverseString',
    param: 'String',
    return: 'String',
    explain: '파라메터 문자열의 반전값을 반환한다.',
    note: '문자열이 아니어도 오류가 발생하지 않는다. \'\'반환'
    },

    // for Converter
    {
    method: 'getToBoolean',
    param: 'value',
    return: 'boolean',
    explain: '파라메터 값에 대해 Boolean타입으로 형변환 한 값을 반환한다.',
    note: '0을 제외한 모든 숫자(문자열숫자) 또는 true, \'t/T\', \'true/TRUE\', \'y/Y\', \'yes/YES\', \'check/CHECK\', \'c/C\', \'checked\', \'selected\', \'참\'이면 true'
    },
    {
    method: 'getToNumber',
    param: 'value, impossibleValue',
    return: 'Number',
    explain: '파라메터 값에 대해 Number타입으로 형변환 한 값을 반환한다.',
    note: '형변환 불가 시 impossibleValue반환. 기본 impossibleValue는 0.'
    },
    {
    method: 'getToFloat',
    param: 'value, impossibleValue',
    return: 'Number(float)',
    explain: '파라메터 값에 대해 float타입으로 형변환 한 값을 반환한다.',
    note: '형변환 불가 시 impossibleValue반환. 기본 impossibleValue는 0.'
    },
    {
    method: 'getToInteger',
    param: 'value, impossibleValue',
    return: 'Number(Integer)',
    explain: '파라메터 값에 대해 Integer타입으로 형변환 한 값을 반환한다.',
    note: '형변환 불가 시 impossibleValue반환. 기본 impossibleValue는 0.소수점은 버린다.'
    },
    {
    method: 'getToString',
    param: 'value, impossibleValue',
    return: 'String',
    explain: '파라메터 값에 대해 String타입으로 형변환 한 값을 반환한다.',
    note: '적절한 형변환 불가 시 impossibleValue반환. 기본 impossibleValue는 \'\'.'
    },

    // etc
    {
    method: 'getFileExtension',
    param: 'String',
    return: 'String',
    explain: '파라메터 URL 또는 파일명에서 확장자를 추출한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFileName',
    param: 'String',
    return: 'String',
    explain: '파라메터 URL 또는 파일명에서 확장자를 제외한 파일명 값을 반환한다.',
    note: ''
    },
    {
    method: 'getDecodeBase64',
    param: 'String',
    return: 'String',
    explain: '파라메터 값을 Base64로 디코딩한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getEncodeBase64',
    param: 'String',
    return: 'String',
    explain: '파라메터 값을 Base64로 인코딩한 값을 반환한다.',
    note: ''
    },
    {
    method: 'deepCopy',
    param: 'value',
    return: 'value',
    explain: '삽입되는 값을 깊은 복사하여 반환한다.',
    note: '깊은 복사가 불가한 객체는 해당 객체를 그대로 반환한다.'
    },
    {
    method: 'errorHandler',
    param: 'String code, String message, value',
    return: 'value',
    explain: 'utils 내부에서 에러처리시 사용되는 로직 code와 message를 콘솔로그에 띄우고 value를 반환한다.',
    note: 'value가 없으면 null 반환.'
    }
]

export const utilsConfigJsGridDataKo = [
    // Format Defaults
    {
    prop: 'dateFormat',
    default: '"yyyy-MM-dd"',
    explain: '날짜 문자열 출력 기본 형식',
    note: 'yyyyMMdd, yyyy-MM-dd, yyyy/MM/dd, yyyy. MM. dd, yyyy MM dd, MMddyyyy, MM-dd-yyyy, MM/dd/yyyy,\nMM. dd. yyyy, MMM dd yyyy, MMM dd, yyyy, MMMM dd yyyy, MMMM dd, yyyy,\nddMMyyyy, dd-MM-yyyy, dd/MM/yyyy, dd. MM. yyyy, dd MMM yyyy, dd MMMM yyyy'
    },
    {
    prop: 'timeFormat',
    explain: '시간 문자열 출력 기본 형식',
    default: '"hh:mm:ss"',
    note: 'hh:mm:ss, hhmm:ss'
    },
    {
    prop: 'datetimeFormat',
    explain: '날짜 시간 문자열 출력 기본 형식',
    default: '"yyyy-MM-dd hh:mm:ss"',
    note: 'dateFormat × timeFormat'
    },
    {
    prop: 'yearFormat',
    explain: '년도 문자열 출력 기본 형식',
    default: '"yyyy"',
    note: 'yyyy(2024), yy(24)'
    },
    {
    prop: 'monthFormat',
    explain: '월 문자열 출력 기본 형식',
    default: '"M"',
    note: 'M(1), MM(01), MMM(Jan), MMMM(January)'
    },
    {
    prop: 'yearMonthFormat',
    explain: '년월 문자열 출력 기본 형식',
    default: '"yyyy-MM"',
    note: 'yyyyMM, yyyy-MM, yyyy/MM, yyyy. MM, yyyy MM, MMyyyy, MM-yyyy,\nMM/yyyy, MM. yyyy, MM yyyy, MMM yyyy, MMM, yyyy, MMMM yyyy, MMMM, yyyy'
    },
    {
    prop: 'dayFormat',
    explain: '일 문자열 출력 기본 형식',
    default: '"d"',
    note: 'dd(01), d(1)'
    },
    {
    prop: 'dayOfWeekFormat',
    explain: '요일 출력 기본 형식',
    default: '"d"',
    note: 'd(0 ~ 6), dy(Sun ~ Sat), day(Sunday ~ Saturday),\nkdy(일 ~ 토), kday(일요일 ~ 토요일)'
    },
    {
    prop: 'hourFormat',
    explain: '시간 문자열 출력 기본 형식',
    default: '"h"',
    note: 'hh(01), h(1). 0 ~ 24시 기준이다.'
    },
    {
    prop: 'hourMinuteFormat',
    explain: '시분 문자열 출력 기본 형식',
    default: '"hh:mm"',
    note: 'hh:mm, hhmm'
    },
    {
    prop: 'minuteFormat',
    explain: '분 문자열 출력 기본 형식',
    default: '"m"',
    note: 'mm(01), m(1)'
    },
    {
    prop: 'secondFormat',
    explain: '초 문자열 출력 기본 형식',
    default: '"s"',
    note: 'ss(01), s(1)'
    },
    {
    prop: 'numberFormat',
    explain: '숫자 문자열 출력 기본 형식',
    default: '"#,##0.#####"',
    note: '정수 부 "#,###", "#,##0", "#", "0", 실수 부 "#", "0".'
    },

    // Byte Constants
    {
    prop: 'lessoreq0x7ffByte',
    explain: '0X7FF 이하 문자의 바이트 크기',
    default: '2',
    note: 'UTF-8 기준이다.'
    },
    {
    prop: 'lessoreq0xffffByte',
    explain: '0XFFFF 이하 문자의 바이트 크기',
    default: '3',
    note: 'UTF-8 기준이다.'
    },
    {
    prop: 'greater0xffffByte',
    explain: '0XFFFF 초과 문자의 바이트 크기',
    default: '4',
    note: 'UTF-8 기준이다.'
    }
]

export const utilsGridDataEn = [
    // for Boolean
    {
    method: 'isAlpha',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string consists of only English letters.',
    note: ''
    },
    {
    method: 'isAlphaNumber',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string consists of only English letters and numbers.',
    note: ''
    },
    {
    method: 'isNumber',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string consists of only numbers.',
    note: ''
    },
    {
    method: 'isNumberSymbols',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string consists of only numbers and special characters.',
    note: ''
    },
    {
    method: 'isIncludeSymbols',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string includes special characters.',
    note: ''
    },
    {
    method: 'isLowerAlpha',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string consists of only lowercase letters.',
    note: ''
    },
    {
    method: 'isLowerAlphaNumber',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string consists of only lowercase letters and numbers.',
    note: ''
    },
    {
    method: 'isUpperAlpha',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string consists of only uppercase letters.',
    note: ''
    },
    {
    method: 'isUpperAlphaNumber',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the string consists of only uppercase letters and numbers.',
    note: ''
    },
    {
    method: 'isNumeric',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is a valid number.',
    note: ''
    },
    {
    method: 'isInteger',
    param: 'String or Number',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is an integer.',
    note: ''
    },
    {
    method: 'isPositiveInteger',
    param: 'String or Number',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is a positive integer.',
    note: ''
    },
    {
    method: 'isNegativeInteger',
    param: 'String or Number',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is a negative integer.',
    note: ''
    },
    {
    method: 'isArray',
    param: 'Array []',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is an array.',
    note: ''
    },
    {
    method: 'isObject',
    param: 'Object {}',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is a key-value pair object.',
    note: ''
    },
    {
    method: 'isDate',
    param: 'dateObj {y, m, d} or String',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is a date format.\ny, M, and d in {} are year, month, and day values as strings or numbers.\nAllowed string formats are yyyymmdd, yyyy-mm-dd, yyyy/mm/dd.',
    note: 'If month and day values are missing, they are set to January 1st.\nChecks before 1600.01.01 use new Date(), checks after use regex.'
    },
    {
    method: 'isTime',
    param: 'timeObj {h, mi, s} or String',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is a time format.\nh, m, and s in {} are hour, minute, and second values as strings or numbers.\nAllowed string formats are hh:mi:ss, hhmiss.',
    note: 'Allows 00:00:00 ~ 23:59:59.'
    },
    {
    method: 'isDatetime',
    param: 'datatimeObj {y, m, d, h, mi, s} or String',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is a date-time format.\ny, M, d, h, m, and s are year, month, day, hour, minute, and second values as strings or numbers.\nAllowed string format is isDate() format followed by a space and isTime() format.',
    note: 'Utilizes Hison.utils.isDate and Hison.utils.isTime.\nReturns true only if both date and time are valid.'
    },
    {
    method: 'isEmail',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is an email format.',
    note: ''
    },
    {
    method: 'isURL',
    param: 'String',
    return: 'Boolean',
    explain: 'Returns true if the parameter value is a URL format.',
    note: ''
    },
    {
    method: 'isValidMask',
    param: 'String value, String mask',
    return: 'Boolean',
    explain: 'Returns true if the parameter value matches the parameter Mask format.',
    note: 'Mask format is A: uppercase, a: lowercase, 9: number.\nOther characters must exactly match the mask character to return true.'
    },

    // for Date
    {
    method: 'addDate',
    param: 'datatimeObj {y, m, d, h, mi, s} or String,\nString or Number addValue, String addType?, String format?',
    return: 'datatimeObj {y, m, d, h, mi, s} or String',
    explain: 'Adds time to a date. Returns the date object defined as a string or object.\ny, M, d, h, m, and s in {} are year, month, day, hour, minute, and second values as strings or numbers.\nAllowed string format is isDate() format followed by a space and isTime() format.\nReturns an object if object is inserted, returns a string if a string is inserted.',
    note: 'If year is missing in object format, returns null.\nOtherwise, default values are January 1st, 0 hours, 0 minutes, 0 seconds.\nString format requires YYYYMMDD or YYYYMMDD HHMMSS. addValue is a number or numeric string.\nReturns null if missing. If addType is \'y\', adds years. If addType is \'M\', adds months.\nIf addType is \'d\', adds days. If addType is \'h\', adds hours.\nIf addType is \'m\', adds minutes. If addType is \'s\', adds seconds.\nDefault addType is \'d\'. Default format is dateFormat or datetimeFormat.'
    },
    {
    method: 'getDateDiff',
    param: 'datatimeObj1 {y, m, d, h, mi, s} or String,\ndatatimeObj2 {y, m, d, h, mi, s} or String, String diffType',
    return: 'Number',
    explain: 'Returns the difference between two dates.\ny, M, d, h, m, and s in {} are year, month, day, hour, minute, and second values as strings or numbers.\nAllowed string format is isDate() format followed by a space and isTime() format.',
    note: 'If year is missing in object format, returns null.\nOtherwise, default values are January 1st, 0 hours, 0 minutes, 0 seconds.\nString format requires YYYYMMDD or YYYYMMDD HHMMSS.\nIf diffType is \'y\', returns year difference.\nIf diffType is \'M\', returns month difference.\nIf diffType is \'d\', returns day difference.\nIf diffType is \'h\', returns hour difference.\nIf diffType is \'m\', returns minute difference.\nIf diffType is \'s\', returns second difference. Default diffType is \'d\'.'
    },
    {
    method: 'getMonthName',
    param: 'Number or String month, Boolean isFullName',
    return: 'String',
    explain: 'Returns the English representation of the month.\nReturns "January" ~ "December" or "Jan" ~ "Dec" based on isFullName.',
    note: 'Default isFullName is true.'
    },
    {
    method: 'getDateWithFormat',
    param: 'datatimeObj {y, m, d, h, mi, s}\nor String, String format',
    return: 'String',
    explain: 'y, M, d, h, m, and s in {} are year, month, day, hour, minute,\nand second values as strings or numbers.\nAllowed string format is isDate() format followed by a space and isTime() format.\nReturns the date string in the specified parameter format.\nDefault is \'yyyy-MM-dd hh:mm:ss\'.',
    note: 'If year is missing in object format, returns "".\nOtherwise, default values are January 1st, 0 hours, 0 minutes, 0 seconds.\nString format requires YYYYMMDD or YYYYMMDD HHMMSS.\nMMMM is full month name (English), MMM is abbreviated month name (English).'
    },
    {
    method: 'getDayOfWeek',
    param: 'dateObj {y, m, d} or String, String dayType',
    return: 'String',
    explain: 'Returns the day of the week for the given date.',
    note: 'Returns "" if not a valid date. If dayType is \'d\', returns 0 ~ 6.\nIf dayType is \'dy\', returns \'Sun\' ~ \'Sat\'.\nIf dayType is \'day\', returns \'Sunday\' ~ \'Saturday\'.\nIf dayType is \'kdy\', returns \'일\' ~ \'토\' (Korean).\nIf dayType is \'kday\', returns \'일요일\' ~ \'토요일\' (Korean). Default is \'d\'.'
    },
    {
    method: 'getLastDay',
    param: 'dateObj {y, m, d} or String',
    return: 'Number',
    explain: 'Returns the last day of the month for the given year and month.',
    note: 'Returns \'\' if not a valid date.'
    },
    {
    method: 'getSysYearString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current year.',
    note: 'If format is yy, returns the last two digits as a string; default returns 4 digits as a string.'
    },
    {
    method: 'getSysMonthString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current month.',
    note: 'If format is MM, returns \'01\'; if \'MMMM\', returns \'January\';\nif \'MMM\', returns \'Jan\'; default returns \'1\'.'
    },
    {
    method: 'getSysYearMonthString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current year and month.',
    note: 'Utilizes Hison.utils.getDateWithFormat. Default is \'yyyy-MM\'.'
    },
    {
    method: 'getSysDayString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current day of the month.',
    note: 'If format is dd, returns \'01\'; default returns \'1\'.'
    },
    {
    method: 'getSysDayOfWeekString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current day of the week.',
    note: 'Utilizes Hison.utils.getDayOfWeek. Default is \'d\'.'
    },
    {
    method: 'getSysHourString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current hour.',
    note: 'If format is hh, returns \'00\'; default returns \'0\'.'
    },
    {
    method: 'getSysHourMinuteString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current hour and minute.',
    note: 'If format is hhmm, returns \'0000\'; default returns \'00:00\'.'
    },
    {
    method: 'getSysMinuteString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current minute.',
    note: 'If format is mm, returns \'00\'; default returns \'0\'.'
    },
    {
    method: 'getSysSecondString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current second.',
    note: 'If format is ss, returns \'00\'; default returns \'0\'.'
    },
    {
    method: 'getSysTimeString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current time (hour, minute, second).',
    note: 'If format is hhmmss, returns \'000000\'; default returns \'00:00:00\'.'
    },
    {
    method: 'getSysDateString',
    param: 'String',
    return: 'String',
    explain: 'Returns the current date and time.',
    note: 'Utilizes Hison.utils.getDateWithFormat. Default is \'yyyy-MM-dd hh:mm:ss.'
    },

    // for Number
    {
    method: 'getCeil',
    param: 'Number num, Number precision',
    return: 'Number',
    explain: 'Returns the parameter value rounded up (ceiling)\nto the position specified by the parameter precision.',
    note: 'Error occurs if conversion to number is not possible.'
    },
    {
    method: 'getFloor',
    param: 'Number num, Number precision',
    return: 'Number',
    explain: 'Returns the parameter value rounded down (floor)\nto the position specified by the parameter precision.',
    note: 'Error occurs if conversion to number is not possible.'
    },
    {
    method: 'getRound',
    param: 'Number num, Number precision',
    return: 'Number',
    explain: 'Returns the parameter value rounded (round)\nto the position specified by the parameter precision.',
    note: 'Error occurs if conversion to number is not possible.'
    },
    {
    method: 'getTrunc',
    param: 'Number num, Number precision',
    return: 'Number',
    explain: 'Returns the parameter value truncated\nto the position specified by the parameter precision.',
    note: 'Error occurs if conversion to number is not possible.'
    },

    // for String
    {
    method: 'getByteLength',
    param: 'String',
    return: 'Number',
    explain: 'Returns the byte length of the string.',
    note: 'Calculation uses: Hison.const.LESSOREQ_0X7FF_BYTE: default 2 bytes for str.charCodeAt() <= 0x7FF.\nHison.const.LESSOREQ_0XFFFF_BYTE: default 3 bytes for str.charCodeAt() <= 0xFFFF.\nHison.const.GREATER_0XFFFF_BYTE: default 4 bytes for str.charCodeAt() > 0xFFFF.\nExample: If using EUC-KR, set all variables to 2 for calculation.'
    },
    {
    method: 'getCutByteLength',
    param: 'String str, Number cutByte',
    return: 'String',
    explain: 'Returns the parameter string truncated to the parameter byte length.',
    note: 'Calculation uses: Hison.const.LESSOREQ_0X7FF_BYTE: default 2 bytes for str.charCodeAt() <= 0x7FF.\nHison.const.LESSOREQ_0XFFFF_BYTE: default 3 bytes for str.charCodeAt() <= 0xFFFF.\nHison.const.GREATER_0XFFFF_BYTE: default 4 bytes for str.charCodeAt() > 0xFFFF.\nExample: If using EUC-KR, set all variables to 2 for calculation.'
    },
    {
    method: 'getStringLenForm',
    param: 'String str, Number length',
    return: 'String',
    explain: 'Returns a value where certain spaces are added within\nthe parameter string to meet the specified length standard.',
    note: 'Spaces are adjusted to match the length, starting from the first character.\nIf the length is insufficient, the spacing between later characters will be skewed.'
    },
    {
    method: 'getLpad',
    param: 'String str, String pad, Number length',
    return: 'String',
    explain: 'Returns a value where the left side of the parameter\nstring is padded with the specified character repeatedly.',
    note: 'Pads repeatedly up to the length, ensuring the returned string is not longer than length.'
    },
    {
    method: 'getRpad',
    param: 'String str, String pad, Number length',
    return: 'String',
    explain: 'Returns a value where the right side of the parameter\nstring is padded with the specified character repeatedly.',
    note: 'Pads repeatedly up to the length, ensuring the returned string is not longer than length.'
    },
    {
    method: 'getTrim',
    param: 'String',
    return: 'String',
    explain: 'Returns the parameter string with leading and trailing spaces removed.',
    note: 'Does not cause an error if not a string. Returns \'\'.'
    },
    {
    method: 'getRplaceAll',
    param: 'String str, String target, String replace',
    return: 'String',
    explain: 'Returns the parameter string with all occurrences\nof the target string replaced by the replacement string.',
    note: 'Does not cause an error if not a string. Returns \'\'.'
    },
    {
    method: 'nvl',
    param: 'value, defaultValue',
    return: 'value or defaultValue',
    explain: 'Returns the specified defaultValue if the value is undefined or null.',
    note: ''
    },
    {
    method: 'getNumberFormat',
    param: 'Number value, String format',
    return: 'String',
    explain: 'Returns the parameter value converted to the parameter number format.',
    note: 'Format is /^(.*?)([#0,.]+)(.*?)$/. An error occurs if the format is invalid.\nDefault: hison.utils.defaults.numberFormat(#,##0.#####).\nFormat is: prefix + number format + suffix.\nThe prefix and suffix are returned as is,\nbut if the suffix is \'%\' or \' %\' the number is calculated as a percentage.\nNumber formats: Integer: #,##0 (thousands separator, 0 if null),\n#,### (thousands separator, null if null or 0).\n0 (simple number, 0 if null), # (simple number, null if null or 0).\nDecimal: # (show if present, hide otherwise), 0 (always show, even if not present).'
    },
    {
    method: 'getRemoveExceptNumbers',
    param: 'String',
    return: 'String',
    explain: 'Returns the parameter string with all characters except numbers removed.',
    note: 'Does not cause an error if not a string. Returns \'\'.'
    },
    {
    method: 'getRemoveNumbers',
    param: 'String',
    return: 'String',
    explain: 'Returns the parameter string with all numbers removed.',
    note: 'Does not cause an error if not a string. Returns \'\'.'
    },
    {
    method: 'getReverseString',
    param: 'String',
    return: 'String',
    explain: 'Returns the reversed value of the parameter string.',
    note: 'Does not cause an error if not a string. Returns \'\'.'
    },

    // for Converter
    {
    method: 'getToBoolean',
    param: 'value',
    return: 'boolean',
    explain: 'Returns the parameter value converted to a Boolean type.',
    note: 'Returns true if the value is any number except 0 (including numeric strings),\nor if it is true, \'t/T\', \'true/TRUE\', \'y/Y\', \'yes/YES\',\n\'check/CHECK\', \'c/C\', \'checked\',\n\'selected\', or \'참\' (Korean for true).'
    },
    {
    method: 'getToNumber',
    param: 'value, impossibleValue',
    return: 'Number',
    explain: 'Returns the parameter value converted to a Number type.',
    note: 'Returns impossibleValue if conversion is not possible. Default impossibleValue is 0.'
    },
    {
    method: 'getToFloat',
    param: 'value, impossibleValue',
    return: 'Number(float)',
    explain: 'Returns the parameter value converted to a float type.',
    note: 'Returns impossibleValue if conversion is not possible. Default impossibleValue is 0.'
    },
    {
    method: 'getToInteger',
    param: 'value, impossibleValue',
    return: 'Number(Integer)',
    explain: 'Returns the parameter value converted to an Integer type.',
    note: 'Returns impossibleValue if conversion is not possible. Default impossibleValue is 0. Decimals are truncated.'
    },
    {
    method: 'getToString',
    param: 'value, impossibleValue',
    return: 'String',
    explain: 'Returns the parameter value converted to a String type.',
    note: 'Returns impossibleValue if conversion is not possible. Default impossibleValue is \'\'.'
    },

    // etc
    {
    method: 'getFileExtension',
    param: 'String',
    return: 'String',
    explain: 'Extracts and returns the file extension from the parameter URL or filename.',
    note: ''
    },
    {
    method: 'getFileName',
    param: 'String',
    return: 'String',
    explain: 'Extracts and returns the filename excluding the extension from the parameter URL or filename.',
    note: ''
    },
    {
    method: 'getDecodeBase64',
    param: 'String',
    return: 'String',
    explain: 'Returns the parameter value decoded from Base64.',
    note: ''
    },
    {
    method: 'getEncodeBase64',
    param: 'String',
    return: 'String',
    explain: 'Returns the parameter value encoded to Base64.',
    note: ''
    },
    {
    method: 'deepCopy',
    param: 'value',
    return: 'value',
    explain: 'Returns a deep copy of the inserted value.',
    note: 'Returns the original object if deep copy is not possible.'
    },
    {
    method: 'errorHandler',
    param: 'String code, String message, value',
    return: 'value',
    explain: 'Logic used for error handling within utils.\nPrints the code and message to the console log and returns the value.',
    note: 'Returns null if value is not provided.'
    }
]

export const utilsConfigJsGridDataEn = [
    // Format Defaults
    {
    prop: 'dateFormat',
    explain: 'Default format for date string output',
    default: '"yyyy-MM-dd"',
    note: 'yyyyMMdd, yyyy-MM-dd, yyyy/MM/dd, yyyy. MM. dd, yyyy MM dd, MMddyyyy, MM-dd-yyyy,\nMM/dd/yyyy, MM. dd. yyyy, MMM dd yyyy, MMM dd, yyyy, MMMM dd yyyy,\nMMMM dd, yyyy, ddMMyyyy, dd-MM-yyyy, dd/MM/yyyy, dd. MM. yyyy,\ndd MMM yyyy, dd MMMM yyyy'
    },
    {
    prop: 'timeFormat',
    explain: 'Default format for time string output',
    default: '"hh:mm:ss"',
    note: 'hh:mm:ss, hhmm:ss'
    },
    {
    prop: 'datetimeFormat',
    explain: 'Default format for date time string output',
    default: '"yyyy-MM-dd hh:mm:ss"',
    note: 'dateFormat × timeFormat'
    },
    {
    prop: 'yearFormat',
    explain: 'Default format for year string output',
    default: '"yyyy"',
    note: 'yyyy(2024), yy(24)'
    },
    {
    prop: 'monthFormat',
    explain: 'Default format for month string output',
    default: '"M"',
    note: 'M(1), MM(01), MMM(Jan), MMMM(January)'
    },
    {
    prop: 'yearMonthFormat',
    explain: 'Default format for year and month string output',
    default: '"yyyy-MM"',
    note: 'yyyyMM, yyyy-MM, yyyy/MM, yyyy. MM, yyyy MM, MMyyyy, MM-yyyy, MM/yyyy,\nMM. yyyy, MM yyyy, MMM yyyy, MMM, yyyy, MMMM yyyy, MMMM, yyyy'
    },
    {
    prop: 'dayFormat',
    explain: 'Default format for day string output',
    default: '"d"',
    note: 'dd(01), d(1)'
    },
    {
    prop: 'dayOfWeekFormat',
    explain: 'Default format for day of week output',
    default: '"d"',
    note: 'd(0 ~ 6), dy(Sun ~ Sat), day(Sunday ~ Saturday),\nkdy(일 ~ 토), kday(일요일 ~ 토요일) (Korean)'
    },
    {
    prop: 'hourFormat',
    explain: 'Default format for hour string output',
    default: '"h"',
    note: 'hh(01), h(1). Based on 0 ~ 24 hour system.'
    },
    {
    prop: 'hourMinuteFormat',
    explain: 'Default format for hour and minute string output',
    default: '"hh:mm"',
    note: 'hh:mm, hhmm'
    },
    {
    prop: 'minuteFormat',
    explain: 'Default format for minute string output',
    default: '"m"',
    note: 'mm(01), m(1)'
    },
    {
    prop: 'secondFormat',
    explain: 'Default format for second string output',
    default: '"s"',
    note: 'ss(01), s(1)'
    },
    {
    prop: 'numberFormat',
    explain: 'Default format for number string output',
    default: '"#,##0.#####"',
    note: 'Integer part: "#,###", "#,##0", "#", "0". Decimal part: "#", "0".'
    },

    // Byte Constants
    {
    prop: 'lessoreq0x7ffByte',
    explain: 'Byte size for characters less than or equal to 0X7FF',
    default: '2',
    note: 'Based on UTF-8 standard.'
    },
    {
    prop: 'lessoreq0xffffByte',
    explain: 'Byte size for characters less than or equal to 0XFFFF',
    default: '3',
    note: 'Based on UTF-8 standard.'
    },
    {
    prop: 'greater0xffffByte',
    explain: 'Byte size for characters greater than 0XFFFF',
    default: '4',
    note: 'Based on UTF-8 standard.'
    }
]