var ctx = document.getElementById("technical");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        scaleFontColor: "#FFFFFF",
        data: {
            labels: ["           HTML/CSS", "Java", "Angular2", "Python", "JavaScript", "SQL"],
            datasets: [{
                data: [9, 9, 7, 7, 7, 7],
                label: "Technical Skills",
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
                    gridLines: {
                      display: false,
                        drawBorder: false
                    },
                    ticks: {
                        fontColor: 'black'
                    }
                }],
                xAxes: [{
                    gridLines: {
                      display: false,
                        drawBorder: false
                    },
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