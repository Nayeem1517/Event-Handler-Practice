function sortMaker(arr) {
    if (arr.length !== 2) {
        console.log("Array must contain exactly 2 elements.");
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log("Invalid Input")
            return ;
        }
    }

    if (arr[0] === arr[1]) {
        console.log("Equal.");
    } else {
        arr.reverse();
        console.log("Reversed Array:", arr);
    }
}


sortMaker([2, 4]);   