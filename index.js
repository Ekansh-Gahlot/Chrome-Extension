let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const dltBtn = document.getElementById("dlt-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


//Show the list if leadsFromLocalStorage has any value
if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    renderLeads()
}

//NOTE - LOCAL STORAGE ONLY SUPPORTS STRINGS
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
})


dltBtn.addEventListener("dblclick", function(){
    myLeads = []
    localStorage.clear("myLeads")
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

        //Add elemenet with href
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
