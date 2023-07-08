let crmHamBurger = document.getElementById("crmHamBurger");
let crmNavList = document.querySelector(".crmNavList");
crmHamBurger.addEventListener("click", function(){
    
    crmHamBurger.classList.toggle("active");
    
    crmNavList.classList.toggle("active");


});

// Filter Cancel

const filterCancel = document.querySelectorAll(".filterCancel");
for(var i = 0; i < filterCancel.length; i++){
    filterCancel[i].addEventListener("click", cancel);
}

function cancel(){
    const filterPanel = document.querySelectorAll(".dropdown-menu");

    for(var i = 0; i < filterPanel.length; i++){
        filterPanel[i].classList.remove("show");
    }
}




// Lost Win Toggle

const lostCheck = document.querySelectorAll(".lost");
const winCheck = document.querySelectorAll(".win");


for (var i = 0; i < lostCheck.length; i++){
    lostCheck[i].addEventListener("click", update);
};

for (var i = 0; i < winCheck.length; i++){
    winCheck[i].addEventListener("click", update);
}

function update() {
    const lostWinLabels = document.querySelectorAll(".lostWinLabel");

    for(var i = 0; i < lostWinLabels.length; i++){
        const lostCheckbox = lostCheck[i];
        const winCheckbox = winCheck[i];

        if(lostCheckbox.checked){
            lostWinLabels[i].innerHTML = "Lost";
            lostWinLabels[i].style.display = "block";
            lostWinLabels[i].classList.add("bg-danger");
            lostWinLabels[i].classList.remove("bg-success");
        }else if (winCheckbox.checked){
            lostWinLabels[i].innerHTML = "Won";
            lostWinLabels[i].style.display = "block";
            lostWinLabels[i].classList.remove("bg-danger");
            lostWinLabels[i].classList.add("bg-success");
        }else{
            lostWinLabels[i].style.display = "none";
        }
    };
};



// Box Calender Toggle

const calendarIcon = document.querySelectorAll(".calendarIcon");


for (var i = 0; i < calendarIcon.length; i++){
    const icon = calendarIcon[i];
    icon.dataset.index = i;
    icon.addEventListener("click", function(){
        const index = parseInt(this.dataset.index);
        this.classList.toggle("active");
        const boxSchedule = document.querySelectorAll(".boxSchedule");
        const boxCalendar = boxSchedule[index];
        boxCalendar.classList.toggle("active");
    });
}



// Table follows the body width


    const bodyWidth = document.body.clientWidth - 59;
    const overflowTable = document.getElementById("followBodyWidth");
    if (overflowTable !== null) {
        overflowTable.style.maxWidth = bodyWidth + "px";
    };



// Deal Edit

const dealAddBTN =  document.querySelectorAll(".dealAddBTN");

for (var i = 0; i < dealAddBTN.length; i++){
    const addBtn = dealAddBTN[i];
    addBtn.dataset.index = i;
    addBtn.addEventListener("click", function(){
        const index = parseInt(this.dataset.index);
        const dealAddElementOption = document.querySelectorAll(".dealAddElementOption");
        const dealAddCont = dealAddElementOption[index];
        dealAddCont.style.display = "block";

        const addDetailsDescription = document.querySelectorAll(".addDetailsDescription");
        const addDetails = addDetailsDescription[index];
        if(addDetails !== null){
            addDetails.style.display = "none";
        }

    });
};


const closeAddElement =  document.querySelectorAll(".closeAddElement");

for (var i = 0; i < closeAddElement.length; i++){
    const closeBtn = closeAddElement[i];
    closeBtn.dataset.index = i;
    closeBtn.addEventListener("click", function(){
        const index = parseInt(this.dataset.index);
        const dealAddElementOption = document.querySelectorAll(".dealAddElementOption");
        const dealAddElement = dealAddElementOption[index];
        dealAddElement.style.display = "none";


        const addDetailsDescription = document.querySelectorAll(".addDetailsDescription");
        const addDetails = addDetailsDescription[index];
        if(addDetails !== null){
            addDetails.style.display = "block";
        }
    });
};



// Deals list row link
  
var dealsEdit = document.querySelectorAll('.listDealsRow');
if(dealsEdit !== null){
    dealsEdit.forEach(function(row){
        row.style.width = "97%";
        row.onclick = function(){
            window.location = '/crm/edit-deal.html';
          }
      });
}


// Deals Quote Row



const dealQuotesRow = document.querySelectorAll(".dealQuotesRow");
for(var i = 0; i < dealQuotesRow.length; i++){

    dealQuotesRow[i].addEventListener("click", function(){

        document.getElementById("quoteDetailsContainer").classList.add("active");
        document.getElementById("dealQuotesContainer").style.display = "none";

    });
}



const quoteDetailsBack = document.getElementById("quoteDetailsBack");

if(quoteDetailsBack != null){
    quoteDetailsBack.addEventListener("click", function(){
        document.getElementById("quoteDetailsContainer").classList.remove("active");
        document.getElementById("dealQuotesContainer").style.display = "block";
    });
}


const tasksCheckBoxes = document.querySelectorAll(".tasksCheckBoxes");

if(tasksCheckBoxes != null ){

    for(let i = 0; i < tasksCheckBoxes.length; i++){
        const checkbox = tasksCheckBoxes[i];
        checkbox.addEventListener("change", function(){
            const parentDIV = checkbox.parentNode;
            const pTAG = parentDIV.querySelector('p');
            if(this.checked){
                pTAG.style.textDecoration = "line-through";
                pTAG.removeAttribute("data-bs-target");
                pTAG.removeAttribute("type");
            }else{
                pTAG.style.textDecoration = "none";
                pTAG.setAttribute("data-bs-target", "#priceFollow");
                pTAG.setAttribute("type", "button");
            }
        });
    }


}

// Deals list row link
  
var listProductRow = document.querySelectorAll('.listProductRow');
if(listProductRow !== null){
    listProductRow.forEach(function(row){
        row.style.width = "97%";
        row.onclick = function(){
            window.location = '/crm/edit-product.html';
          }
      });
}


const circles = document.querySelectorAll('.pipelineCircle');
const line = document.querySelector('.stageLine');

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    // Update the color of clicked circle and previous circles
    for (let i = 0; i <= index; i++) {
      circles[i].style.backgroundColor = '#16A34A';
      circles[i].style.outlineColor = '#16A34A';
    }
    // Reset the color of subsequent circles
    for (let i = index + 1; i < circles.length; i++) {
      circles[i].style.backgroundColor = '#919090';
      circles[i].style.outlineColor = '#919090';
    }
    // Update the width of the line based on the selected circles
    const percentComplete = (index + 1) * 20;
    line.style.width = `${percentComplete}%`;
  });
});


// Add New Item

const addNewItemContainer = document.getElementById("addNewItemContainer");
const addNewItemBTN = document.getElementById("addNewItemBTN");
const removeAllBtn = document.getElementById("removeAllItems");

if(addNewItemContainer !== null){
    // Add new item when Add New Item button is clicked
    addNewItemBTN.addEventListener("click", function(){
        const addNewItemRow = addNewItemContainer.querySelector(".addNewItemRow").cloneNode(true);
        const rows = addNewItemContainer.querySelectorAll('.addNewItemRow');
        const lastRow = rows[rows.length - 1];
        addNewItemContainer.insertBefore(addNewItemRow, lastRow.nextSibling);
        const newSelectElement = addNewItemRow.querySelector('select');
        const chosenContainer = newSelectElement.parentNode.querySelector('.chosen-container');
        if (chosenContainer) {
            chosenContainer.parentNode.removeChild(chosenContainer);
        }
        $(newSelectElement).chosen();

        
    });
    
    

    // Remove selected items when Remove All button is clicked
    removeAllBtn.addEventListener('click', () => {
        const items = addNewItemContainer.querySelectorAll('.addNewItemRow');
        const selectedItems = addNewItemContainer.querySelectorAll('.addNewItemRow input[type="checkbox"]:checked');
        
        // If no items are selected, remove all items
        if (selectedItems.length === 0) {
            if (items.length > 1) {
                for (let i = items.length - 1; i >= 1; i--) {
                    addNewItemContainer.removeChild(items[i]);
                }
            }
        } 
        // If selected items exist, remove them
        else {
            selectedItems.forEach((item) => {
                const row = item.closest('.addNewItemRow');
                addNewItemContainer.removeChild(row);
            });
        }
    });
};




$(document).ready(function() {
    // hide all additionalCostField by default
    $('.additionalCostField').hide();
    
    // toggle additionalCostField when additionalCostBTN is clicked
    $('#additionalCostBTN').click(function() {
        $('.additionalCostField').toggle();
    });
});



// Dashboard Toggle

const dashCheckBox = document.querySelectorAll(".dashCheckBox");



if(dashCheckBox != null){
    for(let i = 0; i < dashCheckBox.length; i++){
        dashCheckBox[i].addEventListener("click", dToggle);
    };
    function dToggle(event){
        let togglerCheckBox = event.target;
        if (!togglerCheckBox) {
            return;
        }
        let dashboardToggle = togglerCheckBox.closest(".dashboardToggle");
        if (!dashboardToggle) {
            return;
        }
        // let dashboardToggle = togglerCheckBox.closest(".dashboardToggle");
        let dToggle = dashboardToggle.querySelector(".dashToggler");
        let dToggleText = dashboardToggle.querySelectorAll(".dashToggleText");
        let dToggleCircle = dashboardToggle.querySelector(".dToggleCircle");
        
        if(togglerCheckBox.checked){
            dToggle.style.backgroundColor = "#16A34A";
        } else {
            dToggle.style.backgroundColor = "#1D9CD3";
        }
    
        for(let i = 0; i < dToggleText.length; i++){
            let toggleText = dToggleText[i];
            if(togglerCheckBox.checked){
                toggleText.innerHTML = "Type";
                toggleText.style.right = "inherit";
                toggleText.style.left = "6px";
            } else {
                toggleText.innerHTML = "User";
                toggleText.style.left = "inherit";
                toggleText.style.right = "6px";
            }
        };
        
        if(togglerCheckBox.checked){
            dToggleCircle.style.right = "4px";
            dToggleCircle.style.left = "inherit";
        } else {
            dToggleCircle.style.right = "inherit";
            dToggleCircle.style.left = "4px";
        }
    };
    // Initialize styles based on initial state of checkbox
    dToggle({ target: dashCheckBox[0] });
}






// Searchable Input


$("select:not(.bulkOption)").chosen({no_results_text: "Nothing found with:"});




// const addButton = document.querySelector('#addMoreUnitPriceBTN');
// addButton.addEventListener('click', addProductUnit);



//   function addProductUnit() {
//     const addProductUnitCurr = document.querySelector('.addProductUnitCurr');
//     const newAddProductUnit = addProductUnitCurr.cloneNode(true);
    
//     // Add a "Remove" button to the duplicated div
//     const removeButton = document.createElement('button');
//     removeButton.type = 'button';
//     removeButton.innerHTML = 'Remove';
//     removeButton.classList.add("text-danger", "border-0", "bg-transparent", "p-0", "body-small", "med");

//     removeButton.addEventListener('click', function() {
//       newAddProductUnit.remove();
//     });
//     newAddProductUnit.appendChild(removeButton);
    
//     addProductUnitCurr.after(newAddProductUnit);
//   }
  


  const addMoreRowsBTN = document.querySelectorAll("[duplicateTrigger]");

  for(let i = 0; i < addMoreRowsBTN.length; i++){
    const rowDuplicatorBTN = addMoreRowsBTN[i];

    rowDuplicatorBTN.addEventListener("click", function(){

        const triggerBTN = this.getAttribute("duplicateTrigger");
        const rowsDuplicate = document.getElementById(triggerBTN);
    
        const rowsDuplicated = rowsDuplicate.cloneNode(true);
    

        const removeBTN = document.createElement("button"); 
        removeBTN.type = "button";
        removeBTN.innerHTML = "Remove";
        removeBTN.classList.add("text-danger", "border-0", "bg-transparent", "p-0", "body-small", "med", "w-auto");

        removeBTN.addEventListener('click', function() {
            rowsDuplicated.remove();
          });
        rowsDuplicated.appendChild(removeBTN);

        rowsDuplicate.after(rowsDuplicated);
    
      });

  }



//   Enable / Disable Input Fields

const addValue = document.querySelectorAll("[targeted-element]");
const addValueLength = addValue.length;
const closeValue = document.querySelectorAll("[closeInput]");
const closeValueLength = closeValue.length;

for(let i = 0; i < addValueLength; i++){
    addValue[i].addEventListener("click", function(){
        addValue[i].classList.add("activated");
        const triggerSelector = this.getAttribute("targeted-element");
        const inputContainer = document.getElementById(triggerSelector);

        inputContainer.style.display = "block";

    });
}

for (let j = 0; j < closeValueLength; j++) {
    closeValue[j].addEventListener("click", function () {
      const closeInputTrigger = this.getAttribute("closeInput");
      const inputContainer = document.getElementById(closeInputTrigger);
        
      inputContainer.style.display = "none";
  
      // Remove the "activated" class from the corresponding "addValue" button
      const addValueButton = inputContainer.closest(".productEditorCont").querySelector(".addValue");
      addValueButton.classList.remove("activated");

    });
}



const allDetailsEditBtn = document.getElementById("productDetailsAllEdit");
const addValueBtn = document.querySelectorAll(".addValue");
const productEditInput = document.querySelectorAll(".productEditInput");

if(allDetailsEditBtn != null){
    allDetailsEditBtn.addEventListener("click", function(){

        for (let i = 0; i < addValueBtn.length; i++) {
            addValueBtn[i].classList.add("activated");
        }
        for (let j = 0; j < productEditInput.length; j++) {
            productEditInput[j].style.display = "block";
        }
    
        
    
    });
}




