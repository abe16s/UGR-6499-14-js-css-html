//Home page - quote slider
const slider = document.getElementsByClassName('slider')[0];
function scrollToNextQuote() {
    const quoteWidth = slider.querySelector('.quote-container').offsetWidth;
    const newScrollLeft = slider.scrollLeft + quoteWidth;
    slider.scrollLeft = newScrollLeft  % (6*quoteWidth);
}

function scrollToPreviousQuote() {
    const quoteWidth = slider.querySelector('.quote-container').offsetWidth;
    const newScrollLeft = slider.scrollLeft - quoteWidth;
    if (newScrollLeft < 0){
        slider.scrollLeft = 5 * quoteWidth;
    } else {
        slider.scrollLeft = newScrollLeft;
    }
}

setInterval(scrollToNextQuote, 7000);
document.getElementsByClassName("next")[0].addEventListener("click", scrollToNextQuote);
document.getElementsByClassName("prev")[0].addEventListener("click", scrollToPreviousQuote)

