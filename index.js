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
    "Walking",
    "Spinning",
    "Climbing",
    "Class"
]

const taskChoices2 = [
  "Studies",
  "Meet friends",
  "Reading",
  "Work",
  "Course",
]

const taskChoices3 = [
  "Designing",
  "Photography",
  "Arts & Crafts"
]

const taskChoices4 = [
  "Meditation",
  "Mindfulness",
  "Social media"
]

// const taskChoices5 = [
//   "Movies",
//   "Consert",
//   "Dining",
//   "Museum",
// ]


let categoryFromList = ""
// let secondChoice = ""

let newTasks = []

let taskValue = taskChoices1;
// let categoryValue = categoryChoices;

const cellIdentification = []

let rowNumber = 0;

let amountOfTasks = 0;
let amountOfTasksDone = 0;
let progress = 0;
let rowAmountOfTasks = 0;


// Gets all the HTML elements
const selectTypeOfCategory = document.getElementById("newCategory")
const selectTypeOfTask = document.getElementById("newRowType")
const selectAmountOfTimes = document.getElementById("amountOfTimes")
const theMessage = document.getElementById("theMessage")
const button = document.getElementById("createButton")
const amountMessage = document.getElementById("totalAmountOfTasks")
const completedMessage = document.getElementById("totalAmountOfTasksDone")

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
    // case '4':
    //   changeTask(taskChoices5);
    //   newTasks = [...taskChoices5];
    //   break;
  }
}



button.addEventListener("click", () => {
   
    let chosenTask = ""

    if(selectTypeOfCategory.value != 4) {
      chosenTask = selectTypeOfTask.options[selectTypeOfTask.selectedIndex].text
    } else {
      chosenTask = document.getElementById("txtOther").value
    }

    // const chosenTask = document.getElementById("txtOther").value
    // const chosenTask = selectTypeOfTask.options[selectTypeOfTask.selectedIndex].text
    const chosenAmount = parseInt(selectAmountOfTimes.value)

    rowNumber = rowNumber + 1;

    // amountOfTasks = 0
    console.log(amountOfTasks)

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


// ***************************************************************************************


            cell.addEventListener('click', function handleClick(event) {
              
              if (progress < 100 ) {
              $(this).css('backgroundColor', '#AAFF00').append("DONE!");
                  
                amountOfTasksDone = amountOfTasksDone + 1
                let percentageOfTasksDone = parseInt((amountOfTasksDone / amountOfTasks) * 100);            
                completedMessage.innerText = `You have completed a total of ${amountOfTasksDone} (${percentageOfTasksDone} %) tasks this week.`
              
                var elem = document.getElementById("myBar");
                // let totalprogress = 400 / amountOfTasks;

                progress = percentageOfTasksDone
                // progress = progress + totalprogress
                elem.style.width = progress + "%"

                var rowAmount = $(this).closest("tr").text().match(/\d+/)[0]
                rowAmountOfTasks = rowAmount
                // cellDone.appendChild(rowAmount)


                console.log(`Row amount ${rowAmount}`)

              }
              
              });


         
            //   const setColor = "#000000"

            // cell.addEventListener('click', function handleClick(event) {
                             
            //     let color = setColor
                
            //     if (color === "#000000") {
            //         color = "#AAFF00";
            //         // id = 1
            //         // amountOfTasksDone = amountOfTasksDone + 1
            //     } else if (color === "#AAFF00") {
            //         color = "white";
            //         // id = 0
            //         // amountOfTasksDone = amountOfTasksDone - 1
            //     }
                
            //     console.log(color)

            //     $(this).css("background-color", color);
                
            //     let percentageOfTasksDone = parseInt((amountOfTasksDone / amountOfTasks) * 100);
            //     completedMessage.innerText = `You have completed a total of ${amountOfTasksDone} (${percentageOfTasksDone} %) tasks this week.`
            // })
           

            // var myTable = $('#myTable').DataTable();

            // cellDelete.addEventListener('click', function handleClick(event) {  
            


             
                
              

// *****************************************************************************************************************************


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



            //createDoneCell()
            var cellDone = document.createElement("td");
            var cellCheckDone = document.createTextNode("");
            cellDone.appendChild(cellCheckDone);
            row.appendChild(cellDone);


            // createDeleteCell()
            var cellDelete = document.createElement("button");
            var cellCheckDelete = document.createTextNode("Delete");
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

        let percentageOfTasksDone = parseInt((amountOfTasksDone / amountOfTasks) * 100);

        amountMessage.innerText = `You have a total of ${amountOfTasks} tasks this week.`
                completedMessage.innerText = `You have completed a total of ${amountOfTasksDone} (${percentageOfTasksDone} %) tasks this week.`

        
        
          $(cellDelete).on("click", function(e) {
        
            var rowAmountOfTasks = $(this).closest("tr").text().match(/\d+/)[0]

            var rowAmountOfTasksDone = 0
                        
        
            amountOfTasks = amountOfTasks - rowAmountOfTasks
            let percentageOfTasksDone = parseInt((amountOfTasksDone / amountOfTasks) * 100);            
            var elem = document.getElementById("myBar");
                // let totalprogress = 400 / amountOfTasks;

                progress = percentageOfTasksDone
                // progress = progress + totalprogress
                elem.style.width = progress + "%"
                $(this).closest('tr').remove();

                amountMessage.innerText = `You have a total of ${amountOfTasks} tasks this week.`
                completedMessage.innerText = `You have completed a total of ${amountOfTasksDone} (${percentageOfTasksDone} %) tasks this week.`

            let rowinfo = $(this).closest('tr').css('background-color')

            console.log(`rowinfo ${rowinfo}`)
            console.log(`AmountOfTasks ${amountOfTasks}`)
            console.log(`percentageOfTasksDone ${percentageOfTasksDone}`)
            console.log(`progress ${progress}`)
            console.log(`rowAmountOfTasks ${rowAmountOfTasks}`)
            console.log(`rowAmountOfTasksDone ${rowAmountOfTasksDone}`)
            console.log(`items ${items}`)
            
          });
})







// $( "td" ).on( "mouseover", function() {
//   $( this ).css( "background-color", "red" );
// });


// $( "td" )
//   .on( "mouseenter", function() {
//     $( this ).css({
//       "background-color": "yellow",
//       "font-weight": "bolder"
//     })
//   })


  $("#newCategory").change(function () {
      if ($(this).val() == 4) {
          $("#txtOther").removeAttr("disabled");
          $("#txtOther").focus();
          $("#txtOther").css( "background-color", "white" );
      } else {
          $("#txtOther").attr("disabled", "disabled");
          $("#txtOther").css( "background-color", "lightgrey" );
      }
  });
