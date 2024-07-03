let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length;i++)
    {
        //First method to add HTML element 
        //listItems += "<li><a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        //console.log(listItems)
        


        //Second method to add HTML element
        /*const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)*/
        // const li = document.createElement("li");
        // const a = document.createElement("a");
        // a.textContent = myLeads[i];
        // a.href = myLeads[i]; // Assuming myLeads[i] contains the URL

        // li.appendChild(a); // Append the anchor element to the list item
        // ulEl.appendChild(li); // Append the list item to the unordered list


        //USING TEMPLATE STRING TO SOLVE LISTITEMS LENGTH ISSUE MORE READABLE
        listItems += `
            <li>
                <a target = '_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `

    
    }
    
    ulEl.innerHTML = listItems
}

