const text = "Hi, I’m Ragavendiran 👋";
let index = 0;

function typeEffect() {
    if(index<text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect ,100);
    }
}

typeEffect();
