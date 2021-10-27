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




