export const dataWrapperGridDataKo = [
    // Constructor
    {
    method: 'constructor',
    param: 'none',
    return: 'DataWrapper',
    explain: '생성자. newDataWrapper(); 새로운 DataWrapper를 생성하여 반환한다.',
    note: '클로저함수를 활용.'
    },
    {
    method: 'constructor',
    param: 'Object object',
    return: 'DataWrapper',
    explain: '생성자. newDataWrapper(object);\n파라메터로 받은 객체를 통해 새로운 DataWrapper를 생성하여 반환한다.',
    note: '클로저함수를 활용. 삽입되는 Param은 깊은 복사되어 값으로 삽입된다.\n문자열이 아닌 원시타입 변수는 문자열로 자동 변환된다.'
    },
    {
    method: 'constructor',
    param: 'String key, String value',
    return: 'DataWrapper',
    explain: '생성자. newDataWrapper(key, value);\n파라메터로 받은 키와 문자 값을 통해 새로운 DataWrapper를 생성하여 반환한다.',
    note: '클로저함수를 활용. 삽입되는 Param은 깊은 복사되어 값으로 삽입된다.\n문자열이 아닌 원시타입 변수는 문자열로 자동 변환된다.'
    },
    {
    method: 'constructor',
    param: 'String key, DataModel value',
    return: 'DataWrapper',
    explain: '생성자. newDataWrapper(key, value);\n파라메터로 받은 키와 DataModel 값을 통해 새로운 DataWrapper를 생성하여 반환한다.',
    note: '클로저함수를 활용. 삽입되는 Param은 깊은 복사되어 값으로 삽입된다.\n문자열이 아닌 원시타입 변수는 문자열로 자동 변환된다.'
    },
    // Field & Basic Methods
    {
    method: 'isDataWrapper',
    param: '(field)',
    return: 'Boolean true',
    explain: 'newDataWrapper()을 통해 생성한 DataWrapper인지 확인하기 위한 필드.\n항상 true를 반환한다.',
    note: ''
    },
    {
    method: 'clone',
    param: 'none',
    return: 'DataWrapper',
    explain: '깊은 복사한 새로운 DataWrapper를 반환한다.',
    note: ''
    },
    {
    method: 'clear',
    param: 'none',
    return: 'DataWrapper',
    explain: 'DataWrapper의 data를 초기화하고 DataWrapper를 반환한다.',
    note: ''
    },
    {
    method: 'getSerialized',
    param: 'none',
    return: 'String',
    explain: '저장된 데이터를 직렬화된 문자열로 반환한다.',
    note: '서버 데이터 전송 시 사용. 외부에서 JSON.stringify를 하면 안된다.'
    },
    // Getters
    {
    method: 'get',
    param: 'String key',
    return: 'String || DataModel',
    explain: '파라메터로 받은 키에 해당하는 값을 반환한다.',
    note: '값은 깊은 복사를 통해 반환된다.'
    },
    {
    method: 'getString',
    param: 'String key',
    return: 'String',
    explain: '파라메터로 받은 키에 해당하는 문자열 값을 반환한다.',
    note: ''
    },
    {
    method: 'getDataModel',
    param: 'String key',
    return: 'DataModel',
    explain: '파라메터로 받은 키에 해당하는 DataModel 값을 반환한다.',
    note: '값은 깊은 복사를 통해 반환된다.'
    },
    {
    method: 'getObject',
    param: 'none',
    return: 'Object',
    explain: 'DataWrapper에 저장된 모든 data를 Object로 반환한다.',
    note: '값은 깊은 복사를 통해 반환된다.'
    },
    // Putters
    {
    method: 'put',
    param: 'Object object',
    return: 'DataWrapper',
    explain: '파라메터로 받은 Object의 키와 값들을 DataWrapper에 삽입한다.\nDataWrapper를 반환한다.',
    note: ''
    },
    {
    method: 'put',
    param: 'String key, String value',
    return: 'DataWrapper',
    explain: '파라메터로 받은 문자열 키와 문자열 값을 DataWrapper에 삽입한다.\nDataWrapper를 반환한다.',
    note: ''
    },
    {
    method: 'put',
    param: 'String key,\nDataModel value',
    return: 'DataWrapper',
    explain: '파라메터로 받은 문자열 키와 DataModel 값을 DataWrapper에 삽입한다.\nDataWrapper를 반환한다.',
    note: ''
    },
    {
    method: 'putString',
    param: 'String key, Object value',
    return: 'DataWrapper',
    explain: '파라메터로 받은 문자열 키와 문자열 값을 DataWrapper에 삽입한다.\nDataWrapper를 반환한다.',
    note: ''
    },
    {
    method: 'putDataModel',
    param: 'String key, Object value',
    return: 'DataWrapper',
    explain: '파라메터로 받은 문자열 키와 DataModel 값을 DataWrapper에 삽입한다.\nDataWrapper를 반환한다.',
    note: ''
    },
    // Utility Methods
    {
    method: 'containsKey',
    param: 'String key',
    return: 'Boolean',
    explain: '파라메터로 받은 String key가 DataWrapper에 있는지 확인한다. 있으면 true.',
    note: ''
    },
    {
    method: 'isEmpty',
    param: 'none',
    return: 'Boolean',
    explain: 'DataWrapper가 비어있으면 true.',
    note: ''
    },
    {
    method: 'remove',
    param: 'String key',
    return: 'DataWrapper',
    explain: '해당 key를 삭제한다.',
    note: ''
    },
    {
    method: 'size',
    param: 'none',
    return: 'Number',
    explain: 'DataWrapper의 크기를 반환한다.',
    note: ''
    },
    {
    method: 'keys',
    param: 'none',
    return: 'Array',
    explain: 'DataWrapper의 모든 키를 반환한다.',
    note: ''
    },
    {
    method: 'values',
    param: 'none',
    return: 'Array',
    explain: 'DataWrapper의 모든 값을 반환한다.',
    note: ''
    }
]

export const dataModelGridDataKo = [
    // Constructor
    {
    method: 'constructor',
    param: 'none',
    return: 'DataModel',
    explain: '생성자. newDataModel(); 새로운 DataModel을 생성하여 반환한다.',
    note: '클로저함수를 활용.'
    },
    {
    method: 'constructor',
    param: '[String column]',
    return: 'DataModel',
    explain: '생성자. newDataModel(Array[String]);\n파라메터로 받은 객체를 통해 새로운 DataModel의 컬럼을 생성하여 반환한다.',
    note: '클로저함수를 활용. 삽입되는 Param은 깊은 복사되어 값으로 삽입된다.\n문자열이 아닌 원시타입 변수는 문자열로 자동 변환된다.'
    },
    {
    method: 'constructor',
    param: '[{}]',
    return: 'DataModel',
    explain: '생성자. newDataModel(Array[object]);\n파라메터로 받은 객체를 통해 새로운 DataModel의 컬럼과 여러행을 생성하여 반환한다.',
    note: '클로저함수를 활용. 삽입되는 Param은 깊은 복사되어 값으로 삽입된다.\n문자열이 아닌 원시타입 변수는 문자열로 자동 변환된다.'
    },
    {
    method: 'constructor',
    param: '{}',
    return: 'DataModel',
    explain: '생성자. newDataModel(object);\n파라메터로 받은 객체를 통해 새로운 DataModel의 컬럼과 단일행을 생성하여 반환한다.',
    note: '클로저함수를 활용. 삽입되는 Param은 깊은 복사되어 값으로 삽입된다.\n문자열이 아닌 원시타입 변수는 문자열로 자동 변환된다.'
    },

    // Core / Utility Methods
    {
    method: 'isDataModel',
    param: '(field)',
    return: 'Boolean true',
    explain: 'newDataModel()을 통해 생성한 DataModel인지 확인하기 위한 필드. 항상 true를 반환한다.',
    note: ''
    },
    {
    method: 'clone',
    param: 'none',
    return: 'DataModel',
    explain: '깊은 복사한 새로운 DataModel를 반환한다.',
    note: ''
    },
    {
    method: 'clear',
    param: 'none',
    return: 'DataModel',
    explain: 'DataModel의 컬럼과 행을 초기화하고 DataModel를 반환한다.',
    note: ''
    },
    {
    method: 'getSerialized',
    param: 'none',
    return: 'String',
    explain: '저장된 데이터를 직렬화된 문자열로 반환한다.',
    note: '서버 데이터 전송 시 사용. 외부에서 JSON.stringify를 하면 안된다.'
    },
    {
    method: 'isDeclare',
    param: 'none',
    return: 'Boolean',
    explain: 'DataModel의 컬럼이 정의 되었으면 true.',
    note: ''
    },
    {
    method: 'getColumnCount',
    param: 'none',
    return: 'Integer',
    explain: '컬럼 개수를 반환한다.',
    note: ''
    },
    {
    method: 'getRowCount',
    param: 'none',
    return: 'Integer',
    explain: '행 개수를 반환한다.',
    note: ''
    },
    {
    method: 'hasColumn',
    param: 'String column',
    return: 'Boolean',
    explain: '파라메터 column이 존재하는지 체크한다.',
    note: ''
    },

    // Column Manipulation
    {
    method: 'getColumns',
    param: 'none',
    return: '[]',
    explain: '컬럼을 깊은 복사하여 배열로 반환한다.',
    note: ''
    },
    {
    method: 'getColumnValues',
    param: 'String column',
    return: '[]',
    explain: '모든 행에 저장된 파라메터 컬럼의 값을 배열로 반환한다.',
    note: ''
    },
    {
    method: 'addColumn',
    param: 'String column',
    return: 'DataModel',
    explain: '컬럼을 삽입하고 행에 해당 컬럼을 key, 값을 null로 삽입한다.\nDataModel을 반환한다.',
    note: ''
    },
    {
    method: 'addColumns',
    param: '[String column]',
    return: 'DataModel',
    explain: '컬럼들을 배열로 삽입하고 행에 해당 컬럼들을 key, 값을 null로 삽입한다.\nDataModel을 반환한다.',
    note: ''
    },
    {
    method: 'setColumnSameValue',
    param: 'String column, Value',
    return: 'DataModel',
    explain: '모든 행의 파라메터 컬럼 key의 값에 파라메터 value를 삽입한다.',
    note: ''
    },
    {
    method: 'setColumnSameFormat',
    param: 'String column, Function formatter(value)',
    return: 'DataModel',
    explain: '모든 행의 파라메터 컬럼 key의 값에 파라메터 fommatter로 형식을 변환한다.',
    note: ''
    },
    {
    method: 'removeColumn',
    param: 'String column',
    return: 'DataModel',
    explain: '파라메터 컬럼을 삭제하고 모든행의 컬럼 key와 값을 삭제한다.',
    note: ''
    },
    {
    method: 'removeColumns',
    param: '[String column]',
    return: 'DataModel',
    explain: '파라메터 컬럼들을 삭제하고 모든행의 해당 컬럼들의 key와 값을 삭제한다.',
    note: ''
    },
    {
    method: 'setValidColumns',
    param: '[String column]',
    return: 'DataModel',
    explain: '파라메터 [column]에 해당하는 컬럼들만 남기고 나머지 컬럼들과 각 행의 값들을 삭제한다.',
    note: ''
    },
    {
    method: 'setColumnSorting',
    param: '[String column]',
    return: 'DataModel',
    explain: '컬럼을 파라메터 [column]의 순서로 정렬한다.\n파라메터에 없는 컬럼은 기존 순서로 마지막으로 삽입된다.\n기존 컬럼에 없는 파라메터가 전달되면 에러.',
    note: ''
    },
    {
    method: 'sortColumnAscending',
    param: 'none',
    return: 'DataModel',
    explain: '컬럼을 오름차순으로 정렬한다.',
    note: ''
    },
    {
    method: 'sortColumnDescending',
    param: 'none',
    return: 'DataModel',
    explain: '컬럼을 내림차순으로 정렬한다.',
    note: ''
    },
    {
    method: 'sortColumnReverse',
    param: 'none',
    return: 'DataModel',
    explain: '컬럼의 현재 순서를 반전한다.',
    note: ''
    },

    // Row Getters
    {
    method: 'getRow',
    param: 'Integer rowIndex',
    return: '{}',
    explain: '파라메터 rowIndex번의 행을 Object로 가져온다.',
    note: '깊은 복사를 통해 가져온다.'
    },
    {
    method: 'getRowAsDataModel',
    param: 'Integer rowIndex',
    return: 'DataModel',
    explain: '파라메터 rowIndex번의 행을 DataModel로 가져온다.',
    note: '깊은 복사를 통해 가져온다.'
    },
    {
    method: 'getRows',
    param: 'startRow?: number, endRow?: number',
    return: '[{}]',
    explain: '행들을 깊은 배열로 반환한다.',
    note: '깊은 복사를 통해 가져온다.'
    },
    {
    method: 'getRowsAsDataModel',
    param: 'startRow?: number, endRow?: number',
    return: 'DataModel',
    explain: '행들을 DataModel로 가져온다.',
    note: '깊은 복사를 통해 가져온다.'
    },
    {
    method: 'getObject',
    param: 'none',
    return: '{}',
    explain: 'DataModel의 컬럼, 행 등의 정보를 Object형태로 반환한다.',
    note: '깊은 복사를 통해 반환한다.'
    },

    // Row Setters / Modifiers
    {
    method: 'addRow',
    param: 'none',
    return: 'DataModel',
    explain: '마지막에 행을 추가한다.',
    note: '깊은 복사를 통해 추가. 컬럼에 정의된 데이터만 삽입된다.\n컬럼에는 정의 되었고 데이터는 없으면 자동으로 null을 삽입한다.'
    },
    {
    method: 'addRow',
    param: 'Integer rowIndex',
    return: 'DataModel',
    explain: '지정된 인덱스로 행을 추가한다.',
    note: '깊은 복사를 통해 추가. 컬럼에 정의된 데이터만 삽입된다.\n컬럼에는 정의 되었고 데이터는 없으면 자동으로 null을 삽입한다.'
    },
    {
    method: 'addRow',
    param: '{}',
    return: 'DataModel',
    explain: '파라메터 Object를 행으로 추가하고 DataModel을 반환한다.',
    note: '깊은 복사를 통해 추가. 컬럼에 정의된 데이터만 삽입된다.\n컬럼에는 정의 되었고 데이터는 없으면 자동으로 null을 삽입한다.'
    },
    {
    method: 'addRow',
    param: 'Integer rowIndex, {}',
    return: 'DataModel',
    explain: '지정된 인덱스로 Map<String, Object>을 통해 행을 추가한다.',
    note: '깊은 복사를 통해 추가. 컬럼에 정의된 데이터만 삽입된다.\n컬럼에는 정의 되었고 데이터는 없으면 자동으로 null을 삽입한다.'
    },
    {
    method: 'addRows',
    param: '[{}]',
    return: 'DataModel',
    explain: '파라메터 Array[Object]을 행으로 추가하고 DataModel을 반환한다.',
    note: '깊은 복사를 통해 추가. 컬럼에 정의된 데이터만 삽입된다.\n컬럼에는 정의 되었고 데이터는 없으면 자동으로 null을 삽입한다.'
    },
    {
    method: 'addRows',
    param: 'DataModel',
    return: 'DataModel',
    explain: '파라메터 DataModel을 행으로 추가하고 DataModel을 반환한다.',
    note: '깊은 복사를 통해 추가. 컬럼에 정의된 데이터만 삽입된다.\n컬럼에는 정의 되었고 데이터는 없으면 자동으로 null을 삽입한다.'
    },
    {
    method: 'removeRow',
    param: 'Integer rowIndex',
    return: '{}',
    explain: '파라메터 rowIndex번의 행을 삭제하고 해당 행을 반환한다.',
    note: ''
    },

    // Value Getters/Setters
    {
    method: 'getValue',
    param: 'Integer rowIndex, String column',
    return: 'Value',
    explain: '파라메터 rowIndex번의 파라메터 컬럼 key의 값을 반환한다.',
    note: ''
    },
    {
    method: 'setValue',
    param: 'Integer rowIndex, String column, Value',
    return: 'DataModel',
    explain: '파라메터 rowIndex번의 파라메터 컬럼 key의 값에 파라메터 value를 삽입한다.',
    note: ''
    },

    // Validation & Search
    {
    method: 'isNotNullColumn',
    param: 'String column',
    return: 'Boolean',
    explain: '파라메터 column의 값들 중 null이 있는 행이 있는지 체크.\n하나라도 null이 있으면 false를 반환한다. 모두 not null이면 true를 반환한다.',
    note: ''
    },
    {
    method: 'findFirstRowNullColumn',
    param: 'String column',
    return: '{}',
    explain: '파라메터 column의 값들 중 첫번째로 null인 행을 HashMap<String, Object>로 반환한다.',
    note: ''
    },
    {
    method: 'isNotDuplColumn',
    param: 'String column',
    return: 'Boolean',
    explain: '파라메터 column의 값들 중 중복되는 값이 있는지 체크.\n중복되면 false, 중복되지 않으면 true를 반환한다.',
    note: ''
    },
    {
    method: 'findFirstRowDuplColumn',
    param: 'String column',
    return: '{}',
    explain: '파라메터 column의 값들 중 앞선 행에 중복되는 값이 있는\n첫번째 행을 HashMap<String, Object>로 반환한다.',
    note: ''
    },
    {
    method: 'isValidValue',
    param: 'String column, Function validator(value)',
    return: 'Boolean',
    explain: '파라메터 column의 값들 중 파라메터 validator의\n유효성 검사를 모두 통과하면 true, 하나라도 다르면 false.',
    note: ''
    },
    {
    method: 'findFirstRowInvalidValue',
    param: 'String column, Function validator(value)',
    return: '{}',
    explain: '파라메터 column의 값들 중 파라메터 validator를\n검사하여 유효하지 않은 첫번째 행을 반환한다.',
    note: ''
    },
    {
    method: 'searchRowIndexes',
    param: '{column : value}, boolean isNegative',
    return: '[]',
    explain: '파라메터 {column : value}와 값이 일치하는 행의 index를 List로 반환한다.\n(각 조건은 AND조건, 단순 equals로 비교한다.) boolean isNative가 true이면 반전.',
    note: ''
    },
    {
    method: 'searchRows',
    param: '{column : value}, boolean isNegative',
    return: '[{}]',
    explain: '파라메터 {column : value}와 값이 일치하는 행을 List로 반환한다.\n(각 조건은 AND조건, 단순 equals로 비교한다.) boolean isNative가 true이면 반전.',
    note: ''
    },
    {
    method: 'searchRowsAsDataModel',
    param: '{column : value}, boolean isNegative',
    return: 'DataModel',
    explain: '파라메터 {column : value}와 값이 일치하는 행을 DataModel 반환한다.\n(각 조건은 AND조건, 단순 equals로 비교한다.) boolean isNative가 true이면 반전.',
    note: ''
    },
    {
    method: 'searchAndModify',
    param: '{column : value}, boolean isNegative',
    return: 'DataModel',
    explain: '파라메터 {column : value}와 값이 일치하는 행만 남김. 현재 DataModel 변경하여 반환한다.\n(각 조건은 AND조건, 단순 equals로 비교한다.) boolean isNative가 true이면 반전.',
    note: ''
    },
    {
    method: 'filterRowIndexes',
    param: 'Function filter({})',
    return: '[]',
    explain: '파라메터 filter({})에 해당하는 행의 index를 List로 반환한다.',
    note: ''
    },
    {
    method: 'filterRows',
    param: 'Function filter({})',
    return: '[{}]',
    explain: '파라메터 filter({})에 해당하는 행을 List로 반환한다.',
    note: ''
    },
    {
    method: 'filterRowsAsDataModel',
    param: 'Function filter({})',
    return: 'DataModel',
    explain: '파라메터 filter({})에 해당하는 행을 DataModel로 반환한다.',
    note: ''
    },
    {
    method: 'filterAndModify',
    param: 'Function filter({})',
    return: 'DataModel',
    explain: '파라메터 filter({})에 해당하는 행만 남긴다.\n현재 DataModel을 변경하여 반환한다.',
    note: ''
    },

    // Row Sorting
    {
    method: 'sortRowAscending',
    param: 'String column, Boolean isIntegerOrder',
    return: 'DataModel',
    explain: '파라메터 column의 값을 기준으로 오름차순으로 정렬한다.\nisIntegerOrder true인 경우 숫자로 인식해서 정렬한다.',
    note: ''
    },
    {
    method: 'sortRowDescending',
    param: 'String column, Boolean isIntegerOrder',
    return: 'DataModel',
    explain: '파라메터 column의 값을 기준으로 내림차순으로 정렬한다.\nisIntegerOrder true인 경우 숫자로 인식해서 정렬한다.',
    note: ''
    },
    {
    method: 'sortRowReverse',
    param: 'none',
    return: 'DataModel',
    explain: '행의 현재 순서를 반전한다.',
    note: ''
}
]

export const dataWrapperGridDataEn = [
    // Constructor
    {
    method: 'constructor',
    param: 'none',
    return: 'DataWrapper',
    explain: 'Constructor. newDataWrapper(); Creates and returns a new DataWrapper.',
    note: 'Utilizes a closure function.'
    },
    {
    method: 'constructor',
    param: 'Object object',
    return: 'DataWrapper',
    explain: 'Constructor. newDataWrapper(object);\nCreates and returns a new DataWrapper using the object received as a parameter.',
    note: 'Utilizes a closure function. The inserted parameter is deeply copied and inserted as a value.\nNon-string primitive variables are automatically converted to strings.'
    },
    {
    method: 'constructor',
    param: 'String key, String value',
    return: 'DataWrapper',
    explain: 'Constructor. newDataWrapper(key, value);\nCreates and returns a new DataWrapper using the key and string value received as parameters.',
    note: 'Utilizes a closure function. The inserted parameter is deeply copied and inserted as a value.\nNon-string primitive variables are automatically converted to strings.'
    },
    {
    method: 'constructor',
    param: 'String key, DataModel value',
    return: 'DataWrapper',
    explain: 'Constructor. newDataWrapper(key, value);\nCreates and returns a new DataWrapper using the key and DataModel value received as parameters.',
    note: 'Utilizes a closure function. The inserted parameter is deeply copied and inserted as a value.\nNon-string primitive variables are automatically converted to strings.'
    },
    // Field & Basic Methods
    {
    method: 'isDataWrapper',
    param: '(field)',
    return: 'Boolean true',
    explain: 'A field to confirm if the DataWrapper was created via newDataWrapper().\nAlways returns true.',
    note: ''
    },
    {
    method: 'clone',
    param: 'none',
    return: 'DataWrapper',
    explain: 'Returns a new DataWrapper with a deep copy of the data.',
    note: ''
    },
    {
    method: 'clear',
    param: 'none',
    return: 'DataWrapper',
    explain: 'Initializes the DataWrapper\'s data and returns the DataWrapper.',
    note: ''
    },
    {
    method: 'getSerialized',
    param: 'none',
    return: 'String',
    explain: 'Returns the stored data as a serialized string.',
    note: 'Used for server data transfer. Do not use JSON.stringify externally.'
    },
    // Getters
    {
    method: 'get',
    param: 'String key',
    return: 'String || DataModel',
    explain: 'Returns the value corresponding to the received key.',
    note: 'The value is returned via deep copy.'
    },
    {
    method: 'getString',
    param: 'String key',
    return: 'String',
    explain: 'Returns the string value corresponding to the received key.',
    note: ''
    },
    {
    method: 'getDataModel',
    param: 'String key',
    return: 'DataModel',
    explain: 'Returns the DataModel value corresponding to the received key.',
    note: 'The value is returned via deep copy.'
    },
    {
    method: 'getObject',
    param: 'none',
    return: 'Object',
    explain: 'Returns all data stored in the DataWrapper as an Object.',
    note: 'The value is returned via deep copy.'
    },
    // Putters
    {
    method: 'put',
    param: 'Object object',
    return: 'DataWrapper',
    explain: 'Inserts the keys and values of the received Object into the DataWrapper.\nReturns the DataWrapper.',
    note: ''
    },
    {
    method: 'put',
    param: 'String key, String value',
    return: 'DataWrapper',
    explain: 'Inserts the received string key and string value into the DataWrapper.\nReturns the DataWrapper.',
    note: ''
    },
    {
    method: 'put',
    param: 'String key, DataModel value',
    return: 'DataWrapper',
    explain: 'Inserts the received string key and DataModel value into the DataWrapper.\nReturns the DataWrapper.',
    note: ''
    },
    {
    method: 'putString',
    param: 'String key, Object value',
    return: 'DataWrapper',
    explain: 'Inserts the received string key and string value into the DataWrapper.\nReturns the DataWrapper.',
    note: ''
    },
    {
    method: 'putDataModel',
    param: 'String key,\nObject value',
    return: 'DataWrapper',
    explain: 'Inserts the received string key and DataModel value into the DataWrapper.\nReturns the DataWrapper.',
    note: ''
    },
    // Utility Methods
    {
    method: 'containsKey',
    param: 'String key',
    return: 'Boolean',
    explain: 'Checks if the received String key exists in the DataWrapper.\nReturns true if it exists.',
    note: ''
    },
    {
    method: 'isEmpty',
    param: 'none',
    return: 'Boolean',
    explain: 'Returns true if the DataWrapper is empty.',
    note: ''
    },
    {
    method: 'remove',
    param: 'String key',
    return: 'DataWrapper',
    explain: 'Deletes the corresponding key.',
    note: ''
    },
    {
    method: 'size',
    param: 'none',
    return: 'Number',
    explain: 'Returns the size of the DataWrapper.',
    note: ''
    },
    {
    method: 'keys',
    param: 'none',
    return: 'Array',
    explain: 'Returns all keys of the DataWrapper.',
    note: ''
    },
    {
    method: 'values',
    param: 'none',
    return: 'Array',
    explain: 'Returns all values of the DataWrapper.',
    note: ''
    }
]

export const dataModelGridDataEn = [
    // Constructor
    {
    method: 'constructor',
    param: 'none',
    return: 'DataModel',
    explain: 'Constructor. newDataModel(); Creates and returns a new DataModel.',
    note: 'Utilizes a closure function.'
    },
    {
    method: 'constructor',
    param: '[String column]',
    return: 'DataModel',
    explain: 'Constructor. newDataModel(Array[String]);\nCreates new DataModel columns using the array parameter.',
    note: 'Utilizes a closure function. The inserted parameter is deeply copied and inserted as a value.\nNon-string primitives are automatically converted to strings.'
    },
    {
    method: 'constructor',
    param: '[{}]',
    return: 'DataModel',
    explain: 'Constructor. newDataModel(Array[object]);\nCreates new DataModel columns and multiple rows using the array parameter.',
    note: 'Utilizes a closure function. The inserted parameter is deeply copied and inserted as a value.\nNon-string primitives are automatically converted to strings.'
    },
    {
    method: 'constructor',
    param: '{}',
    return: 'DataModel',
    explain: 'Constructor. newDataModel(object);\nCreates new DataModel columns and a single row using the object parameter.',
    note: 'Utilizes a closure function. The inserted parameter is deeply copied and inserted as a value.\nNon-string primitives are automatically converted to strings.'
    },

    // Core / Utility Methods
    {
    method: 'isDataModel',
    param: '(field)',
    return: 'Boolean true',
    explain: 'A field to confirm if the DataModel was created via newDataModel().\nAlways returns true.',
    note: ''
    },
    {
    method: 'clone',
    param: 'none',
    return: 'DataModel',
    explain: 'Returns a new DataModel with a deep copy.',
    note: ''
    },
    {
    method: 'clear',
    param: 'none',
    return: 'DataModel',
    explain: 'Initializes (clears) the DataModel\'s columns and rows,\nand returns the DataModel.',
    note: ''
    },
    {
    method: 'getSerialized',
    param: 'none',
    return: 'String',
    explain: 'Returns the stored data as a serialized string (JSON).',
    note: 'Used for server data transfer. Do not use JSON.stringify externally.'
    },
    {
    method: 'isDeclare',
    param: 'none',
    return: 'Boolean',
    explain: 'Returns true if the DataModel\'s columns have been defined.',
    note: ''
    },
    {
    method: 'getColumnCount',
    param: 'none',
    return: 'Integer',
    explain: 'Returns the column count.',
    note: ''
    },
    {
    method: 'getRowCount',
    param: 'none',
    return: 'Integer',
    explain: 'Returns the row count.',
    note: ''
    },
    {
    method: 'hasColumn',
    param: 'String column',
    return: 'Boolean',
    explain: 'Checks if the parameter column exists.',
    note: ''
    },

    // Column Manipulation
    {
    method: 'getColumns',
    param: 'none',
    return: '[]',
    explain: 'Returns an array of columns via deep copy.',
    note: ''
    },
    {
    method: 'getColumnValues',
    param: 'String column',
    return: '[]',
    explain: 'Returns an array of values for the specified column from all rows.',
    note: ''
    },
    {
    method: 'addColumn',
    param: 'String column',
    return: 'DataModel',
    explain: 'Inserts a column. Sets the column key to null for all existing rows.\nReturns the DataModel.',
    note: ''
    },
    {
    method: 'addColumns',
    param: '[String column]',
    return: 'DataModel',
    explain: 'Inserts an array of columns.\nSets the column keys to null for all existing rows. Returns the DataModel.',
    note: ''
    },
    {
    method: 'setColumnSameValue',
    param: 'String column, Value',
    return: 'DataModel',
    explain: 'Inserts the parameter value into the specified column key for all rows.',
    note: ''
    },
    {
    method: 'setColumnSameFormat',
    param: 'String column, Function formatter(value)',
    return: 'DataModel',
    explain: 'Converts the format of the specified column\'s key value in all rows using the formatter function parameter.',
    note: ''
    },
    {
    method: 'removeColumn',
    param: 'String column',
    return: 'DataModel',
    explain: 'Deletes the parameter column, and removes the column key and value from all rows.',
    note: ''
    },
    {
    method: 'removeColumns',
    param: '[String column]',
    return: 'DataModel',
    explain: 'Deletes the parameter columns,\nand removes the corresponding column keys and values from all rows.',
    note: ''
    },
    {
    method: 'setValidColumns',
    param: '[String column]',
    return: 'DataModel',
    explain: 'Keeps only the columns in [column] and deletes\nthe rest of the columns and their values in each row.',
    note: ''
    },
    {
    method: 'setColumnSorting',
    param: '[String column]',
    return: 'DataModel',
    explain: 'Sorts the columns according to the order in the parameter [column].\nColumns not in the parameter are inserted last in their original order.\nThrows an error if a parameter column does not exist.',
    note: ''
    },
    {
    method: 'sortColumnAscending',
    param: 'none',
    return: 'DataModel',
    explain: 'Sorts the columns in ascending order.',
    note: ''
    },
    {
    method: 'sortColumnDescending',
    param: 'none',
    return: 'DataModel',
    explain: 'Sorts the columns in descending order.',
    note: ''
    },
    {
    method: 'sortColumnReverse',
    param: 'none',
    return: 'DataModel',
    explain: 'Reverses the current order of the columns.',
    note: ''
    },

    // Row Getters
    {
    method: 'getRow',
    param: 'Integer rowIndex',
    return: '{}',
    explain: 'Retrieves the row at the parameter rowIndex as an Object.',
    note: 'Retrieved via deep copy.'
    },
    {
    method: 'getRowAsDataModel',
    param: 'Integer rowIndex',
    return: 'DataModel',
    explain: 'Retrieves the row at the parameter rowIndex as a DataModel.',
    note: 'Retrieved via deep copy.'
    },
    {
    method: 'getRows',
    param: 'startRow?: number, endRow?: number',
    return: '[{}]',
    explain: 'Returns the rows as a deep array.',
    note: 'Retrieved via deep copy.'
    },
    {
    method: 'getRowsAsDataModel',
    param: 'startRow?: number, endRow?: number',
    return: 'DataModel',
    explain: 'Retrieves the rows as a DataModel.',
    note: 'Retrieved via deep copy.'
    },
    {
    method: 'getObject',
    param: 'none',
    return: '{}',
    explain: 'Returns the DataModel\'s column, row, and other information as an Object.',
    note: 'Returned via deep copy.'
    },

    // Row Setters / Modifiers
    {
    method: 'addRow',
    param: 'none',
    return: 'DataModel',
    explain: 'Appends a new row to the end.',
    note: 'Added via deep copy. Only data defined in columns is inserted.\nIf data is missing for a defined column, null is automatically inserted.'
    },
    {
    method: 'addRow',
    param: 'Integer rowIndex',
    return: 'DataModel',
    explain: 'Appends a new row at the specified index.',
    note: 'Added via deep copy. Only data defined in columns is inserted.\nIf data is missing for a defined column, null is automatically inserted.'
    },
    {
    method: 'addRow',
    param: '{}',
    return: 'DataModel',
    explain: 'Appends the parameter Object\nas a row and returns the DataModel.',
    note: 'Added via deep copy. Only data defined in columns is inserted.\nIf data is missing for a defined column, null is automatically inserted.'
    },
    {
    method: 'addRow',
    param: 'Integer rowIndex, {}',
    return: 'DataModel',
    explain: 'Appends the Map<String, Object>\nas a row at the specified index.',
    note: 'Added via deep copy. Only data defined in columns is inserted.\nIf data is missing for a defined column, null is automatically inserted.'
    },
    {
    method: 'addRows',
    param: '[{}]',
    return: 'DataModel',
    explain: 'Appends the parameter Array[Object]\nas rows and returns the DataModel.',
    note: 'Added via deep copy. Only data defined in columns is inserted.\nIf data is missing for a defined column, null is automatically inserted.'
    },
    {
    method: 'addRows',
    param: 'DataModel',
    return: 'DataModel',
    explain: 'Appends the parameter DataModel\nas rows and returns the DataModel.',
    note: 'Added via deep copy. Only data defined in columns is inserted.\nIf data is missing for a defined column, null is automatically inserted.'
    },
    {
    method: 'removeRow',
    param: 'Integer rowIndex',
    return: '{}',
    explain: 'Deletes the row at the parameter rowIndex and returns the deleted row.',
    note: ''
    },

    // Value Getters/Setters
    {
    method: 'getValue',
    param: 'Integer rowIndex, String column',
    return: 'Value',
    explain: 'Returns the value of the parameter column key at the parameter rowIndex.',
    note: ''
    },
    {
    method: 'setValue',
    param: 'Integer rowIndex, String column, Value',
    return: 'DataModel',
    explain: 'Inserts the parameter value into the specified column key at the parameter rowIndex.',
    note: ''
    },

    // Validation & Search
    {
    method: 'isNotNullColumn',
    param: 'String column',
    return: 'Boolean',
    explain: 'Checks if any row has a null value in the parameter column.\nReturns false if at least one null exists, true if all are non-null.',
    note: ''
    },
    {
    method: 'findFirstRowNullColumn',
    param: 'String column',
    return: '{}',
    explain: 'Returns the first row with a null value in the parameter column as HashMap<String, Object>.',
    note: ''
    },
    {
    method: 'isNotDuplColumn',
    param: 'String column',
    return: 'Boolean',
    explain: 'Checks if there are duplicate values in the parameter column.\nReturns false if duplicated, true if not duplicated.',
    note: ''
    },
    {
    method: 'findFirstRowDuplColumn',
    param: 'String column',
    return: '{}',
    explain: 'Returns the first row with a duplicate value\n(in a preceding row) in the parameter column as HashMap<String, Object>.',
    note: ''
    },
    {
    method: 'isValidValue',
    param: 'String column, Function validator(value)',
    return: 'Boolean',
    explain: 'Returns true if all values in the parameter column pass\nthe validator function, false if even one fails.',
    note: ''
    },
    {
    method: 'findFirstRowInvalidValue',
    param: 'String column, Function validator(value)',
    return: '{}',
    explain: 'Returns the first row that fails the validation check of\nthe validator function on the parameter column.',
    note: ''
    },
    {
    method: 'searchRowIndexes',
    param: '{column : value}, boolean isNegative',
    return: '[]',
    explain: 'Returns a List of row indexes where the values match {column : value}.\n(Conditions are AND, simple equals comparison.)\nInverts the result if boolean isNegative is true.',
    note: ''
    },
    {
    method: 'searchRows',
    param: '{column : value}, boolean isNegative',
    return: '[{}]',
    explain: 'Returns a List of rows (as [{}] ) where the values match {column : value}.\n(Conditions are AND, simple equals comparison.)\nInverts the result if boolean isNegative is true.',
    note: ''
    },
    {
    method: 'searchRowsAsDataModel',
    param: '{column : value}, boolean isNegative',
    return: 'DataModel',
    explain: 'Returns a DataModel containing rows where the values match {column : value}.\n(Conditions are AND, simple equals comparison.)\nInverts the result if boolean isNegative is true.',
    note: ''
    },
    {
    method: 'searchAndModify',
    param: '{column : value}, boolean isNegative',
    return: 'DataModel',
    explain: 'Keeps only the rows where the values match {column : value}.\nModifies and returns the current DataModel. (Conditions are AND, simple equals comparison.)\nInverts the result if boolean isNegative is true.',
    note: ''
    },
    {
    method: 'filterRowIndexes',
    param: 'Function filter({})',
    return: '[]',
    explain: 'Returns a List of row indexes that satisfy the parameter filter({}) function.',
    note: ''
    },
    {
    method: 'filterRows',
    param: 'Function filter({})',
    return: '[{}]',
    explain: 'Returns a List of rows (as [{}] ) that satisfy the parameter filter({}) function.',
    note: ''
    },
    {
    method: 'filterRowsAsDataModel',
    param: 'Function filter({})',
    return: 'DataModel',
    explain: 'Returns a DataModel containing rows that satisfy the parameter filter({}) function.',
    note: ''
    },
    {
    method: 'filterAndModify',
    param: 'Function filter({})',
    return: 'DataModel',
    explain: 'Keeps only the rows that satisfy the parameter filter({}) function.\nModifies and returns the current DataModel.',
    note: ''
    },

    // Row Sorting
    {
    method: 'sortRowAscending',
    param: 'String column, Boolean isIntegerOrder',
    return: 'DataModel',
    explain: 'Sorts the rows in ascending order based on the value of the parameter column.\nIf isIntegerOrder is true, sorts numerically.',
    note: ''
    },
    {
    method: 'sortRowDescending',
    param: 'String column, Boolean isIntegerOrder',
    return: 'DataModel',
    explain: 'Sorts the rows in descending order based on the value of the parameter column.\nIf isIntegerOrder is true, sorts numerically.',
    note: ''
    },
    {
    method: 'sortRowReverse',
    param: 'none',
    return: 'DataModel',
    explain: 'Reverses the current order of the rows.',
    note: ''
    }
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

export const dataConfigGridDataEn = [
  {
    prop: "convertValue",
    type: "(value: any) => any",
    default: "(value) => value",
    explain:
      "A function that allows customization of how specific objects are inserted into a `DataModel`.\nIn `hisondev`, all values inserted into a `DataModel` are copied to maintain data integrity. However, some objects (e.g., `Date`) may require special handling.\nThis function lets developers define custom conversion logic before a value is inserted into the `DataModel`.\nUsed in `DataModel._deepCopy(object)` when handling non-plain objects.\nBy default, it returns the input value as is.\n\nExample:\n```typescript\nhison.setConvertValue((value: any) => {\n  return value instanceof Date ? value.getTime() : value;\n});\n```\nThe above converts `Date` objects into timestamps before insertion.",
  },
]