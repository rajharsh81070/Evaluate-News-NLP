const userUrl = require('valid-url');

function validURL(inputText) {
    console.log("::: Running checkForName :::", inputText);

    console.log(userUrl.isWebUri(inputText));
    if (userUrl.isWebUri(inputText)) {
        return true;
    }

    return false;
}

export { validURL }
