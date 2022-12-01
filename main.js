let input = document.getElementById("input")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let tbody = document.createElement('table')
let tr = document.createElement('tr')
let th = document.createElement('th')
th.innerText = "id"
let th1 = document.createElement('th')
th1.innerText = "name"
let th2 = document.createElement('th')
th2.innerText = "surname"
tr.append(th, th1, th2)
tbody.appendChild(tr)
document.body.appendChild(tbody)

document.getElementById("btn").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users").then(arr => arr.json()).then(element=> element.forEach(element => {
        console.log(element)
        let tr = document.createElement('tr')
        let th = document.createElement('th')
        th.innerText =  element.id
        let th1 = document.createElement('th')
        th1.innerText = element.name
        let th2 = document.createElement('th')
        th2.innerText = element.usurnama
        tr.append(th, th1, th2)
        tbody.appendChild(tr)
    }))
})