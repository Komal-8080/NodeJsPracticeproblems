let num = 9
 if (num >9 || num <0){
     console.log("Please Enter Single Digit Number")
 }else {
     switch(num) {
        case 0:
            console.log(num+"-Zero")
            break;
        case 1:
            console.log(num+"-One")
            break;
        case 2:
            console.log(num+"-Two")
            break;
        case 3:
            console.log(num+"-Three")
            break;
        case 4:
            console.log(num+"-Four")
            break;
        case 5:
            console.log(num+"-Five")
            break;
        case 6:
            console.log(num+"-Six")
            break;
        case 7:
            console.log(num+"-Seven")
            break;
        case 8:
            console.log(num+"-Eight")
            break;
        case 9:
            console.log(num+"-Nine")
            break;
        default:
           console.log("Invalid Input");
            break;
     }
 }