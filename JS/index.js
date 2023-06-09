// JQEURY/JS COMMON TO EVERY PAGE

// JAVA SCRIPT FOR LOADER COMMON TO EVERY WEBPAGE


$(document).ready(function () {

    $(".fillBottom").addClass("fill"); //Border bottom line of the Navigation Bar.

    var a = $("body").attr("id");

    $("." + a + " a").css({ "transform": "translateY(-2px)", "transition": "1s ease", "color": "#f6d334" }); //Adding translate for the present page navigation button.

    $("." + a).css({ "pointer-events": "none" });

    $(".onloadShow").removeClass("displayNone");   //showing the three dots.
    $(".one").addClass("onLoadAnimate");       //adding the Animation class to the three dots sequentially.
    setTimeout(function () {
        $(".two").addClass("onLoadAnimate");
        setTimeout(function () {
            $(".three").addClass("onLoadAnimate");
        }, 100);
    }, 100);

    setTimeout(function () {
        $(".onloadShow").addClass("displayNone");    //removing the three dots.
        $(".totalContainer").removeClass("displayNone");   //showing the document after loading the three dots animation.
        $(".totalContainer").addClass("opacityOnLoad");
        $(".mouseHead").removeClass("displayNone");
        $(".footer").addClass("footerUp");
        $(".skilldescription").addClass("skillDescriptionSlide");
        $(".heading button").addClass("skillButtonSlide");
    }, 500);


    $(".hey").addClass("down");
    $(".azeem").addClass("down");
    $(".contactMe").addClass("contactslide");
    $(".socialSection").addClass("socialSectionSliding");
});



// CUSTOM MOUSE JAVASCRIPT

const cursorOut = document.querySelector('.mouseOut');
const cursorDot = document.querySelector('.mouseDot');
const moveCursor = (e) => {
    const MouseMoveY = e.clientY - 45;
    const MouseMoveX = e.clientX - 40;
    cursorOut.style.transform = `translate3d(${MouseMoveX}px, ${MouseMoveY}px, 0)`;
    cursorDot.style.transform = `translate3d(${MouseMoveX}px, ${MouseMoveY}px, 0)`;
}
window.addEventListener('mousemove', moveCursor);

// MINIMUM NAVIGATION BAR TOGGLING CLASSES 


function togglingClasses() {
    $("#Skills").toggleClass("displayNone");
    $("#AboutMe").toggleClass("displayNone");
    $(".projects").toggleClass("displayNone");
    $(".socialSection").toggleClass("displayNone");
    $(".Name").toggleClass("displayNone");
    $(".totalContainer").toggleClass("background");
    $(".hamBurger").toggleClass("displayNone");
    $(".hamBurgerClose").toggleClass("displayNone");
    
}

$(".hamBurger").click(function () {
    togglingClasses();
    $(".boyImage").css({ "opacity": "1" });
    $("#NavBar ul").addClass("navSlide-out");
    $(".hamBurgerClose").addClass("navSlide-out");
    $("#NavBar ul").removeClass("navSlide-in");
    $(".hamBurgerClose").removeClass("navSlide-in");
});
$(".hamBurgerClose").click(function () {
    $(".boyImage").css({ "opacity": "0.7" });
    $("#NavBar ul").removeClass("navSlide-out");
    $(".hamBurgerClose").removeClass("navSlide-out");
    $("#NavBar ul").addClass("navSlide-in");
    $(".hamBurgerClose").addClass("navSlide-in");
    setTimeout(() => {
        togglingClasses();
    }, 400);
});


// JQUERY CODE FOR INDIVIDUAL PAGE SEPARATELY

if (window.location.pathname.includes("/index.html") || (!window.location.pathname.includes("/projects.html") && !window.location.pathname.includes("/about.html") && !window.location.pathname.includes("/skills.html"))) {

    // HOME PAGE JQUERY


    // ANIMATION TO SHOW A HOVER OVER THE MAIN TEXT IN HOME PAGE

    // var count = 0;

    // setInterval(() => {
    //     if(count > 6){
    //         setTimeout(() => {
    //             for(var v = 0;v<6;v++)
    //             {
    //                 document.querySelectorAll(".shaik .doin")[i].classList.remove("textinc");
    //             }
    //         }, 500);
    //         count = 0;
    //     }
    //     document.querySelectorAll(".shaik .doin")[count].classList.add("textinc");
    //     count++;
    // }, 200);


    // for (var i = 0; i < 19; i++) {
    //     $(".doin")[i].addEventListener('mouseover', myFunc);
    // }

    // function myFunc(e) {
    //     // alert("HELLO");
    //     $("this").css({"font-size":"3em"});
    //     // $(this).addClass("textinc");
    //     // setTimeout(function () {
    //     //     $(".doin").removeClass("textinc");
    //     // }, 3000);
    // }

    $(".doin").on("mouseover", () => {
        // document.querySelector(this);
        $(".doin").css({ "tranform": "translateY(-10px)" });
        // console.log($(this),"HELLO");
    });


    //Guy with a laptop image parallax movement

    var x_value, y_value;

    const element = document.querySelector("#Home");

    element.addEventListener("mouseover", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const boy = document.querySelector(".boyImage");
        boy.style.transform = `translate3d(${-(x / 70) * 0.5}px, ${-(y / 70) * 0.5}px,0)`;
    })


    // CONTACT BUTTON SLIDING INFINETLY
    // setInterval(() => {
    //     $(".slidingButton").addClass("contactInfiniteMove");
    //     setTimeout(() => {
    //         $(".slidingButton").removeClass("contactInfiniteMove");
    //     }, 3000);
    // }, 2010);

    // function textonLoadAnimate()
    // {
    //     for(var i = 0;i<19;i++){
    //         document.querySelectorAll(".azeem .doin")[i].classList.add("textinc");
    //     }
    // }
    // var count = 0;
    //     setInterval(() => {
    //         if(count >= 15){
    //             $(".azeem .doin").removeClass("textinc");
    //             count = 0;
    //             setTimeout(() => {
    //                 document.querySelectorAll(".azeem .doin")[count++].classList.add("textinc");

    //             }, 500);
    //         }
    //         else{
    //             setTimeout(() => {
    //                 document.querySelectorAll(".azeem .doin")[count].classList.add("textinc");
    //                 count++;
    //             }, 200);
    //         }


    //     }, 100);

    // FIXING THE TEXT LENGTH FOR MOBILE DEVICES

    const am = window.matchMedia("(max-width: 700px)");
    if (am.matches) {
        $(".azeem").html("<div class='doin'>I'M&nbsp;<l1>AZEEM.</l1></div>");
        $(".slidingButton").removeClass("contactZooming");
    }

    // CONTACT FORM DISPLAYING

    // $(".contact").slideUp();
    $(".closeForm").click(function () {
        $("body").toggleClass("bgimage");
        $(".contact").css({"transform":"translateY(125%)"});
        // $(".contact").slideUp();/
        // setTimeout(function () {
        //     $(".totalContainer").toggleClass("displayNone");
        // }, 500);
    });
    function showForm() {
        // $("body").toggleClass("bgimage");
        $(".contact").css("visibility", "visible");
        $(".contact").removeClass("displayNone");
        // $(".contact").css("z-index","5");
        $(".contact").css({"transform":"translateY(0%)"});
        // $(".totalContainer").addClass("displayNone");
        // $(".contact").slideDown();s
    }


}


else if (window.location.pathname.includes("/skills.html")) {

    const skill = window.matchMedia("(max-width:1030px)");

    if (skill.matches) {

        $(".iconshead").addClass("skillDescriptionSlide");
        $(".skilldescription").addClass("displayNone");
        function openSkillDescription() {
            $(".heading button").toggleClass("background2");
            $(".skilldescription").toggleClass("displayNone");
            $(".iconshead").toggleClass("displayNone");
            $(".iconshead").toggleClass("skillDescriptionSlide");
        }
    }


    // AUTO FILL WHEN CLICKED THE SKILL ICON
    $(".iconImages").click(function () {
        var a = $(this).attr("id");
        console.log(a);
        $('.' + a).removeClass("ratingFill");
        setTimeout(() => {
            $("." + a).addClass("ratingFill");
        }, 100);
    });


}

else if (window.location.pathname.includes("/about.html")) {

    // var x_value, y_value;

    // const aboutElement = document.querySelector("#AboutPage");

    // aboutElement.addEventListener("mouseover", (e) => {
    //     const x = e.clientX - window.innerWidth/2;
    //     const y = e.clientY - window.innerHeight/2;
    //     const about = document.querySelector(".myImage img");
    //     about.style.transform = `translate3d(${-(x / 100)}px, ${-(y / 50)}px,0)`;
    // });

}

else if (window.location.pathname.includes("/projects.html")) {
    // JQUERY FOR PROJECT PAGE

    var start = 1;
    ShowProject(start);

    function ShowProject(count) {
        var showing = $(".project" + count).removeClass("displayNone");
    }


    function restartAnimation(addend, next) {
        for (var i = 1; i < 4; i++) {
            $(".project" + i).addClass("displayNone");
            $(".corouselDots .dot" + i).removeClass("active");
            $(".project" + i).removeClass("slideDown");
            $(".project" + i).removeClass("slideUp");
        }
        if (addend == -1) {
            $(".project" + next).addClass("slideDown");
        }
        else {
            $(".project" + next).addClass("slideUp");
        }
    }

    function makeProjectActive(dotNumber) {
        restartAnimation();
        $(".project" + dotNumber).removeClass("displayNone");
        $(".corouselDots .dot" + dotNumber).addClass("active");
    }
    function moveProject(addend) {
        start = start + addend;
        if (start > 3) {
            start = 1;
        }
        if (start < 1) {
            start = 3;
        }
        restartAnimation(addend, start);
        $(".corouselDots .dot" + start).addClass("active");
        ShowProject(start);
    }

    var x_value, y_value;

    const element = document.querySelector("#ProjectPage");

    element.addEventListener("mouseover", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const projectPhoto1 = document.querySelector(".lp1 img");
        const projectPhoto2 = document.querySelector(".lp2 img");
        const projectPhoto3 = document.querySelector(".lp3 img");
        projectPhoto1.style.transform = `translate3d(${-(x / 60)}px, ${-(y / 60)}px,0)`;
        projectPhoto2.style.transform = `translate3d(${-(x / 60)}px, ${-(y / 60)}px,0)`;
        projectPhoto3.style.transform = `translate3d(${-(x / 60)}px, ${-(y / 60)}px,0)`;
        console.log("HELLO");
    });

}