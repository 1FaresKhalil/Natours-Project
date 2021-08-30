// nav functionality
const btnNav = document.querySelector(".navigation__button");
const icon = document.querySelector(".navigation__icon");
const navigation = document.querySelector(".navigation__nav");
const background = document.querySelector(".navigation__background");
const btnLink = document.querySelectorAll(".navigation__link");
const navCheck = document.getElementById("navi-toggle");
for (let i = 0; i < btnLink.length; i++) {
  btnLink[i].addEventListener("click", function (e) {
    navigation.classList.add("opacityZero");
    background.classList.add("noScale");
    navCheck.checked = false;
  });
}
btnNav.addEventListener("click", function (e) {
  navigation.classList.remove("opacityZero");
  background.classList.remove("noScale");
});
