/*global _*/
$(function () {
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  // ALL YOUR CODE BELOW HERE //
  
  //Merge the arrays of objects into one array of objects.
  var allGuardians = _.flatten([oldGuardians, newGuardians]);
  console.log(allGuardians);
  
  //Use map to make an array of all of the names of your heroes.
  var heroNames = _.map(allGuardians, function(g){
    return g.name;
  });
  console.log(heroNames);
  
  //Now how about modifying your last step to pull out just first names!
  var heroFirstNames = _.map(heroNames, function(n){
    return n.split(" ")[0];
  });
  console.log(heroFirstNames);
  
  //Filter out `Groot`.
  var allButGroot = _.filter(heroFirstNames, function(n){
    return n !== "Groot";
  });
  console.log(allButGroot);
  
  //Use your new found knowledge of making tables with jQuery to create a list 
  function createHeroesList (heroes) {
    //create a <ul> of heroes from the provided array
    var $ul = $('<ul>').attr("id", "heroes");

    //give each <li> item in the <ul> the hero's name and notes
    var $lis = _.map(heroes, function(h){
      var $li = $('<li>');
      var $namePar = $('<p>').text("Name: " + h.name);
      var $notesPar = $('<p>').text("Notes: " + h.notes);
      $li.append([$namePar, $notesPar]);
      return $li;
    });
    
    //append the lis to the <ul>
    $ul.append($lis);
    
    //append the <ul> to the DOM
    $('body').append($ul);
    
  }
  
  createHeroesList(allGuardians);
  
  // ALL YOUR CODE ABOVE HERE //
});