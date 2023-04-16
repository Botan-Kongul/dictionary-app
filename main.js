const Input = document.getElementById('inputElement');
const searchButton = document.getElementById('ButtonElement');
const kelime = document.getElementById('word');
const tanim = document.getElementById('sense');
const ornekCumle = document.getElementById('example');
var returnData;


Input.addEventListener('input', function (event) {
    returnData = event.target.value
    return returnData;
})



searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (!returnData) {
        alert("Lütfen Bir Kelime Girin")
        return;
    }
    searchWord(returnData)
})

function searchWord(word) {
    fetch('dict.json')
        .then(response => response.json())
        .then(data => {
            const result = data.kelimeler.find(item => item.kelime === word);
            if (result) {
                kelime.innerHTML = `Kelime : ${result.kelime}`;
                tanim.innerHTML = `Kelimenin Tanımı: ${result.tanım}`;
                ornekCumle.innerHTML = `Kelimenin Örnek Cümlesi : ${result.ornek_cumle}`;
            } else {
                alert("Böyle Bir Kelime Bulunamadı")
            }

        })
        .catch(error => console.error(error));

}

