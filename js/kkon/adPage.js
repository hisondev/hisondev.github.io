var param = location.href.split('?');
var paramList = param[1].split('&');
var alpa = (paramList[0].split('='))[1];
var nextParam = "?"
for (var i=1; i<paramList.length; i++) {
    if(i > 1) nextParam += "&"
    nextParam += paramList[i];
}
window.onload = function() {
    var time;
    let cnt=10;
    document.getElementById('cnt').innerText = cnt;
    clearInterval(time);
    time = setInterval(function adTimer(){
        cnt = cnt - 1;
        if(cnt!=0) {
            document.getElementById('cnt').innerText = cnt;
        } else {
            clearInterval(time);
            location.replace("/kkon/result/result" + alpa + ".html" + nextParam);
        }
    }, 1200);
}

function goInsta() {
    window.open('https://www.instagram.com/bombom_pedia', '_blank'); 
}