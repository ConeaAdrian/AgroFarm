$(document).ready(function(){const t=$(".burger-icon"),e=$('<div class="popup"></div>');$("body").append(e),t.on("click",function(){$(this).toggleClass("active"),e.toggleClass("active")}),e.on("click",function(){t.removeClass("active"),$(this).removeClass("active")})}),document.addEventListener("DOMContentLoaded",function(){const a=document.querySelectorAll(".nav-link"),n=document.querySelectorAll(".tab-pane");a.forEach(e=>{e.addEventListener("click",()=>{n.forEach(t=>{t.classList.remove("show","active")});var t=e.getAttribute("href").replace("#","");document.getElementById(t).classList.add("show","active"),a.forEach(t=>{t.classList.remove("active")}),e.classList.add("active"),"pills-login"===t?console.log("Aici se afișează informațiile pentru login."):"pills-register"===t&&console.log("Aici se afișează informațiile pentru înregistrare.")})})}),$(document).ready(function(){$(".set-image img").click(function(){var t=$(this).attr("src"),e=$(".principal-image").attr("src");$(".principal-image").attr("src",t),$(this).attr("src",e)})}),$(document).ready(function(){$(".decrement").click(function(){var t=parseInt($(".quantity").text());1<t&&$(".quantity").text(t-1)}),$(".increment").click(function(){var t=parseInt($(".quantity").text());$(".quantity").text(t+1)})});const ratings=document.querySelectorAll(".rating"),selectedRating=document.getElementById("selectedRating");function updateRating(e){selectedRating.textContent=e,ratings.forEach(t=>{t.classList.toggle("selected",parseInt(t.getAttribute("data-rating"))<=e)})}ratings.forEach(t=>{t.addEventListener("click",t=>{updateRating(parseInt(t.target.getAttribute("data-rating")))}),t.addEventListener("mouseover",t=>{const e=parseInt(t.target.getAttribute("data-rating"));ratings.forEach(t=>{t.style.color=parseInt(t.getAttribute("data-rating"))<=e?"#ffca08":"#c5c5c5"})}),t.addEventListener("mouseout",()=>{ratings.forEach(t=>{t.style.color=t.classList.contains("selected")?"#ffca08":"#c5c5c5"})})}),$(document).ready(function(){$(".search-buton").click(function(){$(".search-element").toggleClass("hidden")})}),$(document).ready(function(){$(".heart-button").click(function(){$("#heartPopup").toggleClass("show-popup"),$(".overlay").toggleClass("show-popup")}),$(".cart-button").click(function(){$("#cartPopup").toggleClass("show-popup"),$(".overlay").toggleClass("show-popup")}),$(".overlay, .close-button").click(function(){$(".popup").removeClass("show-popup"),$(".overlay").removeClass("show-popup")})}),$(document).ready(function(){$("#descriptionButton").addClass("active"),$("#descriptionContent").removeClass("hidden")}),$(".rating-button").click(function(){$(".rating-button").removeClass("active"),$(this).addClass("active"),$(".rating-content > div").addClass("hidden");var t=$(this).attr("id").replace("Button","Content");$("#"+t).removeClass("hidden")});var map=L.map("map").setView([47.4116,28.3699],7);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',maxZoom:18}).addTo(map),L.marker([47.4116,28.3699]).addTo(map).bindPopup("Product Location").openPopup();