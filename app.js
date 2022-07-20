"use strict"
// Main functions or actions
// Create an object that includes:
// image
// scenario
// correct answer
let questionPic = document.getElementById("question-pic");
let questionBox = document.getElementById("questionBox");
let castleDiv = document.getElementById("castleDiv");
let preDoc = document.getElementById("preDoc");
let scoreDiv = document.getElementById("scoreDiv");
let bigCastle = String.raw`  ',                                                        ,'<br>  ',                                                    ,'<br>    :,                                                ,:<br>    : :,____________________________________________,: :<br>    : :-:       ..........        ..........       :-: :<br>    : :-:                   .    .'                :-: :<br>    : :-:    dHHHHHHHHHHHb        dHHHHHHHHHHHb    :-: :<br>    : :-:   dHHHHHHHHHHHHHb      dHHHHHHHHHHHHHb   :-: :<br>    : :-:   HHHHHHHHHHHHHHH      HHHHHHHHHHHHHHH   :-: :<br>    : :-:    HHHHHHHHHHHHHF       HHHHHHHHHHHHHF   :-: :<br>    : :-:     HHHHHHHHHF''.'.oo.'.'' HHHHHHHHHF    :-: :<br>    : :-:'.            ..'.dHHHHb.'..            .':-: :<br>    : :-:  ''...   ..''   HHHF'HHH  ''..   ...'' :-: :<br>    : :-:     / '''/      'HF  'HF      \\'''\     :-: :<br>    : :-:    /  .    ..              ..    .  \    :-: :<br>    : :/:    :.' '.''/\'............'/\''.' '.:    :\: :<br>    : :/:     :   :\/::\/\/\/^^\/\/\/::\/:   :     :\: :<br>    : :/:     :   ::::/^^^^^^^^^^^^^^\::::   :     :\: :<br>    : :/:     :   :::/^^^^^^^^^^^^^^^^\:::   :     :\: :<br>    : :/:     :   ::/^^^^^^^^^^^^^^^^^^\::   :     :\: :<br>    : :/:     :   :/^^^^^^^^^^^^^^^^^^^^\:   :     :\: :<br>    : :/:     '.  :AAAAAAAAAAAAAAAAAAAAAA:  .'     :\: :<br>    : :/:     :: :'                       :' :     :\: :<br>    : :/:     ::AAAAAAAAAAAAAAAAAAAAAAAAAAAA :     :\: :<br>    : :/:_____:/                            \:_____:\: :<br>    : :/:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA \: :<br>    : ://                                          \\: :<br>    : :/                                            \: :<br>    :  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  :<br>    : /                                              \ :<br>    :/                                                \:<br>     AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA `;
let castleOutside = String.raw`                              .-----.<br>                            .'       '.<br>                           :      ^v^  :<br>                           :           :<br>                           '           '<br>            |~        www   \.       .'<br>           /.\       /#^^\_   '-/\--'<br>          /#  \     /#%    \   /# \<br>         /#%   \   /#%______\ /#%__\<br>        /#%     \   |= I I ||  |- |<br>        ~~|~~~|~~   |_=_-__|'  |[]|<br>          |[] |_______\__|/_ _ |= | .<br>   ^V^    |-  /= __   __    /-\|= | :;<br>          |= /- /\/  /\/   /=- \.-' :;<br>          | /_.=========._/_.-._\  .:'<br>          |= |-.'.- .'.- |  /|\ |.:'<br>          \  |=|:|= |:| =| |~|~||'|<br>           |~|-|:| -|:|  |-|~|~||=|      ^V^<br>           |=|=|:|- |:|- | |~|~|| |<br>           | |-_~__=_~__=|_^^^^^|/___<br>           |-(=-=-=-=-=-(|=====/=_-=/\<br>           | |=_-= _=- _=| -_=/=_-_/__\ <br>           | |- _ =_-  _-|=_- |]#| I II<br>           |=|_/ \_-_= - |- = |]#| I II<br>           | /  _/ \. -_=| =__|]!!!I_II!!<br>          _|/-'/  ' \_/ \|/' _ ^^^^'.==_^.<br>        _/  _/'-.'-; '-.\_ / \_'\''. ''. ===''.<br>       / .-'  __/_   '.   _/.' .-' '-. ; ====;\<br>       / .-'  __/_   '.   _/.' .-' '-. ; ====;\<br>      /.   './    \ '. \ / -  /  .-'.' ====='  ><br>     /  \  /  .-' '--.  / .' /  '-.' ======.' /`;
let skeleton = String.raw`                             _.--""-._<br>  .                         ."         ".<br> / \    ,^.         /(     Y             |      )\<br>/   '---. |--'\    (  \__..'--   -   -- -'""-.-'  )<br>|        :|    '>   '.     l_..-------.._l      .'<br>|      __l;__ .'      "-.__.||_.-'v'-._||'"----"<br> \  .-' | |  '              l._       _.'<br>  \/    | |                   l'^^'^^'j<br>        | |                _   \_____/     _<br>        j |               l '--__)-'(__.--' |<br>        | |               | /'---''-----'"1 |  ,-----.<br>        | |               )/  '--' '---'   \'-'  ___  '-.<br>        | |              //  '-'  ''----'  /  ,-'   I'.  \<br>    _   L |_            //  '-.-.''-----' /  /  |   |  '. \<br>     '._' / \         _/(   '/   )- ---' ;  /__.J   L.__.\ :<br>      ''._;/7(-.......'  /        ) (     |  |            | |<br>      '._;l _'--------_/        )-'/     :  |___.    _._./ ;<br>        | |                 .__ )-'\  __  \  \  I   1   / /<br>        '-'                /   '-\-(-'   \ \  '.|   | ,' /<br>                           \__  '-'    __/  '-. '---'',-'<br>                              )-._.-- (        '-----'<br>                             )(  l\ o ('..-.<br>                     _..--' _'-' '--'.-. |<br>              __,,-'' _,,-''            \ \<br>             f'. _,,-'                   \ \<br>            ()--  |                       \ \<br>              \.  |                       /  \<br>                \ \                      |._  |<br>                 \ \                     |  ()|<br>                  \ \                     \  /<br>                   ) '-.                   | |<br>                  // .__)                  | |<br>               _.//7'                      | |<br>             '---'                         j_|<br>                                          (| |<br>                                           |  \<br>                                           |lllj<br>                                           |||||  `;


//let preDoc = document.createElement("pre");
console.log(castleOutside);
console.log("Bop");
//preDoc.innerHTML = castleOutside;
castleDiv.appendChild(preDoc);

function Monster(q, answer, image){
    this.q = q;
    this.correctAnswer = answer;
    this.image = image;
}
function Intro(ascii, text){
    this.ascii = ascii;
    this.text = text;
}
let introPics = [];
let monsterObjects = [];
let q1 = new Intro(castleOutside, "A dark castle towers over you. This is where you stop The Champion's plans and vanquish him once and for all.");
let q2 = new Intro("(Scenario goes here) What do you do?", "");
let m1 = new Monster("You encounter a skeleton! He reels back for a swing with his axe!", "", "");
let m2 = new Monster("(Scenario goes here) What do you do?", "hide", "");
let m3 = new Monster("(Scenario goes here) What do you do?", "hide", "");
let m4 = new Monster("(Scenario goes here) What do you do?", "hide", "");
let m5 = new Monster("(Scenario goes here) What do you do?", "hide", "");
let m6 = new Monster("(Scenario goes here) What do you do?", "hide", "");
let m7 = new Monster("(Scenario goes here) What do you do?", "hide", "");
let m8 = new Monster("(Scenario goes here) What do you do?", "hide", "");
//Pushing all created objects/strings to their respective arrays
introPics.push(q1);
introPics.push(q2);
monsterObjects.push(m1);
monsterObjects.push(m2);
monsterObjects.push(m3);
monsterObjects.push(m4);
monsterObjects.push(m5);
monsterObjects.push(m6);
monsterObjects.push(m7);
monsterObjects.push(m8);

function pickQuestion(){
    console.log("Play?");
    let rando = Math.floor(Math.random()*monsterObjects.length);
    let pickedQuestion = monsterObjects[rando];
    preDoc.innerHTML = bigCastle;
    questionBox.innerHTML = pickedQuestion.q;
    console.log(pickedQuestion.correctAnswer);
}
castleDiv.addEventListener('click', function(){
    castleDiv.innerHTML = " ";
    castleDiv.innerHTML = "<pre>" + bigCastle + "</pre>";
    console.log("Ree");
    
})

castleDiv.innerHTML = "<pre>" + castleOutside + "</pre>";
questionBox.innerHTML = q1.text;

//pickQuestion();