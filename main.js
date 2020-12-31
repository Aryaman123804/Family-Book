var images= ["https://i.pinimg.com/736x/c1/5e/ff/c15effc3689a48b309a856994d53ab81.jpg","https://cdn2.vectorstock.com/i/1000x1000/47/01/smiling-kid-boy-cartoon-character-vector-15054701.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.pinimg.com/originals/d8/ac/a9/d8aca934c60c7f9392f8828e50b03f4b.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png"];
var names= ["Aryaman Goyal","Anshuman Goyal","Neha Goyal","Prateek Goyal","Asha Goyal","Shyam Goyal"];
var i= 0;
function next() {
    
    var numberofmembers= 6;
    if (i > numberofmembers) {
        i= 0;
    }
    var updatedimage= images[i];
    var updatedname= names[i];
    document.getElementById("image").src= updatedimage;
    document.getElementById("familyname").innerHTML= updatedname;
    i++;
}
