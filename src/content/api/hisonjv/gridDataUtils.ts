export const utilsGridDataKo = [
    // for Boolean
    {
    method: 'isAlpha',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 영문으로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isAlphaNumber',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 영문과 숫자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNumber',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 숫자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNumberSymbols',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 숫자와 특수문자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isIncludeSymbols',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 특수문자를 포함하고 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isLowerAlpha',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 소문자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isLowerAlphaNumber',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 소문자와 숫자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isUpperAlpha',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 대문자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isUpperAlphaNumber',
    param: 'String',
    return: 'boolean',
    explain: '문자열이 대문자와 숫자로만 이루어져 있으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNumeric',
    param: 'String',
    return: 'boolean',
    explain: '파라메터 값이 유효한 숫자이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isInteger',
    param: 'String',
    return: 'boolean',
    explain: '파라메터 값이 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isInteger',
    param: 'double',
    return: 'boolean',
    explain: '파라메터 값이 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isInteger',
    param: 'float',
    return: 'boolean',
    explain: '파라메터 값이 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isPositiveInteger',
    param: 'String',
    return: 'boolean',
    explain: '파라메터 값이 양의 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isPositiveInteger',
    param: 'double',
    return: 'boolean',
    explain: '파라메터 값이 양의 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isPositiveInteger',
    param: 'float',
    return: 'boolean',
    explain: '파라메터 값이 양의 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNegativeInteger',
    param: 'String',
    return: 'boolean',
    explain: '파라메터 값이 음의 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNegativeInteger',
    param: 'double',
    return: 'boolean',
    explain: '파라메터 값이 음의 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isNegativeInteger',
    param: 'float',
    return: 'boolean',
    explain: '파라메터 값이 음의 정수이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isDate',
    param: 'String date',
    return: 'boolean',
    explain: '파라메터 값이 날짜 형식이면 true를 반환한다.',
    note: '문자열의 허용 형식은 yyyymmdd, yyyy-mm-dd, yyyy/mm/dd 이다.'
    },
    {
    method: 'isTime',
    param: 'String time',
    return: 'boolean',
    explain: '파라메터 값이 시간 형식이면 true를 반환한다.',
    note: '문자열의 허용 형식은 hh:mi:ss, hhmiss 이다.'
    },
    {
    method: 'isDatetime',
    param: 'String datetime',
    return: 'boolean',
    explain: '파라메터 값이 날짜 시간 형식이면 true를 반환한다.',
    note: '문자열 허용 형식은 isDate()형식 공백 isTime()형식 이다.'
    },
    {
    method: 'isValidEmail',
    param: 'String',
    return: 'boolean',
    explain: '문자열의 형식이 이메일 형식이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isValidURL',
    param: 'String',
    return: 'boolean',
    explain: '문자열의 형식이 URL 형식이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isValidIPv4',
    param: 'String',
    return: 'boolean',
    explain: '문자열의 형식이 IPv4의 아이피 형식이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isValidIPv6',
    param: 'String',
    return: 'boolean',
    explain: '문자열의 형식이 IPv6의 아이피 형식이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'isValidMask',
    param: 'String value, String mask',
    return: 'boolean',
    explain: '파라메터 값이 파라메터 Mask형식이면 true를 반환한다.',
    note: ''
    },
    // for Date
    {
    method: 'addDate',
    param: 'String datetime, int addValue',
    return: 'String',
    explain: '날짜에 시간을 추가한다.',
    note: "날짜의 형식은 isDate()형식 공백 isTime()형식 이다. addType의 default는 'd'이다. hison-utils-config.properties의 add.type으로 변경 가능하다. format지정 시 해당 format의 문자열 날짜를 반환한다. format의 default값은 yyyy-MM-dd/ yyyy-MM-dd HH:mm:ss이다. hison-utils-config.properties의 date.formatter, datetime.formatter로 변경 가능하다."
    },
    {
    method: 'addDate',
    param: 'String datetime, int addValue, String addType',
    return: 'String',
    explain: '날짜에 시간을 추가한다.',
    note: "addType이 대소문자 'y'이면 년을 더한다. addType이 대소문자 'M'이면 월을 더한다. addType이 대소문자 'd'이면 일을 더한다. addType이 대소문자 'h'이면 시간을 더한다. addType이 대소문자 'm'이면 분을 더한다. addType이 대소문자 's'이면 초를 더한다."
    },
    {
    method: 'addDate',
    param: 'String datetime, int addValue, String addType, String format',
    return: 'String',
    explain: '날짜에 시간을 추가한다.',
    note: "addType이 대소문자 'y'이면 년을 더한다. addType이 대소문자 'M'이면 월을 더한다. addType이 대소문자 'd'이면 일을 더한다. addType이 대소문자 'h'이면 시간을 더한다. addType이 대소문자 'm'이면 분을 더한다. addType이 대소문자 's'이면 초를 더한다."
    },
    {
    method: 'addDate',
    param: 'String datetime, String addValue',
    return: 'String',
    explain: '날짜에 시간을 추가한다.',
    note: "날짜의 형식은 isDate()형식 공백 isTime()형식 이다. addType의 default는 'd'이다. hison-utils-config.properties의 add.type으로 변경 가능하다. format지정 시 해당 format의 문자열 날짜를 반환한다. format의 default값은 yyyy-MM-dd/ yyyy-MM-dd HH:mm:ss이다. hison-utils-config.properties의 date.formatter, datetime.formatter로 변경 가능하다."
    },
    {
    method: 'addDate',
    param: 'String datetime, String addValue, String addType',
    return: 'String',
    explain: '날짜에 시간을 추가한다.',
    note: "addType이 대소문자 'y'이면 년을 더한다. addType이 대소문자 'M'이면 월을 더한다. addType이 대소문자 'd'이면 일을 더한다. addType이 대소문자 'h'이면 시간을 더한다. addType이 대소문자 'm'이면 분을 더한다. addType이 대소문자 's'이면 초를 더한다."
    },
    {
    method: 'addDate',
    param: 'String datetime, String addValue, String addType, String format',
    return: 'String',
    explain: '날짜에 시간을 추가한다.',
    note: "addType이 대소문자 'y'이면 년을 더한다. addType이 대소문자 'M'이면 월을 더한다. addType이 대소문자 'd'이면 일을 더한다. addType이 대소문자 'h'이면 시간을 더한다. addType이 대소문자 'm'이면 분을 더한다. addType이 대소문자 's'이면 초를 더한다."
    },
    {
    method: 'getDateDiff',
    param: 'String datetime1, String datetime2',
    return: 'int',
    explain: '두 날짜의 차이를 가져온다. datetime1이 기준.',
    note: "날짜의 형식은 isDate()형식 공백 isTime()형식 이다. diffType의 default는 'd'이다 hison-utils-config.properties의 diff.type으로 변경 가능하다."
    },
    {
    method: 'getDateDiff',
    param: 'String datetime1, String datetime2, String diffType',
    return: 'int',
    explain: '두 날짜의 차이를 가져온다. datetime1이 기준.',
    note: "diffType이 대소문자 'y'이면 년 차이를 반환. diffType이 대소문자 'M'이면 월 차이를 반환. diffType이 대소문자 'd'이면 일 차이를 반환. diffType이 대소문자 'h'이면 시간 차이를 반환. diffType이 대소문자 'm'이면 분 차이를 반환. diffType이 대소문자 's'이면 초 차이를 반환."
    },
    {
    method: 'getMonthName',
    param: 'String month',
    return: 'String',
    explain: '해당 월의 영문표기를 가져온다.',
    note: 'isFullName에 따라 "January" ~ "December" or "Jan" ~ "Dec" 를 반환'
    },
    {
    method: 'getMonthName',
    param: 'String month, Boolean isFullName',
    return: 'String',
    explain: '해당 월의 영문표기를 가져온다.',
    note: 'isFullName의 default는 true이다.'
    },
    {
    method: 'getMonthName',
    param: 'int month',
    return: 'String',
    explain: '해당 월의 영문표기를 가져온다.',
    note: 'isFullName에 따라 "January" ~ "December" or "Jan" ~ "Dec" 를 반환'
    },
    {
    method: 'getMonthName',
    param: 'int month, Boolean isFullName',
    return: 'String',
    explain: '해당 월의 영문표기를 가져온다.',
    note: 'isFullName의 default는 true이다.'
    },
    {
    method: 'getDateWithFormat',
    param: 'String datetime',
    return: 'String',
    explain: '날짜의 형식은 isDate()형식 이다. 파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.',
    note: "format의 default는 'yyyy-MM-dd'이다 hison-utils-config.properties의 date.formatter으로 변경 가능하다."
    },
    {
    method: 'getDateWithFormat',
    param: 'String datetime, String format',
    return: 'String',
    explain: '파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.',
    note: '유효한 날짜, 포맷이 아니면 에러. 문자열 형식은 년월일. format은 LocalDate format'
    },
    {
    method: 'getDateWithFormat',
    param: 'LocalDate datetime',
    return: 'String',
    explain: '파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.',
    note: "format의 default는 'yyyy-MM-dd'이다 hison-utils-config.properties의 date.formatter으로 변경 가능하다."
    },
    {
    method: 'getDateWithFormat',
    param: 'LocalDate datetime, String format',
    return: 'String',
    explain: '파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.',
    note: '유효한 날짜, 포맷이 아니면 에러. 문자열 형식은 년월일. format은 LocalDate format'
    },
    {
    method: 'getDatetimeWithFormat',
    param: 'String datetime',
    return: 'String',
    explain: '날짜의 형식은 isDate()형식 공백 isTime()형식 이다. 파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.',
    note: "format의 default는 'yyyy-MM-dd HH:mm:ss '이다 hison-utils-config.properties의 datetime.formatter으로 변경 가능하다."
    },
    {
    method: 'getDatetimeWithFormat',
    param: 'String datetime, String format',
    return: 'String',
    explain: '파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.',
    note: '유효한 날짜, 포맷이 아니면 에러. 문자열 형식은 년월일 시분초..(시분초가 없으면 0시0분0초). format은 LocalDateTime format'
    },
    {
    method: 'getDatetimeWithFormat',
    param: 'LocalDateTime datetime',
    return: 'String',
    explain: '파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.',
    note: "format의 default는 'yyyy-MM-dd HH:mm:ss '이다 hison-utils-config.properties의 datetime.formatter으로 변경 가능하다."
    },
    {
    method: 'getDatetimeWithFormat',
    param: 'LocalDateTime datetime, String format',
    return: 'String',
    explain: '파라메터의 날짜 문자열을 파라메터 포맷의 형식으로 가져온다.',
    note: '유효한 날짜, 포맷이 아니면 에러. 문자열 형식은 년월일 시분초..(시분초가 없으면 0시0분0초). format은 LocalDateTime format'
    },
    {
    method: 'getDayOfWeek',
    param: 'String date',
    return: 'String',
    explain: '문자열 허용 형식은 isDate()형식이다. 해당 날짜의 요일을 반환한다.',
    note: "format의 default는 'd '이다 hison-utils-config.properties의 dayofweek.type으로 변경 가능하다."
    },
    {
    method: 'getDayOfWeek',
    param: 'String date, String dayType',
    return: 'String',
    explain: '해당 날짜의 요일을 반환한다.',
    note: "유효한 날짜, 포맷이 아니면 에러. dayType이 'd'이면 1 ~ 7반환. dayType이 'dy'이면 'Mon' ~ 'Sun'반환. dayType이 'day'이면 'Monday' ~ 'Sunday'반환. dayType이 'kdy'이면 '월' ~ '일'반환. dayType이 'kday'이면 '월요일' ~ '일요일'반환."
    },
    {
    method: 'getDayOfWeek',
    param: 'LocalDate date',
    return: 'String',
    explain: '해당 날짜의 요일을 반환한다.',
    note: "format의 default는 'd '이다 hison-utils-config.properties의 dayofweek.type으로 변경 가능하다."
    },
    {
    method: 'getDayOfWeek',
    param: 'LocalDate date, String dayType',
    return: 'String',
    explain: '해당 날짜의 요일을 반환한다.',
    note: "유효한 날짜, 포맷이 아니면 에러. dayType이 'd'이면 1 ~ 7반환. dayType이 'dy'이면 'Mon' ~ 'Sun'반환. dayType이 'day'이면 'Monday' ~ 'Sunday'반환. dayType이 'kdy'이면 '월' ~ '일'반환. dayType이 'kday'이면 '월요일' ~ '일요일'반환."
    },
    {
    method: 'getLastDay',
    param: 'String yearMonthe',
    return: 'int',
    explain: '문자열 허용 형식은 yyyymm, yyyy/mm, yyyy-mm이다. 해당 연월의 마지막 일자를 반환한다.',
    note: '유효한 날짜가 아니면 에러.'
    },
    {
    method: 'getLastDay',
    param: 'LocalDate date',
    return: 'int',
    explain: '해당 연월의 마지막 일자를 반환한다.',
    note: '유효한 날짜가 아니면 에러.'
    },
    {
    method: 'getSysDatetime',
    param: '',
    return: 'String',
    explain: '현재 년월일 시분초를 반환한다.',
    note: 'defalt는 "yyyy-MM-dd HH:mm:ss"'
    },
    {
    method: 'getSysDatetime',
    param: 'String format',
    return: 'String',
    explain: '현재 년월일 시분초를 반환한다.',
    note: 'format은 LocalDateTime format'
    },
    {
    method: 'getSysDayOfWeek',
    param: '',
    return: 'String',
    explain: '현재 요일을 반환한다.',
    note: "Hison.utils.getDayOfWeek를 활용하여 반환. default는 'd'."
    },
    {
    method: 'getSysDayOfWeek',
    param: 'String dayType',
    return: 'String',
    explain: '현재 요일을 반환한다.',
    note: "Hison.utils.getDayOfWeek를 활용하여 반환. default는 'd'."
    },
    // for Number
    {
    method: 'getCeil',
    param: 'String num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getCeil',
    param: 'String num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getCeil',
    param: 'int num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'int num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'long num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'long num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'float num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'float num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'double num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'double num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'String num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getFloor',
    param: 'String num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getFloor',
    param: 'int num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'int num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'long num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'long num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'float num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'float num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'double num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'double num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 내림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'String num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getRound',
    param: 'String num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getRound',
    param: 'int num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'int num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'long num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'long num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'float num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'float num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'double num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'double num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 반올림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'String num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getTrunc',
    param: 'String num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: '숫자 변환 불가 시 에러발생.'
    },
    {
    method: 'getTrunc',
    param: 'int num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'int num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'long num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'long num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'float num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'float num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'double num',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'double num, int precision',
    return: 'double',
    explain: '파라메터 값을 파라메터 지정한 위치로 버림한 값을 반환한다.',
    note: ''
    },
    // for String
    {
    method: 'getByteLength',
    param: 'String str',
    return: 'int',
    explain: '문자열의 Byte길이를 반환한다.',
    note: "계산시 Hison.const.LESSOREQ_0X7FF_BYTE : str.charCodeAt() <= 0x7FF 문자 default 2byte. Hison.const.LESSOREQ_0XFFFF_BYTE: str.charCodeAt() <= 0xFFFF문자 default 3byte. Hison.const.GREATER_0XFFFF_BYTE: str.charCodeAt() > 0xFFFF문자 default 4byte. 예) 만약 EUC-KR을 사용하면 해당 변수를 모두 2로 설정하여 계산."
    },
    {
    method: 'getCutByteLength',
    param: 'String str, int cutByte',
    return: 'String',
    explain: '파라메터 문자열을 파라메터 Byte로 자른 값을 반환한다.',
    note: "계산시 Hison.const.LESSOREQ_0X7FF_BYTE : str.charCodeAt() <= 0x7FF 문자 default 2byte. Hison.const.LESSOREQ_0XFFFF_BYTE: str.charCodeAt() <= 0xFFFF문자 default 3byte. Hison.const.GREATER_0XFFFF_BYTE: str.charCodeAt() > 0xFFFF문자 default 4byte. 예) 만약 EUC-KR을 사용하면 해당 변수를 모두 2로 설정하여 계산."
    },
    {
    method: 'getStringLenForm',
    param: 'String str, int length',
    return: 'String',
    explain: '파라메터 문자열에 사이사이 일정한 공백을 추가하여 길이 규격을 맞춘 값을 반환한다.',
    note: '삽입된 길이만큼 문자 간격을 맟추는데 앞 문자 부터 맞춘다. 길이가 모자르면 뒤 문자 간격이 틀어짐.'
    },
    {
    method: 'getLpad',
    param: 'String str, String pad, int length',
    return: 'String',
    explain: '파라메터 문자열 왼쪽에 파라메터 특정 문자를 반복해 채운 값을 반환한다.',
    note: '반환될 문자가 length보다 크지 않을 만큼 반복문자를 채운다.'
    },
    {
    method: 'getRpad',
    param: 'String str, String pad, int length',
    return: 'String',
    explain: '파라메터 문자열 오른쪽에 파라메터 특정 문자를 반복해 채운 값을 반환한다.',
    note: '반환될 문자가 length보다 크지 않을 만큼 반복문자를 채운다.'
    },
    {
    method: 'nvl',
    param: 'T value, T defaultValue',
    return: 'value or defaultValue',
    explain: '값이 undifined, null인 경우 지정된 값을 반환한다.',
    note: ''
    },
    {
    method: 'getNumberFormat',
    param: 'String value, String format',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "format의 형태 : /^(.*?)([#0,.]+)(.*?)$/이며 각 형식에 어긋나면 에러발생."
    },
    {
    method: 'getNumberFormat',
    param: 'String value',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "앞의 문자 + 숫자 형식(필수) + 뒤의 문자 형태이며, 문자는 그대로 반환되나 뒤의 문자 값이 '{공백}%{공백}'의 형태인 경우 수가 백분율로 계산되어 반환된다. 문자 형식에 숫자형식 구분자로 사용되는 '#', '0', ',', '.'은 사용할 수 없다. 숫자 형식은 정수형식 : #,##0(세자리 , 형식이며 null인 경우 0), #,###(세자리 , 형식이며 null인 경우 null) 0(단순 숫자 표현 형식이며 null인 경우 0), #(단순 숫자 표현 형식이며 null인 경우 null) 소수형식 : #(있으면 표현, 없으면 표현(X)), 0(있으면 표현, 없어도 표현) 이다. #과 0을 혼합사용할 수 없다."
    },
    {
    method: 'getNumberFormat',
    param: 'int value',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "앞의 문자 + 숫자 형식(필수) + 뒤의 문자 형태이며, 문자는 그대로 반환되나 뒤의 문자 값이 '{공백}%{공백}'의 형태인 경우 수가 백분율로 계산되어 반환된다. 문자 형식에 숫자형식 구분자로 사용되는 '#', '0', ',', '.'은 사용할 수 없다. 숫자 형식은 정수형식 : #,##0(세자리 , 형식이며 null인 경우 0), #,###(세자리 , 형식이며 null인 경우 null) 0(단순 숫자 표현 형식이며 null인 경우 0), #(단순 숫자 표현 형식이며 null인 경우 null) 소수형식 : #(있으면 표현, 없으면 표현(X)), 0(있으면 표현, 없어도 표현) 이다. #과 0을 혼합사용할 수 없다."
    },
    {
    method: 'getNumberFormat',
    param: 'int value, String format',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "format의 형태 : /^(.*?)([#0,.]+)(.*?)$/이며 각 형식에 어긋나면 에러발생."
    },
    {
    method: 'getNumberFormat',
    param: 'long value',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "앞의 문자 + 숫자 형식(필수) + 뒤의 문자 형태이며, 문자는 그대로 반환되나 뒤의 문자 값이 '{공백}%{공백}'의 형태인 경우 수가 백분율로 계산되어 반환된다. 문자 형식에 숫자형식 구분자로 사용되는 '#', '0', ',', '.'은 사용할 수 없다. 숫자 형식은 정수형식 : #,##0(세자리 , 형식이며 null인 경우 0), #,###(세자리 , 형식이며 null인 경우 null) 0(단순 숫자 표현 형식이며 null인 경우 0), #(단순 숫자 표현 형식이며 null인 경우 null) 소수형식 : #(있으면 표현, 없으면 표현(X)), 0(있으면 표현, 없어도 표현) 이다. #과 0을 혼합사용할 수 없다."
    },
    {
    method: 'getNumberFormat',
    param: 'long value, String format',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "format의 형태 : /^(.*?)([#0,.]+)(.*?)$/이며 각 형식에 어긋나면 에러발생."
    },
    {
    method: 'getNumberFormat',
    param: 'float value',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "앞의 문자 + 숫자 형식(필수) + 뒤의 문자 형태이며, 문자는 그대로 반환되나 뒤의 문자 값이 '{공백}%{공백}'의 형태인 경우 수가 백분율로 계산되어 반환된다. 문자 형식에 숫자형식 구분자로 사용되는 '#', '0', ',', '.'은 사용할 수 없다. 숫자 형식은 정수형식 : #,##0(세자리 , 형식이며 null인 경우 0), #,###(세자리 , 형식이며 null인 경우 null) 0(단순 숫자 표현 형식이며 null인 경우 0), #(단순 숫자 표현 형식이며 null인 경우 null) 소수형식 : #(있으면 표현, 없으면 표현(X)), 0(있으면 표현, 없어도 표현) 이다. #과 0을 혼합사용할 수 없다."
    },
    {
    method: 'getNumberFormat',
    param: 'float value, String format',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "format의 형태 : /^(.*?)([#0,.]+)(.*?)$/이며 각 형식에 어긋나면 에러발생."
    },
    {
    method: 'getNumberFormat',
    param: 'double value',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "앞의 문자 + 숫자 형식(필수) + 뒤의 문자 형태이며, 문자는 그대로 반환되나 뒤의 문자 값이 '{공백}%{공백}'의 형태인 경우 수가 백분율로 계산되어 반환된다. 문자 형식에 숫자형식 구분자로 사용되는 '#', '0', ',', '.'은 사용할 수 없다. 숫자 형식은 정수형식 : #,##0(세자리 , 형식이며 null인 경우 0), #,###(세자리 , 형식이며 null인 경우 null) 0(단순 숫자 표현 형식이며 null인 경우 0), #(단순 숫자 표현 형식이며 null인 경우 null) 소수형식 : #(있으면 표현, 없으면 표현(X)), 0(있으면 표현, 없어도 표현) 이다. #과 0을 혼합사용할 수 없다."
    },
    {
    method: 'getNumberFormat',
    param: 'double value, String format',
    return: 'String',
    explain: '파라메터 값을 파라메터 숫자 형식으로 변환한 값을 반환한다.',
    note: "format의 형태 : /^(.*?)([#0,.]+)(.*?)$/이며 각 형식에 어긋나면 에러발생."
    },
    {
    method: 'getRemoveExceptNumbers',
    param: 'String str',
    return: 'String',
    explain: '파라메터 문자열의 숫자를 제외한 모든 문자를 제거한 값을 반환한다.',
    note: "문자열이 아니어도 오류가 발생하지 않는다. ''반환"
    },
    {
    method: 'getRemoveNumbers',
    param: 'String str',
    return: 'String',
    explain: '파라메터 문자열의 모든 숫자를 제거한 값을 반환한다.',
    note: "문자열이 아니어도 오류가 발생하지 않는다. ''반환"
    },
    {
    method: 'getReverse',
    param: 'String str',
    return: 'String',
    explain: '파라메터 문자열의 반전값을 반환한다.',
    note: "문자열이 아니어도 오류가 발생하지 않는다. ''반환"
    },
    // etc
    {
    method: 'getClientIpAddress',
    param: 'HttpServletRequest req',
    return: 'String',
    explain: '클라이언트의 IP주소를 리턴한다.',
    note: ''
    },
    {
    method: 'getFileExtension',
    param: 'String fileName',
    return: 'String',
    explain: 'URL 또는 파일경로 + 파일명에서 확장자를 추출한다.',
    note: ''
    },
    {
    method: 'getFileName',
    param: 'String path',
    return: 'String',
    explain: 'URL 또는 파일경로 + 파일명에서 확장자를 제외한 파일명을 추출한다.',
    note: ''
    },
    {
    method: 'getPropertyValue',
    param: 'String propertyFileName, String key',
    return: 'String',
    explain: '지정된 Property 파일에서 해당 key의 value를 반환한다.',
    note: ''
    },
    {
    method: 'getProperty',
    param: 'String propertyFileName, String key',
    return: 'Map<String, String>',
    explain: '지정된 Property 파일에서 해당 key의 key와 value를 Map<String, String>으로 반환한다.',
    note: ''
    },
    {
    method: 'getPropertyKeys',
    param: 'String propertyFileName',
    return: 'Set<String>',
    explain: '지정된 Property 파일에서 모든 key를 Set<String>으로 반환한다.',
    note: ''
    },
    {
    method: 'getProperties',
    param: 'String propertyFileName',
    return: 'Map<String, String>',
    explain: '지정된 Property 파일에서 모든 key와 value를 Map<String, String>으로 반환한다.',
    note: ''
    },
    {
    method: 'getProperties',
    param: 'String propertyFileName, String keyPrefix',
    return: 'Map<String, String>',
    explain: '지정된 Property 파일에서 해당 key를 접두사로 하는 모든 key와 value를 Map<String, String>으로 반환한다.',
    note: ''
    }
]

export const configGridDataKo = [
    {
    field: 'date.formatter',
    explain: '날짜 문자열 형식 기본값',
    default: '"yyyy-MM-dd"',
    notice: '자바 LocalDate의 fomatter,스프링 기본 리소스 경로의 hison-utils-config.properties파일을 통해 커스텀 가능함.'
    },
    {
    field: 'datetime.formatter',
    explain: '날짜시간 문자열 형식 기본값',
    default: '"yyyy-MM-dd HH:mm:ss"',
    notice: '자바 LocalDateTime의 fomatter,# application.properties'
    },
    {
    field: 'add.type',
    explain: '날짜를 더할 때 추가할 타입(년월일시분초)',
    default: '"d"',
    notice: '"y" : 년, "M" : 월, "d" : 일, "h" : 시, "m" : 분, "s" : 초,hison.utils.format.date=dd/MM/yyyy'
    },
    {
    field: 'diff.type',
    explain: '날짜 차이를 구할 때 타입(년월일시분초)',
    default: '"d"',
    notice: '"y" : 년, "M" : 월, "d" : 일, "h" : 시, "m" : 분, "s" : 초,hison.utils.format.datetime=dd/MM/yyyy HH:mm:ss'
    },
    {
    field: 'dayofweek.type',
    explain: '요일을 가져올 타입(숫자, 영문표기, 한글표기)',
    default: '"d"',
    notice: '"d" : 1 ~ 7, "dy" : Mon, "day" : Monday, "kdy" : 월, "kday" : 월요일,hison.utils.type.date-add=d'
    },
    {
    field: 'lessoreq.0x7ff.byte',
    explain: '0X7FF이하 문자의 바이트 크기',
    default: '2',
    notice: 'UTF-8 기준이다.,hison.utils.type.date-diff=d'
    },
    {
    field: 'lessoreq.0xffff.byte',
    explain: '0XFFFF이하 문자의 바이트 크기',
    default: '3',
    notice: 'UTF-8 기준이다.,hison.utils.type.dayofweek=day'
    },
    {
    field: 'greater.0xffff.byte',
    explain: '0XFFFF초과 문자의 바이트 크기',
    default: '4',
    notice: 'UTF-8 기준이다.,hison.utils.charbyte.less2047=2'
    },
    {
    field: 'number.formatter',
    explain: '문자열로 출력할 숫자 형식',
    default: '"#,##0.#####"',
    notice: '정수 부 "#,###", "#,##0", "#", "0", 실수 부 "#", "0".,hison.utils.charbyte.less65535=3'
    },
    {
    field: 'propertie.file.path',
    explain: '프로퍼티를 가져올 경로',
    default: '""',
    notice: '기본 스프링의 리소스 파일 경로임. class.getClassLoader().getResourceAsStream() 를 사용함.,hison.utils.charbyte.greater65535=4'
    }
]

export const utilsGridDataEn = [
    // for Boolean
    {
    method: 'isAlpha',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string consists of English letters only.',
    note: ''
    },
    {
    method: 'isAlphaNumber',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string consists of English letters and numbers only.',
    note: ''
    },
    {
    method: 'isNumber',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string consists of numbers only.',
    note: ''
    },
    {
    method: 'isNumberSymbols',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string consists of numbers and special characters only.',
    note: ''
    },
    {
    method: 'isIncludeSymbols',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string contains any special characters.',
    note: ''
    },
    {
    method: 'isLowerAlpha',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string consists of lowercase letters only.',
    note: ''
    },
    {
    method: 'isLowerAlphaNumber',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string consists of lowercase letters and numbers only.',
    note: ''
    },
    {
    method: 'isUpperAlpha',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string consists of uppercase letters only.',
    note: ''
    },
    {
    method: 'isUpperAlphaNumber',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string consists of uppercase letters and numbers only.',
    note: ''
    },
    {
    method: 'isNumeric',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the parameter value is a valid number.',
    note: ''
    },
    {
    method: 'isInteger',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the parameter value is an integer.',
    note: ''
    },
    {
    method: 'isInteger',
    param: 'double',
    return: 'boolean',
    explain: 'Returns true if the parameter value is an integer.',
    note: ''
    },
    {
    method: 'isInteger',
    param: 'float',
    return: 'boolean',
    explain: 'Returns true if the parameter value is an integer.',
    note: ''
    },
    {
    method: 'isPositiveInteger',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the parameter value is a positive integer.',
    note: ''
    },
    {
    method: 'isPositiveInteger',
    param: 'double',
    return: 'boolean',
    explain: 'Returns true if the parameter value is a positive integer.',
    note: ''
    },
    {
    method: 'isPositiveInteger',
    param: 'float',
    return: 'boolean',
    explain: 'Returns true if the parameter value is a positive integer.',
    note: ''
    },
    {
    method: 'isNegativeInteger',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the parameter value is a negative integer.',
    note: ''
    },
    {
    method: 'isNegativeInteger',
    param: 'double',
    return: 'boolean',
    explain: 'Returns true if the parameter value is a negative integer.',
    note: ''
    },
    {
    method: 'isNegativeInteger',
    param: 'float',
    return: 'boolean',
    explain: 'Returns true if the parameter value is a negative integer.',
    note: ''
    },
    {
    method: 'isDate',
    param: 'String date',
    return: 'boolean',
    explain: 'Returns true if the parameter value is in a date format.',
    note: 'The allowed string formats are yyyymmdd, yyyy-mm-dd, and yyyy/mm/dd.'
    },
    {
    method: 'isTime',
    param: 'String time',
    return: 'boolean',
    explain: 'Returns true if the parameter value is in a time format.',
    note: 'The allowed string formats are hh:mi:ss and hhmiss.'
    },
    {
    method: 'isDatetime',
    param: 'String datetime',
    return: 'boolean',
    explain: 'Returns true if the parameter value is in a date-time format.',
    note: 'The allowed string format is the isDate() format, a space, and the isTime() format.'
    },
    {
    method: 'isValidEmail',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string is in an email format.',
    note: ''
    },
    {
    method: 'isValidURL',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string is in a URL format.',
    note: ''
    },
    {
    method: 'isValidIPv4',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string is in an IPv4 address format.',
    note: ''
    },
    {
    method: 'isValidIPv6',
    param: 'String',
    return: 'boolean',
    explain: 'Returns true if the string is in an IPv6 address format.',
    note: ''
    },
    {
    method: 'isValidMask',
    param: 'String value, String mask',
    return: 'boolean',
    explain: 'Returns true if the parameter value matches the parameter mask format.',
    note: ''
    },
    // for Date
    {
    method: 'addDate',
    param: 'String datetime, int addValue',
    return: 'String',
    explain: 'Adds time to the date.',
    note: "The date format follows the isDate() format, a space, and the isTime() format. The default value of addType is 'd', and it can be changed through add.type in the hison-utils-config.properties file. When a format is specified, it returns the date as a string in that format. The default value of format is yyyy-MM-dd / yyyy-MM-dd HH:mm:ss, and it can be changed through date.formatter or datetime.formatter in the hison-utils-config.properties file."
    },
    {
    method: 'addDate',
    param: 'String datetime, int addValue, String addType',
    return: 'String',
    explain: 'Adds time to the date.',
    note: "If addType is uppercase or lowercase 'y', adds years. If addType is uppercase or lowercase 'M', adds months. If addType is uppercase or lowercase 'd', adds days. If addType is uppercase or lowercase 'h', adds hours. If addType is uppercase or lowercase 'm', adds minutes. If addType is uppercase or lowercase 's', adds seconds."
    },
    {
    method: 'addDate',
    param: 'String datetime, int addValue, String addType, String format',
    return: 'String',
    explain: 'Adds time to the date.',
    note: "If addType is uppercase or lowercase 'y', adds years. If addType is uppercase or lowercase 'M', adds months. If addType is uppercase or lowercase 'd', adds days. If addType is uppercase or lowercase 'h', adds hours. If addType is uppercase or lowercase 'm', adds minutes. If addType is uppercase or lowercase 's', adds seconds."
    },
    {
    method: 'addDate',
    param: 'String datetime, String addValue',
    return: 'String',
    explain: 'Adds time to the date.',
    note: "The date format follows the isDate() format, a space, and the isTime() format. The default value of addType is 'd', and it can be changed through add.type in the hison-utils-config.properties file. When a format is specified, it returns the date as a string in that format. The default value of format is yyyy-MM-dd / yyyy-MM-dd HH:mm:ss, and it can be changed through date.formatter or datetime.formatter in the hison-utils-config.properties file."
    },
    {
    method: 'addDate',
    param: 'String datetime, String addValue, String addType',
    return: 'String',
    explain: 'Adds time to the date.',
    note: "If addType is uppercase or lowercase 'y', adds years. If addType is uppercase or lowercase 'M', adds months. If addType is uppercase or lowercase 'd', adds days. If addType is uppercase or lowercase 'h', adds hours. If addType is uppercase or lowercase 'm', adds minutes. If addType is uppercase or lowercase 's', adds seconds."
    },
    {
    method: 'addDate',
    param: 'String datetime, String addValue, String addType, String format',
    return: 'String',
    explain: 'Adds time to the date.',
    note: "If addType is uppercase or lowercase 'y', adds years. If addType is uppercase or lowercase 'M', adds months. If addType is uppercase or lowercase 'd', adds days. If addType is uppercase or lowercase 'h', adds hours. If addType is uppercase or lowercase 'm', adds minutes. If addType is uppercase or lowercase 's', adds seconds."
    },
    {
    method: 'getDateDiff',
    param: 'String datetime1, String datetime2',
    return: 'int',
    explain: 'Gets the difference between two dates, using datetime1 as the reference.',
    note: "The date format follows the isDate() format, a space, and the isTime() format. The default value of diffType is 'd', and it can be changed through diff.type in the hison-utils-config.properties file."
    },
    {
    method: 'getDateDiff',
    param: 'String datetime1, String datetime2, String diffType',
    return: 'int',
    explain: 'Gets the difference between two dates, using datetime1 as the reference.',
    note: "If diffType is uppercase or lowercase 'y', returns the difference in years. If diffType is uppercase or lowercase 'M', returns the difference in months. If diffType is uppercase or lowercase 'd', returns the difference in days. If diffType is uppercase or lowercase 'h', returns the difference in hours. If diffType is uppercase or lowercase 'm', returns the difference in minutes. If diffType is uppercase or lowercase 's', returns the difference in seconds."
    },
    {
    method: 'getMonthName',
    param: 'String month',
    return: 'String',
    explain: 'Returns the English name of the given month.',
    note: 'Depending on the value of isFullName, it returns either "January" to "December" or "Jan" to "Dec".'
    },
    {
    method: 'getMonthName',
    param: 'String month, Boolean isFullName',
    return: 'String',
    explain: 'Returns the English name of the given month.',
    note: 'The default value of isFullName is true.'
    },
    {
    method: 'getMonthName',
    param: 'int month',
    return: 'String',
    explain: 'Returns the English name of the given month.',
    note: 'Depending on the value of isFullName, it returns either "January" to "December" or "Jan" to "Dec".'
    },
    {
    method: 'getMonthName',
    param: 'int month, Boolean isFullName',
    return: 'String',
    explain: 'Returns the English name of the given month.',
    note: 'The default value of isFullName is true.'
    },
    {
    method: 'getDateWithFormat',
    param: 'String datetime',
    return: 'String',
    explain: 'The date format follows the isDate() format. Retrieves the date string in the format specified by the parameter.',
    note: "The default value of format is 'yyyy-MM-dd', and it can be changed through date.formatter in the hison-utils-config.properties file."
    },
    {
    method: 'getDateWithFormat',
    param: 'String datetime, String format',
    return: 'String',
    explain: 'Retrieves the date string in the format specified by the parameter.',
    note: 'Throws an error if the date or format is invalid. The string format represents year, month, and day. The format follows the LocalDate format.'
    },
    {
    method: 'getDateWithFormat',
    param: 'LocalDate datetime',
    return: 'String',
    explain: 'Retrieves the date string in the format specified by the parameter.',
    note: "The default value of format is 'yyyy-MM-dd', and it can be changed through date.formatter in the hison-utils-config.properties file."
    },
    {
    method: 'getDateWithFormat',
    param: 'LocalDate datetime, String format',
    return: 'String',
    explain: 'Retrieves the date string in the format specified by the parameter.',
    note: 'Throws an error if the date or format is invalid. The string format represents year, month, and day. The format follows the LocalDate format.'
    },
    {
    method: 'getDatetimeWithFormat',
    param: 'String datetime',
    return: 'String',
    explain: 'The date format follows the isDate() format, a space, and the isTime() format. Retrieves the date-time string in the format specified by the parameter.',
    note: "The default value of format is 'yyyy-MM-dd HH:mm:ss', and it can be changed through datetime.formatter in the hison-utils-config.properties file."
    },
    {
    method: 'getDatetimeWithFormat',
    param: 'String datetime, String format',
    return: 'String',
    explain: 'Retrieves the date-time string in the format specified by the parameter.',
    note: 'Throws an error if the date or format is invalid. The string format represents year, month, day, hour, minute, and second. (If hour, minute, and second are omitted, they default to 00:00:00.) The format follows the LocalDateTime format.'
    },
    {
    method: 'getDatetimeWithFormat',
    param: 'LocalDateTime datetime',
    return: 'String',
    explain: 'Retrieves the date-time string in the format specified by the parameter.',
    note: "The default value of format is 'yyyy-MM-dd HH:mm:ss', and it can be changed through datetime.formatter in the hison-utils-config.properties file."
    },
    {
    method: 'getDatetimeWithFormat',
    param: 'LocalDateTime datetime, String format',
    return: 'String',
    explain: 'Retrieves the date-time string in the format specified by the parameter.',
    note: 'Throws an error if the date or format is invalid. The string format represents year, month, day, hour, minute, and second. (If hour, minute, and second are omitted, they default to 00:00:00.) The format follows the LocalDateTime format.'
    },
    {
    method: 'getDayOfWeek',
    param: 'String date',
    return: 'String',
    explain: 'The allowed string format follows the isDate() format. Returns the day of the week for the given date.',
    note: "The default value of format is 'd', and it can be changed through dayofweek.type in the hison-utils-config.properties file."
    },
    {
    method: 'getDayOfWeek',
    param: 'String date, String dayType',
    return: 'String',
    explain: 'Returns the day of the week for the given date.',
    note: "Throws an error if the date or format is invalid. If dayType is 'd', returns 1 to 7. If dayType is 'dy', returns 'Mon' to 'Sun'. If dayType is 'day', returns 'Monday' to 'Sunday'. If dayType is 'kdy', returns '월' to '일'. If dayType is 'kday', returns '월요일' to '일요일'."
    },
    {
    method: 'getDayOfWeek',
    param: 'LocalDate date',
    return: 'String',
    explain: 'Returns the day of the week for the given date.',
    note: "The default value of format is 'd', and it can be changed through dayofweek.type in the hison-utils-config.properties file."
    },
    {
    method: 'getDayOfWeek',
    param: 'LocalDate date, String dayType',
    return: 'String',
    explain: 'Returns the day of the week for the given date.',
    note: "Throws an error if the date or format is invalid. If dayType is 'd', returns 1 to 7. If dayType is 'dy', returns 'Mon' to 'Sun'. If dayType is 'day', returns 'Monday' to 'Sunday'. If dayType is 'kdy', returns '월' to '일'. If dayType is 'kday', returns '월요일' to '일요일'."
    },
    {
    method: 'getLastDay',
    param: 'String yearMonthe',
    return: 'int',
    explain: 'The allowed string formats are yyyymm, yyyy/mm, and yyyy-mm. Returns the last day of the given year and month.',
    note: 'Throws an error if the date is invalid.'
    },
    {
    method: 'getLastDay',
    param: 'LocalDate date',
    return: 'int',
    explain: 'Returns the last day of the given year and month.',
    note: 'Throws an error if the date is invalid.'
    },
    {
    method: 'getSysDatetime',
    param: '-',
    return: 'String',
    explain: 'Returns the current date and time. The default format is "yyyy-MM-dd HH:mm:ss".',
    note: 'The format follows the LocalDateTime format.'
    },
    {
    method: 'getSysDatetime',
    param: 'String format',
    return: 'String',
    explain: 'Returns the current date and time.',
    note: 'The format follows the LocalDateTime format.'
    },
    {
    method: 'getSysDayOfWeek',
    param: '-',
    return: 'String',
    explain: 'Returns the current day of the week, using getDayOfWeek().',
    note: "Returns the value using Hison.utils.getDayOfWeek. The default is 'd'."
    },
    {
    method: 'getSysDayOfWeek',
    param: 'String dayType',
    return: 'String',
    explain: 'Returns the current day of the week.',
    note: "Returns the value using Hison.utils.getDayOfWeek. The default is 'd'."
    },
    // for Number
    {
    method: 'getCeil',
    param: 'String num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: 'Throws an error if the value cannot be converted to a number.'
    },
    {
    method: 'getCeil',
    param: 'String num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: 'Throws an error if the value cannot be converted to a number.'
    },
    {
    method: 'getCeil',
    param: 'int num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'int num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'long num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'long num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'float num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'float num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'double num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: ''
    },
    {
    method: 'getCeil',
    param: 'double num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded up to the specified position.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'String num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: 'Throws an error if the value cannot be converted to a number.'
    },
    {
    method: 'getFloor',
    param: 'String num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: 'Throws an error if the value cannot be converted to a number.'
    },
    {
    method: 'getFloor',
    param: 'int num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'int num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'long num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'long num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'float num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'float num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'double num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: ''
    },
    {
    method: 'getFloor',
    param: 'double num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded down to the specified position.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'String num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: 'Throws an error if the value cannot be converted to a number.'
    },
    {
    method: 'getRound',
    param: 'String num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: 'Throws an error if the value cannot be converted to a number.'
    },
    {
    method: 'getRound',
    param: 'int num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'int num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'long num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'long num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'float num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'float num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'double num',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: ''
    },
    {
    method: 'getRound',
    param: 'double num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter rounded to the nearest value at the specified position.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'String num',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: 'Throws an error if the value cannot be converted to a number.'
    },
    {
    method: 'getTrunc',
    param: 'String num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: 'Throws an error if the value cannot be converted to a number.'
    },
    {
    method: 'getTrunc',
    param: 'int num',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'int num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'long num',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'long num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'float num',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'float num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'double num',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: ''
    },
    {
    method: 'getTrunc',
    param: 'double num, int precision',
    return: 'double',
    explain: 'Returns the value of the parameter truncated at the specified position.',
    note: ''
    },
    // for String
    {
    method: 'getByteLength',
    param: 'String str',
    return: 'int',
    explain: 'Returns the byte length of the string.',
    note: 'During calculation: Hison.const.LESSOREQ_0X7FF_BYTE: if str.charCodeAt() ≤ 0x7FF, the character defaults to 2 bytes. Hison.const.LESSOREQ_0XFFFF_BYTE: if str.charCodeAt() ≤ 0xFFFF, the character defaults to 3 bytes. Hison.const.GREATER_0XFFFF_BYTE: if str.charCodeAt() > 0xFFFF, the character defaults to 4 bytes. Example: When using EUC-KR, set all of these variables to 2 for calculation.'
    },
    {
    method: 'getCutByteLength',
    param: 'String str, int cutByte',
    return: 'String',
    explain: 'Returns the value of the parameter string truncated to the specified number of bytes.',
    note: 'During calculation: Hison.const.LESSOREQ_0X7FF_BYTE: if str.charCodeAt() ≤ 0x7FF, the character defaults to 2 bytes. Hison.const.LESSOREQ_0XFFFF_BYTE: if str.charCodeAt() ≤ 0xFFFF, the character defaults to 3 bytes. Hison.const.GREATER_0XFFFF_BYTE: if str.charCodeAt() > 0xFFFF, the character defaults to 4 bytes. Example: If EUC-KR is used, set all of these variables to 2 for the calculation.'
    },
    {
    method: 'getStringLenForm',
    param: 'String str, int length',
    return: 'String',
    explain: 'Returns the value of the parameter string adjusted to a specified length by adding spaces evenly between characters.',
    note: 'Adjusts the spacing between characters according to the inserted length, aligning from the beginning. If the length is insufficient, the spacing of the later characters may become misaligned.'
    },
    {
    method: 'getLpad',
    param: 'String str, String pad, int length',
    return: 'String',
    explain: 'Returns the value of the parameter string with a specific character repeatedly added to the left side.',
    note: 'Fills with repeating characters so that the returned string does not exceed the specified length.'
    },
    {
    method: 'getRpad',
    param: 'String str, String pad, int length',
    return: 'String',
    explain: 'Returns the value of the parameter string with a specific character repeatedly added to the right side.',
    note: 'Fills with repeating characters so that the returned string does not exceed the specified length.'
    },
    {
    method: 'nvl',
    param: 'T value, T defaultValue',
    return: 'value or defaultValue',
    explain: 'Returns the specified value if the parameter is undefined or null.',
    note: ''
    },
    {
    method: 'getNumberFormat',
    param: 'String value',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: 'The format consists of a prefix + numeric format (required) + suffix. The prefix and suffix are returned as is, but if the suffix is in the form of \'{space}%{space}\', the number is calculated and returned as a percentage. The characters \'#\', \'0\', \',\', and \'.\'—which are used as numeric format symbols—cannot be used in the text portion. Numeric format types: Integer formats: #,##0 (thousand separator format, returns 0 if null), #,### (thousand separator format, returns null if null), 0 (simple numeric format, returns 0 if null), # (simple numeric format, returns null if null) Decimal formats: # (displayed only if a digit exists), 0 (always displayed, even if no digit exists) Mixing # and 0 within the same format is not allowed.'
    },
    {
    method: 'getNumberFormat',
    param: 'String value, String format',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: "The format pattern is /^(.?)([#0,.]+)(.?)$/, and an error occurs if the value does not match this pattern."
    },
    {
    method: 'getNumberFormat',
    param: 'int value',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: 'The format consists of a prefix + numeric format (required) + suffix. The prefix and suffix are returned as is, but if the suffix is in the form of \'{space}%{space}\', the number is calculated and returned as a percentage. The characters \'#\', \'0\', \',\', and \'.\'—which are used as numeric format symbols—cannot be used in the text portion. Numeric format types: Integer formats: #,##0 (thousand separator format, returns 0 if null), #,### (thousand separator format, returns null if null), 0 (simple numeric format, returns 0 if null), # (simple numeric format, returns null if null) Decimal formats: # (displayed only if a digit exists), 0 (always displayed, even if no digit exists) Mixing # and 0 within the same format is not allowed.'
    },
    {
    method: 'getNumberFormat',
    param: 'int value, String format',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: "The format pattern is /^(.?)([#0,.]+)(.?)$/, and an error occurs if the value does not match this pattern."
    },
    {
    method: 'getNumberFormat',
    param: 'long value',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: 'The format consists of a prefix + numeric format (required) + suffix. The prefix and suffix are returned as is, but if the suffix is in the form of \'{space}%{space}\', the number is calculated and returned as a percentage. The characters \'#\', \'0\', \',\', and \'.\'—which are used as numeric format symbols—cannot be used in the text portion. Numeric format types: Integer formats: #,##0 (thousand separator format, returns 0 if null), #,### (thousand separator format, returns null if null), 0 (simple numeric format, returns 0 if null), # (simple numeric format, returns null if null) Decimal formats: # (displayed only if a digit exists), 0 (always displayed, even if no digit exists) Mixing # and 0 within the same format is not allowed.'
    },
    {
    method: 'getNumberFormat',
    param: 'long value, String format',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: "The format pattern is /^(.?)([#0,.]+)(.?)$/, and an error occurs if the value does not match this pattern."
    },
    {
    method: 'getNumberFormat',
    param: 'float value',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: 'The format consists of a prefix + numeric format (required) + suffix. The prefix and suffix are returned as is, but if the suffix is in the form of \'{space}%{space}\', the number is calculated and returned as a percentage. The characters \'#\', \'0\', \',\', and \'.\'—which are used as numeric format symbols—cannot be used in the text portion. Numeric format types: Integer formats: #,##0 (thousand separator format, returns 0 if null), #,### (thousand separator format, returns null if null), 0 (simple numeric format, returns 0 if null), # (simple numeric format, returns null if null) Decimal formats: # (displayed only if a digit exists), 0 (always displayed, even if no digit exists) Mixing # and 0 within the same format is not allowed.'
    },
    {
    method: 'getNumberFormat',
    param: 'float value, String format',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: "The format pattern is /^(.?)([#0,.]+)(.?)$/, and an error occurs if the value does not match this pattern."
    },
    {
    method: 'getNumberFormat',
    param: 'double value',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: 'The format consists of a prefix + numeric format (required) + suffix. The prefix and suffix are returned as is, but if the suffix is in the form of \'{space}%{space}\', the number is calculated and returned as a percentage. The characters \'#\', \'0\', \',\', and \'.\'—which are used as numeric format symbols—cannot be used in the text portion. Numeric format types: Integer formats: #,##0 (thousand separator format, returns 0 if null), #,### (thousand separator format, returns null if null), 0 (simple numeric format, returns 0 if null), # (simple numeric format, returns null if null) Decimal formats: # (displayed only if a digit exists), 0 (always displayed, even if no digit exists) Mixing # and 0 within the same format is not allowed.'
    },
    {
    method: 'getNumberFormat',
    param: 'double value, String format',
    return: 'String',
    explain: 'Returns the parameter value converted to a numeric format.',
    note: "The format pattern is /^(.?)([#0,.]+)(.?)$/, and an error occurs if the value does not match this pattern."
    },
    {
    method: 'getRemoveExceptNumbers',
    param: 'String str',
    return: 'String',
    explain: 'Returns the parameter string with all non-numeric characters removed.',
    note: "No error occurs even if the value is not a string. Returns an empty string (''.)"
    },
    {
    method: 'getRemoveNumbers',
    param: 'String str',
    return: 'String',
    explain: 'Returns the parameter string with all numeric characters removed.',
    note: "No error occurs even if the value is not a string. Returns an empty string (''.)"
    },
    {
    method: 'getReverse',
    param: 'String str',
    return: 'String',
    explain: 'Returns the reversed value of the parameter string.',
    note: "No error occurs even if the value is not a string. Returns an empty string (''.)"
    },
    // etc
    {
    method: 'getClientIpAddress',
    param: 'HttpServletRequest req',
    return: 'String',
    explain: "Returns the client's IP address.",
    note: ''
    },
    {
    method: 'getFileExtension',
    param: 'String fileName',
    return: 'String',
    explain: 'Extracts the file extension from a URL or file path with a filename.',
    note: ''
    },
    {
    method: 'getFileName',
    param: 'String path',
    return: 'String',
    explain: 'Extracts the filename without the extension from a URL or file path.',
    note: ''
    },
    {
    method: 'getPropertyValue',
    param: 'String propertyFileName, String key',
    return: 'String',
    explain: 'Returns the value of the specified key from the given property file.',
    note: ''
    },
    {
    method: 'getProperty',
    param: 'String propertyFileName, String key',
    return: 'Map<String, String>',
    explain: 'Returns the specified key and its value from the given property file as a Map<String, String>.',
    note: ''
    },
    {
    method: 'getPropertyKeys',
    param: 'String propertyFileName',
    return: 'Set<String>',
    explain: 'Returns all keys from the specified property file as a Set<String>.',
    note: ''
    },
    {
    method: 'getProperties',
    param: 'String propertyFileName',
    return: 'Map<String, String>',
    explain: 'Returns all keys and values from the specified property file as a Map<String, String>.',
    note: ''
    },
    {
    method: 'getProperties',
    param: 'String propertyFileName, String keyPrefix',
    return: 'Map<String, String>',
    explain: 'Returns all keys and values from the specified property file whose keys start with the given prefix as a Map<String, String>.',
    note: ''
    }
]

export const configGridDataEn = [
    {
    field: 'date.formatter',
    explain: 'Default date string format',
    default: '"yyyy-MM-dd"',
    notice: 'Formatter for Java LocalDate'
    },
    {
    field: 'datetime.formatter',
    explain: 'Default date-time string format',
    default: '"yyyy-MM-dd HH:mm:ss"',
    notice: 'Formatter for Java LocalDateTime'
    },
    {
    field: 'add.type',
    explain: 'Type to add when adding to a date (year, month, day, hour, minute, second)',
    default: '"d"',
    notice: '"y": year, "M": month, "d": day, "h": hour, "m": minute, "s": second'
    },
    {
    field: 'diff.type',
    explain: 'Type to use when calculating date differences (year, month, day, hour, minute, second)',
    default: '"d"',
    notice: '"y": year, "M": month, "d": day, "h": hour, "m": minute, "s": second'
    },
    {
    field: 'dayofweek.type',
    explain: 'Type to use when retrieving the day of the week (number, English name, Korean name)',
    default: '"d"',
    notice: '"d": 1–7, "dy": Mon, "day": Monday, "kdy": 월, "kday": 월요일'
    },
    {
    field: 'lessoreq.0x7ff.byte',
    explain: 'Byte size of characters less than or equal to 0X7FF',
    default: '2',
    notice: 'Based on UTF-8 encoding.'
    },
    {
    field: 'lessoreq.0xffff.byte',
    explain: 'Byte size of characters less than or equal to 0XFFFF',
    default: '3',
    notice: 'Based on UTF-8 encoding.'
    },
    {
    field: 'greater.0xffff.byte',
    explain: 'Byte size of characters greater than 0XFFFF',
    default: '4',
    notice: 'Based on UTF-8 encoding.'
    },
    {
    field: 'number.formatter',
    explain: 'Number format for string output',
    default: '"#,##0.#####"',
    notice: 'Integer part: "#,###", "#,##0", "#", "0"; Decimal part: "#", "0".'
    },
    {
    field: 'propertie.file.path',
    explain: 'Path to retrieve property files',
    default: '""',
    notice: 'Default Spring resource file path. Uses class.getClassLoader().getResourceAsStream().'
    }
]