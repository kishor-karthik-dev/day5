// for EAch
var data = '{"employees":\n\
    [{"101" : {"fName":"John", "lName":"Doe"}},\n\
    {"102" : {"fName":"Anna", "lName":"Smith"}},\n\
    { "103" : {"fName":"Peter", "lName":"Jones"}}]}';  


    var empObj = JSON.parse(data);

    empObj.employees.forEach((item) => {
      Object.entries(item).forEach(([key, val]) => {
        console.log(`key-${key}-val-${JSON.stringify(val)}`)
      });
    });

////////////////////////////////////////////////////////////

// for loop

var json = {
   one: [11, 12, 13, 14, 15],
   two: [21, 22, 23],
   three: [31, 32]
}

for(var key in json.jsonData) {
   for (var key1 in json.jsonData[key]) {
       console.log(json.jsonData[key][key1])
   }
}
