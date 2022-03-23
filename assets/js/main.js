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

function videohover (videolocation, video){
    var videolocation =document.querySelector(videolocation)
    var video =document.querySelector(video)

    //quand je hover videolocation img disparait et video apparait
    //quand je dé hover videolocation img apparait et video disparait
    videolocation.addEventListener('mouseenter', function (){
        video.play()
        $(video).show()
    })
    videolocation.addEventListener('mouseleave', function (){
        video.pause()
        $(video).hide()
    });
}

function videohover2 (videolocation, video,img){
    var videolocation =document.querySelector(videolocation)
    var video =document.querySelector(video)
    var image = document.querySelector(img)

    videolocation.addEventListener('mouseenter', function (){
        video.play()
        $(video).show()
        $(image).hide()
    })
    videolocation.addEventListener('mouseleave', function (){
        video.pause()
        $(video).hide()
        $(image).show()
    });
}

videohover('.mainhover','.videogantz1')
videohover2('.carouselhoverimg2','.videogantz2',".hoverimg2")

videohover2('.carouselhoverimg3','.videogantz3',".hoverimg3")
videohover2('.carouselhoverimg4','.videogantz4',".hoverimg4")
videohover2('.carouselhoverimg5','.videogantz5',".hoverimg5")
videohover2('.carouselhoverimg6','.videogantz6',".hoverimg6")
videohover2('.carouselhoverimg7','.videogantz7',".hoverimg7")
videohover2('.carouselhoverimg8','.videogantz8',".hoverimg8")
videohover2('.carouselhoverimg9','.videogantz9',".hoverimg9")
videohover2('.carouselhoverimg10','.videogantz10',".hoverimg10")
videohover2('.carouselhoverimg11','.videogantz11',".hoverimg11")

