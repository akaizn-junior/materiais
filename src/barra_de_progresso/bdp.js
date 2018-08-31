export default function barradeProgresso() {
    //grab the progress bar element
    let matBdp = document.getElementsByClassName('mat bdp');

    for(let bar of matBdp) {
        //check if the progress bar conatins an intiial and max value
        if(bar.innerHTML.includes(':')) {
        //grab the progress bar max value and percentage
            let progress = bar.innerHTML.split(':');

            //clear the original content
            bar.innerHTML = '';

            //intial value to measure against the max value
            let initial = Number(progress[0]);
            //max value on the progress bar
            let max = Number(progress[1]);
            //calculate the percentage
            let percent = 0;
            if(max > 0) percent = Math.floor(initial / max * 100);

            //create a span
            let matBdpValue = document.createElement('span');

            //set the dimmensions
            if(max === 0) {
                bar.style = 'width: 100px';
            } else if(max > 0) {
                bar.style = `width: ${max % 1000}px`;
            }

            //the dimmensions must be between the max value
            //if the percentage is bigger than the max value
            //keep the dimmensions the same
            if(percent < max) {
                matBdpValue.style = `width: ${percent}px`;
            } else if(max === 0) {
                matBdpValue.style = 'width: 100px';
            } else if(max > 0) {
                matBdpValue.style = `width: ${max % 1000}px`;
            }

            //set the percentage on the bar
            matBdpValue.innerText = `${percent}%`;

            //append the percent value
            bar.appendChild(matBdpValue);
        }
    }
}
