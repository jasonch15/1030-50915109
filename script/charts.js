const ctx = document.getElementById('chartjs').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',  // 修改為 'line'
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '投票數',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // 填充顏色
            borderColor: 'rgba(54, 162, 235, 1)',      // 線條顏色
            borderWidth: 2,                            // 線條寬度
            fill: true                                 // 填充區域
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

$(".charts_toMIDDLE").on("click", function () {
    // 要顯示的程式碼
    const code = `
const ctx = document.getElementById('chartjs').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',  // 修改為 'line'
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '投票數',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // 填充顏色
            borderColor: 'rgba(54, 162, 235, 1)',      // 線條顏色
            borderWidth: 2,                            // 線條寬度
            fill: true                                 // 填充區域
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});
    `;

    // 使用 SweetAlert2 顯示程式碼
    Swal.fire({
        title: '程式碼示例',
        html: `<pre><code>${code}</code></pre>`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '好',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '取消',
        cancelButtonAriaLabel: 'Thumbs down',
        customClass: {
            popup: 'swal2-custom-width' // 自定義類
        }
    });
});
