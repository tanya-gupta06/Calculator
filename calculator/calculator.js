const input = document.querySelector('input');
const article = document.querySelector('article');

article.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === 'C') {
            input.value = '';
        } else if (buttonValue === '=') {
            try {
                input.value = eval(input.value);
            } catch (e) {
                input.value = 'INVALID !!';
            }
        } else if (buttonValue === 'DEL') {
            input.value = input.value.slice(0, -1);
        } else {
            input.value += buttonValue;
        }
    }
});