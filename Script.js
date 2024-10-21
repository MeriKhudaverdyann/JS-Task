document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    clearErrors();

    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const faculty = document.getElementById('faculty').value;
    const course = document.getElementById('course').value;

    let hasErrors = false;

    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        hasErrors = true;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        hasErrors = true;
    }

    if (faculty === '') {
        document.getElementById('facultyError').textContent = 'Please select a faculty.';
        hasErrors = true;
    }

    if (course === '') {
        document.getElementById('courseError').textContent = 'Please select a course.';
        hasErrors = true;
    }

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

        document.getElementById('studentForm').reset();
    }
});

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

function clearErrors() {
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('facultyError').textContent = '';
    document.getElementById('courseError').textContent = '';
}
