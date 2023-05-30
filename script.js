function clickMe(val){
    document.getElementById("in-put").value+=val;
    }

    function clearMe(){
        document.getElementById('in-put').value="";
    }

    function clickEqual(){
        var text=document.getElementById('in-put').value
        var result=eval(text)
        document.getElementById('in-put').value=result;
    }