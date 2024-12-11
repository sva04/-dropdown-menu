document.addEventListener("DOMContentLoaded", () => {

    const menuItems = document.querySelectorAll("#menu li");

    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();

            const submenu = item.querySelector(".submenu");

            if (submenu) {
                submenu.classList.toggle("open");
            }
        });
    });
});