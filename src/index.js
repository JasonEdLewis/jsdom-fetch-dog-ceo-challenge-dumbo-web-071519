// console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM fully loaded and parsed');
    const picDiv = document.getElementById('dog-image-container');
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => adder(json));

    const adder = (json) => {
        json.message.forEach(function(mess){
            let pic = document.createElement('img');
            pic.setAttribute('src', `${mess}`);
            picDiv.append(pic);
        }
        )
    };
}
);