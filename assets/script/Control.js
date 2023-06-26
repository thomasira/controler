
class Control{

    constructor(el, size, speed){
        this._el = el;
        this._size = size;
        this._speed = speed;
        this._el.style.width = `${this._size}px`;
    }
    up(){
        this._el.style.top = `${this._el.offsetTop - this._speed}px`;
    }
    down(){
        this._el.style.top = `${this._el.offsetTop + this._speed}px`;
    }
    left(){
        this._el.style.left = `${this._el.offsetLeft - this._speed}px`;
    }
    right(){
        this._el.style.left = `${this._el.offsetLeft + this._speed}px`;
    }
    isActive(bool){
        if(bool){
            this._el.style.opacity = '100%';
            this._el.style.transitionDelay = '0s';
            this._el.style.transitionDuration = '.4s';
            this._el.style.transitionProperty = 'opacity';
        } 
        else {
            this._el.style.opacity = '10%';
            this._el.style.transitionDelay = '2s';
            this._el.style.transitionProperty = 'opacity';

        }
    }
}