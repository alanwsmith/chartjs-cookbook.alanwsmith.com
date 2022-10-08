function render_chart() {
    const data = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'Basic Bar Chart',
                data: [65, 59, 80, 81],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
            },
        ],
    }
    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: { legend: { display: false } },
        },
    }
    const myChart = new Chart(document.getElementById('myChart'), config)
}
document.addEventListener('DOMContentLoaded', render_chart)
