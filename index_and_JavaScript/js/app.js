
// Store a URL/ call api
var URL = "https://california-wildfires-api-r6o6.onrender.com/api"

// Fetch the JSON data and console log it
d3.json(URL).then(
  function(data) {
    console.log(data);
  });

// Create funtion that builds bubble chart
function buildBubbleChart(sample)
{
     // Use the D3 library to get all the data
     d3.json(URL).then((data) => {

          // Get the acres burned and days duration
        let acresBurned = data.result;
        console.log(acresBurned);
        let daysDuration = resultData.days_duration;
        console.log(acresBurned);



        let sampleData = data.samples;

        // Filter the data 
        let filteredData = sampleData.filter(result => result.id == sample);


        // Get the first value from the data
        let resultData = filteredData[0];

        // Get the otu ids, lables, and sample values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;

        // Set up trace a bubble chart
        let trace2 = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };
        let bubbleData = [trace2];

        // Set up a layout for the Bubble Chart
        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        // Plot the bar chart using Plotly
        Plotly.newPlot("bubble", bubbleData, layout)
    });
};