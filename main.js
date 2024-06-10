function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
smoothScroll();
Shery.mouseFollower();







document.addEventListener("DOMContentLoaded", (event) => {
  loaderCircleAnimate();
  startLoader();

  let loaderText = new SplitType('.scramble-text')
  let tl = gsap.timeline();

  tl.from(loaderText.chars, {
    scale:2,
    opacity: 0,
    duration: 2,
    ease: 'power1.out',
    stagger: 0.4,
    onComplete: animate_NavBar,
    onComplete: hero_img_holder,
  })
});







// ----------- Circle Loader Animation Start ---------------->
function loaderCircleAnimate() {
  let loaderCircleTl = gsap.timeline();
  loaderCircleTl.to('.loader-num-animate-contain .loader-num-bar', {
    width: '100%',
    ease:Linear.easeNone,
    duration:4.5,
  })
  loaderCircleTl.to(".pre-loader-contain",{
    y: "-100%",
    duration:1.5,
    display: "none",
    ease: 'power4.inOut',
  })
}
// ----------- Circle Loader Animation End ---------------->


function startLoader() {
  let loaderNumber = document.getElementById("loader-digit");

  let progress = 0;
  let increment = 1;

  let interval = setInterval(function() {
    progress += increment;
    loaderNumber.innerHTML = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 43);
}




// ---------- Navbar Aniate Start --------------->

function animate_NavBar() {
  let navBarTl = gsap.timeline();

  navBarTl.from(".header .nav-logo, .header-right-cnt", {
    y: -100,
    opacity:0,
    duration:1.5,
    delay:1.5,
    stagger: 0.4,
  })
}

// ---------- Navbar Aniate End --------------->







// ---------- Nav Menu Container Animate Start ------------------>

function navMenu_ContainAnimate() {
  let activeItemIndicator = CSSRulePlugin.getRule(".links-item p#active::before");
  document.querySelector('.navlink-menu-btn').addEventListener('click' , function(){
    gsap.set(".links-item p", {y: 150});

    let tl = gsap.timeline();
    tl.to(".navLink-overlay", {
      top:"0",
      duration:1.2,
      ease: 'power4.inOut',
    })
    tl.to(".links-item p", {
      y: 0,
      stagger: 0.2,
      delay:-1,
      duration:1,
      ease: 'power4.inOut',
    })
    tl.to(activeItemIndicator,{
      width:"100%",
      duration:1,
      ease: "power4.inOut",
    })
  })

  document.querySelector('.menu-close-btn').addEventListener('click' , function(){
    gsap.to(".navLink-overlay", {
      top:"-110%",
      duration:1.4,
      ease: 'power4.inOut',
    })
    gsap.to(".links-item p", {
      y: 150,
      duration:0.5,
      ease: 'power1.inOut',
    })
    gsap.to(activeItemIndicator,{
      width:"0%",
      duration:0.5,
      ease: "power4.inOut",
      // delay:0.5,
    })
  })
}
navMenu_ContainAnimate();

// ---------- Nav Menu Container Animate End ------------------>







// ------------- Hero Image Animate Start ------------>

function hero_img_holder() {
  let heroTl = gsap.timeline();
  let heroContent_typeSplit = new SplitType('.hero-img-content span, .hero-img-content p')
  let heroImg_after = CSSRulePlugin.getRule('.hero-img-holder .hero-img::after');

  heroTl.to('.hero-moving-text-holder', {
    transform: 'translateX(0) translateY(-200px) scale(0.5)',
    duartion: 2,
    delay: 0.8,
    ease: 'power1.inOut',
  })
  heroTl.to('.hero-moving-text-holder', {
    transform: 'translateX(0) translateY(0) scale(1)',
    duartion: 2,
    delay: 0.8,
    ease: 'power1.inOut',
  })

  heroTl.from('.hero-img-holder .hero-img',{
    opacity:0,
    duration: 0.5,
  })
  heroTl.to(heroImg_after,{
    duration: 0.6,
    height: '0%',
  })
  gsap.from(heroContent_typeSplit.words, {
    delay: 2.5,
    y: '100%',
    opacity: 0,
    duration: 0.6,
    ease: 'power1.out',
    stagger: 0.1,
  })
}

// ------------- Hero Image Animate End ------------>







// ------------ Table content Animate Start ------------>

function tableContent() {
  let tableCntntGrp = document.querySelectorAll(".table-cntnt");

  tableCntntGrp.forEach(tablePoint => {
    gsap.from(tablePoint, {
      y: '100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: tablePoint,
        scroller: '#main',
        start: 'top 90%',
        end: 'top 20%',
        scrub: 2,
      }
    })
  })
}
tableContent();

// ------------ Table content Animate End ------------>







// -------------- Work Sec Title Animate Start ------------>

function projectTitleAnim() {
  let projectTitleGrp = document.querySelectorAll(".project-title");

  projectTitleGrp.forEach(projectTitle => {
    gsap.from(projectTitle, {
      x: '-100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectTitle,
        scroller: '#main',
        start: 'top 90%',
        end: 'top 50%',
        scrub: 2,
      }
    })
  })
}
projectTitleAnim();

// -------------- Work Sec Title Animate End ------------>







// ------------- About Content Animate Start -------------->

function aboutMe_text() {
  let typeSplit = new SplitType('.about-info')

  gsap.from(typeSplit.chars, {
    opacity: 0.3,
    duration: 2,
    ease: 'power1.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.about-info',
      scroller: '#main',
      start: 'top 70%',
      end: 'top -20%',
      scrub: 2,
    }
  })
}
aboutMe_text();

// ------------- About Content Animate End -------------->







// ---------- Tech Skill Head Animate Start ------------->

function techHeadText() {
  let techHeadChar = new SplitType(".techSkill-head")

  gsap.to(techHeadChar.chars, {
    rotateY: "360deg",
    duration: 1,
    repeat: -1,
    ease: 'Power1.out',
    stagger: 0.2,
  })
}
techHeadText();

// ---------- Tech Skill Head Animate End ------------->







// ------------ Roadmap Section Animate Code Start ------------------->

function roadmapPointText() {
  const processPoints = document.querySelectorAll('.process-point');
  
  processPoints.forEach(point => {
    let typeSplit = new SplitType(point, { types: 'lines' });

    gsap.from(typeSplit.lines, {
      y: '100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: point,
        scroller: '#main',
        start: 'top 90%',
        end: 'top 20%',
        scrub: 2,
      }
    });
  });
}
roadmapPointText();

// ------------ Roadmap Section Animate Code End ------------------->

































// gsap.registerPlugin(ScrollTrigger);
// const gsapHover_Item = document.querySelector(".hover-elem-text");
// const gsapHover_Img = document.querySelector(".hover-elem-img");

// gsap.set(".hover-elem-img", {
//   scaleX: 0,
//   filter: 'hue-rotate(300deg) contrast(5)'
// });

// gsapHover_Item.forEach(gsIt => {
  // const img = document.querySelector(".hover-elem-img");
  // let imgWidth = img.offsetWidth / 2;
  // let imgHeight = img.offsetHeight / 2;

  // gsapHover_Item.addEventListener('mouseenter', function(e) {
  //   if (e.type === 'mouseenter') {
  //     let xpos = e.offsetX;
  //     let ypos = e.offsetY;

  //     const hoverTl = gsap.timeline();
  //     hoverTl.set('.hover-elem-img', {
  //       x: xpos - imgWidth,
  //       y: ypos - imgHeight
  //     }).to(img, {
  //       opacity: 1,
  //       scrollX: 1,
  //       filter: 'hue-rotate(360deg) contrast(1)',
  //       duration: 0.7,
  //       ease: 'expo.out'
  //     })
  //   }
  // })
// });
