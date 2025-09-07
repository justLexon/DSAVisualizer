document.getElementById("arrayForm").addEventListener("submit", function(e) {
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

    renderArray(values);
});

function renderArray(arr) {
    const container = document.getElementById("rectsCont");
    container.innerHTML = "";

    const maxVal = Math.max(...arr);

    arr.forEach(num => {
        const bar = document.createElement("div");
        bar.classList.add("rect");
        bar.style.width = (num / maxVal) * 100 + "%";
        container.appendChild(bar);
    });
}
