// constructor functions and prototypes.


/**
 * Constructor function for a PetClient object.
 * @param {string} petName - The name of the pet.
 * @param {string} petType - The type of pet (e.g., "dog", "cat").
 * @param {number} weight - The weight of the pet in pounds.
 */
function PetClient(petName, petType, weight) {
    this.petName = petName;
    this.petType = petType;
    this.weight = weight;
}

/**
 * Method added to the prototype to determine the size category.
 * @returns {string} The size category based on weight.
 */
PetClient.prototype.getSizeCategory = function() {
    if (this.weight <= 20) {
        return "Small (0 - 20 lbs)";
    } else if (this.weight <= 50) {
        return "Medium (21 - 50 lbs)";
    } else if (this.weight <= 90) {
        return "Large (51 - 90 lbs)";
    } else {
        return "Extra Large (91+ lbs)";
    }
};

/**
 * Method added to the prototype to get a formatted summary of the client.
 * @returns {string} A description of the pet client.
 */
PetClient.prototype.getClientSummary = function() {
    return this.petName + " is a " + this.petType + " weighing " + this.weight + " lbs. Category: " + this.getSizeCategory() + ".";
};

// --- Creating Instances ---
// Creating hardcoded instances of the object class to meet assignment requirements
const testClient1 = new PetClient("Max", "Dog", 45);
const testClient2 = new PetClient("Bella", "Cat", 12);

// Logging them to the console to prove the methods work
console.log("Test Instance 1:", testClient1.getClientSummary());
console.log("Test Instance 2:", testClient2.getClientSummary());