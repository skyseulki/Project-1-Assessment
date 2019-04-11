// <div id="test">
//      <input type="text" id="display"/>
//      <form>
//             <input type="button" id="plus" value="+"/>
//             <input type="text" id="input-box"/>
//             <input type="button" id="minus" value="-"/>
//      </form>
// </div>

const topDisplay = $('#display');
let input = $('#input-box');


$('#plus-btn').on('click', (e) => {
    console.log('plus clicked');
    console.log( $('#input-box').val() );
    // let inputValue = $('#input-box'). val()
    // (topDisplay).appendTo(input.val());
    e.preventDefault();
    add();
    render();
})

$('#minus-btn').on('click', (e) => {
    console.log('minus clicked');
    console.log( $('#input-box').val() );
    // const inputValue = $('#input-box').val()
    // $('#display').appendTo(inputValue);
    e.preventDefault();
    subtract();
    render();
})

// value in the input box is displayed onto the screen
const render = (num) => {
    // $('#input-box').empty();
    topDisplay.append(num);
}

// add the value inside input box to the value on display
const add = () => {
    topDisplay.val(parseInt(input.val()) + parseInt(topDisplay.val()))
}

// subtract the value inside input box to the value on display
const subtract = () => {
    topDisplay.val(parseInt(topDisplay.val()) - parseInt(input.val()))
    if (topDisplay.val() <= 0) {
        return (topDisplay.val()).css('color', 'red');
    }
}

