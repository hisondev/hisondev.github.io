window.onload = function () {
    var testName = getParameterByName("name");
    var nameBox = document.getElementById("nameBox");
    nameBox.innerText = testName;

    var a = getParameterByName("a");
    var b = getParameterByName("b");
    var c = getParameterByName("c");
    var d = getParameterByName("d");
    var e = getParameterByName("e");
    var f = getParameterByName("f");
    var g = getParameterByName("g");
    var h = getParameterByName("h");
    
    var aText = document.getElementById("A");
    var bText = document.getElementById("B");
    var cText = document.getElementById("C");
    var dText = document.getElementById("D");
    var eText = document.getElementById("E");
    var fText = document.getElementById("F");
    var gText = document.getElementById("G");
    var hText = document.getElementById("H");
    var ABCDEFGH = "";

    aText.innerText = a;
    bText.innerText = b;
    cText.innerText = c;
    dText.innerText = d;
    eText.innerText = e;
    fText.innerText = f;
    gText.innerText = g;
    hText.innerText = h;

    var barAB = document.getElementById("bar_AB");
    var barCD = document.getElementById("bar_CD");
    var barEF = document.getElementById("bar_EF");
    var barGH = document.getElementById("bar_GH");

    var rcAB = document.getElementById("r_c_AB");
    var lcAB = document.getElementById("l_c_AB");
    var rcCD = document.getElementById("r_c_CD");
    var lcCD = document.getElementById("l_c_CD");
    var rcEF = document.getElementById("r_c_EF");
    var lcEF = document.getElementById("l_c_EF");
    var rcGH = document.getElementById("r_c_GH");
    var lcGH = document.getElementById("l_c_GH");

    var barABPosition = ((Number)(b)-Number(a))*0.25;
    barAB.style.left = barABPosition+"%";
    var barCDPosition = (Number(d)-Number(c))*0.25;
    barCD.style.left = barCDPosition+"%";
    var barEFPosition = (Number(f)-Number(e))*0.25;
    barEF.style.left = barEFPosition+"%";
    var barGHPosition = (Number(h)-Number(g))*0.25;
    barGH.style.left = barGHPosition+"%";

    function fontChange(element) {
        element.style.fontWeight = "bold";
        element.style.fontSize = "1.1em";
    }

    if(Number(a)>Number(b)) {
        fontChange(aText);
        fontChange(rcAB);
        ABCDEFGH += "A";
    } else {
        fontChange(bText);
        fontChange(lcAB);
        ABCDEFGH += "B";
    }
    if(Number(c)>Number(d)) {
        fontChange(cText);
        fontChange(rcCD);
        ABCDEFGH += "C";
    } else {
        fontChange(dText);
        fontChange(lcCD);
        ABCDEFGH += "D";
    }
    if(Number(e)>Number(f)) {
        fontChange(eText);
        fontChange(rcEF);
        ABCDEFGH += "E";
    } else {
        fontChange(fText);
        fontChange(lcEF);
        ABCDEFGH += "F";
    }
    if(Number(g)>Number(h)) {
        fontChange(gText);
        fontChange(rcGH);
        ABCDEFGH += "G";
    } else {
        fontChange(hText);
        fontChange(lcGH);
        ABCDEFGH += "H";
    }

    var imgBox = document.querySelector(".img_banner");
    imgBox.style.backgroundImage = "url(/images/personality/result/" + ABCDEFGH + ".jpg)";

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