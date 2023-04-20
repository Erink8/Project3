// Store a URL/ call api
var URL = "https://california-fire-data-if1l.onrender.com/api"

// Fetch the JSON data and console log it
d3.json(URL).then(
  function(data) {
    console.log(data);
  });

  // Use the D3 library to get all the data
  d3.json(URL).then((data) => {

    let allData = data.Features;

    // count the number of wildfires per county in a dataset
    let countyCount = allData.reduce((counts, d) => {
      if (counts[d.county]) {
        counts[d.county]++;
      } else {
        counts[d.county] = 1;
      }
      return counts;
    }, {});
    console.log(countyCount)

    // Sort counties by count in descending order
    let sortedCounties = Object.entries(countyCount)
    .sort((a, b) => b[1] - a[1])
    .map(pair => ({ county: pair[0], count: pair[1] }));

    console.log(sortedCounties);   
    
    // Slice the first 10 objects for plotting
    slicedData = sortedCounties.slice(0, 15);

    // Extract county names and counts as separate arrays for plotly
    let countyNames = slicedData.map(d => d.county);
    let countyCounts = slicedData.map(d => d.count);

    // Create trace for plotly
    let trace = [{
       x: countyNames,
       y: countyCounts,
       type: 'bar',
       marker: {      
          color: ['#940408',
            '#9a110a',
            '#9f1e0c',
            '#a52b0e',
            '#ab3811',
            '#b14513',
            '#b65215',
            '#bc5f17',
            '#c26c19',
            '#c7791b',
            '#cd861d',
            '#d39320',
            '#d9a022',
            '#dead24',
            '#e4ba26']}
      }];

    // Create layout object for plotly
    let layout = {
        title: 'Top 15 Wildfires in California by County',
        xaxis: { title: 'County' },
        yaxis: { title: 'Number of Wildfires' }
};

    // Plot the bar chart using plotly
    Plotly.newPlot('bar-chart', trace, layout);
  });

