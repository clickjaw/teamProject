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

//starter images
let castleGates = String.raw`  ',                                                        ,'<br>  ',                                                    ,'<br>    :,                                                ,:<br>    : :,____________________________________________,: :<br>    : :-:       ..........        ..........       :-: :<br>    : :-:                   .    .'                :-: :<br>    : :-:    dHHHHHHHHHHHb        dHHHHHHHHHHHb    :-: :<br>    : :-:   dHHHHHHHHHHHHHb      dHHHHHHHHHHHHHb   :-: :<br>    : :-:   HHHHHHHHHHHHHHH      HHHHHHHHHHHHHHH   :-: :<br>    : :-:    HHHHHHHHHHHHHF       HHHHHHHHHHHHHF   :-: :<br>    : :-:     HHHHHHHHHF''.'.oo.'.'' HHHHHHHHHF    :-: :<br>    : :-:'.            ..'.dHHHHb.'..            .':-: :<br>    : :-:  ''...   ..''   HHHF'HHH  ''..   ...'' :-: :<br>    : :-:     / '''/      'HF  'HF      \\'''\     :-: :<br>    : :-:    /  .    ..              ..    .  \    :-: :<br>    : :/:    :.' '.''/\'............'/\''.' '.:    :\: :<br>    : :/:     :   :\/::\/\/\/^^\/\/\/::\/:   :     :\: :<br>    : :/:     :   ::::/^^^^^^^^^^^^^^\::::   :     :\: :<br>    : :/:     :   :::/^^^^^^^^^^^^^^^^\:::   :     :\: :<br>    : :/:     :   ::/^^^^^^^^^^^^^^^^^^\::   :     :\: :<br>    : :/:     :   :/^^^^^^^^^^^^^^^^^^^^\:   :     :\: :<br>    : :/:     '.  :AAAAAAAAAAAAAAAAAAAAAA:  .'     :\: :<br>    : :/:     :: :'                       :' :     :\: :<br>    : :/:     ::AAAAAAAAAAAAAAAAAAAAAAAAAAAA :     :\: :<br>    : :/:_____:/                            \:_____:\: :<br>    : :/:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA \: :<br>    : ://                                          \\: :<br>    : :/                                            \: :<br>    :  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  :<br>    : /                                              \ :<br>    :/                                                \:<br>     AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA `;
let castleOutside = String.raw`                              .-----.<br>                            .'       '.<br>                           :      ^v^  :<br>                           :           :<br>                           '           '<br>            |~        www   \.       .'<br>           /.\       /#^^\_   '-/\--'<br>          /#  \     /#%    \   /# \<br>         /#%   \   /#%______\ /#%__\<br>        /#%     \   |= I I ||  |- |<br>        ~~|~~~|~~   |_=_-__|'  |[]|<br>          |[] |_______\__|/_ _ |= | .<br>   ^V^    |-  /= __   __    /-\|= | :;<br>          |= /- /\/  /\/   /=- \.-' :;<br>          | /_.=========._/_.-._\  .:'<br>          |= |-.'.- .'.- |  /|\ |.:'<br>          \  |=|:|= |:| =| |~|~||'|<br>           |~|-|:| -|:|  |-|~|~||=|      ^V^<br>           |=|=|:|- |:|- | |~|~|| |<br>           | |-_~__=_~__=|_^^^^^|/___<br>           |-(=-=-=-=-=-(|=====/=_-=/\<br>           | |=_-= _=- _=| -_=/=_-_/__\ <br>           | |- _ =_-  _-|=_- |]#| I II<br>           |=|_/ \_-_= - |- = |]#| I II<br>           | /  _/ \. -_=| =__|]!!!I_II!!<br>          _|/-'/  ' \_/ \|/' _ ^^^^'.==_^.<br>        _/  _/'-.'-; '-.\_ / \_'\''. ''. ===''.<br>       / .-'  __/_   '.   _/.' .-' '-. ; ====;\<br>       / .-'  __/_   '.   _/.' .-' '-. ; ====;\<br>      /.   './    \ '. \ / -  /  .-'.' ====='  ><br>     /  \  /  .-' '--.  / .' /  '-.' ======.' /`;

//ascii monsters
let skeleton = String.raw`                             _.--""-._<br>  .                         ."         ".<br> / \    ,^.         /(     Y             |      )\<br>/   '---. |--'\    (  \__..'--   -   -- -'""-.-'  )<br>|        :|    '>   '.     l_..-------.._l      .'<br>|      __l;__ .'      "-.__.||_.-'v'-._||'"----"<br> \  .-' | |  '              l._       _.'<br>  \/    | |                   l'^^'^^'j<br>        | |                _   \_____/     _<br>        j |               l '--__)-'(__.--' |<br>        | |               | /'---''-----'"1 |  ,-----.<br>        | |               )/  '--' '---'   \'-'  ___  '-.<br>        | |              //  '-'  ''----'  /  ,-'   I'.  \<br>    _   L |_            //  '-.-.''-----' /  /  |   |  '. \<br>     '._' / \         _/(   '/   )- ---' ;  /__.J   L.__.\ :<br>      ''._;/7(-.......'  /        ) (     |  |            | |<br>      '._;l _'--------_/        )-'/     :  |___.    _._./ ;<br>        | |                 .__ )-'\  __  \  \  I   1   / /<br>        '-'                /   '-\-(-'   \ \  '.|   | ,' /<br>                           \__  '-'    __/  '-. '---'',-'<br>                              )-._.-- (        '-----'<br>                             )(  l\ o ('..-.<br>                     _..--' _'-' '--'.-. |<br>              __,,-'' _,,-''            \ \<br>             f'. _,,-'                   \ \<br>            ()--  |                       \ \<br>              \.  |                       /  \<br>                \ \                      |._  |<br>                 \ \                     |  ()|<br>                  \ \                     \  /<br>                   ) '-.                   | |<br>                  // .__)                  | |<br>               _.//7'                      | |<br>             '---'                         j_|<br>                                          (| |<br>                                           |  \<br>                                           |lllj<br>                     `;
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


document.getElementById('monsterDiv').innerHTML = "<pre>" + skeleton + "</pre>";
document.getElementById('castleDiv').innerHTML = "<pre>" + castleHallway + "</pre>";

function Question(q, answer, image){
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
    castleDiv.innerHTML = "<pre>" + q2. + "</pre>";
    console.log("Ree");
    
})

castleDiv.innerHTML = "<pre>" + castleOutside + "</pre>";
questionBox.innerHTML = q1.text;

//pickQuestion();
