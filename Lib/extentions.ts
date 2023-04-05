const regex = new RegExp("\u005b\u005c\u0053\u005d\u002a\u0028\u0070\u0028\u0069\u0073\u0073\u007c\u0075\u0073\u0073\u0079\u003f\u007c\u0065\u006e\u0069\u0073\u007c\u006f\u0072\u006e\u0029\u007c\u0076\u0028\u0061\u0067\u0069\u006e\u0061\u007c\u0069\u0072\u0067\u0069\u006e\u0029\u007c\u0074\u0069\u0074\u007c\u006d\u006f\u003f\u0074\u003f\u0068\u003f\u0065\u003f\u0072\u0066\u007c\u0066\u0028\u0061\u0067\u007c\u0075\u003f\u0072\u003f\u0069\u003f\u0063\u006b\u0029\u007c\u0073\u0028\u0068\u0028\u0069\u003f\u0075\u003f\u0074\u0029\u007c\u0074\u0075\u0070\u0069\u0064\u007c\u0077\u0069\u006e\u0065\u0029\u007c\u0062\u0028\u0069\u0074\u0063\u0068\u007c\u0061\u006c\u006c\u0073\u0029\u007c\u0063\u0028\u0075\u006e\u0074\u007c\u006f\u0063\u006b\u007c\u006c\u0069\u0074\u007c\u0072\u0061\u0070\u0029\u007c\u0064\u0028\u0069\u0063\u006b\u007c\u006f\u006f\u006b\u0069\u0065\u007c\u0065\u0065\u0070\u0074\u007c\u006f\u0075\u0063\u0068\u0065\u007c\u0075\u006d\u0062\u0029\u007c\u006e\u0069\u0067\u0067\u005b\u0061\u0065\u0072\u005d\u002b\u007c\u005c\u0062\u0061\u0073\u0073\u007c\u006b\u006b\u006b\u007c\u0073\u003f\u0063\u0075\u006d\u007c\u0073\u006c\u0075\u0074\u007c\u005c\u0062\u0028\u0077\u0074\u007c\u0061\u007c\u0074\u007c\u006d\u0029\u0066\u005c\u0062\u007c\u0068\u0028\u0075\u006d\u0070\u007c\u0061\u0074\u0028\u0069\u006e\u007c\u0065\u0029\u007c\u006f\u0072\u0028\u0065\u007c\u006e\u0079\u0029\u007c\u0069\u0074\u006c\u0065\u0072\u0029\u007c\u0072\u0065\u0074\u0061\u0072\u0064\u007c\u0069\u0064\u0069\u006f\u0074\u0029\u005b\u005c\u0053\u005d\u002a", "\u0067\u0069")

// Censors Bad Boys And Girls From Doing The Bad And The Naughty
// Ex: "insert bad words here haha so funny".censor();
String.prototype.censor = function (placeholder?: string) {
    return (this.replace(regex, placeholder || "\u274c"));
}

// Gets the query from the url bar and parses parameters as object
// const params = getURLParams(); 
// console.log(params.screen) for example would produce a value if it was included
window.getURLParams() = function () {
    const url = getAttribute('divApplab', 'baseURI');
    const query = url.match(/(?<=\?|&)[^&]*/g).join("=").split("=");
    let params = {};
    for (let i = 0; i < query.length; i += 2) {
        params[query[i]] = query[i + 1] || undefined;
    }
    return (params);
}

// Checks if the text can be converted to emoji
// Ex: messageFormatter(":smile:") would return "😀"
function messageFormatter(input: String) {
    if (input.match(/:\w+:/)) {
        return toEmoji(input);
    } else {
        return input;
    }
}

// Converts text to emoji
// Ex: ":smile:" to "😀"
function toEmoji(input : String) {
    var emoji = input.replace(/:smile:/g, "😀");
    emoji = emoji.replace(/:smiley:/g, "😃");
    emoji = emoji.replace(/:grinning:/g, "😁");
    emoji = emoji.replace(/:blush:/g, "😊");
    emoji = emoji.replace(/:wink:/g, "😉");
    emoji = emoji.replace(/:heart_eyes:/g, "😍");
    emoji = emoji.replace(/:kissing_heart:/g, "😘");
    emoji = emoji.replace(/:kissing_closed_eyes:/g, "😚");
    emoji = emoji.replace(/:kissing:/g, "😗");
    emoji = emoji.replace(/:kissing_smiling_eyes:/g, "😙");
    emoji = emoji.replace(/:stuck_out_tongue_winking_eye:/g, "😜");
    emoji = emoji.replace(/:stuck_out_tongue_closed_eyes:/g, "😝");
    emoji = emoji.replace(/:stuck_out_tongue:/g, "😛");
    emoji = emoji.replace(/:flushed:/g, "😳");
    emoji = emoji.replace(/:grin:/g, "😁");
    emoji = emoji.replace(/:pensive:/g, "😔");
    emoji = emoji.replace(/:relieved:/g, "😌");
    emoji = emoji.replace(/:unamused:/g, "😒");
    emoji = emoji.replace(/:disappointed:/g, "😞");
    emoji = emoji.replace(/:persevere:/g, "😣");
    emoji = emoji.replace(/:cry:/g, "😢");
    emoji = emoji.replace(/:joy:/g, "😂");
    emoji = emoji.replace(/:sob:/g, "😭");
    emoji = emoji.replace(/:sleepy:/g, "😪");
    emoji = emoji.replace(/:disappointed_relieved:/g, "😥");
    emoji = emoji.replace(/:cold_sweat:/g, "😰");
    emoji = emoji.replace(/:sweat_smile:/g, "😅");
    emoji = emoji.replace(/:sweat:/g, "😓");
    emoji = emoji.replace(/:weary:/g, "😩");
    emoji = emoji.replace(/:tired_face:/g, "😫");
    emoji = emoji.replace(/:fearful:/g, "😨");
    emoji = emoji.replace(/:scream:/g, "😱");
    emoji = emoji.replace(/:angry:/g, "😠");
    emoji = emoji.replace(/:rage:/g, "😡");
    emoji = emoji.replace(/:triumph:/g, "😤");
    emoji = emoji.replace(/:confounded:/g, "😖");
    emoji = emoji.replace(/:laughing:/g, "😆");
    emoji = emoji.replace(/:yum:/g, "😋");
    emoji = emoji.replace(/:mask:/g, "😷");
    emoji = emoji.replace(/:sunglasses:/g, "😎");
    emoji = emoji.replace(/:sleeping:/g, "😴");
    emoji = emoji.replace(/:dizzy_face:/g, "😵");
    emoji = emoji.replace(/:astonished:/g, "😲");
    emoji = emoji.replace(/:worried:/g, "😟");
    emoji = emoji.replace(/:frowning:/g, "😦");
    emoji = emoji.replace(/:anguished:/g, "😧");
    emoji = emoji.replace(/:smiling_imp:/g, "😈");
    emoji = emoji.replace(/:imp:/g, "👿");
    emoji = emoji.replace(/:open_mouth:/g, "😮");
    emoji = emoji.replace(/:grimacing:/g, "😬");
    emoji = emoji.replace(/:neutral_face:/g, "😐");
    emoji = emoji.replace(/:confused:/g, "😕");
    emoji = emoji.replace(/:hushed:/g, "😯");
    emoji = emoji.replace(/:no_mouth:/g, "😶");
    emoji = emoji.replace(/:innocent:/g, "😇");
    emoji = emoji.replace(/:smirk:/g, "😏");
    emoji = emoji.replace(/:expressionless:/g, "😑");
    emoji = emoji.replace(/:skull:/g, "💀");

    return emoji;
}