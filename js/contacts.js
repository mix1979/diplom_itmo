function headerMin() {
  let header = document.querySelector(".catalog_header_main");
  header.style.maxHeight = "150px";
}
function openMenu() {
  let mobileMenu = document.querySelector(".mobile_menu_block");
  let lineUp = document.querySelector("#line_up");
  let lineMiddle = document.querySelector("#line_middle");
  let lineDown = document.querySelector("#line_down");
  let header = document.querySelector(".catalog_header_main");
  if (mobileMenu.style.transform === "translateX(-450px)") {
    header.style.height = "auto";
    mobileMenu.style.transform = "none";
    lineMiddle.classList.add("none");
    lineUp.classList.add("rotated1");
    lineDown.classList.add("rotated2");
  } else {
    header.style.maxHeight = "150px";
    mobileMenu.style.transform = "translateX(-450px)";
    lineMiddle.classList.remove("none");
    lineUp.classList.remove("rotated1");
    lineDown.classList.remove("rotated2");
  }
}
function title() {
  let targetItem = document.querySelector(".item_link_block");
  targetItem.innerHTML = `<a href="../index.html">Главная</a> / ` + document.title;
  targetItem.style.paddingTop = "15px";
  targetItem.style.paddingBottom = "15px";
  targetItem.style.marginBottom = "0";
}
sendEmail = () => {
  let mail = document.querySelector("#email").value;
  let target = document.querySelector("#footer_black_btn");
  window.open(`mailto:test@example.com?subject=${mail}`);
};
