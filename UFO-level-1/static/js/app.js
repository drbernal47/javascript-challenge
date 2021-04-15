// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Append one table row `tr` for each ufo data object
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });  


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input elements and get the raw HTML node
    var dateInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
  
    // Get the value property of the input element
    var dateValue = dateInput.property("value");
    var cityValue = cityInput.property("value").toLowerCase();

    console.log(dateValue);
    console.log(cityValue);

    // Remove previous rows of the table
    tbody.selectAll("tr").remove();

    // Filter data based on the date
    if (dateValue) {
        var filteredData = data.filter(sighting => sighting['datetime'] === dateValue);
    }
    else {
        var filteredData = data;
    }

    // Filter data based on the city
    if (cityValue) {
        filteredData = filteredData.filter(sighting => sighting['city'] === cityValue);
    }

    console.log(filteredData);

    // Append one table row `tr` for each ufo data object
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });  




  };
  
