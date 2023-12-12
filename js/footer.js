Kakao.init('0e4fcd913762bd2a1016dc2dc2798451');

function kakao() {
   Kakao.Link.sendCustom({
      templateId : 32472
   });
}
function twitter() {
   let text = "오늘의 테스트! 나도하고 남도하는 나란 사람 분석하기!";
   let hashtags = "성격유형분석,mbti,연애,꼰대,직업유형"
   let link = "https://twitter.com/share?"+
  "url=https://today-test.com/&"+
  "via=twitterdev&"+
  "hashtags="+hashtags+"&"+
  "text="+text;
   window.open(link);
}
function facebook() {
   let url = "https://today-test.com/";
   let encodeUrl = encodeURIComponent(url);
   let facebook = "https://www.facebook.com/sharer/sharer.php?u=";
   let link = facebook + encodeUrl;
   window.open(link);
}
function naver() {
   let url = encodeURI(encodeURIComponent("https://today-test.com/"));
   let title = encodeURI("오늘의 테스트!  나도하고 남도하는 나란 사람 분석하기!");
   let link = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
   window.open(link);
}