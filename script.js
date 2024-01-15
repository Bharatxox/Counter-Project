const counter = document.querySelector(".counter");

function displayResult(){
    const plus = document.createElement("button");
    const count = document.createElement("span");
    const min = document.createElement("button");
    const display = document.createElement("div");
    const button = document.createElement("div");
    const reset = document.createElement("button");

    plus.classList.add("button1");
    min.classList.add("button1");
    reset.classList.add("button2");
    count.classList.add("count")
    display.classList.add("display");
    button.classList.add("resetButton")

    plus.innerHTML = "+";
    min.innerHTML = "-";
    reset.innerHTML = "reset";
    count.innerHTML = "0";

    display.appendChild(min);
    display.appendChild(count);
    display.appendChild(plus);
    button.appendChild(reset);
    counter.appendChild(display);
    counter.appendChild(button);

    let countValue = 0;

    display.addEventListener('click',(e)=>{
        const displayPlannel = display.querySelector("span");

        console.log(displayPlannel);
        if(e.target === plus){
            countValue++;
            displayPlannel.innerHTML = countValue;
        }
        if(e.target === min){
            if(countValue > 0){
                countValue--;
                displayPlannel.innerHTML = countValue;
            }
            
        }
    });
    reset.addEventListener('click',(e)=>{
        const displayPlannel = display.querySelector("span");
        countValue = 0;
        displayPlannel.innerHTML = countValue;

    });
}

window.onload = () => displayResult();
