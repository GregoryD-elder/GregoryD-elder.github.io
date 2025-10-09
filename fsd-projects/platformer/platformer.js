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
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 200, 200,10, "red");
    createPlatform(400,200,200,10, "black");
    createPlatform(600,600,200,10, "yellow");
    createPlatform(845,400,400,10, "blue");
    createPlatform(400,700,300,10);


    // TODO 3 - Create Collectables
    createCollectable("database", 500, 150);
    createCollectable("max", 1100, 350);
    createCollectable("diamond", 700, 500);
    createCollectable("database", 500, 650);


    
    // TODO 4 - Create Cannons
    createCannon("top", 700, 2500);
    createCannon("left", 340, 1500);
    createCannon("right", 600, 1650);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
