const btn = document.querySelector('.j-btn');

        const result = document.querySelector('.j-result');

        btn.addEventListener('click', () => {

            let value_1 = document.querySelector('input[name=input_1]').value;
            let value_2 = document.querySelector('input[name=input_2]').value;

            if (value_1 >= 100 && value_1 <= 300 && value_1 >= 100 && value_1 <= 300){
                fetch(`https://picsum.photos/${value_1}/${value_2}`)
                .then((response) => {
                    result.innerHTML = `<img src="${response.url}">`
                })
                .catch(() => { console.log('error') })
            }else {
                console.log('«одно из чисел вне диапазона от 100 до 300»')
            }
        })









               