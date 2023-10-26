let random = Math.floor(Math.random() * (101 - 1) + 1);
let counter = 0;
let maxAttempts = 5
function mentalist() {
    const newDiv = document.getElementById('newDiv')
    let number = document.getElementById('number').value;
    console.log(random)

        if(!number) {
            Swal.fire({
                text: `Hey! We need you to insert a number!`,
                icon: 'error'
            })
            return // Cortamos la ejecución para que no cuente como intento
        }
        else if(number < random) {
            Swal.fire({
                text: `the number ${number} is less 🔽 than the secret number`,
                icon: 'warning'
            })
        }
        else if(number > random) {
            Swal.fire({
                text: `the number ${number} is bigger 🔼 than the secret number`,
                icon: 'warning'
            })
        }
        else {
            let num = document.createElement('p');
            let img = document.createElement('img');
            img.id = 'celebrate'
            img.src = 'https://i.gifer.com/4M57.gif'
            num.innerText = `You're a real Mentalist, the number secret was ${random} 😎!`;
            newDiv.appendChild(num);
            document.body.appendChild(img)
        }

        counter++

    if(counter > maxAttempts) {
        Swal.fire({
            text: `I'm sorry, You have no more attempts, the secret number was ${random} 😭`,
            icon: 'error'
        })
    }
}
