const users = [
    {
        name: "Ava Johnson",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        bio: "Coffee lover. UI/UX enthusiast. Always exploring new design trends."
    },
    {
        name: "Aiden Brooks",
        pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        bio: "Front-end developer passionate about animations and micro-interactions."
    },
    {
        name: "Amelia Carter",
        pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
        bio: "Travel junkie. Loves sunsets, long roads, and discovering new cultures."
    },
    {
        name: "Liam Carter",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        bio: "Software engineer who builds cool things and breaks stuff on weekends."
    },
    {
        name: "Lucas Bernard",
        pic: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853",
        bio: "Backend engineer, automation nerd, and keyboard collector."
    },
    {
        name: "Lara Bennett",
        pic: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca",
        bio: "Yoga lover, plant mom, and full-time wellness blogger."
    },
    {
        name: "Sophia Martinez",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        bio: "Traveler • Photographer • Storyteller capturing moments worldwide."
    },
    {
        name: "Samuel Price",
        pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        bio: "Digital marketer obsessed with analytics, funnels, and copywriting."
    },
    {
        name: "Sienna Blake",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        bio: "Fashion lover & content creator experimenting with modern aesthetics."
    },
    {
        name: "Noah Wilson",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        bio: "Tech geek, crypto curious, and part-time gamer."
    },
    {
        name: "Nathan Reyes",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        bio: "Cybersecurity enthusiast and puzzle solver. Loves dark themes."
    },
    {
        name: "Isabella Davis",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        bio: "Bookworm and blogger. Passionate about minimalism and clean living."
    },
    {
        name: "Ivy Hamilton",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        bio: "Art student exploring textures, color theory, and mixed media."
    },
    {
        name: "Ethan Walker",
        pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
        bio: "Fitness addict and mountain hiker. Always chasing the next peak."
    },
    {
        name: "Elijah Payne",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        bio: "Music nerd, amateur drummer, and audio engineering learner."
    },
    {
        name: "Mia Thompson",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        bio: "Digital artist obsessed with neon colors and futuristic aesthetics."
    },
    {
        name: "Mason Delgado",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        bio: "Gamer, streamer, and tech enthusiast. Loves RGB everything."
    },
    {
        name: "James Anderson",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        bio: "Full-stack dev. Cat person. Believer in clean code and good coffee."
    },
    {
        name: "Jasmine Clark",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        bio: "Makeup artist and fashion stylist exploring modern glam aesthetics."
    },
    {
        name: "Chloe Robinson",
        pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        bio: "Skincare nerd & lifestyle content creator based in LA."
    }
];

function showUsers(arr) {
    const container = document.getElementById("card-container");

    arr.forEach(function (users) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = users.pic;
        img.classList.add("bg-img");

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${users.pic})`;
        blurredLayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent = users.name;

        const para = document.createElement("p");
        para.textContent = users.bio;

        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        container.appendChild(card);
    });
}
showUsers(users);

let inp = document.querySelector(".inp");
let container = document.querySelector(".cards-container");

inp.addEventListener("input", () => {
    let searchText = inp.value.toLowerCase();

    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(searchText);
    });
    container.innerHTML = "";
    showUsers(newUsers);
});