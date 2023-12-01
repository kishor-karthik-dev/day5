// QUES 1 : For the given JSON iterate over the all for loops (for,for in,for of, forEach)

// for method

var persondetails = [{
    "name" : "kishorkarthik",
    "age" : "23",
    "city" : "salem",
    "state":"tn",
    "pincode":"636009"
}]
for(let i=0; i < persondetails.length ; i++){
    
    console.log( persondetails[i]);
}

// output :
/*{
    name: 'kishorkarthik',
    age: '23',
    city: 'salem',
    state: 'tn',
    pincode: '636009'
  }*/

//   for in method

var persondetails = {
    "name" : "kishorkarthik",
    "age" : "23",
    "city" : "salem",
    "state":"tn",
    "pincode":"636009"
}
for(let i in persondetails){
    
    console.log(i,":", persondetails[i]);
}
// output:
/*name : kishorkarthik
age : 23
city : salem
state : tn
pincode : 636009*/

// for of method
var persondetails = [{
    "name" : "kishorkarthik",
    "age" : "23",
    "city" : "salem",
    "state":"tn",
    "pincode":"636009"
}]
for(let res of persondetails){
    
    console.log(res);
}

// output
/*{
    name: 'kishorkarthik',
    age: '23',
    city: 'salem',
    state: 'tn',
    pincode: '636009'
  }*/
  
//   forEach method

var persondetails = [{
    "name" : "kishorkarthik",
    "age" : "23",
    "city" : "salem",
    "state":"tn",
    "pincode":"636009"
}]
persondetails.forEach((element)=>console.log(element));
// output
/*{
    name: 'kishorkarthik',
    age: '23',
    city: 'salem',
    state: 'tn',
    pincode: '636009'
  }*/
