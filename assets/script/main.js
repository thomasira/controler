window.addEventListener('DOMContentLoaded', function(){


    const elBoxes = document.querySelectorAll('[data-js-target]'),
        elBody = document.querySelector('body'),
        elGrid = elBody.querySelector('main');

    let controlSpeed = 20,
        controlSize = 20,
        elControl = new Control(document.querySelector('[class="control"]'), controlSize, controlSpeed);    
    
    let aBoxes = [],
        boxSize = 120,
        boxOpacity = '1',
        boxTheme = 'red',
        boxText;


    for (let i = 0; i < elBoxes.length; i++) {

        boxText = elBoxes[i].dataset.jsTarget;

        aBoxes[i] = new Boxtarget(elBoxes[i], boxSize, i, boxOpacity, boxTheme, boxText);
    }

    elGrid.addEventListener('click', function(e){

        for (let i = 0; i < aBoxes.length; i++) {
            if(e.target.closest('[data-js-target]')){
                if(e.target.closest('[data-js-target]').dataset == aBoxes[i]._el.dataset){
                    aBoxes[i].toggle();
                }
            }
        }
    })
    
    elBody.addEventListener('keydown', function(e){

        /*control effects*/
        if(e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight') elControl.isActive(true);

        if(e.key == 'ArrowUp' && elControl._el.offsetTop >= elControl._el.offsetWidth) elControl.up();
        if(e.key == 'ArrowDown' && elControl._el.offsetTop <= (elGrid.clientHeight-elControl._el.offsetWidth*2)) elControl.down();
        if(e.key == 'ArrowLeft' && elControl._el.offsetLeft >= elControl._el.offsetWidth) elControl.left();
        if(e.key == 'ArrowRight' && elControl._el.offsetLeft <= (elGrid.clientWidth-elControl._el.offsetWidth*2)) elControl.right();

        /*collision events*/
        for (let i = 0; i < aBoxes.length; i++) {

            if(e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight'){
                switch(i){
                    case 0:
                        if(elControl._el.offsetLeft < (aBoxes[i]._el.offsetLeft+aBoxes[i]._el.clientWidth) && elControl._el.offsetTop < aBoxes[i]._el.offsetTop + aBoxes[i]._el.clientHeight){
                            aBoxes[i].isActive(true);
                        } 
                        else aBoxes[i].isActive(false);
                        break;

                    case 1:
                        if(elControl._el.offsetLeft > (aBoxes[i]._el.offsetLeft-elControl._el.clientWidth) && elControl._el.offsetTop < aBoxes[i]._el.offsetTop + aBoxes[i]._el.clientHeight){
                            aBoxes[i].isActive(true);
                        } 
                        else aBoxes[i].isActive(false);
                        break;

                    case 2:
                        if(elControl._el.offsetLeft < (aBoxes[i]._el.offsetLeft+aBoxes[i]._el.clientWidth) && elControl._el.offsetTop > aBoxes[i]._el.offsetTop - elControl._el.clientHeight){
                            aBoxes[i].isActive(true);
                        } 
                        else aBoxes[i].isActive(false);
                        break;

                    case 3:
                        if(elControl._el.offsetLeft > (aBoxes[i]._el.offsetLeft-elControl._el.clientWidth) && elControl._el.offsetTop > aBoxes[i]._el.offsetTop - elControl._el.clientHeight){
                            aBoxes[i].isActive(true);
                        } 
                        else aBoxes[i].isActive(false);
                        break;
                }
            }
        }
    })

    elBody.addEventListener('keyup', function(e){

        if(e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight') elControl.isActive(false);
    })

/* 

VERSION PROCEDURALE//


    const elTarget = {},
          elBody = document.querySelector('body');

    let elHero = document.querySelector('[class="hero"]'),
        heroSpeed = 20,
        heroSize = 50,

        pageMargin = 50,

        targetSize = 200;

    elTarget.info = document.querySelector('[data-js-target="info"]');
    elTarget.map = document.querySelector('[data-js-target="map"]');
    elTarget.item = document.querySelector('[data-js-target="item"]');
    elTarget.product = document.querySelector('[data-js-target="product"]');

    for(item in elTarget){
        elTarget[item].style.width = `${targetSize}px`;
        elTarget[item].style.height = `${targetSize}px`;
    }
    elTarget.info.style.top = `${pageMargin}px`;
    elTarget.info.style.left = `${pageMargin}px`;

    elTarget.product.style.top = `${pageMargin}px`;
    elTarget.product.style.right = `${pageMargin}px`;

    elTarget.item.style.bottom = `${pageMargin}px`;
    elTarget.item.style.left = `${pageMargin}px`;

    elTarget.map.style.bottom = `${pageMargin}px`;
    elTarget.map.style.right = `${pageMargin}px`;



    elHero.style.width = `${heroSize}px`;


    window.addEventListener('keydown', function(e){


        if(e.key == 'ArrowDown' && elHero.offsetTop <= (window.innerHeight - heroSize - pageMargin)) elHero.style.top = `${elHero.offsetTop + heroSpeed}px`;

        if(e.key == 'ArrowUp' && elHero.offsetTop >= pageMargin) elHero.style.top = `${elHero.offsetTop - heroSpeed}px`;

        if(e.key == 'ArrowLeft' && elHero.offsetLeft >= pageMargin) elHero.style.left = `${elHero.offsetLeft - heroSpeed}px`;

        if(e.key == 'ArrowRight' && elHero.offsetLeft <= (window.innerWidth - heroSize - pageMargin)) elHero.style.left = `${elHero.offsetLeft + heroSpeed}px`;

        if(elHero.offsetTop <= (elTarget.info.offsetTop + targetSize) && elHero.offsetLeft <= (elTarget.info.offsetLeft + targetSize)){

            elTarget.info.firstElementChild.style.width = `${elBody.offsetWidth-(pageMargin*2)}px`;
            elTarget.info.firstElementChild.style.height = `${elBody.offsetHeight-(pageMargin*2)}px`;
            elTarget.info.firstElementChild.style.zIndex = `-1`;
            elTarget.info.style.zIndex = `2`;
            console.log(elTarget.info.style.zIndex)

        } else{

            elTarget.info.firstElementChild.style.width = `100%`;
            elTarget.info.firstElementChild.style.height = `100%`;
        }
    }) */
})