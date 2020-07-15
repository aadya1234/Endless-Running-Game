var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["49a87e94-4a72-4a0c-a25a-4906c0b8d6dd","579ad496-a4b8-4323-90c7-9ab87d9528da","5f5654ed-0810-4b8e-9f2b-b16713f8f891","1d9ab255-245f-4e8f-a443-4cd22f683ed4","f28a1991-5758-47ff-b231-bc3fe5af1258","284cb38f-b2ed-4dcf-bb02-f782f806806a","5eee4c51-1a03-4855-a817-5682b4989f76","39240010-2387-48e8-9c61-f7e901f41104"],"propsByKey":{"49a87e94-4a72-4a0c-a25a-4906c0b8d6dd":{"name":"Friend1","sourceUrl":null,"frameSize":{"x":199,"y":355},"frameCount":1,"looping":true,"frameDelay":12,"version":"RqHbk7YM_3_D_7MoAnuYOLrKfBHGA.Db","loadedFromSource":true,"saved":true,"sourceSize":{"x":199,"y":355},"rootRelativePath":"assets/49a87e94-4a72-4a0c-a25a-4906c0b8d6dd.png"},"579ad496-a4b8-4323-90c7-9ab87d9528da":{"name":"Me","sourceUrl":"assets/api/v1/animation-library/gamelab/NDAxIKjkicarH5SX5GNf.AtK3ZeMVFyr/category_characters/kid_16_walking.png","frameSize":{"x":175,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"NDAxIKjkicarH5SX5GNf.AtK3ZeMVFyr","loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NDAxIKjkicarH5SX5GNf.AtK3ZeMVFyr/category_characters/kid_16_walking.png"},"5f5654ed-0810-4b8e-9f2b-b16713f8f891":{"name":"ground","sourceUrl":null,"frameSize":{"x":400,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"K9YlErKDQCKVPyIUexH4.T32ivPDjqIH","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":8},"rootRelativePath":"assets/5f5654ed-0810-4b8e-9f2b-b16713f8f891.png"},"1d9ab255-245f-4e8f-a443-4cd22f683ed4":{"name":"Friend2","sourceUrl":null,"frameSize":{"x":199,"y":355},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZuUwGA1AQbkQ.4um.3fUDbgfxHIiaySQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":199,"y":355},"rootRelativePath":"assets/1d9ab255-245f-4e8f-a443-4cd22f683ed4.png"},"f28a1991-5758-47ff-b231-bc3fe5af1258":{"name":"Friend3","sourceUrl":"assets/api/v1/animation-library/gamelab/TgagGoEH.62TCRI4IklGDy44GOGRvybo/category_characters/kid_15_side.png","frameSize":{"x":213,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"TgagGoEH.62TCRI4IklGDy44GOGRvybo","loadedFromSource":true,"saved":true,"sourceSize":{"x":213,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TgagGoEH.62TCRI4IklGDy44GOGRvybo/category_characters/kid_15_side.png"},"284cb38f-b2ed-4dcf-bb02-f782f806806a":{"name":"cloud","sourceUrl":null,"frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":12,"version":"IILe9IqsnwxXGnJ3YE8IZdXqH2zUFVOi","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/284cb38f-b2ed-4dcf-bb02-f782f806806a.png"},"5eee4c51-1a03-4855-a817-5682b4989f76":{"name":"restart","sourceUrl":"assets/v3/animations/jzhHazXhFjfklw6XvKI-wD_IqqAQD70t1xAOwwjk-GU/5eee4c51-1a03-4855-a817-5682b4989f76.png","frameSize":{"x":220,"y":218},"frameCount":1,"looping":true,"frameDelay":4,"version":"3xpF0eE7Vjy.z_1thmpFJq1IUYaSuWeZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":218},"rootRelativePath":"assets/v3/animations/jzhHazXhFjfklw6XvKI-wD_IqqAQD70t1xAOwwjk-GU/5eee4c51-1a03-4855-a817-5682b4989f76.png"},"39240010-2387-48e8-9c61-f7e901f41104":{"name":"gameOver","sourceUrl":"assets/v3/animations/jzhHazXhFjfklw6XvKI-wD_IqqAQD70t1xAOwwjk-GU/39240010-2387-48e8-9c61-f7e901f41104.png","frameSize":{"x":583,"y":214},"frameCount":1,"looping":true,"frameDelay":4,"version":"u1MmYE9GJYPuX9tSw4FhLdj_BwEygTTs","loadedFromSource":true,"saved":true,"sourceSize":{"x":583,"y":214},"rootRelativePath":"assets/v3/animations/jzhHazXhFjfklw6XvKI-wD_IqqAQD70t1xAOwwjk-GU/39240010-2387-48e8-9c61-f7e901f41104.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

      //initiate Game STATEs
      var PLAY = 1;
      var END = 0;
      var gameState = PLAY;

     
      //creating a player and animating it
      var me = createSprite(38,310);
      me.setAnimation("Me");
      //reducing the size of the player
      me.scale=0.25;
      
      
      //creating a ground and animating it
      var ground = createSprite(400, 370);
      ground.setAnimation("ground");
      ground.x=ground.width/2;
      
      //creating the groups
      var friendGroup = createGroup();
      var cloudGroup = createGroup();
                
      //score
      var count = 0;
      
      //setting the text size to 16
      textSize(16);
       
      //place gameOver and restart icon on the screen
      var gameOver = createSprite(200,200);
      var restart = createSprite(200,280);
      gameOver.setAnimation("gameOver");
      gameOver.scale = 0.5;
      restart.setAnimation("restart");
      restart.scale = 0.4;
      
      gameOver.visible = false;
      restart.visible = false;
  
      function draw() {
      
      //setting a background colour(clearing the screen)
      background("pink");
      
      //telling the player to collide with the ground
      me.collide(ground);
      
      //adding the score 
      text("Score: "+ count, 250, 100);
     
      
      if (gameState === PLAY) {
      //caling the functions
      spawnClouds();
      spawnFriend();
      
      //jump when the space key is pressed
        if(keyDown("space") && me.y >= 300){
        me.velocityY = -10 ;
          playSound("assets/category_app/app_ice_button_click_3.mp3", false);
        }
       
       //add gravity
      me.velocityY = me.velocityY + 0.8;
      
      //giving velocity to the ground                                                           
      ground.velocityX=-6;
      
      //resetting the ground
      if(ground.x<180){
      ground.x=ground.width/2;
      } 
      
      //scoring
      count = count+ Math.round(World.frameRate/60);
      if(count%200===0){
      playSound("assets/category_instrumental/marimba_music_1.mp3", false);
      }
      
      if(friendGroup.isTouching(me)){
      gameState=END;  
      playSound("assets/category_female_voiceover/game_over_female.mp3", false);
      } 
      }
      else if(gameState===END){
       //ground does not move
        ground.velocityX = 0;
      me.velocityY = 0;
      friendGroup.setVelocityXEach(0);
      cloudGroup.setVelocityXEach(0);
      
      gameOver.visible = true;
      restart.visible = true;
  
       
      
      if(mousePressedOver(restart)) {
       reset();
       }
       }
      //drawing all the objects
      drawSprites();
      
      }
      
      function reset(){
      gameState=PLAY;  
      restart.visible=false;
      gameOver.visible=false;  
      cloudGroup.destroyEach();
      friendGroup.destroyEach();
      
      count=0;
        
      }


      //creating a function to spawn the obstacle
      function spawnFriend(){
      
      if (World.frameCount%50===0) {
      //creating the obstacle
      var friend = createSprite(400,340);
      //generate random obstacles
      var rand = randomNumber(1,3);
      //setting animation to the obstacle
      friend.setAnimation("Friend" + rand);
      
      //reducing the size of the obstacle
      friend.scale=0.15;
      //setting velocity for the obstacle
      friend.velocityX=-6;  
      
      //setting lifetime for the obstacle
      friend.lifetime=100;
      
      //adding the obstacle to the group
      friendGroup.add(friend);
     
      }
      }
    
     //creating a function to spawn the clouds
     function spawnClouds(){
     if(World.frameCount%60===0){
     //creating the cloud
     var cloud = createSprite(200, 200);
     //setting Y position(random)for the cloud
     cloud.y = randomNumber(180,210);
        //setting cloud animation
        cloud.setAnimation("cloud");
        
        //reducing the size of the cloud
        cloud.scale = 0.1;
        //setting velocity for the cloud
        cloud.velocityX = -3;
         
  
         //assign lifetime to the variable
        cloud.lifetime = 134;
     //adding the cloud to the group
     cloudGroup.add(cloud);
          
    }  
    }
    
    

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
