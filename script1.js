// Counter Animation

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter,20);
        }
        else{
            counter.innerText = target.toLocaleString();
        }
    };

    updateCounter();

});


// Sidebar Active Menu

const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        document
        .querySelector(".sidebar li.active")
        .classList.remove("active");

        item.classList.add("active");

    });

});


// Dark Mode

document
.getElementById("themeBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// Live Clock

function updateClock(){

    const now = new Date();

    document.getElementById("clock")
    .innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock,1000);
updateClock();


// Chart

const ctx = document.getElementById("myChart");

new Chart(ctx,{

    type:"line",

    data:{
        labels:["Jan","Feb","Mar","Apr","May","Jun"],

        datasets:[{
            label:"Users",
            data:[120,250,350,500,700,900],
            borderWidth:3,
            fill:true,
            tension:0.4
        }]
    },

    options:{
        responsive:true
    }

});