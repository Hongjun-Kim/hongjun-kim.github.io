function onReady() {
  var e,
    t,
    n,
    i = document.querySelector(".nav__hamburger"),
    o = document.querySelector(".nav-menu"),
    l = document.querySelector(".nav-menu__cross"),
    r =
      (document.querySelectorAll(".nav-menu__list-item"),
      document.querySelector(".nav-menu__separator"),
      document.querySelector(".nav-menu__text"),
      document.querySelector(".nav-menu__email"),
      document.querySelector(".nav-menu__social-btn"),
      document.querySelector(".about-me__skills__btn"));
  function c(e) {
    e.stopPropagation(),
      (i.style.visibility = "hidden"),
      (o.style.width = "250px"),
      (o.inert = !1);
  }
  function s() {
    (o.style.width = "0px"), (i.style.visibility = "visible"), (o.inert = !0);
  }
  function a(e) {
    var t = document.querySelector("#item__one"),
      n = document.querySelector("#item__two"),
      i = document.querySelector("#item__three"),
      o = e.target.dataset.name;
    function l(t, n, i) {
      t.style.height != n
        ? ((t.style.transition = "all 1s ease-out"),
          (t.style.height = n),
          e.target.classList.toggle("about__me__more__slide"),
          (e.target.innerHTML = "read less"))
        : ((t.style.transition = "all 1s ease-out"),
          (t.style.height = i),
          e.target.classList.toggle("about__me__more__slide"),
          (e.target.innerHTML = "read more"));
    }
    function r(e) {
      window.innerWidth <= 500
        ? l(e, "900px", "390px")
        : window.innerWidth <= 800
        ? l(e, "750px", "336px")
        : window.innerWidth > 800 && window.innerWidth < 1080
        ? l(e, "900px", "390px")
        : window.innerWidth > 1080 && l(e, "890px", "390px");
    }
    "item-one-more" == o
      ? r(t)
      : "item-two-more" == o
      ? r(n)
      : "item-three-more" == o && r(i);
  }
  function d() {
    var e = document.querySelector(".about-me__skills__flex"),
      t = document.querySelectorAll(".about-me__skills__item"),
      n = [].slice.call(t),
      i = n.slice(4, -2),
      o = n.slice(7),
      l = n.slice(4),
      c = e.offsetHeight;
    function s(e) {
      e.forEach(function (e) {
        e.classList.add("about-me__skills__show"),
          e.classList.remove("about-me__skills__hide");
      });
    }
    !(function () {
      function t(t, n, a, d, u, _) {
        for (var m = c; m < t; m++)
          (e.style.transition = "all 1s ease-out"),
            c > a && (s(i), (e.style.height = c + n + "px")),
            c > d &&
              (window.innerWidth <= 500
                ? (e.style.height = c + n + 420 + "px")
                : window.innerWidth < 1024
                ? (e.style.height = c + n - 400 + "px")
                : window.innerWidth <= 1150
                ? (e.style.height = c + n + 10 + "px")
                : (e.style.height = c + n + "px"),
              (r.innerHTML = "Show less"),
              s(o));
        c > u &&
          ((e.style.transition = "all 1s ease-out"),
          (e.style.height = _ + "px"),
          (r.innerHTML = "Show more"),
          l.forEach(function (e) {
            e.classList.remove("about-me__skills__show"),
              e.classList.add("about-me__skills__hide");
          }));
      }
      window.innerWidth <= 500
        ? t(4070, 1240, 1235, 2470, 2490, 1240)
        : window.innerWidth < 1024
        ? t(2070, 820, 820, 1640, 1660, 830)
        : window.innerWidth <= 1150
        ? t(1240, 430, 430, 860, 880, 440)
        : t(1240, 410, 410, 820, 1e3, 420);
    })();
  }
  function u() {
    var e,
      t,
      n = document.querySelector(".nav"),
      i = document.querySelector(".header"),
      o = document.querySelector(".main-container"),
      l = document.querySelector(".about-me__container"),
      c = document.querySelector(".project__container"),
      u = document.querySelectorAll(".about-me__more");
    "body-index" == document.body.id
      ? (n.addEventListener("click", s),
        i.addEventListener("click", s),
        o.addEventListener("click", s))
      : "body-project" == document.body.id
      ? (n.addEventListener("click", s), c.addEventListener("click", s))
      : "body-about" == document.body.id &&
        (n.addEventListener("click", s),
        l.addEventListener("click", s),
        [].slice.call(u).forEach(function (e) {
          e.addEventListener("click", a, !1);
        }),
        r.addEventListener("click", d),
        (e = document.querySelector(".about-me__header")),
        (t = window.innerWidth) > 400 &&
          t < 500 &&
          (e.style.backgroundSize = "85%"));
  }
  function _(e) {
    var t = e.target.dataset.btnName,
      n = document.querySelectorAll(".portfolio__item");
    [].slice.call(n).forEach(function (e) {
      function n() {
        e.classList.remove("portfolio__item__hide"),
          e.classList.add("portfolio__item__show"),
          (e.style.display = "block");
      }
      function i(t) {
        e.dataset.name != t
          ? (e.classList.remove("portfolio__item__show"),
            e.classList.add("portfolio__item__hide"),
            (e.style.display = "none"))
          : n();
      }
      "websites-btn" == t
        ? i("website")
        : "apps-btn" == t
        ? i("app")
        : "illustrations-btn" == t
        ? i("illustration")
        : "all-btn" == t && n();
    });
  }
  (o.inert = !0),
    $(".nav-menu__link").click(function () {
      return (
        s(),
        $("html, body").animate(
          { scrollTop: $($.attr(this, "href")).offset().top },
          800
        ),
        !1
      );
    }),
    $(".nav__logo__link, .header__btn, .footer-menu__link").click(function () {
      return (
        $("html, body").animate(
          { scrollTop: $($.attr(this, "href")).offset().top },
          800
        ),
        !1
      );
    }),
    $(r).click(function () {
      var e = $(".about-me__skills__flex");
      function t(e) {
        return $("html, body").animate({ scrollTop: e }, 1500), !1;
      }
      e.width() > 768
        ? e.height() > 400 && e.height() < 800
          ? t(1030)
          : e.height() > 800 && e.height() < 1200
          ? t(1430)
          : "Show less" === $(r).text() && t(620)
        : e.width() <= 500 && "Show less" === $(r).text()
        ? t(1270)
        : e.width() <= 768 && "Show less" === $(r).text() && t(1200);
    }),
    i.addEventListener("click", c),
    l.addEventListener("click", s),
    u(),
    (t = document.querySelectorAll(".portfolio__nav__btn")),
    (n = [].slice.call(t)),
    (e = _),
    n.forEach(function (t) {
      t.addEventListener("click", e);
    });
}
"complete" === document.readyState ||
("loading" !== document.readyState && !document.documentElement.doScroll)
  ? onReady()
  : document.addEventListener("DOMContentLoaded", onReady);
