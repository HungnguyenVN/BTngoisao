
let number = prompt('Nhap so dong');
for (let i=1; i<=number; i++){
    for (let j=1; j<=i; j++){
        document.write("*")
    }
    document.write('<br>');
}

for (let i=1; i<=number; i++){
    for (let j=number; j>=i; j--){
        document.write("*")
    }
    document.write('<br>');
}

for (let i=1; i<=number; i++){
    for (let j=number; j>=i; j--){
        document.write("\xa0\xa0")
    }
    
    for (let j=1; j<=i; j++){
        document.write("*")
    }
    document.write('<br>');
}

for (let i=1; i<=number; i++){
    
    for (let j=1; j<=i; j++){
        document.write("\xa0\xa0")
    }
    for (let j=number; j>=i; j--){
        document.write("*")
    }
    document.write('<br>');
}