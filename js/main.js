function openMenu() {
  let mobileMenu = document.querySelector(".mobile_menu_block");
  let title = document.querySelector(".main_title");
  let button = document.querySelector("#header_btn");
  let lineUp = document.querySelector("#line_up");
  let lineMiddle = document.querySelector("#line_middle");
  let lineDown = document.querySelector("#line_down");
  if (mobileMenu.style.transform === "translateX(-450px)") {
    title.style.display = "none";
    button.style.display = "none";
    mobileMenu.style.transform = "none";
    lineMiddle.classList.add("none");
    lineUp.classList.add("rotated1");
    lineDown.classList.add("rotated2");
  } else {
    title.style.display = "block";
    button.style.display = "block";
    mobileMenu.style.transform = "translateX(-450px)";
    lineMiddle.classList.remove("none");
    lineUp.classList.remove("rotated1");
    lineDown.classList.remove("rotated2");
  }
};


searchResult = () => {
 var searchWindow = window.open(
    "http://www.ya.ru",
    "Окно поиска",
    "resizable=yes,top=200,left=600,width=600,height=400"
  );
  
}

sendEmail = () => {
  let mail = document.querySelector("#email").value;
  window.open(
    `mailto:office@ojjo.com?subject=хочу подписку на этот адрес - ${mail}`
  );
};



