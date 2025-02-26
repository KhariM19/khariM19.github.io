$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600,500,100,20,"blue");
    createPlatform(400,609,100,20,"blue");
    createPlatform(1000,350,100,20,"blue");
    createPlatform(225,698,100,20,"blue");
    createPlatform(815,430,100,20,"blue");
    createPlatform(1150, 250,100,20,"blue")
    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 100, 700);
    createCollectable("kennedi",1350, 50)



    
    // TODO 4 - Create Cannons
    createCannon("left", 100, 700);
    createCannon("right", 500, 2000);
    createCannon("bottom",800,800)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
