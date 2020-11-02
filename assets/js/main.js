function trennen() {
    event.preventDefault();
    let feld1=document.getElementById("my-input1").value;
    let feld2=document.getElementById("my-input2").value;
    let trennenungM2=document.getElementById("trennenung2");
    let vordererTeilPlatz=document.getElementById("vordererTeil")
    let hintererTeilPlatz=document.getElementById("hintererTeil")
    let m1=feld1.split(feld2); 
    let a;
    let b;
    let l = feld2.length;



    if (l==0)
    {  
        vordererTeilPlatz.innerHTML= a= " Das  Zeichen konnte lieder nicht gefeunden werden"
        hintererTeilPlatz.innerHTML= b=feld1;
    }

    else if (trennenungM2.checked) {
       
        vordererTeilPlatz.innerHTML=a=m1[0]+feld2;
        hintererTeilPlatz.innerHTML=b=m1[1];
    }
    
    else{
      
        
        hintererTeilPlatz.innerHTML=b=feld2+m1[1];
        vordererTeilPlatz.innerHTML=a=m1[0];
    }
    
        
    }