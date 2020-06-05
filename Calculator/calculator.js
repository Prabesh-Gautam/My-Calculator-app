//getHistory function returns the value of the history_value element 
function getHistory(){
  return document.getElementById('history_value').innerText;

}
//this printHistory function helps printing the value in the history field.
function printHistory(num){
  document.getElementById('history_value').innerText = num
}
//this function takes the value from the output field in the calculator.
function getOutput(){
  return document.getElementById('output_value').innerText;
}
//this function is responsible for inserting the value into the output field.
function printOutput(num){
  if(num == ""){
    document.getElementById("output_value").innerText= num;

  }
  else{
    return document.getElementById("output_value").innerText= getFormattedNumber(num);

  }

 
}

//this function helps remove the comma in the number into plane number
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,""))
}

//this function is responsible for adding comma according to the internation number format 100,000
function getFormattedNumber(num){
  var a = Number(num);
  var value = a.toLocaleString("en");
  return value
}

//accessing all the operator class buttons and asigning them to an array.
var operator = document.getElementsByClassName('operator');

//looping the operators and assigning an event listner for calling a function according to their value.
for(var i=0;i<operator.length;i++){
  operator[i].addEventListener('click',function(){
    if(this.id == "clear"){
      printHistory("");
      printOutput("");
      console.log('clear')
    }
    else if(this.id == "backspace"){
      var output= reverseNumberFormat(getOutput()).toString();
      if(output){
        output = output.substr(0,output.length-1)
        printOutput(output)
      }
    }
    else {
			var output=getOutput();
			var history=getHistory();
			if(output=="" && history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
        output= output==""?
        output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
      }
    }   
  })
}

//accessing all the numbers with the className number and assigning them to an array
var number = document.getElementsByClassName("number");
//looping accross the number and assigning them a event listner to operate a function
for(var i=0;i<number.length;i++){
  number[i].addEventListener('click',function(){
    var output = reverseNumberFormat(getOutput());
    if(output!=NaN){
      output = output+this.id;
      printOutput(output)
    }
  })
}
