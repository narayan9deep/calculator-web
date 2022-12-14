//empty string
var string = "";

//target display areas:
var primaryText = document.querySelector(".primary-text");
var secondaryText = document.querySelector(".secondary-text");


//array of symbols
var symbols = ["+","/","-","*"]; //(this is for later checking that no two symbols are input consecutively)

//----------------------event listener to all numeric and symbol buttons:----------------------

//select all numeric and symbol buttons:
var buttons = document.querySelectorAll(".item-button");

//add event listener to all numeric and symbol buttons:
Array.from(buttons).forEach(function(button){
    button.addEventListener('click', function(e){

        //if the "=" button is clicked
        if(e.target.innerText == "=")
        {
            //update secondary display to show expression:
            secondaryText.innerText = primaryText.innerText;

            //evaluate the input:
            string = eval(string);
        }

        //if buttons other than "=" button are clicked:
        else{

            //logic to ensure no two symbols are input consecutively
            var x = e.target.innerText;
            var y = string.toString().slice(string.length-1,string.length);

            //if two symbols are input consecutively, we remove the old one and insert the new one
            if(symbols.includes(x) && symbols.includes(y))
            {
                //remove the old symbol from end of the string:
                string = string.toString().slice(0,-1);
                //insert new symbol at the end of the string:
                string = string + e.target.innerText;
            }
            else
            {
                //insert new symbol at the end of the string
                string = string + e.target.innerText;
            }
        }

        //update primary display to show input string
        primaryText.innerText = string;
        
    })
    
})
//--------------------------------------------

//----------------------event listener clear and delete buttons:----------------------

//target clear and delete buttons:
var clearButton = document.querySelector(".clear");
var deleteButton = document.querySelector(".delete");

//event listener to clear button:
clearButton.addEventListener("click", function(){
    //clear string
    string = "";

    //clear primary display:
    primaryText.innerText="";

    //clear secondary display:
    secondaryText.innerText="";
})

//event listener to delete button:
deleteButton.addEventListener("click", function(){
    //remove the last character from the string:
    string = string.slice(0,-1);

    //update the primary display:
    primaryText.innerText=string
})
//--------------------------------------------