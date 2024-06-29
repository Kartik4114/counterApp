const countValue=document.querySelector('#counter');

const increment= function(){
    // here value willbe in form of string so converting it into number

    // get the value
    let value=parseInt(countValue.innerText);
    // update the value
    value=value+1;
    // set the value
    countValue.innerText=value;
}

const decrement= function(){
    // here value willbe in form of string so converting it into number

    // get the value
    let value=parseInt(countValue.innerText);
    // update the value
    value=value-1;
    // set the value
    countValue.innerText=value;
}