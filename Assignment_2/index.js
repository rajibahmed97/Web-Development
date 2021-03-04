



var data = [
    'Know yourself by Wisdom.',
    'If you want to change the world, do it when you are bachelor.',
    'Knowledge speaks, but wisdom listen.',
    'Its okay to be over protective.',
    'Sometimes you do not need a knife to kill someone, A simple goodbye is enough.',
    'Love does not exits, Because science do not have any formulae about that.',
    'Remember one thing, Do not leave the working place until it finishes.',
    'Live as if you were to die tomorrow, learn as if you were to live forever. ',
    'We must not allow other peoples limited perceptions to difine us.',
    'Do what you can do, with what you have, where you are.',
    'If you can not do great things, do small thing in a great way.',
    'Wise men speak because they have somthing to say; fools speak because they have to say something.',
    'Do not let what you cannot do interfere with that you can do.'
];

var data_length = data.length;


function generateRandom(){
    document.getElementById('demo').innerHTML = data[getData()];
}

function getData(){
    return Math.floor(Math.random()*data_length);
}

