// 1-vazifa

let arr = ["I", "Study", "JavaScript", "right", "now" ];
let arrSlice = arr.slice(2,3)
console.log(arrSlice);

// 2-vazifa
let text = "salom dunyo"
function rever(text) {
    text = text.split("")
    text = text.reverse("")
    return text = text.join("")
}

console.log(rever(text));

// 3-vazifa
function positive(arg) {
    if (arg%2==0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(positive(arg));

