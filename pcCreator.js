
function D(t, e) {
        var n, r = H(t), a = [], o = [];
        for (a[15] = o[15] = void 0,
        r.length > 16 && (r = O(r, 8 * t.length)),
        n = 0; n < 16; n += 1)
            a[n] = 909522486 ^ r[n],
            o[n] = 1549556828 ^ r[n];
        var i = O(a.concat(H(e)), 512 + 8 * e.length);
        return X(O(o.concat(i), 640))
}
function X(t) {
    var e, n = "";
    for (e = 0; e < 32 * t.length; e += 8)
        n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return n
}
function H(t) {
    var e, n = [];
    for (n[(t.length >> 2) - 1] = void 0,
    e = 0; e < n.length; e += 1)
        n[e] = 0;
    for (e = 0; e < 8 * t.length; e += 8)
        n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return n
}
function R(t, e) { 
    var n = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
}
function x(t, e, n, r, a, o, i) { 
    return B(e & n | ~e & r, t, e, a, o, i)
}
function B(t, e, n, r, a, o) { 
    return R((i = R(R(e, t), R(r, o))) << (c = a) | i >>> 32 - c, n);
    var i, c
}
function _(t, e, n, r, a, o, i) { 
    return B(e & r | n & ~r, t, e, a, o, i)
}
function k(t, e, n, r, a, o, i) { 
    return B(e ^ n ^ r, t, e, a, o, i)
}
function M(t, e, n, r, a, o, i) {
    return B(n ^ (e | ~r), t, e, a, o, i)
}
function O(t, e) {
    t[e >> 5] |= 128 << e % 32,
    t[14 + (e + 64 >>> 9 << 4)] = e;
    var n, r, a, o, i, c = 1732584193, u = -271733879, f = -1732584194, s = 271733878;
    for (n = 0; n < t.length; n += 16)
        r = c,
        a = u,
        o = f,
        i = s,
        c = x(c, u, f, s, t[n], 7, -680876936),
        s = x(s, c, u, f, t[n + 1], 12, -389564586),
        f = x(f, s, c, u, t[n + 2], 17, 606105819),
        u = x(u, f, s, c, t[n + 3], 22, -1044525330),
        c = x(c, u, f, s, t[n + 4], 7, -176418897),
        s = x(s, c, u, f, t[n + 5], 12, 1200080426),
        f = x(f, s, c, u, t[n + 6], 17, -1473231341),
        u = x(u, f, s, c, t[n + 7], 22, -45705983),
        c = x(c, u, f, s, t[n + 8], 7, 1770035416),
        s = x(s, c, u, f, t[n + 9], 12, -1958414417),
        f = x(f, s, c, u, t[n + 10], 17, -42063),
        u = x(u, f, s, c, t[n + 11], 22, -1990404162),
        c = x(c, u, f, s, t[n + 12], 7, 1804603682),
        s = x(s, c, u, f, t[n + 13], 12, -40341101),
        f = x(f, s, c, u, t[n + 14], 17, -1502002290),
        c = _(c, u = x(u, f, s, c, t[n + 15], 22, 1236535329), f, s, t[n + 1], 5, -165796510),
        s = _(s, c, u, f, t[n + 6], 9, -1069501632),
        f = _(f, s, c, u, t[n + 11], 14, 643717713),
        u = _(u, f, s, c, t[n], 20, -373897302),
        c = _(c, u, f, s, t[n + 5], 5, -701558691),
        s = _(s, c, u, f, t[n + 10], 9, 38016083),
        f = _(f, s, c, u, t[n + 15], 14, -660478335),
        u = _(u, f, s, c, t[n + 4], 20, -405537848),
        c = _(c, u, f, s, t[n + 9], 5, 568446438),
        s = _(s, c, u, f, t[n + 14], 9, -1019803690),
        f = _(f, s, c, u, t[n + 3], 14, -187363961),
        u = _(u, f, s, c, t[n + 8], 20, 1163531501),
        c = _(c, u, f, s, t[n + 13], 5, -1444681467),
        s = _(s, c, u, f, t[n + 2], 9, -51403784),
        f = _(f, s, c, u, t[n + 7], 14, 1735328473),
        c = k(c, u = _(u, f, s, c, t[n + 12], 20, -1926607734), f, s, t[n + 5], 4, -378558),
        s = k(s, c, u, f, t[n + 8], 11, -2022574463),
        f = k(f, s, c, u, t[n + 11], 16, 1839030562),
        u = k(u, f, s, c, t[n + 14], 23, -35309556),
        c = k(c, u, f, s, t[n + 1], 4, -1530992060),
        s = k(s, c, u, f, t[n + 4], 11, 1272893353),
        f = k(f, s, c, u, t[n + 7], 16, -155497632),
        u = k(u, f, s, c, t[n + 10], 23, -1094730640),
        c = k(c, u, f, s, t[n + 13], 4, 681279174),
        s = k(s, c, u, f, t[n], 11, -358537222),
        f = k(f, s, c, u, t[n + 3], 16, -722521979),
        u = k(u, f, s, c, t[n + 6], 23, 76029189),
        c = k(c, u, f, s, t[n + 9], 4, -640364487),
        s = k(s, c, u, f, t[n + 12], 11, -421815835),
        f = k(f, s, c, u, t[n + 15], 16, 530742520),
        c = M(c, u = k(u, f, s, c, t[n + 2], 23, -995338651), f, s, t[n], 6, -198630844),
        s = M(s, c, u, f, t[n + 7], 10, 1126891415),
        f = M(f, s, c, u, t[n + 14], 15, -1416354905),
        u = M(u, f, s, c, t[n + 5], 21, -57434055),
        c = M(c, u, f, s, t[n + 12], 6, 1700485571),
        s = M(s, c, u, f, t[n + 3], 10, -1894986606),
        f = M(f, s, c, u, t[n + 10], 15, -1051523),
        u = M(u, f, s, c, t[n + 1], 21, -2054922799),
        c = M(c, u, f, s, t[n + 8], 6, 1873313359),
        s = M(s, c, u, f, t[n + 15], 10, -30611744),
        f = M(f, s, c, u, t[n + 6], 15, -1560198380),
        u = M(u, f, s, c, t[n + 13], 21, 1309151649),
        c = M(c, u, f, s, t[n + 4], 6, -145523070),
        s = M(s, c, u, f, t[n + 11], 10, -1120210379),
        f = M(f, s, c, u, t[n + 2], 15, 718787259),
        u = M(u, f, s, c, t[n + 9], 21, -343485551),
        c = R(c, r),
        u = R(u, a),
        f = R(f, o),
        s = R(s, i);
    return [c, u, f, s]
}
 function N(t){
    var e, n, r = "0123456789abcdef", a = "";
    for (n = 0; n < t.length; n += 1)
        e = t.charCodeAt(n),
        a += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
    return a
}
 function genPC1(t){
    for (var e = "", n = "", r = 0; r < t.length; r++) {
        var a = t.charCodeAt(r);
        a >= 48 && a <= 57 ? e += t[r] : n += a % 10;
    }
    return e + n
}
 function genPC2(r) {
    var a = "";
    var o = 0;
    for(o = 0; o < r.length; o += 2)
        a += r[o];
    return a
}
/**
 * tempuuid = uuid+":v{VERSIONNUMBER}-HF:{SITEID}"
 * payload = normal payload, not encoded
 * you can use pccreator like this: var pc = genPC2(genPC1(N(D(tempuuid, payload))))
 */
module.exports = {
    genPC1: genPC1,
    genPC2: genPC2,
    N: N,
    D: D
}



