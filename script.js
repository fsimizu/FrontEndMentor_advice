
const getAdvice = () => {
    const id = document.getElementById("advise_id");
    const advice = document.getElementById("advice_text");
    
    fetch(`https://api.adviceslip.com/advice`)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            id.innerHTML = data.slip.id;
            advice.innerHTML = data.slip.advice;

            console.log(data.slip.id);
            console.log(data.slip.advice)
        })
}
