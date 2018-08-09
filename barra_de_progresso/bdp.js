export default function barradeProgresso() {
    //grab the progress bar element
    let matBdp = document.getElementsByClassName('mat bdp')[0];

    //check if the progress bar conatins an intiial and max value
    if(matBdp.innerHTML.includes(':')) {
        //grab the progress bar max value and percentage
        let progress = matBdp.innerHTML.split(':');
        //clear the current text
        matBdp.innerText = '';

        //intial value to measure against the max value
        let initial = Number(progress[0]);
        //max value on the progress bar
        let max = Number(progress[1]);
        //calculate the percentage
        const percent = Math.floor(initial / max * 100);

        //create a span
        let matBdpValue = document.createElement('span');

        //set the dimmensions
        matBdp.style = `width: ${max}px`;
        //the dimmensions must be between the max value
        //if the percentage is bigger than the max value
        //keep the dimmensions the same
        if(percent < max) {
            matBdpValue.style = `width: ${percent}px`;
        } else {
            matBdpValue.style = `width: ${max}px`;
        }

        //set the percentage on the bar
        matBdpValue.innerText = `${percent}%`;

        //append the percent value
        matBdp.appendChild(matBdpValue);
    }
}
