function createToaster(config) {
    return function (notification) {

        let parent = document.querySelector(".parent");

        parent.classList.add("p-10", "flex", "flex-col", "items-start", "gap-4");

        let div = document.createElement("div");
        div.textContent = notification;

        div.className = `inline-block px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity
            ${config.duration === 3 ? 3 : 5}
            ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}
            ${config.positionX === "right" ? "right-10" : "left-10"}
            ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

        parent.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
    }
}

let toaster = createToaster({
    positionX: "left",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});

toaster("This is a dummy notification !!!");

setTimeout(() => {
    toaster("Akhil accepted your request !!!");
}, 2000);