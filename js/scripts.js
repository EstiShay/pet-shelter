//Business logic

function Pet (petName, petPic, age, animalType) {
  this.petName = petName;
  this.petPic = petPic;
  this.age = age;
  this.animalType = animalType;
  this.adoptionStatus = true;
}

//adoptionStatus will be reset using checkbox on details display
Pet.prototype.adopt = function(newStatus) {
  this.adoptionStatus = newStatus;
}

//Push individual pets to this array
function Shelter() {
  this.pets = [];
}

Shelter.prototype.filterAdopted = function() {
  adoptedPets = [];
  this.pets.forEach(function(pet) {
    if (this.adoptionStatus === false) {
      adoptedPets.push(pet);
    }
  });
  return adoptedPets;
}

Shelter.prototype.filterNotAdopted = function() {
  notAdoptedPets = [];
  this.pets.forEach(function(pet) {
    if (this.adoptionStatus === true) {
      notAdoptedPets.push(pet);
  });
  return notAdoptedPets;
}


//UI logic
