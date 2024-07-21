const element = document.querySelector('div.line-arrow>div');
i = 0;
while (i<38) {
    const span = document.createElement('span');
    span.classList.add('line-arrow__element');
    element.appendChild(span);
    i++;
}