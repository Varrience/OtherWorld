var url = getAttribute('divApplab', 'baseURI');
var src = url.substring(0, 83);
var source = "https://raw.githubusercontent.com/Colack/OtherWorld";
var form = null;
if (!(url.indexOf('view') > -1 || url.indexOf('edit') > -1)) {
    setStyle("divApplab", "\n    background-color: black; \n    position: fixed; \n    top: 0px; \n    left: 0px; \n    width: 100%; \n    height: 100%; \n    z-index: 10000; \n    background-image:url('https://thumbs.gfycat.com/ImpressiveDrearyEagle-size_restricted.gif');\n    background-position: center;\n    background-size: cover;\n    ");
}
else {
    setStyle("divApplab", "\n    background-color: black; \n    ");
}
deleteElement("screen1");
innerHTML("divApplab", "\n<h1 style=\"font-size:10vh; background-color: grey; color: orange; border: 10px solid gray; box-sizing: border-box; margin-top: 0px; text-align: center;\">\nOtherWorld\n<!-- Menu Buttons-->\n <p style=\"text-align: center; padding-top: 2vh; align-items: center\">\n  <button id=\"homebtn\" style=\"font-size: 20px; border-radius: 20px; width: 25%; height: 50px;\">Home</button>\n  <button id=\"aboutbtn\" style=\"font-size: 20px; border-radius: 20px; width: 25%; height: 50px;\">About</button>\n  <button id=\"legalbtn\" style=\"font-size: 20px; border-radius: 20px; width: 25%; height: 50px;\">Legal</button>\n </p>\n</h1>\n<!-- <img src=\"https://thumbs.gfycat.com/ImpressiveDrearyEagle-size_restricted.gif\" style=\"position: fixed; top: 0px\"><img> -->\n<div id=\"contentLogin\">\n<p style=\"text-align: center\">\n <label style=\"color: white; font-size: 25px\">Username:</label>\n <input type=\"text\" id=\"username\" name=\"username\" style=\"font-size: 25px; width:50%; height:10%\"><br></input>\n <label style=\"color: white; font-size: 25px\">Password:</label>\n <input id=\"password\" name=\"password\" style=\"font-size: 25px; width: 50%; height: 10%\"><br>\n </input>\n</p>\n<div style=\"display: flex; justify-content: center;\">\n <a href=".concat(src, "?screen=\"home\">\n  <button id=\"signup\" style=\"font-size: 30px; width: 60vw; justify-content: center; margin: 0 auto\">Sign Up</button>\n </a>\n</div>\n<p style=\"color:white\">Welcome!<br />This site is a work in progress.</p>\n</div>\n"));
startWebRequest("".concat(source, "/main/Lib/extentions.js"), function (s, t, d) {
    if (s === 200 && t === 'text/plain') {
        eval(d);
        form = new Form("password", "");
    }
});
onEvent("homebtn", "click", function () {
    innerHTML("contentLogin", "\n    <p style=\"text-align: center\">\n     <label style=\"color: white; font-size: 25px\">Username:</label>\n     <input type=\"text\" id=\"username\" name=\"username\" style=\"font-size: 25px; width:50%; height:10%\"><br></input>\n     <label style=\"color: white; font-size: 25px\">Password:</label>\n     <input id=\"password\" name=\"password\" style=\"font-size: 25px; width: 50%; height: 10%\"><br>\n      </input>\n    </p>\n    <div style=\"display: flex; justify-content: center;\">\n     <a href=".concat(src, "?screen=\"home\">\n      <button id=\"signup\" style=\"font-size: 30px; width: 60vw; justify-content: center; margin: 0 auto\">Sign Up</button>\n     </a>\n    </div>\n "));
    form = form.update();
});
onEvent("aboutbtn", "click", function () {
    // usernameHolder = getText("username") || usernameHolder;
    innerHTML("contentLogin", "\n    <div class=\"textArea\" style=\"background-color: black; color: white; font-size: 4vh; overflow-y: scroll; scrollbar-width: thin; height: 37vh\">\n     This section will contain info necessary about what was put into this app for now\n     it'll just serve as a proof of concept that i can use innerHTML to overide certian aspects\n     of necessary elements by grouping them in a div\n    </div>\n    ");
});
onEvent("legalbtn", "click", function () {
    // usernameHolder = getText("username") || usernameHolder;
    innerHTML("contentLogin", "\n    <div class=\"textArea\" style=\"background-color: black; color: white; font-size: 4vh; overflow-y: scroll; scrollbar-width: thin; height: 37vh\">\n     This section will contain any legal things we may need, including perhaps our TOS about users using this application\n     and perhaps crediting the original creators contributing to this development thus far\n     <br>Creators:<br>\n     &nbsp;@Colack<br>\n     &nbsp;@LGM Productions<br>\n     &nbsp;@Letti<br>\n     &nbsp;@[WUT] Adam<br>\n     &nbsp;@Varrience\n    </div>\n    ");
});
