function cloneRow() {
    let addMoreBtn = document.querySelectorAll("[data-DuplicateTrigger]");
    for (let i = 0; i < addMoreBtn.length; i++) {
        let addBtn = addMoreBtn[i];

        addBtn.addEventListener("click", cloneTrigger);

        function cloneTrigger() {
            // Container Trigger Value from Attribute
            let duplicatableValue = addBtn.getAttribute("data-DuplicateTrigger");

            // Getting the parent container using [data-DuplicateTrigger] attribute
            let parentContainer = document.getElementById(duplicatableValue);

            // If the parentContainer is available then the first 
            // child tag with a similar class value will be duplicated
            if (parentContainer) {
                let firstRow = parentContainer.querySelector("." + duplicatableValue + "Row");
                if (firstRow) {
                    let clonedRow = firstRow.cloneNode(true);
                    parentContainer.appendChild(clonedRow);
                    let inputFields = clonedRow.querySelectorAll("input");
                    inputFields.forEach(input => {
                        input.value = "";
                    });

                    
                    
                    if (duplicatableValue !== "productInfo") {
                        let newRmvBtn = document.createElement("button");
                        newRmvBtn.type = "button";
                        newRmvBtn.innerHTML = "Remove";
                        newRmvBtn.classList.add("body-small", "med", "text-danger", "bg-transparent", "border-0", "p-0");
                        clonedRow.appendChild(newRmvBtn);

                        newRmvBtn.addEventListener("click", () => {
                            clonedRow.remove() 
                        });
                        
                    } 
                    
                }
            }
        }
    }
}

cloneRow();
