const button = document.querySelector("button");
        button.addEventListener('click', changeText);

        const heading = document.querySelector("h1");

        const button1 = document.querySelector("#button1");
        button1.addEventListener(`click`, changeText)

        const button2 = document.querySelector("#button2");
        button2.addEventListener(`click`, changeText)

        const color = document.body.style.backgroundColor;

        

        function runFunction1() {

           const name = prompt("please enter a name");
           button.textContent = `Player 1: ${name}`;

        }

        function changeText(){
            heading.textContent = `This text is now changed`;
        }

        function changeColor(){
            color

        }