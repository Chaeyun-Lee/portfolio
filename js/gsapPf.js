gsap.registerPlugin(ScrollTrigger);

const hide =(item)=>{
    gsap.set(item,{autoAlpha:0});
}

const animate =(item =>{
    let defaultX = 0;
    let defaultY = 0;

    if(item.classList.contains("textBTT")){
        defaultX=0;
        defaultY=400;
    } else if(item.classList.contains("textLTR")){
        defaultX=-400;
        defaultY=0;
    } else if(item.classList.contains("textRTL")){
        defaultX=400;
        defaultY=0;
    }
    else if(item.classList.contains("textTTB")){
        defaultX=0;
        defaultY=-400;
    }
    gsap.fromTo(item,
        {autoAlpha:0,x:defaultX, y:defaultY},
        {autoAlpha:1,x:0, y:0, duration:3, overwrite:"auto", ease:"expo"}
    )
})

gsap.utils.toArray(".textGsap").forEach((item)=>{
    hide(item);

    ScrollTrigger.create({
        trigger:item,

        onEnter: ()=>{
            animate(item)
        }
    });
})
const page02Ani = gsap.timeline();
page02Ani.from(".title02 span:first-child",{autoAlpha:1,duration:1, y:200},"+=0.3")
page02Ani.from(".title02 span:nth-child(2)",{autoAlpha:1,duration:1, y:200},"+=0.3")
page02Ani.from(".title02 span:nth-child(3)",{autoAlpha:1,duration:1, y:200},"+=0.3")
page02Ani.from(".title02 span:nth-child(4)",{autoAlpha:1,duration:1, y:200},"+=0.3")
page02Ani.from(".title02 span:nth-child(5)",{autoAlpha:1,duration:1, y:200},"+=0.3")
page02Ani.from(".title02 span:nth-child(6)",{autoAlpha:1,duration:1, y:200},"+=0.3")

ScrollTrigger.create({
    animation:page02Ani,
    trigger:'.title02',
    start:"-40% 40%",
    end:"bottom 60%",
    scrub:3,
})

const page03Ani = gsap.timeline();
page03Ani.from(".page03h1 p:first-child",{autoAlpha:1, duration:1, y:-200},"+=0.2")
.from(".page03h1 p:nth-child(2)",{autoAlpha:1, duration:1, y:-200},"+=0.2")
.from(".page03h1 p:nth-child(3)",{autoAlpha:1, duration:1, y:-200},"+=0.2")

ScrollTrigger.create({
    animation:page03Ani,
    trigger:".page03h1",
    start:"-40% 60%",
    end:"bottom 45%",
    scrub:2,
})

gsap.utils.toArray(".pageBg").forEach((item)=>{
    let color=item.getAttribute("data-bgcolor");

    ScrollTrigger.create({
        trigger:item,
        start:"top 20%",
        end:"bottom 15%",
        markers:true,
        onEnter:()=>
            gsap.to("body",{
                backgroundColor:color,
                duration:0.5,
            }),
        onEnterBack:()=>gsap.to("body",{
            backgroundColor:color,
            duration:0.5,
        }),
    });
});

const page02Ani2 = gsap.timeline();
page02Ani2.from(".skills:first-child",{autoAlpha:1, duration:1, delay:0},"+=0.2")
.from(".skills:nth-child(2)",{autoAlpha:0, duration:1},"+=0.2")
.from(".skills:nth-child(3)",{autoAlpha:0, duration:1},"+=0.2")
.from(".skills:nth-child(4)",{autoAlpha:0, duration:1},"+=0.2")
.from(".skills:nth-child(5)",{autoAlpha:0, duration:1},"+=0.2")
.from(".skills:nth-child(6)",{autoAlpha:0, duration:1},"+=0.2")
.from(".skills:nth-child(7)",{autoAlpha:0, duration:1},"+=0.2")

ScrollTrigger.create({
    animation:page02Ani2,
    trigger:"#page02In",
    start:"10% 30%",
    end:"50% 45%",
    scrub:6,
    markers:true,
    delay:3,
})