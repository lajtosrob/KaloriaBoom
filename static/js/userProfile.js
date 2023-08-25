var table  = document.getElementById('weightable');

var recorded_weight = [];
var recorded_date = [];

var tableMinRow = [table.rows[0].cells[0], table.rows[0].cells[1]];
var tableMinIndex = 0;

/* for(var index = 0; index < table.rows.length; index++) {
    for(var index2 = index; index2 < table.rows.length; index2++) {
        if(table.rows[index2].cells[1] < tableMinRow[1]) {
            tableMinRow = table.rows[index2];
            tableMinIndex = index2;
        }
        table.rows[tableMinIndex] = table.rows[index];
        table.rows[index] = tableMinRow;
        tableMinRow = table.rows[index+1];
    }
} */

for(var i = 1; i < table.rows.length; i++) {
    recorded_weight.push([
        parseFloat(table.rows[i].cells[0].innerHTML)
    ]);

    recorded_date.push([
        table.rows[i].cells[1].innerHTML
    ]); 
}


var values = recorded_weight.flat();


// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
Chart.defaults.global.defaultFontColor = '#858796';

// Area Chart - Weight History
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [...recorded_date],
        datasets: [{
            label: 'Testsúly',
            data: values,
            lineTension: 0.3,
            backgroundColor: 'rgba(2,117,216,0.2)',
            borderColor: 'rgba(2,117,216,1)',
            pointRadius: 5,
            pointBackgroundColor: 'rgba(2,117,216,1)',
            pointBorderColor: 'rgba(255,255,255,0.8)',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(2,117,216,1)',
            pointHitRadius: 50,
            pointBorderWidth: 2,
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 60,
                    minRotation: 60
                },
                gridLines: {
                    display: true
                },
                scaleLabel: {
                    display: true,
                    padding: 10,
                    fontColor: '#555759',
                    fontSize: 16,
                    fontStyle: 700,
                    labelString: 'Dátum'
                },
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 120,
                    maxTicksLimit: 12,
                    padding: 10,
                    // Include a 'kg' in the ticks
                    callback: function(value, index, values) {
                        return value + 'kg';
                    }
                },
                gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                },
                scaleLabel: {
                    display: true,
                    padding: 10,
                    fontColor: '#555759',
                    fontSize: 16,
                    fontStyle: 700,
                    labelString: 'Testsúly kb-ban'
                },
            }],
        },
        legend: {
            display: false
        }
    }
});