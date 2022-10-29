
const btn = document.querySelector(".click")

btn.addEventListener("click" , () => {
    const request = new XMLHttpRequest();
    request.open("GET","data.json");
    request.setRequestHeader("Content-type", "application");
    request.send();
    request.addEventListener("load" , () => {
        const data = JSON.parse(request.response);
        document.querySelector(".name").innerHTML = data.name
        document.querySelector(".age").innerHTML = data.age
    });
});