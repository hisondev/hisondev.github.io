//외모,지갑,눈치,인싸,유머
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
        testName+"와(과) 함께 길을 걷고있다. 길가의 이성과 "+testName+"는(은) 눈이 잠깐 마주쳤다. 그때 그 이성은?", //1
        "소개팅을 나간 "+testName+", 밥을 먹고 카운터에서 함께한 이성과 계산을 어떻게 해야할 지 애매한 분위기가 흐른다.", //2
        "오늘은 즐거운 데이트가 있는날. 하지만 "+testName+"의 연인은 부모님과 심하게 싸우고 기분이 매우 안 좋은 상태이다. 데이트를 하려 연인을 만난 "+testName+"가(이) 하는 말은?", //3
        "그룹내에서 모임을 하고있는 "+testName+"의 위치는?", //4
        "소개팅을 하고 있는 "+testName+". 만난지 얼마안되서 분위기가 굉장히 어색한데..", //5
        "오랜만에 만난 "+testName+". 못 보던 옷을 입고왔다. 새로운 스타일을 도전 중인 듯 한데.. 그 스타일을 본 나의 느낌은!?", //6
        testName+"의 부탁으로 함께 "+testName+"의 연인의 선물을 고르고 있다. "+testName+"가(이) 보고있는 연인의 선물은?", //7
        "정말 매력적인 "+testName+"의 후배. 그(또는 그녀)는 놀랍게도 "+testName+"를(을) 좋아한다. "+testName+"는(은) 현재 쏠로이다. 그(또는 그녀)는 "+testName+"에게 용기를 내어 이번주말에 영화를 보러가자 하는데. 그때 "+testName+"의 반응은?", //8
        "새학기 또는 새로운 만남이 시작되었다! 다들 서먹서먹하고 누구하나 나서지 않고 눈치를 보거나 기싸움을 하고 있는데, 그 곳에서 "+testName+"는(은)?", //9
        "썸을 타고있는 "+testName+". 만나기 전 메신져를 통해 사소한 대화가 오간다. 이성과의 메신져를 하는 "+testName+"의 스타일은?", //10
        testName+"와(과) 함께 야외 수영장을 놀러갔다 수영복을 입고나온 "+testName+"의 모습은?", //11
        "연인과 데이트 중인 "+testName+". 가난한 그는 없는 돈을 끌어모아 무리해서 데이트를 했고. 가진건 차비 밖에 없는데 연인은 떡볶이를 사달라한다. 이때 "+testName+"는(은)?", //12
        "친한 친구들과 커플모임을 갖게된 "+testName+". 그 모임안에서 기묘한 기류가 흐른다. "+testName+"의 연인을 은근히 까고있는 친구의 연인이 있기 때문! 이 때 "+testName+"는(은).", //13
        "학교에서(또는 학창시절) "+testName+"의 모습은?", //14
        "솔직하게.. "+testName+"가(이) 개그를 하면.", //15
        testName+"의 미소를 본 이성의 반응은?",
        "오늘도 "+testName+"의 잔소리에도 불구하고 친구들과 함께 술 한잔하는 "+testName+"의 연인.(또는 "+testName+"가(이) 싫어하는 행동) 하지만 연인은 빈털털이라 친구들 앞에서 자존심을 구겨야하는데, 이때 "+testName+"는(은)?",
        testName+"는(은) 이성과 소개팅을 하고나서 메신져로 연락을 주고 받고있다. 답장이 늦는것에 대해 언급 없이 매번 답장시간이 굉장히 늦을 때 "+testName+"의 생각은?",
        "이성과 함께하는 자유로운 분위기의 모임을 "+testName+"는(은) 자주 갖습니까?",
        "아니 있잖아, 오늘따라 선생님이 지각가지고 엄청 혼을 내는 거야. 오늘 지하철에 문제생겨서 어쩔 수 없이 늦은건데.. 나 진짜 너무 슬펐어. 라는 말을 들은 "+testName+"의 대답은?"
    ];
    var arrAnswer_1 = [
        "쑥스러운 표정으로 땅을 잠깐 보고 다시 힐끔거리며 "+testName+"를(을) 처다본다.", //1
        "밥 값은 내가 계산해야지! 멋진 신용카드를 꺼내며 밥 값이 얼마든 자연스럽게 계산한다.", //2
        "오 세상에!!!!! 자기야 무슨일 있어?????? 표정이 안 좋아 보이는데? 안 좋은 일 있었어?", //3
        "가운데에서 대화를 주도하며 즐겁게 이야기하고, 모든 사람들은 초롱한 눈동자로 "+testName+"를(을) 바라본다.", //4
        "자연스럽게 흐름을 만들며 어떤 상대든 대화에 어려움이 없다. 거의 상담 전문가 수준!", //5
        "역시 "+testName+"! 어떤 스타일이건 자기에 맞게 잘 소화해 낸다. 유명 잡지에서 지금 막 튀어나온 느낌! 어디서 샀는지 물어봐야겠다.", //6
        "선물은 명품이지! 프X다 가방!!! 아니면 사과노트북!!! "+testName+"의 한달 수입보다 더 한 선물을 고르고 있다.", //7
        "(기다렸다는 듯)응! 너무 좋아! 그럼 영화 예매는 내가 해놓을게 팝콘은 너가 사줘! 몇시에 어디에서 보는걸로 할까?", //8
        "역시 슈퍼인싸!! 거의 주인공 등장이다! 이 사람 저 사람 말을 걸고 자연스럽게 리더가 된다!!", //9
        "한가지 주제로 많은 대화가 오간다. 이성이 말한 얘기에 대해 적절하게 대답을 하며 간간히 농담을 해서 상대방을 즐겁게 만든다.", //10
        "섹시 그 자체다! 식단 조절과 운동이 만들어낸 인위적인 매력이 철철 넘친다!!", //11
        testName+"가(이) 돈이 없지 가오가없나! 떡볶이를 사주고 2시간을 걸어 집을 갈 것이다.", //12
        "연인과 바람을 쐐고온다하고 함께 밖에 나가서 미안하다는 말과함께 참기 어려우면 친구들에게 얘기하면 되니 집에 가자 한다. (거의 드라마급 해결)", //13
        "매년마다 초콜렛과 편지 고백을 한 두명씩에게 받으며, 학교를 들어가면 모든 친구들이 인사하고, 쉬는 시간에 다들 "+testName+"에게 다가간다.(또는 그랬을것 같다).", //14
        "겁나 웃기다 깔깔깔깔", //15
        "매우 기분 좋아 보인다. "+testName+"를(을) 더 즐겁게 해주고 싶어서 안달이다.",
        "그래도 내사랑 자기인데.. 친구들 앞에서 자존심 구기게 할 수는 없지.. "+testName+"는(은) 몰래 연인의 지갑에 한턱 낼 수있는 충분한 돈을 넣어둔다.",
        "깔끔하게 포기한다!! 소개팅을 시켜준 친구에게 잘 안됐다고 정리하고 바로 다음 소개팅을 받는다!!!",
        "네! 일주일에 한번 이상은 꼭 참여하는 거 같습니다!! "+testName+"는(은) 즐거운 모임을 절대 피하지 않습니다!",
        "헐!! 진짜 슬펐겠다. 아니 지하철이 문제가 생겼는데 그럼 어떡해!!! 완전 내가 더 화나네!!!!!!"
    ];
    var arrAnswer_2 = [
        "기분나뿐 표정으로 눈을 피하지 않아서 "+testName+"가(이) 땅을 처다본다.", //1
        "소개팅은 얻어먹고 싶을 때 하는거 아닌가? 당연히 상대방이 계산해야지! 데헷.", //2
        "와우!!! 자기야!!!!! 너무 보고싶었어!! 오늘 데이트 너무 재미있겠다. 밥 부터 먹으러 갈까?", //3
        "구석탱이에서 친한 친구를 붙잡고 고통을 주고있다.", //4
        "역시 생각대로.. 무슨 얘기를 하든 대화가 끊긴다.", //5
        "우리 할머니가 더 스타일리쉬하다.", //6
        "선물은 감동과 정성이지! 편지쓰기!!! 목도리짜기!!! "+testName+"는(은) 한달정도 노력을 들여 선물을 만들고 있다.", //7
        "(수상하다는 듯)응? 무슨영화? 그 영화 평점 별로야.", //8
        "역시!! 끝까지 나서지 않는다. 끝까지! 학기 끝날 때 까지!", //9
        "질문 빌런이 나타났다! 하나의 대화 소재는 2, 3마디면 끝난다! 대화를 쥐어 짜내느라 힘든 모습이 메신져에 고스란히 담겨있다!", //10
        "세렝게티! 자연 생태계 그대로의 모습! 보기 싫다!", //11
        "ㄷㅊ! 나 이거 차비야! 니 돈으로 사먹어! 그리고 2인분 시켜! 나도먹게!", //12
        "친한 친구들끼리 이런 모임 하게되서 너무좋아! 앞으로 자주 이렇게 뭉치자 우리! (절대 모른다)", //13
        "짝꿍, 담임선생님, 심지어는 그가 좋아했던 이성친구 조차 그를 모른다.(또는 기억하지 못할 것 같다.)", //14
        "재미없다.", //15
        "무감각한 표정. "+testName+"의 미소와 본인의 감정은 무관하다는 행동.",
        "오 X킹! 오늘도 처먹고 있구나!(또는 싫어하는 행동을 하는구나!!) 넌 디졌다. 망신좀 당해봐야지. "+testName+"는(은) 연인의 지갑에 있는 돈, 없는 돈 다 꺼내서 집으로 튄다.",
        "바쁜일이 있겠지! 분명 소개팅에서는 반응이 좋았다구!! 열번 찍어 안넘어가는 나무 없지!!",
        "아니요! 걔는 집에만 있어요! 이불 밖은 위험하다 생각할듯요! 집이 최고래요!!",
        "헐!! 지하철이 왜 문제가 생겼는데? 왜 하필 오늘 문제가 생겼데??"
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
        imgBox.style.backgroundImage = "url(/images/dating/testImg" + pageNum + ".jpg)";
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
            imgBox.style.backgroundImage = "url(/images/dating/testImg" + pageNum + ".jpg)";
            setTimeout(function () {
                returnBtn.querySelector("span").style.transform = "rotate(0deg)";
            }, 100)
        }
    }

    //Test Setting
    function set() {
        if (pageNum < 20) {
            pageNum++;
            pageNumText.innerText = pageNum;
            commentText.innerText = arrQuestion[pageNum - 1];
            answer_1.innerText = arrAnswer_1[pageNum - 1];
            answer_2.innerText = arrAnswer_2[pageNum - 1];
            imgBox.style.backgroundImage = "url(/images/dating/testImg" + pageNum + ".jpg)";
        } else {
            result()
        }
    }
    //Test Result
    function result() {
        for (let i = 0; i < 20; i++) {
            let checked = userCheck.pop();
            switch (i % 5) {
                case 0:
                    if (checked > 0) {
                        e += 1;
                    }
                    break;
                case 1:
                    if (checked > 0) {
                        d += 1;
                    }
                    break;
                case 2:
                    if (checked > 0) {
                        c += 1;
                    }
                    break;
                case 3:
                    if (checked > 0) {
                        b += 1;
                    }
                    break;
                case 4:
                    if (checked > 0) {
                        a += 1;
                    }
                    break;
                default:
                    break;
            }
        }
        
        a = scoerSetting(a);
        b = scoerSetting(b);
        c = scoerSetting(c);
        d = scoerSetting(d);
        e = scoerSetting(e);
        avg = (a + b + c + d + e) / 5

        if(avg <= 25) {
            alpa = 'A';
        } else if (avg > 25 && avg <= 50) {
            alpa = 'B';
        } else if (avg > 50 && avg <= 75) {
            alpa = 'C';
        } else {
            alpa = 'D';
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
        templateId: 34052,
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
    location.replace("/dating/forwarding_form.html")
}

function scoerSetting(score) {
    let setScore = 0;
    switch (score) {
        case 1:
            setScore = 25;
            break;
        case 2:
            setScore = 50;
            break;
        case 3:
            setScore = 75;
            break;
        case 4:
            setScore = 100;
            break;
        default:
            setScore = 5;
            break;
    }
    return setScore;
}