//Global Functions
var client = {
    info: {
        CDO_ID: getUserId(),
    },
    session: {
        startStamp: window.getTime(),
        dateStart: Date().toString(),
    },
    currentScreen: "__index",
    ranks: {
        banned: "⚠️",
        admin: "🔨",
        mod: "⚒️",
        dev: "🛠️",
        owner: "👑",
    },
};

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
