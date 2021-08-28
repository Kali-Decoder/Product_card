var i=0;
        const plus=document.querySelector(".plus");
        const minus=document.querySelector(".minus");
        const click=document.querySelector(".click");
        const like=document.querySelector(".like");

        plus.addEventListener('click',()=>{
                i++;
                document.querySelector("strong").innerHTML=i;
                if(i==20)
                {alert("Not More Than" + " " + i + " In Stock !")
                    i=0;
                };
        });
        minus.addEventListener('click',()=>{
                
                document.querySelector("strong").innerHTML=i;
                if(i<=0)
                {   
                    i=0;
                };
                i--;
        });

        click.addEventListener('click',()=>{
                alert("Your Order Is Placed To Your Register Address ! Thankyou...");
        });

        like.addEventListener('click',()=>{
                
                document.querySelector(".like").classList.toggle("liking");
                alert(" Thankyou ! For Response .");
        });