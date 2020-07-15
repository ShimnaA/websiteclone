//alert("hello");
//console.log("hello--");
//Challenge1 Age in days
function ageinDays(){
    var birthyear = prompt('Year of birth');
    var agedays = (2020 - birthyear) * 365;
    console.log(agedays);
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('You are ' + agedays + ' days old');
    h1.setAttribute('id', 'ageinDays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    console.log("shimnna");
    document.getElementById('ageinDays').remove();
}
function generatecats(){
    var image = document.createElement('img');
    image.src ="https://image.winudf.com/v2/image/Y29tLmF3ZXNvbWV3YWxscGFwZXIuY2F0MTUxMDI1X3NjcmVlbnNob3RzXzFfOTY1ODRiN2Y/screen-1.jpg?fakeurl=1&type=.jpg";
    image.width = 300;
    image.height = 300;
    div = document.getElementById('catdiv')
    div.appendChild(image);
}