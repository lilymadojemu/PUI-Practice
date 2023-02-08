/* A class representing a car that can start and stop moving. */
class Car {
  /* Declare four properties:
   * model - the model name of the car
   * year - the year of the car
   * isMoving - boolean indicating whether the car is moving (default false)
   * element - the HTML element that this car will update
   */

  model;
  year;
  element;
  isMoving=false

  constructor(model, year, element) {
    // /* Initialize the car's properties here */ assign class to instances
    this.model = model;
    this.year = year;
    this.element = element;
  }

  /**
   * Update the contents of the car's element to show what its current state is.
   * When the car is stopped, its text should be the model and year of the car.
   * When it is moving, the text should add "is driving". Also, add the "moving-car"
   * class to the car element when it is moving.
   */
  updateElement() {
    this.element.innerText = this.model + ' ' + this.year;
    // If Moving
    if (this.isMoving) {
      this.element.classList.add('moving-car');
      this.element.innerText += ' is driving.';
    // If not moving
    } else {
      this.element.classList.remove('moving-car');
    }
  }

  drive() {
    this.isMoving = true;
    this.updateElement();
  }

  brake() {
    this.isMoving = false;
    this.updateElement();
  }
}

/*
 Retrieve the car element from the page, and initialize a new Car object with the
 model "Chevy Corvette", the year "2022", and the car element. Then call
 updateElement().
*/
let carElement = document.querySelector('.car'); // implement

// Making a new car using the Car Class
// Elements refers to abilities like drive and brake
let theCar = new Car("Tezzy", 2023, carElement); // implement
