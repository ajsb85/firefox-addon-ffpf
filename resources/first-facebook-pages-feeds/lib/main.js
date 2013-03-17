exports.main = function() {

var facebook_https = require("page-mod").PageMod({
include: 'https://www.facebook.com/', // this script will works only on this website
contentScriptWhen: 'start',
contentScript: 'window.location.href = "https://www.facebook.com/pages/feed"'
});

var facebook_http = require("page-mod").PageMod({
include: 'http://www.facebook.com/', // this script will works only on this website
contentScriptWhen: 'start',
contentScript: 'window.location.href = "https://www.facebook.com/pages/feed"'
});

};