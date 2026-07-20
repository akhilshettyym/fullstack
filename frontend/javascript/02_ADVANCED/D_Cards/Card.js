let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main")

form.addEventListener('submit', (dets) => {
    // console.log(dets)
    // console.log(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value,)
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let image = document.createElement("img");
    image.setAttribute("src", inputs[0].value);


    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;


    profile.appendChild(image);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach((inp) => {
        if (inp.type !== "submit") {
            inp.value = "";
        }
    })

    console.log(card);
})