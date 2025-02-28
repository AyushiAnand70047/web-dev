// function darkMode(){
//     document.body.style.backgroundColor = 'black';
// }

// function lightMode(){
//     document.body.style.backgroundColor = 'white';
// }

function changeBackground(color){
    document.body.style.backgroundColor = color
}

const toggleButton = document.getElementById('toggle-mode')
console.log(toggleButton)

toggleButton.addEventListener('click',function(){
    bodyBackgroundColor = document.body.style.backgroundColor
    if(!bodyBackgroundColor || bodyBackgroundColor == 'white'){
        changeBackground('black')
        toggleButton.innerText = 'Dark Mode'
    }
    else{
        changeBackground('white')
        toggleButton.innerText = 'Light Mode'
    }
})