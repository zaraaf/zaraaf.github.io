    function groupMulti() {
        let userNum = window.prompt("Pick 1 Number to multiply", 1);
        let i = 0;
        let out = 0;
        const numMultiply = [];
        //so long as I is greater than or equal to 3 AND i less than or equal to 3 the loop will execute (This will execute 4 times)
        while (i >= 0 && i <= 3) {
            out = userNum * i;
            // puts the output of out into the array numMultiply. this loops so whenever the loop goes through an iteration a new number will be pushed to the array.
            numMultiply.push(out);
            // this is used to visualize when each number is being pushed to the array
            console.log(numMultiply);     
            i++;
        }
        //this will output the array onto a paragraph tag with the id numArray
        document.getElementById("numArray").innerHTML = "[" + numMultiply + "]";
     }