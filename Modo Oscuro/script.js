window.onload = function () {
    const $container1 = document.querySelector("#contModo1");
    const $text1 = document.querySelector("#textModo1");
    const $button1 = document.querySelector("#buttonModo1");
    const $switch = document.querySelector("#switch");

    function modoOscuro() {
        $container1.classList.toggle("container2")
        $text1.classList.toggle("texto2")
        $button1.classList.toggle("button2")
        $switch.classList.toggle("fa-toggle-on")

    }


    $switch.addEventListener('click', modoOscuro);
}