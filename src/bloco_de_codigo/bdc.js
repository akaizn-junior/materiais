export default function blocoDeCodigo() {
    //grab the element
    let matBdc = document.getElementsByClassName('mat bdc')[0];
    //save the original content
    const originalContent = matBdc.innerHTML;
    //erase the original content
    matBdc.innerHTML = '';

    //create line numbers' column
    let lineNumbersCol = document.createElement('div');
    lineNumbersCol.setAttribute('class', 'line-numbers');

    //create code content box
    let codeCol = document.createElement('div');
    codeCol.setAttribute('class', 'code');

    //sanitized content
    const sanitizedContent = sanitizeContent(originalContent);

    //grab all the lines in the block of code
    const lines = sanitizedContent.split('\n');

    // eliminate the extra first and last break line
    for(let i = 1; i < lines.length - 1; i++) {
        //get the line numbers
        lineNumbersCol.innerHTML += `<pre>${i}</pre>`;
        //pass each line of code as a pre elements
        if(lines[i] !== '') {
            codeCol.innerHTML += `<pre>${lines[i]}</pre>`;
        } else {
            codeCol.innerHTML += '<pre>&nbsp;</pre>';
        }
    }

    //append the new elements to the main element
    matBdc.appendChild(lineNumbersCol);
    matBdc.appendChild(codeCol);
}

function sanitizeContent(originalContent) {
    //sanitize content from less-than symbols
    let sanitizedLT = originalContent.replace(/</gm, '&lt;');
    //sanitize content from greater-than symbols
    let sanitizedGT = sanitizedLT.replace(/>/gm, '&gt;');

    return sanitizedGT;
}

//add syntax highlighting
// function syntaxHighlighting() {}
