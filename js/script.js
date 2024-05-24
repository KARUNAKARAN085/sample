let userInput=['10','10 9 8 7 6 5 4 3 2 1']
let num=+userInput[0]
  let num1=userInput[1].split(" ")
  let arr=[]
  for(let i=0;i<num1.length;i++){
      arr.push(num1[i])
  }
  console.log(arr)
  arr.sort()
  debugger
  console.log(arr)
  console.log(arr[1])