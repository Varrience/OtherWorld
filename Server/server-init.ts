const generateKey = () => {
    const timeStamp = Date.now();

    var salt = Math.floor(Math.random() * timeStamp);

    const key = ((Math.floor(Math.random() * (timeStamp - salt)) + salt) - (timeStamp + salt)) / 2;

    return key;
}

const encrypt = (str, key) => {
    if (!key) {
        key = generateKey();
    }

    return str.split('').map((char) => {
        return String.fromCharCode(char.charCodeAt(0) + key);
    }).join('');
};

const decrypt = (str, key) => {
    return str.split('').map((char) => {
        return String.fromCharCode(char.charCodeAt(0) - key);
    }).join('');
}