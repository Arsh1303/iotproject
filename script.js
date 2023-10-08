function addLight() {
    var lightName = document.getElementById("lightName").value;
    var color = document.getElementById("colorPicker").value;
    var brightness = document.getElementById("brightnessSlider").value;

    // Create a new light card
    var lightCard = document.createElement("div");
    lightCard.className = "card";
    lightCard.style.backgroundColor = color;
    lightCard.style.opacity = brightness / 100;

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = lightName;

    cardBody.appendChild(cardTitle);
    lightCard.appendChild(cardBody);

    // Add the light card to the lights container
    var lightsContainer = document.getElementById("lightsContainer");
    lightsContainer.appendChild(lightCard);

    // Clear input fields after adding the light
    document.getElementById("lightName").value = "";
    document.getElementById("colorPicker").value = "#ffffff"; // Set default color to white
    document.getElementById("brightnessSlider").value = "50"; // Set default brightness to 50
}
