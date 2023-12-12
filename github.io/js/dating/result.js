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
    if(avg <= 25) {
        imgBox.style.backgroundImage = "url(/images/dating/result1.jpg)";
        resultT1.innerText = "연애 하수!";
        resultT2.innerHTML = "당신 또는 친구가 판단한 당신의 연애력은 "+
        ((avg!=5)?avg:0)+"점 입니다.<br><br>"+
        "앗..! 당신은 연애 하수!.<br>"+
        "만약 당신이 분석한 당신의 연애력이라면당신은 자신의 매력에 비해 자신을 과소 평가하거나, "+
        "친구분이 분석한 당신의 연애력이라면<mark>타인의 객관적인 시각, 또는 시비를 터는 걸수 있습니다. 빡치게도!!</mark> "+
        "상처 받지 마세요! 역으로 생각하세요! 당신은 발전 가능성이 무궁무진한 사람입니다!! 당신을 무시한 친구들에게 복수 할 차례입니다 "+
        "우리는 다수의 젊은 남성과 여성을 조사하여 5가지의 능력으로 연애력을 분석했습니다.<br>아래 당신이 부족한 부분들을 보면서 당신의 능력을 채워보세요!<br>"+
        "<b>당신의 연애를 응원합니다!!</b>";
        kakaoTitle = "나는 연애 하수!";
        kakaoDescription = "당신 또는 당신의 친구가 판단한 나의 연애력은 " + ((avg != 5) ? avg : 0) + "점 입니다.";
        kakaoImageUrl = "https://today-test.com/images/dating/result1.jpg";
    } else if (avg > 25 && avg <= 50) {
        imgBox.style.backgroundImage = "url(/images/dating/result2.jpg)";
        resultT1.innerText = "연애 중수!";
        resultT2.innerHTML = "당신 또는 친구가 판단한 당신의 연애력은 "+
        avg+"점 입니다.<br><br>"+
        "아아..! 당신은 연애 중수입니다!<br>"+
        "<mark>당신의 연애가 가끔 휘청거리는 이유를 이곳에서 발견하면 좋겠네요!</mark> "+
        "당황하지 마세요!! 대부분의 사람이 이런 결과를 보입니다. "+
        "우리는 다수의 젊은 남성과 여성을 조사하여 5가지의 능력으로 연애력을 분석했습니다.<br> 아래 당신이 부족한 부분들을 보면서 당신의 능력을 채워보세요!<br>"+
        "<b>당신의 연애를 응원합니다!!</b>"
        kakaoTitle = "나는 연애 중수!";
        kakaoDescription = "당신 또는 당신의 친구가 판단한 나의 연애력은 " + avg + "점 입니다.";
        kakaoImageUrl = "https://today-test.com/images/dating/result2.jpg";
    } else if (avg > 50 && avg <= 75) {
        imgBox.style.backgroundImage = "url(/images/dating/result3.jpg)";
        resultT1.innerText = "연애 고수!";
        resultT2.innerHTML = "당신 또는 친구가 판단한 당신의 연애력은 "+
        avg+"점 입니다.<br><br>"+
        "오! 당신은 연애 고수입니다!<br>"+
        "<mark>굉장히 소수만이 이런 결과를 얻어냅니다. 축하드립니다!</mark><br><br>"+
        "연애 고수라고 아직 자만하기는 이릅니다. 완벽함을 추구해봐요! "+
        "우리는 다수의 젊은 남성과 여성을 조사하여 5가지의 능력으로 연애력을 분석했습니다.<br> 당신의 부족한 부분들을 보면서 당신의 능력을 채워보세요!<br>"+
        "<b>당신의 연애를 응원합니다!!</b>"
        kakaoTitle = "나는 연애 고수!";
        kakaoDescription = "당신 또는 당신의 친구가 판단한 나의 연애력은 " + avg + "점 입니다.";
        kakaoImageUrl = "https://today-test.com/images/dating/result3.jpg";
    } else {
        imgBox.style.backgroundImage = "url(/images/dating/result4.jpg)";
        resultT1.innerText = "연애의 신!";
        resultT2.innerHTML = "당신 또는 친구가 판단한 당신의 연애력은 "+
        avg+"점 입니다.<br><br>"+
        "오 세상에!!! 당신은 연애의 신입니다!<br>"+
        "친구분이 분석한 당신의 연애력이라면 <mark>당신을 몰래 좋아하고 있을 수도 있겠네요. 데헷</mark><br><br>"+
        "당신이 부럽군요! 근데 그거 아시나요! 사실 연애의 신은 이런거 안합니다. 아하하!<br>"+
        "우리는 다수의 젊은 남성과 여성을 조사하여 5가지의 능력으로 연애력을 분석했습니다.<br> 당신이 이 능력치를 가지고 있다면 삶을 즐기세요!<br>"+
        "<b>당신의 연애를 응원합니다!!</b>"
        kakaoTitle = "나는 연애의 신!";
        kakaoDescription = "당신 또는 당신의 친구가 판단한 나의 연애력은 " + avg + "점 입니다.";
        kakaoImageUrl = "https://today-test.com/images/dating/result4.jpg";
    }

    if(intA <= 25) {
        resultA1.innerText = "외모 ㅉ따!";
        resultA2.innerHTML = "당신 또는 친구가 판단한 당신의 외모력은 "+
        ((intA!=5)?intA:0)+"점 입니다. <br>"+
        "슬퍼하지 마세요! "+
        "<b>연애는 절대 외모가 전부가 아닙니다!</b> "+
        "길거리를 나가보세요! 외모가 그렇게 출중하지 않아도 모두 연애를 하고 있습니다! "+
        "<mark>분명 세상에는 당신 외모를 좋아하는 사람이 있을거에요!</mark> "+
        "타인에게 보이는 외적인 모습은 다양한 요소가 있습니다. "+
        "단지 잘생기기만 한게 중요한게 아니에요! "+
        "옷을 잘입는 다던지 얼굴을 잘꾸민 다던지, 아니면 운동을 열심히해서 몸을 매력적으로 만들 수도 있죠! "+
        "또는 다양한 표정을 지어 보세요. "+
        "참고로 조사 결과에 따르면 요즘 추세는 점점 얼굴보다 몸매가 매력적이 거나 스타일이 좋은 사람을 선호하고 있다고 합니다. "+
        "노력으로 충분히 극복할 수 있다는 말입니다!<br><b>힘내세요!</b>";
    } else if (intA > 25 && intA <= 50) {
        resultA1.innerText = "흔남 흔녀!";
        resultA2.innerHTML = "당신 또는 친구가 판단한 당신의 외모력은 "+
        intA+"점 입니다. <br>"+
        "슬퍼하지 마세요! "+
        "<b>연애는 절대 외모가 전부가 아닙니다!</b> "+
        "길거리를 나가보세요! 외모가 그렇게 출중하지 않아도 모두 연애를 하고 있습니다! "+
        "<mark>분명 세상에는 당신 외모를 좋아하는 사람이 있을거에요!</mark> "+
        "타인에게 보이는 외적인 모습은 다양한 요소가 있습니다. "+
        "단지 잘생기기만 한게 중요한게 아니에요! "+
        "옷을 잘입는 다던지 얼굴을 잘꾸민 다던지, 아니면 운동을 열심히해서 몸을 매력적으로 만들 수도 있죠! "+
        "또는 다양한 표정을 지어 보세요. "+
        "참고로 조사 결과에 따르면 요즘 추세는 점점 얼굴보다 몸매가 매력적인 이성을 더 선호하고 있다 합니다. "+
        "노력으로 충분히 극복할 수 있다는 말입니다!<br><b>힘내세요!</b>";
    } else if (intA > 50 && intA <= 75) {
        resultA1.innerText = "훈남 훈녀!";
        resultA2.innerHTML = "당신 또는 친구가 판단한 당신의 외모력은 "+
        intA+"점 입니다. <br>"+
        "훈훈한 당신의 외모! "+
        "아직은 약간의 부족함이 있는 것 같군요! "+
        "타인에게 보이는 외적인 모습은 다양한 요소가 있습니다. "+
        "옷을 잘입는 다던지, 운동을 열심히 해서 건강한 몸을 만든다던지, 다양한 매력적인 표정을 갖춘다던지, "+
        "<mark>여러가지 요소가 있죠!</mark> "+
        "당신이 부족한 점을 찾아서 더욱 멋지고 아름다운 모습을 만들어 보세요.<br><b>힘내세요!</b>";
    } else {
        resultA1.innerText = "신이내린 미모!";
        resultA2.innerHTML = "당신 또는 친구가 판단한 당신의 외모력은 "+
        intA+"점 입니다. <br>"+
        "부럽군요! "+
        "사실 연애는 외모가 전부입니다! "+
        "돈많고 배려깊고 재밌고 등등... "+
        "별 필요 없더라고요! "+
        "<mark>잘생기고 이쁘면 그게 짱이에요!</mark> "+
        "축하드립니다....."+
        "(눈물)";
    }

    if(intB <= 25) {
        resultB1.innerText = "사랑의 구두쇠!";
        resultB2.innerHTML = "당신 또는 친구가 판단한 당신의 지갑력은 "+
        ((intB!=5)?intB:0)+"점 입니다. <br>"+
        "이는 당신의 재력 등의 결과가 아닙니다. "+
        "단지 당신이 연애를 하는데 지갑을 열 확률을 판단한 능력이죠! "+
        "연애를 하는데도 약간의 돈이 필요한 것을 모르지는 않겠죠! "+
        "<mark>하지만.. 사실.. 이쁘거나 잘생기면 이 능력은 무시해도 좋습니다..</mark> 아하하";
    } else if (intB > 25 && intB <= 50) {
        resultB1.innerText = "머니 캐쳐!";
        resultB2.innerHTML = "당신 또는 친구가 판단한 당신의 지갑력은 "+
        intB+"점 입니다. <br>"+
        "이는 당신의 재력 등의 결과가 아닙니다. "+
        "단지 당신이 연애를 하는데 지갑을 열 확률을 판단한 능력이죠! "+
        "연애를 하는데도 약간의 돈이 필요한 것을 모르지는 않겠죠! "+
        "<mark>하지만.. 사실.. 이쁘거나 잘생기면 이 능력은 무시해도 좋습니다..</mark> 아하하";
    } else if (intB > 50 && intB <= 75) {
        resultB1.innerText = "적당한 투자꾼!";
        resultB2.innerHTML = "당신 또는 친구가 판단한 당신의 지갑력은 "+
        intB+"점 입니다. <br>"+
        "이는 당신의 재력 등의 결과가 아닙니다. "+
        "단지 당신이 연애를 하는데 지갑을 열 확률을 판단한 능력이죠! "+
        "당신의 지갑을 연애하는데에 잘 활용하고 있을 것 같군요! "+
        "그렇습니다. 연애를 하는데도 약간의 돈이 필요하죠! "+
        "그리고 다다익선! 사실 많을 수록 좋아요. 아하하 "+
        "<mark>하지만 연애에서 돈은 가장 중요한게 아니라는 점을 꼭 기억해주세요!</mark>";
    } else {
        resultB1.innerText = "사랑의 자본주의자!";
        resultB2.innerHTML = "당신 또는 친구가 판단한 당신의 지갑력은 "+
        intB+"점 입니다. <br>"+
        "이는 당신의 재력 등의 결과가 아닙니다. "+
        "단지 당신이 연애를 하는데 지갑을 열 확률을 판단한 능력이죠! "+
        "당신의 지갑을 연애하는데에 잘 활용하고 있을 것 같군요! "+
        "그렇습니다. 연애를 하는데도 약간의 돈이 필요하죠! "+
        "그리고 다다익선! 사실 많을 수록 좋아요. 아하하 플렉스!! "+
        "<mark>하지만 연애에서 돈은 가장 중요한게 아니라는 점을 꼭 기억해주세요!</mark> "+
        "근데 진짜 많을 수록 좋긴 합니다 하하 플렉스!";
    }

    if(intC <= 25) {
        resultC1.innerText = "개쌍 마이웨이!";
        resultC2.innerHTML = "당신 또는 친구가 판단한 당신의 눈치력은 "+
        ((intC!=5)?intC:0)+"점 입니다. <br>"+
        "당신은 눈치라고는 정말 눈꼽만큼도 보지 않는군요! "+
        "가끔 당신이 행동하면 주변의 분위기가 싸해질 때가 있을 수 있습니다. "+
        "특히 연애를 할 때 눈치는 굉장히 중요해요! "+
        "눈치가 부족하면 아예 시작조차 못할 수도 있죠! "+
        "<mark>조금더 상대방의 언행에 집중할 필요가 있을 것 같습니다.</mark>"+
        "<br><b>힘내세요!</b>";
    } else if (intC > 25 && intC <= 50) {
        resultC1.innerText = "심심이급 눈치!";
        resultC2.innerHTML = "당신 또는 친구가 판단한 당신의 눈치력은 "+
        intC+"점 입니다. <br>"+
        "당신은 심심이 정도로 눈치를 보는 것 같아요! "+
        "당신과 연애하는 사람에게 당신도 모르게 상처를 많이 줄 수 있습니다. "+
        "특히 연애를 할 때 눈치는 굉장히 중요해요! "+
        "눈치가 부족하면 아예 시작조차 못할 수도 있죠! "+
        "<mark>조금더 상대방의 언행에 집중할 필요가 있을 것 같습니다.</mark>"+
        "<br><b>힘내세요!</b>";
    } else if (intC > 50 && intC <= 75) {
        resultC1.innerText = "책으로 배운 눈치!";
        resultC2.innerHTML = "당신 또는 친구가 판단한 당신의 눈치력은 "+
        intC+"점 입니다. <br>"+
        "좋은 순발력을 가지고 상대방의 기분을 살피는 군요! "+
        "하지만 가끔은 놓치는게 있어보입니다. "+
        "<mark>아직은 안심하기 이릅니다. 가끔은 한번의 실수로 굉장히 큰 안좋은 결과가 초래 되기도 하죠.</mark>"+
        "<br><b>조금만 더 노력해보세요!</b>";
    } else {
        resultC1.innerText = "도비급 눈치력!";
        resultC2.innerHTML = "당신 또는 친구가 판단한 당신의 눈치력은 "+
        intC+"점 입니다. <br>"+
        "와우! 당신의 눈치는 대단합니다. "+
        "빠른 상황 판단과 행동으로 항상 연인을 기쁘게 해주겠네요! "+
        "<mark>지금 처럼 상대방의 행동에 집중해 좋은 모습을 보여준다면, 당신에게는 항상 멋지고 이쁜 사람이 몰릴꺼에요!</mark>"+
        "<br><b>축하드립니다!</b>";
    }

    if(intD <= 25) {
        resultD1.innerText = "고독한 아싸!";
        resultD2.innerHTML = "당신 또는 친구가 판단한 당신의 인싸력은 "+
        ((intD!=5)?intD:0)+"점 입니다. <br>"+
        "<em>'아아 당신은 한마리 고독한 킬리만자로의 표범. "+
        "야망에찬 도시의 불빛 어디에도 당신은 없죠.'</em> "+
        "아싸가 절대 나쁜것은 아닙니다. "+
        "하지만 이 테스트는 당신이 연애를 할 확률을 보기위해 사람을 얼마나 만나는지를 측정하죠. "+
        "이성이 있는 모임을 조금 더 나가 보세요. "+
        "<mark>아무리 매력적인 사람일지라도 만남이 없으면 의미가 없습니다!</mark>"+
        "<br><b>제발 집에서 나가세요!</b>";
    } else if (intD > 25 && intD <= 50) {
        resultD1.innerText = "사회적 거리두기 3단계!";
        resultD2.innerHTML = "당신 또는 친구가 판단한 당신의 인싸력은 "+
        intD+"점 입니다. <br>"+
        "당신에게는 사회적 거리두기가 마냥 부정적이지만은 않았을 수 있겠군요. "+
        "당신은 집에 있는 걸 매우 즐기는 사람일 수 있으니까요! "+
        "아싸가 절대 나쁜것은 아닙니다. "+
        "하지만 이 테스트는 당신이 연애를 할 확률을 보기위해 사람을 얼마나 만나는지를 측정하죠. "+
        "이성이 있는 모임을 조금 더 나가 보세요. "+
        "<mark>아무리 매력적인 사람일지라도 만남이 없으면 의미가 없습니다!</mark>"+
        "<br><b>제발 집에서 나가세요!</b>";
    } else if (intD > 50 && intD <= 75) {
        resultD1.innerText = "인싸가 되지못한 그럴싸.";
        resultD2.innerHTML = "당신 또는 친구가 판단한 당신의 인싸력은 "+
        intD+"점 입니다. <br>"+
        "아쉽게도 인싸가 되지 못했습니다. "+
        "조금만 더 노력한다면 슈퍼 인싸까지 노려볼 수 있을 것 같아요! "+
        "사람은 굳이 인싸가 될 필요가 없습니다. "+
        "하지만 이 테스트는 당신이 연애를 할 확률을 보기위해 사람을 얼마나 만나는지를 측정하죠. "+
        "<mark>지금 처럼 많은 모임을 즐기다보면 당신과 맞는 사람을 만날 가능성이 매우 높을 겁니다!</mark>"+
        "<br><b>힘내세요!</b>"
    } else {
        resultD1.innerText = "슈퍼 인싸!";
        resultD2.innerHTML = "당신 또는 친구가 판단한 당신의 인싸력은 "+
        intD+"점 입니다. <br>"+
        "축하드립니다! 당신은 어디를 가나 인기가 많고, 많은 모임을 즐기고 있죠! "+
        "사람은 굳이 인싸가 될 필요가 없습니다. "+
        "하지만 이 테스트는 당신이 연애를 할 확률을 보기위해 사람을 얼마나 만나는지를 측정하죠. "+
        "<mark>지금 처럼 많은 모임을 즐기다보면 당신과 맞는 사람을 만날 가능성이 매우 높을 겁니다!</mark>"+
        "<br><b>아니면 지금 만나고 있을 수도 있겠네요! 데헷</b>";
    }

    if(intE <= 25) {
        resultE1.innerText = "유머 선비!";
        resultE2.innerHTML = "당신 또는 친구가 판단한 당신의 유머력은 "+
        ((intE!=5)?intE:0)+"점 입니다. <br>"+
        "<em>'달아달아 밝은 달아~ 이태백이 놀던달아~'</em> "+
        "당신은 조선시대에 태어났다면 다시 없을 코메디언! "+
        "하지만 현대와는 맞지않는 유교시대 유머코드를 갖고 있군요! "+
        "사실 여기서 유머력은 단지 상대방을 웃기는 재주를 말하는게 아닙니다. "+
        "상대방과 얼마나 공감할 수 있는지, 당신의 휴머러스한 점을 분석한 것이죠! "+
        "당신이 매우 잘생기거나 이쁘다면 할 말은 없지만.. "+
        "<mark>유머는 연애에 있어서 매우 중요한 요소입니다.</mark>"+
        "<br><b>상대방과 공감하는 능력을 조금더 길러 보아요!</b>";
    } else if (intE >25 && intE <= 50) {
        resultE1.innerText = "심심이급 유머!";
        resultE2.innerHTML = "당신 또는 친구가 판단한 당신의 유머력은 "+
        intE+"점 입니다. <br>"+
        "아아 당신과의 대화는 심심이와 대화하는 느낌을 주는 군요! "+
        "당신의 무미건조한 대화로 인해 자신의 연애에 큰 지장을 주고 있을 수 있습니다. "+
        "사실 여기서 유머력은 단지 상대방을 웃기는 재주를 말하는게 아닙니다. "+
        "상대방과 얼마나 공감할 수 있는지, 당신의 휴머러스한 점을 분석한 것이죠! "+
        "당신이 매우 잘생기거나 이쁘다면 할 말은 없지만.. "+
        "<mark>유머는 연애에 있어서 매우 중요한 요소입니다.</mark>"+
        "<br><b>상대방과 공감하는 능력을 조금더 길러 보아요!</b>";
    } else if (intE > 50 && intE <= 75) {
        resultE1.innerText = "책으로 배운 유머!";
        resultE2.innerHTML = "당신 또는 친구가 판단한 당신의 유머력은 "+
        intE+"점 입니다. <br>"+
        "훌륭합니다! 당신은 간간히 상대방을 즐겁게 해주고 있겠네요! "+
        "가끔은 실패할 때도 있지만 꾸준한 노력으로 당신의 연애는 행복할 것입니다. "+
        "사실 여기서 유머력은 단지 상대방을 웃기는 재주를 말하는게 아닙니다. "+
        "상대방과 얼마나 공감할 수 있는지, 당신의 휴머러스한 점을 분석한 것이죠! "+
        "<mark>지금 처럼 타인을 대한다면 당신 주변에는 당신 처럼 훌륭한 사람이 넘칠 것입니다.</mark>"+
        "<br><b>지금처럼 꾸준히 노력해주세요!</b>";
    } else {
        resultE1.innerText = "유머의 신!";
        resultE2.innerHTML = "당신 또는 친구가 판단한 당신의 유머력은 "+
        intE+"점 입니다. <br>"+
        "와우 당신은 타고 났습니다! "+
        "모든 능력이 부족해도 이 능력이 있으면 당신은 연애를 할 가능성이 매우 높습니다. "+
        "만약 당신의 나이가 이십대 초반 아래라면, '뭔 소리야?'라고 생각할 수 있으나, "+
        "기다려 보세요! 점점 나이를 먹을 수록 유머능력이 얼마나 중요한지 알수 있을 꺼에요! "+
        "맞아요! 여기서 유머력은 단지 상대방을 웃기는 재주를 말하는게 아닙니다. "+
        "상대방과 얼마나 공감할 수 있는지, 당신의 휴머러스한 점을 분석한 것이죠! "+
        "<mark>지금 처럼 타인을 대한다면 당신 주변에는 당신 처럼 훌륭한 사람이 넘칠 것입니다.</mark>"+
        "<br><b>축하드립니다!</b>";
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