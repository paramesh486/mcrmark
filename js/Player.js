class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.distance=0
    this.positionX = 0;
    this.positionY = 0;
  }



  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }


update(){
  var z="players/player"+player.index
 database.ref(z).update({
  name:this.name,
  distance:this.distance
  })

}


static getinfo() {
  var playerCountRef = database.ref("players");
  playerCountRef.on("value", data => {
    allPlayers = data.val();
  });
}

}