function preload() {
  david= loadFont('Rubik-ExtraBoldItalic.ttf');
   img = loadImage('LandscapePicture.jpg');
   img2 = loadImage('BeachLandscape2.png');
 }
 
 function setup() {
   createCanvas(400, 400);
   textFont(david);
 }
 
 function draw() {
 // background(51,204,240);
   
   strokeWeight(4); 
 var sec = second(); 
 var min = minute(); 
 var hrs = hour(); 
   
   if (hrs < 12 || hrs == 24) {
     image(img, -145, 0);
       mer = "AM";
       }
   else {
     image(img2, -115, -122);
     mer = "PM";
   }
    
   
 sec = formatting(sec); 
 min = formatting(min); 
 hrs = formatting(hrs % 12); 
   if (hrs === "00") {
       hrs = "12";
     }
 // Color of the letters 
 fill(0); 
   
 // font size 
 textSize(52); 
   
 textAlign(CENTER,CENTER); 
   translate(width/2, height/5.3);
 // Display the time 
 text(hrs + ":" + min + ":" + sec + " " + mer, 0, 0); 
 } 
 
 // This function pads the time so that 0's are shown eg.06 
 function formatting(num){ 
   
 // Convert to int and check 
 // if less than 10 
 if(int(num) < 10) { 
   return "0" + num; 
 } 
   
 return num; 
 }
 