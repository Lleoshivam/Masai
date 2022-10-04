// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit", getdata)
function getdata() {
    event.preventDefault()
    let name = document.getElementById("name").value
    let batch = document.getElementById("batch").value
    let dsa = document.getElementById("dsa").value
    let cs = document.getElementById("cs").value
    let coding = document.getElementById("coding").value

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")

    let percent = ((parseInt(dsa) + parseInt(cs) + parseInt(coding)) / 30) * 100

    td1.innerText = name
    td2.innerText = batch
    td3.innerText = dsa
    td4.innerText = cs
    td5.innerText = coding
    td6.innerText = percent + "%"

    if (percent > 50) {
        td7.innerText = "Regular"
        td7.style.backgroundColor = "green"

    } else {
        td7.innerText = "Asyn"
        td7.style.backgroundColor = "red"
    }

    td8.innerText = "Delete"
    td8.addEventListener("click", deleterow)

    let tr = document.createElement("tr")

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    document.querySelector("tbody").append(tr)
}

function deleterow() {
    event.target.parentNode.remove()
}