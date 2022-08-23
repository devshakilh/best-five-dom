function calculatePlayer(event) {
    let perPlayer = document.getElementById('perplayer').value;
    let perPlayers = parseInt(perPlayer)
    let selectPlayer = document.querySelectorAll('tr');
    // console.log(selectPlayer.length)
    let playerPro = document.getElementById('total-player')
    let result = perPlayers * selectPlayer.length;
    playerPro.innerText = result;

}

