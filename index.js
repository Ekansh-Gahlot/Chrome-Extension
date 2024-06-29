let myLeads = ["www.example.com","www.example2.com","www.example3.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked from event listener")
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems = ""
for(let i = 0; i < myLeads.length;i++)
{
    //First method to add HTML element
    listItems += "<li>" + myLeads[i] + "</li>"
    
    //Second method to add HTML element
    /*const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)*/

}

ulEl.innerHTML = listItems
