setStyle("divApplab", "background-color: black;");
setStyle("__index.signup", "box-shadow: 2px 2px rgba(0,0,0,0.25);");
setStyle("__index.login", "box-shadow: 2px 2px rgba(0,0,0,0.25);")

var client = {
    info: {
        CDO_ID: getUserId(),
    },
    session: {
        startStamp: window.getTime() || 0,
        dateStart: Date().toString(),
    },
    currentScreen: "__index",
};

onEvent("__index.signup", "click", function () {
    changeScreen("screen1");
});

function changeScreen(newScreen) {
  let oldScreen = client.currentScreen;
  setStyle(oldScreen, "transform: translateX(-320px) rotate(-20deg); opacity: 0; transition: 0.45s;");
  setTimeout(function() {
    setStyle(newScreen, "transform: translateX(320px) rotate(20deg); opacity: 0; transition: 0s;");
    setScreen(newScreen);
    setTimeout(function(){
      client.currentScreen = newScreen;
      setStyle(newScreen, "transform: translateX(0px) rotate(0deg); opacity: 1; transition: 0.45s;");
    }, 150);
  }, 450);
}