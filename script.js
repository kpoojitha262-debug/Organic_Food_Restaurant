// Welcome Message
window.onload = function () {
    alert("🌿 Welcome to Organic Food Restaurant!");
};

// Order Button
document.querySelector("button").addEventListener("click", function () {
    alert("✅ Your order has been placed successfully!");
});

// Navigation Click Effect
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.style.color = "white";
        });

        this.style.color = "yellow";

    });

});

// Customer Reviews
const reviews = [
    "⭐⭐⭐⭐⭐ Fresh and delicious food!",
    "⭐⭐⭐⭐ Healthy meals and quick service.",
    "⭐⭐⭐⭐⭐ Best organic restaurant in town!",
    "⭐⭐⭐⭐ Great atmosphere and tasty dishes."
];

let index = 0;

setInterval(function(){

    document.querySelector("#reviews p").innerHTML = reviews[index];

    index++;

    if(index == reviews.length){
        index = 0;
    }

},3000);

// Contact Button
document.querySelector("#contact").addEventListener("click",function(){

    alert("📞 Contact us at +91 9876543210");

});