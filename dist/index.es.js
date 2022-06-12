import React from 'react';

var cardRegex = {
    "Visa": /^4[0-9]{12}(?:[0-9]{3})?$/,
    "Master Card": /^5[1-5][0-9]{14}$/,
    "American Express": /^3[47][0-9]{13}$/,
    "Diners": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    "Discover": /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    "JCB": /^(?:2131|1800|35\d{3})\d{11}$/,
    "Union Pay": /^(62|88)\d{14}$/,
    "Maestro": /^(5018|5020|5038|6304|6759|676[1-3])\d{10,17}$/,
    "ELO": /^((((636368)|(438935)|(504175)|(451416)|(45763[1-4])|(4011[0-9][0-9])|(3528[0-9][0-9])|(6304[0-9][0-9])|(6759[0-9][0-9])|(6761[0-9][0-9])|(6334[0-9][0-9])|(6334[0-9][0-9])|(6759[0-9][0-9])))\d{0,10})$/,
    "Hiper Card": /^(606282|3841[0-9]{5})\d{0,10}$/,
    "Visa Electron": /^(4026|417500|4405|4508|4844|4913|4917)\d{12}$/,
    "Dinners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    "Discovers Platinum": /^6(?:011|5[0-9]{2})[0-9]{12}$/
};
function useCardType(cardNumber) {
    if (typeof cardNumber !== 'string') {
        throw new Error('cardNumber must be a string');
    }
    var _a = React.useState('Unknown'), cardType = _a[0], setCardType = _a[1];
    var _b = React.useState([]), errors = _b[0], setErrors = _b[1];
    React.useEffect(function () {
        for (var _i = 0, _a = Object.entries(cardRegex); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value.test(cardNumber)) {
                setCardType(key);
                break;
            }
        }
    }, [cardNumber]);
    if (cardType === 'Unknown') {
        setErrors(['Invalid card number']);
    }
    return [cardType, errors];
}

function useValidateEmail(email) {
    if (typeof email !== 'string') {
        throw new Error('email must be a string');
    }
    var _a = React.useState(false), isValid = _a[0], setIsValid = _a[1];
    React.useEffect(function () {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setIsValid(re.test(String(email).toLowerCase()));
    }, [email]);
    return isValid;
}

function useRandomEmails(count) {
    if (count === void 0) { count = 5; }
    if (typeof count !== 'number') {
        throw new Error('count must be a number');
    }
    var _a = React.useState([]), emails = _a[0], setEmails = _a[1];
    React.useEffect(function () {
        var randomEmails = [];
        for (var i = 0; i < count; i++) {
            randomEmails.push(generateEmail());
        }
        setEmails(randomEmails);
    }, [count]);
    return emails;
}
function generateEmail() {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var domains = [
        'gail.com',
        'ohayo.com',
        'mailnot.com',
        'lao.com',
        'casto.net',
        'nms.com',
    ];
    var string = '';
    for (var i = 0; i < 15; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return string + '@' + domains[Math.floor(Math.random() * domains.length)];
}

function generateColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function useRandomColors(count) {
    if (count === void 0) { count = 5; }
    if (typeof count !== 'number') {
        throw new Error('Count must be a number');
    }
    var _a = React.useState([]), colors = _a[0], setColors = _a[1];
    React.useEffect(function () {
        var randomColors = [];
        for (var i = 0; i < count; i++) {
            randomColors.push(generateColor());
        }
        setColors(randomColors);
    }, [count]);
    return colors;
}

export { useCardType, useRandomColors, useRandomEmails, useValidateEmail };
//# sourceMappingURL=index.es.js.map
