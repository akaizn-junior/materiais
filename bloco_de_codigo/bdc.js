export default function blocoDeCodigo() {
    //grab the element
    let matBdc = document.getElementsByClassName('mat bdc')[0];

    //create line numbers' column
    let lineNumbersCol = document.createElement('div');
    lineNumbersCol.setAttribute('class', 'line-numbers');

    //create code content box
    let codeCol = document.createElement('div');
    codeCol.setAttribute('class', 'code');

    //grab all the lines in the block of code
    const lines = matBdc.innerHTML.split('\n');

    //pass content original content to the codeCol
    // codeCol.innerHTML = matBdc.innerHTML;
    //erase the original content
    matBdc.innerHTML = '';

    //eliminate the extra first and last break line
    for(let i = 1; i < lines.length - 1; i++) {
        console.log(lines[i]);
        //get the line numbers
        lineNumbersCol.innerHTML += `<pre>${i}</pre>`;

        //pass each line of code as a pre text
        if(lines[i] !== '') {
            codeCol.innerHTML += `<pre>${lines[i]}<pre>`;
        } else {
            codeCol.innerHTML += '&nbsp;';
        }
    }

    //append the new elements to the main element
    matBdc.appendChild(lineNumbersCol);
    matBdc.appendChild(codeCol);
}
