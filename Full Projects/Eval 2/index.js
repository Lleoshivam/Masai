document.querySelector("form").addEventListener("submit", getData)

function getData() {
    event.preventDefault()
    let id = document.getElementById("compName").value
    let listedExchange = document.getElementById("listedExchange").value
    let industry = document.getElementById("industry").value
    let stockprice = document.getElementById("stockPrice").value
    let quantity = document.getElementById("quantity").value
    let type = document.getElementById("type").value



    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    td1.innerText = id
    td2.innerText = listedExchange
    td3.innerText = industry
    td4.innerText = stockprice
    td5.innerText = quantity
    td6.innerText = type
    td7.innerText = parseInt(stockprice) * parseInt(quantity)
    td8.innerText = today
    td9.innerText = "Sell"
    td9.addEventListener("click", deleterow)
    td9.style.backgroundColor = "crimson"
    td9.style.color = "white"
    td9.style.fontWeight = "bold"




    if (id === "" || listedExchange === "" || industry === "" || stockprice === "" || quantity === "" || type === "") {
        alert("Enter All the fields")
    } else {
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9)
        document.querySelector("tbody").append(tr)
    }


    var x = document.querySelector("table").rows.length;


    let noofStock = document.getElementById("noOfStock")
    noofStock.innerText = x - 1



    let sum = 0;
    for (let i = 1; i < x; i++) {
        sum += parseInt(document.querySelector("table").rows[i].cells[6].innerText)
    }
    let totalPortfolio = document.getElementById("totalPortfolio")
    totalPortfolio.innerText = sum


}

function deleterow() {
    event.target.parentNode.remove()
}


