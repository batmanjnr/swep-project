const result1 = JSON.parse(localStorage.getItem('compound interest')) || []



function solve() {
    const principle = document.getElementById("principle").value.trim();
    const rate = document.getElementById("rate").value.trim();
    const rate_cal = (rate / 100);
    const compound = document.getElementById("compound").value.trim();
    const year = document.getElementById("year").value;
    const rate_year = ((1 + (rate_cal / compound)) ** (compound * year))
    const amount = (principle * rate_year)
    const total= amount-principle
    
    if (principle === "" || rate === "" || compound === "") {
        display.innerHTML += `<div id="display" class="alert alert-info text-center" role="alert">Input Your Value</div>`
    } else {
        const history = { total, amount, principle, rate, year,compound }
    result1.push(history)

        display.innerHTML += `<div id="display" class="alert alert-info text-center" role="alert">The Formula for calculating it is A = P(1 + r/n)^(nt) <br>
    A= final amount<br>
    P=capital<br>
    r=rate in(%)<br>
    t=Year<br>
    n = number of times interest is compounded per year (e.g., 12 for monthly, 4 for quarterly, 1 for yearly)<br>
    The formula for calculating compound interest is CI=A−P <br></div>
   `
        display1.innerHTML = `<div id="display" class="alert alert-info text-center" role="alert">
    The Final Amount (A) is :₦${amount.toFixed(2)}<br>
    The Compound Interest is:₦${(total).toFixed(2)}</div>`

      localStorage.setItem('compound interest', JSON.stringify(result1))
      document.getElementById("principle").value=""
      document.getElementById("rate").value=""
      document.getElementById("compound").value=""
      document.getElementById("year").value=""

    }







}
document.getElementById('themeToggle').onchange = function () {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
};
