
    //scroll event(menu 상단고정)
    const headerMenu = document.querySelector("#mainPagebtn");
    const mainPage = document.querySelector("#page01");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 800) {
        headerMenu.style.position = "fixed";
        headerMenu.style.top = "5%";
      } else if (window.scrollY <= 800) {
        headerMenu.style.position = "absolute";
        headerMenu.style.top = "85%";
      }
    });

    //intersection 감시 (page 나타날 때 애니메이션)
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

    const scrollDown = document.querySelector("#scrollDown");

    const typeAni = new TypeIt(scrollDown, { speed: 50, startDelay: 1000 })
      .type("Scroll down!", { delay: 500 })
      .move(-4, { delay: 200 })
      .delete(1)
      .type("D", { delay: 300 })
      .move(4)
      .pause(500)
      .type("<br>Please :)")
      .go();


      
    //jquery

    // scroll event - Fixed menu li에 actives 클래스 추가
    const menuBtns = $(".menuBtns");
    $(window).scroll(function () {
      const scrollNum = $(window).scrollTop();
      console.log(scrollNum);
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