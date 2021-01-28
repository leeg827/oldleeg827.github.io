window.addEventListener("load", function() {

    function cloudSky(e){
       document.body.style.backgroundImage = "url('images/clouds 2.GIF')";
       var button = e.target;
       var music = button.dataset.music;
       switchClip(music);
    }
 
    document.getElementById("cloudbutton").addEventListener("click",cloudSky)
 
    function starSky(e){
       document.body.style.backgroundImage = "url('images/stars.GIF";
       var button = e.target;
       var music = button.dataset.music;
       switchClip(music);
    }
 
    document.getElementById("starbutton").addEventListener("click",starSky)

    function rain(e){
        document.body.style.backgroundImage = "url('images/rain.GIF";
        var button = e.target;
        var music = button.dataset.music;
        switchClip(music);
     }
  
     document.getElementById("rainbutton").addEventListener("click",rain)
    
    function sleepCat(){
        document.getElementById("catimage").src='images/sleepingcat.png';
    }

    document.getElementById("catimage").addEventListener("mouseover",sleepCat)

    function Cat(){
        document.getElementById("catimage").src='images/cat.png';
    }

    document.getElementById("catimage").addEventListener("mouseout",Cat)

    function ombre(){
        document.getElementById("rectangle1").src='images/rectangle2.png';
    }

    document.getElementById("rectangle1").addEventListener("mouseover",ombre)

    function ombreNormal(){
        document.getElementById("rectangle1").src='images/rectangle1.png';
    }

    document.getElementById("rectangle1").addEventListener("mouseout",ombreNormal)

    function eyeMoon(){
        document.getElementById("moonimage").src='images/eyemoon.png';
    }

    document.getElementById("moonimage").addEventListener("mouseover",eyeMoon)

    function sleepMoon(){
        document.getElementById("moonimage").src='images/sleepingmoon.png';
    }

    document.getElementById("moonimage").addEventListener("mouseout",sleepMoon);

    function normal (){
        document.body.style.backgroundImage =  "url('images/default.png')";
    }

    document.getElementById("return").addEventListener("click",normal)

    var audio = document.getElementById("music")
    var playPauseBTN = document.getElementById("volume")
    var count = 0;

    audio.play();

    function playPause(){
        if (count==0){
            count = 1;
            audio.play();
            document.getElementById("volume").style.backgroundImage = "url(images/sound.png"
        }else{
            count=0;
            audio.pause();
            document.getElementById("volume").style.backgroundImage = "url(images/nosound.png"
        }
    }

    document.getElementById("volume").addEventListener("click", playPause);
    
    audio.addEventListener('canplaythrough', play);
    

    function switchClip(music) {
        audio.src = 'audio/' + music;
    }

    function play(){
       audio.play();
    }

<<<<<<< Updated upstream
 });    
=======
    function play (){
        audio.play();
    }

    audio.addEventListener("canplaythrough",play)
    audio.load()

 });
>>>>>>> Stashed changes
