
/**
 * made for a grid with four elements. requires one of the four element. Text is optional, size in pixel
 */
class Boxtarget{

    constructor(el, size, position, opacity, theme, text){

        this._el  = el;
        this._size = size;
        this._position = position;
        this._opacity = opacity;
        this._theme = theme;
        this._active = false;

        this._el.innerHTML = `<div class="trigger-box"></div><div class="targetBgrd"><img src="${this._el.dataset.jsSrc}"></div>`;

        this._elBgrd = this._el.querySelector('[class="targetBgrd"]');
        this._elTrigger = this._el.querySelector('[class="trigger-box"]');

        if(text) this._elTrigger.textContent = text;
        
        this._elBgrd.style.width = `${size}px`;
        this._elBgrd.style.height = `${size}px`;
        this._elBgrd.style.backgroundColor = randomColor(this._opacity, this._theme);

        this._el.style.gridArea = `"${position}"`;
        this._el.style.width = `${this._size}px`;
        this._el.style.height = `${this._size}px`;

        switch (position){
            case 0:
                this._elBgrd.style.top = '0';
                this._elBgrd.style.left = '0';
                break;
            case 1: 
                this._el.style.justifySelf = 'right';
                this._elBgrd.style.top = '0';
                this._elBgrd.style.right = '0';
                break;
            case 2:
                this._el.style.alignSelf = 'end';
                this._elBgrd.style.bottom = '0';
                this._elBgrd.style.left = '0';
                break;
            case 3:
                this._el.style.justifySelf = 'right';
                this._el.style.alignSelf = 'end';
                this._elBgrd.style.bottom = '0';
                this._elBgrd.style.right = '0';
        }
    }
    toggle(){
        if(this._active){
            this.isActive(false);
            this._active = false;

        } else{
            this.isActive(true);
            this._active = true;
        }
        return this._active;

    }
    isActive(bool){

        if(bool){
            this._elBgrd.style.width = `100%`;
            this._elBgrd.style.height = `100%`;
            this._el.style.zIndex = '1';

        } else{

            this._elBgrd.style.width = `${this._size}px`;
            this._elBgrd.style.height = `${this._size}px`;
            this._el.style.zIndex = '0'
        }
    }
}

function randomColor(opacity, option){

    let color;

    if(option == 'light') color = `rgb(${Math.floor(Math.random()*(256-100)+100)},${Math.floor(Math.random()*(256-100)+100)},${Math.floor(Math.random()*(256-100)+100)}, ${opacity})`;

    else if(option == 'dark') color = `rgb(${Math.floor(Math.random()*(80))},${Math.floor(Math.random()*(80))},${Math.floor(Math.random()*(80))}, ${opacity})`;

    else if(option == 'red') color = `rgb(${Math.floor(Math.random()*(256-50)+50)}, ${Math.floor(Math.random()*(30))}, ${Math.floor(Math.random()*(80))}, ${opacity})`;

    else if(option == 'green') color = `rgb(${Math.floor(Math.random()*(30))}, ${Math.floor(Math.random()*(256-50)+50)}, ${Math.floor(Math.random()*(80))}, ${opacity})`;

    else if(option == 'blue') color = `rgb(${Math.floor(Math.random()*(50))}, ${Math.floor(Math.random()*(50))}, ${Math.floor(Math.random()*(256-50)+50)}, ${opacity})`;

    else color = `rgb(${Math.floor(Math.random()*(256))},${Math.floor(Math.random()*(256))},${Math.floor(Math.random()*(256))}, ${opacity})`;

    return color;

}