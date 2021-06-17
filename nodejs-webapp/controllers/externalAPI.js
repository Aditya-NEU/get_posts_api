
let axios = require('axios');
let { json } = require('body-parser');
let { response } = require('express');
let {qs} = require ('qs');


exports.externalAPI = async(req,res,next)=>{

  inputarray =[];

function onlyUnique(value, index, self) {
  console.log(value + "Printing value >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  console.log(index + "Printing index>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  return self.indexOf(value) === index;
}

function removingDuplicates(){
   unique = inputarray.filter(onlyUnique);
  console.log("In unique ")
  // console.log(unique)
   sendData()
}

 function sendData(){
   console.log("Here in the sendData method >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  res.status(200).send(unique)
}
  
  // function printinputArray(){
  //   console.log(inputarray)
  // }
  
  var arr = req.query.tags.split(',');

  for(let variable=0;variable<=arr.length-1;variable++){

    console.log("Value of arr.length "+ arr.length)

    console.log("Variable value "+ variable)

  await axios.get('https://api.hatchways.io/assessment/blog/posts',{

  params:{
        tag:arr[variable]
  }
})

.then(response=>{
    console.log("----------------------------------------------------------------------")
   console.log(response.data.posts.length)
   console.log("-----------------------------------------------------------------------")
  const answer = JSON.stringify (response.data)
  console.log("Variable value inside then promise" + variable)
  const parser = JSON.parse(answer)

  for(let j=0;j<=response.data.posts.length-1;j++){
     inputarray.push(parser.posts[j])
    //  printinputArray()  
  }

  console.log("Variable value "+ variable)

  if(variable ==arr.length-1){
    console.log("I am here in the if")
    removingDuplicates()
}

})
.catch(error=>{
  res.status(400).send({
    "error":"The tag parameter is required"
  })

})



}



 }
  
