let array = [1,2,3]

let value = "False"

for (let i = 0; i < array.length; i++){
for (let a = 0; a < array.length; a++) {
     if (i !== a){ 
    if (array[i] + array[a] === 0){
            value = "True"
    }
}
}
}

console.log(value);