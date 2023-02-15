const btn = document.querySelector('.j-btn');

const result = document.querySelector('.j-result');

function checkAnswer() {
  if (localStorage.getItem('imgData')) {
      displayResult(JSON.parse(localStorage.getItem('imgData')));
  }
}

function storeDataInStorageAndDisplay(apiData) {
  const imgData = [];
  apiData.forEach(item => {
      imgData.push({
          download_url: item.download_url,
          author: item.author
      })
  })
  displayResult(imgData)
  localStorage.setItem('imgData', JSON.stringify(imgData))
}

function isNumber(num) {
	return typeof num === 'number' && !isNaN(num);
}

function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });

    result.innerHTML = cards;}
  


btn.addEventListener ('click', () => {
  
    let value_1 = document.querySelector('input[name=input_1]').value;
    let value_2 = document.querySelector('input[name=input_2]').value;
    

    if( value_1 >= 1 && value_1 <= 10 && value_2 >= 1 && value_2 <= 10){
    
    fetch(`https://picsum.photos/v2/list?page=${value_1}&limit=${value_2}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        displayResult(data)
    })
    .then((data) => {
      storeDataInStorageAndDisplay(data)
  })
    .catch(() => { console.log('error') })

    } else if (value_1 >= 10 && value_1 <= 1 || isNumber(value_1) == false){
      console.log ("Номер страницы вне диапазона от 1 до 10")
    } else if (value_2 >= 10 && value_1 <= 1 || isNumber(value_2) == false){
      console.log ("Лимит вне диапазона от 1 до 10")
    } else if ((value_1 >= 10 && value_1 <= 1 || isNumber(value_1) === false) && (value_2 >= 10 && value_1 <= 1 || isNumber(value_2) === false)) {
      console.log ("Номер страницы и лимит вне диапазона от 1 до 10")
    }
})

