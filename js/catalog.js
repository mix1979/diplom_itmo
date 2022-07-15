function headerMin() {
  let header = document.querySelector(".catalog_header_main");
  header.style.maxHeight = "150px";
}

//мобильное меню
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

//открывает текст описания

openText = () => {
  let text = document.querySelector("#catalog_text");

  text.style.maxHeight = "none";
};

// добавляет товары в каталог
showMore = () => {
  let container = document.querySelector(".catalog_card_layer");
  let newLayer = document.createElement("div");
  newLayer.classList.add(".catalog_card_layer");
  newLayer.style.display = "grid";

  newLayer.style.gridTemplateColumns = "1fr 1fr 1fr";
  newLayer.style.gridAutoRows = "minmax(439px, auto)";
  newLayer.style.gridGap = "100px";
  newLayer.style.marginBottom = "95px";
  newLayer.innerHTML = document.querySelector(".catalog_card_layer").innerHTML;
  container.insertAdjacentElement("afterend", newLayer);
};

sendEmail = () => {
  let mail = document.querySelector("#email").value;
  window.open(
    `mailto:office@ojjo.com?subject=хочу подписку на этот адрес - ${mail}`
  );
};
