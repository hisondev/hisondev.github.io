export const sheildMethodAndPropGridDataKo = [
    {
    prop: "(method) hisonShield()",
    explain: "웹 클라이언트에 대한 보안을 강화하는 조치를 합니다. hison 객체에 대해 Object.freeze()를 처리합니다.\nlocalhost를 제외한 모든 URL 또는 특정 URL에 대해 개발자 모드 접근을 봉쇄합니다.\nlocalhost를 제외한 모든 URL 또는 특정 URL에 대해 뒤로가기를 봉쇄합니다."
    },
    {
    prop: "hison.shield.shieldURL",
    explain: "개발자 모드 접근, 뒤로가기를 봉쇄를 적용할 URL을 설정합니다. 설정값이 없으면 localhost를 제외한 모든 URL에 적용합니다. 기본값은 ''"
    },
    {
    prop: "hison.shield.exposeIpList",
    explain: "개발자 모드 접근, 뒤로가기를 허용할 Ip 목록입니다. 기본값은 ['0:0:0:0:0:0:0:1']"
    },
    {
    prop: "hison.shield.isFreeze",
    explain: "hison을 동결할지 여부입니다. false일 경우 hisonShield() 호출 시 hison 객체를 동결 처리 하지 않습니다. 기본값은 true"
    },
    {
    prop: "hison.shield.isSheld",
    explain: "개발자 모드 접근, 뒤로가기를 봉쇄할지 여부입니다. false일 경우 hisonShield() 호출 시 봉쇄 처리 하지 않습니다. 기본값은 true"
    },
    {
    prop: "hison.shield.isPossibleGoBack",
    explain: "뒤로가기 가능 여부입니다. true일 경우 hisonShield() 호출 시에도 뒤로가기가 가능 합니다. 기본값은 false"
    },
    {
    prop: "hison.shield.isPossibleOpenDevTool",
    explain: "개발자 모드 접근 가능 여부입니다. true일 경우 hisonShield() 호출 시에도 개발자 모드 접근이 가능 합니다. 기본값은 false"
    },
]

export const sheildMethodAndPropGridDataEn = [
    {
    prop: "(method) hisonShield()",
    explain: "Enforces security measures for the web client. Processes Object.freeze() on the hison object.\nBlocks developer tool access for all URLs except localhost or specific URLs.\nBlocks the browser back action for all URLs except localhost or specific URLs."
    },
    {
    prop: "hison.shield.shieldURL",
    explain: "Sets the URL to which developer mode access and back action blocking will be applied. If no value is set, it applies to all URLs except localhost. Default value is ''"
    },
    {
    prop: "hison.shield.exposeIpList",
    explain: "List of IPs allowed to access developer mode and use the back action. Default value is ['0:0:0:0:0:0:0:1']"
    },
    {
    prop: "hison.shield.isFreeze",
    explain: "Whether to freeze the hison object. If false, the hison object will not be frozen when hisonShield() is called. Default value is true"
    },
    {
    prop: "hison.shield.isSheld",
    explain: "Whether to block developer mode access and the back action. If false, no blocking will be processed when hisonShield() is called. Default value is true"
    },
    {
    prop: "hison.shield.isPossibleGoBack",
    explain: "Whether the browser back action is possible. If true, the back action is possible even when hisonShield() is called. Default value is false"
    },
    {
    prop: "hison.shield.isPossibleOpenDevTool",
    explain: "Whether developer mode access is possible. If true, developer mode access is possible even when hisonShield() is called. Default value is false"
    },
]