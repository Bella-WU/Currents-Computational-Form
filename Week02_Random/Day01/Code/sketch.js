var firstGroup = ["Max", "Aakanksha", "Patricia", "Julian", "Xu", "Patrick",
  "Ting", "Earl", "Carla"
];
var secondGroup = ["Mario", "Madison", "Jack", "Rik", "Leah", "Alyssa", "Dahee",
  "Kirsten", "Justin"
];
var things = ["eating hamburgers", "playing cards", "shooting a film",
  "learning Python", "singing karaoke"
];
var locations = ["on D12", "on Mars", "at Union Square", "in the Hudson River",
  "in bathroom"
];

function preload() {
  myImage = loadImage("assets/title.png");
  myFont = loadFont("assets/Christmas.ttf");
}

function setup() {
  createCanvas(800, 800);
  noLoop();

  background(68, 68, 68);

  firstGroup = shuffle(firstGroup);
  secondGroup = shuffle(secondGroup);
  things = shuffle(things);
  locations = shuffle(locations);
}

function draw() {
  var rows = 10;
  var cols = 10;

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      noStroke();
      if (col >= 1 && col <= 4) {
        fill(255, 255, 255);
        drawSquare(col * 80, row * 80, 320);
      } else if (col >= 5 && col <= 8) {
        fill(0, 0, 0);
        drawSquare(col * 80, row * 80, 320);
      } else {
        fill(random(255), random(255), random(255));
        drawSquare(col * 80, row * 80);
      }
    }

    contentInSentence();
  }

  textFont(myFont);
  textSize(70);
  fill(255, 87, 61);
  text("ADVENTURE", 220, 120);

  // image(myImage, 0, 0);

  function drawSquare(x, y) {
    var sideLength = 80;
    rect(x, y, sideLength, sideLength);
  }

  function contentInSentence() {
    for (var position = 0; position < 4; position++) {
      var firstPerson = firstGroup[position];
      var secondPerson = secondGroup[position];
      var thing = things[position];
      var location = locations[position];

      textSize(20);
      fill(random(255), random(255), random(255));
      text(firstPerson, 0, (position + 3) * 80);
      text(secondPerson, 720, (position + 3) * 80);
      fill(255, 255, 255);
      text(location + " with", 480, (position + 3) * 80);
      fill(0, 0, 0);
      text("is " + thing, 160, (position + 3) * 80);
    }
  }

}
