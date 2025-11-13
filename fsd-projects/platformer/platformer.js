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
   // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200,670,200,29, "red")
createPlatform(350,550,200,20,"pink")
createPlatform(650,490,200,29,"blue")
createPlatform(950,440,200,20,"green")
createPlatform(1190,390,200,29,"purple")



    // TODO 3 - Create Collectables
createCollectable("diamond", 300,500,0,0)
createCollectable("kennedi",350,300,0,0)
createCollectable("max",700,300,0,0)


    
    // TODO 4 - Create Cannons
createCannon("top",350,2500);
createCannon("right",610,2500);
createCannon("top",1050,2500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
