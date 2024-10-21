document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Clear previous error messages
    clearErrors();

    // Get form values
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const faculty = document.getElementById('faculty').value;
    const course = document.getElementById('course').value;

    let hasErrors = false;

    // Validate First Name
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        hasErrors = true;
    }

    // Validate Last Name
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        hasErrors = true;
    }

    // Validate Faculty Selection
    if (faculty === '') {
        document.getElementById('facultyError').textContent = 'Please select a faculty.';
        hasErrors = true;
    }

    // Validate Course Selection
    if (course === '') {
        document.getElementById('courseError').textContent = 'Please select a course.';
        hasErrors = true;
    }

    // If there are no errors, proceed to add the row to the table
    if (!hasErrors) {
        const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const firstNameCell = newRow.insertCell(0);
        const lastNameCell = newRow.insertCell(1);
        const facultyCell = newRow.insertCell(2);
        const courseCell = newRow.insertCell(3);

        firstNameCell.textContent = firstName;
        lastNameCell.textContent = lastName;
        facultyCell.textContent = faculty;
        courseCell.textContent = course;

        // Clear form fields
        document.getElementById('studentForm').reset();
    }
});

// Event listeners for input fields to remove error message on interaction
document.getElementById('firstname').addEventListener('input', function() {
    document.getElementById('firstNameError').textContent = '';
});

document.getElementById('lastname').addEventListener('input', function() {
    document.getElementById('lastNameError').textContent = '';
});

document.getElementById('faculty').addEventListener('change', function() {
    document.getElementById('facultyError').textContent = '';
});

document.getElementById('course').addEventListener('change', function() {
    document.getElementById('courseError').textContent = '';
});

// Clear all error messages function
function clearErrors() {
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('facultyError').textContent = '';
    document.getElementById('courseError').textContent = '';
}
