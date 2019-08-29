// console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM fully loaded and parsed');
    const picDiv = document.getElementById('dog-image-container');
    

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => picadder(json));

    const picadder = (json) => {
        json.message.forEach(function(mess){
            let pic = document.createElement('img');
            pic.setAttribute('src', `${mess}`);
            picDiv.append(pic);
        }
        )
    };
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(resp => resp.json())
.then(json => breedadder(json))

const breedadder = (json) =>{
const breedUl = document.getElementById("dog-breeds");
  const theBreeds = Object.keys(json.message);
//   debugger
    theBreeds.forEach(function(breed){
        let newLi = document.createElement('li');
        newLi.addEventListener('click',colorChange);
        newLi.innerText = breed;
        breedUl.append(newLi);

    }
    );
    
}
const colorChange = (event) =>{
    event.target.style.color =`${(function(m,s,c){return (c ? arguments.callee(m,s,c-1) : '#') +
    s[m.floor(m.random() * s.length)]})(Math,'0123456789ABCDEF',5)}`
}