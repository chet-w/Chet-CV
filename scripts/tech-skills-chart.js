var ctx = document.getElementById("technical");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        scaleFontColor: "#FFFFFF",
        data: {
            labels: ["HTML/CSS", "Java", "Python", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
                    ticks: {
                        fontColor: 'black'
                    }
                }],
                xAxes: [{
                  ticks: {
                    fontColor: "black",
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