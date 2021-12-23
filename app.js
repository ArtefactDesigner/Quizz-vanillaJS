const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️ ','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau =  [];

form.addEventListener('submit',(e) => {
    e.preventDefault();

    for(i=1;i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    //console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats){
    for(let v = 0; v < 5; v++){
        if(tabResultats[v] === reponses[v]){
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    console.log(verifTableau);
    afficherResultats(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = `${emojis[0]} "Bravo, c'est un sans faute !" ${emojis[0]}`;
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
        break;
        case 1:
            titreResultat.innerText = `${emojis[1]} "Vous y êtes presque !" ${emojis[1]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis revalidez !';
            noteResultat.innerText = '4/5';
        break;
        case 2:
            titreResultat.innerText = `${emojis[1]} "Encore un effort ... !" ${emojis[2]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis revalidez !';
            noteResultat.innerText = '3/5';
        break;
        case 3:
            titreResultat.innerText = `${emojis[2]} "Il reste queleques erreurs ... !" ${emojis[3]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis revalidez !';
            noteResultat.innerText = '2/5';
        break;
        case 4:
            titreResultat.innerText = `${emojis[3]} "Peut mieux faire ... !" ${emojis[3]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis revalidez !';
            noteResultat.innerText = '1/5';
        break;
        case 5:
            titreResultat.innerText = `${emojis[4]} "Peut mieux faire ... !" ${emojis[4]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis revalidez !';
            noteResultat.innerText = '0/5';
        break;
    
        default:
            break;
    }
}