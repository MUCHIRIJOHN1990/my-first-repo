function checkSpeed() {
    // Prompt the user to enter the speed of the car
    let speed = prompt("Enter the speed of the car:");

    // Convert the input to a number
    speed = Number(speed);

    // Check if the input is a valid number
    if (isNaN(speed)) {
        alert("Invalid input. Please enter a valid number for the speed.");
        return;
    }

    // Define the speed limit and demerit point increment
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    // Check the speed and calculate demerit points
    if (speed <= speedLimit) {
        alert("Ok");
    } else {
        // Calculate the number of demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        // Check if the driver should get a license suspension
        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            alert(Points: ${demeritPoints});
        }
    }
}

// Call the function to test it
checkSpeed();