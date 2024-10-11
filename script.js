window.onload = function() {
    const obrabotchik = document.querySelector('button');

    obrabotchik.addEventListener('click',function(){
        let arg1 = document.querySelector('#arg1').value;
        let arg2 = document.querySelector('#arg2').value;

        let resultOne = parseInt(arg1) + parseInt(arg2);
        let resultTwo = parseInt(arg1) * parseInt(arg2);
        let div = document.createElement('div');
        div.className = "output";
        div.innerHTML = `${arg1} + ${arg2} = ${resultOne} <br>
            ${arg1} * ${arg2} = ${resultTwo}`;

        document.body.append(div);

    })
    

}

