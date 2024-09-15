document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    for (const image of images) {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.src = data.message;
            image.width = 100;
            image.height = 100;
        })
        .catch(error => {
            console.error("Error fetching dog image:", error);
            image.alt = "Failed to load image"; // Sets alt text if fetching fails
        });
    }
});

