class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

start(){
  //creating a object for the Player class
  if(gameState===0){
player=new Player()
console.log("stART is working")
//creating a object for the Form class
form=new Form()
 player.getCount()
//console.log(playerCount)
form.display()
console.log("start is working")
 
 car1 = createSprite(width / 2 - 50, 864);
car1.addImage("car1", car1_img);
car1.scale=0.5

 car2 = createSprite(width / 2 + 100, 864);
 car2.addImage("car2", car2_img);
 car2.scale=0.5


 cars = [car1, car2];
  }

}


play() {
  form.hide()
  Player.getinfo();


 
  if (allPlayers !== undefined) {
    //image(track, 0, -height * 5, width, height * 6);

    //index of the array
    var index=0
    var x=0
    var y
 
    for(var z in allPlayers){
    x=x+400
    index=index+1
    
    y=height-allPlayers[z].distance
    cars[index-1].y=y
    cars[index-1].x=x
    
    console.log("this is distance of z player"+y)
   console.log(car1.x+ "this is car1   "+car1.y )
   console.log(car2.x+"this is car2   "+car2.y)
    }
    
    
  }
  if(keyIsDown(UP_ARROW)){
  player.distance+=10
  player.update()
  }
  drawSprites();
}


}
