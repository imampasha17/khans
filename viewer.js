// Viewer Dashboard JavaScript
const viewerTableBody = document.getElementById('viewerTableBody');

// Function to populate table
function populateTable() {
    const storedData = JSON.parse(localStorage.getItem('products')) || [];

    // Clear existing rows
    viewerTableBody.innerHTML = '';

    // Populate rows with stored data
    storedData.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.target}</td>
            <td>${product.achieved}</td>
            <td>${product.incentive}</td>
            <td>${product.total}</td>
        `;
        viewerTableBody.appendChild(row);
    });
}

// Load table data on page load
document.addEventListener('DOMContentLoaded', populateTable);
