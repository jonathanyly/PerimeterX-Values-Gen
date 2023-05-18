const {N} = require("./pcCreator.js");
const {D} = require("./pcCreator.js");
const md5 = require('md5');


function Me(t, e) {
    for (var n = "", r = 0; r < t.length; r++)
        n += String.fromCharCode(e ^ t.charCodeAt(r));
    return n
}

/**
* 
* 
* @returns returns value looking like this as array ["15265:25;046306632:1","04374;34:157217723;0"]
*/
function createNonPXValue(cls, sts) {
    var firstTimeStamp = sts % 10 + 2
    var secondTimeStamp = sts % 10 + 1
    return [""+Me(cls, firstTimeStamp), ""+Me(cls, secondTimeStamp)]
}

/**
 * 
 * 
 * @returns returns timestamp
 */
 function createPX12280() {
    return Date.now()
}

/**
 * 
 * 
 * @returns returns Date
 */
function createPX11840() {
    return new Date();
}


function createPX11804(useragent, uuid) {
    return N(D(useragent,uuid))
}

function createPX11746(useragent, vid) {
    return N(D(useragent,vid))
}

 function createPX11371(useragent, sid) {
    return N(D(useragent,sid))
}

function createPX12501(vid) {
    const hash = md5(vid);
    return hash

}


function b(t, e) {
    var n = t.length
      , r = e ? Number(e) : 0;
    if (r != r && (r = 0),
    !(r < 0 || r >= n)) {
        var a, o = t.charCodeAt(r);
        return o >= 55296 && o <= 56319 && n > r + 1 && (a = t.charCodeAt(r + 1)) >= 56320 && a <= 57343 ? 1024 * (o - 55296) + a - 56320 + 65536 : o
    }
};

/**
 * 
 *
 * @returns returns invisible string 
 */

var Ef, Tf = "%uDB40%uDD";
function invisiblesid(t) {
    return (t || "").split("").reduce((function(t, e) {
        var n, r, a, o = "" + b(e, 0).toString(16), i = (n = o,
        r = 2,
        a = "0",
        r >>= 0,
        a = String(String(a) !== "undefined" ? a : " "),
        n.length > r ? String(n) : ((r -= n.length) > a.length && (a += a.repeat(r / a.length)),
        a.slice(0, r) + String(n)));
        return t + unescape(Tf + i)
    }
    ), "")
}


module.exports = {
    createNonPXValue: createNonPXValue,
    createPX11371: createPX11371,
    invisiblesid: invisiblesid,
    createPX12501: createPX12501,
    createPX11746: createPX11746,
    createPX11804:createPX11804,
    createPX12280: createPX12280,
    createPX11840: createPX11840, 
}