// on click button disale start 
// let btnShow = document.querySelector('button');
// let input = document.querySelector('input');
// let output = document.querySelector('h5');
// btnShow.addEventListener('click', (){
//     output.innerText = input.value;
// });
// input.addEventListener.length('keyup',{
//     if (input.value.length > 5) btnShow.disabled = true;
//     else
// });








// on click button disale end 
const cartArray = [];
function display(cartplayer) {
    console.log(cartplayer);
    const tableBody = document.getElementById("cart-players");
    tableBody.innerHTML = "";
    for (let i = 0; i < cartplayer.length; i++) {
        // console.log(cartArray[i].playerName);
        const name = cartArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${name}</td> `;
        tableBody.appendChild(tr);
    }
}
function addToCart(element) {
    // console.log(element.parentNode.parentNode.children[1])
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerobj = {
        playerName: playerName,
    }
    cartArray.push(playerobj);
    // console.log(cartArray);


    document.getElementById("total-added player").innerText = cartArray.length;

    display(cartArray);

}