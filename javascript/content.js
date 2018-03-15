! function () {
    function a() {
        return -1 !== location.href.indexOf("facebook.com/videos/")
    }

    function b() {
        var b = function (a) {
                if (!a.dataset.extFbSkip) {
                    var b = $(a),
                        d = $("[data-video-id]", b);
                    if (d.length < 1) return !1;
                    var h = j(d, !0);
                    if (h) {
                        a.dataset.extFbSkip = 1;
                        var i = g(),
                            k = function (a) {
                                a.stopPropagation();
                                var b = $(a.target);
                                f(b), chrome["runtime"].sendMessage({
                                    action: "request",
                                    video_id: h
                                }, function (a) {
                                    a.error ? (b.text("Error!"), setTimeout(function () {
                                        e(b)
                                    }, 2e3)) : e(b)
                                })
                            };
                        return i.on("click", k), c(b, i), !0
                    }
                    return !1
                }
            },
            d = function (a) {
                if (!a.dataset.extFbSkip) {
                    var b = $(a),
                        d = $("video", b);
                    if (!d.attr("src") || d.attr("src").indexOf("blob:") > -1) return !1;
                    var h = j(d, !0, !0);
                    if (h) {
                        a.dataset.extFbSkip = 1;
                        var i = g(),
                            k = function (a) {
                                a.stopPropagation();
                                var b = $(a.target);
                                f(b), j(d, !0, !0) && chrome["runtime"].sendMessage({
                                    action: "download",
                                    url: h
                                }, function (a) {
                                    a.error ? (b.text("Error!"), setTimeout(function () {
                                        e(b)
                                    }, 2e3)) : e(b)
                                })
                            };
                        return i.on("click", k), c(b, i), !0
                    }
                    return !1
                }
            },
            h = function (a) {
                if (!a.dataset.extFbSkip) {
                    var b = $(a),
                        d = i(b);
                    if (d) {
                        a.dataset.extFbSkip = 1;
                        var h = g(),
                            j = function (a) {
                                a.stopPropagation();
                                var c = $(a.target);
                                f(c), i(b) && chrome["runtime"].sendMessage({
                                    action: "request",
                                    video_id: d
                                }, function (a) {
                                    a.error ? (c.text("Error!"), setTimeout(function () {
                                        e(c)
                                    }, 1300)) : e(c)
                                })
                            };
                        h.on("click", j), c(b, h)
                    }
                }
            };
        setInterval(function () {
            return a() ? void 0 : 1 === $("#pagelet_timeline_main_column").length || 1 === $("#pagelet_group_mall").length || location.href.indexOf("/search/") > -1 ? void $('[role="article"]').each(function (a, c) {
                0 !== $(".userContentWrapper", $(c)).length && (b(c) || d(c) || h(c))
            }) : void $('[data-testid="fbfeed_story"]').each(function (a, c) {
                b(c) || d(c) || h(c)
            })
        }, 1500)
    }

    function c(a, b) {
        $("video", a).each(function (a, c) {
            c.dataset.extFbSkip = 1;
            var d, e = $(c.parentNode),
                f = 0;
            e.on("mousemove", function () {
                var a = Date.now();
                f + 500 > a || (f = a, clearTimeout(d), b.show(), d = setTimeout(function () {
                    b.hide()
                }, 3e3))
            }), e.on("mouseleave", function () {
                clearTimeout(d), b.hide()
            }), e.append(b), b.hide()
        })
    }

    function d() {
        return chrome.i18n.getMessage("download")
    }

    function e(a) {
        a.html(d())
    }

    function f(a) {
        var b = chrome.i18n.getMessage("loading") + "...";
        a.html(b), setTimeout(function () {
            e(a)
        }, 3e3)
    }

    function g() {
        return $('<button class="_42ft _4jy0 _4jy3 _4jy1 ext_fb_dl_btn" type="button">' + d() + "</button>").clone()
    }

    function h() {
        b(), setInterval(function () {
            ['[role="dialog"]', ".uiContextualLayerParent"].forEach(function (a) {
                $(a + " video").each(function (a, b) {
                    if (!b.dataset.extFbSkip) {
                        var d = g(),
                            h = function (a) {
                                a.stopPropagation();
                                var b = $(a.target),
                                    c = j(a.target);
                                f(b), c && chrome["runtime"].sendMessage({
                                    action: "request",
                                    video_id: c
                                }, function (a) {
                                    if (a && a.error) {
                                        var c = /\"(https\:\/\/.*\.mp4.*[^\"]+)\"/i;
                                        null !== (m = c.exec(document.body.innerHTML)) && m.forEach(function (a, c) {
                                            if (1 === c) {
                                                var d = a.split('"')[0];
                                                chrome["runtime"].sendMessage({
                                                    action: "download",
                                                    url: d
                                                }), e(b)
                                            }
                                        })
                                    }
                                })
                            };
                        d.on("click", h);
                        var i = $(b.parentNode);
                        k(i), c(i, d)
                    }
                })
            })
        }, 1e3)
    }

    function i(a) {
        var b = /\/videos\/([0-9]+)[^\/?]?/g.exec(a.html());
        return b ? b[1] : !1
    }

    function j(a, b, c) {
        var d = a ? $(a) : null;
        if (a && c) return d.attr("src");
        if (a && !b) {
            var e = d.closest(".uiStreamStory");
            if (e.length > 0) {
                var f = /\/videos\/([0-9]+)[^\/?]?/g.exec(e.html());
                return f && f[1]
            }
        } else if (a && b && d.length > 0) return d.data("video-id");
        var g = /\/videos\/([0-9]+)[^\/?]?/g.exec(location.href);
        return null !== g && "undefined" != typeof g[1] ? g[1] : (g = /\/videos\/[a-z]{2}\.[0-9]+\/([0-9]+)\/?/g.exec(location.href), null !== g && "undefined" != typeof g[1] ? g[1] : !1)
    }

    function k(a) {
        a.find(".ext_fb_dl_btn") && $(".ext_fb_dl_btn", a).detach()
    }
    $(function () {
        location.href.indexOf("facebook.com") > -1 && h()
    })
}();