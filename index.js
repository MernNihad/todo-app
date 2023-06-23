let inputField = document.getElementById("inputField");
let addItemBtn = document.getElementById("addItemBtn");
let todoBody = document.getElementById("todoBody");


function todoAdd() {
    // step 1
    let inputValue = inputField.value

    // <!-- li access -->
    // <!-- button -create -->
    // <!-- innerHTML = "" -->
    // <!-- appendCHild -->

    if (inputValue === '') {
        // true
        alert('please enter your task')
    } else {
        // false
        // step-2 first create a list (li) then append()

        // -------------------
        let li = document.createElement("li");
        let span = document.createElement("span");

        // console.log(span);
        // console.log(li);

        // step-A insert value inside li


        // li.style.cssText = "display: flex;min-width: 8rem;justify-content: space-between;"
        // li.innerText = inputValue;
        span.innerText = inputValue;

        // console.log(span);
        // console.log(li);


        // -----------------------
        // step-B insert value inside li

        // -----------------------
        todoBody.appendChild(li)
        // vfvkfm

        // ste -1
        
        li.appendChild(span)
        inputField.value = ''
        inputField.focus()

        // new
        let deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid", "fa-trash")
        li.appendChild(deleteBtn);

        let EditBtn = document.createElement("i");
        EditBtn.style.marginLeft = "12px"
        EditBtn.classList.add("fa-solid", "fa-pen-to-square")
        
        li.appendChild(EditBtn);

        //   new icon

        li.addEventListener("click", function name(evets) {
            let targetClass = evets.target.classList;

            // console.log(evets.target.parentElement.remove(), '-----parent Element');


            // console.log(targetClass);
            // console.log(targetClass[0]);
            // console.log(targetClass[1]);
            // console.log(targetClass[1] === 'fa-trash');
            if (targetClass[1] === 'fa-trash') {
                // 
                evets.target.parentElement.remove()
            }else if (targetClass[1] === 'fa-pen-to-square'){
                let updateText =  prompt("Enter text");
                console.log(updateText,'update text here...');
                //  li.innerHTML = updateText
                let newSpan =  li.querySelector("span")
                newSpan.innerText = updateText;
                console.log(li);
                console.log(newSpan);
            }
        });
        //   



    }

    // ------






}


function callback(event) {
    if (event.key === 'Enter') {
        addItemBtn.click()
    }
}

document.addEventListener("keypress", callback)
addItemBtn.addEventListener("click", todoAdd);




// set target li or icon



