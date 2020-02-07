
new fullpage('#main',{
    navigation: true,
    navigationTooltips: ['HOME','SKILLS','CONTACT','ABOUT','PROJECTS'],
    loopBottom: true,
    showActiveTooltip: true,
    controlArrows: false,
    slidesNavigation:true,
    anchors:['HOME','SKILLS','CONTACT','ABOUT','PROJECTS'],
});

let i = j= k =0;
    var txt1 = "Hi! i am Anand";
    var txt2 = "and";
    var txt3 = "I am a Developer";

    let t1 = gsap.timeline({paused: true,});
t1.to(".btn1",{
    opacity: 1,
    duration: 0.4,
})
.to('.btn2',{
    opacity: 1,
    duration: 0.4,
}).to('.btn3',{
    opacity: 1,
    duration: 0.4,
}).to('.btn4',{
    opacity: 1,
    duration: 0.4,
})
    function print1(){
    if(i< txt1.length){
        document.getElementById('one').innerHTML += txt1.charAt(i);
        setTimeout(print1,100);
        i++;
    } else if(j< txt2.length){
            document.getElementById('two').innerHTML += txt2.charAt(j);
            setTimeout(print1,90);
            j++;
        }
     else if(k< txt3.length){
            document.getElementById('three').innerHTML += txt3.charAt(k);
            setTimeout(print1,90);
            k++;
        } else if(k>= txt3.length){
            t1.play();
        }
}
let skill = document.querySelector('.skillpage');

window.onload = () => {
    print1();
}
skillAnimate = ()=>{
    let i = 0.4;
    let t = gsap.timeline();
    t.to('.subhead',{
        x: 0,
        duration: i+0.3,
    })
    .to('.one',{
        x: 0,
        duration: i+0.2,
    })
    .to('.two',{
     x: 0,
     duration: i,
    })
    .to('.three',{
     x: 0,
     duration: i,
    })
    .to('.four',{
     x: 0,
     duration: i,
    })
    .to('.five',{
     x: 0,
     duration: i,
    })
    .to('.six',{
     x: 0,
     duration: i,
    })
}
window.addEventListener('wheel', function(event)
{
if (event.deltaY > 0){
if(skill.getBoundingClientRect().top >= 0){
    skillAnimate();
}
}
});

//For touch
class touch{
    constructor(element){
        this.xDown = null;
        this.yDown = null;
        this.element = document.querySelector(element); 
        this.element.addEventListener('touchstart',(evt)=>{
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        },false);  
    }

    onDown(callback){
        this.onDown = callback;
        return;
    }
    handleTouchMove = (evt) =>{
        if(!this.xDown || !this.yDown){
            return;
        }
            var xUp = evt.touches[0].ClientX;
            var yUp = evt.touches[0].ClientY;
    
            var xDiff = this.xDown -xUp;
            var yDiff = this.yDown -yUp;
    
            if(Math.abs(xDiff)> Math.abs(yDiff)){
            }else{
                if(yDiff > 0){
                    console.log("up");
                } else{
                    skillAnimate();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                }
            }
            this.yDown = null;
            this.xDown = null;
    }

    run(){
        console.log(" i am running");
        this.element.addEventListener('touchmove',(evt)=>{
            this.handleTouchMove(evt).bind(this);
        },false);
    }
}

var skilltouch = new touch('.landingpage');
skilltouch.onDown(()=>{skillAnimate();});
skilltouch.run();

