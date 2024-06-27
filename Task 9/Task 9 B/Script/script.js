// Example script.js
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners or other JavaScript functionality here

    const addCustomerButton = document.getElementById('add-customer');
    addCustomerButton.addEventListener('click', function () {
        alert('Add Customer button clicked!');
    });

    // Implement search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', function () {
        const filter = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('#order-table tbody tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(filter));
            row.style.display = match ? '' : 'none';
        });
    });

    // Implement pagination functionality here if needed
});
