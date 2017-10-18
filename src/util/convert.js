export function toNumber(s){
    return Number(s);
}

export function toBoolean(s){
    let t;
    if(s === 'true'){
        t=true;
    }
    if(s === 'false'){
        t = false;
    }
    if(t){
        return t;
    }
    return Boolean(s);
}