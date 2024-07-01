function getStudentGrade() {
    let marks;
    while (true) {
        // Prompt the user to enter the marks
        marks = prompt("Enter student marks (0-100):");
        
        // Convert the input to a number
        marks = Number(marks);
        
        // Check if the input is a valid number within the range 0-100
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            break; // Exit the loop if the input is valid
        } else {
            alert("Invalid input. Please enter marks between 0 and 100.");
        }
    }
    
    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    // Display the corresponding grade
    alert(The grade for marks ${marks} is: ${grade});
}

// Call the function to test it
getStudentGrade();