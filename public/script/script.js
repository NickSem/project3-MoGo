const menuLink = $(".header-logo-menu-wrapper__menu_link");

menuLink.on("mouseenter", function() {
  $(this).css({ color: "#fce38a", borderBottom: "2px solid #fce38a" });
});

menuLink.on("mouseleave", function() {
  $(this).css({ color: "white", borderBottom: "none" });
});

const headerButton = $(".header__button");

headerButton.on("mouseenter", function() {
  $(this).css({ background: "rgba(243, 129, 129, 0.9)" });
});

headerButton.on("mouseleave", function() {
  $(this).css({ background: "none" });
});

const aboutLink = $(".about-content-links>a");

aboutLink.on("mouseenter", function() {
  $(this)
    .find(".bg-image")
    .animate({ top: "-5px", left: "-5px" }, 200);
  $(this)
    .find(".bg-image .hover-effect")
    .css({ display: "flex" });
});

aboutLink.on("mouseleave", function() {
  $(this)
    .find(".bg-image")
    .animate({ top: 0, left: 0 }, 200);
  $(this)
    .find(".bg-image .hover-effect")
    .css({ display: "none" });
});

const servicesSelect = $(".services-select__item_head");

$(".services-select__item:first-child")
  .find(".services-select__item_descr")
  .show();

servicesSelect.on("click", function() {
  $(".services-arrow").attr("src", "images/icons/arrow-down.png");
  $(this)
    .find(".services-arrow")
    .attr("src", "images/icons/arrow-top.png");
  $(".services-select__item_head")
    .closest(".services-select__item")
    .find(".services-select__item_descr")
    .slideUp();
  $(this)
    .closest(".services-select__item")
    .find(".services-select__item_descr")
    .slideDown();
});

$(".services-select__item_descr").mCustomScrollbar({
  theme: "dark-2"
});

$(".slides-wrapper").slick({
  prevArrow: ".arrow-left",
  nextArrow: ".arrow-right",
  autoplay: true
});
