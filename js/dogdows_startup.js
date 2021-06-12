(async () => {
    if(!debug_mode) {
        window.history.replaceState("", "", "index.html");
        new Audio("sounds/TADA.WAV").play();
    }
    await sleep(RandomNumber(5, 10) * 1000);
    let e = document.createElement("a")
    e.href = "desktop.html"
    e.click()
    // window.location.href = "desktop.html";
})()