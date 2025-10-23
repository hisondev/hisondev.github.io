//Ko
export const dataWrapperGridDataKo = [
    {
    method: 'constructor',
    param: 'strings : HashMap<String, String>,\ndataModels : HashMap<String, DataModel>',
    return: '',
    explain: 'strings : HashMap<String, String>과\ndataModels : HashMap<String, DataModel>을 생성합니다.',
    note: ''
    },
    {
    method: 'constructor',
    param: 'String key, Object value',
    return: '',
    explain: 'String(key)에 Object(value)를 삽입하며 DataWrapper를 생성합니다.',
    note: 'Object(value)가 String 또는 DataModel 타입이 아니면 에러가 발생합니다.'
    },
    {
    method: 'getDatas',
    param: '',
    return: 'HashMap<String, Object>',
    explain: 'DataWrapper에 저장된 모든 데이터를 깊은 복사(Deep Copy)하여 반환합니다.',
    note: ''
    },
    {
    method: 'putString',
    param: 'String key, String value',
    return: '',
    explain: 'String(key)에 String(value)를 삽입합니다.',
    note: ''
    },
    {
    method: 'getString',
    param: 'String key',
    return: 'String',
    explain: 'String(key)에 해당하는 String(value)를 반환합니다.',
    note: 'String(key)의 값이 String 타입이 아닌 경우 null을 반환합니다.'
    },
    {
    method: 'putDataModel',
    param: 'String key, DataModel value',
    return: '',
    explain: 'String(key)에 DataModel(value)를 깊은 복사(Deep Copy)하여 삽입합니다.',
    note: ''
    },
    {
    method: 'getDataModel',
    param: 'String key',
    return: 'DataModel',
    explain: 'String(key)에 해당하는 DataModel(value)를 깊은 복사(Deep Copy)하여 반환합니다.',
    note: 'String(key)의 값이 DataModel 타입이 아닌 경우 null을 반환합니다.'
    },
    {
    method: 'put',
    param: 'String key, Object value',
    return: '',
    explain: 'String(key)에 Object(value)를 깊은 복사(Deep Copy)하여 삽입합니다.',
    note: 'Object(value)가 String 또는 DataModel 타입이 아닌 경우 에러가 발생합니다.'
    },
    {
    method: 'get',
    param: 'String key',
    return: 'Object',
    explain: 'String(key)에 해당하는 Object(value)를 깊은 복사(Deep Copy)하여 반환합니다.',
    note: ''
    },
    {
    method: 'getKeys',
    param: '',
    return: 'Set<String>',
    explain: 'DataWrapper의 모든 key 값을 반환합니다.',
    note: ''
    },
    {
    method: 'clone',
    param: '',
    return: 'DataWrapper',
    explain: 'DataWrapper를 깊은 복사(Deep Copy)하여 반환합니다.',
    note: ''
    },
    {
    method: 'clear',
    param: '',
    return: 'DataWrapper',
    explain: 'DataWrapper를 비우고 반환합니다.',
    note: ''
    },
    {
    method: 'containsKey',
    param: 'String key',
    return: 'boolean',
    explain: 'String(key)에 해당하는 key가 존재하면 true를 반환합니다.',
    note: ''
    },
    {
    method: 'toString',
    param: '',
    return: 'String',
    explain: '각 키와 값을 \\n을 구분자로 구분하여 String으로 출력합니다.\nDataModel은 DataModel의 toString()을 사용합니다.',
    note: ''
    },
    {
    method: 'toString',
    param: 'String dataModelSeparator',
    return: 'String',
    explain: '각 키와 값을 \\n을 구분자로 구분하여 String으로 출력합니다.\nDataModel은 DataModel의 toString()을 사용하며, dataModelSeparator를 전달합니다.',
    note: ''
    }
]

export const dataModelGridDataKo = [
    // 1. constructor (기본 생성자)
    {
    method: 'constructor',
    param: '-',
    return: 'DataModel',
    explain: 'DataModel을 생성합니다.',
    note: ''
    },
    // 2. constructor (String[] newColumns)
    {
    method: 'constructor',
    param: 'String[] newColumns',
    return: 'DataModel',
    explain: 'String[]를 이용해 컬럼을 삽입한 후 DataModel을 생성합니다.',
    note: '컬럼은 한번 정의하면 추가할 수 없지만, 삭제는 가능합니다.'
    },
    // 3. constructor (Set<String> newColumns)
    {
    method: 'constructor',
    param: 'Set<String> newColumns',
    return: 'DataModel',
    explain: 'Set<String>을 이용해 컬럼을 삽입한 후 DataModel을 생성합니다.',
    note: 'LinkedHashSet을 사용하면 입력된 컬럼의 순서가 유지됩니다.'
    },
    // 4. constructor (Map<String, Object> newRow)
    {
    method: 'constructor',
    param: 'Map<String, Object> newRow',
    return: 'DataModel',
    explain: 'Map<String, Object>를 이용해 한 행을 삽입한 후 DataModel을 생성합니다.',
    note: 'LinkedHashMap을 사용하면 입력된 컬럼의 순서가 유지됩니다.'
    },
    // 5. constructor (Tuple tuple)
    {
    method: 'constructor',
    param: 'Tuple tuple',
    return: 'DataModel',
    explain: 'Tuple을 이용해 한 행을 삽입한 후 DataModel을 생성합니다.',
    note: 'entityManager.createQuery.getResultList와 함께 사용하십시오.'
    },
    // 6. constructor (Object[] queryResult, String[] columnNames)
    {
    method: 'constructor',
    param: 'Object[] queryResult,\nString[] columnNames',
    return: 'DataModel',
    explain: 'Object[](행)와 String[](컬럼)을 이용해 한 행을 삽입한 후 DataModel을 생성합니다.',
    note: 'entityManager.createNativeQuery.getResult와 함께 사용하십시오.'
    },
    // 7. constructor (HttpSession session)
    {
    method: 'constructor',
    param: 'HttpSession session',
    return: 'DataModel',
    explain: 'HttpSession을 이용해 한 행을 삽입한 후 DataModel을 생성합니다.',
    note: ''
    },
    // 8. constructor (ResultSet rs)
    {
    method: 'constructor',
    param: 'ResultSet rs',
    return: 'DataModel',
    explain: 'ResultSet을 이용해 한 행을 삽입한 후 DataModel을 생성합니다.',
    note: ''
    },
    // 9. constructor (JsonNode node)
    {
    method: 'constructor',
    param: 'JsonNode node',
    return: 'DataModel',
    explain: 'JsonNode를 이용해 한 행을 삽입한 후 DataModel을 생성합니다.',
    note: ''
    },
    // 10. constructor (Object(Entity) entity)
    {
    method: 'constructor',
    param: 'Object(Entity) entity',
    return: 'DataModel',
    explain: 'Object(Entity)를 이용해 한 행을 삽입한 후 DataModel을 생성합니다.',
    note: 'java.reflect 사용으로 인한 성능 저하 우려가 있습니다.\n해당 Object는 @entity여야 합니다. (convertEntityToDataModel, isEntity 사용)'
    },
    // 11. constructor (List<T> newRows, T = String)
    {
    method: 'constructor',
    param: 'List<T> newRows (T = String)',
    return: 'DataModel',
    explain: 'T = String: 문자열 목록을 이용해 컬럼을 삽입한 후 DataModel을 생성합니다.',
    note: ''
    },
    // 12. constructor (List<T> newRows, T = Map)
    {
    method: 'constructor',
    param: 'List<T> newRows (T = Map)',
    return: 'DataModel',
    explain: 'T = Map: List<Map<String, Object>>를 이용해 행을 삽입한 후 DataModel을 생성합니다.',
    note: ''
    },
    // 13. constructor (List<T> newRows, T = Tuple)
    {
    method: 'constructor',
    param: 'List<T> newRows (T = Tuple)',
    return: 'DataModel',
    explain: 'T = Tuple: List<Tuple>을 이용해 행을 삽입한 후 DataModel을 생성합니다.',
    note: ''
    },
    // 14. constructor (List<T> newRows, T = Object(Entity))
    {
    method: 'constructor',
    param: 'List<T> newRows (T = Object(Entity))',
    return: 'DataModel',
    explain: 'T = Object(Entity): List<Object>를 이용해 행을 삽입한 후 DataModel을 생성합니다.',
    note: 'List<Object>의 경우 java.reflect 사용으로 인한 성능 저하 우려가 있습니다.\n해당 Object는 @entity여야 합니다. (convertEntityToDataModel, isEntity 사용)'
    },
    // 15. constructor (List<Object[]> queryResults, String[] columnNames)
    {
    method: 'constructor',
    param: 'List<Object[]> queryResults, String[] columnNames',
    return: 'DataModel',
    explain: 'List<Object[]>(행)와 String[](컬럼)을 이용해 행을 삽입한 후 DataModel을 생성합니다.',
    note: 'entityManager.createNativeQuery.getResultList와 함께 사용하십시오.'
    },
    // 16. toString()
    {
    method: 'toString',
    param: '-',
    return: 'String',
    explain: '컬럼 구분자는 \\t, 행 구분자는 \\n을 사용하여 String으로 출력합니다.',
    note: '디버그 콘솔 확인 후 엑셀에 바로 사용하기 편리합니다.'
    },
    // 17. toString(String separator)
    {
    method: 'toString',
    param: 'String separator',
    return: 'String',
    explain: '지정한 String을 컬럼 구분자, \\n을 행 구분자로 사용하여 String으로 출력합니다.',
    note: ''
    },
    // 18. isDefine()
    {
    method: 'isDefine',
    param: '-',
    return: 'boolean',
    explain: '현재 DataModel의 정의 상태를 반환합니다.',
    note: ''
    },
    // 19. clearDataModel()
    {
    method: 'clearDataModel',
    param: '-',
    return: 'DataModel',
    explain: '현재 DataModel을 비우고 현재 DataModel을 반환합니다.',
    note: ''
    },
    // 20. cloneDataModel()
    {
    method: 'cloneDataModel',
    param: '-',
    return: 'DataModel',
    explain: '현재 DataModel을 복제한 새로운 DataModel을 반환합니다.',
    note: '깊은 복사(Deep copy)입니다.'
    },
    // 21. insertDataModel(DataModel dataModel)
    {
    method: 'insertDataModel',
    param: 'DataModel dataModel',
    return: 'DataModel',
    explain: '파라미터 DataModel을 현재 DataModel에 합치고(union all) 현재 DataModel을 반환합니다.',
    note: ''
    },
    // 22. getConvertedJson()
    {
    method: 'getConvertedJson',
    param: '-',
    return: 'JsonNode',
    explain: '현재 DataModel을 jackson.databind의 ObjectMapper를 이용하여 JsonNode로 변환하여 반환합니다.',
    note: 'DataConverterDefault의 getConvertedJson을 사용합니다. 커스터마이징 가능합니다.'
    },
    // 23. getConvertedEntities(Class<?> entityClass)
    {
    method: 'getConvertedEntities',
    param: 'Class<?> entityClass',
    return: 'List<Object>',
    explain: '현재 DataModel을 jackson.databind의 ObjectMapper를 이용하여 지정된 entityClass의 List로 변환하여 반환합니다.',
    note: 'DataConverterDefault의 getConvertedEntities을 사용합니다. 커스터마이징 가능합니다.'
    },
    // 24. setColumns(String[] columns)
    {
    method: 'setColumns',
    param: 'String[] columns',
    return: 'DataModel',
    explain: 'String[]를 이용해 컬럼을 설정하고 현재 DataModel을 반환합니다.',
    note: 'DataModel에 이미 컬럼이 생성되어 있으면 에러가 발생합니다.'
    },
    // 25. setColumns(Set<String> columns)
    {
    method: 'setColumns',
    param: 'Set<String> columns',
    return: 'DataModel',
    explain: 'Set<String>을 이용해 컬럼을 설정하고 현재 DataModel을 반환합니다.',
    note: 'DataModel에 이미 컬럼이 생성되어 있으면 에러가 발생합니다.'
    },
    // 26. setColumns(List<String> columns)
    {
    method: 'setColumns',
    param: 'List<String> columns',
    return: 'DataModel',
    explain: 'List<String>을 이용해 컬럼을 설정하고 현재 DataModel을 반환합니다.',
    note: 'DataModel에 이미 컬럼이 생성되어 있으면 에러가 발생합니다.'
    },
    // 27. setColumnSameValue(String column, Object value)
    {
    method: 'setColumnSameValue',
    param: 'String column, Object value',
    return: 'DataModel',
    explain: '지정된 String(column)에 동일한 Object(Value)를 설정하고 현재 DataModel을 반환합니다.',
    note: ''
    },
    // 28. setColumnSameFormat(String column, Function<Object, Object> formatter)
    {
    method: 'setColumnSameFormat',
    param: 'String column,\nFunction<Object, Object> formatter',
    return: 'DataModel',
    explain: '지정된 String(column)에 Function<Object, Object>를\n이용해 동일한 포맷을 설정하고 현재 DataModel을 반환합니다.',
    note: ''
    },
    // 29. addRow() (파라미터 없음)
    {
    method: 'addRow',
    param: '-',
    return: 'DataModel',
    explain: '행을 마지막에 추가합니다.',
    note: '컬럼이 정의되어 있지 않으면 에러가 발생합니다.'
    },
    // 30. addRow(int rowIndex)
    {
    method: 'addRow',
    param: 'int rowIndex',
    return: 'DataModel',
    explain: '지정된 인덱스에 행을 추가합니다.',
    note: '컬럼이 정의되어 있지 않으면 에러가 발생합니다. 인덱스가 범위를 벗어나면 에러가 발생합니다.'
    },
    // 31. addRow(Map<String, Object> newRow)
    {
    method: 'addRow',
    param: 'Map<String, Object> newRow',
    return: 'DataModel',
    explain: 'Map<String, Object>를 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다. DataConverterDefault의\ngetConvertValueToDataModelRowValue를 사용합니다. 커스터마이징 가능합니다.'
    },
    // 32. addRow(int rowIndex, Map<String, Object> newRow)
    {
    method: 'addRow',
    param: 'int rowIndex,\nMap<String, Object> newRow',
    return: 'DataModel',
    explain: '지정된 인덱스에 Map<String, Object>를 이용해 행을 추가합니다.',
    note: '인덱스가 범위를 벗어나면 에러가 발생합니다.'
    },
    // 33. addRow(Tuple tuple)
    {
    method: 'addRow',
    param: 'Tuple tuple',
    return: 'DataModel',
    explain: 'Tuple을 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다.'
    },
    // 34. addRow(int rowIndex, Tuple tuple)
    {
    method: 'addRow',
    param: 'int rowIndex, Tuple tuple',
    return: 'DataModel',
    explain: '지정된 인덱스에 Tuple을 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다. 인덱스가 범위를 벗어나면 에러가 발생합니다.'
    },
    // 35. addRow(Object[] queryResult, String[] columnNames)
    {
    method: 'addRow',
    param: 'Object[] queryResult,\nString[] columnNames',
    return: 'DataModel',
    explain: 'Object[] queryResult와 String[] columnNames를 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다.'
    },
    // 36. addRow(int rowIndex, Object[] queryResult, String[] columnNames)
    {
    method: 'addRow',
    param: 'int rowIndex,\nObject[] queryResult,\nString[] columnNames',
    return: 'DataModel',
    explain: '지정된 인덱스에 Object[] queryResult와 String[] columnNames를 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다. 인덱스가 범위를 벗어나면 에러가 발생합니다.'
    },
    // 37. addRow(HttpSession session)
    {
    method: 'addRow',
    param: 'HttpSession session',
    return: 'DataModel',
    explain: 'HttpSession을 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다.'
    },
    // 38. addRow(int rowIndex, HttpSession session)
    {
    method: 'addRow',
    param: 'int rowIndex,\nHttpSession session',
    return: 'DataModel',
    explain: '지정된 인덱스에 HttpSession을 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다. 인덱스가 범위를 벗어나면 에러가 발생합니다.'
    },
    // 39. addRow(Object entity)
    {
    method: 'addRow',
    param: 'Object entity',
    return: 'DataModel',
    explain: 'jackson.databind의 ObjectMapper를 이용하여\nObject(Entity)를 DataModel에 행으로 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다.\nDataConverterDefault의 getObjectMapperForConvertEntitiesToDataModel 및 isEntity를 사용합니다.\n커스터마이징 가능합니다.'
    },
    // 40. addRow(int rowIndex, Object entity)
    {
    method: 'addRow',
    param: 'int rowIndex, Object entity',
    return: 'DataModel',
    explain: '지정된 인덱스에 jackson.databind의 ObjectMapper를 이용하여 Object(Entity)를 행으로 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다. 인덱스가 범위를 벗어나면 에러가 발생합니다.'
    },
    // 41. addRows(DataModel dataModel)
    {
    method: 'addRows',
    param: 'DataModel dataModel',
    return: 'DataModel',
    explain: '다른 DataModel을 이용해 행을 추가합니다. (union all)',
    note: '존재하지 않는 컬럼은 스킵됩니다.'
    },
    // 42. addRows(List<T> newRows) - T = Map / T = Tuple / T = Object(Entity)
    {
    method: 'addRows',
    param: 'List<T> newRows\n(T = Map / T = Tuple / T = Object(Entity))',
    return: 'DataModel',
    explain: 'T = Map: List<Map<String, Object>>, T = Tuple: List<Tuple>,\nT = Object(Entity): List<Object>를 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다. List<Object>의 경우 java.reflect 사용으로 인한 성능 저하 우려가 있습니다.\n해당 Object는 @entity여야 합니다. DataConverterDefault의 getObjectMapperForConvertEntitiesToDataModel 및\nisEntity를 사용합니다. 커스터마이징 가능합니다.'
    },
    // 43. addRows(ResultSet rs)
    {
    method: 'addRows',
    param: 'ResultSet rs',
    return: 'DataModel',
    explain: 'ResultSet을 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다.'
    },
    // 44. addRows(JsonNode node)
    {
    method: 'addRows',
    param: 'JsonNode node',
    return: 'DataModel',
    explain: 'jackson.databind의 ObjectMapper를 이용하여\nJsonNode를 DataModel에 행으로 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다.\nDataConverterDefault의 getConvertJsonValueNodeToDataModelRowValue를 사용합니다.\n커스터마이징 가능합니다.'
    },
    // 45. addRows(List<Object[]> queryResults, String[] columnNames)
    {
    method: 'addRows',
    param: 'List<Object[]> queryResults, String[] columnNames',
    return: 'DataModel',
    explain: 'List<Object[]>(행)와 String[](컬럼)을 이용해 행을 추가합니다.',
    note: '존재하지 않는 컬럼은 스킵됩니다.\nList<Object[]>는 행을, String[]는 컬럼을 나타냅니다.'
    },
    // 46. getColumnCount()
    {
    method: 'getColumnCount',
    param: '-',
    return: 'int',
    explain: '컬럼 개수를 반환합니다.',
    note: ''
    },
    // 47. getRowCount()
    {
    method: 'getRowCount',
    param: '-',
    return: 'int',
    explain: '행 개수를 반환합니다.',
    note: ''
    },
    // 48. getColumns()
    {
    method: 'getColumns',
    param: '-',
    return: 'List<String>',
    explain: '컬럼 목록을 반환합니다.',
    note: ''
    },
    // 49. getColumnsWithSet()
    {
    method: 'getColumnsWithSet',
    param: '-',
    return: 'Set<String>',
    explain: '컬럼 목록을 Set으로 반환합니다.',
    note: '컬럼 순서를 유지하고 싶다면 LinkedHashSet으로 받으십시오.'
    },
    // 50. getColumnValues(String column)
    {
    method: 'getColumnValues',
    param: 'String column',
    return: 'List<Object>',
    explain: '모든 행에서 String(column)에 저장된 값들을 List<Object>로 반환합니다.',
    note: ''
    },
    // 51. hasColumn(String column)
    {
    method: 'hasColumn',
    param: 'String column',
    return: 'boolean',
    explain: 'String(column)이 컬럼에 존재하는지 여부를 반환합니다.',
    note: ''
    },
    // 52. getRow(int rowIndex)
    {
    method: 'getRow',
    param: 'int rowIndex',
    return: 'HashMap<String, Object>',
    explain: 'int(rowIndex)번째 단일 행을 HashMap<String, Object>로 반환합니다.',
    note: '첫 번째 행의 인덱스는 0입니다.'
    },
    // 53. getRowAsDataModel(int rowIndex)
    {
    method: 'getRowAsDataModel',
    param: 'int rowIndex',
    return: 'DataModel',
    explain: 'int(rowIndex)번째 단일 행을 DataModel로 반환합니다.',
    note: '첫 번째 행의 인덱스는 0입니다.'
    },
    // 54. getRows()
    {
    method: 'getRows',
    param: '-',
    return: 'List<HashMap<String, Object>>',
    explain: '모든 행을 List<HashMap<String, Object>>로 반환합니다.',
    note: ''
    },
    // 55. getValue(int rowIndex, String column)
    {
    method: 'getValue',
    param: 'int rowIndex, String column',
    return: 'Object',
    explain: 'int(rowIndex)번째 행의 String(column) 값을 Object로 반환합니다.',
    note: ''
    },
    // 56. setValue(int rowIndex, String column, Object value)
    {
    method: 'setValue',
    param: 'int rowIndex, String column, Object value',
    return: 'DataModel',
    explain: 'int(rowIndex)번째 행의 String(column)\n값에 Object(value)를 넣고 현재 DataModel을 반환합니다.',
    note: ''
    },
    // 57. removeRow(int rowIndex)
    {
    method: 'removeRow',
    param: 'int rowIndex',
    return: 'HashMap<String, Object>',
    explain: 'int(rowIndex)번째 행을 삭제하고 삭제된 행을 HashMap으로 반환합니다.',
    note: ''
    },
    // 58. removeColumn(String column)
    {
    method: 'removeColumn',
    param: 'String column',
    return: 'DataModel',
    explain: 'String(column)에 해당하는 컬럼과 해당 컬럼의 각 행의 값들을 삭제합니다.',
    note: ''
    },
    // 59. removeColumns(String[] columns)
    {
    method: 'removeColumns',
    param: 'String[] columns',
    return: 'DataModel',
    explain: 'String[](columns)에 해당하는 컬럼들과 해당 컬럼들의 각 행의 값들을 삭제합니다.',
    note: ''
    },
    // 60. removeColumns(List<String> columns)
    {
    method: 'removeColumns',
    param: 'List<String> columns',
    return: 'DataModel',
    explain: 'List<String>(columns)에 해당하는 컬럼들과 해당 컬럼들의 각 행의 값들을 삭제합니다.',
    note: ''
    },
    // 61. removeColumns(Set<String> columns)
    {
    method: 'removeColumns',
    param: 'Set<String> columns',
    return: 'DataModel',
    explain: 'Set<String>(columns)에 해당하는 컬럼들과 해당 컬럼들의 각 행의 값들을 삭제합니다.',
    note: ''
    },
    // 62. setValidColumns(String[] columns)
    {
    method: 'setValidColumns',
    param: 'String[] columns',
    return: 'DataModel',
    explain: 'String[](columns)에 해당하는 컬럼만 남기고\n나머지 컬럼과 해당 컬럼의 각 행의 값들을 삭제합니다.',
    note: ''
    },
    // 63. setValidColumns(List<String> columns)
    {
    method: 'setValidColumns',
    param: 'List<String> columns',
    return: 'DataModel',
    explain: 'List<String>(columns)에 해당하는 컬럼만\n남기고 나머지 컬럼과 해당 컬럼의 각 행의 값들을 삭제합니다.',
    note: ''
    },
    // 64. setValidColumns(Set<String> columns)
    {
    method: 'setValidColumns',
    param: 'Set<String> columns',
    return: 'DataModel',
    explain: 'Set<String>(columns)에 해당하는 컬럼만\n남기고 나머지 컬럼과 해당 컬럼의 각 행의 값들을 삭제합니다.',
    note: ''
    },
    // 65. isNotNullColumn(String column)
    {
    method: 'isNotNullColumn',
    param: 'String column',
    return: 'boolean',
    explain: 'String(column)에 null 값이 있는 행이 있는지 확인합니다.\nnull이 하나라도 있으면 false를 반환합니다. 모두 not null이면 true를 반환합니다.',
    note: ''
    },
    // 66. findFirstRowNullColumn(String column)
    {
    method: 'findFirstRowNullColumn',
    param: 'String column',
    return: 'HashMap<String, Object>',
    explain: 'String(column)에 null 값이 있는 첫 번째 행을 HashMap<String, Object>로 반환합니다.',
    note: ''
    },
    // 67. isNotDuplColumn(String column)
    {
    method: 'isNotDuplColumn',
    param: 'String column',
    return: 'boolean',
    explain: 'String(column)에 중복된 값이 있는지 확인합니다.\n중복되면 false, 중복되지 않으면 true를 반환합니다.',
    note: ''
    },
    // 68. findFirstRowDuplColumn(String column)
    {
    method: 'findFirstRowDuplColumn',
    param: 'String column',
    return: 'HashMap<String, Object>',
    explain: 'String(column)에 중복된 값(이전 행들과 비교하여)이 있는\n첫 번째 행을 HashMap<String, Object>로 반환합니다.',
    note: ''
    },
    // 69. isValidValue(String column, Predicate<Object> validator)
    {
    method: 'isValidValue',
    param: 'String column,\nPredicate<Object> validator',
    return: 'boolean',
    explain: 'String(column)의 모든 값이 Predicate<Object>(validator)의 유효성 검사를 통과하는지 확인합니다.\n모두 통과하면 true, 하나라도 실패하면 false를 반환합니다.',
    note: 'Null 값은 검사하지 않습니다.'
    },
    // 70. findFirstRowInvalidValue(String column, Predicate<Object> validator)
    {
    method: 'findFirstRowInvalidValue',
    param: 'String column,\nPredicate<Object> validator',
    return: 'HashMap<String, Object>',
    explain: 'String(column)의 값에 대해 Predicate<Object>(validator)를 검사하여 첫 번째로 유효하지 않은 행을 반환합니다.',
    note: 'Null 값은 검사하지 않습니다.'
    },
    // 71. searchRowIndexes(Condition... conditions)
    {
    method: 'searchRowIndexes',
    param: 'Condition... conditions',
    return: 'List<Integer>',
    explain: 'Condition[] conditions의 조건을 만족하는 행의 인덱스를 List로 반환합니다.\n(각 조건은 AND 조건이며, 단순 equals로 비교합니다.)',
    note: ''
    },
    // 72. searchRowIndexes(boolean bool, Condition... conditions)
    {
    method: 'searchRowIndexes',
    param: 'boolean bool,\nCondition... conditions',
    return: 'List<Integer>',
    explain: 'Condition[] conditions의 조건을 만족하는 행의 인덱스를 List로 반환합니다.\n(각 조건은 AND 조건이며, 단순 equals로 비교합니다.) boolean bool이 false이면 각 조건이 반전됩니다.',
    note: ''
    },
    // 73. searchRows(Condition... conditions)
    {
    method: 'searchRows',
    param: 'Condition... conditions',
    return: 'List<HashMap<String, Object>>',
    explain: 'Condition[] conditions의 조건을 만족하는 행들을 List로 반환합니다.\n(각 조건은 AND 조건이며, 단순 equals로 비교합니다.)',
    note: ''
    },
    // 74. searchRows(boolean bool, Condition... conditions)
    {
    method: 'searchRows',
    param: 'boolean bool,\nCondition... conditions',
    return: 'List<HashMap<String, Object>>',
    explain: 'Condition[] conditions의 조건을 만족하는 행들을 List로 반환합니다.\n(각 조건은 AND 조건이며, 단순 equals로 비교합니다.) boolean bool이 false이면 각 조건이 반전됩니다.',
    note: ''
    },
    // 75. searchRowsAsDataModel(Condition... conditions)
    {
    method: 'searchRowsAsDataModel',
    param: 'Condition... conditions',
    return: 'DataModel',
    explain: 'Condition[] conditions의 조건을 만족하는 행들을 포함하는 DataModel을 반환합니다.\n(각 조건은 AND 조건이며, 단순 equals로 비교합니다.)',
    note: '새로운 DataModel을 반환합니다.'
    },
    // 76. searchRowsAsDataModel(boolean bool, Condition... conditions)
    {
    method: 'searchRowsAsDataModel',
    param: 'boolean bool,\nCondition... conditions',
    return: 'DataModel',
    explain: 'Condition[] conditions의 조건을 만족하는 행들을 포함하는 DataModel을 반환합니다.\n(각 조건은 AND 조건이며, 단순 equals로 비교합니다.) boolean bool이 false이면 각 조건이 반전됩니다.',
    note: '새로운 DataModel을 반환합니다.'
    },
    // 77. searchAndModify(Condition... conditions)
    {
    method: 'searchAndModify',
    param: 'Condition... conditions',
    return: 'DataModel',
    explain: 'Condition[] conditions의 조건을 만족하는 행들만 남깁니다.\n수정된 현재 DataModel을 반환합니다.\n(각 조건은 AND 조건이며, 단순 equals로 비교합니다.)',
    note: '현재 DataModel이 수정됩니다.'
    },
    // 78. searchAndModify(boolean bool, Condition... conditions)
    {
    method: 'searchAndModify',
    param: 'boolean bool,\nCondition... conditions',
    return: 'DataModel',
    explain: 'Condition[] conditions의 조건을 만족하는 행들만 남깁니다.\n수정된 현재 DataModel을 반환합니다.\n(각 조건은 AND 조건이며, 단순 equals로 비교합니다.)\nboolean bool이 false이면 각 조건이 반전됩니다.',
    note: '현재 DataModel이 수정됩니다.'
    },
    // 79. filterRowIndexes(Predicate<HashMap<String, Object>> filter)
    {
    method: 'filterRowIndexes',
    param: 'Predicate<HashMap<String, Object>>\nfilter',
    return: 'List<Integer>',
    explain: 'Predicate<HashMap<String, Object>>\nfilter의 조건을 만족하는 행의 인덱스를 List로 반환합니다.',
    note: ''
    },
    // 80. filterRows(Predicate<HashMap<String, Object>> filter)
    {
    method: 'filterRows',
    param: 'Predicate<HashMap<String, Object>>\nfilter',
    return: 'List<HashMap<String, Object>>',
    explain: 'Predicate<HashMap<String, Object>>\nfilter의 조건을 만족하는 행들을 List로 반환합니다.',
    note: ''
    },
    // 81. filterRowsAsDataModel(Predicate<HashMap<String, Object>> filter)
    {
    method: 'filterRowsAsDataModel',
    param: 'Predicate<HashMap<String, Object>>\nfilter',
    return: 'DataModel',
    explain: 'Predicate<HashMap<String, Object>>\nfilter의 조건을 만족하는 행들을 포함하는 DataModel을 반환합니다.',
    note: ''
    },
    // 82. filterAndModify(Predicate<HashMap<String, Object>> filter)
    {
    method: 'filterAndModify',
    param: 'Predicate<HashMap<String, Object>>\nfilter',
    return: 'DataModel',
    explain: 'Predicate<HashMap<String, Object>>\nfilter의 조건을 만족하는 행들만 남깁니다. 수정된 현재 DataModel을 반환합니다.',
    note: ''
    },
    // 83. sortColumnAscending()
    {
    method: 'sortColumnAscending',
    param: '-',
    return: 'DataModel',
    explain: '컬럼들을 오름차순으로 정렬합니다.',
    note: '문자열 정렬입니다.'
    },
    // 84. sortColumnDescending()
    {
    method: 'sortColumnDescending',
    param: '-',
    return: 'DataModel',
    explain: '컬럼들을 내림차순으로 정렬합니다.',
    note: '문자열 정렬입니다.'
    },
    // 85. sortColumnReverse()
    {
    method: 'sortColumnReverse',
    param: '-',
    return: 'DataModel',
    explain: '현재 컬럼들의 순서를 반전시킵니다.',
    note: '문자열 정렬입니다.'
    },
    // 86. sortRowAscending(String column)
    {
    method: 'sortRowAscending',
    param: 'String column',
    return: 'DataModel',
    explain: 'String(column)의 값을 기준으로 오름차순 정렬합니다.',
    note: ''
    },
    // 87. sortRowAscending(String column, Boolean isIntegerOrder)
    {
    method: 'sortRowAscending',
    param: 'String column,\nBoolean isIntegerOrder',
    return: 'DataModel',
    explain: 'String(column)의 값을 기준으로 오름차순 정렬합니다.\nisIntegerOrder가 true이면 값을 숫자로 인식하여 정렬합니다.',
    note: '숫자로 인식할 수 없는 값이 있으면 에러가 발생합니다.'
    },
    // 88. sortRowDescending(String column)
    {
    method: 'sortRowDescending',
    param: 'String column',
    return: 'DataModel',
    explain: 'String(column)의 값을 기준으로 내림차순 정렬합니다.',
    note: ''
    },
    // 89. sortRowDescending(String column, Boolean isIntegerOrder)
    {
    method: 'sortRowDescending',
    param: 'String column,\nBoolean isIntegerOrder',
    return: 'DataModel',
    explain: 'String(column)의 값을 기준으로 내림차순 정렬합니다.\nisIntegerOrder가 true이면 값을 숫자로 인식하여 정렬합니다.',
    note: '숫자로 인식할 수 없는 값이 있으면 에러가 발생합니다.'
    },
    // 90. sortRowReverse()
    {
    method: 'sortRowReverse',
    param: '-',
    return: 'DataModel',
    explain: '현재 행들의 순서를 반전시킵니다.',
    note: ''
    },
    // 91. setFreezeDataModel()
    {
    method: 'setFreezeDataModel',
    param: '-',
    return: 'DataModel',
    explain: 'DataModel의 행과 컬럼 순서,\n내부 데이터가 변경되지 않도록 설정합니다.',
    note: 'DataConverter에 정의되지 않은 특수 객체는\nget을 통해 참조 주소를 가져가기 때문에 근본적으로 불변하지 않습니다.'
    },
    // 92. setFreezeValues()
    {
    method: 'setFreezeValues',
    param: '-',
    return: 'DataModel',
    explain: 'DataModel의 내부 데이터가 변경되지 않도록 설정합니다.',
    note: 'DataConverter에 정의되지 않은 특수 객체는\nget을 통해 참조 주소를 가져가기 때문에 근본적으로 불변하지 않습니다.'
    }
]

export const dataModelConverterGridDataKo = [
    {
    method: 'getConvertedJson',
    param: 'DataModel dataModel',
    return: 'JsonNode',
    explain: 'DataModel을 JsonNode로 변환하여 반환합니다.',
    note: 'jackson-databind의 ObjectMapper를 사용하여 변환합니다.\n변환 로직 커스터마이징에 사용됩니다.'
    },
    {
    method: 'getConvertedEntities',
    param: 'DataModel dataModel, Class<?> entityClass',
    return: 'List<Object>',
    explain: 'DataModel을 지정된 엔티티 클래스의 List<Object>로 변환하여 반환합니다.',
    note: 'jackson-databind의 ObjectMapper를 사용하여 변환합니다.\n변환 로직 커스터마이징에 사용됩니다.'
    },
    {
    method: 'getConvertValueToDataModelRowValue',
    param: 'Object value',
    return: 'Object',
    explain: 'Map, List 등에서 가져온 Object 값을 DataModel 행에 삽입하기 전에 필요한 형태로 변환합니다.',
    note: 'Map을 addRow할 때 값 변환 로직 커스터마이징에 사용됩니다.'
    },
    {
    method: 'getConvertJsonValueNodeToDataModelRowValue',
    param: 'JsonNode node',
    return: 'Object',
    explain: 'JsonNode에서 가져온 값을 DataModel 행에 삽입하기 전에 필요한 형태로 변환합니다.',
    note: 'JsonNode를 addRows할 때 값 변환 로직 커스터마이징에 사용됩니다.'
    },
    {
    method: 'getObjectMapperForConvertEntitiesToDataModel',
    param: '-',
    return: 'ObjectMapper',
    explain: '@Entity 객체를 DataModel로 변환할 때 사용할 ObjectMapper를 반환합니다.',
    note: '엔티티 to DataModel 변환 시 ObjectMapper 설정을 커스터마이징하는 데 사용됩니다.'
    },
    {
    method: 'isEntity',
    param: 'Class<?> entityClass',
    return: 'boolean',
    explain: '주어진 Class가 @Entity 어노테이션이 붙은 엔티티 클래스인지 확인합니다.',
    note: '엔티티 객체 변환 여부를 판단하는 데 사용됩니다.'
    }
]

export const conditionGridDataKo = [
    {
    method: 'constructor',
    param: 'String key, Object obj',
    return: '-',
    explain: 'Data Model에 값을 비교하기 위해 사용하는 객체.\n값은 비교할 값과 같은 형식으로 넣어줘야한다.(타입이 다르면 false)\n배열 등은 비교하지 못한다.(기본 eqauls() 메소드를 사용)',
    note: 'this.put(key, value);'
    },
]

//En
export const dataWrapperGridDataEn = [
    // 1. constructor (HashMap, HashMap)
    {
    method: 'constructor',
    param: 'strings : HashMap<String, String>,\ndataModels : HashMap<String, DataModel>',
    return: '-',
    explain: 'Creates strings : HashMap<String, String>\nand dataModels : HashMap<String, DataModel>.',
    note: ''
    },
    // 2. constructor (String key, Object value)
    {
    method: 'constructor',
    param: 'String key, Object value',
    return: '-',
    explain: 'Creates a DataWrapper by inserting Object values under String keys.',
    note: 'Throws an error if the Object(value) is neither a String nor a DataModel.',
    },
    // 3. getDatas
    {
    method: 'getDatas',
    param: '-',
    return: 'HashMap<String, Object>',
    explain: 'Returns a deep copy of all data stored in the DataWrapper.',
    note: ''
    },
    // 4. putString
    {
    method: 'putString',
    param: 'String key, String value',
    return: '-',
    explain: 'Inserts a String(value) under a String(key).',
    note: ''
    },
    // 5. getString
    {
    method: 'getString',
    param: 'String key',
    return: 'String',
    explain: 'Returns the String(value) associated with a String(key).',
    note: 'Returns null if the value of the given String(key) is not of type String.',
    },
    // 6. putDataModel
    {
    method: 'putDataModel',
    param: 'String key, DataModel value',
    return: '-',
    explain: 'Inserts a deep-copied DataModel(value) under a String(key).',
    note: ''
    },
    // 7. getDataModel
    {
    method: 'getDataModel',
    param: 'String key',
    return: 'DataModel',
    explain: 'Returns a deep-copied DataModel(value) associated with a String(key).',
    note: 'Returns null if the value of the given String(key) is not of type DataModel.',
    },
    // 8. put
    {
    method: 'put',
    param: 'String key, Object value',
    return: '-',
    explain: 'Inserts a deep-copied Object(value) under a String(key).',
    note: 'Throws an error if the Object(value) is neither a String nor a DataModel.',
    },
    // 9. get
    {
    method: 'get',
    param: 'String key',
    return: 'Object',
    explain: 'Returns a deep-copied Object(value) associated with a String(key).',
    note: ''
    },
    // 10. getKeys
    {
    method: 'getKeys',
    param: '-',
    return: 'Set<String>',
    explain: 'Returns all key values in the DataWrapper.',
    note: ''
    },
    // 11. clone
    {
    method: 'clone',
    param: '-',
    return: 'DataWrapper',
    explain: 'Returns a deep copy of the DataWrapper.',
    note: ''
    },
    // 12. clear
    {
    method: 'clear',
    param: '-',
    return: 'DataWrapper',
    explain: 'Clears and returns the DataWrapper.',
    note: ''
    },
    // 13. containsKey
    {
    method: 'containsKey',
    param: 'String key',
    return: 'boolean',
    explain: 'Returns true if the specified String(key) exists.',
    note: ''
    },
    // 14. toString (1)
    {
    method: 'toString',
    param: '-',
    return: 'String',
    explain: 'Prints each key–value pair as a string separated by \\n.\nFor DataModel, uses its toString() method.',
    note: ''
    },
    // 15. toString (2)
    {
    method: 'toString',
    param: 'String dataModelSeparator',
    return: 'String',
    explain: 'Prints each key–value pair as a string separated by \\n,\nusing DataModel.toString(). Passes dataModelSeparator to the DataModel.',
    note: ''
    }
]

export const dataModelGridDataEn = [
    // 1. constructor (기본 생성자)
    {
    method: 'constructor',
    param: '-',
    return: 'DataModel',
    explain: 'Creates a DataModel.',
    note: ''
    },
    // 2. constructor (String[] newColumns)
    {
    method: 'constructor',
    param: 'String[] newColumns',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting columns using String[].',
    note: 'Columns cannot be added once defined, but they can be deleted.'
    },
    // 3. constructor (Set<String> newColumns)
    {
    method: 'constructor',
    param: 'Set<String> newColumns',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting columns using Set<String>.',
    note: 'Using LinkedHashSet preserves the input order of the columns.'
    },
    // 4. constructor (Map<String, Object> newRow)
    {
    method: 'constructor',
    param: 'Map<String, Object> newRow',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting a row using Map<String, Object>.',
    note: 'Using LinkedHashMap preserves the input order of the columns.'
    },
    // 5. constructor (Tuple tuple)
    {
    method: 'constructor',
    param: 'Tuple tuple',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting a row using Tuple.',
    note: 'Use with entityManager.createQuery.getResultList.'
    },
    // 6. constructor (Object[] queryResult, String[] columnNames)
    {
    method: 'constructor',
    param: 'Object[] queryResult,\nString[] columnNames',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting a row using Object[] and String[].\nObject[] represents the row, and String[] represents the column.',
    note: 'Use with entityManager.createNativeQuery.getResult.'
    },
    // 7. constructor (HttpSession session)
    {
    method: 'constructor',
    param: 'HttpSession session',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting a row using HttpSession.',
    note: ''
    },
    // 8. constructor (ResultSet rs)
    {
    method: 'constructor',
    param: 'ResultSet rs',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting a row using ResultSet.',
    note: ''
    },
    // 9. constructor (JsonNode node)
    {
    method: 'constructor',
    param: 'JsonNode node',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting a row using JsonNode.',
    note: ''
    },
    // 10. constructor (Object(Entity) entity)
    {
    method: 'constructor',
    param: 'Object(Entity) entity',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting a row using Object(Entity).',
    note: 'Concerns about performance degradation using java.reflect.\nThe Object must be an @entity (uses convertEntityToDataModel, isEntity).'
    },
    // 11. constructor (List<T> newRows, T = String)
    {
    method: 'constructor',
    param: 'List<T> newRows (T = String)',
    return: 'DataModel',
    explain: 'T = String: Creates a DataModel after inserting columns using a list of strings.',
    note: ''
    },
    // 12. constructor (List<T> newRows, T = Map)
    {
    method: 'constructor',
    param: 'List<T> newRows (T = Map)',
    return: 'DataModel',
    explain: 'T = Map: Creates a DataModel after inserting rows using List<Map<String, Object>>.',
    note: ''
    },
    // 13. constructor (List<T> newRows, T = Tuple)
    {
    method: 'constructor',
    param: 'List<T> newRows (T = Tuple)',
    return: 'DataModel',
    explain: 'T = Tuple: Creates a DataModel after inserting rows using List<Tuple>.',
    note: ''
    },
    // 14. constructor (List<T> newRows, T = Object(Entity))
    {
    method: 'constructor',
    param: 'List<T> newRows\n(T = Object(Entity))',
    return: 'DataModel',
    explain: 'T = Object(Entity): Creates a DataModel\nafter inserting rows using List<Object>.',
    note: 'Concerns about performance degradation for List<Object> using java.reflect.\nThe Object must be an @entity (uses convertEntityToDataModel, isEntity).'
    },
    // 15. constructor (List<Object[]> queryResults, String[] columnNames)
    {
    method: 'constructor',
    param: 'List<Object[]> queryResults,\nString[] columnNames',
    return: 'DataModel',
    explain: 'Creates a DataModel after inserting rows using List<Object[]> and String[].\nList<Object[]> represents the rows, and String[] represents the column.',
    note: 'Use with entityManager.createNativeQuery.getResultList.'
    },
    // 16. toString()
    {
    method: 'toString',
    param: '-',
    return: 'String',
    explain: 'Prints as a String, using \\t as the column separator and \\n as the row separator.',
    note: 'Convenient to use directly in Excel after checking the debug console.'
    },
    // 17. toString(String separator)
    {
    method: 'toString',
    param: 'String separator',
    return: 'String',
    explain: 'Prints as a String, using the specified String\nas the column separator and \\n as the row separator.',
    note: ''
    },
    // 18. isDefine()
    {
    method: 'isDefine',
    param: '-',
    return: 'boolean',
    explain: 'Returns the current definition status of the DataModel.',
    note: ''
    },
    // 19. clearDataModel()
    {
    method: 'clearDataModel',
    param: '-',
    return: 'DataModel',
    explain: 'Clears the current DataModel and returns the current DataModel.',
    note: ''
    },
    // 20. cloneDataModel()
    {
    method: 'cloneDataModel',
    param: '-',
    return: 'DataModel',
    explain: 'Clones the current DataModel and returns a new DataModel.',
    note: 'Deep copy.'
    },
    // 21. insertDataModel(DataModel dataModel)
    {
    method: 'insertDataModel',
    param: 'DataModel dataModel',
    return: 'DataModel',
    explain: 'Performs a union all operation on the current\nDataModel with the parameter DataModel and returns the current DataModel.',
    note: ''
    },
    // 22. getConvertedJson()
    {
    method: 'getConvertedJson',
    param: '-',
    return: 'JsonNode',
    explain: "Converts the current DataModel to a JsonNode\nusing jackson.databind's ObjectMapper and returns it.",
    note: "Uses DataConverterDefault's getConvertedJson. Customizable."
    },
    // 23. getConvertedEntities(Class<?> entityClass)
    {
    method: 'getConvertedEntities',
    param: 'Class<?> entityClass',
    return: 'List<Object>',
    explain: "Converts the current DataModel to a List of the specified entityClass\nusing jackson.databind's ObjectMapper and returns it.",
    note: "Uses DataConverterDefault's getConvertedEntities. Customizable."
    },
    // 24. setColumns(String[] columns)
    {
    method: 'setColumns',
    param: 'String[] columns',
    return: 'DataModel',
    explain: 'Sets columns using String[]. Returns the current DataModel.',
    note: 'An error occurs if columns have already been created in the DataModel.'
    },
    // 25. setColumns(Set<String> columns)
    {
    method: 'setColumns',
    param: 'Set<String> columns',
    return: 'DataModel',
    explain: 'Sets columns using Set<String>. Returns the current DataModel.',
    note: 'An error occurs if columns have already been created in the DataModel.'
    },
    // 26. setColumns(List<String> columns)
    {
    method: 'setColumns',
    param: 'List<String> columns',
    return: 'DataModel',
    explain: 'Sets columns using List<String>. Returns the current DataModel.',
    note: 'An error occurs if columns have already been created in the DataModel.'
    },
    // 27. setColumnSameValue(String column, Object value)
    {
    method: 'setColumnSameValue',
    param: 'String column, Object value',
    return: 'DataModel',
    explain: 'Sets the same Object(Value) for the specified String(column). Returns the current DataModel.',
    note: ''
    },
    // 28. setColumnSameFormat(String column, Function<Object, Object> formatter)
    {
    method: 'setColumnSameFormat',
    param: 'String column,\nFunction<Object, Object> formatter',
    return: 'DataModel',
    explain: 'Sets the same format using the Function<Object, Object> for the specified String(column).\nReturns the current DataModel.',
    note: ''
    },
    // 29. addRow() (파라미터 없음)
    {
    method: 'addRow',
    param: '-',
    return: 'DataModel',
    explain: 'Appends a row to the end.',
    note: 'An error occurs if no columns are defined.'
    },
    // 30. addRow(int rowIndex)
    {
    method: 'addRow',
    param: 'int rowIndex',
    return: 'DataModel',
    explain: 'Appends a row to the specified index.',
    note: 'An error occurs if no columns are defined. An error occurs if the index is out of bounds.'
    },
    // 31. addRow(Map<String, Object> newRow)
    {
    method: 'addRow',
    param: 'Map<String, Object> newRow',
    return: 'DataModel',
    explain: 'Appends a row using Map<String, Object>.',
    note: "Columns that do not exist are skipped.\nUses DataConverterDefault's getConvertValueToDataModelRowValue. Customizable."
    },
    // 32. addRow(int rowIndex, Map<String, Object> newRow)
    {
    method: 'addRow',
    param: 'int rowIndex,\nMap<String, Object> newRow',
    return: 'DataModel',
    explain: 'Appends a row to the specified index using Map<String, Object>.',
    note: 'An error occurs if the index is out of bounds.'
    },
    // 33. addRow(Tuple tuple)
    {
    method: 'addRow',
    param: 'Tuple tuple',
    return: 'DataModel',
    explain: 'Appends a row using Tuple.',
    note: 'Columns that do not exist are skipped.'
    },
    // 34. addRow(int rowIndex, Tuple tuple)
    {
    method: 'addRow',
    param: 'int rowIndex, Tuple tuple',
    return: 'DataModel',
    explain: 'Appends a row to the specified index using Tuple.',
    note: 'Columns that do not exist are skipped. An error occurs if the index is out of bounds.'
    },
    // 35. addRow(Object[] queryResult, String[] columnNames)
    {
    method: 'addRow',
    param: 'Object[] queryResult,\nString[] columnNames',
    return: 'DataModel',
    explain: 'Appends a row using Object[] queryResult and String[] columnNames.',
    note: 'Columns that do not exist are skipped.'
    },
    // 36. addRow(int rowIndex, Object[] queryResult, String[] columnNames)
    {
    method: 'addRow',
    param: 'int rowIndex,\nObject[] queryResult,\nString[] columnNames',
    return: 'DataModel',
    explain: 'Appends a row to the specified index using Object[] queryResult and String[] columnNames.',
    note: 'Columns that do not exist are skipped. An error occurs if the index is out of bounds.'
    },
    // 37. addRow(HttpSession session)
    {
    method: 'addRow',
    param: 'HttpSession session',
    return: 'DataModel',
    explain: 'Appends a row using HttpSession.',
    note: 'Columns that do not exist are skipped.'
    },
    // 38. addRow(int rowIndex, HttpSession session)
    {
    method: 'addRow',
    param: 'int rowIndex,\nHttpSession session',
    return: 'DataModel',
    explain: 'Appends a row to the specified index using HttpSession.',
    note: 'Columns that do not exist are skipped. An error occurs if the index is out of bounds.'
    },
    // 39. addRow(Object entity)
    {
    method: 'addRow',
    param: 'Object entity',
    return: 'DataModel',
    explain: "Appends a row to the DataModel using Object(Entity) via jackson.databind's ObjectMapper.",
    note: "Columns that do not exist are skipped.\nUses DataConverterDefault's getObjectMapperForConvertEntitiesToDataModel and isEntity. Customizable."
    },
    // 40. addRow(int rowIndex, Object entity)
    {
    method: 'addRow',
    param: 'int rowIndex,\nObject entity',
    return: 'DataModel',
    explain: "Appends a row to the specified index using Object(Entity) via jackson.databind's ObjectMapper.",
    note: 'Columns that do not exist are skipped. An error occurs if the index is out of bounds.'
    },
    // 41. addRows(DataModel dataModel)
    {
    method: 'addRows',
    param: 'DataModel dataModel',
    return: 'DataModel',
    explain: 'Appends rows using another DataModel (union all).',
    note: 'Columns that do not exist are skipped.'
    },
    // 42. addRows(List<T> newRows) - T = Map / T = Tuple / T = Object(Entity)
    {
    method: 'addRows',
    param: 'List<T> newRows (T = Map/Tuple/Object(Entity))',
    return: 'DataModel',
    explain: 'Appends rows using: T = Map: List<Map<String, Object>>,\nT = Tuple: List<Tuple>, T = Object(Entity): List<Object>.',
    note: 'Columns that do not exist are skipped.\nConcerns about performance degradation for List<Object> using java.reflect.\nThe Object must be an @entity.\nUses DataConverterDefault\'s getObjectMapperForConvertEntitiesToDataModel and isEntity.\nCustomizable.'
    },
    // 43. addRows(ResultSet rs)
    {
    method: 'addRows',
    param: 'ResultSet rs',
    return: 'DataModel',
    explain: 'Appends rows using ResultSet.',
    note: 'Columns that do not exist are skipped.'
    },
    // 44. addRows(JsonNode node)
    {
    method: 'addRows',
    param: 'JsonNode node',
    return: 'DataModel',
    explain: "Appends a row to the DataModel using JsonNode via jackson.databind's ObjectMapper.",
    note: "Columns that do not exist are skipped.\nUses DataConverterDefault's getConvertJsonValueNodeToDataModelRowValue. Customizable."
    },
    // 45. addRows(List<Object[]> queryResults, String[] columnNames)
    {
    method: 'addRows',
    param: 'List<Object[]> queryResults,\nString[] columnNames',
    return: 'DataModel',
    explain: 'Appends rows using List<Object[]> and String[].\nList<Object[]> represents the rows, and String[] represents the column.',
    note: 'Columns that do not exist are skipped.\nList<Object[]> represents rows, and String[] represents columns.'
    },
    // 46. getColumnCount()
    {
    method: 'getColumnCount',
    param: '-',
    return: 'int',
    explain: 'Returns the number of columns.',
    note: ''
    },
    // 47. getRowCount()
    {
    method: 'getRowCount',
    param: '-',
    return: 'int',
    explain: 'Returns the number of rows.',
    note: ''
    },
    // 48. getColumns()
    {
    method: 'getColumns',
    param: '-',
    return: 'List<String>',
    explain: 'Returns the column list.',
    note: ''
    },
    // 49. getColumnsWithSet()
    {
    method: 'getColumnsWithSet',
    param: '-',
    return: 'Set<String>',
    explain: 'Returns the column list as a Set.',
    note: 'If you want to maintain column order, receive it as a LinkedHashSet.'
    },
    // 50. getColumnValues(String column)
    {
    method: 'getColumnValues',
    param: 'String column',
    return: 'List<Object>',
    explain: 'Returns the values stored in String(column) from all rows as a List<Object>.',
    note: ''
    },
    // 51. hasColumn(String column)
    {
    method: 'hasColumn',
    param: 'String column',
    return: 'boolean',
    explain: 'Returns whether String(column) exists in the columns.',
    note: ''
    },
    // 52. getRow(int rowIndex)
    {
    method: 'getRow',
    param: 'int rowIndex',
    return: 'HashMap<String, Object>',
    explain: 'Returns a single row at int(rowIndex) as a HashMap<String, Object>.',
    note: 'The first row index is 0.'
    },
    // 53. getRowAsDataModel(int rowIndex)
    {
    method: 'getRowAsDataModel',
    param: 'int rowIndex',
    return: 'DataModel',
    explain: 'Returns a single row at int(rowIndex) as a DataModel.',
    note: 'The first row index is 0.'
    },
    // 54. getRows()
    {
    method: 'getRows',
    param: '-',
    return: 'List<HashMap<String, Object>>',
    explain: 'Returns all rows as a List<HashMap<String, Object>>.',
    note: ''
    },
    // 55. getValue(int rowIndex, String column)
    {
    method: 'getValue',
    param: 'int rowIndex, String column',
    return: 'Object',
    explain: 'Returns the value of String(column) in the int(rowIndex)-th row as an Object.',
    note: ''
    },
    // 56. setValue(int rowIndex, String column, Object value)
    {
    method: 'setValue',
    param: 'int rowIndex,\nString column,\nObject value',
    return: 'DataModel',
    explain: 'Puts Object(value) into the value of String(column) in the int(rowIndex)-th row.\nReturns the current DataModel.',
    note: ''
    },
    // 57. removeRow(int rowIndex)
    {
    method: 'removeRow',
    param: 'int rowIndex',
    return: 'HashMap<String, Object>',
    explain: 'Deletes the int(rowIndex)-th row and returns the deleted row as a HashMap.',
    note: ''
    },
    // 58. removeColumn(String column)
    {
    method: 'removeColumn',
    param: 'String column',
    return: 'DataModel',
    explain: 'Deletes the column corresponding to String(column) and its values in each row.',
    note: ''
    },
    // 59. removeColumns(String[] columns)
    {
    method: 'removeColumns',
    param: 'String[] columns',
    return: 'DataModel',
    explain: 'Deletes the columns corresponding to String[](columns) and their values in each row.',
    note: ''
    },
    // 60. removeColumns(List<String> columns)
    {
    method: 'removeColumns',
    param: 'List<String> columns',
    return: 'DataModel',
    explain: 'Deletes the columns corresponding to List<String>(columns) and their values in each row.',
    note: ''
    },
    // 61. removeColumns(Set<String> columns)
    {
    method: 'removeColumns',
    param: 'Set<String> columns',
    return: 'DataModel',
    explain: 'Deletes the columns corresponding to Set<String>(columns) and their values in each row.',
    note: ''
    },
    // 62. setValidColumns(String[] columns)
    {
    method: 'setValidColumns',
    param: 'String[] columns',
    return: 'DataModel',
    explain: 'Keeps only the columns corresponding to String[](columns)\nand deletes the rest of the columns and their values in each row.',
    note: ''
    },
    // 63. setValidColumns(List<String> columns)
    {
    method: 'setValidColumns',
    param: 'List<String> columns',
    return: 'DataModel',
    explain: 'Keeps only the columns corresponding to List<String>(columns)\nand deletes the rest of the columns and their values in each row.',
    note: ''
    },
    // 64. setValidColumns(Set<String> columns)
    {
    method: 'setValidColumns',
    param: 'Set<String> columns',
    return: 'DataModel',
    explain: 'Keeps only the columns corresponding to Set<String>(columns)\nand deletes the rest of the columns and their values in each row.',
    note: ''
    },
    // 65. isNotNullColumn(String column)
    {
    method: 'isNotNullColumn',
    param: 'String column',
    return: 'boolean',
    explain: 'Checks if there is any row with a null value in String(column).\nReturns false if there is at least one null.\nReturns true if all are not null.',
    note: ''
    },
    // 66. findFirstRowNullColumn(String column)
    {
    method: 'findFirstRowNullColumn',
    param: 'String column',
    return: 'HashMap<String, Object>',
    explain: 'Returns the first row with a null value in String(column) as a HashMap<String, Object>.',
    note: ''
    },
    // 67. isNotDuplColumn(String column)
    {
    method: 'isNotDuplColumn',
    param: 'String column',
    return: 'boolean',
    explain: 'Checks if there are any duplicate values in String(column).\nReturns false if duplicated, and true if not duplicated.',
    note: ''
    },
    // 68. findFirstRowDuplColumn(String column)
    {
    method: 'findFirstRowDuplColumn',
    param: 'String column',
    return: 'HashMap<String, Object>',
    explain: 'Returns the first row with a duplicate value in String(column)\n(compared to preceding rows) as a HashMap<String, Object>.',
    note: ''
    },
    // 69. isValidValue(String column, Predicate<Object> validator)
    {
    method: 'isValidValue',
    param: 'String column,\nPredicate<Object> validator',
    return: 'boolean',
    explain: 'Checks if all values in String(column) pass the validation of Predicate<Object>(validator).\nReturns true if all pass, false if at least one fails.',
    note: 'Null values are not checked.'
    },
    // 70. findFirstRowInvalidValue(String column, Predicate<Object> validator)
    {
    method: 'findFirstRowInvalidValue',
    param: 'String column,\nPredicate<Object> validator',
    return: 'HashMap<String, Object>',
    explain: 'Checks the Predicate<Object>(validator) for values in String(column)\nand returns the first invalid row.',
    note: 'Null values are not checked.'
    },
    // 71. searchRowIndexes(Condition... conditions)
    {
    method: 'searchRowIndexes',
    param: 'Condition... conditions',
    return: 'List<Integer>',
    explain: 'Returns the indexes of the rows that satisfy\nthe conditions in Condition[] conditions as a List.\n(Each condition is an AND condition, compared by simple equals.)',
    note: ''
    },
    // 72. searchRowIndexes(boolean bool, Condition... conditions)
    {
    method: 'searchRowIndexes',
    param: 'boolean bool, Condition... conditions',
    return: 'List<Integer>',
    explain: 'Returns the indexes of the rows that satisfy\nthe conditions in Condition[] conditions as a List.\n(Each condition is an AND condition, compared by simple equals.)\nIf boolean bool is false, each condition is inverted.',
    note: ''
    },
    // 73. searchRows(Condition... conditions)
    {
    method: 'searchRows',
    param: 'Condition... conditions',
    return: 'List<HashMap<String, Object>>',
    explain: 'Returns the rows that satisfy the conditions in Condition[] conditions as a List.\n(Each condition is an AND condition, compared by simple equals.)',
    note: ''
    },
    // 74. searchRows(boolean bool, Condition... conditions)
    {
    method: 'searchRows',
    param: 'boolean bool,\nCondition... conditions',
    return: 'List<HashMap<String, Object>>',
    explain: 'Returns the rows that satisfy the conditions in Condition[] conditions as a List. \n(Each condition is an AND condition, compared by simple equals.)\nIf boolean bool is false, each condition is inverted.',
    note: ''
    },
    // 75. searchRowsAsDataModel(Condition... conditions)
    {
    method: 'searchRowsAsDataModel',
    param: 'Condition... conditions',
    return: 'DataModel',
    explain: 'Returns a DataModel containing the rows that satisfy the conditions in Condition[] conditions.\n(Each condition is an AND condition, compared by simple equals.)',
    note: 'Returns a new DataModel.'
    },
    // 76. searchRowsAsDataModel(boolean bool, Condition... conditions)
    {
    method: 'searchRowsAsDataModel',
    param: 'boolean bool,\nCondition... conditions',
    return: 'DataModel',
    explain: 'Returns a DataModel containing the rows that satisfy the conditions in Condition[] conditions.\n(Each condition is an AND condition, compared by simple equals.)\nIf boolean bool is false, each condition is inverted.',
    note: 'Returns a new DataModel.'
    },
    // 77. searchAndModify(Condition... conditions)
    {
    method: 'searchAndModify',
    param: 'Condition... conditions',
    return: 'DataModel',
    explain: 'Keeps only the rows that satisfy the conditions in Condition[] conditions. Returns the modified current DataModel.\n(Each condition is an AND condition, compared by simple equals.)',
    note: 'The current DataModel is modified.'
    },
    // 78. searchAndModify(boolean bool, Condition... conditions)
    {
    method: 'searchAndModify',
    param: 'boolean bool,\nCondition... conditions',
    return: 'DataModel',
    explain: 'Keeps only the rows that satisfy the conditions in Condition[] conditions.\nReturns the modified current DataModel.\n(Each condition is an AND condition, compared by simple equals.)\nIf boolean bool is false, each condition is inverted.',
    note: 'The current DataModel is modified.'
    },
    // 79. filterRowIndexes(Predicate<HashMap<String, Object>> filter)
    {
    method: 'filterRowIndexes',
    param: 'Predicate<HashMap<String, Object>> filter',
    return: 'List<Integer>',
    explain: 'Returns the indexes of the rows that satisfy the Predicate<HashMap<String, Object>> filter as a List.',
    note: ''
    },
    // 80. filterRows(Predicate<HashMap<String, Object>> filter)
    {
    method: 'filterRows',
    param: 'Predicate<HashMap<String, Object>> filter',
    return: 'List<HashMap<String, Object>>',
    explain: 'Returns the rows that satisfy the Predicate<HashMap<String, Object>> filter as a List.',
    note: ''
    },
    // 81. filterRowsAsDataModel(Predicate<HashMap<String, Object>> filter)
    {
    method: 'filterRowsAsDataModel',
    param: 'Predicate<HashMap<String, Object>> filter',
    return: 'DataModel',
    explain: 'Returns a DataModel containing the rows that satisfy the Predicate<HashMap<String, Object>> filter.',
    note: ''
    },
    // 82. filterAndModify(Predicate<HashMap<String, Object>> filter)
    {
    method: 'filterAndModify',
    param: 'Predicate<HashMap<String, Object>> filter',
    return: 'DataModel',
    explain: 'Keeps only the rows that satisfy the Predicate<HashMap<String, Object>> filter.\nReturns the modified current DataModel.',
    note: ''
    },
    // 83. sortColumnAscending()
    {
    method: 'sortColumnAscending',
    param: '-',
    return: 'DataModel',
    explain: 'Sorts the columns in ascending order.',
    note: 'String sort.'
    },
    // 84. sortColumnDescending()
    {
    method: 'sortColumnDescending',
    param: '-',
    return: 'DataModel',
    explain: 'Sorts the columns in descending order.',
    note: 'String sort.'
    },
    // 85. sortColumnReverse()
    {
    method: 'sortColumnReverse',
    param: '-',
    return: 'DataModel',
    explain: 'Reverses the current order of the columns.',
    note: 'String sort.'
    },
    // 86. sortRowAscending(String column)
    {
    method: 'sortRowAscending',
    param: 'String column',
    return: 'DataModel',
    explain: 'Sorts in ascending order based on the value of String(column).',
    note: ''
    },
    // 87. sortRowAscending(String column, Boolean isIntegerOrder)
    {
    method: 'sortRowAscending',
    param: 'String column,\nBoolean isIntegerOrder',
    return: 'DataModel',
    explain: 'Sorts in ascending order based on the value of String(column).\nIf isIntegerOrder is true, it sorts by recognizing the values as numbers.',
    note: 'An error occurs if there is a value that cannot be recognized as a number.'
    },
    // 88. sortRowDescending(String column)
    {
    method: 'sortRowDescending',
    param: 'String column',
    return: 'DataModel',
    explain: 'Sorts in descending order based on the value of String(column).',
    note: ''
    },
    // 89. sortRowDescending(String column, Boolean isIntegerOrder)
    {
    method: 'sortRowDescending',
    param: 'String column,\nBoolean isIntegerOrder',
    return: 'DataModel',
    explain: 'Sorts in descending order based on the value of String(column).\nIf isIntegerOrder is true, it sorts by recognizing the values as numbers.',
    note: 'An error occurs if there is a value that cannot be recognized as a number.'
    },
    // 90. sortRowReverse()
    {
    method: 'sortRowReverse',
    param: '-',
    return: 'DataModel',
    explain: 'Reverses the current order of the rows.',
    note: ''
    },
    // 91. setFreezeDataModel()
    {
    method: 'setFreezeDataModel',
    param: '-',
    return: 'DataModel',
    explain: 'Sets the DataModel so that the order of rows and columns and the internal data cannot be changed.',
    note: 'Special objects not defined in DataConverter are not fundamentally immutable,\nas retrieving them via get returns their reference address.'
    },
    // 92. setFreezeValues()
    {
    method: 'setFreezeValues',
    param: '-',
    return: 'DataModel',
    explain: 'Sets the DataModel so that the internal data cannot be changed.',
    note: 'Special objects not defined in DataConverter are not fundamentally immutable,\nas retrieving them via get returns their reference address.'
    }
]

export const dataModelConverterGridDataEn = [
    {
    method: 'isEntity',
    param: 'Object obj',
    return: 'boolean',
    explain: 'Checks if the Object received as a parameter has the Entity Annotation.',
    note: 'javax.persistence.Entity dependency'
    },
    {
    method: 'getConvertJsonValueNodeToDataModelRowValue',
    param: 'JsonNode valueNode',
    return: 'String',
    explain: 'This method converts the JsonNode delivered from the\nclient into a String before insertion into the DataModel.\nBy default, it converts the ISO date-time format to the\ndate-time format retrieved from getDateFormat().',
    note: ''
    },
    {
    method: 'getConvertedJson',
    param: 'DataModel dm',
    return: 'JsonNode',
    explain: 'Converts the DataModel to a JsonNode.\nUsed in DataModel\'s getConvertedJson() method.\nThis is used for serialization before delivering Json data to the client.\nThe ObjectMapper is inserted via getObjectMapperForConvertDataModelToJson().\nConverting is done using ObjectMapper.\nBy default, the DataModel rows are converted to a JsonNode and delivered.',
    note: 'com.fasterxml.jackson.databind dependency'
    },
    {
    method: 'serialize',
    param: 'DataModel dataModel, JsonGenerator gen, SerializerProvider serializers',
    return: '-',
    explain: 'Used to serialize the DataModel into\nJSON format (Jackson\'s custom serializer).',
    note: ''
    },
    {
    method: 'getObjectMapperForConvertDataModelToJson',
    param: '-',
    return: 'ObjectMapper',
    explain: 'Returns the ObjectMapper to be used in getConvertedJson().\nBy default, it includes the functionality to convert Java LocalDateTime to the date-time format\nretrieved from getDateFormat() via javaTimeModule and LocalDateTimeDeserializer.',
    note: 'com.fasterxml.jackson.databind, com.fasterxml.jackson.datatype.jsr310,\ncom.fasterxml.jackson.datatype.jsr310.deser dependency'
    },
    {
    method: 'getConvertedEntities',
    param: 'Class<T> entityClass, DataModel dm',
    return: 'List<T>',
    explain: 'Converts the DataModel to an Entity Class List.\nUsed in DataModel\'s getConvertedEntities() method.\nThe ObjectMapper is inserted via getObjectMapperForConvertDataModelToEntities().\nConverting is done using ObjectMapper.',
    note: 'com.fasterxml.jackson.databind dependency'
    },
    {
    method: 'getObjectMapperForConvertDataModelToEntities',
    param: '-',
    return: 'ObjectMapper',
    explain: 'Returns the ObjectMapper to be used in getConvertedEntities().\nBy default, it includes the functionality to convert Java LocalDateTime to the date-time format\nretrieved from getDateFormat() via javaTimeModule and LocalDateTimeDeserializer.',
    note: 'com.fasterxml.jackson.databind, com.fasterxml.jackson.datatype.jsr310,\ncom.fasterxml.jackson.datatype.jsr310.deser dependency'
    },
    {
    method: 'getObjectMapperForConvertEntitiesToDataModel',
    param: '-',
    return: 'ObjectMapper',
    explain: 'Returns the ObjectMapper to be used in DataModel\'s getConvertedEntitiesToMaps() method.\nBy default, it includes the functionality to convert Java LocalDateTime to the date-time format\nretrieved from getDateFormat() via javaTimeModule and LocalDateTimeDeserializer.',
    note: 'com.fasterxml.jackson.databind, com.fasterxml.jackson.datatype.jsr310,\ncom.fasterxml.jackson.datatype.jsr310.deser dependency'
    },
    {
    method: 'getConvertValueToDataModelRowValue',
    param: 'Object value, ObjectMapper',
    return: 'Object',
    explain: 'This method is used in DataModel\'s addRow and setValue to convert values into a valid form (String or Object) before insertion into the DataModel row.\nBy default, all primitive variables are inserted as String values.\nnull is inserted as null.\nLocalDateTime is converted to the date-time format retrieved from getDateFormat() and inserted.',
    note: 'An error occurs if an undefined type value is delivered.\nCustomization is needed if you want to use other types.'
    },
    {
    method: 'getTimeZoneId',
    param: '-',
    return: 'String',
    explain: 'Returns the location standard when converting the ISO-8601 date-time format string delivered from the client to the server.\nUsed in getConvertJsonValueNodeToDataModelRowValue().\nBy default, it returns null, which defaults to US Eastern Time.',
    note: 'To use Korea as the standard, return \"Asia/Seoul\".'
    },
    {
    method: 'getDateFormat',
    param: '-',
    return: 'String',
    explain: 'Returns the date-time format for java LocalDateTime.\nDefaults to \"yyyy-MM-dd HH:mm:ss\".\nUsed in various conversion methods.\nAll are default methods and can be customized.',
    note: 'Customization example:\npublic class CustomDataConverter extends DataConverterDefault...'
    }
]

export const conditionGridDataEn = [
    {
    method: 'constructor',
    param: 'String key, Object obj',
    return: '-',
    explain: 'An object used to compare values ​​in the Data Model.\nThe value must be entered in the same format as the value to be compared. (If the type is different, it returns false.)\nArrays and the like cannot be compared. (The default equals() method is used.)',
    note: 'this.put(key, value);'
    },
]