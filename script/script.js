//A text Adventure Game


var outcome;
window.alert('A war broke out in the middle east and people are running for thier lives.');

var scenes = ['You wake up and see people runnin for thier lives and see that people are being attacked by rebels u go outside and also start running', 'You are in a market and see soliders attacking people and you start running to save you life', 'You are in a store buying things but a siren alerts peole that they should evacute as quickly as possible as it is city attacked by rebels'];

function randomNumber(range) {
    return Math.round(Math.random() * range);
}

window.alert(scenes[randomNumber(scenes.length - 1)]);

var character = {
    health: 5,
    strength: 0,
    stealth: 0,
    name: window.prompt('What is your name'),
    characterClass: prompt('These times are to test the strenths of our character. What were you before the war broke out(soldier,doctor or politician)').toLowerCase()
}

switch (character.characterClass) {
    case 'soldier':
        character.strength += 5;
        break;
    case 'politician':
        character.stealth += 5;
        break;
    case 'doctor':
        character.health += 7;
        break;
    default:
        window.alert('You feel unprepared for the ensueing battle');
        
}

var choice = window.prompt('The brave and mighty former ' + character.characterClass + ' ' + character.name + ' safly gets way from the attackers and hides himself in a store bathroom.But suddenly a soldier comes thier for searching What action will you take . Will you (attack) or (sneak )?').toLowerCase();

if (choice === 'attack') {
    if (character.strength === 5) {
        window.alert('You use only your bare hands and fight the soldier head to head before he can take his gun out you restrain him from taking his gun out and pin him down and kock him out');
        outcome = 'win';
    } else if (character.strength < 5) {
        window.alert('You use only your bare hands and fight the soldier head to head before he can take his gun out you restrain him from taking his gun out but he appears to be stroner then you and he beats you to death');

        outcome = 'lose';
    }
}

if (choice === 'sneak') {
    if (character.stealth === 5) {
        window.alert('You sneak by the guard without alerting him');
        outcome = 'win';
    }
    if (character.stealth < 5) {
        window.alert('You try to slip by the guard but as your stealth skill are so shitty you get caught by the guard');

        if (character.strength === 5) {
            window.alert('You use only your bare hands and fight the soldier head to head before he can take his gun out you restrain him from taking his gun out and pin him down and kock him out');
            outcome = 'win'
        } else {
            window.alert('You try to fight the guard but he takes his gun out and shoots you in the head. Better luck next time noob');
            outcome = 'lose';
        }
    }
}

if (outcome === 'lose') {
    window.alert('You lose');
} else if (outcome === 'win') {
    window.alert('you win');
}
