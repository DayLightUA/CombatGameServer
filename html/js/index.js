
window.getElementById("regBtn").onclick = initRegForm;
window.getElementById("logBtn").onclick = initLogin;








function initLogin() {
    var login = window.getElementById("loginField").getValue();
    var password = window.getElementById("passwordField").get;
}
function initRegForm() {
    var centerBar = window.getElementById("centerBar");
    centerBar.clear();
    centerBar.add('<div id="loginNregister">\n' +
        ' <form id="registration" action="">\n' +
        '  <label for="registration" style="alignment: center"><h3>Реєстрація</h3></label>\n' +
        '  <div class="loginForm"><label>Прізвище:</label> <input id="surName" type="text"></div>\n' +
        '  <div class="loginForm"><label>Ім\'я:</label> <input id="name" type="text"></div>\n' +
        '  <div class="loginForm"><label>Ел.пошта:</label> <input id="eMale" type="text"></div>\n' +
        '  <div class="loginForm"><label>Пароль:</label><input id="pass1" type="password"></div>\n' +
        '  <div class="loginForm"><label>Пароль ще раз:</label><input id="pass2" type="password"></div>\n' +
        '  <button id="registrationBtn">Зареєструватись</button> \n' +
        ' </form>\n' +
        '</div>');
    var registrationBtn = centerBar.getElementById("registrationBtn");
    registrationBtn.onclick=registration;
}
function registration() {
    var pass2 = window.getElementById("pass2");
    if (window.getElementById("pass1").getValue()== pass2.getValue()){
        var sender = new Sender();
        sender.sent([
            surName:window.getElementById("surName").getValue(),
            name:window.getElementById("name").getValue(),
            eMale:window.getElementById("eMale").getValue(),
            password:pass2.getValue(),
        ]);
    } else {
        pass2.background = "red";
    }

}



