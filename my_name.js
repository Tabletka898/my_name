

function my_name(){
  var numele = document.getElementById("name").value;
  var withoutSpace = numele.replace(/ /g,"");

  alert("Salut " + numele + "   !!!   "+ "Numele tau are  " + withoutSpace.length + "  caractere");
}
