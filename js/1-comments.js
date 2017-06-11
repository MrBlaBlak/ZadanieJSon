'use strict';
var jsonPracownicy = {

    "pracownicy": [{
        "firstName": "Krystian",
        "lastName": "Dziopa",
        "origin": "Poland"
            }, {
        "firstName": "Anna",
        "lastName": "Szapiel"
            }, {
        "firstName": "Piotr",
        "lastName": "Żmuda"
            }]
    
}


console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(el, i){
    console.log("Imię i Nazwisko nr"  + i +":"+ el.firstName+ el.lastName)
})
                                  
                                  
