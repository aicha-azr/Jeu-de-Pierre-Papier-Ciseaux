
const box = document.getElementById('box');
const box1 = document.getElementById('box1');
const changer = document.getElementById('switch');
const user = document.getElementById('userChoice')
const cpu = document.getElementById('cpuChoice');

changer.addEventListener('click',function(){
    box1.style.display = 'none';
    box.style.display = 'block';
})

const user1 = user.innerHTML;
const cpu1 = cpu.innerHTML;

function choisir(choice) {
    let userChoice = '';
   userChoice = choice;
    const tab = ['Ciseaux', 'Pierre', 'Papier'];
    const one = Math.floor(Math.random() * tab.length); 
    //changer le contenu de p
    const p = document.getElementById('paragraphe');
    p.innerHTML="wait...";
    user.classList.add('active');
    cpu.classList.add('active1');
    cpu.innerHTML= cpu1;
    user.innerHTML = user1;
    
    setTimeout(()=>{
    switch(tab[one]){
        case 'Ciseaux':
           cpu.innerHTML = `<i class="fa-regular fa-hand-scissors "></i>`; 
        break;
        case 'Pierre':
            cpu.innerHTML = `<i class="fa-regular fa-hand-back-fist fa-flip-horizontal"></i>`; 
        break;
        default:
        cpu.innerHTML = ` <i class="fa-regular fa-hand fa-flip-horizontal"></i>`;
        break;
    }
    switch(userChoice){
        case 'Ciseaux':
           user.innerHTML = `<i class="fa-regular fa-hand-scissors fa-flip-horizontal"></i>`; 
        break;
        case 'Pierre':
            user.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`; 
        break;
        default:
        user.innerHTML = ` <i class="fa-regular fa-hand"></i>`;
        break;
    }
    

    
    function whoWin() {

        if (userChoice === tab[one]) {
            return 'try it again'
    
        } else {
            if ((userChoice === 'Papier' && tab[one] === 'Pierre') || (userChoice === 'Pierre' && tab[one] === 'Ciseaux') || (userChoice == 'Ciseaux' && tab[one] == 'Papier')) {
                return 'you won'
            } else {
                return 'you lost'
            }
        }
    }
    user.classList.remove('active');
    cpu.classList.remove('active1');
    p.innerHTML = whoWin();
},1000)
}





