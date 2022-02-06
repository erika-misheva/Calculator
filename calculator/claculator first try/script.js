let display = document.getElementById("display"); // ova e za rezultatite
let buttons = Array.from(document.getElementsByClassName("button")); //pravime arrey od site elementi sto sme gi dobile


buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) { //preku target dobivame tocnata vrednost od elementot sto sme go kliknale
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1); //slice brise po eden element pocnuva od -1 odnosno posledniot i zavrsuva so nultiot odnosno prviot

                }
                break;

            case '=':
                try{
                 display.innerText = eval(display.innerText); //eval e funkcija sto izvrsuva koj bilo validen javascript code ne treba da se koristi deka moze da se izmanipulira od strana na drug

                } catch{
                    display.innerText = "Invalid input!" // try i catch se dobra opcija za errori
                }
                break;

            default:
                display.innerText += e.target.innerText; // po default se dodava kaj rezulatot toa sto ke go kliknes
        }
    })
})
