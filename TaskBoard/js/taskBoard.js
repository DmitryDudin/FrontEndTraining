var addComment = {
    moveForm: function (a, b, c, d) {
        var e, f, g, h, i = this, j = i.I(a), k = i.I(c), l = i.I("cancel-comment-reply-link"),
            m = i.I("comment_parent"), n = i.I("comment_post_ID"), o = k.getElementsByTagName("form")[0];
        if (j && k && l && m && o) {
            i.respondId = c, d = d || !1, i.I("wp-temp-form-div") || (e = document.createElement("div"), e.id = "wp-temp-form-div", e.style.display = "none", k.parentNode.insertBefore(e, k)), j.parentNode.insertBefore(k, j.nextSibling), n && d && (n.value = d), m.value = b, l.style.display = "", l.onclick = function () {
                var a = addComment, b = a.I("wp-temp-form-div"), c = a.I(a.respondId);
                if (b && c)return a.I("comment_parent").value = "0", b.parentNode.insertBefore(c, b), b.parentNode.removeChild(b), this.style.display = "none", this.onclick = null, !1
            };
            try {
                for (var p = 0; p < o.elements.length; p++)if (f = o.elements[p], h = !1, "getComputedStyle" in window ? g = window.getComputedStyle(f) : document.documentElement.currentStyle && (g = f.currentStyle), (f.offsetWidth <= 0 && f.offsetHeight <= 0 || "hidden" === g.visibility) && (h = !0), "hidden" !== f.type && !f.disabled && !h) {
                    f.focus();
                    break
                }
            } catch (q) {
            }
            return !1
        }
    }, I: function (a) {
        return document.getElementById(a)
    }
};

!function (a, b) {
    "use strict";
    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++)if (d = i[c], !d.getAttribute("data-secret")) {
                if (f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f), g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            } else;
        }
    }

    var d = !1, e = !1;
    if (b.querySelector)if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)if (a.wp.receiveEmbedMessage = function (c) {
            var d = c.data;
            if (d.secret || d.message || d.value)if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                    k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                for (e = 0; e < k.length; e++)k[e].style.display = "none";
                for (e = 0; e < j.length; e++)if (f = j[e], c.source === f.contentWindow) {
                    if (f.removeAttribute("style"), "height" === d.message) {
                        if (g = parseInt(d.value, 10), g > 1e3) g = 1e3; else if (200 > ~~g) g = 200;
                        f.height = g
                    }
                    if ("link" === d.message)if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)if (b.activeElement === f) a.top.location.href = d.value
                } else;
            }
        }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);