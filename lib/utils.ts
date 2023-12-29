export const validateString = (text: unknown, minSize:number) => {
    if(!text || typeof text !== 'string'){
        return false;
    }

    if(typeof text === 'string' && text.length < minSize){
        return false;
    }

    return true;
}