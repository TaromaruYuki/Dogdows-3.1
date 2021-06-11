const startup_dos = document.querySelector(".startup-dos");

async function Startup(startup, text_element, cur) {
    for (let i = 0; i < startup.length; ++i) {
        let curr_action = startup[i];

        if (curr_action.action == action.print) {
            text_element.removeChild(cur);
            text_element.innerText += curr_action.text;
            text_element.appendChild(cur);
        } else if (curr_action.action == action.pause) {
            if (curr_action.time.toLowerCase() == "s") {
                var timeout = curr_action.wait_length * 1000
            } else {
                var timeout = curr_action.wait_length
            }
            await sleep(timeout);
        } else if (curr_action.action == action.clear) {
            text_element.innerHTML = "";
            text_element.appendChild(cur);
        } else if (curr_action.action == action.scroll) {
            window.scrollTo(0, document.body.scrollHeight);
        } else if (curr_action.action == action.destroy) {
            text_element.remove()
            curr_action.execute()
        }
    }
}

const cursor = document.querySelector(".dos-cursor");

Startup(startup_dict, startup_dos, cursor);