// Form password hide/show

function togglePassword(id) {
    var password = document.getElementById(id);
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };


//   Header ham menu

function ham() {
    var hamburger = document.getElementById("headerMenu");
    var hambars = document.getElementById("hamBar");
    hamburger.classList.toggle("active");
    hambars.classList.toggle("active");
 }

 function sideham() {
    var sideBAR = document.getElementById("sidebar");
    var sideHAM = document.getElementById("sideHAM");
    sideBAR.classList.toggle("active");
    sideHAM.classList.toggle("active");
 }


let crmHamBurger = document.getElementById("crmHamBurger");
let crmNavList = document.querySelector(".crmNavList");

if (crmHamBurger != null) {
  crmHamBurger.addEventListener("click", function(){
      
    crmHamBurger.classList.toggle("active");
    
    crmNavList.classList.toggle("active");


  });
}




// Modal / Popup

  var modalBtns = document.querySelectorAll(".modal-open");

  modalBtns.forEach(function(btn){
      btn.onclick = function(){
          var modal = btn.getAttribute("data-modal");

          document.getElementById(modal).style.display = "block";
      }
  });

  var closeBtns = document.querySelectorAll('.modal-close');

  closeBtns.forEach(function(btn){
      btn.onclick = function(){
          var modal = (btn.closest('.modal').style.display = "none");
      }
  });


  var overlay = document.querySelectorAll('.overlay');

  overlay.forEach(function(btn){
      btn.onclick = function(){
          var modal = (btn.closest('.modal').style.display = "none");
      }
  });




// Info inline edit


var editPEN = document.querySelectorAll(".edit");

editPEN.forEach(function(ebtn){
              ebtn.onclick = function(){
                var statiCon = ebtn.getAttribute("data-modal");
                var editinfo = ebtn.getAttribute("open-input");

                document.getElementById(statiCon).style.display = "none";
                document.getElementById(editinfo).style.display = "block";

}
});

var closeInput = document.querySelectorAll(".closeSave");

closeInput.forEach(function(cbtn){
  cbtn.onclick = function(){
                var statiCont = cbtn.getAttribute("data-modal");
                var editinput = cbtn.getAttribute("close-input");

                document.getElementById(statiCont).style.display = "flex";
                document.getElementById(editinput).style.display = "none";

}
});


var saveInput = document.querySelectorAll(".saveInfo");

saveInput.forEach(function(sbtn){
          sbtn.onclick = function(){
                var saveInfoCont = sbtn.getAttribute("save-modal");
                var saveInputinfo = sbtn.getAttribute("save-input");

                document.getElementById(saveInfoCont).style.display = "flex";
                document.getElementById(saveInputinfo).style.display = "none";

}
});

var clearInput = document.querySelectorAll(".inputCLR");

clearInput.forEach(function(clr){
  clr.onclick = function(){
                var clearInputField = clr.getAttribute("clear-input");
                document.getElementById(clearInputField).value = "";

}
});



// Main Form edit


var empEdit = document.querySelectorAll(".editForm");

empEdit.forEach(function(editFormbtn){
  editFormbtn.onclick = function(){
    var emplInfo = editFormbtn.getAttribute("empl-info");
    var emplform = editFormbtn.getAttribute("form-name");
    
    document.getElementById(emplInfo).style.display = "none";
    document.getElementById(emplform).style.display = "block";

}
});

var empformClose = document.querySelectorAll(".form-btn");

empformClose.forEach(function(closeForm){
  closeForm.onclick = function(){
    var closeFormcon = closeForm.getAttribute("close-form");
    var openInfocon = closeForm.getAttribute("open-info");
    
    document.getElementById(closeFormcon).style.display = "none";
    document.getElementById(openInfocon).style.display = "block";

}
});





var roleSwitch = document.querySelectorAll(".roleEdit");

roleSwitch.forEach(function(roleFormbtn){
  roleFormbtn.onclick = function(){
    var roleInfo = roleFormbtn.getAttribute("role-info");
    var roleForm = roleFormbtn.getAttribute("access-form");
    
    document.getElementById(roleInfo).style.display = "none";
    document.getElementById(roleForm).style.display = "block";

}
});

var roleUpdate = document.querySelectorAll(".roleUpdate");

roleUpdate.forEach(function(roleUpdatebtn){
  roleUpdatebtn.onclick = function(){
    var roleUpInfo = roleUpdatebtn.getAttribute("role-info");
    var roleUpForm = roleUpdatebtn.getAttribute("access-form");
    
    document.getElementById(roleUpInfo).style.display = "block";
    document.getElementById(roleUpForm).style.display = "none";

}
});


// Employee List Bulk Edit


const bulkCheckBox = document.querySelectorAll(".bulkCheck");

bulkCheckBox.forEach((bulkCheck) => {
  bulkCheck.addEventListener("click", bulk);
});

function bulk(event) {
  var checkBox = event.target;
  var bulkpanel = document.getElementById("bulkpanel");
  if (checkBox.checked == true){
    bulkpanel.style.display = "block";
  } else {
    bulkpanel.style.display = "none";
  }
}


var bulkCancel = document.getElementById("bulkCancel");
if(bulkCancel != null){
  bulkCancel.addEventListener("click", function() {
    document.getElementById("bulkpanel").style.display = "none";
  });
}






// Employee List Row Link

var listrow = document.querySelectorAll('.employeeinfo-link');

listrow.forEach(function(row){
    row.onclick = function(){
        window.location = '/hrm-screens/view-employee.html';
      }
  });


// Role info list row link
  
var roleinfo = document.querySelectorAll('.roleinfo-link');

roleinfo.forEach(function(row){
    row.onclick = function(){
        window.location = '/hrm-screens/view-role-access.html';
      }
  });


// Searchable Input


$("select:not(.bulkOption)").chosen({no_results_text: "Nothing found with:"});


// Bulk Select Condition

// Get all edit-option divs
const editOptions = document.querySelectorAll('.edit-options');

// Hide all edit-option divs except the first one
for (let i = 1; i < editOptions.length; i++) {
  editOptions[i].style.display = 'none';
}

// Add change event listeners to all select inputs
const selectInputs = document.querySelectorAll('select');
for (let i = 0; i < selectInputs.length; i++) {
  const currentSelect = selectInputs[i];
  currentSelect.addEventListener('change', () => {
    // Find the index of the current select input
    const currentIndex = Array.from(selectInputs).indexOf(currentSelect);

    // Show the next edit-option div if an option is selected
    if (currentSelect.value && currentIndex < editOptions.length - 1) {
      editOptions[currentIndex + 1].style.display = 'block';
    }
  });
}
