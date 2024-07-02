function checkSpeed() {

    let speed = prompt("Enter the speed of the car:");

    
    speed = Number(speed);

    
    if (isNaN(speed)) {
        alert("Invalid input. Please enter a valid number for the speed.");
        return;
    }

    
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;


    if (speed <= speedLimit) {
        alert("Ok");
    } else {
        
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        
        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            alert(Points: ${demeritPoints});
        }
    }
}


checkSpeed();