export const ucFirst = (str: string) => {
    if(!str) return; 

    return str[0].toUpperCase() + str.slice(1);
};