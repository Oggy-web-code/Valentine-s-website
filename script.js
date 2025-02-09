document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById("yes").addEventListener("click", function() {
    let question = document.getElementById("question");
    let catImage = document.getElementById("catImage");
    
    if (question.innerHTML === "Will you be my Valentine? ❤️") {
        // First click: Change question and cat image
        question.innerHTML = "Are you sure? 😺";
        catImage.src = "https://i.postimg.cc/NKLMMpbD/IMG-3100.jpg"; // Cat meme
    } else {
        // Second click: Show final message
        question.style.display = "none";
        catImage.style.display = "none";
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").style.display = "block";
    }
});