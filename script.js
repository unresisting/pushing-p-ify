// Please paste this script into your Discord console (open DevTools)
// Control + Shift + I on Windows machines to toggle DevTools or F12
// pushing p :p
// Send "disable" in Discord to disable it

const prefixes = [
    'pushing :regional_indicator_p:',
    'y'all aint :regional_indicator_p:',
    'im :regional_indicator_p:',
    ':p'
]

const suffixes = [
    'pushing :regional_indicator_p:',
    'y'all aint :regional_indicator_p:',
    'im :regional_indicator_p:',
    ':p'
]

const substitutions = {
    'p': ' :regional_indicator_p: ',
}

const addAffixes = (str) => prefixes[Math.floor(Math.random() * prefixes.length)] + str + suffixes[Math.floor(Math.random() * suffixes.length)];
const substitute = (str) => {
    const replacements = Object.keys(substitutions)
    replacements.forEach((x) => {
        str = str.split(x).join(substitutions[x]);
        str = str.split(x.toUpperCase()).join(substitutions[x]);
    })
    return str
}
const p = (str) => addAffixes(substitute(str))

var storedSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.send = function (data) {
    if (this.__sentry_xhr__.method === "POST" && this.__sentry_xhr__.url.includes("messages") && JSON.parse(data).content != undefined) {
        let message = JSON.parse(data)
        if(message.content === "disable"){
            message.content = "I am part of Andy's script. Your :regional_indicator_p: script has now been disabled. Re-inject to re-enable."
            storedSend.call(this, JSON.stringify(message));
            XMLHttpRequest.prototype.send = storedSend;
        } else {
            console.log(p(message.content))
            message.content = p(message.content)
            storedSend.call(this, JSON.stringify(message));
        }
    } else {
        console.log("Unrelated request or media")
        storedSend.call(this, data);
    }
}