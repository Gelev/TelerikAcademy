function solve(selector, arr){

    if(typeof selector !== 'string' && !(selector instanceof HTMLElement)){
        throw 'Invalid string or DOM element';
    }
    let element = $(selector);
    if(element.length === 0){
        throw 'The element does not exist in the current document.'
    }
    if(!arr || arr.some(function (arrElement) {
            return typeof arrElement !== 'string' && typeof contElement !== 'number';
        })){
            throw 'The input data is not correct';
    }
        element.empty();

        for (let i = 0; i <arr.length; i += 1){
            let item = $('<div>');
            item.text(arr[i]);
            element.append(item);
        }
    }
