document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]').value;

    // Check if all questions are answered
    if (!q1 || !q2 || !q3) {
        alert("Please answer all questions before submitting.");
        return;
    }

    // Display the answers in an alert
    alert(`Your answers:\n1. ${q1.value}\n2. ${q2.value}\n3. ${q3}`);
    
    // Optionally, you can submit the form data to the server here
    // For example, using fetch or XMLHttpRequest
});