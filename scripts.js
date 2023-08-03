const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click",()=>{
    document.querySelector("html").classList.toggle("dark");
    document.querySelector("#theme-toggle-dark-icon").classList.toggle("hidden");
    document.querySelector("#theme-toggle-light-icon").classList.toggle("hidden");
});