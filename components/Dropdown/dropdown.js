


class Dropdown{
    constructor(element){

        this.element = element

        this.button = document.querySelector('.hamburger');

        
        this.content = document.querySelector('.menu');
        
        
        this.button.addEventListener('click', () => {
            this.toggleMenu()
        })
    }

    toggleMenu(){
        this.content.classList.toggle('active');
        document.querySelector('.shadow').style.display = 'block';
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));





  