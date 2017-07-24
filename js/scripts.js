//Business logic

function Pet (petName, petPic, age, animalType) {
  this.petName = petName;
  this.petPic = petPic;
  this.age = age;
  this.animalType = animalType;
  this.adoptionStatus = true;
}

// //adoptionStatus will be reset using checkbox on details display
// Pet.prototype.adopt = function(newStatus) {
//   this.adoptionStatus = newStatus;
// }
//
// //Push individual pets to this array
// function Shelter() {
//   this.pets = [];
// }
//
// Shelter.prototype.filterAdopted = function() {
//   adoptedPets = [];
//   this.pets.forEach(function(pet) {
//     if (this.adoptionStatus === false) {
//       adoptedPets.push(pet);
//     }
//   });
//   return adoptedPets;
// }
//
// Shelter.prototype.filterNotAdopted = function() {
//   notAdoptedPets = [];
//   this.pets.forEach(function(pet) {
//     if (this.adoptionStatus === true) {
//       notAdoptedPets.push(pet);
//   });
//   return notAdoptedPets;
// }


//UI logic
$(document).ready(function() {

  $("#animalinput").submit(function(event) {
    var nameInput = $("input#name").val();
    var picInput = $("input#picture").val();
    var ageInput = parseInt($("input#age").val());
    var animalTypeInput = $("input#animaltype").val();

    var newPet = new Pet(nameInput, picInput, ageInput, animalTypeInput);

    $(".wrapper").append('<div class="panel panel-default">' +
      '<div class="panel-heading">' +
        '<h4>' + newPet.petName + '</h4>' +
      '</div>' +
      '<div class="panel-body">' +
        '<img src="' + newPet.petPic + '" alt="' + newPet.animalType + '">' +
      '</div>' +
    '</div>');


    event.preventDefault();
  });
});
