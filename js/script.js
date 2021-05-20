"use strict";

let username = prompt("Who is there ?", '');
if (username == 'Admin') {
    let pass = prompt('Password', '');

    if (pass == 'I am the main ') {
        alert('Good Morning');
    } else if (pass == '' || pass == null) {
        alert('Cancel');
    } else {
        alert('Fail Passwird');
    }




} else if (username == '' || username == null) {
    alert('Cancelled');

} else {
    alert('I dont Know your');
}