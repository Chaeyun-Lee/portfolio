//resize 시 0.3초 후 새로고침(reload)
let delay = 300;
let timer = null;

window.addEventListener('resize', function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
    if(window.innerWidth>=1082){
      location.reload(true);
    }
	}, delay);
});

//scroll event(menu 상단고정)
const headerMenu = document.querySelector("#mainPagebtn");
const mainPage = document.querySelector("#page01");
window.addEventListener("scroll", function () {
  if (window.scrollY > 750) {
    headerMenu.style.position = "fixed";
    headerMenu.style.top = "5%";
  } else if (window.scrollY <= 800) {
    headerMenu.style.position = "absolute";
    headerMenu.style.top = "85%";
  }
});

//intersection 감시 (page 나타날 때 애니메이션 / mobile에서는 감시해제)
const screenW = window.matchMedia("screen and (min-width: 1023px)");

if (screenW.matches) {
  const pages = document.querySelectorAll(".pages");

  const obsever = new IntersectionObserver(
    (e) => {
      e.forEach((pages) => {
        if (pages.isIntersecting) {
          pages.target.classList.add("visible");
        } else {
          pages.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  obsever.observe(pages[0]);
  obsever.observe(pages[1]);
  obsever.observe(pages[2]);
} else {
  const pages = document.querySelectorAll(".pages");
  const obsever = new IntersectionObserver(
    (e) => {
      e.forEach((pages) => {
        if (pages.isIntersecting) {
          pages.target.classList.add("visible");
        } else {
          pages.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  obsever.unobserve(pages[0]);
  obsever.unobserve(pages[1]);
  obsever.unobserve(pages[2]);
};

const scrollDown = document.querySelector("#scrollDown");

const typeAni = new TypeIt(scrollDown, { speed: 50, startDelay: 1000 })
  .type("아래에 더욱 많은", { delay: 500 })
  .pause(500)
  .type(" 내용들이 있어요!")
  .pause(500)
  .type("<br><span class='material-symbols-outlined'>arrow_downward</span> ")
  .go();

//jquery

// scroll event - Fixed menu li에 actives 클래스 추가
const menuBtns = $(".menuBtns");
$(window).scroll(function () {
  const scrollNum = $(window).scrollTop();
  if (scrollNum <= 700) {
    $(".menuBtns:eq(0)").addClass("actives");
    $(".menuBtns:eq(0)").siblings().removeClass("actives");
  } else if (scrollNum >= 700 && scrollNum < 1600) {
    $(".menuBtns:eq(1)").addClass("actives");
    $(".menuBtns:eq(1)").siblings().removeClass("actives");
  } else if (scrollNum >= 1600 && scrollNum < 2600) {
    $(".menuBtns:eq(2)").addClass("actives");
    $(".menuBtns:eq(2)").siblings().removeClass("actives");
  } else if (scrollNum > 2600) {
    $(".menuBtns:eq(3)").addClass("actives");
    $(".menuBtns:eq(3)").siblings().removeClass("actives");
  }
});

//Page02 프로젝트 toggle
$(function () {
  $(".webList").each(function () {
    $(this).on("click", function () {
      $(this).children(".pjtDetails").slideToggle(300, "linear");
      $(this).siblings().toggle("hideList");
      $(this).toggleClass("gradation");
      // $(this).children('span').toggle($(this).children('span').text('arrow_up'))
      //화살표 방향 왔다갔다가 안됨.바뀌고 다시 안돌아옴
    });
  });
});

setInterval(carousel, 3000);
let num = 0;

function carousel() {
  const fullpageCoverItems = document.querySelectorAll(".fullpageItems");

  for (let i = 0; i < fullpageCoverItems.length; i++) {
    fullpageCoverItems[i].style.opacity = "0";
  }

  num++;
  if (num > fullpageCoverItems.length) {
    num = 1;
  }
  fullpageCoverItems[num - 1].style.opacity = "1";
  console.log(num);
}

//Page01 toggle
$(function(){
  $("#eduTitle").on("click", function () {
      $("#eduText").slideToggle(300, "linear");
    });
    $("#workTitle").on("click", function () {
      $("#workText").slideToggle(300, "linear");
    });
})
    

//Page03 롤링배너
let roller = document.querySelector(".rollingBanner");
roller.id='roller1';

let clone = roller.cloneNode(true);
clone.id= 'roller2';
document.querySelector('.wrapBox').appendChild(clone);

roller.classList.add('original');
clone.classList.add('clone');

function copy() {
  // 복사문구값 가져오기
  var copyTxt = document.querySelector(".myEmail");

  // 복사문구 선택
  copyTxt.select();
  copyTxt.setSelectionRange(0, 99999); // Mobile 대응

   // 복사
  navigator.clipboard.writeText(copyTxt.value);

  // 복사완료에 대해 Alert으로 띄우기
  alert("복사되었습니다.");
}