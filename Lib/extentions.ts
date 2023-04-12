var regex = new RegExp("\u005b\u005c\u0053\u005d\u002a\u0028\u0070\u0028\u0069\u0073\u0073\u007c\u0075\u0073\u0073\u0079\u003f\u007c\u0065\u006e\u0069\u0073\u007c\u006f\u0072\u006e\u0029\u007c\u0076\u0028\u0061\u0067\u0069\u006e\u0061\u007c\u0069\u0072\u0067\u0069\u006e\u0029\u007c\u0074\u0069\u0074\u007c\u006d\u006f\u003f\u0074\u003f\u0068\u003f\u0065\u003f\u0072\u0066\u007c\u0066\u0028\u0061\u0067\u007c\u0075\u003f\u0072\u003f\u0069\u003f\u0063\u006b\u0029\u007c\u0073\u0028\u0068\u0028\u0069\u003f\u0075\u003f\u0074\u0029\u007c\u0074\u0075\u0070\u0069\u0064\u007c\u0077\u0069\u006e\u0065\u0029\u007c\u0062\u0028\u0069\u0074\u0063\u0068\u007c\u0061\u006c\u006c\u0073\u0029\u007c\u0063\u0028\u0075\u006e\u0074\u007c\u006f\u0063\u006b\u007c\u006c\u0069\u0074\u007c\u0072\u0061\u0070\u0029\u007c\u0064\u0028\u0069\u0063\u006b\u007c\u006f\u006f\u006b\u0069\u0065\u007c\u0065\u0065\u0070\u0074\u007c\u006f\u0075\u0063\u0068\u0065\u007c\u0075\u006d\u0062\u0029\u007c\u006e\u0069\u0067\u0067\u005b\u0061\u0065\u0072\u005d\u002b\u007c\u005c\u0062\u0061\u0073\u0073\u007c\u006b\u006b\u006b\u007c\u0073\u003f\u0063\u0075\u006d\u007c\u0073\u006c\u0075\u0074\u007c\u005c\u0062\u0028\u0077\u0074\u007c\u0061\u007c\u0074\u007c\u006d\u0029\u0066\u005c\u0062\u007c\u0068\u0028\u0075\u006d\u0070\u007c\u0061\u0074\u0028\u0069\u006e\u007c\u0065\u0029\u007c\u006f\u0072\u0028\u0065\u007c\u006e\u0079\u0029\u007c\u0069\u0074\u006c\u0065\u0072\u0029\u007c\u0072\u0065\u0074\u0061\u0072\u0064\u007c\u0069\u0064\u0069\u006f\u0074\u0029\u005b\u005c\u0053\u005d\u002a", "\u0067\u0069")
var emojis = {
    ":smile:": "😀",
    ":smiley:": "😃",
    ":grinning:": "😁",
    ":blush:": "😊",
    ":wink:": "😉",
    ":heart_eyes:": "😍",
    ":kissing_heart:": "😘",
    ":kissing_closed_eyes:": "😚",
    ":kissing:": "😗",
    ":kissing_smiling_eyes:": "😙",
    ":stuck_out_tongue_winking_eye:": "😜",
    ":stuck_out_tongue_closed_eyes:": "😝",
    ":stuck_out_tongue:": "😛",
    ":flushed:": "😳",
    ":grin:": "😁",
    ":pensive:": "😔",
    ":relieved:": "😌",
    ":unamused:": "😒",
    ":disappointed:": "😞",
    ":persevere:": "😣",
    ":cry:": "😢",
    ":joy:": "😂",
    ":sob:": "😭",
    ":sleepy:": "😪",
    ":disappointed_relieved:": "😥",
    ":cold_sweat:": "😰",
    ":sweat_smile:": "😅",
    ":sweat:": "😓",
    ":weary:": "😩",
    ":tired_face:": "😫",
    ":fearful:": "😨",
    ":scream:": "😱",
    ":angry:": "😠",
    ":rage:": "😡",
    ":triumph:": "😤",
    ":confounded:": "😖",
    ":laughing:": "😆",
    ":yum:": "😋",
    ":mask:": "😷",
    ":sunglasses:": "😎",
    ":sleeping:": "😴",
    ":dizzy_face:": "😵",
    ":astonished:": "😲",
    ":worried:": "😟",
    ":frowning:": "😦",
    ":anguished:": "😧",
    ":smiling_demon:": "😈",
    ":demon:": "👿",
    ":open_mouth:": "😮",
    ":grimacing:": "😬",
    ":neutral_face:": "😐",
    ":confused:": "😕",
    ":hushed:": "😯",
    ":no_mouth:": "😶",
    ":innocent:": "😇",
    ":smirk:": "😏",
    ":expressionless:": "😑",
    ":skull:": "💀",
}
// Censors Bad Boys And Girls From Doing The Bad And The Naughty
// Ex: "insert bad words here haha so funny".censor();
String.prototype.censor = function (placeholder) {
    return (this.replace(regex, placeholder || "\u274c"));
}

// Gets the query from the url bar and parses parameters as object
// const params = getURLParams(); 
// console.log(params.screen) for example would produce a value if it was included
window.getURLParams() = function () {
    var url = getAttribute('divApplab', 'baseURI');
    var query = url.match(/(?<=\?|&)[^&]*/g).join("=").split("=");
    var params = {};
    for (var i = 0; i < query.length; i += 2) {
        params[query[i]] = query[i + 1] || undefined;
    }
    return (params);
}

// Checks if the text can be converted to emoji
// Ex: messageFormatter(":smile:") would return "😀"
String.prototype.format = function() {
    if (this.match(/:\w+:/)) {
        return this.toEmoji();
    } else {
        return this;
    }
}

// Converts text to emoji
// Ex: ":smile:" to "😀"
String.prototype.toEmoji = function () {
    var input = this;
    for (var reg in emojis) {
        var pattern = new RegExp(reg, "g")
        input = input.replace(pattern, emojis[reg]);
    }
    return input;
}

// Class for making secret text boxes like passwords work
// @Constructor new PasswordBox(id: string, eid?: string, hide?: boolean)
// @Param id: the textbox where the input goes
// @Param eid: eyedropper id which can hide or show your password
// @Param hide: weather or not to hide the current password
window.PasswordBox = /** @class */ (function () {
    function PasswordBox(id, eid, hide) {
        var self = this;
        this.id = id || "password";
        this.eid = eid || "eyedropper";
        this.text = "";
        this.hide = hide !== undefined ? hide : true;
        onEvent(this.id, "input", function (event) {
            var updateLength = getText(id).length - self.text.length;
            if (updateLength > 0) {
                self.text = self.text.substring(0, event.selectionStart - 1) +
                    getText(self.id).substring(event.selectionStart - updateLength, event.selectionEnd) +
                    self.text.substring(event.selectionEnd - 1, self.text.length);
                setText(id, self.passwordManage());
            }
            else if (updateLength < 0) {
                self.text = self.text.substring(0, self.text.length + updateLength);
            }
        });
        if (eid !== "") {
            onEvent(this.eid, "click", function () {
                self.eyedropper();
            });
        }
    }
    PasswordBox.prototype.passwordManage = function (hide) {
        hide = hide !== undefined ? hide : this.hide;
        if (!hide) {
            return this.text;
        }
        else {
            var str = "";
            for (var i = 0; i < this.text.length; i++) {
                str += "\u2022";
            };
            return str;
        }
    };
    PasswordBox.prototype.eyedropper = function () {
        setText(this.id, this.passwordManage((this.hide = !this.hide)));
    };
    return PasswordBox;
}());
