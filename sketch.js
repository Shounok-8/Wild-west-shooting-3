var bullet , bulletImg;
var sherrif , sherrifImg ;
var scientist , scientistImg ;
var boss , bossImg;
var outlaw , outlawImg , bomber , bomberImg , marksman , marksmanImg;
var backgroundImg;
var gunslinger , gunslingerImg;
var gunslinger2 , gunslinger2Img;
var gunslinger3 , gunslinger3Img;
var redIndian , redIndianImg;
var billy , billyImg;
var bear , bearImg;
var butcher , butcherImg;
var gunslinger5 , gunslinger5Img;
var mayor , mayorImg;
var cowboy , cowboyImg;
var cowboy2 , cowboy2Img;
var cowboy3 , cowboy3Img;
var cowboy4 , cowboy4Img;
var pirate1  , pirate1Img;
var pirate2  , pirate2Img;
var pirate3  , pirate3Img;
var pirate4 , pirate4Img;
var minigun , minigunImg;
var great , greatImg;
var great2 , great2Img;
var sniper , sniperImg;
var sniper2 , sniper2Img;
var nun , nunImg;
var pirate5 , pirate5Img;
var outlaw2 ;
var outlaw3 ;
var bomber2;
var bomber3;
var marksman2;
var marksman3;

var gameOver, restart;
var score=0;

function preload(){
bulletImg=loadImage("bullet1.png")

sherrifImg=loadImage("Sherrif1.png");
gunslingerImg=loadImage("Gunslinger.png");
gunslinger2Img=loadImage("Gunslinger2.png");
gunslinger3Img=loadImage("Gunslinger3.png");
redIndianImg=loadImage("Red Indian.png");
billyImg=loadImage("Billy1.png");
bearImg=loadImage("bear1.png");
butcherImg=loadImage("butcher1.png");
gunslinger5Img=loadImage("Gunslinger5.png");
mayorImg=loadImage("Mayor.png")
cowboyImg=loadImage("cowboy.png")
cowboy2Img=loadImage("cowboy2.png")
cowboy3Img=loadImage("cowboy3.png")
cowboy4Img=loadImage("Cowboy4.png")
pirate1Img=loadImage("Pirate.png")
pirate2Img=loadImage("Pirate2 (2).png")
pirate3Img=loadImage("Pirate3.png")
pirate4Img=loadImage("Pirate4.png")
minigunImg=loadImage("MinigunCowboy (2).png")
greatImg=loadImage("Great1.png")
great2Img=loadImage("great2.png")
sniperImg=loadImage("sniper.png")
sniper2Img=loadImage("sniper1 (2).png")
nunImg=loadImage("nun1.png")
pirate5Img=loadImage("")

scientistImg=loadImage("Scientist1.png")
bossImg=loadImage("Boss1.png")
outlawImg=loadImage("Outlaw1.png")
bomberImg=loadImage("Bomber2.png")
marksmanImg=loadImage("Marksman1.png")
backgroundImg = loadImage("town5.jpg")
gameOver=loadImage("Game over 1.png")
restart=loadImage("Restart.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sherrif=createSprite(30, 450, 50, 50);
  sherrif.addImage(sherrifImg)
  sherrif.scale=0.6;

  gunslinger=createSprite(30, 450, 50, 50);
  gunslinger.addImage(gunslingerImg)
  gunslinger.scale=0.6;
  gunslinger.visible=false;
  
  gunslinger2=createSprite(30, 450, 50, 50);
  gunslinger2.addImage(gunslinger2Img)
  gunslinger2.scale=0.6;
  gunslinger2.visible=false;

  gunslinger3=createSprite(30, 450, 50, 50);
  gunslinger3.addImage(gunslinger3Img)
  gunslinger3.scale=0.6;
  gunslinger3.visible=false;

  gunslinger5=createSprite(30, 450, 50, 50);
  gunslinger5.addImage(gunslinger5Img)
  gunslinger5.scale=0.5;
  gunslinger5.visible=false;

  redIndian=createSprite(30, 450, 50, 50);
  redIndian.addImage(redIndianImg)
  redIndian.scale=0.4;
  redIndian.visible=false;

  billy=createSprite(30, 450, 50, 50);
  billy.addImage(billyImg)
  billy.scale=0.5;
  billy.visible=false;

  bear=createSprite(30, 450, 50, 50);
  bear.addImage(bearImg)
  bear.scale=0.5;
  bear.visible=false;

  butcher=createSprite(30, 450, 50, 50);
  butcher.addImage(butcherImg)
  butcher.scale=0.5;
  butcher.visible=false;

  mayor=createSprite(30, 450, 50, 50);
  mayor.addImage(mayorImg)
  mayor.scale=0.5;
  mayor.visible=false;

  cowboy=createSprite(30, 450, 50, 50);
  cowboy.addImage(cowboyImg)
  cowboy.scale=0.5;
  cowboy.visible=false;

  cowboy2=createSprite(30, 450, 50, 50);
  cowboy2.addImage(cowboy2Img)
  cowboy2.scale=0.9;
  cowboy2.visible=false;

  cowboy3=createSprite(30, 450, 50, 50);
  cowboy3.addImage(cowboy3Img)
  cowboy3.scale=0.5;
  cowboy3.visible=false;

  cowboy4=createSprite(30, 450, 50, 50);
  cowboy4.addImage(cowboy4Img)
  cowboy4.scale=0.5;
  cowboy4.visible=false;

  pirate1=createSprite(30, 450, 50, 50);
  pirate1.addImage(pirate1Img)
  pirate1.scale=0.5;
  pirate1.visible=false;

  pirate2=createSprite(30, 450, 50, 50);
  pirate2.addImage(pirate2Img)
  pirate2.scale=0.9;
  pirate2.visible=false;

  pirate3=createSprite(30, 450, 50, 50);
  pirate3.addImage(pirate3Img)
  pirate3.scale=0.9;
  pirate3.visible=false;

  pirate4=createSprite(30, 450, 50, 50);
  pirate4.addImage(pirate4Img)
  pirate4.scale=0.9;
  pirate4.visible=false;

  minigun=createSprite(30, 450, 50, 50);
  minigun.addImage(minigunImg)
  minigun.scale=0.7;
  minigun.visible=false;

  great=createSprite(30, 450, 50, 50);
  great.addImage(greatImg)
  great.scale=0.6;
  great.visible=false;

   great2=createSprite(30, 450, 50, 50);
  great2.addImage(great2Img)
  great2.scale=0.4;
  great2.visible=false;

   sniper=createSprite(30, 450, 50, 50);
  sniper.addImage(sniperImg)
  sniper.scale=0.6;
  sniper.visible=false;

  sniper2=createSprite(30, 450, 50, 50);
  sniper2.addImage(sniper2Img)
  sniper2.scale=0.6;
  sniper2.visible=false;

  nun=createSprite(30, 450, 50, 50);
  nun.addImage(nunImg)
  nun.scale=0.6;
  nun.visible=false;

  scientist=createSprite(200, 470, 50, 50);
  scientist.addImage(scientistImg)
  scientist.scale=0.5;
  scientist.lifetime = 50;

  outlaw=createSprite(1000,450,50,50)
  outlaw.addImage(outlawImg)
  outlaw.scale=0.5;
  outlaw2=createSprite(930,450,50,50)
  outlaw2.addImage(outlawImg)
  outlaw2.scale=0.5;
  outlaw3=createSprite(890,450,50,50)
  outlaw3.addImage(outlawImg)
  outlaw3.scale=0.5;

  bomber=createSprite(1150,470,50,50)
  bomber.addImage(bomberImg)
  bomber.scale=0.4;
   bomber2=createSprite(1200,470,50,50)
  bomber2.addImage(bomberImg)
  bomber2.scale=0.4;
   bomber3=createSprite(920,470,50,50)
  bomber3.addImage(bomberImg)
  bomber3.scale=0.4;
  
  marksman=createSprite(1300,490,50,50)
  marksman.addImage(marksmanImg)
  marksman.scale=0.5;
  marksman2=createSprite(1260,490,50,50)
  marksman2.addImage(marksmanImg)
  marksman2.scale=0.5;
  marksman3=createSprite(1240,490,50,50)
  marksman3.addImage(marksmanImg)
  marksman3.scale=0.5;

  //boss=createSprite(1150,430,50,50)
  //boss.addImage(bossImg)
 // boss.scale=0.7;
  
  

  
}

function draw() {
  background(backgroundImg);
  text("Score: "+ score, 500,50);
  //stroke("red");
  //strokeWeight(2);
  //textSize(20);
  //text("Sherrif good to see you back.We are in grave danger.Save the town from these ravagers!",200, 350)
  
  //camera.position.x = sherrif.x
camera.position.y = windowHeight/2;

if(keyDown("space")){
  bullet=createSprite(370,200);
  bullet.addImage(bulletImg);
  bullet.y=shooter.y;
  bullet.velocityX=-10;
  bullet.scale=0.1;
  }

if (keyDown("a")) {
   sherrif.visible=false
  gunslinger.visible=true
  
  }

  if (keyDown("b")) {
   sherrif.visible=false
    gunslinger.visible=false
    gunslinger2.visible=true
    
    }

    if (keyDown("c")) {
       sherrif.visible=false
      gunslinger.visible=false
      gunslinger2.visible=false
      gunslinger3.visible=true
      
      }

      if (keyDown("d")) {
        
        sherrif.visible=false
        gunslinger.visible=false
        gunslinger2.visible=false
        gunslinger3.visible=false
        redIndian.visible=true
        }

        if (keyDown("e")) {
          sherrif.visible=true
          gunslinger.visible=false
          gunslinger2.visible=false
          gunslinger3.visible=false
          redIndian.visible=false
          billy.visible=false
          bear.visible=false
          butcher.visible=false
          gunslinger5.visible=false
          mayor.visible=false
          cowboy.visible=false
          cowboy2.visible=false
          cowboy3.visible=false
          cowboy4.visible=false
          pirate1.visible=false
          pirate2.visible=false
          pirate2.visible=false
          pirate4.visible=false
           minigun.visible=false
           great.visible=false
           great2.visible=false
           sniper.visible=false
           sniper2.visible=false
           nun.visible=false
          }

          if (keyDown("f")) {
             sherrif.visible=false
            gunslinger.visible=false
            gunslinger2.visible=false
            gunslinger3.visible=false
            redIndian.visible=false
            billy.visible=true
            }

            if (keyDown("g")) {
              sherrif.visible=false
              gunslinger.visible=false
              gunslinger2.visible=false
              gunslinger3.visible=false
              redIndian.visible=false
              billy.visible=false
              bear.visible=true
              }

              if (keyDown("h")) {
                sherrif.visible=false
                gunslinger.visible=false
                gunslinger2.visible=false
                gunslinger3.visible=false
                redIndian.visible=false
                billy.visible=false
                bear.visible=false
                butcher.visible=true
                }

                if (keyDown("i")) {
                   sherrif.visible=false
                  gunslinger.visible=false
                  gunslinger2.visible=false
                  gunslinger3.visible=false
                  redIndian.visible=false
                  billy.visible=false
                  bear.visible=false
                  butcher.visible=false
                  gunslinger5.visible=true
                  }

                  if (keyDown("j")) {
                     sherrif.visible=false
                    gunslinger.visible=false
                    gunslinger2.visible=false
                    gunslinger3.visible=false
                    redIndian.visible=false
                    billy.visible=false
                    bear.visible=false
                    butcher.visible=false
                    gunslinger5.visible=false
                    mayor.visible=true
                    }

                    if (keyDown("k")) {
                        sherrif.visible=false
                      gunslinger.visible=false
                      gunslinger2.visible=false
                      gunslinger3.visible=false
                      redIndian.visible=false
                      billy.visible=false
                      bear.visible=false
                      butcher.visible=false
                      gunslinger5.visible=false
                      mayor.visible=false
                      cowboy.visible=true
                      }

                      if (keyWentDown("l")) {
                        sherrif.visible=false
                        gunslinger.visible=false
                        gunslinger2.visible=false
                        gunslinger3.visible=false
                        redIndian.visible=false
                        billy.visible=false
                        bear.visible=false
                        butcher.visible=false
                        gunslinger5.visible=false
                        mayor.visible=false
                        cowboy.visible=false
                        cowboy2.visible=true
                        }

                        if (keyWentDown("m")) {
                          sherrif.visible=false
                          gunslinger.visible=false
                          gunslinger2.visible=false
                          gunslinger3.visible=false
                          redIndian.visible=false
                          billy.visible=false
                          bear.visible=false
                          butcher.visible=false
                          gunslinger5.visible=false
                          mayor.visible=false
                          cowboy.visible=false
                          cowboy2.visible=false
                          cowboy3.visible=true
                          }

                          if (keyWentDown("n")) {
                            sherrif.visible=false
                            gunslinger.visible=false
                            gunslinger2.visible=false
                            gunslinger3.visible=false
                            redIndian.visible=false
                            billy.visible=false
                            bear.visible=false
                            butcher.visible=false
                            gunslinger5.visible=false
                            mayor.visible=false
                            cowboy.visible=false
                            cowboy2.visible=false
                            cowboy3.visible=false
                            cowboy4.visible=true
                            }

                            if (keyWentDown("o")) {
                              sherrif.visible=false
                              gunslinger.visible=false
                              gunslinger2.visible=false
                              gunslinger3.visible=false
                              redIndian.visible=false
                              billy.visible=false
                              bear.visible=false
                              butcher.visible=false
                              gunslinger5.visible=false
                              mayor.visible=false
                              cowboy.visible=false
                              cowboy2.visible=false
                              cowboy3.visible=false
                              cowboy4.visible=false
                              pirate1.visible=true
                              }

                              if (keyWentDown("p")) {
                                sherrif.visible=false
                                gunslinger.visible=false
                                gunslinger2.visible=false
                                gunslinger3.visible=false
                                redIndian.visible=false
                                billy.visible=false
                                bear.visible=false
                                butcher.visible=false
                                gunslinger5.visible=false
                                mayor.visible=false
                                cowboy.visible=false
                                cowboy2.visible=false
                                cowboy3.visible=false
                                cowboy4.visible=false
                                pirate1.visible=false
                                pirate2.visible=true
                                }

                                if (keyWentDown("q")) {
                                  sherrif.visible=false
                                  gunslinger.visible=false
                                  gunslinger2.visible=false
                                  gunslinger3.visible=false
                                  redIndian.visible=false
                                  billy.visible=false
                                  bear.visible=false
                                  butcher.visible=false
                                  gunslinger5.visible=false
                                  mayor.visible=false
                                  cowboy.visible=false
                                  cowboy2.visible=false
                                  cowboy3.visible=false
                                  cowboy4.visible=false
                                  pirate1.visible=false
                                  pirate2.visible=false
                                  pirate3.visible=true
                                  }

                                  if (keyWentDown("r")) {
                                    sherrif.visible=false
                                    gunslinger.visible=false
                                    gunslinger2.visible=false
                                    gunslinger3.visible=false
                                    redIndian.visible=false
                                    billy.visible=false
                                    bear.visible=false
                                    butcher.visible=false
                                    gunslinger5.visible=false
                                    mayor.visible=false
                                    cowboy.visible=false
                                    cowboy2.visible=false
                                    cowboy3.visible=false
                                    cowboy4.visible=false
                                    pirate1.visible=false
                                    pirate2.visible=false
                                    pirate3.visible=false
                                    pirate4.visible=true
                                    }

                                    if (keyWentDown("s")) {
                                      sherrif.visible=false
                                      gunslinger.visible=false
                                      gunslinger2.visible=false
                                      gunslinger3.visible=false
                                      redIndian.visible=false
                                      billy.visible=false
                                      bear.visible=false
                                      butcher.visible=false
                                      gunslinger5.visible=false
                                      mayor.visible=false
                                      cowboy.visible=false
                                      cowboy2.visible=false
                                      cowboy3.visible=false
                                      cowboy4.visible=false
                                      pirate1.visible=false
                                      pirate2.visible=false
                                      pirate3.visible=false
                                      pirate4.visible=false
                                      minigun.visible=true
                                      }

                                      if (keyWentDown("t")) {
                                        sherrif.visible=false
                                        gunslinger.visible=false
                                        gunslinger2.visible=false
                                        gunslinger3.visible=false
                                        redIndian.visible=false
                                        billy.visible=false
                                        bear.visible=false
                                        butcher.visible=false
                                        gunslinger5.visible=false
                                        mayor.visible=false
                                        cowboy.visible=false
                                        cowboy2.visible=false
                                        cowboy3.visible=false
                                        cowboy4.visible=false
                                        pirate1.visible=false
                                        pirate2.visible=false
                                        pirate3.visible=false
                                        pirate4.visible=false
                                        minigun.visible=false
                                        great.visible=true
                                        }

                                        if (keyWentDown("u")) {
                                        sherrif.visible=false
                                        gunslinger.visible=false
                                        gunslinger2.visible=false
                                        gunslinger3.visible=false
                                        redIndian.visible=false
                                        billy.visible=false
                                        bear.visible=false
                                        butcher.visible=false
                                        gunslinger5.visible=false
                                        mayor.visible=false
                                        cowboy.visible=false
                                        cowboy2.visible=false
                                        cowboy3.visible=false
                                        cowboy4.visible=false
                                        pirate1.visible=false
                                        pirate2.visible=false
                                        pirate3.visible=false
                                        pirate4.visible=false
                                        minigun.visible=false
                                        great.visible=false
                                        great2.visible=true
                                        }

                                         if (keyWentDown("v")) {
                                        sherrif.visible=false
                                        gunslinger.visible=false
                                        gunslinger2.visible=false
                                        gunslinger3.visible=false
                                        redIndian.visible=false
                                        billy.visible=false
                                        bear.visible=false
                                        butcher.visible=false
                                        gunslinger5.visible=false
                                        mayor.visible=false
                                        cowboy.visible=false
                                        cowboy2.visible=false
                                        cowboy3.visible=false
                                        cowboy4.visible=false
                                        pirate1.visible=false
                                        pirate2.visible=false
                                        pirate3.visible=false
                                        pirate4.visible=false
                                        minigun.visible=false
                                        great.visible=false
                                        great2.visible=false
                                        sniper.visible=true
                                        }

                                         if (keyWentDown("w")) {
                                        sherrif.visible=false
                                        gunslinger.visible=false
                                        gunslinger2.visible=false
                                        gunslinger3.visible=false
                                        redIndian.visible=false
                                        billy.visible=false
                                        bear.visible=false
                                        butcher.visible=false
                                        gunslinger5.visible=false
                                        mayor.visible=false
                                        cowboy.visible=false
                                        cowboy2.visible=false
                                        cowboy3.visible=false
                                        cowboy4.visible=false
                                        pirate1.visible=false
                                        pirate2.visible=false
                                        pirate3.visible=false
                                        pirate4.visible=false
                                        minigun.visible=false
                                        great.visible=false
                                        great2.visible=false
                                        sniper.visible=false
                                         sniper2.visible=true
                                        
                                        }

                                        if (keyWentDown("x")) {
                                        sherrif.visible=false
                                        gunslinger.visible=false
                                        gunslinger2.visible=false
                                        gunslinger3.visible=false
                                        redIndian.visible=false
                                        billy.visible=false
                                        bear.visible=false
                                        butcher.visible=false
                                        gunslinger5.visible=false
                                        mayor.visible=false
                                        cowboy.visible=false
                                        cowboy2.visible=false
                                        cowboy3.visible=false
                                        cowboy4.visible=false
                                        pirate1.visible=false
                                        pirate2.visible=false
                                        pirate3.visible=false
                                        pirate4.visible=false
                                        minigun.visible=false
                                        great.visible=false
                                        great2.visible=false
                                        sniper.visible=false
                                         sniper2.visible=false
                                         nun.visible=true
                                        
                                        }

                                       

                                         


      
    
  

  
if(keyDown("Right")){
sherrif.x =sherrif.x +100
}

if(keyDown("Left")){
sherrif.x = sherrif.x-100
}

if(keyDown("Right")){
  gunslinger.x =sherrif.x +100
  }
  
  if(keyDown("Left")){
  gunslinger.x = sherrif.x-100
  }

  if(keyDown("Right")){
    gunslinger2.x =sherrif.x +100
    }
    
    if(keyDown("Left")){
    gunslinger2.x = sherrif.x-100
    }

    if(keyDown("Right")){
      gunslinger3.x =sherrif.x +100
      }
      
      if(keyDown("Left")){
      gunslinger3.x = sherrif.x-100
      }

      if(keyDown("Right")){
        redIndian.x =sherrif.x +100
        }
        
        if(keyDown("Left")){
        redIndian.x = sherrif.x-100
        }

        if(keyDown("Right")){
          billy.x =sherrif.x +100
          }
          
          if(keyDown("Left")){
          billy.x = sherrif.x-100
          }

          if(keyDown("Right")){
            bear.x =sherrif.x +100
            }
            
            if(keyDown("Left")){
            bear.x = sherrif.x-100
            }

            if(keyDown("Right")){
              butcher.x =sherrif.x +100
              }
              
              if(keyDown("Left")){
              butcher.x = sherrif.x-100
              }

              if(keyDown("Right")){
                gunslinger5.x =sherrif.x +100
                }
                
                if(keyDown("Left")){
                gunslinger5.x = sherrif.x-100
                }

                if(keyDown("Right")){
                  mayor.x =sherrif.x +100
                  }
                  
                  if(keyDown("Left")){
                  mayor.x = sherrif.x-100
                  }

                  if(keyDown("Right")){
                    cowboy.x =sherrif.x +100
                    }
                    
                    if(keyDown("Left")){
                    cowboy.x = sherrif.x-100
                    }

                    
                  if(keyDown("Right")){
                    cowboy2.x =sherrif.x +100
                    }
                    
                    if(keyDown("Left")){
                    cowboy2.x = sherrif.x-100
                    }

                    
                  if(keyDown("Right")){
                    cowboy3.x =sherrif.x +100
                    }
                    
                    if(keyDown("Left")){
                    cowboy3.x = sherrif.x-100
                    }

                    
                  if(keyDown("Right")){
                    cowboy4.x =sherrif.x +100
                    }
                    
                    if(keyDown("Left")){
                    cowboy4.x = sherrif.x-100
                    }

                    if(keyDown("Right")){
                      pirate1.x =sherrif.x +100
                      }
                      
                      if(keyDown("Left")){
                      pirate1.x = sherrif.x-100
                      }

                      
                    if(keyDown("Right")){
                      pirate2.x =sherrif.x +100
                      }
                      
                      if(keyDown("Left")){
                      pirate2.x = sherrif.x-100
                      }

                      
                    if(keyDown("Right")){
                      pirate3.x =sherrif.x +100
                      }
                      
                      if(keyDown("Left")){
                      pirate3.x = sherrif.x-100
                      }

                      
                    if(keyDown("Right")){
                      pirate4.x =sherrif.x +100
                      }
                      
                      if(keyDown("Left")){
                      pirate4.x = sherrif.x-100
                      }

                      if(keyDown("Right")){
                        minigun.x =sherrif.x +100
                        }
                        
                        if(keyDown("Left")){
                        minigun.x = sherrif.x-100
                        }

                        if(keyDown("Right")){
                          great.x =sherrif.x +100
                          }
                          
                          if(keyDown("Left")){
                          great.x = sherrif.x-100
                          }

                          if(keyDown("Right")){
                          great2.x =sherrif.x +100
                          }
                          
                          if(keyDown("Left")){
                          great2.x = sherrif.x-100
                          }

                          if(keyDown("Right")){
                          sniper.x =sherrif.x +100
                          }
                          
                          if(keyDown("Left")){
                          sniper.x = sherrif.x-100
                          }

                          if(keyDown("Right")){
                          sniper2.x =sherrif.x +100
                          }
                          
                          if(keyDown("Left")){
                          sniper2.x = sherrif.x-100
                          }

                          if(keyDown("Right")){
                          nun.x =sherrif.x +100
                          }
                          
                          if(keyDown("Left")){
                          nun.x = sherrif.x-100
                          }



                          
                    
     drawSprites();
   }

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  outlawGroup.destroyEach();
  
  
   score = 0;
}