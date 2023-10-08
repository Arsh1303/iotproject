// Function to generate random data
function generateRandomData() {
    var x = [];
    var y = [];
    for (var i = 0; i < 20; i++) {
        x.push(i);
        y.push(Math.random() * 100); // Random y values between 0 and 100
    }
    return { x: x, y: y };
}

// Function to create the graph
function createGraph() {
    var data = generateRandomData();

    var layout = {
        title: 'Randomized Data Graph',
        xaxis: {
            title: 'X-Axis Label'
        },
        yaxis: {
            title: 'Y-Axis Label'
        }
    };

    // Create a bar graph using Plotly
    Plotly.newPlot('graph', [{
        x: data.x,
        y: data.y,
        type: 'bar'
    }], layout);
}

// Call the createGraph function when the page is loaded
document.addEventListener('DOMContentLoaded', createGraph);
