Kakao.init('0e4fcd913762bd2a1016dc2dc2798451');

function sendLink() {
    var nameBox = document.getElementsByName("name")[0];
    var testName = nameBox.value;

    if(testName == "") {
        document.getElementsByClassName("alert_box")[0].innerHTML = "이름을 입력해 주세요.";
        return false;
    }

    Kakao.Link.sendCustom({
        templateId: 30629,
        templateArgs: {
            'name': testName
        }

    });
}

function key_up() {
    document.getElementsByClassName("alert_box")[0].innerHTML = "";
}
