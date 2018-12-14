! function() {
    "use strict";

    function e(t, n) {
        e.registry[t] = n
    }
    e.registry = {}, e("index", function() {});

    // function W(e) {
    //     this.config = e, this.x = e.x || 0, this.y = e.y || 0, this.direction = Object.assign({
    //         x: 1,
    //         y: 1
    //     }, e.direction), this.velocity = Object.assign({
    //         x: 0,
    //         y: 0
    //     }, e.velocity), this.bounds = Object.assign({
    //         w: 0,
    //         y: 0
    //     }, e.bounds)
    // }
    // function z(e) {
    //     W.call(this, e), this.radius = e.radius || 5, this.color = e.color || "#000"
    // }
    //
    // function F(e, t, n, i) {
    //     e.addEventListener(n, function(n) {
    //         for (var o = n.target; o && o !== e;) o.matches(t) && i.call(o, n, o), o = o.parentNode
    //     })
    // }
    // window.addEventListener("resize", function() {
    //     D = null
    // }), W.prototype.move = function(e) {
    //     e = void 0 === e ? 1 : e, this.x += this.velocity.x * e * this.direction.x, this.y += this.velocity.y * e * this.direction.y
    // }, W.prototype.toggleDirection = function(e) {
    //     this.direction[e] *= -1
    // }, z.prototype = Object.create(W.prototype), z.prototype.draw = function(e) {
    //     e.beginPath(), e.fillStyle = this.color, e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), e.fill()
    // }, z.prototype.boundaryCheck = function() {
    //     var e = this.bounds.w,
    //         t = this.bounds.h;
    //     this.x >= e - this.radius ? (this.x = e - this.radius, this.toggleDirection("x")) : this.x <= 0 + this.radius && (this.x = 0 + this.radius, this.toggleDirection("x")), this.y >= t - this.radius ? (this.y = t - this.radius, this.toggleDirection("y")) : this.y <= 0 + this.radius && (this.y = 0 + this.radius, this.toggleDirection("y"))
    // };

    var $e = document.querySelector(".space-cowboy__arm"),
        De = document.querySelector(".space-cowboy__body"),
        Pe = document.querySelector(".space-cowboy__laser"),
        He = document.querySelectorAll(".space-cowboy__trigger"),
        We = document.querySelector(".our-team"),
        ze = void 0,
        Fe = !1,
        Ue = void 0;

    function Be() {
        Ue = window.innerWidth < 768
    }

    function Ye() {
        ze = De.getBoundingClientRect()
    }

    function Ke(e) {
        if (!Ue) {
            $e.style.transition = "";
            var t = ze.left + (De.offsetWidth / 2 - 5),
                n = ze.top + (De.offsetHeight / 2 - 20),
                i = Math.atan2(e.clientX - t, e.clientY - n),
                o = (a = e.clientX, s = e.clientY, c = t, u = n, Math.sqrt(Math.pow(c - a, 2) + Math.pow(u - s, 2))),
                r = i * (180 / Math.PI) * -1 + 180;
            $e.style.transform = "rotate(" + r + "deg)", Pe.style.transform = "rotate(" + (r - 90) + "deg)", Pe.style.width = 1.3 * o - 25 + "px"
        }
        var a, s, c, u
    }

    function Ve() {
        $e.style.transition = "transform 300ms ease-in-out", $e.style.transform = ""
    }

    function Ge() {
        if (!Ue) {
            if (!Fe) return Pe.style.opacity = 1, Pe.style.animationPlayState = "running", void(Fe = !0);
            Pe.style.opacity = 0, Pe.style.animationPlayState = "paused", Fe = !1
        }
    }
    e("space-cowboy", function() {
        Be(), We.addEventListener("mouseenter", Ye), We.addEventListener("mousemove", Ke), We.addEventListener("mouseleave", Ve), He.forEach(function(e) {
            e.addEventListener("mouseenter", Ge), e.addEventListener("mouseleave", Ge)
        }), window.addEventListener("resize", H(Ye, 100)), window.addEventListener("resize", H(Be, 300)), window.addEventListener("scroll", function() {
            window.requestAnimationFrame(Ye)
        })
    }), e("about-page", function() {
        var e = document.querySelector(".expand-more"),
            t = document.querySelector(".our-team"),
            n = e.closest(".shadow-card");
        e.addEventListener("click", function() {
            t.classList.toggle("is-open"), t.classList.contains("is-open") ? e.innerText = "Less" : e.innerText = "More"
        }), e.addEventListener("mouseenter", function() {
            n.classList.add("is-hovered")
        }), e.addEventListener("mouseleave", function() {
            n.classList.remove("is-hovered")
        })
    });
    var Je = window.requestAnimationFrame;

    function Xe(e) {
        var t = e.selector,
            n = e.onEnter,
            i = e.onExit,
            o = e.offset,
            r = void 0 === o ? 0 : o,
            a = e.once,
            s = void 0 !== a && a,
            c = !1,
            u = void 0;

        function l() {
            c = !1, d()
        }

        function d() {
            (u = u.filter(function(e) {
                var t = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = e.getBoundingClientRect(),
                        i = n.top,
                        o = n.bottom,
                        r = window.innerHeight - i;
                    return o > t && r > t
                }(e, r);
                if (t) {
                    if (n(e), s) return !1
                } else !t && e.__seen && i && i(e);
                return e.__seen = t, !0
            })).length || window.removeEventListener("scroll", h)
        }

        function h() {
            c || (c = !0, Je(l))
        }

        function f() {
            d()
        }

        function v() {
            var e, t, n, i;
            window.addEventListener("resize", (e = f, t = 300, i = null, function() {
                var o, r = arguments.length,
                    a = new Array(r);
                for (i && window.clearTimeout(i), o = 0; o < r; o++) a[o] = arguments[o];
                i = window.setTimeout(function() {
                    e.apply(n || null, a)
                }, t)
            })), window.addEventListener("scroll", h)
        }
        "string" == typeof t && "function" == typeof n || console.error("Must initialize with valid selector string and onEnter callback"), u = Array.prototype.slice.call(document.querySelectorAll(t)), v(), d()
    }

    e("site-footer", function() {
        var e = document.querySelector(".site-footer__spacer"),
            t = document.querySelector(".site-footer");

        function n() {
            var n = t.offsetHeight;
            e.style.height = n + "px"
        }
        window.addEventListener("load", n), window.addEventListener("resize", H(n, 200))
    }), document.addEventListener("DOMContentLoaded", function() {
        Xe({
            selector: "[data-scroll-animate]",
            onEnter: function(e) {
                return e.classList.add("in-view")
            },
            offset: 250,
            once: !0
        });
        var t = document.querySelectorAll("[data-module]");
        Array.prototype.slice.call(t).forEach(function(t) {
            var n = t.getAttribute("data-module"),
                i = e.registry[n];
            if ("function" == typeof i) {
                try {
                    i()
                } catch (e) {
                    console.error(e)
                }
                delete e.registry[n]
            }
        })
    });
}();
