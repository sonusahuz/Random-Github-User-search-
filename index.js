

async function app(){
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    myData(data)
}

function myData(data){
    console.log(data.results[0])
    const flex = document.getElementById("flex");
    const div = document.createElement("div")
    div.innerHTML =`<img src="${data.results[0].picture.thumbnail}" alt="">
    <h3><strong>Full Name </strong>: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h3>
    <p><strong>Email     </strong> : ${data.results[0].email}</p>
    <p><strong>UserName  </strong> : ${data.results[0].login.username}</p>
    <p><strong>Age    </strong> : ${data.results[0].dob.age}</p>
    <p><strong>Gender </strong> : ${data.results[0].gender}</p>
    <p><strong>City   </strong> : ${data.results[0].location.city}</p>
    <p><strong>Country   </strong> : ${data.results[0].location.country}</p>
    <p><strong>State  </strong> : ${data.results[0].location.state}</p> `
    flex.appendChild(div)
}
app()
myData()

