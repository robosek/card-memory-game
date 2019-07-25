const shuffle = (array:Array<number>) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const generateCards = (number:number) => {

    const numbers = []

    for(let i = 0; i<= (number/2); i++){
        numbers.push(i);
        numbers.push(i);
    }

    return shuffle(numbers);
}

export{
    generateCards
}