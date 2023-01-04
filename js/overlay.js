var product = document.querySelector(".navbar-item-active .hidden-item-active");
product.addEventListener("mouseenter",function(){
    document.querySelector(".overlay").classList.remove("hidden");
})

product.addEventListener("mouseleave",function(){
    document.querySelector(".overlay").classList.add("hidden");
})