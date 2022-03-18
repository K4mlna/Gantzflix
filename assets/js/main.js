// right event
function rightScroll(carousel, rightArrow) {
    const scroll = document.querySelector(carousel);
    const right = document.querySelector(rightArrow);                       
    scroll.scrollLeft += scroll.offsetWidth;
    
}

// left event
function leftScroll(carousel, leftArrow) {
    const scroll = document.querySelector(carousel);
    const left = document.querySelector(leftArrow);
    scroll.scrollLeft -= scroll.offsetWidth;
    
}

//hover
function hover(leftbutton, rightbutton, carouselindex){
   const carousel = document.querySelector(carouselindex);
    carousel.addEventListener('mouseenter', () =>
    $(leftbutton).show(), 
    );

    carousel.addEventListener('mouseenter', () =>
    $(rightbutton).show(), 
    );

    carousel.addEventListener('mouseleave', () =>
    $(leftbutton).hide(), 
    );

    carousel.addEventListener('mouseleave', () =>
    $(rightbutton).hide(), 
    );
};


function random(classofimg, path){

        var counter=[] 
 
        for (i=1; i<=10; i++){
            var verify=false
            var randomnumber = Math.round(Math.random()*(10-1)+1)
            while (verify==false){
                if (counter.includes(randomnumber)){
                    randomnumber = Math.round(Math.random()*(10-1)+1)
                }
                else {
                    verify=true
                }
            }
            var imagename = (classofimg + i.toString())
            var random1= document.querySelector(imagename)
            var randomimage1 = path + randomnumber.toString() + ".jpg"
            random1.src=randomimage1
            counter.push(randomnumber)
        }
        console.log (counter)
}

random(".randomimglast","assets/images/tomes/last hero/")
random(".randomimglastinside","assets/images/tomes/insidehero/")
random(".randomimggigant","assets/images/tomes/gigant/")
random(".randomimggigantinside","assets/images/tomes/insidegigant/")
random(".randomimgost","assets/images/tomes/Ost/")

const blacknavbar = document.querySelector(".transformnav");

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if (scrollTop >= 910){
        $(blacknavbar).show();
    }
    if (scrollTop < 910){
        $(blacknavbar).hide();
    }
})

