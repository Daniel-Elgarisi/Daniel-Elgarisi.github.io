let ownerId
let petId
let ip = sessionStorage.getItem("ip")

async function updateVaccein() {
    let vaccein = document.getElementById("Vacceins").value;
    let ip = sessionStorage.getItem("ip")

    //fetch
    //call for POST to the url:
    let response = await fetch(`http://${ip}:5000/pets/updateVaccein`, {
        //post
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //this is the stuff we refer to as: req.body in the backend!!!!!
        body: JSON.stringify({
            petId: petId.data,
            vaccein: vaccein
        })
    })
    //get data from backend response as json!
    let body = await response.json()
    alert(body.message)
}

async function findPetIdByName() {
    let pname = document.getElementById("Pname").value;

    //fetch
    //call for POST to the url:
    let response = await fetch(`http://${ip}:5000/pets/findPetIdByName`, {
        //post
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //this is the stuff we refer to as: req.body in the backend!!!!!
        body: JSON.stringify({
            pname: pname,
            ownerId: ownerId.data
        })
    })
    //get data from backend response as json!
    petId = await response.json()
}


async function findOwner() {
    let phone = document.getElementById("Phone").value;

    //fetch
    //call for POST to the url:
    let response = await fetch(`http://${ip}:5000/user/getUserByPhone`, {
        //post
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //this is the stuff we refer to as: req.body in the backend!!!!!
        body: JSON.stringify({
            phone: phone
        })
    })
    //get data from backend response as json!
    ownerId = await response.json()
    let x = document.getElementById("Pname");
    if (ownerId.data) {
        x.removeAttribute("disabled");
    }
    else{
        x.setAttribute("disabled", "");
    }
    console.log(ownerId);
}