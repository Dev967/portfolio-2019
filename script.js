document.addEventListener('DOMContentLoaded',(e)=>{

    function onImageLoaded(url, callback) {
        const img = new Image();
        img.src = url;
        img.onloadend = callback;   //Image has loaded or failed
        return;
    }
    
    new fullpage('#main',{
        navigationTooltips: ['HOME','SKILLS','CONTACT','ABOUT','PROJECTS'],
        controlArrows: false,
        slidesNavigation:true,
        anchors:['HOME','SKILLS','CONTACT','ABOUT','PROJECTS'],
        fadingEffect: true
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
        var aboutText1 = "Heya There...Nice to meet you,I am Anand And I'm a developer based in Indore";
        var aboutText2 = "I am a complete MERN stack developer, looking forward to become a full-stack developer. I am highly intrested in Web technologies that's why ";
        var aboutText3 = "I am well aware of new trends and technologies in this field.";
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
        let contactBound = document.querySelector('.contact').getBoundingClientRect().top;
        let landingBound = document.querySelector('.landingpage').getBoundingClientRect().top;
        let aboutBound =  document.querySelector('.about').getBoundingClientRect().top ;
        let skillBound = document.querySelector('.skillpage').getBoundingClientRect().top;
        let projectBound = document.querySelector('.projects').getBoundingClientRect().top;

    if (event.deltaY){ 
    if(landingBound == 0 ) {
        onImageLoaded('./Assets/secondSlideImage.jpg',skillAnimate())
    } else if( contactBound  == 0 ){
        onImageLoaded('./Assets/secondSlideImage.jpg',skillAnimate())
        onImageLoaded('./Assets/AboutImage.jpg',print2())

    } else if(skillBound == 0 || aboutBound == 0){
        onImageLoaded('./Assets/Contact-image.jpg',contactAnimate())
    } else  if(projectBound ==0){
        console.log("It got here");
        onImageLoaded('./Assets/AboutImage.jpg',print2())
    }
    }
    });
    
    //For touch
        console.log("Image laoded");
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
    
        onDown(anotherFunc){
            this.onDown = anotherFunc;
        }
        onUp(anotherFunc){
            this.onUp = anotherFunc;
        }
        handleTouchMove = (evt) =>{
                if(!this.xDown || !this.yDown) return;

                let yUp = evt.touches[0].clientY;
                let xUp = evt.touches[0].clientX;
                
                let xDiff = this.xDown - xUp;
                let yDiff = this.yDown - yUp;

                if(Math.abs(xDiff) > Math.abs(yDiff)){}
                else{
                    if(yDiff > 0) this.onDown();
                    else this.onUp();
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
    
    let skilltouch = new touch('.landingpage');
    skilltouch.onDown(()=>skillAnimate());
    skilltouch.onUp(()=>{return});
    skilltouch.run();
    
    let abouttouch = new touch('.contact');
    abouttouch.onDown(()=>print2());
    abouttouch.onUp(() => skillAnimate())
    abouttouch.run();
    
    let contacttouch = new touch('.skillpage');
    contacttouch.onDown(()=>contactAnimate());
    contacttouch.onUp(()=>{return});
    contacttouch.run();

    let ContantactUp = new touch(".about");
    ContantactUp.onDown(()=>{return});
    ContantactUp.onUp(()=>contactAnimate());
    ContantactUp.run();

    let projectTouch = new touch('.projects');
    projectTouch.onDown(()=> {return});
    projectTouch.onUp(()=>print2())
    
    let name = document.querySelector('.namein');
    let mail = document.querySelector('.mailin');
    
    mail.onfocus =()=>{
        if(name.value.lenght < 3) alert("Name is too short, try full name.");
        else if(name.value.length > 15) alert("Name is too long, try initials.");
    }

});

let performContact = () => {
    alert("Contact Number: "+ 9685275197 )
}
