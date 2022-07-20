


'use strict';


//playground below
let reaper = String.raw`                                            .""--..__<br>                      _                     []       ''-.._<br>                   .'' ''.                  ||__           '-._<br>                  /    ,-.\                 ||_ '''---..__     '-.<br>                 /    /:::\\               /|//}          ''--._  '.<br>                 |    |:::||              |////}                '-. \<br>                 |    |:::||             //'///                    '.\<br>                 |    |:::||            //  ||'                      '|<br>                 /    |:::|/        _,-//\  ||<br>                /'    |:::|'-,__,-''  |/  \ ||<br>              /'  |   |'' ||           \   |||<br            /'    \   |   ||            |  /||<br>            /'    \   |   ||            |  /||<br>          |'       |  |   |)            \ | ||<br>         |          \ |   /      ,.__    \| ||<br>         /           '         /'    '\   | ||<br>        |                     /        \  / ||<br>        |                     |        | /  ||<br>        /         /           |        '(   ||<br>       /          .           /          )  ||<br>      |            \          |     ________||<br>     /             |          /     '-------.|<br>    |\            /          |              ||<br>    \/'-._       |           /              ||<br>    //   '.    /'           |               ||<br>   //'.    '. |             \               ||<br>  ///\ '-._  )/             |               ||<br> //// )   .(/               |               ||<br> ||||   ,'' )               /               //<br> ||||  /                    /              ||<br> '\\' /'                    |             // <br>     |'                     \            ||  <br>    /                        |           //  <br>   /'                          \         //   <br>  /'                            |        ||    <br>  '-.___,-.      .-.        ___,'        (/    `;
let demonMonster = String.raw`                                           ,--,  ,.-.<br>              ,                    \,      '-,-','-.' | ._<br>             /|           \    ,   |\         }  )/  / '-,',<br>             [ ,          |\  /|   | |        /  \|  |/'  ,'<br>             | |       ,.'  ',' ', | |  _,...(   (      .',<br>             \  \  __ ,-' '  ,  , '/ |,'      Y     (   /_L\<br>              \  \_\,'',   ' , ,  /  |         )         _,/<br>               \  '  '  ,_ _'_,-,<._.<        /         /<br>                ', '>.,'  '  '   ,., |_      |         /<br>                  \/'  ',   '   ,'  | /__,.-'    _,   '\<br>              -,-..\  _  \  '  /   , / '._) _,-\'       \<br>                \_,,.) /\    '/   / ) (-,, ''    ,       |<br>               ,' )  | \_\       '-'  |  '(               \<br>              /  /'''(   , --, ,' \   |'<'    ,            |<br>             /  /_,--'\   <\  V /> ,' )<_/)  | \      _____)<br>       ,-, ,'   '   (_,\ \    |   /) / __/  /   '----'<br>      (-, \           ) \ ('_.-._)/ /,'    /<br>      | /  '          '/ \\ V   V, /'     /<br>   ,--\(        ,     <_/'\\     ||      /<br>  (   ,''-     \/|         \-A.A-'|     /<br> ,>,_ )_,..(    )\          -,,_-'  _--'<br>(_ \|'   _,/_  /  \_            ,--'<br>\( '   <.,../'     '-.._   _,-'`;
let skeleton = String.raw`                             _.--""-._<br>  .                         ."         ".<br> / \    ,^.         /(     Y             |      )\<br>/   '---. |--'\    (  \__..'--   -   -- -'""-.-'  )<br>|        :|    '>   '.     l_..-------.._l      .'<br>|      __l;__ .'      "-.__.||_.-'v'-._||'"----"<br> \  .-' | |  '              l._       _.'<br>  \/    | |                   l'^^'^^'j<br>        | |                _   \_____/     _<br>        j |               l '--__)-'(__.--' |<br>        | |               | /'---''-----'"1 |  ,-----.<br>        | |               )/  '--' '---'   \'-'  ___  '-.<br>        | |              //  '-'  ''----'  /  ,-'   I'.  \<br>    _   L |_            //  '-.-.''-----' /  /  |   |  '. \<br>     '._' / \         _/(   '/   )- ---' ;  /__.J   L.__.\ :<br>      ''._;/7(-.......'  /        ) (     |  |            | |<br>      '._;l _'--------_/        )-'/     :  |___.    _._./ ;<br>        | |                 .__ )-'\  __  \  \  I   1   / /<br>        '-'                /   '-\-(-'   \ \  '.|   | ,' /<br>                           \__  '-'    __/  '-. '---'',-'<br>                              )-._.-- (        '-----'<br>                             )(  l\ o ('..-.<br>                     _..--' _'-' '--'.-. |<br>              __,,-'' _,,-''            \ \<br>             f'. _,,-'                   \ \<br>            ()--  |                       \ \<br>              \.  |                       /  \<br>                \ \                      |._  |<br>                 \ \                     |  ()|<br>                  \ \                     \  /<br>                   ) '-.                   | |<br>                  // .__)                  | |<br>               _.//7'                      | |<br>             '---'                         j_|<br>                                          (| |<br>                                           |  \<br>                                           |lllj<br>                                           |||||  `;


let castleHallway = String.raw`88888888888888888888888888888888888888888888888888888888888888888888888<br>88.._|      | '-.  | '.  -_-_ _-_  _-  _- -_ -  .'|   |.'|     |  _..88<br>88   '-.._  |    |'!  |'.  -_ -__ -_ _- _-_-  .'  |.;'   |   _.!-'|  88<br>88      | '-!._  |  ';!  ;. _______________ ,'| .-' |   _!.i'     |  88<br>88..__  |     |'-!._ | '.| |_______________||."'|  _!.;'   |     _|..88<br>88   |''"..__ |    |'";.| i|               |'| _!-|   |   _|..-|'    88<br>88   |      |''--..|_ | ';!|               |.'j   |_..!-'|     |     88<br>88   |      |    |   |'-,!_|               ||.!-;'  |    |     |     88<br>88___|______|____!.,.!,.!,!|               |,!,.!.,.!..__|_____|_____88<br>88      |     |    |  |  | |               || |   |   |    |      |  88<br>88      |     |    |..!-;'i|               | |'-..|   |    |      |  88<br>88      |    _!.-j'  | _!,"|               ||!._|  'i-!.._ |      |  88<br>88     _!.-'|    | _."|  !;|               |'.| '-._|    |''-.._  |  88<br>88..-i'     |  _.''|  !-| !|               |.|'-. | ''._ |     |''"..88<br>88   |      |.|    |.|  !| |               ||'. |'!   | '".    |     88<br>88   |  _.-'  |  .'  |.' |/|               |! |'!  ',.|    |-._|     88<br>88  _!"'|     !.'|  .'| .'||               | \|  '. | '._  |   '-._  88<br>88-'    |   .'   |.|  |/| /                 \|'.  |'!    |.|      |'-88<br>88      |_.'|   .' | .' |/                   \  \ |  '.  | '._    |  88<br>88     .'   | .'   |/|  /                     \ |'!   |'.|    '.  |  88<br>88  _.'     !'|   .' | /                       \|  '  |  '.    |'.|  88<br>88888888888888888888888888888888888888888888888888888888888888888888888`;


let bigBat = String.raw`,                                                               ,<br>\'.                                                           .'/<br> ),\                                                         /,( <br>/__\'.                                                     .'/__\<br>\  ''.'-.__                                           __.-'.''  /<br> ')   ''-. \                                         / .-''   ('<br> /   _.--'\ '.          ,               ,          .' /'--._   \<br> |-''      '. '-.__    / \             / \    __.-' .'      ''-|<br> \         _.''-.,_'-.|/\ \    _,_    / /\|.-'_,.-''._         /<br>  '\    .-'       /'-.|| \ |.-"   "-.| / ||.-'\       '-.    /'<br>    )-''        .'   :||  / -.\\ //.- \  ||:   '.        ''-(<br>   /          .'    / \\_ |  /o'^'o\  | _// \    '.          \<br>   \       .-'    .'   '--|  '"/ \"'  |--'   '.    '-.       /<br>    ')  _.'     .'    .--.; |\__"__/| ;.--.    '.     '._  ('<br>    /_.'     .-'  _.-'     \\ \/^\/ //     '-._  '-.     '._\<br>    \     .''_.--'          \\     //          '--._''.     /<br>     '-._' /'            _   \\-.-//   _            '\ '_.-'<br>         '<     _,..--'''|    \'"'/    |'''--..,_     >'<br>          _\  ''--..__   \     '''     /   __..--''  /_<br>         /  '-.__     '''-;    / \    ;-'''     __.-'  \<br>        |    _   ''''--..  \'-' | '-'/  ..--''''   _    |<br>        \     '-.       /   |/--|--\|   \       .-'     /<br>         '-._    '-._  /    |---|---|    \  _.-'    _.-'<br>             ''-._   '/ / / /---|---\ \ \ \'   _.-''<br>                  '-./ / / / \'---'/ \ \ \ \.-'<br>                      ')' '  /'---'\  ' '('<br>                     /'     |       |     '\<br>                    /  /  | |       | |  \  \<br>                .--'  /   | '.     .' |   \  '--.<br>               /_____/|  / \._\   /_./ \  |\_____\<br>              (/      (/'     \) (/     '\)      \)`;

       









document.getElementById('castleDiv').innerHTML = "<pre>" + castleHallway + "</pre>";

document.getElementById('monsterDiv').innerHTML = "<pre>" + bigBat + "</pre>";


// let bigDoor = 
// '
// '.                      |
//   '.                    |       ___________________             ____________
//     '.                  |      |   _______________ |           |.----------.|
//  .    '.                |      | |               | |           ||          ||
//  |'.    '.              |      | |   ___   ___   | |           || //       ||
//  |. '.    '.____________|      | |  |   | |   |  | |           ||          ||
//  |||.|     |            |      | |  |   | |   |  | |           ||          ||
//  |||||     |            |      | |  |   | |   |  | |           ||          ||
//  |||||     |            |      | |  |   | |   |  | |           ||          ||
//  |||||     |            |      | |  |   | |   |  | |           |:__________:|
//  |||||     |        *   |      | |  |   | |   |  | |           '------------'
//  |||||     |    *..'    |      | |  '---___---'__| |
//  |  '|     |     _:_    |      | |    |_____| |__= |
//  |. ()     |    (   )   |      | |   ___   ___ ()| |
//  |||||     |     ) (    |      | |  |   | |   |  | |
//  |||||     | ===========|      | |  |   | |   |  | |
//  |||||     |   | |    | |      | |  |   | |   |  | |
//  |||||     |   | |    | |      | |  |   | |   |  | |
//  |||||    _|___|_|____|_|      | |  |   | |   |  | |
//  |||:|--"" |___|_|____|_|      | |  '---' '---'  | |
// "|  _|..--"'   '      ' |______| |               | |_________________________
//  -'"'                   |______|_|_______________|_|_________________________
 
// ';