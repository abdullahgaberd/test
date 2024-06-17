var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?90257';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
    "backgroundColor":"#1f242d",
    "ctaText":"تواصل معنا",
    "borderRadius":"25",
    "marginLeft": "0",
    "marginRight": "20",
    "marginBottom": "20",
    "ctaIconWATI":true,
    "position":"right"
},
"brandSetting":{
    "brandName":"محمد هشام",
    "brandSubTitle":"Mohamed Hesham",
    "brandImg":"https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    "welcomeText":"مرحبًا، \n لدي سؤال حول",
    "messageText":"لقد قمت بتصفح الموقع، ولدي بعض الأسئلة التي أود أن أطرحها على {{page_title}}",
    "backgroundColor":"#1f242d",
    "ctaText":"تواصل معنا",
    "borderRadius":"25",
    "autoShow":false,
    "phoneNumber":"201026978123"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);