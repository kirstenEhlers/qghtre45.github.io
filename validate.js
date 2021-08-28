function validate_btn_click(){
    
    var number = document.getElementById("number");
   
    var opt = number.value;

    var ans_res = "Incorrect"
    
    var guess = document.getElementById("guess").value.toUpperCase();
    if (opt == 1 && guess=="RABBIT"){
        ans_res="Correct"
    }
    else if(opt == 2 && guess =="POLAR BEAR"){
        ans_res="Correct"
    }
    else if(opt==3 && guess=="GIRAFFE"){
        ans_res="Correct"
    }
    else if(opt==4 && guess=="ELEPHANT"){
        ans_res="Correct"
    }
    else if(opt==5 && guess=="ZEBRA"){
        ans_res="Correct"
    }
    else if(opt==6 && (guess=="RED FOX" || guess =="FOX")){
        ans_res="Correct"
    }
    else if(opt==7 && guess=="KOALA"){
        ans_res="Correct"
    }
    else if (opt==8 && guess=="CHAMELEON"){
        ans_res="Correct"
    }
    else if(opt==9 && guess=="DOLPHIN"){
        ans_res="Correct"
    }
    else if(opt == 10 && guess=="LION"){
        ans_res="Correct"
    }
    
    
    document.getElementById("corrector").innerHTML = ans_res;
}
