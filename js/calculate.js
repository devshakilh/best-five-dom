function calculatePlayer(event) {
    let perPlayer = document.getElementById('perplayer').value;
    let perPlayers = parseInt(perPlayer)
    let selectPlayer = document.querySelectorAll('tr');
    // console.log(selectPlayer.length)
    let playerPro = document.getElementById('total-player')
    let result = perPlayers * selectPlayer.length;
    playerPro.innerText = result;

}
function calculateTotal(event) {
    let perManager = parseInt(document.getElementById('managers').value);
    let perCoaach = parseInt(document.getElementById('coacher').value);
    console.log(perManager, perCoaach);
    let all = document.getElementById('total-manager')
    let manag = document.getElementById('total-player').innerText;
    let tota = parseInt(manag)
    let totalResult = perManager + perCoaach + tota;
    all.innerText = totalResult;

    // let result = perManager + perCoaach.length;
    // all.innerText = result;
    // let playerPrice = document.getElementById('total-player');
    // let managerCoaher = document.getElementById('total-manager');
    // let resultAll = playerPrice + managerCoaher.length;
    // managerCoaher.innerText = result;
}


