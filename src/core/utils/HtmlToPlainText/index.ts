export const htmlToPlainText = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;

    const paragraphs = tmp.querySelectorAll('p, br, li, div');

    paragraphs.forEach(el => {
        el.insertAdjacentText('afterend', '\n');
    });

    return tmp.textContent || tmp.innerText || '';
};
