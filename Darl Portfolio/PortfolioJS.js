// PortfolioScript.js

// Add an event listener to the "Change" button
document.getElementById('change-text-btn').addEventListener('click', function () {
    // Select the dynamic text span
    const dynamicText = document.getElementById('dynamic-text');
    const strong = document.getElementById('text');

    // Toggle between the two text values
    if (dynamicText.innerHTML === 'Aspiring Front-End Developer') {
        dynamicText.innerHTML = '2nd Year I.T Student';
    } else {
        dynamicText.innerHTML = 'Aspiring Front-End Developer';
    }

 // Toggle between the two text values
 if (strong.innerHTML === 'a 2nd Year I.T student') {
    strong.innerHTML = 'an Aspiring Front-End Developer';
} else {
    strong.innerHTML = 'a 2nd Year I.T student';
}
});

