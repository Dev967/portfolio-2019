function onImageLoaded(url, callback) {
    const img = new Image();
    img.src = url;
    img.onloadend = callback;   //Image has loaded or failed
    return;
}

new fullpage('#main',{
    navigationTooltips: ['HOME','SKILLS','CONTACT','ABOUT','PROJECTS'],
    loopBottom: true,
    controlArrows: false,
    slidesNavigation:true,
    anchors:['HOME','SKILLS','CONTACT','ABOUT','PROJECTS'],
});

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

//Typerwriter animation
    let i = j= k =0;
    
    var txt1 = "Hi! i am Anand";
    var txt2 = "and";
    var txt3 = "I am a Developer";

    let m =n = o=p =0;
    var aboutText1 = "Heya There...Nice to meet you,I am Anand And I'm a developer based in Indore M.P.";
    var aboutText2 = "I am a Developer but mainly i most intrested and focused in Web Developing.I Develop Web sites using HTML,CSS and JS.I've more than 4 months of experience with javascript and i am Familiar with ES6 syntax.I do know PHP and SQL and i use them in my sites.";
    var aboutText3 = "For Web applications i go with ReactJs and ReactRouter";
    var aboutText4 = "I am a computer Science Student.I have been purusing Bachelor of Techonoloy under the scool of computer science and Information Techonoloy from Sybmiosis University Of Applied Sciences,Indore, Since 2019";
 
    


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
print2=()=>{
    let i = 50;
    if(m<aboutText1.length){
    document.getElementById('aboutOne').innerHTML += aboutText1.charAt(m);
    setTimeout(print2,i);
    m++;    
    } else if(n<aboutText2.length){
        document.getElementById('aboutTwo').innerHTML += aboutText2.charAt(n);
        setTimeout(print2,i);
        n++;
    } else if(o<aboutText3.length){
        document.getElementById('aboutThree').innerHTML += aboutText3.charAt(o);
        setTimeout(print2,i);
        o++;
    } else if(p<aboutText4.length){
        document.getElementById('aboutFour').innerHTML += aboutText4.charAt(p);
        setTimeout(print2,i);
        p++;
    } 
}

//NEW EDIT
window.onload = () => {
 onImageLoaded('./Assets/ali-yahya-ytNFYf4d_30-unsplash.jpg',print1());
}
document.addEventListener('keydown',(e)=>{
if([32,37,38,39,40].indexOf(e.keyCode)> -1){
    e.preventDefault();
}
})
//skillpage
skillAnimate = ()=>{
    let i = 0.4;
    let t = gsap.timeline();
    t.to('.subhead',{
        x: 0,
        duration: i+0.2,
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


contactAnimate = ()=>{
    let t3 = gsap.timeline({});
    t3.to('.stackone',{
        x:0,
        duration:0.5,
    }).to('.stacktwo',{
        x:0,
        duration:0.5,
    })
    .to('.stackthree',{
        x:0,
        duration:0.5,
    }).to('.stackfour',{
        x:0,
        duration:0.5,
    }).to('.container',{
        x:0,
        duration: 0.5,
    })
}

window.addEventListener('wheel', function(event)
{
if (event.deltaY > 0){ //if scrolled
if(document.querySelector('.skillpage').getBoundingClientRect().top > 0){
    skillAnimate();
} else if(document.querySelector('.contact').getBoundingClientRect().top>0){
    contactAnimate();
} else if(document.querySelector('.about').getBoundingClientRect().top >0){
    print2();
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
                    this.onDown();
                }
            }
            this.yDown = null;
            this.xDown = null;
        }

    run(){
        this.element.addEventListener('touchmove',(evt)=>{
            this.handleTouchMove(evt);
        },false);
    }
}

var skilltouch = new touch('.landingpage');
skilltouch.onDown(()=>{skillAnimate();});
skilltouch.run();

var abouttouch = new touch('.contact');
abouttouch.onDown(()=>{ print2()});
abouttouch.run();

var contacttouch = new touch('.skillpage');
contacttouch.onDown(()=>{contactAnimate()});
contacttouch.run();

let name = document.querySelector('.namein');
let mail = document.querySelector('.mailin');

mail.onfocus =()=>{
    if(name.value.lenght < 3) alert("Name is too short, try full name.");
    else if(name.value.length > 15) alert("Name is too long, try initials.");
}