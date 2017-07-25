//Business logic

function Pet (petName, petPic, age, animalType) {
  this.petName = petName;
  this.petPic = petPic;
  this.age = age;
  this.animalType = animalType;
  this.adoptionStatus = true;
}

//Push individual pets to this array
function Shelter() {
  this.pets = [];
}

Pet.prototype.adopt = function() {
  this.adoptionStatus = false;
}

Shelter.prototype.filterAdopted = function() {
  var adoptedPets = [];
  this.pets.forEach(function(pet) {
    if (pet.adoptionStatus === false) {
      adoptedPets.push(pet);
    }
  });
  return adoptedPets;
}


// Shelter.prototype.filterAdopted = function() {
//   adoptedPets = [];
//   this.pets.forEach(function(pet) {
//     if (pet.adoptionStatus === false) {
//       adoptedPets.push(pet);
//     }
//   });
//   return adoptedPets;
// }




Shelter.prototype.filterNotAdopted = function() {
  notAdoptedPets = [];
  this.pets.forEach(function(pet) {
    if (pet.adoptionStatus === true) {
      notAdoptedPets.push(pet);
    }
  });
  return notAdoptedPets;
}


// Show the added pets
function appendPets(newPet) {
$(".wrapper").append('<div class="panel panel">' +
  '<div class="panel-heading">' +
    '<h4>' + newPet.petName + '</h4>' +
  '</div>' +
  '<div class="panel-body">' +
    '<img src="' + newPet.petPic + '" alt="' + newPet.animalType + '">' +
    '<div class="detail-reveal">' +
      '<p>Details</p>' +
      '<div class="details">' +
        '<p>Age: ' + newPet.age + '</p>' +
        '<p>Animal: ' + newPet.animalType + '</p>' +
      // '<p class="hide-details">Hide</p>' +
      '</div>' +
    '</div>' +
      '<input id="' + newPet.petName + '" class="adopt-button" type="button" name="adoption-status" value="Adopt Me">' +
  '</div>' +
'</div>');
};


//UI logic
$(document).ready(function() {

  var newShelter = new Shelter();

  $("#animalinput").submit(function(event) {
    var nameInput = $("input#name").val();
    var picInput = $("input#picture").val();
    var ageInput = parseInt($("input#age").val());
    var animalTypeInput = $("input#animaltype").val();

    var newPet = new Pet(nameInput, picInput, ageInput, animalTypeInput);
    newShelter.pets.push(newPet);
    appendPets(newPet);


    $(".adopt-button").click(function() {
      var names = $(this)[0].id;

      newShelter.pets.forEach(function(pet) {

        if (pet.petName === names) {
          console.log(pet.adoptionStatus);
          pet.adopt();
        }
        console.log(pet.adoptionStatus);
      });
    });

    $(".detail-reveal").click(function() {
      $(this).children(".details").show();
      event.preventDefault();
    });
    //
    // $(".hide-details").click(function(event) {
    //   $(this).siblings().hide();
    //   event.preventDefault();
    // });

    $("#adopted").click(function(event){
      $(".wrapper").empty();
      var filteredA = newShelter.pets.filter(function(pet) {
        return pet.adoptionStatus == false;
      });

      alert(filteredA);
      alert(filteredA.length);
      filteredA.forEach(function(pet){
        appendPets(pet);
      });
    });

    $("input#name").val('');
    $("input#picture").val('');
    $("input#age").val('');
    $("input#animaltype").val('');
    event.preventDefault();
  });


});
