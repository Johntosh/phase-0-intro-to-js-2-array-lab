// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    name = "Ralph";
    cats.push(name);
} 

function destructivelyPrependCat(name){
    name = "Bob";
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    name = [...cats, "Broom"];
    return name;
}

function prependCat(name){
    name = ["Arnold", ...cats];
    return name;
}

function removeLastCat(){
    const curtis = cats.slice(0, -1);
    return curtis;
}

function removeFirstCat(){
    const curtis = cats.slice(1);
    return curtis;
}
