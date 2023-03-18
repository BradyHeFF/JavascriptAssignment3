const button = document.getElementById("button")
const input = document.getElementById("numberInput")
const output = document.getElementById("numberList")

button.addEventListener("click",(error)=>{
    if (input.value !=""){
        error.preventDefault()

        var workingInput = input.value

        let evens = (num) => {
            var outputList = []
            for(i = 0; i < num; i++){
                if(i%2 == 0){
                    outputList.push(" " + i)
                }
            }
            const newOutput = document.createElement("li")
            newOutput.innerHTML = "Even numbers between 0 and " + num + ": " + outputList;
            output.appendChild(newOutput)
        }
        evens(workingInput)

     }
 })
  