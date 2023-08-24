var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76bf470b-616a-4df4-8fb4-9d00069e57a0","92c768d4-9535-4707-a326-a3858792301f","ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f","10a445b9-17d4-408a-9b28-d8d33b943d12","079bbdcb-c7b0-4319-8b50-95e65c031020","f53f9343-31d6-4539-bc3d-ac6f3005879f","7f894736-d3e5-4f2d-8370-ef6d31f9debf"],"propsByKey":{"76bf470b-616a-4df4-8fb4-9d00069e57a0":{"name":"fruit2","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":15,"version":"dgwbp.8wvpBBLtCa7wdMITL_fy98ohw2","loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/76bf470b-616a-4df4-8fb4-9d00069e57a0.png"},"92c768d4-9535-4707-a326-a3858792301f":{"name":"fruit3","sourceUrl":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png","frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":5,"version":"oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png"},"ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f":{"name":"alienGreen_badge_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"10a445b9-17d4-408a-9b28-d8d33b943d12":{"name":"sword_silver_1","sourceUrl":null,"frameSize":{"x":100,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":"4zQHuB045YvA_WdlBJiliSb.h3tk1vWn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":109},"rootRelativePath":"assets/10a445b9-17d4-408a-9b28-d8d33b943d12.png"},"079bbdcb-c7b0-4319-8b50-95e65c031020":{"name":"fruit1","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"},"f53f9343-31d6-4539-bc3d-ac6f3005879f":{"name":"fruit4","sourceUrl":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"}}};
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

//creating sword
var sword = createSprite(50,200,40,40)
sword.setAnimation("sword_silver_1")

//creating restart text
var restart = createSprite(windowWidth/2,windowHeight/2,40,40)
restart.setAnimation("textGameOver_1")
restart.scale = 1
restart.visible = false
//creating gamestates
var PLAY = 1;
var END = 0;
var gamestate = 1;

//score & groups
var score = 0;
var fruitgroup = createGroup();
var fruitgroups = createGroup();
var enemygroup = createGroup();

fruit();
fruits();
enemy();
function draw() {
createCanvas(windowWidth,windowHeight);
background(rgb(105,150,135))
 
if (gamestate === PLAY) {
    sword.y = World.mouseY
    sword.x = World.mouseX
    fruit();
    fruits();
    enemy();
    background(rgb(105,150,135))
  
}

if(sword.isTouching(fruitgroup)){
    fruitgroup.destroyEach();
    score=score+2
    playSound("assets/category_whoosh/heavy_blade_whoosh_3.mp3")
  }
 
  if(sword.isTouching(fruitgroups)){
    fruitgroups.destroyEach();
    score=score+2
    playSound("assets/category_whoosh/heavy_blade_whoosh_3.mp3")
  }

sword.setCollider("rectangle",20,-18,75,30,129)
sword.debug = false;

if (gamestate === END) {
  fruitgroup.destroyEach()
  fruitgroups.destroyEach()
  enemygroup.destroyEach()
  fruitgroup.setVelocityXEach(0)
  fruitgroups.destroyEach()
  enemygroup.setVelocityXEach(0)
  background(rgb(80,10,0))
  noFill()
  fill("yellow")
  textSize(20)
  text("press (space) to restart",windowWidth/2.3,windowHeight/1.75)
  sword.y = World.mouseY
  sword.x = World.mouseX
  restart.visible = true;}

if (sword.isTouching(enemygroup)) {
   gamestate = END
playSound("assets/category_female_voiceover/game_over_female.mp3")}
if (keyDown("space")){
  gamestate = PLAY
  restart.visible = false
  
}
drawSprites();
// score
fill("blue")
textSize(30)
text("score: "+score,windowWidth/10, 100)
}
  
function fruit (){
if (World.frameCount%180 === 0) {
    var rand = randomNumber(1,4);
  var fruit = createSprite(windowWidth,randomNumber(10,windowHeight-50));
    fruit.setAnimation("fruit"+rand);
    fruit.scale = 0.3;
    fruit.lifetime = windowWidth;
    fruitgroup.add(fruit);
   var rand2 = 1 
    fruit.x = rand2
    if(rand2 === 1){
      fruit.x = windowWidth;
      fruit.velocityX = -(8+score/2)
    }
    
    if(rand2 === 2){
      fruit.x = windowWidth;
      fruit.velocityX = -(8+score/2)
    }
}
} 

function fruits (){
  if (World.frameCount%150 === 0) {
      var rand = randomNumber(1,4);
    var fruits = createSprite(windowWidth,randomNumber(10,windowHeight-50));
      fruits.setAnimation("fruit"+rand);
      fruits.scale = 0.3;
      fruits.lifetime = windowWidth;
      fruitgroups.add(fruits);
     var rand2 = randomNumber(1,2)
      fruits.x = rand2
      if(rand2 === 1){
        fruits.x = windowWidth;
        fruits.velocityX = -(8+score/2)
      }
      
      if(rand2 === 2){
        fruits.x = 0;
        fruits.velocityX = (8+score/2)
      }
  }
      
  } 

function enemy(){
if (World.frameCount%200===0) {
    var monster = createSprite(windowWidth,randomNumber(0,windowHeight));
    monster.setAnimation("alienGreen_badge_1");
    monster.scale = 2;
    monster.velocityX = -(10+score);
    monster.lifetime = windowWidth;
    
    enemygroup.add(monster)
}
if (World.frameCount%100===10) {
  var monster = createSprite(windowWidth,randomNumber(0,windowHeight));
  monster.setAnimation("alienGreen_badge_1");
  monster.scale = 2;
  monster.velocityX = -(10+score);
  monster.lifetime = windowWidth;
  
  enemygroup.add(monster)
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
