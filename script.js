// const adviceId = document.querySelector('#adviceId');
// const advice = document.querySelector('#advice');
// const btn = document.querySelector('#btn');

// const API_LINK = "https://api.adviceslip.com/advice";


// const fetchNewAdvice = async  () => {
//     const response =await axios(API_LINK);
//     console.log(response.data)
// };

// fetchNewAdvice(

// )
const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');
const btn = document.querySelector('#btn');


function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(adviceData => {
        return adviceData.json();
    }).then(adviceData => {
        const adviceIdd = adviceData.slip.id;
        const advice = adviceData.slip.advice;
        adviceId.textContent = adviceIdd;
        adviceText.innerHTML = `<p>${advice}</p>`;

    }).catch(error => {
        console.log(error);
    })
}

btn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
}