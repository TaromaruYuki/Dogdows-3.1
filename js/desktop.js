if(!debug_mode) {
    window.history.replaceState("", "", "index.html")
}

const window_blue = "#0000A8";

new WinBox("Program Manager", {
    class: "program-manager"
});

new WinBox("Window", {
    x: "center",
    y: "center",
    html: "<p class='vgasys'>Hello, world!</p>"
})