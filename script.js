function plus(){
    const chislo = document.getElementById('text').value;
    let result = Number(chislo) + 10;
    document.getElementById("vyvod").innerText = result;;
}

const button = document.getElementById('btn')
button.addEventListener('click', plus)


