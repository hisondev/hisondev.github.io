var kakaoTitle;
var kakaoDescription;
var kakaoImageUrl;

window.onload = function () {
    let nameBox = document.getElementById("nameBox");
    nameBox.innerText = testName;
    let resultT1 = document.getElementById("resultT1");
    let resultT2 = document.getElementById("resultT2");
    let resultA1 = document.getElementById("resultA1");
    let resultA2 = document.getElementById("resultA2");
    let resultB1 = document.getElementById("resultB1");
    let resultB2 = document.getElementById("resultB2");
    let resultC1 = document.getElementById("resultC1");
    let resultC2 = document.getElementById("resultC2");
    let resultD1 = document.getElementById("resultD1");
    let resultD2 = document.getElementById("resultD2");
    let resultE1 = document.getElementById("resultE1");
    let resultE2 = document.getElementById("resultE2");

    let imgBox = document.querySelector(".img_banner");
    if (avg <= 35) {
        imgBox.style.backgroundImage = "url(/images/kkon/result1.jpg)";
        resultT1.innerText = "노 꼰대! 매너있는 사회생활";
        resultT2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 꼰대력은 " +
            ((avg != 5) ? avg : 0) + "점 입니다.<br><br>" +
            "당신은 매너있는 사회생활을 하고 있군요!<br>" +
            "당신이 이 결과와 맞는 사회생활을 하고 있다면, <mark>당신 주변에는 항상 사람이 몰리고, 주변의 사람들은 당신과 함께있으면 편함을 느끼고 있을 확률이 큽니다!</mark> " +
            "당신은 서열, 배려, 어린세대 무시, 자기 중심점 사고, 비판 수용력 등 다섯 가지의 분야에서 모두 훌륭한 결과를 보입니다. " +
            "혹시나 조금은 부족한 결과가 있다면 아래를 관찰하고 더 나은 사회생활로 발전하면 좋을 것 같습니다." +
            "<br><b>축하드립니다!</b>";
        kakaoTitle = "나는 노 꼰대! 매너있는 사회생활을 합니다!";
        kakaoDescription = "당신 또는 당신의 친구가 판단한 나의 꼰대력은 " + ((avg != 5) ? avg : 0) + "점 입니다.";
        kakaoImageUrl = "https://today-test.com/images/kkon/result1.jpg";
    } else if (avg > 35 && avg <= 70) {
        imgBox.style.backgroundImage = "url(/images/kkon/result2.jpg)";
        resultT1.innerText = "리틀 꼰대! 조심하세요! 꼰대가될 수 있습니다.";
        resultT2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 꼰대력은 " +
            avg + "점 입니다.<br><br>" +
            "당신은 꼰대가 아닙니다. 하지만 꼰대가 될 가능성을 가지고 있습니다.<br>" +
            "아직은 당신으로 인해 당신의 주변사람이 크게 괴롭지는 않겠지만, <mark>여기서 조금 더 당신의 꼰대 성향이 짙어진다면, 주변사람을 고통속에 빠뜨릴 위험이 내재합니다.</mark><br><br>" +
            "서열, 배려, 어린세대 무시, 자기 중심적 사고, 비판 수용력 다섯가지 부분에서 당신이 부족한 점이 무엇인 지 잘 살펴보세요. " +
            "본 결과를 통해 당신의 사회생활이 더 나은 방향으로 발전하길 기대합니다." +
            "<br><b>힘내세요!!!</b>"
        kakaoTitle = "나는 리틀 꼰대! 꼰대가될 잠재력이 있습니다.";
        kakaoDescription = "당신 또는 당신의 친구가 판단한 나의 꼰대력은 " + avg + "점 입니다.";
        kakaoImageUrl = "https://today-test.com/images/kkon/result2.jpg";
    } else {
        imgBox.style.backgroundImage = "url(/images/kkon/result3.jpg)";
        resultT1.innerText = "슈퍼 꼰대! 이럴수가! 당신은 매우 큰 꼰대 성향을 갖고 있습니다.";
        resultT2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 꼰대력은 " +
            avg + "점 입니다.<br><br>" +
            "오 세상에!!! 당신은 슈퍼 꼰대 입니다!<br>" +
            "서열, 배려, 어린세대 무시, 자기 중심적 사고, 비판 수용력 다섯가지의 분야에서 각 높은 점수를 받으셨군요. 이 결과가 맞다면, <mark>당신으로 인해 당신의 주변 사람을 고통을 겪고 있을 확률이 높습니다!</mark> " +
            "너무 좌절하지 마세요! 이는 당신의 부정적인 성향을 분석한게 아니라 단지 꼰대적인 성향만을 분석한 거니까요!<br><br>" +
            "하지만 이 결과에서 도움을 얻고자 한다면, 아래에 세부 분석 내용을 보고 자신을 개선해 나아가길 바랍니다!" +
            "<br><b>힘내세요!!!</b>"
        kakaoTitle = "슈퍼 꼰대! 이럴수가! 나는 매우 큰 꼰대 성향을 갖고 있습니다.";
        kakaoDescription = "당신 또는 당신의 친구가 판단한 나의 꼰대력은 " + avg + "점 입니다.";
        kakaoImageUrl = "https://today-test.com/images/kkon/result3.jpg";
    }

    if (intA <= 35) {
        resultA1.innerText = "수평적 서열관계!";
        resultA2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 서열 중시 점수는 " +
            ((intA != 5) ? intA : 0) + "점 입니다. <br>" +
            "나이는 나이일 뿐! 나이를 떠나 모든 사람을 평등하게 대하는 당신! 누구보다 <b>수평적인 인간관계를 추구합니다.</b>";
    } else if (intA > 35 && intA <= 70) {
        resultA1.innerText = "수직적 서열관계!";
        resultA2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 서열 중시 점수는 " +
            intA + "점 입니다. <br>" +
            "평등도 권위도 모두 중요한 법! 당신은 경우에 따라서는 수직적인 관계도 필요하다고 생각합니다. 심할 경우에는 <b>권위주의로 발전할 수 있으니 주의하세요!</b>";
    } else {
        resultA1.innerText = "약강강약 끝판왕!!";
        resultA2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 서열 중시 점수는 " +
            intA + "점 입니다. <br>" +
            "모든 인간관계를 수직적으로만 바라보는 당신. 동생이나 후배들이 당신을 불편해하지는 않는지.. <b>권위주의 타파를 위해 노력하세요!</b>";
    }

    if (intB <= 35) {
        resultB1.innerText = "도비급 배려왕!";
        resultB2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 배려 안함 점수는 " +
            ((intB != 5) ? intB : 0) + "점 입니다. <br>" +
            "평소 배려 넘치는 행동으로 주변 사람들을 편하게 만들어 주는 당신! 앞으로도 <b>배려 넘치는 모습 유지한다면</b> 더 많은 사람들에게 호감을 얻을 수 있을 거예요.";
    } else if (intB > 35 && intB <= 70) {
        resultB1.innerText = "책으로 배운 배려!";
        resultB2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 배려 안함 점수는 " +
            intB + "점 입니다. <br>" +
            "어느 정도 눈치껏 배려할 줄 아는 당신. 하지만 가끔씩 보이는 이기적인 행동으로 주변 사람들의 오해를 사기도 합니다. <b>조금만 더 배려심을 키우면 좋겠네요.</b>";
    } else {
        resultB1.innerText = "이게 내 업무 스타일이야!!";
        resultB2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 배려 안함 점수는 " +
            intB + "점 입니다. <br>" +
            "저런.. 배려라고는 도무지 찾아볼 수 가 없네요. 당신이 입만 열면 싸해지는 분위기 못 느끼셨나요? 지금도 늦지 않았어요. <b>배려심을 키워보도록 합니다.</b>";
    }

    if (intC <= 35) {
        resultC1.innerText = "리스펙의 달인!";
        resultC2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 어린 세대 무시 점수는 " +
            ((intC != 5) ? intC : 0) + "점 입니다. <br>" +
            "다름을 인정할 줄 아는 당신. 자기와 다른 세대의 문화도 <b>존중할 줄 아는 것이 장점!";
    } else if (intC > 35 && intC <= 70) {
        resultC1.innerText = "요즘 애들은!";
        resultC2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 어린 세대 무시 점수는 " +
            intC + "점 입니다. <br>" +
            "다른 세대의 문화가 종종 못마땅하게 느껴지는 당신. 그들의 <b>문화를 이해하려는 노력이 필요합니다.";
    } else {
        resultC1.innerText = "라떼는 말이야!!";
        resultC2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 어린 세대 무시 점수는 " +
            intC + "점 입니다. <br>" +
            "평소 자신과 다른 세대의 문화를 무시하는 경향이 있지 않으신가요? 이러한 경향은 특히 나이 어린 친구들을 대할 때 더욱 두드러집니다. 다른것일 뿐 틀린것이 아니니, <b>차이를 인정하고 존중하는 자세를 기르세요.</b>";
    }

    if (intD <= 35) {
        resultD1.innerText = "역지사지 갑!";
        resultD2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 자기 중심 사고 점수는 " +
            ((intD != 5) ? intD : 0) + "점 입니다. <br>" +
            "상대방의 입장에서 생각해보는 태도가 몸에 배어있습니다. 본인이 힘든 상황에서도 상대방의 말에 귀기울이고 상대방의 행동을 이해하려고 노력하는 <b>흔치 않은 사람입니다!</b>";
    } else if (intD > 35 && intD <= 70) {
        resultD1.innerText = "님비 핌피!";
        resultD2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 자기 중심 사고 점수는 " +
            intD + "점 입니다. <br>" +
            "평소에는 이미지 때문이라도 상대방의 입장을 이해하려고 애쓰는 당신. 하지만 본인이 여유가 없는 상황에서는 이기적으로 행동하는 자신을 발견 할 수 있습니다. 조금만 더 신경쓴다면 상대방에게도, 나에게도 <b>더 도움되는 상황이 펼쳐질 거예요.</b>";
    } else {
        resultD1.innerText = "너만 힘들어?! 나도 힘들어!";
        resultD2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 자기 중심 사고 점수는 " +
            intD + "점 입니다. <br>" +
            "내가 이 세상의 중심! 혹시, 주변 사람들이 당신과 대화하기를 꺼리지는 않나요? 자기의 생각이 100% 옳다고 확신하는 태도는 주변 사람들을 지치게 합니다. 본인의 생각이 정답이 아닐 수도 있다는 것을 인지하시고, <b>타인의 관점을 받아들이는 연습이 필요합니다.</b>";
    }

    if (intE <= 35) {
        resultE1.innerText = "정말! 죄송합니다!!";
        resultE2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 비판 수용 안함 점수는 " +
            ((intE != 5) ? intE : 0) + "점 입니다. <br>" +
            "문제가 발생하면 남탓/환경탓을 하기보다 자신을 먼저 돌아볼 줄 아는 당신은 진정한 대인배! 설사 본인의 적이 비판을 할지라도 맞는 말이라면 기꺼이 받아들입니다. <b>앞으로도 이런 태도를 유지한다면,</b> 매년 멋있는 사람이 되어가는 다신을 발견할 수 있을거예요.";
    } else if (intE > 35 && intE <= 70) {
        resultE1.innerText = "죄송하지만! 이유가 있었습니다!!";
        resultE2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 비판 수용 안함 점수는 " +
            intE + "점 입니다. <br>" +
            "평소 자신을 돌아보며 문제점을 찾아 개선하는 노력중인 당신. 하지만, 자기가 확신하는 분야에서는 다소 고집스러운 모습을 보이며 다른 사람들의 비판을 무시해버리는 경향이 있습니다. <b>이런 부분만 보완한다면,</b> 매년 멋있는 사람이 되어가는 다신을 발견할 수 있을거예요.";
    } else {
        resultE1.innerText = "정글차이!";
        resultE2.innerHTML = "당신 또는 당신의 친구가 판단한 당신의 비판 수용 안함 점수는 " +
            intE + "점 입니다. <br>" +
            "남탓 장인이시네요! 무슨 문제가 생기기만하면 남탓부터 하고 보는 당신! 주변 사람이 해주는 건설적인 비판도 자기 기분이 나쁘다면 전혀 받아들이지 않습니다. 심지어 스스로에 대한 공격으로 받아들여 복수의 칼을 갈기도 합니다. <b>자기를 돌아보고 문제점을 고쳐 나가는 사람이 더 멋있는 법!</b> 지금이라도 연습한다면, 더 멋있는 사람이 될 수 있을거예요.";
    }

    document.getElementById("facebook_result_share").dataset.href = window.location.href;
}

function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: kakaoTitle,
            description: kakaoDescription,
            imageUrl: kakaoImageUrl,
            link: {
                mobileWebUrl: window.location.href
            },
        },
        buttons: [{
            title: '결과 보러가기',
            link: {
                mobileWebUrl: window.location.href
            },
        }]
    });
}

function goInsta() {
    window.open('https://www.instagram.com/bombom_pedia', '_blank');
}