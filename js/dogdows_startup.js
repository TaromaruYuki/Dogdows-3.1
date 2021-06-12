(async () => {
    window.history.replaceState("", "", "/");
    new Audio("/sounds/TADA.WAV").play();
    await sleep(RandomNumber(5, 10) * 1000);
    window.location.href = "desktop.html";
})()