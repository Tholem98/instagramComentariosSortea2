
function juntarRepetidos(result){
  let repArr = [],
    cleanArr = [];
  repArr = result.filter(function(item, index, array) {
    return array.map((account) => account[0]).indexOf(item[0]) != index;
  })
  cleanArr = result.filter(function(item, index, array) {
    return array.map((account) => account[0]).indexOf(item[0]) === index;
  })


  repArr.map((account) => {
    let accountIndex = cleanArr.map((account) => account[0]).indexOf(account[0])
    if(account[1].includes("+")){
    account[1] = Number(account[1].split("+")[1])+Number(account[1].split("+")[0])
    }
    cleanArr[accountIndex][1] = Number(cleanArr[accountIndex][1]) + Number(account[1])
  })

return cleanArr
}


function mostrar() {
  const string = document.getElementById("input").value

  let result = string.toLowerCase().split("\n")
  //si tenes otra forma de separar el nombre de la cantidad aca está la forma de reemplazarlo por el que vamos a utilizar
  //.map((account)=>account.replace(">>","(x"))
  
  result = result.map((account) => account.replace(" ","").split("(x")); //utilizamos (x para separa nombre de cantidad de comentarios
 //console.log(accounts)

	result= juntarRepetidos(result)

  let accounts = ""
  result = result.map((el) => {
    for (let i = 0; i < Number(el[1]); i++) {
      accounts += el[0] + "  " + (i + 1) + "\n"
    }
    //console.log(accounts)
    return accounts
  })

  document.getElementById("mostrar").innerText = result
  /*result.map((account)=>{
  document.getElementById("mostrar").innerText +=  
  account+"\n"
  })
  */
}

