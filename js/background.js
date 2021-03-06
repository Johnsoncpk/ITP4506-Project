const LINE_DURATION = 2;
const LINE_WIDTH_START = 4;

$(window).on("resize", function () {
  resizeCanvas(window.innerWidth, window.innerHeight);
});

$(document).ready(function () {
  enableDrawingCanvas();
  resizeCanvas(window.innerWidth, window.innerHeight);
});

var active = true;

var canvas;
var context;

var lineColor = "rgb(0, 220, 180)";
var lineDuration = LINE_DURATION;
var lineFadeLinger = 1;
var lineWidthStart = LINE_WIDTH_START;
var fadeDuration = 40;
var drawEveryFrame = 1; // Only adds a Point after these many 'mousemove' events

var clickCount = 0;
var frame = 0;

var flipNext = true;

var points = new Array();

///////////////////////
// Program functions //
///////////////////////

// Find canvas reference & enable listeners
function enableDrawingCanvas() {
  if (canvas === undefined) {
    canvas = document.getElementById("background");
    context = canvas.getContext("2d");
    enableListeners();
    init();
  }
}

// Initialize animation start
function init() {
  draw();
}

// Draw current state
function draw() {
  if (active) {
    animatePoints();
    window.requestAnimFrame(draw);
  }
}

// Update mouse positions
function animatePoints() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  var duration = (lineDuration * 1000) / 60;
  var point, lastPoint;

  for (var i = 0; i < points.length; i++) {
    point = points[i];

    if (points[i - 1] !== undefined) {
      lastPoint = points[i - 1];
    } else {
      lastPoint = points[i];
    }

    point.lifetime += 1;

    if (point.lifetime > duration) {
      points.splice(i, 1);
      continue;
    }

    // Begin drawing stuff!
    var inc = point.lifetime / duration; // 0 to 1 over lineDuration
    var dec = 1 - inc;

    var spreadRate;

    spreadRate = lineWidthStart * (1 - inc);

    var fadeRate = dec;

    //context.strokeStyle = lineColor;
    context.lineJoin = "round";
    context.lineWidth = spreadRate;
    context.strokeStyle = "rgb(" + 0 + "," + 220+i*10 + "," + 180+i*10 + ")";

    var distance = Point.distance(lastPoint, point);
    var midpoint = Point.midPoint(lastPoint, point);
    var angle = Point.angle(lastPoint, point);

    context.beginPath();

    context.moveTo(lastPoint.x, lastPoint.y);
    context.lineTo(point.x, point.y);

    context.stroke();
    context.closePath();
  }

  //if (points.length > 0) { console.log(spreadRate + "|" + points.length + " points alive."); }
}

function addPoint(x, y) {
  flipNext = !flipNext;
  var point = new Point(x, y, 0, flipNext);
  points.push(point);
}

//////////////////////////////
// Less Important functions //
//////////////////////////////

// RequestAnimFrame definition
window.requestAnimFrame = (function (callback) {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// Update canvas dimensions based on input
function resizeCanvas(w, h) {
  if (context !== undefined) {
    context.canvas.width = w;
    context.canvas.height = h;
  }
}

// Listeners for mouse and touch events
function enableListeners() {
  //********* Mouse Listeners *********//
  $("#background").on("mousemove", function (e) {
    if (frame === drawEveryFrame) {
      addPoint(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      frame = 0;
    }
    frame++;
  });

  $("#background").on("mouseover", function (e) {});
  $("#background").on("mouseleave", function (e) {});

  //********* Touch Listeners *********//
  $("#background").on("touchstart", function (e) {
    var touch = e.touches[0];
  });
  $("#background").on("touchmove", function (e) {
    var touch = e.touches[0];
  });
  $("#background").on("touchend", function (e) {});
}

// POINT CLASS
// Cartersian location of where mouse location
// was previously at.
// Used to draw arcs between Points.
var Point = class Point {
  // Define class constructor
  constructor(x, y, lifetime, flip) {
    this.x = x;
    this.y = y;
    this.lifetime = lifetime;
    this.flip = flip;
  }

  // Get the distance between a & b
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }

  // Get the mid point between a & b
  static midPoint(a, b) {
    const mx = a.x + (b.x - a.x) * 0.5;
    const my = a.y + (b.y - a.y) * 0.5;

    return new Point(mx, my);
  }

  // Get the angle between a & b
  static angle(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.atan2(dy, dx);
  }

  // Simple getter for printing
  get pos() {
    return this.x + "," + this.y;
  }
};
