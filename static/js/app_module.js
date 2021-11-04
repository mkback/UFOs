// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// building a function 
function buildTable(data) {

    // clear out the exisiting data in the table 
    tbody.html("");

    // loop through each object in the data and append to the table body ("tr")
    data.forEach((dataRow)=> {
        let row = tbody.append("tr");

        // loop through each firel in the dataRow and add the values to the table cells 
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}


// Build a new function 
function handleClick() {

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter data 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild data using filtered data
    buildTable(filteredData);
}

// attach an even to listen for the form button 
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);



