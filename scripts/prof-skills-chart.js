var ctx = document.getElementById("professional");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        scaleFontColor: "#FFFFFF",
        data: {
            labels: ["Leadership", "Working in a Team", "Communication", "Initiative", "Problem Solving"],
            datasets: [{
                data: [8, 9, 8, 8, 8],
                label: "Professional Skills",
                fill: false,
                backgroundColor: "rgba(40, 142, 223, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: 'black'
                    }
                }],
                xAxes: [{
                  ticks: {
                    fontColor: 'black',
                    beginAtZero:true
                  }
                }]
            },
            legend: {
              labels: {
                fontColor: 'black'
              }
            }
        }
    });