"use strict"
// Main functions or actions
// Create an object that includes:
// image
// scenario
// correct answer

// window.addEventListener('load', () => {


let questionPic = document.getElementById("question-pic");
let questionDiv = document.getElementById("questionDiv");
let castleDiv = document.getElementById("castleDiv");
let preDoc = document.getElementById("preDoc");
let scoreDiv = document.getElementById("scoreDiv");
let bigCastle = String.raw`  ',                                                        ,'<br>  ',                                                    ,'<br>    :,                                                ,:<br>    : :,____________________________________________,: :<br>    : :-:       ..........        ..........       :-: :<br>    : :-:                   .    .'                :-: :<br>    : :-:    dHHHHHHHHHHHb        dHHHHHHHHHHHb    :-: :<br>    : :-:   dHHHHHHHHHHHHHb      dHHHHHHHHHHHHHb   :-: :<br>    : :-:   HHHHHHHHHHHHHHH      HHHHHHHHHHHHHHH   :-: :<br>    : :-:    HHHHHHHHHHHHHF       HHHHHHHHHHHHHF   :-: :<br>    : :-:     HHHHHHHHHF''.'.oo.'.'' HHHHHHHHHF    :-: :<br>    : :-:'.            ..'.dHHHHb.'..            .':-: :<br>    : :-:  ''...   ..''   HHHF'HHH  ''..   ...'' :-: :<br>    : :-:     / '''/      'HF  'HF      \\'''\     :-: :<br>    : :-:    /  .    ..              ..    .  \    :-: :<br>    : :/:    :.' '.''/\'............'/\''.' '.:    :\: :<br>    : :/:     :   :\/::\/\/\/^^\/\/\/::\/:   :     :\: :<br>    : :/:     :   ::::/^^^^^^^^^^^^^^\::::   :     :\: :<br>    : :/:     :   :::/^^^^^^^^^^^^^^^^\:::   :     :\: :<br>    : :/:     :   ::/^^^^^^^^^^^^^^^^^^\::   :     :\: :<br>    : :/:     :   :/^^^^^^^^^^^^^^^^^^^^\:   :     :\: :<br>    : :/:     '.  :AAAAAAAAAAAAAAAAAAAAAA:  .'     :\: :<br>    : :/:     :: :'                       :' :     :\: :<br>    : :/:     ::AAAAAAAAAAAAAAAAAAAAAAAAAAAA :     :\: :<br>    : :/:_____:/                            \:_____:\: :<br>    : :/:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA \: :<br>    : ://                                          \\: :<br>    : :/                                            \: :<br>    :  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  :<br>    : /                                              \ :<br>    :/                                                \:<br>     AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA `;

//starter images
let castleGates = String.raw`  ',                                                        ,'<br>  ',                                                    ,'<br>    :,                                                ,:<br>    : :,____________________________________________,: :<br>    : :-:       ..........        ..........       :-: :<br>    : :-:                   .    .'                :-: :<br>    : :-:    dHHHHHHHHHHHb        dHHHHHHHHHHHb    :-: :<br>    : :-:   dHHHHHHHHHHHHHb      dHHHHHHHHHHHHHb   :-: :<br>    : :-:   HHHHHHHHHHHHHHH      HHHHHHHHHHHHHHH   :-: :<br>    : :-:    HHHHHHHHHHHHHF       HHHHHHHHHHHHHF   :-: :<br>    : :-:     HHHHHHHHHF''.'.oo.'.'' HHHHHHHHHF    :-: :<br>    : :-:'.            ..'.dHHHHb.'..            .':-: :<br>    : :-:  ''...   ..''   HHHF'HHH  ''..   ...'' :-: :<br>    : :-:     / '''/      'HF  'HF      \\'''\     :-: :<br>    : :-:    /  .    ..              ..    .  \    :-: :<br>    : :/:    :.' '.''/\'............'/\''.' '.:    :\: :<br>    : :/:     :   :\/::\/\/\/^^\/\/\/::\/:   :     :\: :<br>    : :/:     :   ::::/^^^^^^^^^^^^^^\::::   :     :\: :<br>    : :/:     :   :::/^^^^^^^^^^^^^^^^\:::   :     :\: :<br>    : :/:     :   ::/^^^^^^^^^^^^^^^^^^\::   :     :\: :<br>    : :/:     :   :/^^^^^^^^^^^^^^^^^^^^\:   :     :\: :<br>    : :/:     '.  :AAAAAAAAAAAAAAAAAAAAAA:  .'     :\: :<br>    : :/:     :: :'                       :' :     :\: :<br>    : :/:     ::AAAAAAAAAAAAAAAAAAAAAAAAAAAA :     :\: :<br>    : :/:_____:/                            \:_____:\: :<br>    : :/:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA \: :<br>    : ://                                          \\: :<br>    : :/                                            \: :<br>    :  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  :<br>    : /                                              \ :<br>    :/                                                \:<br>     AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA <br><br>              PRESS NEXT TO ENTER CASTLE NIHIL`;
let castleOutside = String.raw`                              .-----.<br>                            .'       '.<br>                           :      ^v^  :<br>                           :           :<br>                           '           '<br>            |~        www   \.       .'<br>           /.\       /#^^\_   '-/\--'<br>          /#  \     /#%    \   /# \<br>         /#%   \   /#%______\ /#%__\<br>        /#%     \   |= I I ||  |- |<br>        ~~|~~~|~~   |_=_-__|'  |[]|<br>          |[] |_______\__|/_ _ |= | .<br>   ^V^    |-  /= __   __    /-\|= | :;<br>          |= /- /\/  /\/   /=- \.-' :;<br>          | /_.=========._/_.-._\  .:'<br>          |= |-.'.- .'.- |  /|\ |.:'<br>          \  |=|:|= |:| =| |~|~||'|<br>           |~|-|:| -|:|  |-|~|~||=|      ^V^<br>           |=|=|:|- |:|- | |~|~|| |<br>           | |-_~__=_~__=|_^^^^^|/___<br>           |-(=-=-=-=-=-(|=====/=_-=/\<br>           | |=_-= _=- _=| -_=/=_-_/__\ <br>           | |- _ =_-  _-|=_- |]#| I II<br>           |=|_/ \_-_= - |- = |]#| I II<br>           | /  _/ \. -_=| =__|]!!!I_II!!<br>          _|/-'/  ' \_/ \|/' _ ^^^^'.==_^.<br>        _/  _/'-.'-; '-.\_ / \_'\''. ''. ===''.<br>       / .-'  __/_   '.   _/.' .-' '-. ; ====;\<br>       / .-'  __/_   '.   _/.' .-' '-. ; ====;\<br>      /.   './    \ '. \ / -  /  .-'.' ====='  ><br>     /  \  /  .-' '--.  / .' /  '-.' ======.' /`;

//ascii monsters
let skeleton = String.raw`                             _.--""-._<br>  .                         ."         ".<br> / \    ,^.         /(     Y             |      )\<br>/   '---. |--'\    (  \__..'--   -   -- -'""-.-'  )<br>|        :|    '>   '.     l_..-------.._l      .'<br>|      __l;__ .'      "-.__.||_.-'v'-._||'"----"<br> \  .-' | |  '              l._       _.'<br>  \/    | |                   l'^^'^^'j<br>        | |                _   \_____/     _<br>        j |               l '--__)-'(__.--' |<br>        | |               | /'---''-----'"1 |  ,-----.<br>        | |               )/  '--' '---'   \'-'  ___  '-.<br>        | |              //  '-'  ''----'  /  ,-'   I'.  \<br>    _   L |_            //  '-.-.''-----' /  /  |   |  '. \<br>     '._' / \         _/(   '/   )- ---' ;  /__.J   L.__.\ :<br>     ''._;/7(-.......'  /        ) (     |  |            | |<br>      '._;l _'--------_/        )-'/     :  |___.    _._./ ;<br>        | |                 .__ )-'\  __  \  \  I   1   / /<br>        '-'                /   '-\-(-'   \ \  '.|   | ,' /<br>                           \__  '-'    __/  '-. '---'',-'<br>                              )-._.-- (        '-----'<br>                           )(  l\ o ('..-.<br>                     _..--' _'-' '--'.-. |<br>              __,,-'' _,,-''            \ \<br>             f'. _,,-'                   \ \<br>            ()--  |                       \ \<br>              \.  |                       /  \<br>                \ \                      |._  |<br>                 \ \                     |  ()|<br>                  \ \                     \  /<br>                   ) '-.                   | |<br>                  // .__)                  | |<br>               _.//7'                      | |<br>             '---'                         j_|<br>                                          (| |<br>                                           |  \<br>                                           |lllj<br>                     `;
let reaper = String.raw`                                            .""--..__<br>                      _                     []       ''-.._<br>                   .'' ''.                  ||__           '-._<br>                  /    ,-.\                 ||_ '''---..__     '-.<br>                 /    /:::\\               /|//}          ''--._  '.<br>                 |    |:::||              |////}                '-. \<br>                 |    |:::||             //'///                    '.\<br>                 |    |:::||            //  ||'                      '|<br>                 /    |:::|/        _,-//\  ||<br>                /'    |:::|'-,__,-''  |/  \ ||<br>              /'  |   |'' ||           \   |||<br            /'    \   |   ||            |  /||<br>            /'    \   |   ||            |  /||<br>          |'       |  |   |)            \ | ||<br>         |          \ |   /      ,.__    \| ||<br>         /           '         /'    '\   | ||<br>        |                     /        \  / ||<br>        |                     |        | /  ||<br>        /         /           |        '(   ||<br>       /          .           /          )  ||<br>      |            \          |     ________||<br>     /             |          /     '-------.|<br>    |\            /          |              ||<br>    \/'-._       |           /              ||<br>    //   '.    /'           |               ||<br>   //'.    '. |             \               ||<br>  ///\ '-._  )/             |               ||<br> //// )   .(/               |               ||<br> ||||   ,'' )               /               //<br> ||||  /                    /              ||<br> '\\' /'                    |             // <br>     |'                     \            ||  <br>    /                        |           //  <br>   /'                          \         //   <br>  /'                            |        ||    <br>  '-.___,-.      .-.        ___,'        (/    `;
let hornMonster = String.raw`                            ,-.                               <br>       ___,---.__          /'|'\          __,---,___          <br>    ,-'    \'    '-.____,-'  |  '-.____,-'    //    '-.       <br>  ,'        |           ~'\     /'~           |        '.      <br> /      ___//              '. ,'          ,  , \___      \    <br>|    ,-'   '-.__   _         |        ,    __,-'   '-.    |    <br>|   /          /\_  '   .    |    ,      _/\          \   |   <br>\  |           \ \'-.___ \   |   / ___,-'/ /           |  /  <br> \  \           | '._   '\\  |  //'   _,' |           /  /      <br>  '-.\         /'  _ '---'' , . ''---' _  '\         /,-'     <br>     ''       /     \    ,='/ \'=.    /     \       ''          <br>             |__   /|\_,--.,-.--,--._/|\   __|                  <br>             /  './  \\'\ |  |  | /,//' \,'  \                  <br>            /   /     ||--+--|--+-/-|     \   \                 <br>           |   |     /'\_\_\ | /_/_/'\     |   |                <br>            \   \__, \_     '~'     _/ .__/   /            <br>             '-._,-'   '-._______,-'   '-._,-'`;
let demonMonster = String.raw`                                           ,--,  ,.-.<br>              ,                    \,      '-,-','-.' | ._<br>             /|           \    ,   |\         }  )/  / '-,',<br>             [ ,          |\  /|   | |        /  \|  |/'  ,'<br>             | |       ,.'  ',' ', | |  _,...(   (      .',<br>             \  \  __ ,-' '  ,  , '/ |,'      Y     (   /_L\<br>              \  \_\,'',   ' , ,  /  |         )         _,/<br>               \  '  '  ,_ _'_,-,<._.<        /         /<br>                ', '>.,'  '  '   ,., |_      |         /<br>                  \/'  ',   '   ,'  | /__,.-'    _,   '\<br>              -,-..\  _  \  '  /   , / '._) _,-\'       \<br>                \_,,.) /\    '/   / ) (-,, ''    ,       |<br>               ,' )  | \_\       '-'  |  '(               \<br>              /  /'''(   , --, ,' \   |'<'    ,            |<br>             /  /_,--'\   <\  V /> ,' )<_/)  | \      _____)<br>       ,-, ,'   '   (_,\ \    |   /) / __/  /   '----'<br>      (-, \           ) \ ('_.-._)/ /,'    /<br>      | /  '          '/ \\ V   V, /'     /<br>   ,--\(        ,     <_/'\\     ||      /<br>  (   ,''-     \/|         \-A.A-'|     /<br> ,>,_ )_,..(    )\          -,,_-'  _--'<br>(_ \|'   _,/_  /  \_            ,--'<br>\( '   <.,../'     '-.._   _,-'`;
let cyclops = String.raw`           _......._<br>       .-'.'.'.'.'.'.'-.<br>     .'.'.'.'.'.'.'.'.'.'.<br>    /.'.'               '.\<br>    |.'    _.--...--._     |<br>    \    '._.-.....-._.'   /<br>    |     _..- .-. -.._   |<br> .-.'    '.   ((@))  .'   '.-.<br>( ^ \      '--.   .-'     / ^ )<br> \  /         .   .       \  /<br> /          .'     '.  .-    \<br>( _.\    \ (_'-._.-'_)    /._\)<br> '-' \   ' .--.          / '-'<br>     |  / /|_| '-._.'\   |<br>     |   |       |_| |   /<br>     \   '.--.______.'  |<br>      \       .....     |<br>       '.  .'      '.  /<br>         \           .'<br>          '-..___..-'`;
let bigEye = String.raw`           ..,,;;;;;;,,,,<br>     .,;'';;,..,;;;,,,,,.''';;,..<br>  ,,''                    '';;;;,;''<br> ;'    ,;@@;'  ,@@;, @@, ';;;@@;,;';.<br>''  ,;@@@@@'  ;@@@@; ''    ;;@@@@@;;;;<br>   ;;@@@@@;    '''     .,,;;;@@@@@@@;;;<br>  ;;@@@@@@;           , ';;;@@@@@@@@;;;.<br>   '';@@@@@,.  ,   .   ',;;;@@@@@@;;;;;;<br>      .   '';;;;;;;;;,;;;;@@@@@;;' ,.:;'<br>        ''..,,     ''''    '  .,;'<br>             ''''''::''''`;
let bigBat = String.raw`,                                                               ,<br>\'.                                                           .'/<br> ),\                                                         /,( <br>/__\'.                                                     .'/__\<br>\  ''.'-.__                                           __.-'.''  /<br> ')   ''-. \                                         / .-''   ('<br> /   _.--'\ '.          ,               ,          .' /'--._   \<br> |-''      '. '-.__    / \             / \    __.-' .'      ''-|<br> \         _.''-.,_'-.|/\ \    _,_    / /\|.-'_,.-''._         /<br>  '\    .-'       /'-.|| \ |.-"   "-.| / ||.-'\       '-.    /'<br>    )-''        .'   :||  / -.\\ //.- \  ||:   '.        ''-(<br>   /          .'    / \\_ |  /o'^'o\  | _// \    '.          \<br>   \       .-'    .'   '--|  '"/ \"'  |--'   '.    '-.       /<br>    ')  _.'     .'    .--.; |\__"__/| ;.--.    '.     '._  ('<br>    /_.'     .-'  _.-'     \\ \/^\/ //     '-._  '-.     '._\<br>    \     .''_.--'          \\     //          '--._''.     /<br>     '-._' /'            _   \\-.-//   _            '\ '_.-'<br>         '<     _,..--'''|    \'"'/    |'''--..,_     >'<br>          _\  ''--..__   \     '''     /   __..--''  /_<br>         /  '-.__     '''-;    / \    ;-'''     __.-'  \<br>        |    _   ''''--..  \'-' | '-'/  ..--''''   _    |<br>        \     '-.       /   |/--|--\|   \       .-'     /<br>         '-._    '-._  /    |---|---|    \  _.-'    _.-'<br>             ''-._   '/ / / /---|---\ \ \ \'   _.-''<br>                  '-./ / / / \'---'/ \ \ \ \.-'<br>                      ')' '  /'---'\  ' '('<br>                     /'     |       |     '\<br>                    /  /  | |       | |  \  \<br>                .--'  /   | '.     .' |   \  '--.<br>               /_____/|  / \._\   /_./ \  |\_____\<br>              (/      (/'     \) (/     '\)      \)`;


//end game sword? Rewarded after the last card - then display final image
let sword = String.raw`     .-.<br>    (0.0)<br>  '=.|m|.='<br>  .='/@\`=.<br>     @8@<br> _   8@8   _<br>(@__/@8@\__@)<br> '-=:8@8:=-'<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     |:|<br>     \:/`;
let finalImage = String.raw`                           ==(W{==========-      /===-                        <br>                              ||  (.--.)         /===-_---~~~~~~~~~------____  <br>                              | \_,|**|,__      |===-~___                _,-' '<br>                 -==\\        '\ ' '--'   ),    '//~\\   ~~~~'---.___.-~~      <br>             ______-==|        /'\_. .__/\ \    | |  \\           _-~'         <br>       __--~~~  ,-/-==\\      (   | .  |~~~~|   | |   '\        ,'             <br>    _-~       /'    |  \\     )__/==0==-\<>/   / /      \      /               <br>  .'        /       |   \\      /~\___/~~\/  /' /        \   /'                <br> /  ____  /         |    \'\.__/-~~   \  |_/'  /          \/'                  <br>/-'~    ~~~~~---__  |     ~-/~         ( )   /'        _--~'                   <br>                  \_|      /        _) | ;  ),   __--~~                        <br>                    '~~--_/      _-~/- |/ \   '-~ \                            <br>                   {\__--_/}    / \\_>-|)<__\      \                           <br>                   /'   (_/  _-~  | |__>--<__|      |                          <br>                  |   _/) )-~     | |__>--<__|      |                          <br>                  / /~ ,_/       / /__>---<__/      |                          <br>                 o-o _//        /-~_>---<__-~      /                           <br>                 (^(~          /~_>---<__-      _-~                            <br>                ,/|           /__>--<__/     _-~                               <br>             ,//('(          |__>--<__|     /                  .----_          <br>            ( ( '))          |__>--<__|    |                 /' _---_~\        <br>         '-)) )) (           |__>--<__|    |               /'  /     ~\'\      <br>        ,/,'//( (             \__>--<__\    \            /'  //        ||      <br>      ,( ( ((, ))              ~-__>--<_~-_  ~--____---~' _/'/        /'       <br>    '~/  )' ) ,/|                 ~-_~>--<_/-__       __-~ _/                  <br>  ._-~//( )/ )) '                    ~~-'_/_/ /~~~~~~~__--~                    <br>   ;'( ')/ ,)(                              ~~~~~~~~~~                         <br>                                                  `;



//background for castle monsters?????
let castleHallway = String.raw`88888888888888888888888888888888888888888888888888888888888888888888888<br>88.._|      | '-.  | '.  -_-_ _-_  _-  _- -_ -  .'|   |.'|     |  _..88<br>88   '-.._  |    |'!  |'.  -_ -__ -_ _- _-_-  .'  |.;'   |   _.!-'|  88<br>88      | '-!._  |  ';!  ;. _______________ ,'| .-' |   _!.i'     |  88<br>88..__  |     |'-!._ | '.| |_______________||."'|  _!.;'   |     _|..88<br>88   |''"..__ |    |'";.| i|               |'| _!-|   |   _|..-|'    88<br>88   |      |''--..|_ | ';!|               |.'j   |_..!-'|     |     88<br>88   |      |    |   |'-,!_|               ||.!-;'  |    |     |     88<br>88___|______|____!.,.!,.!,!|               |,!,.!.,.!..__|_____|_____88<br>88      |     |    |  |  | |               || |   |   |    |      |  88<br>88      |     |    |..!-;'i|               | |'-..|   |    |      |  88<br>88      |    _!.-j'  | _!,"|               ||!._|  'i-!.._ |      |  88<br>88     _!.-'|    | _."|  !;|               |'.| '-._|    |''-.._  |  88<br>88..-i'     |  _.''|  !-| !|               |.|'-. | ''._ |     |''"..88<br>88   |      |.|    |.|  !| |               ||'. |'!   | '".    |     88<br>88   |  _.-'  |  .'  |.' |/|               |! |'!  ',.|    |-._|     88<br>88  _!"'|     !.'|  .'| .'||               | \|  '. | '._  |   '-._  88<br>88-'    |   .'   |.|  |/| /                 \|'.  |'!    |.|      |'-88<br>88      |_.'|   .' | .' |/                   \  \ |  '.  | '._    |  88<br>88     .'   | .'   |/|  /                     \ |'!   |'.|    '.  |  88<br>88  _.'     !'|   .' | /                       \|  '  |  '.    |'.|  88<br>88888888888888888888888888888888888888888888888888888888888888888888888`;
let castleDoorway = String.raw`           _I_<br>         .~'_'~.<br>   /(  ,^ .~ ~. ^.  )\<br>   \ \/ .^ |   ^. \/ /<br>    Y  /   |     \  Y            ___.oOo.___ <br>    | Y    |      Y |           |           |<br>    | |    |      | |           |  //       |<br>    | |    |      | |           |           |<br>    | |    |      | |           |           |<br>    |.|    |______|.|           |           |<br>    |.|   /       |.|          _|___________|_<br>    |:|  /        |:|         '^^^^^^^^^^^^^^^'<br>    |:| /         |:|<br>____|_|/          |_|_____________________________<br>____]H[           ]H[_____________________________<br>     /             \<br>`;
let castleRoom = String.raw` ____________________________________________________________________________<br>|: : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : |<br>| : : : : : : :_______________________________: : : : : : : : : : : : : : : :|<br>|: : : : : : :|!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!|: : : : : : : : : : : : : : : |<br>| : : : : : : |.-=^=-.-=^=-.-=^=-.-=^=-.-=^=-.| : : : : : : : : : : : : : : :|<br>|: : : : : : :'|     '     '     '     '     |': : : : : : : : : ____: : : : |<br>| : : : : : : :|                             |: : : : : : : : : /    \: : : :|<br>|: : : : : : : |                             | : : : : : : : : |//    |: : : |<br>| : : : : : : :|                             |: : : : : : : : :|      | : : :|<br>|==============|                             |==================\____/=======|<br>|              |                             |              ,    ,;;,    ,   |<br>|              |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|             _d___;(;;);___b_  |<br>|              |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|            =======';;'======= |<br>|         ||   ==============(_)==============   ||         /""""""""""""\   |<br>|         ||        _________~|~_________        ||         |     '(,    |   |<br>|         \\_____  (_____________________)  _____//         |  O  )   O  |   |<br>|          |_____)          )   (          (_____|          |  | (@@) |  |   |<br>|__________||___||__________(   )__________||___||__________|_/!\@@@@/!\_|__lc<br>         .;|';;;'|;;;;;;;;;;_) (_;;;;;;;;;;|';;;'|;.       ================<br>        :;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:<br>        :;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:<br>         ':::::::::::::::::::::::::::::::::::::::::'`;
let bigDoor =
    `
'.                      |
  '.                    |       ___________________             ____________
    '.                  |      |   _______________ |           |.----------.|
 .    '.                |      | |               | |           ||          ||
 |'.    '.              |      | |   ___   ___   | |           || //       ||
 |. '.    '.____________|      | |  |   | |   |  | |           ||          ||
 |||.|     |            |      | |  |   | |   |  | |           ||          ||
 |||||     |            |      | |  |   | |   |  | |           ||          ||
 |||||     |            |      | |  |   | |   |  | |           ||          ||
 |||||     |            |      | |  |   | |   |  | |           |:__________:|
 |||||     |        *   |      | |  |   | |   |  | |           '------------'
 |||||     |    *..'    |      | |  '---___---'__| |
 |  '|     |     _:_    |      | |    |_____| |__= |
 |. ()     |    (   )   |      | |   ___   ___ ()| |
 |||||     |     ) (    |      | |  |   | |   |  | |
 |||||     | ===========|      | |  |   | |   |  | |
 |||||     |   | |    | |      | |  |   | |   |  | |
 |||||     |   | |    | |      | |  |   | |   |  | |
 |||||    _|___|_|____|_|      | |  |   | |   |  | |
 |||:|--"" |___|_|____|_|      | |  '---' '---'  | |
"|  _|..--"'   '      ' |______| |               | |_________________________
 -'"'                   |______|_|_______________|_|_________________________
 
`;
let clicks = 0;
let monsterDiv = document.getElementById("monsterDiv");
console.log(clicks)

//document.getElementById('monsterDiv').innerHTML = "<pre>" + skeleton + "</pre>";
document.getElementById('castleDiv').innerHTML = "<pre>" + castleHallway + "</pre>";

function Monster(q, correctanswer, choices, image, background) {
    this.q = q;
    this.correctAnswer = correctanswer;
    this.choices = choices;
    this.image = image;
    this.background = background;
}
function Intro(ascii, text) {
    this.ascii = ascii;
    this.text = text;
}
let introPics = [];
let monsterObjects = [];
let finalArray = [];
finalArray.push(sword);
finalArray.push(finalImage);
let ca = "";

let q1 = new Intro(castleOutside, "Out of the Unerbittlich Forest our Champion approaches Castle Nihil. Forged in the shadows of the endless night, he has come for his Eternity!");
let q2 = new Intro(castleGates, "Approaching the gates wet with untouched dew, our Champion takes in the stench of those who came before. Draped in the cloak of night he strides into the certain doom of Castle Nihil.");
let m1 = new Monster("Our champion hears the rattle of the Skeleton King. Should he swing his axe or barge through?", "swing", "(swing) (barge)", skeleton, castleHallway);
let m2 = new Monster("From the depths of the dark a reaper emerges. It's shadow cast long by a solo torch. Does our champion swing his axe or this torch?", "torch", "(swing) (torch)", reaper, castleRoom);
let m3 = new Monster("The cold stone is scraped by the battle hardened horns of the wandering great Netvor. The primal sound echoes through the hallway. Does our champion wield his strength against this mighty foe or keep silent as it passes?", "keep silent", "(wield strength) (keep silent)", hornMonster, castleHallway);
let m4 = new Monster("The snarling is louder. The breath of the Demon Lord is lit by the moon's light. Should our champion confront the beast or hide?", "hide", "(confront) (hide)", demonMonster, bigDoor);
let m5 = new Monster("The lumbering sound of the cyclop's step shakes the halls around Nihil. Does our champion swing for it's knees or run through its legs?", "swing", "(run) (swing)", cyclops, castleDoorway);
let m6 = new Monster("The Abyss of the Known Unknown opens the Eye of All. The brightness of its iris illuminates the room. Does our champion approach in hopes of a vision of destiny or lie still in the shadows of Castle Nihil? ", "approach", "(lie still) (approach)", bigEye, castleRoom);
let m7 = new Monster("The shreik of the eternally nocturnal Fladdermus pierces through the walls of Nihil, alerting all who live that certain doom is upon them. Does our champion battle this wretched foe or dodge it's continuous swoops?", "dodge", "(dodge) (battle)", bigBat, castleDoorway);
// let m8 = new Monster("(Scenario goes here) What do you do?", "hide", );
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
// monsterObjects.push(m8);






//connecting the input button and enter button - reset button is further down that resets the score
let input = document.getElementById('inputBox').value;
let enterButton = document.getElementById('enterButton');

let currentScore = 0;
let highScore = 0;
localStorage.setItem('highScore', 0);


function pickQuestion() {
    //testing out next button
    let nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', function nextButtonClick() {

        // changes color back to orginal
        document.getElementById('monsterDiv').style.color = "greenyellow";

        document.getElementById('inputBox').value = "";
        //this randomizes the array of monster objects - returning and splicing objects as they go so you only see every monster once
        if (monsterObjects.length > 0) {
            let rando = Math.floor(Math.random() * monsterObjects.length);
            let pickedQuestion = monsterObjects[rando];
            answerDiv.innerHTML = pickedQuestion.choices;
            monsterDiv.innerHTML = "<pre>" + pickedQuestion.image + "</pre>";
            castleDiv.innerHTML = "<pre>" + pickedQuestion.background + "</pre";
            questionDiv.innerHTML = pickedQuestion.q;
            console.log(pickedQuestion.correctAnswer);
            ca = pickedQuestion.correctAnswer;
            monsterObjects.splice(rando, 1);
        }
        else {
            for (let i = 0; i < finalArray.length; i++) {
                console.log(finalArray);
                monsterDiv.innerHTML = "<pre>" + finalArray[i] + "</pre>";
                document.getElementById('castleDiv').textContent = "Eternal Champion!";
                document.getElementById('castleDiv').style.color = "#FFFFFF";
                document.getElementById('inputBox').value = "CHAMPION!"
                document.getElementById('questionDiv').textContent = "Our Champion has survived the night. The tumult and chaos of the fallen Castle Nihil was no match for his strength. Hail our Eternal Champion!"
                document.getElementById('answerDiv').textContent = "";

            }
        }


    })



    enterButton.addEventListener('click', function enterButtonClick() {



        // checks the input for right answer
        if (document.getElementById('inputBox').value == ca) {
            
            document.getElementById('monsterDiv').style.color = "red";
            document.getElementById('inputBox').value = "You Survived";
            document.getElementById('inputBox').style.fontSize = "small";
            currentScore = currentScore + 1;
            document.getElementById('scoreDivNumber').textContent = currentScore;


            if (currentScore > parseInt(localStorage.getItem('highScore'))) {
                localStorage.setItem('highScore', currentScore);
                document.getElementById('highScoreDivNumber').textContent = localStorage.getItem('highScore');
            }
        } else {
            document.getElementById('inputBox').value = "You Died"
            document.getElementById('monsterDiv').style.color = "#FFFFFF";
            document.getElementById('castleDiv').style.backgroundColor = "#FF0000";
            document.getElementById('castleDiv').style.fontSize = "xx-large";
            document.getElementById('castleDiv').textContent = "YOU DIED";
            document.getElementById('castleDiv').style.color = "#FFFFFF";
            document.getElementById('nextButton').disabled = true;
            

        }
    })

}



monsterDiv.addEventListener('click', function () {
    clicks = 1;
    monsterDiv.innerHTML = "<pre>" + castleGates + "</pre>";
    questionDiv.innerHTML = q2.text;
    clicks++;
    console.log(clicks);
    if (clicks >= 2) {
        pickQuestion();
        clicks = null;
    }
})


//using the next button to reset reset reset reset reset 
let reset = document.getElementById('resetButton');
reset.addEventListener('click', function () {
    document.getElementById('nextButton').disabled = false;
    monsterObjects = [m1,m2,m3,m4,m5,m6,m7];
    console.log(monsterObjects);
    //monsterObjects.push(m1);
    //monsterObjects.push(m2);
    //monsterObjects.push(m3);
    //monsterObjects.push(m4);
    //monsterObjects.push(m5);
    //monsterObjects.push(m6);
    //monsterObjects.push(m7);
    //console.log(monsterObjects);

    currentScore = 0;

    //below resets the dom to the original css
    document.getElementById('scoreDivNumber').textContent = "0";
    document.getElementById('inputBox').value = '';
    document.getElementById('monsterDiv').style.color = "greenyellow";
    document.getElementById('castleDiv').style.backgroundColor = "black";
    document.getElementById('castleDiv').style.fontSize = "120%";
    document.getElementById('answerDiv').textContent = "";
    document.getElementById('castleDiv').textContent = '';
    document.getElementById('castleDiv').style.color = "purple";

    //brings the first image back up when reset clicked
    monsterDiv.innerHTML = "<pre>" + castleGates + "</pre>";
    questionDiv.innerHTML = q2.text;
    castleDiv.innerHTML = null;

    //this nulls the click in the div that was multiplying the click counter
    monsterDiv.addEventListener('click', function () {

        clicks = null;
    })

})

//starter image
monsterDiv.innerHTML = "<pre>" + castleOutside + "</pre>";
questionDiv.innerHTML = q1.text;
castleDiv.innerHTML = null;

//pickQuestion();
// });