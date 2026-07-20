const form = document.querySelector("form");
const userName = document.querySelector("#name");
const role = document.querySelector("#role");
const photo = document.querySelector("#photo");
const bio = document.querySelector("#bio");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },
    addUser: function () {
        this.users.push({
            userName: userName.value,
            role: role.value,
            photo: photo.value,
            bio: bio.value,
        });
        form.reset();
        this.renderUi();
    },
    renderUi: function () {
        document.querySelector(".users").innerHTML = "";
        this.users.forEach(function (user) {
            const card = document.createElement("div");
            card.className = "bg-white/90 backdrop-blur rounded-2xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition shadow-xl";

            const img = document.createElement("img");
            img.className = "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
            img.src = user.photo || "https://via.placeholder.com/150?text=No+Photo";
            img.alt = "User Photo";
            card.appendChild(img);

            const name = document.createElement("h2");
            name.className = "text-2xl font-bold mb-1 text-blue-700";
            name.textContent = user.userName;
            card.appendChild(name);

            const roleEl = document.createElement("p");
            roleEl.className = "text-purple-500 mb-2 font-medium";
            roleEl.textContent = user.role;
            card.appendChild(roleEl);

            const desc = document.createElement("p");
            desc.className = "text-gray-700 text-center";
            desc.textContent = user.bio;
            card.appendChild(desc);

            document.querySelector(".users").appendChild(card);
        });
    },
};

userManager.init();