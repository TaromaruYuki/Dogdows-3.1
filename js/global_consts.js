function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const debug_mode = true;