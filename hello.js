        var n=1;
        function saving()
        {
          
        var list1=document.getElementById("one").value;
        var list2=document.getElementById("three").value;
        var list3=document.getElementsByName("gender");
        for(i=0;i<list3.length;i++)
        {
            if(list3[i].checked)
            {
                var result=list3[i].value
            }
        }

        var list4=document.getElementById("six").value;
        var list5=document.getElementById("seven").value;
        document.getElementById("myform").reset();

        var res=document.getElementById("storing");
        var Newrow=res.insertRow(n);

        var cel1=Newrow.insertCell(0);
        var cel2=Newrow.insertCell(1);
        var cel3=Newrow.insertCell(2);
        var cel4=Newrow.insertCell(3);
        var cel5=Newrow.insertCell(4);
        var cel6=Newrow.insertCell(5);

        cel1.innerHTML=list1;
        cel2.innerHTML=list2;
        cel3.innerHTML=result;
        cel4.innerHTML=list4;
        cel5.innerHTML=list5;
        cel6.innerHTML="<button onclick='deleteRow(this)'>Delete</button>"
        n++;
        document.getElementById("myform").reset();
        }
         function deleteRow(b)
         {
             var r1=b.parentNode.parentNode;
             r1.parentNode.removeChild(r1);
             n--;
         }