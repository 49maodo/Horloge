
        setInterval (() => {
            const hha = document.querySelector(".heur_cercle");
            const mma = document.querySelector(".minute_cercle");
            const ssa = document.querySelector(".seconde_cercle");
            const hr = document.querySelector("#x2");
            const min = document.querySelector("#x3");
            const sec = document.querySelector("#x4");
            const deg = 6;

            let date = new Date();
            let hh = date.getHours();
            let mm = date.getMinutes();
            let ss = date.getSeconds(); 

            // HL
            hha.style.transform = `rotateZ(${(hh*30) + (mm/2.5)}deg)`
            mma.style.transform = `rotateZ(${mm * deg}deg)`
            ssa.style.transform = `rotateZ(${ss*deg}deg)`

            // HN
            if(hh < 10){
                hh ="0" + hh
            }
           hr.textContent =hh;

           
            if(mm < 10){
                mm ="0" + mm;
            }
           min.textContent =":"+mm;

           if(ss < 10){
            ss ="0" + ss;
        }
       sec.textContent =":"+ss;
        }
        )
        