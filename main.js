let amountElement = document.getElementById('amount');
let amount = amountElement.value;


let render = (amount) => {
    amountElement.value = amount;
}
let handlesPlus = () => {
    amount++;
    render(amount);
}

let handlesMinus = () => {
    if(amount > 1)
        amount--;
    render(amount);
}

amountElement.addEventListener('input', () => {
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = isNaN(amount)?1:amount;
    render(amount);
});

$(() => {
    $('img-detail-product').click(function() {
        let imgPath = $(this).attr('src');
        $('#main-img').attr('scr', imgPath);
    })
})

