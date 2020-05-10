let friends = ["Bruce", "Steve", "Natasha", "Tony", "Wanda"];

for (f = 0; f < friends.length; f++){
    let friend = friends[f]; {
        for (counter = 99; counter > 0; counter--) {
            let minusOne = counter - 1;
            if (counter > 1) {
            console.log(counter + " lines of code in the file, " + counter + " lines of code; " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file");
            } else  {
            console.log("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }
    }
    
};