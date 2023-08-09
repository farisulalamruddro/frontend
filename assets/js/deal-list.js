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


let changeTagContainer = document.querySelectorAll(".changeTag");
let createTagContainer = document.querySelectorAll(".createTag");
let createNewTagBTN = document.querySelectorAll(".createNew");
let createTagBackBTN = document.querySelectorAll(".backToChangeTag");


for(var i = 0; i < createNewTagBTN.length; i++){

    createNewTagBTN[i].addEventListener("click", function(){
        for(var x = 0; x < changeTagContainer.length; x++){
            changeTagContainer[x].classList.add("inactive");
            changeTagContainer[x].classList.remove("active");
        };
        for(var y = 0; y < createTagContainer.length; y++){
            createTagContainer[y].classList.remove("inactive");
            createTagContainer[y].classList.add("active");
        }
    });
};

for(var i = 0; i < createTagBackBTN.length; i++){

    createTagBackBTN[i].addEventListener("click", function(){
        for(var x = 0; x < changeTagContainer.length; x++){
            changeTagContainer[x].classList.add("active");
            changeTagContainer[x].classList.remove("inactive");
        };
        for(var y = 0; y < createTagContainer.length; y++){
            createTagContainer[y].classList.remove("active");
            createTagContainer[y].classList.add("inactive");
        }
    });
};


const addTaskBtn = document.getElementById("addTaskBtn");
const taskListContainer = document.getElementById("tasksList");
let addTaskFormAdded = false;


addTaskBtn.addEventListener("click", function(){
    if(!addTaskFormAdded){
        const addTaskForm = document.createElement("div");
        addTaskForm.classList.add("py-3", "border-bottom", "d-flex", "justify-content-between");

        addTaskForm.insertAdjacentHTML("beforeend",`
        <div class="d-flex align-items-center">
                                                    <input type="checkbox" name="" id="">
                                                    <button class="bg-transparent p-0 border-0 d-flex align-items-center mx-3">
                                                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.47417 16.5955C8.46865 16.5955 7.52088 16.4052 6.63086 16.0248C5.74084 15.6443 4.96632 15.1245 4.30729 14.4655C3.64827 13.8065 3.12513 13.032 2.73787 12.142C2.35061 11.2519 2.15698 10.2992 2.15698 9.2837C2.15698 8.26822 2.35061 7.31706 2.73787 6.4302C3.12513 5.54335 3.64827 4.76701 4.30729 4.10119C4.96632 3.43537 5.74084 2.91223 6.63086 2.53176C7.52088 2.1513 8.46865 1.96106 9.47417 1.96106C10.4797 1.96106 11.4275 2.1513 12.3175 2.53176C13.2075 2.91223 13.9854 3.43537 14.6512 4.10119C15.3171 4.76701 15.8402 5.54335 16.2207 6.4302C16.6011 7.31706 16.7914 8.26822 16.7914 9.2837C16.7914 10.2992 16.6011 11.2519 16.2207 12.142C15.8402 13.032 15.3171 13.8065 14.6512 14.4655C13.9854 15.1245 13.2075 15.6443 12.3175 16.0248C11.4275 16.4052 10.4797 16.5955 9.47417 16.5955ZM11.9404 12.6006L12.7965 11.7445L10.1468 9.09482V5.22221H8.92385V9.58399L11.9404 12.6006ZM4.0729 0.595459L4.92895 1.45151L1.58628 4.67189L0.730225 3.81584L4.0729 0.595459ZM14.8754 0.595459L18.2181 3.81584L17.3621 4.67189L14.0194 1.45151L14.8754 0.595459ZM9.47505 15.3725C11.173 15.3725 12.613 14.7812 13.7952 13.5984C14.9774 12.4157 15.5684 10.9753 15.5684 9.27738C15.5684 7.57945 14.9771 6.13941 13.7943 4.95724C12.6116 3.77508 11.1712 3.18399 9.4733 3.18399C7.77537 3.18399 6.33532 3.77537 5.15315 4.95812C3.97099 6.14087 3.37991 7.58121 3.37991 9.27914C3.37991 10.9771 3.97128 12.4171 5.15403 13.5993C6.33678 14.7814 7.77712 15.3725 9.47505 15.3725Z" fill="#4E4D4D"/>
                                                            </svg>                                                        
                                                    </button>
                                                    <div class="d-flex align-items-center me-3">
                                                        <input type="text" class="border rounded w-100 px-2 body-small reg black80" placeholder="Add Task">                                                   
                                                    </div>
                                                    <button class="bg-transparent border-0 p-0 d-flex align-items-center">
                                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <rect x="0.0878906" y="0.095459" width="16" height="16" fill="url(#pattern0)"/>
                                                            <defs>
                                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                            <use xlink:href="#image0_1928_32880" transform="scale(0.00195312)"/>
                                                            </pattern>
                                                            <image id="image0_1928_32880" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <button class="bg-transparent p-0 border-0">
                                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12.8555" cy="12.0955" r="12" fill="#E9E9E9"/>
                                                                <path d="M17.7818 16.0467C17.051 14.7877 15.8811 13.8427 14.4966 13.393C15.1602 12.9984 15.6759 12.3968 15.9645 11.6806C16.2531 10.9644 16.2986 10.1733 16.0939 9.42878C15.8893 8.68427 15.4459 8.02753 14.8318 7.55946C14.2177 7.0914 13.4669 6.83789 12.6948 6.83789C11.9227 6.83789 11.1719 7.0914 10.5578 7.55946C9.94374 8.02753 9.50032 8.68427 9.29568 9.42878C9.09104 10.1733 9.1365 10.9644 9.42508 11.6806C9.71365 12.3968 10.2294 12.9984 10.893 13.393C9.50847 13.8427 8.33862 14.7877 7.60777 16.0467C7.57711 16.0912 7.55599 16.1415 7.54572 16.1945C7.53545 16.2476 7.53626 16.3021 7.5481 16.3548C7.55994 16.4075 7.58255 16.4572 7.61451 16.5008C7.64647 16.5443 7.68709 16.5808 7.73382 16.6079C7.78055 16.6349 7.83237 16.6521 7.88604 16.6582C7.93971 16.6643 7.99406 16.6592 8.04568 16.6433C8.09729 16.6274 8.14506 16.601 8.18597 16.5657C8.22689 16.5304 8.26007 16.4871 8.28343 16.4384C8.73112 15.6648 9.37436 15.0225 10.1486 14.576C10.9229 14.1295 11.801 13.8945 12.6948 13.8945C13.5886 13.8945 14.4667 14.1295 15.241 14.576C16.0152 15.0225 16.6585 15.6648 17.1062 16.4384C17.1295 16.4871 17.1627 16.5304 17.2036 16.5657C17.2445 16.601 17.2923 16.6274 17.3439 16.6433C17.3955 16.6592 17.4499 16.6643 17.5036 16.6582C17.5572 16.6521 17.6091 16.6349 17.6558 16.6079C17.7025 16.5808 17.7431 16.5443 17.7751 16.5008C17.8071 16.4572 17.8297 16.4075 17.8415 16.3548C17.8533 16.3021 17.8541 16.2476 17.8439 16.1945C17.8336 16.1415 17.8125 16.0912 17.7818 16.0467V16.0467ZM9.95299 10.3672C9.95299 9.82496 10.1138 9.29486 10.4151 8.84397C10.7163 8.39308 11.1446 8.04166 11.6456 7.83414C12.1466 7.62662 12.6978 7.57232 13.2297 7.67811C13.7616 7.7839 14.2501 8.04504 14.6336 8.42849C15.017 8.81193 15.2781 9.30048 15.3839 9.83234C15.4897 10.3642 15.4354 10.9155 15.2279 11.4165C15.0204 11.9175 14.669 12.3457 14.2181 12.647C13.7672 12.9482 13.2371 13.109 12.6948 13.109C11.9676 13.109 11.2702 12.8202 10.756 12.306C10.2419 11.7918 9.95299 11.0944 9.95299 10.3672Z" fill="#383637"/>
                                                            </svg>
                                                        </button>
                                                        <p class="body-normal sb black80 mb-0 ms-2">Name</p>
                                                    </div>
                                                    <p class="body-normal sb black80 mb-0 mx-3">Date</p>
                                                    <div>
                                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.4367 3.54178C12.4371 3.9693 12.3528 4.39266 12.1886 4.78742C12.0245 5.18218 11.7838 5.54053 11.4805 5.84178L9.7117 7.61053C9.10231 8.21927 8.27618 8.56121 7.41483 8.56121C6.55347 8.56121 5.72735 8.21927 5.11795 7.61053C5.06776 7.56505 5.02733 7.50985 4.99912 7.44827C4.9709 7.38669 4.9555 7.32002 4.95383 7.25231C4.95216 7.1846 4.96427 7.11725 4.98942 7.05436C5.01457 6.99147 5.05223 6.93434 5.10012 6.88645C5.14802 6.83856 5.20515 6.80089 5.26804 6.77574C5.33093 6.7506 5.39827 6.73849 5.46599 6.74016C5.5337 6.74182 5.60037 6.75723 5.66194 6.78544C5.72352 6.81365 5.77872 6.85408 5.8242 6.90428C6.24694 7.32449 6.81877 7.56035 7.41483 7.56035C8.01088 7.56035 8.58272 7.32449 9.00545 6.90428L10.7742 5.13553C10.9905 4.92831 11.1632 4.68 11.2823 4.40515C11.4013 4.13029 11.4643 3.83443 11.4675 3.53492C11.4707 3.2354 11.4141 2.93826 11.301 2.66092C11.1878 2.38358 11.0205 2.13162 10.8087 1.91982C10.5969 1.70802 10.3449 1.54064 10.0676 1.4275C9.79022 1.31436 9.49307 1.25773 9.19356 1.26094C8.89405 1.26415 8.59819 1.32713 8.32333 1.44619C8.04848 1.56525 7.80017 1.73799 7.59295 1.95428L6.35545 3.19178C6.26034 3.27796 6.13573 3.32426 6.00742 3.3211C5.87911 3.31794 5.75693 3.26556 5.66617 3.17481C5.57542 3.08405 5.52304 2.96187 5.51988 2.83356C5.51672 2.70525 5.56302 2.58064 5.6492 2.48553L6.8867 1.24803C7.34202 0.796142 7.92066 0.48881 8.55001 0.364602C9.17936 0.240394 9.83138 0.304844 10.4242 0.549864C11.0171 0.794883 11.5244 1.20956 11.8824 1.74184C12.2404 2.27412 12.4333 2.9003 12.4367 3.54178V3.54178ZM6.35545 9.55428L5.11795 10.7918C4.69308 11.1988 4.12566 11.4232 3.53731 11.4169C2.94896 11.4106 2.38648 11.1741 1.97043 10.7581C1.55437 10.342 1.31785 9.77952 1.31155 9.19117C1.30524 8.60282 1.52966 8.0354 1.9367 7.61053L3.70545 5.84178C4.12819 5.42157 4.70002 5.18571 5.29608 5.18571C5.89213 5.18571 6.46397 5.42157 6.8867 5.84178C6.98181 5.92796 7.10643 5.97426 7.23474 5.9711C7.36304 5.96794 7.48523 5.91556 7.57598 5.82481C7.66674 5.73405 7.71912 5.61187 7.72228 5.48356C7.72544 5.35525 7.67913 5.23064 7.59295 5.13553C6.98356 4.52678 6.15743 4.18485 5.29608 4.18485C4.43472 4.18485 3.6086 4.52678 2.9992 5.13553L1.23045 6.90428C0.912472 7.20217 0.657637 7.56095 0.481101 7.9593C0.304564 8.35765 0.209929 8.78744 0.202825 9.22309C0.19572 9.65875 0.27629 10.0914 0.439744 10.4953C0.603198 10.8992 0.846198 11.2661 1.1543 11.5742C1.46239 11.8823 1.8293 12.1253 2.23319 12.2887C2.63709 12.4522 3.06973 12.5328 3.50539 12.5257C3.94105 12.5186 4.37083 12.4239 4.76918 12.2474C5.16753 12.0708 5.52631 11.816 5.8242 11.498L7.0617 10.2605C7.14788 10.1654 7.19419 10.0408 7.19103 9.9125C7.18787 9.78419 7.13549 9.66201 7.04473 9.57125C6.95398 9.48049 6.83179 9.42811 6.70349 9.42495C6.57518 9.42179 6.45056 9.4681 6.35545 9.55428V9.55428Z" fill="#383637"/>
                                                            </svg>
                                                            
                                                    </div>
                                                </div>
        
        `);

        taskListContainer.appendChild(addTaskForm);

        addTaskFormAdded = true;
        this.setAttribute("disabled", "true");
            
    };
});


