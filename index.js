const categoryChoices = [
    "Health", 
    "Development", 
    "Creativity", 
    "Mind", 
    "Other"
]

const taskChoices1 = [
    "Gym",
    "Jogging",
    "Core",
    "Stretch",
    "Yoga",
    "Swimming",
    "Walking"
]

const taskChoices2 = [
  "Studies",
  "Meet friends",
  "Reading",
  "Work",
  "Course"
]

const taskChoices3 = [
  "Designing",
  "Photography",
  "Instagram"
]

const taskChoices4 = [
  "Meditation",
  "Mindfulness"
]

const taskChoices5 = [
  "Movies",
  "Consert",
  "Dining",
  "Museum"
]


let categoryFromList = ""
// let secondChoice = ""

let newTasks = []

let taskValue = taskChoices1;
// let categoryValue = categoryChoices;

const cellIdentification = []

let rowNumber = 0;

let amountOfTasks = 0;

// Gets all the HTML elements
const selectTypeOfCategory = document.getElementById("newCategory")
const selectTypeOfTask = document.getElementById("newRowType")
const selectAmountOfTimes = document.getElementById("amountOfTimes")
const theMessage = document.getElementById("theMessage")
const button = document.getElementById("createButton")
const amountMessage = document.getElementById("totalAmountOfTasks")

// Fills the select element with all the options from the CHOICES arrays

categoryChoices.forEach((category, index) => {
  const text = `${category}`
  selectTypeOfCategory.options.add(
      new Option(text, index)
  )
})

changeTask(taskValue);

function changeTask(taskValue) {
taskValue.forEach((task, index) => {
  const text = `${task}`
  selectTypeOfTask.options.add(
      new Option(text, index)
  )
})
}



function categoryChoice() {

  document.getElementById("newRowType").innerHTML = "";
  var select = document.getElementById('newCategory');
	var option = select.options[select.selectedIndex].value;

  switch(option) {
    case '0':
      changeTask(taskChoices1);
      newTasks = [...taskChoices1];
      break;
    case '1':
      changeTask(taskChoices2);
      newTasks = [...taskChoices2];
      break;
    case '2':
      changeTask(taskChoices3);
      newTasks = [...taskChoices3];
      break;
    case '3':
      changeTask(taskChoices4);
      newTasks = [...taskChoices4];
      break;
    case '4':
      changeTask(taskChoices5);
      newTasks = [...taskChoices5];
      break;
  }
}


button.addEventListener("click", () => {
    
    const chosenTask = selectTypeOfTask.options[selectTypeOfTask.selectedIndex].text
    const chosenAmount = parseInt(selectAmountOfTimes.value)

    console.log(chosenTask)
    console.log(selectTypeOfTask)
    console.log(selectTypeOfTask.value)  

    rowNumber = rowNumber + 1;

    theMessage.innerHTML = `You added ${chosenTask} for ${chosenAmount} times a week`

        // get the reference for the body
        var body = document.getElementById("newTaskRow");
      
        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
      
        // creating all cells
        for (var i = 0; i < 1; i++) {
          // creates a table row
          var row = document.createElement("tr");
          
            // createFirstCell()
            var cellOne = document.createElement("td");
            var cellTextOne = document.createTextNode(`${chosenTask}`);
            cellOne.appendChild(cellTextOne);
            row.appendChild(cellOne);
            cellIdentification.push(`r${rowNumber}c1`)  

            for (var j = 0; j < 7; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            
            var cell = document.createElement("td");

            cell.addEventListener('click', function handleClick(event) {
                $(this).css('backgroundColor', '#FF0000');
            });


            var cellText = document.createTextNode(``);
            cell.appendChild(cellText);
            row.appendChild(cell);

            cellIdentification.push(`r${rowNumber}c${j+2}`)  
          }

            // createLastCell()
            var cellLast = document.createElement("td");
            var cellTextLast = document.createTextNode(`${chosenAmount}`);
            cellLast.appendChild(cellTextLast);
            row.appendChild(cellLast);
            cellIdentification.push(`r${rowNumber}c${j+2}`)  


            var cellDelete = document.createElement("button");
            var cellCheckDelete = document.createTextNode("🗑️");
            cellDelete.appendChild(cellCheckDelete);
            row.appendChild(cellDelete);

                 
          // add the row to the end of the table body
          tblBody.appendChild(row);
        }
      
        
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "1");

        amountOfTasks = amountOfTasks + chosenAmount
        amountMessage.innerText = `You have a total of ${amountOfTasks} tasks this week.`
})







