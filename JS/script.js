let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active')
}

    // Initially display all photos
    window.addEventListener('DOMContentLoaded', function () {
        var pics = document.querySelectorAll(".pic");
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
    });

    function filterSelection(category) {
        var pics = document.querySelectorAll(".pic");
        if (category === "all") {
            for (var i = 0; i < pics.length; i++) {
                pics[i].style.display = "block";
            }
        } else {
            for (var i = 0; i < pics.length; i++) {
                var classes = pics[i].className.split(" ");
                if (classes.includes(category)) {
                    pics[i].style.display = "block";
                } else {
                    pics[i].style.display = "none";
                }
            }
        }
    };

    // const inputs = document.querySelectorAll(".input");

    // function focusFunc() {
    //     let parent = this.parentNode;
    //     parent.classList.add("focus");
    // }

    // function blurFunc () {
    //     let parent = this.parentNode;
    //     if (this.value == "") {
    //         parent.classList.remove("focus");
    //     }
    // }
    // inputs.forEach((input) => {
    //     input.addEventListener("focus", focusFunc);
    //     input.addEventListener("blur", blurFunc);
    // });