const history = JSON.parse(localStorage.getItem('simple interest')) || [];
for (let i = 0; i < history.length; i++) {
    display.innerHTML += `<div style="border: 3px solid black;width:55%;height:auto; margin-bottom:10px; text-align:left;justify-content:center;padding:10px;">
        <span style='background:green; color:white; padding:2px 6px; border-radius:4px;'>Principle:</span> ₦${history[i].principle}<br><br>
        <span style='background:green; color:white; padding:2px 6px; border-radius:4px;'>Year:</span> ${history[i].year} years<br><br>
        <span style='background:green; color:white; padding:2px 6px; border-radius:4px;'>Rate:</span> ${history[i].rate}%<br><br>

        <span style='background:green; color:white; padding:2px 6px; border-radius:4px;'>Simple Interest:</span> ₦${history[i].amount}<br><br>


    <span style='background:green; color:white; padding:2px 6px; border-radius:4px;'>Total:</span> ₦${history[i].total}

        </div>`;
}
const clear1 = () => {
    localStorage.removeItem('simple interest')
    location.reload()
}