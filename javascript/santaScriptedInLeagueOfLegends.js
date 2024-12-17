document.addEventListener("DOMContentLoaded", function () {
    const goodOrBadChosen = document.getElementById("goodorbad");
    const alertOrNo = document.getElementById("alertOrNo");

    alertOrNo.addEventListener("click", function (event) {
        // Prevent form submission
        event.preventDefault();

        if (goodOrBadChosen.value === "bad") {
            alert("You are bad. You get a chunk of coal regardless. Santa will make sure of that!");
        } else if (goodOrBadChosen.value === "noidea") {
            alert("You certainly will be investigated by Santa Claus");
        } else {
            alert("Great. Keep it up, and you should look forward to opening your presents this year!");
        }
    });
});
