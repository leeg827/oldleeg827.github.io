window.addEventListener("load", function() {

   function cloudSky(){
      document.body.style.backgroundImage = "url('images/cloudplaceholder.png')"
   }

   document.getElementById("cloud").addEventListener("click",cloudSky)

   function starSky(){
      document.body.style.backgroundImage = "url('images/starplaceholder.png')"
   }

   document.getElementById("star2").addEventListener("click",starSky)

   function rainSky(){
      document.body.style.backgroundImage = "url('images/rainplaceholder.png')"
   }

   document.getElementById("drop2").addEventListener("click",rainSky)

});