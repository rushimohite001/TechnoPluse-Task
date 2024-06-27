const orders = [
    { id: '#20462', product: 'Hat', customer: 'Matt Dickerson', date: '13/05/2022', amount: '$4.95', payment: 'Transfer Bank', status: 'Delivered' },
    { id: '#18933', product: 'Laptop', customer: 'Wiktoria', date: '22/05/2022', amount: '$8.95', payment: 'Cash on Delivery', status: 'Delivered' },
    { id: '#45169', product: 'Phone', customer: 'Trixie Byrd', date: '15/06/2022', amount: '$1149.95', payment: 'Cash on Delivery', status: 'Process' },
    { id: '#34304', product: 'Bag', customer: 'Brad Mason', date: '06/09/2022', amount: '$899.95', payment: 'Transfer Bank', status: 'Process' },
    { id: '#17188', product: 'Headset', customer: 'Sanderson', date: '25/09/2022', amount: '$22.95', payment: 'Cash on Delivery', status: 'Canceled' },
    { id: '#73003', product: 'Mouse', customer: 'Jun Redfern', date: '04/10/2022', amount: '$54.95', payment: 'Transfer Bank', status: 'Delivered' },
    { id: '#58825', product: 'Clock', customer: 'Miriam Kidd', date: '17/10/2022', amount: '$174.95', payment: 'Transfer Bank', status: 'Delivered' },
    { id: '#44122', product: 'T-shirt', customer: 'Dominic', date: '24/10/2022', amount: '$249.95', payment: 'Cash on Delivery', status: 'Process' },
    { id: '#89094', product: 'Monitor', customer: 'Shanice', date: '01/11/2022', amount: '$899.95', payment: 'Transfer Bank', status: 'Canceled' },
    { id: '#85252', product: 'Keyboard', customer: 'Poppy-Rose', date: '22/11/2022', amount: '$6.94', payment: 'Transfer Bank', status: 'Process' }
];

function loadTableData() {
    const tableBody = document.querySelector('#ordersTable tbody');
    let dataHtml = '';

    for (let order of orders) {
        let statusClass = '';
        if (order.status === 'Delivered') {
            statusClass = 'status-delivered';
        } else if (order.status === 'Process') {
            statusClass = 'status-process';
        } else if (order.status === 'Canceled') {
            statusClass = 'status-canceled';
        }

        dataHtml += `<tr>
                        <td data-label="Tracking ID">${order.id}</td>
                        <td data-label="Product">${order.product}</td>
                        <td data-label="Customer">${order.customer}</td>
                        <td data-label="Date">${order.date}</td>
                        <td data-label="Amount">${order.amount}</td>
                        <td data-label="Payment Mode">${order.payment}</td>
                        <td data-label="Status" class="${statusClass}">${order.status}</td>
                        <td data-label="Action" class="actions">
                            <a href="#" class="edit">Edit</a>
                            <a href="#" class="delete">Delete</a>
                        </td>
                     </tr>`;
    }

    tableBody.innerHTML = dataHtml;
}

document.addEventListener('DOMContentLoaded', () => {
    loadTableData();
});
