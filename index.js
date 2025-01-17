const adviceContainer = document.getElementById('adviceContainer');
const dice = document.getElementById('dice');
const adviceID = document.getElementById('adviceID');

function fetchAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => {
        return res.json()
    })
    .then(data => {
        let advice = data.slip.advice
        let id = data.slip.id
        adviceContainer.textContent = `"${advice}"`
        adviceID.textContent = `${id}`
    })
    .catch(() => {
        console.log("something bad happened")
    })

}
document.addEventListener('DOMContentLoaded', ()=>{
    fetchAdvice()
})
dice.addEventListener('click', ()=>{
    fetchAdvice();
})