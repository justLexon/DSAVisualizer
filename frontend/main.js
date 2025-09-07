let sortedSteps = [];

document.getElementById("submitButton").addEventListener("click", async function(e) {
    e.preventDefault(); // Stop page reloading

    // Get user inputs
    const inputs = document.querySelectorAll('#arrayForm input[type="number"]');
    const values = [];

    inputs.forEach(input => {
        const num = parseInt(input.value, 10);
        if (!isNaN(num)) {
            values.push(num);
        }
    });

    // Send to backend
    const response = await fetch("http://localhost:8080/api/sort", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({array: values})
    });

    sortedSteps = await response.json();

    renderArray(values);
});


document.getElementById("sortButton").addEventListener("click", function(e) {
    e.preventDefault();

    renderArrayFromSteps(sortedSteps);
});


document.getElementById("randomButton").addEventListener("click", async function(e) {
    e.preventDefault();

    const arr = [];

    for (let i = 0; i < 12; i++) {
        let randVal = Math.floor(Math.random() * (99) + 1);
        arr[i] = randVal;
    }

    // Send to backend
    const response = await fetch("http://localhost:8080/api/sort", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({array: arr})
    });

    sortedSteps = await response.json();

    renderArray(arr);
});


function renderArray(arr) {
    const container = document.getElementById("rectsCont");
    container.innerHTML = "";

    const maxVal = Math.max(...arr);

    arr.forEach(num => {
        const bar = document.createElement("div");
        bar.classList.add("rect");
        bar.style.height = (num / maxVal) * 100 + "%";
        container.appendChild(bar);
    });
}

function renderArrayFromSteps(steps) {
    const container = document.getElementById("rectsCont");

    let i = 0;
    const interval = setInterval(() => {
        if (i >= steps.length) {
            clearInterval(interval);
            return;
        }

        const arr = steps[i].array;
        container.innerHTML = "";

        const maxVal = Math.max(...arr);

        arr.forEach(num => {
            const bar = document.createElement("div");
            bar.classList.add("rect");
            bar.style.height = (num / maxVal) * 100 + "%";
            container.appendChild(bar);
        });

        i++;
    }, 100); // 500ms per step
}
