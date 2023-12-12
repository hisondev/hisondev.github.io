var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var avg = 0.1;
var alpa;

var pageNum = 1;
var userCheck = [];
var param = "";
var testName = getParameterByName("name");
Kakao.init('0e4fcd913762bd2a1016dc2dc2798451');
//Test Contents
{
    var arrQuestion = [
        testName+"는(은) 동아리 모임에 처음 참석했습니다. "+testName+" 옆자리에는 딱 봐도 어려보이는 학생 한 명이 앉아있습니다. "+testName+"는(은) 먼저 다가가 친해지려고 합니다. 이 때 "+testName+"의 첫 인사는?", //1
        "어느덧 동아리에서 중요한 직책을 맡게 된 "+testName+". 요즘들어 후배들이 "+testName+"가(이) 시키는 일을 잘 따르지 않는 것 같습니다.  후배들이 뭔가 불만이 쌓인것 같은 느낌을 받은 "+testName+". 어떻게 할까요?", //2
        "알고보니 동아리이 아끼는 선배와 후배가 의견차이로 작은 다툼이 있었던게 문제였다. "+testName+"는(은) 아끼는 두 사람의 화해를 시키려고합니다. "+testName+"의 선택은?", //3
        testName+"의 노력으로 동아리는 성공적이다! 오늘은 처음들어온 멤버들과 첫 모임이 있는 날, 그 중 부쩍 말 수가 적은 친구가 보인다. "+testName+"는(은) 그 친구가 다른 사람들과 친해질 수 있게 말을 시켜보려고 한다. "+testName+"의 선택은?", //4
        "모임은 한창 무르익어 즐거운 대화가 오간다. 옆에서는 "+testName+"가(이) 잘 아는 주제로 대화중인데, 이 때 "+testName+"의 반응은?", //5
        "동아리 멤버 중에는 남들보다 열심히 하지 않거나 부족한 멤버들이 있기 마련. "+testName+"는(은) 이들까지 잘 챙겨내 보려고한다. ", //6
        "동아리 활동 중, 친한 동생이 쉬워보이는 일을 가지고 낑낑대고 있다. "+testName+"의 선택은?", //7
        "간만에 친구들과 피시방에 간 "+testName+". 옆자리에 시끄럽게 떠들며 게임하는 어린 친구들이 보입니다. "+testName+"의 행동은?", //8
        testName+"의 얘기 후 잠깐 조용해진 친구들은 시간이 지나자 슬슬 다시 떠들기 시작합니다. 이 때 "+testName+"의 반응은?", //9
        "계속되는 시험과 과제로 지친 "+testName+". 오랜만에 만난 친구와 카페에 갔다. 친구가 요즘 사는게 힘들다며 "+testName+"에게 하소연을 합니다. 이때 "+testName+"의 생각은?", //10
        "알고보니 친구가 힘든 이유는 연애 문제였습니다. 연인의 행동이 문제였는데요, "+testName+"는(은) 친구에게 조언을 해주려고 합니다.", //11
        "새학기가 시작되었습니다. 새로운 친구를 사귈 생각에 들뜬 "+testName+"! 처음보는 친구와 짝이 되었는데, 공책이 모두 애니 캐릭터네요.(또는 "+testName+"가(이) 전혀 관심없는 취미) "+testName+"의 생각은?", //12
        "쉬는시간, 친구와 단 둘이 매점에 가게 된 "+testName+". 준비한 회심의 개그를 날립니다! 그런데 친구의 표정에 변화가 없네요. 이 때 "+testName+"의 생각은?", //13
        "평소 팀게임을 즐기는 "+testName+". "+testName+"의 노력에도 불구하고 "+testName+"의 스코어는 팀원들에 비해 굉장히 저조하다. 팀원 중 한명이 "+testName+"를(을) 비판하기 시작하는데 이때 "+testName+"의 행동은?", //14
        "어느 날 수업시간, 평소 "+testName+"와(과) 잘 맞지 않던 친구가 "+testName+"의 의견을 많은 사람들 앞에서 비판합니다. 창피해진 "+testName+". 반응은?", //15
    ];
    var arrAnswer_1 = [
        "(내 친화력이면 누구와도 편하게 얘기할 수 있지!) fun하고 쿨하게 반말로 인사한다..", //1
        "으데 선배가 말하는데 빠딱빠딱 안하누! 혼을 내서 선배의 권위를 좀 살려야겠어. 처음엔 다 그러면서 배우는거지.", //2
        "(후배에게) 야, 아무리 그래도 선배인데, 너가 먼저 사과하는게 맞지! 같이 가서 얘기해보자!", //3
        "ㅇㅇ은 원래 그렇게 말이 없어?", //4
        "내가 아는 얘기를 놓칠 순 없지! '아 ㅇㅇ얘기하는거지? 그건 이래서 그런건껄?'", //5
        "못하는 애들 하나하나 사정 봐줄 순 없어. 때론 따끔하게 혼도 낼 줄 알아야 돼!", //6
        "내가 예전에 해봤다는걸 알려서 능숙함을 어필해야지. '형(오빠)/누나(언니) 이(가) 이거 해봐서 아는데, 내가 도와줄게!'", //7
        "아 급식충(초딩)새ㄲ들 개시끄럽네", //8
        "어휴, 요즘 애새기들은 싸가지가 없어. 한 번 더 얘기해야 정신차리지", //9
        "휴, 너만 힘드냐? 나도 힘들어. 너만 힘들어?", //10
        "야! 남자/여자친구라면 이렇게 하는게 당연한거야!", //11
        "도대체 애니메이션 캐릭터를(또는 관심없는 취미) 왜 좋아하는건지 이해를 할 수 없네.", //12
        "얘는 왜 반응이 없지? 노잼이네.", //13
        "'네 브론즈님 자기소개 잘들었구여~', '응 니도^%$&&%$$#%#$@~~', 'ㄷㅊ!! 내가 이러고 싶어서 이랬어? 아까전에 블라블라~~' 등과 같은 반응", //14
        "일부로 나 엿먹으러고 저러는거지? 두고보자.", //15
    ];
    var arrAnswer_2 = [
        "(보자마자 반말하면 불편해하겠지..?) 두손을 모으고 바른자세로 극존칭+존대말로 인사한다.", //1
        "후배님들의 생각은 무엇일까. 난 뭐가 문제일까.. 그냥 동아리 그만할까...", //2
        "(선배에게) 선배, 제가 ㅇㅇ이랑 얘기를 해봤는데요, 그 친구 말도 일리가 있어서요, 같이 한 번 얘기해보시는게 어때요?", //3
        "ㅇㅇ은 무슨 애니 좋아해?", //4
        "나도 그거 아는 건데.. 진짜 그거 아닌데.. 내 생각이 맞는데..(속으로만)", //5
        "힘들긴 하지만 결국엔 열심히 할꺼야.. 묵묵히 내일을 하자.", //6
        "처음이라 익숙치 않아서 저러겠지. 하다보면 잘하게 될꺼야.", //7
        "초등학생 님들! 조용히 게임해주시면!! 감사하겠습니다!!!", //8
        "게임하다보면 나도 가끔 저러지.. 문방구에서 귀마개를 사와 귀를 막는다.", //9
        "그래 얘에 비하면 난 힘든것도 아니지. 지금까지 힘들어해온 날 반성하자.", //10
        "연애하다보면 그런일도 있지. 너 행동은 어땟는데?", //11
        "애니(또는 관심없는 취미) 좋아하나보네. 나도 추천해달라고 해봐야 겠다. 데헷", //12
        "난 왜 이렇게 노잼이지... 죽을까...", //13
        "'죄송합니다 행님들! 똑바로 하겠습니다!! 서렌박고 대가리도 박겠습니다 행님들!!!'또는 묵묵히 게임만 한다.", //14
        "굳이 사람들 앞에서 저렇게 얘기할 필요가 있나? 그치만 맞는 말이니까..", //15
    ];
}


window.onload = function () {
    //초기값
    {
        var commentText = this.document.getElementById("question");
        var answer_1 = document.getElementById("answer_1");
        var answer_2 = document.getElementById("answer_2");
        var pageNumText = this.document.getElementById("page");
        var imgBox = this.document.getElementById("testImg");
        pageNumText.innerText = pageNum;
        commentText.innerText = arrQuestion[0];
        answer_1.innerText = arrAnswer_1[0];
        answer_2.innerText = arrAnswer_2[0];
        imgBox.style.backgroundImage = "url(/images/kkon/testImg" + pageNum + ".jpg)";
        var returnBtn = document.getElementById("return");
    }

    //CheckBtnClick Event
    {
        answer_1.onclick = function () {
            answer_1.style.opacity = "0.5";
            setTimeout(function () {
                answer_1.style.opacity = "1";
            }, 200)
            userCheck.push(Number(1));
            set()
        }
        answer_2.onclick = function () {
            answer_2.style.opacity = "0.5";
            setTimeout(function () {
                answer_2.style.opacity = "1";
            }, 200)
            userCheck.push(Number(-1));
            set()
        }
        returnBtn.querySelector("a").onclick = function () {
            if (pageNum == 1) {
                return false;
            }
            returnBtn.querySelector("span").style.transform = "rotate(-30deg)";
            userCheck.pop();
            pageNum--;
            pageNumText.innerText = pageNum;
            commentText.innerText = arrQuestion[pageNum - 1];
            answer_1.innerText = arrAnswer_1[pageNum - 1];
            answer_2.innerText = arrAnswer_2[pageNum - 1];
            imgBox.style.backgroundImage = "url(/images/kkon/testImg" + pageNum + ".jpg)";
            setTimeout(function () {
                returnBtn.querySelector("span").style.transform = "rotate(0deg)";
            }, 100)
        }
    }

    //Test Setting
    function set() {
        if (pageNum < 15) {
            pageNum++;
            pageNumText.innerText = pageNum;
            commentText.innerText = arrQuestion[pageNum - 1];
            answer_1.innerText = arrAnswer_1[pageNum - 1];
            answer_2.innerText = arrAnswer_2[pageNum - 1];
            imgBox.style.backgroundImage = "url(/images/kkon/testImg" + pageNum + ".jpg)";
        } else {
            result()
        }
    }
    //Test Result
    function result() {
        let checked;
        for (let i = 0; i < 3; i++) {
            checked = userCheck.pop();
            if (checked > 0) {
                e += 1;
            }
        }
        for (let i = 0; i < 3; i++) {
            checked = userCheck.pop();
            if (checked > 0) {
                d += 1;
            }
        }
        for (let i = 0; i < 3; i++) {
            checked = userCheck.pop();
            if (checked > 0) {
                c += 1;
            }
        }
        for (let i = 0; i < 3; i++) {
            checked = userCheck.pop();
            if (checked > 0) {
                b += 1;
            }
        }
        for (let i = 0; i < 3; i++) {
            checked = userCheck.pop();
            if (checked > 0) {
                a += 1;
            }
        }

        a = scoerSetting(a);
        b = scoerSetting(b);
        c = scoerSetting(c);
        d = scoerSetting(d);
        e = scoerSetting(e);
        avg = (a + b + c + d + e) / 5

        if(avg <= 35) {
            alpa = 'A';
        } else if (avg > 35 && avg <= 70) {
            alpa = 'B';
        } else {
            alpa = 'C';
        }

        document.querySelector(".comment").className = "skip";
        document.getElementById("return").className = "skip";
        document.getElementById("pageBox").className = "skip";
        document.querySelector(".checkBox").className = "skip";
        document.getElementById("resultBox").className = "";
    }
}

function sendLink() {
    Kakao.Link.sendCustom({
        templateId: 35044,
        templateArgs: {
            'name': testName,
            'a' : a,
            'b' : b,
            'c' : c,
            'd' : d,
            'e' : e,
            'avg' : avg,
            'alpa' : alpa
        }
    });
    document.getElementById("goTest").className = "";
}

function goTest() {
    location.replace("/kkon/forwarding_form.html")
}

function scoerSetting(score) {
    let setScore = 0;
    switch (score) {
        case 1:
            setScore = 35;
            break;
        case 2:
            setScore = 70;
            break;
        case 3:
            setScore = 100;
            break;
        default:
            setScore = 5;
            break;
    }
    return setScore;
}