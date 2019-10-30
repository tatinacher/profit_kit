document.addEventListener(
    "DOMContentLoaded", () => {
        if (window.innerWidth < 769) {
            new Mmenu( "#my-menu", {
                navbar: false,
                navbars: [
                    {   
                        "position": "top",
                        content: [
                            "close",
                            "Меню",
                            "prev"
                        ]
                    }
                ]
            });
        }
        var button = document.querySelector('.delivery');
        button.addEventListener("click", () => {
            var dropdown = document.querySelector('.children-menu');
            dropdown.classList.toggle('active');
        })
    }
);
