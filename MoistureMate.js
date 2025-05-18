let soilMoisture = 30; // percentage
let waterTank = 100;   // liters

function checkSoil() {
    console.log(" Checking soil moisture...");
    if (soilMoisture < 40) {
        waterPlant();
    } else {
        console.log("Soil is moist enough. No need to water.\n");
    }
}

function waterPlant() {
    if (waterTank >= 10) {
        console.log(" Soil is dry! Watering the plant...");
        waterTank -= 10;
        soilMoisture += 30;
        console.log(" Watered! Soil moisture is now: " + soilMoisture + "%");
        console.log("Water left in tank: " + waterTank + "L\n");
    } else {
        console.log(" Not enough water in the tank!\n");
    }
}

// Simulate 3 days
for (let day = 1; day <= 3; day++) {
    console.log(" Day " + day);
    soilMoisture -= 20; // Soil dries every day
    checkSoil();
}
