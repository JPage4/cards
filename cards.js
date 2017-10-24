// put keypress-input into output-target
let outputEl = document.getElementById("output-target");

// create generator to determine which card we're on
const idGenerator = function* () {
    let id = 1
    while(true) {
    yield id
    id++
    }
}
let idMaker = idGenerator();

// create unique id value on each card?


// listen for click event from create button
document.getElementById("create").addEventListener("click", function(event) {
    let newId = idMaker.next().value
    console.log("event", event.target);

    outputEl.innerHTML += `
    <section id="card-main-${newId}">
    <h1 class="title">New Card Who Dis?</h1>
    <button class="delete" id="delete-${newId}">Delete Me</button>
    </section>
    `  
    // add event listener to delete button? function remove child
    let deleteArray = document.getElementsByClassName("delete")
    for (let i = 0; i < deleteArray.length; i++) {
        let deleteBtns = deleteArray[i];
        deleteBtns.addEventListener("click", function (event) {
            event.target.parentNode.remove();
        });
        
    }
    
    
});
