var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;

var charAB;
var charCD;
var charEF;
var charGH;
var resABCDEFGH;

var pageNum = 1;
var userCheck = [];
var param = "";
var testName = "나";

//Test Contents
{
    var arrQuestion = [
        //AB
        "모임을 갈 때 새로운 친구들을 만나는 것을 즐긴다", //2
        "누군가와 처음 만나면 먼저 다가간다.", //3
        "친구들과 함께 있기보다 혼자 있는 걸 즐기는 편이다.", //5
        "많은 친구들과 이야기하길 즐기는 편이다.", //6
        "팀을 이뤄 함께하는 과제를 힘들어한다.", //8
        //CD
        "친구에게 상상한 것들에 대해 얘기하는 것을 즐겁다.", //11
        "새로운 방법 보다는 사용하던 방법을 선호한다.", //14
        "이야기를 할 때 사실보다는 재미를 더 중요하게 생각하는 편이다.", //15
        "미래를 위해 현재의 고통을 잘 참는 편이다.", //16
        "성실보다는 기발하다는 칭찬이 알맞는다.", //19
        //EF
        "상대방을 대할 때 공정한 것보다 상대방의 마음에 상처를 주지 않는 것을 더 중요하게 생각한다.", //21
        "대인관계보다 업무를 잘하는 것에 더 신경을 쓴다.", //22
        "고민을 얘기하면 해답을 찾기보다는 이야기를 들어주는 편이다.", //25
        "누군가가 잘못하면 규칙에 따라 처벌하기 보다는 그 사람의 사정에 따라 처벌할 것이다.", //28
        "팀 게임에서 지면 승부에 연연하지 않고 다음을 기약하며 팀의 기분을 좋게 하는 편이다.", //30
        //GH
        "할 일을 미루지 않는다.", //31
        "새로운 방법을 배우는것을 즐거워 한다.", //34
        "무언가를 함께 할때 계획을 구체적으로 따지는 편이다.", //36
        "시간 약속을 잘지킨다.", //39
        "건망증이 심하다.", //37 
    ];
    var arrFlagQuestion = [
        true, //2
        true, //3
        false, //5
        true, //6
        false, //8

        false, //11
        true, //14
        false, //15
        true, //16
        false, //19

        false, //21
        true, //22
        false, //25
        false, //28
        false, //30

        true, //31
        false, //34
        true, //36
        true, //39
        false, //37
    ];
}


window.onload = function () {
    //초기값
    {
        var nameBox = document.getElementById("nameBox");
        nameBox.innerText = testName;
        var commentText = this.document.getElementById("question");
        var pageNumText = this.document.getElementById("page");
        var imgBox = this.document.getElementById("testImg");
        pageNumText.innerText = pageNum;
        commentText.innerText = arrQuestion[0];
        imgBox.style.backgroundImage = "url(/images/personality/testImg" + pageNum + ".jpg)";
        var flagQuestion = arrFlagQuestion[0];

        var checkBoxRight_3 = document.getElementById("right_3"); //3 
        var checkBoxRight_2 = document.getElementById("right_2"); //2
        var checkBoxRight_1 = document.getElementById("right_1"); //1
        var checkBoxMiddle = document.getElementById("middle"); //0
        var checkBoxleft_1 = document.getElementById("left_1"); //-1
        var checkBoxleft_2 = document.getElementById("left_2"); //-2
        var checkBoxleft_3 = document.getElementById("left_3"); //-3
        var returnBtn = document.getElementById("return");

        function touchStart(icon) {
            icon.classList.remove('fa-square');
            icon.classList.add('fa-check-square');
        }

        function touchEnd(icon) {
            icon.classList.remove('fa-check-square');
            icon.classList.add('fa-square');
        }

        function mouseOver(icon) {
            icon.classList.remove('fa-square');
            icon.classList.add('fa-check-square');
        }

        function mouseOut(icon) {
            icon.classList.remove('fa-check-square');
            icon.classList.add('fa-square');
        }
    }

    //MouseOverOut Animation
    {
        if (document.body.clientWidth < 800) {
            checkBoxRight_3.ontouchstart = function () {
                touchStart(this.querySelector("li>i"));
            }
            checkBoxRight_3.ontouchend = function () {
                touchEnd(this.querySelector("li>i"));
            }
            checkBoxRight_2.ontouchstart = function () {
                touchStart(this.querySelector("li>i"));
            }
            checkBoxRight_2.ontouchend = function () {
                touchEnd(this.querySelector("li>i"));
            }
            checkBoxRight_1.ontouchstart = function () {
                touchStart(this.querySelector("li>i"));
            }
            checkBoxRight_1.ontouchend = function () {
                touchEnd(this.querySelector("li>i"));
            }
            checkBoxMiddle.ontouchstart = function () {
                touchStart(this.querySelector("li>i"));
            }
            checkBoxMiddle.ontouchend = function () {
                touchEnd(this.querySelector("li>i"));
            }
            checkBoxleft_1.ontouchstart = function () {
                touchStart(this.querySelector("li>i"));
            }
            checkBoxleft_1.ontouchend = function () {
                touchEnd(this.querySelector("li>i"));
            }
            checkBoxleft_2.ontouchstart = function () {
                touchStart(this.querySelector("li>i"));
            }
            checkBoxleft_2.ontouchend = function () {
                touchEnd(this.querySelector("li>i"));
            }
            checkBoxleft_3.ontouchstart = function () {
                touchStart(this.querySelector("li>i"));
            }
            checkBoxleft_3.ontouchend = function () {
                touchEnd(this.querySelector("li>i"));
            }
            returnBtn.ontouchstart = function () {
                this.querySelector("span").style.transform = "rotate(-30deg)";
            }
            returnBtn.ontouchend = function () {
                this.querySelector("span").style.transform = "rotate(0deg)";
            }
        } else {
            checkBoxRight_3.onmouseover = function () {
                mouseOver(this.querySelector("li>i"));
            }
            checkBoxRight_3.onmouseout = function () {
                mouseOut(this.querySelector("li>i"));
            }
            checkBoxRight_2.onmouseover = function () {
                mouseOver(this.querySelector("li>i"));
            }
            checkBoxRight_2.onmouseout = function () {
                mouseOut(this.querySelector("li>i"));
            }
            checkBoxRight_1.onmouseover = function () {
                mouseOver(this.querySelector("li>i"));
            }
            checkBoxRight_1.onmouseout = function () {
                mouseOut(this.querySelector("li>i"));
            }
            checkBoxMiddle.onmouseover = function () {
                mouseOver(this.querySelector("li>i"));
            }
            checkBoxMiddle.onmouseout = function () {
                mouseOut(this.querySelector("li>i"));
            }
            checkBoxleft_1.onmouseover = function () {
                mouseOver(this.querySelector("li>i"));
            }
            checkBoxleft_1.onmouseout = function () {
                mouseOut(this.querySelector("li>i"));
            }
            checkBoxleft_2.onmouseover = function () {
                mouseOver(this.querySelector("li>i"));
            }
            checkBoxleft_2.onmouseout = function () {
                mouseOut(this.querySelector("li>i"));
            }
            checkBoxleft_3.onmouseover = function () {
                mouseOver(this.querySelector("li>i"));
            }
            checkBoxleft_3.onmouseout = function () {
                mouseOut(this.querySelector("li>i"));
            }
            returnBtn.onmouseover = function () {
                this.querySelector("span").style.transform = "rotate(-30deg)";
            }
            returnBtn.onmouseout = function () {
                this.querySelector("span").style.transform = "rotate(0deg)";
            }
        }
    }

    //MouseClick Event
    {
        checkBoxRight_3.onclick = function () {
            if (flagQuestion) userCheck.push(Number(5));
            if (!flagQuestion) userCheck.push(Number(-5));
            set()
        }
        checkBoxRight_2.onclick = function () {
            if (flagQuestion) userCheck.push(Number(3));
            if (!flagQuestion) userCheck.push(Number(-3));
            set()
        }
        checkBoxRight_1.onclick = function () {
            if (flagQuestion) userCheck.push(Number(1));
            if (!flagQuestion) userCheck.push(Number(-1));
            set()
        }
        checkBoxMiddle.onclick = function () {
            userCheck.push(Number(0));
            set()
        }
        checkBoxleft_1.onclick = function () {
            if (flagQuestion) userCheck.push(Number(-1));
            if (!flagQuestion) userCheck.push(Number(1));
            set()
        }
        checkBoxleft_2.onclick = function () {
            if (flagQuestion) userCheck.push(Number(-3));
            if (!flagQuestion) userCheck.push(Number(3));
            set()
        }
        checkBoxleft_3.onclick = function () {
            if (flagQuestion) userCheck.push(Number(-5));
            if (!flagQuestion) userCheck.push(Number(5));
            set()
        }

        returnBtn.querySelector("a").onclick = function () {
            if (pageNum == 1) {
                return false;
            }
            userCheck.pop();
            pageNum--;
            pageNumText.innerText = pageNum;
            commentText.innerText = arrQuestion[pageNum - 1];
            flagQuestion = arrFlagQuestion[pageNum - 1];
            imgBox.style.backgroundImage = "url(/images/personality/testImg" + pageNum + ".jpg)";
        }
    }

    //Test Setting
    function set() {
        if (pageNum < 20) {
            pageNum++;
            pageNumText.innerText = pageNum;
            commentText.innerText = arrQuestion[pageNum - 1];
            flagQuestion = arrFlagQuestion[pageNum - 1];
            imgBox.style.backgroundImage = "url(/images/personality/testImg" + pageNum + ".jpg)";
        } else {
            result()
        }
    }
    //Test Result
    function result() {
        for (var i = 0; i < 5; i++) {
            temp = userCheck.pop();
            if (temp > 0) {
                g += temp;
            } else if (temp < 0) {
                h += temp;
            }
        }
        for (var i = 0; i < 5; i++) {
            temp = userCheck.pop();
            if (temp > 0) {
                e += temp;
            } else if (temp < 0) {
                f += temp;
            }
        }
        for (var i = 0; i < 5; i++) {
            temp = userCheck.pop();
            if (temp > 0) {
                c += temp;
            } else if (temp < 0) {
                d += temp;
            }
        }
        for (var i = 0; i < 5; i++) {
            temp = userCheck.pop();
            if (temp > 0) {
                a += temp;
            } else if (temp < 0) {
                b += temp;
            }
        }
        b = (-b);
        d = (-d);
        f = (-f);
        h = (-h);
        a = ((a / (25)) * 100).toFixed(0)
        b = ((b / (25)) * 100).toFixed(0)
        c = ((c / (25)) * 100).toFixed(0)
        d = ((d / (25)) * 100).toFixed(0)
        e = ((e / (25)) * 100).toFixed(0)
        f = ((f / (25)) * 100).toFixed(0)
        g = ((g / (25)) * 100).toFixed(0)
        h = ((h / (25)) * 100).toFixed(0)

        if (Number(a) > Number(b)) {
            charAB = "A";
        } else {
            charAB = "B";
        }
        if (Number(c) > Number(d)) {
            charCD = "C";
        } else {
            charCD = "D";
        }
        if (Number(e) > Number(f)) {
            charEF = "E";
        } else {
            charEF = "F";
        }
        if (Number(g) > Number(h)) {
            charGH = "G";
        } else {
            charGH = "H";
        }

        param = "?" + "name=" + testName + "&" +
            "a=" + a + "&" + "b=" + b + "&" + "c=" + c + "&" + "d=" + d + "&" +
            "e=" + e + "&" + "f=" + f + "&" + "g=" + g + "&" + "h=" + h;
        resABCDEFGH = charAB + charCD + charEF + charGH;

        document.getElementById("return").className = "skip";
        document.getElementById("pageBox").className = "skip";
        document.querySelector(".checkBox>ul").className = "skip";
        document.getElementById("resultBox").className = "";
        document.querySelector("#resultBox>a").setAttribute("href", "/personality/result/result" + resABCDEFGH + ".html" + param);
    }
}