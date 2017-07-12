$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // change instantiation pattern below ("new")
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window['dancers'].push(dancer);

  });

  $('.addPacMan').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // change instantiation pattern below ("new")
    var pacman = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(pacman.$node2);

    window['dancers'].push(pacman);
    makeDancer.prototype.animateDiv();


  });

  $('.addGhost').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // change instantiation pattern below ("new")
    var ghost = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 3000
    );
    $('body').append(ghost.$node3);

    window['dancers'].push(ghost);

  });


  $('.lineUp').on('click', function(event) {

    //iterate over window.dancers and apply lineUp method on each dancer
    $('.pacman').stop(true);
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });

  });


  $('.lineDance').on('click', function(event) {

    //iterate over window.dancers and apply lineDance method on each dancer
    $('.pacman').stop(true);
    window.dancers.forEach(function(dancer) {
      dancer.lineDance();
    });

  });


});

