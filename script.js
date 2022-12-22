let submitButton = document.querySelector(".btnSubmit");

submitButton.addEventListener(`click`, () => {
    if (submitButton.innerHTML == `New`) {
        submitButton.innerText = "Submit";
        console.log("in if loop");
        document.querySelector("#textbox").removeAttribute("readonly");
        return;
    }

    let userData = document.querySelector(`#textbox`).value;
    console.log(`Data entered is ${userData}`);
    // console.log("Hello World");
    navigator.clipboard.writeText(userData);
    submitButton.innerHTML = "New";
    document.querySelector("#textbox").setAttribute("readonly", "readonly");
});
