// Select color input
const colorInput = $("#colorPicker");

// Select size input
const inputHeight = $("#inputHeight");
const inputWidth = $("#inputWidth");

const table = $("#pixelCanvas"); // select table element
const body = $("body"); // select body element

// When size is submitted by the user, call makeGrid()
const form = $("#sizePicker");

form.on("submit", function(event) {
    event.preventDefault(); // stop default behavior of form being submitted
    makeGrid();
});

function makeGrid() {
    // Reset table to empty
    table.empty();
    // for loop for building the grid
    let tableHeight;
    let tableWidth;
    for (let x = 0; x < inputHeight.val(); x++) {
        // for every row which becomes the table height
        tableHeight = $("<tr>");

        table.append(tableHeight);

        for (let y = 0; y < inputWidth.val(); y++) {
            // for every data which becomes the table width   
            tableWidth = $("<td>");
            tableWidth.css({ backgroundColor: "rgb(255, 255, 255)" });
            tableHeight.append(tableWidth);
        };
    }
    // Reset the input value to 1
    inputHeight.val(1);
    inputWidth.val(1);
}

// Event delegation
table.on("click", "td", function() {
    let bgColor = $(this).css("background-color");

    if (bgColor === "rgb(255, 255, 255)") {
        $(this).css({ backgroundColor: colorInput.val() });
    } else {
        $(this).css({ backgroundColor: "rgb(255, 255, 255)" });
    }
});

// change the the color property of every child element within the body to 
// value of color picker
colorInput.on("change", function() {
    body.find("*").css("color", colorInput.val());
});