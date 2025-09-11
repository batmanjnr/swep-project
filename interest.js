const result=JSON.parse(localStorage.getItem('simple interest'))||[]

function solve() {
  
  const principle = document.getElementById("principle").value.trim();
    const rate = document.getElementById("rate").value.trim();
    const year = document.getElementById("year").value;
    const multiplication = (principle * rate * year)
    const amount = (multiplication / 100)
    const total = Number(amount) + Number(principle)
    const his = { total, amount,principle,rate,year }
    result.push(his)
    if (principle === "" || rate === "" || year === "") {
        display.innerHTML = "Input Your Value"
    } else {

        display.innerHTML = `The Formula for calculating it is SI = (P × R × T) / 100<br>
    P= capital in(₦)<br>
    r= rate in(%)<br>
    t= Year<br>
    Total= P+SI
   `
        display1.innerHTML = `
    The Simple Interest is :₦${amount.toFixed(2)}<br>
    The Total is:₦${total.toFixed(2)}`



        localStorage.setItem('simple interest', JSON.stringify(result))
    }







}
document.getElementById('themeToggle').onchange = function () {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
};