window.onload = function () {
    var testName = getParameterByName("name");
    var nameBox = document.getElementById("nameBox");
    nameBox.innerText = testName;
    var btn = document.getElementById("btn");
    btn.onclick = function () {
        location.replace("/kkon/test_friend.html?name=" + testName);
    }
}