
function clicar(){
    var qnum = parseInt(window.document.getElementById('qnum').value)

    var res = window.document.getElementById('res')

    var n1 = 0
    var n2 = 1
    var nextTerm = ""
    var sequencia = [0,1]
    

    if(qnum <=2 ){
        sequencia = qnum -1
    }else{
        for(var c=0; c<=qnum; c++){
            nextTerm = n1 + n2
            sequencia.push(nextTerm)
            
            n1 = n2
            n2 = nextTerm
    }
        }
        res.innerHTML = `A Sequência de Fibonacci até o termo <strong>${qnum}</strong> é:<br/><br/> ${sequencia}<br/> `
}
   qnum.value = ''
   qnum.focus()
