const productForm = document.getElementById('productForm');
const productTableBody = document.getElementById('productTableBody');

// Handle Form Submission
productForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const productName = document.getElementById('productName').value.trim();
    const productTarget = parseFloat(document.getElementById('productTarget').value);
    const productAchieved = parseFloat(document.getElementById('productAchieved').value);
    const productIncentive = parseFloat(document.getElementById('productIncentive').value);
    const total = productAchieved + productIncentive;

    // Prevent Duplicates
    const existingRow = Array.from(productTableBody.children).find(row => row.cells[0].textContent === productName);
    if (existingRow) {
        alert('This product already exists!');
        return;
    }

    // Add Row to Table
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${productName}</td>
        <td>${productTarget}</td>
        <td>${productAchieved}</td>
        <td>${productIncentive}</td>
        <td>${total}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;
    productTableBody.appendChild(row);

    // Reset Form
    productForm.reset();
});

// Handle Table Actions
productTableBody.addEventListener('click', (event) => {
    const target = event.target;

    // Delete Product
    if (target.classList.contains('delete-btn')) {
        const row = target.closest('tr');
        productTableBody.removeChild(row);
    }

    // Edit Product
    if (target.classList.contains('edit-btn')) {
        const row = target.closest('tr');
        const cells = row.querySelectorAll('td');
        document.getElementById('productName').value = cells[0].textContent;
        document.getElementById('productTarget').value = cells[1].textContent;
        document.getElementById('productAchieved').value = cells[2].textContent;
        document.getElementById('productIncentive').value = cells[3].textContent;

        // Remove Row
        productTableBody.removeChild(row);
    }
});
