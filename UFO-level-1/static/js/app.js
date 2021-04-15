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


console.log(data[0]);