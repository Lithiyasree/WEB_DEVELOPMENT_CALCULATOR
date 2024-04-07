let Output =document.getElementById('output');


let buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
// Get the button text
    let buttonText = button.textContent;
    
// Append the button text to the display
    if (buttonText === '=') {
      Calculate();
    } else if (buttonText === 'C') {
      Clear();
    } else {
      appendToDisplay(buttonText);
    }
  });
});




// Function to display output

function display(num) {
  Output.value+= num;
}





//Function to calculate the Result
function Calculate() {
    try{
        Output.value=eval(Output.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}


//Function to clear the output
function Clear() {
    Output.value="";
}


//Function to delete the output
function del(){
    Output.value = Output.value.slice(0,-1);
}