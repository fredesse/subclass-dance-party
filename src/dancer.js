// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.$node2 = $('<span class="pacman"></span>');
  this.$node3 = $('<img src="ghost' + this.randomNum(1, 4) + '.png" class="ghost"><p class="ghostName">' + names[this.randomNum(1, names.length)] + '</p></img>');

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.setPosition(top, left);
};

var names = ['Anjali', 'Ankit', 'Brian', 'Christine', 'David', 'Francis', 'Fredy', 'Garima', 'Harvey', 'Joe', 'Kevin Do Gyun Kim', 'Kevin Su', 'Landon', 'Lisa', 'Matt', 'Nicholas', 'Nick', 'Peter', 'Rick', 'Scott M', 'Scott S', 'Shaikat', 'Sonrisa', 'Tim'];

// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
makeDancer.prototype.step = function() {

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
  this.$node2.css(styleSettings);
  this.$node3.css(styleSettings);
};

//create a new lineup function
makeDancer.prototype.lineUp = function() {

  var styleSettings = {top: '35px'};

  this.$node.animate(styleSettings);
  this.$node2.animate(styleSettings);
  this.$node3.animate(styleSettings);

};


makeDancer.prototype.makeNewPosition = function() {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
};

makeDancer.prototype.animateDiv = function() {
  var newq = this.makeNewPosition();
  $('.pacman').animate({ top: newq[0], left: newq[1] },
    {duration: 5000,
      step: function(){makeDancer.prototype.animateDiv();}
    });
};

makeDancer.prototype.randomNum = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



makeDancer.prototype.lineDance = function() {

  var styleSettingsNode = {top: '50px'};
  var styleSettingsNode2 = {top: '300px'};
  var styleSettingsNode3 = {top: '550px'};

  this.$node.animate(styleSettingsNode);
  this.$node2.animate(styleSettingsNode2);
  this.$node3.animate(styleSettingsNode3);

};
