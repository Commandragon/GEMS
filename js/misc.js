const output = (msg, clr) => {
    const txt = document.getElementById("console-output");
    txt.style.color = clr;
    txt.innerText = msg;
};

const tcInput = document.getElementById("userinput");

const changeTabTitle = () => {
    const tcInput = document.getElementById("userinput");
    if (tcInput.value === "") {
        window.localStorage.removeItem("title");
        output("No title entered. Default applied, refresh to see changes", "red");
    } else {
        window.localStorage.setItem("title", tcInput.value);
        window.document.title = tcInput.value;
        output("Title change successful", "green");
    }
    tcInput.value = "";
};

const changeTabIcon = () => {
    if (tcInput.value === "") {
        document.querySelector("link[rel*='icon']").href = "";
        window.localStorage.removeItem("icon");
        output("No image entered. Default applied, refresh to see changes", "red");
    } else if (validURL(tcInput.value)) {
        document.querySelector("link[rel*='icon']").href = tcInput.value;
        window.localStorage.setItem("icon", tcInput.value);
        output("Icon change successful", "green");
    } else {
        output("Icon change failed. Make sure you are using a valid URL", "red");
    }
    tcInput.value = "";
};

const validURL = (str) => {
    const exp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-z
