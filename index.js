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
    const history = { total, amount, principle, rate, year,compound }
    result1.push(history)
    if (principle === "" || rate === "" || compound === "") {
        display.innerHTML = "Input Your Value"
    } else {

        display.innerHTML = `The Formula for calculating it is A = P(1 + r/n)^(nt) <br>
    A= final amount<br>
    P=capital<br>
    r=rate in(%)<br>
    t=Year<br>
    n = number of times interest is compounded per year (e.g., 12 for monthly, 4 for quarterly, 1 for yearly)<br>
    The formula for calculating compound interest is CI=A−P <br>
   `
        display1.innerHTML = `
    The Final Amount (A) is :₦${amount.toFixed(2)}<br>
    The Compound Interest is:₦${(total).toFixed(2)}`

      localStorage.setItem('compound interest', JSON.stringify(result1))
    }







}
document.getElementById('themeToggle').onchange = function () {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
};
