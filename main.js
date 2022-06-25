const counter = document.getElementById('counter');
const main = document.getElementById('main');
const message = document.getElementById('message');
const button = document.getElementById('button');
let cantainar = document.getElementsByClassName("cantainar");
let n = 0
// button.onclick = butotnClick;
button.addEventListener('click', butotnClick);
function butotnClick(){
  if(n <= 264){
    n++
    document.querySelector("h4").innerText = (n)
    switch (n) {
      case 1:
        document.querySelector("h3").innerText = (2);
        break;
      case 2:
        document.querySelector("h3").innerText = (4);
        document.getElementById('main').src = 'img/food_hamburger.png';
        break;
        case 3:
          document.querySelector("h3").innerText = (8);
        break;
      case 4:
        document.querySelector("h3").innerText = (16);
        break;
      case 5:
        document.querySelector("h3").innerText = (32);
        document.getElementById('main').src = 'img/pan_bread_1kin_yama.png';
        break;
        case 6:
          document.querySelector("h3").innerText = (64);
          break;
          case 7:
            document.querySelector("h3").innerText = (128);
            document.getElementById('main').src = 'img/pet_cat_sit.png';
            break;
            case 8:
              document.querySelector("h3").innerText = (256);
              break;
              case 9:
                document.querySelector("h3").innerText = (512);
                document.getElementById('main').src = 'img/dog_shibainu_brown.png';
                break;
                case 10:
        document.querySelector("h3").innerText = (1024);
        break;
      case 11:
        document.querySelector("h3").innerText = (2048);
        document.getElementById('main').src = 'img/dog_akitainu.png';
        break;
      case 12:
        document.querySelector("h3").innerText = (4096);
        break;
        case 13:
          document.querySelector("h3").innerText = (8192);
          document.getElementById('main').src = 'img/school_blazer_boy2.png';
          break;
          case 14:
            document.querySelector("h3").innerText = (16384);
        document.getElementById('main').src = 'img/osumousan_kesyou_mawashi.png';
        break;
        case 15:
          document.querySelector("h3").innerText = (32768);
          break;
          case 16:
            document.querySelector("h3").innerText = (65536);
            document.getElementById('cantainar').style.backgroundImage = "url(img/bg_chiheisen_green.jpg)";
            document.getElementById('main').src = 'img/animal_hippo.png';
            break;
      case 17:
        document.querySelector("h3").innerText = (131072);
        document.getElementById('main').src = 'img/animal_bear_hokkyoku.png';
        break;
      case 18:
        document.querySelector("h3").innerText = (262144);
        document.getElementById('main').src = 'img/animal_zou.png';
        break;
      case 19:
        document.querySelector("h3").innerText = (524288);
        break;
      case 20:
        document.querySelector("h3").innerText = (262144);
        document.getElementById('main').src = 'img/car_truck.png';
        break;
      case 21:
          document.querySelector("h3").innerText = (1048576);
          document.getElementById('main').src = 'img/suiei_pool.png';
        break;
      case 22:
        document.querySelector("h3").innerText = (2097152);
        break;
      case 23:
          document.querySelector("h3").innerText = (4194304);
          document.getElementById('main').src = 'img/ship_junshisen.png';
          document.getElementById('cantainar').style.backgroundImage = "url(img/bg_ocean_suiheisen.jpg)";
        break;
      case 24:
        document.querySelector("h3").innerText = (8388608);
        break;
      case 25:
          document.querySelector("h3").innerText = (16777216);
          document.getElementById('main').src = 'img/landmark_abenoharukasu.png';
          break;
      case 26:
        document.querySelector("h3").innerText = (33554432);
        document.getElementById('main').src = 'img/tokusatsu_hero_kaiju.png';
        break;
      case 27:
        document.querySelector("h3").innerText = (67108864);
        break;
      case 28:
        document.querySelector("h3").innerText = (134217728);
        document.getElementById('main').src = 'img/fujisan.png';
        break;
      case 29:
          document.querySelector("h3").innerText = (268435456);
          document.getElementById('main').src = 'img/mount_everest.png';
        break;
      case 30:
        document.querySelector("h3").innerText = (536870912);
        break;
      case 31:
        document.querySelector("h3").innerText = (1073741824);
        break;
      case 32:
        document.querySelector("h3").innerText = (2147483648);
        document.getElementById('main').src = 'img/1_hokkaidou.png';
        break;
      case 33:
        document.querySelector("h3").innerText = (4294967296);
        break;
      case 34:
        document.querySelector("h3").innerText = (8589934592);
        break;
      case 35:
        document.querySelector("h3").innerText = (17179869184);
        document.getElementById('main').src = 'img/nihonchizu_area.png';
        break;
      case 36:
        document.querySelector("h3").innerText = (34359738368);
        break;
      case 37:
        document.querySelector("h3").innerText = (68719476736);
        break;
      case 38:
        document.querySelector("h3").innerText = (137438953472);
        break;
      case 39:
        document.querySelector("h3").innerText = (274877906944);
        break;
      case 40:
        document.querySelector("h3").innerText = (549755813888);
        document.getElementById('main').src = 'img/america_daitouryousen_man2.png';
        break;
      case 41:
        document.querySelector("h3").innerText = (1099511627776);
        break;
      case 42:
        document.querySelector("h3").innerText = (2199023255552);
        break;
      case 43:
        document.querySelector("h3").innerText = (4398046511104);
        break;
      case 44:
        document.querySelector("h3").innerText = (8796093022208);
        document.getElementById('main').src = 'img/sekaichizu.png';
        break;
      case 45:
        document.querySelector("h3").innerText = (17592186044416);
        break;
      case 46:
        document.querySelector("h3").innerText = (35184372088832);
        document.getElementById('main').src = 'img/space04_earth.png';
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space.jpg)";
        break;
      case 47:
        document.querySelector("h3").innerText = (70368744177664);;
        break;
      case 48:
        document.querySelector("h3").innerText = (140737488355328);
        break;
      case 49:
        document.querySelector("h3").innerText = (281474976710656);
        break;
      case 50:
        document.querySelector("h3").innerText = (1125899906842624);
        document.getElementById('main').src = 'img/space07_saturn.png';
        break;
      case 51:
        document.querySelector("h3").innerText = (2251799813685248);
        break;
      case 52:
        document.querySelector("h3").innerText = (4503599627370496);
        break;
      case 53:
        document.querySelector("h3").innerText = ("9007199254740992");
        document.getElementById('main').src = 'img/space01_sun.png';
        break;
      case 54:
        document.querySelector("h3").innerText = ("18014398509481984");
        break;
      case 55:
        document.querySelector("h3").innerText = ("36028797018963968");
        break;
      case 56:
        document.querySelector("h3").innerText = ("72057594037927936");
        break;
      case 57:
        document.querySelector("h3").innerText = ("144115188075855872");
        break;
      case 58:
        document.querySelector("h3").innerText = ("288230376151711744");
        document.getElementById('main').src = 'img/space_grand_cross.png';
        break;
      case 59:
        document.querySelector("h3").innerText = ("576460752303423488");
        break;
      case 60:
        document.querySelector("h3").innerText = ("1152921504606846976");
        break;
      case 61:
        document.querySelector("h3").innerText = ("2305843009213693952");
        break;
      case 62:
        document.querySelector("h3").innerText = ("4611686018427387904");
        break;
      case 63:
        document.querySelector("h3").innerText = ("9223372036854775808");
        break;
      case 64:
        document.querySelector("h3").innerText = ("18446744073709551616");
        break;
      case 65:
        document.querySelector("h3").innerText = ("36893488147419103232");
        break;
      case 66:
        document.querySelector("h3").innerText = ("73786976294838206464");
        break;
      case 67:
        document.querySelector("h3").innerText = ("147573952589676412928");
        document.getElementById('main').src = 'img/黒1.png';
        break;
      case 68:
        document.querySelector("h3").innerText = ("295147905179352825856");
        break;
      case 69:
        document.querySelector("h3").innerText = ("590295810358705651712");
        break;
      case 70:
        document.querySelector("h3").innerText = ("1180591620717411303424");
        break;
      case 71:
        document.querySelector("h3").innerText =("2361183241434822606848");
        break;
      case 72:
        document.querySelector("h3").innerText = ("4722366482869645213696");
        break;
      case 73:
        document.querySelector("h3").innerText = ("9444732965739290427392");
        break;
      case 74:
        document.querySelector("h3").innerText = ("18889465931478580854784");
        break;
      case 75:
        document.querySelector("h3").innerText = ("37778931862957161709568");
        break;
      case 76:
        document.querySelector("h3").innerText = ("75557863725914323419136");
        break;
      case 77:
        document.querySelector("h3").innerText = ("151115727451828646838272");
        break;
      case 78:
        document.querySelector("h3").innerText =("302231454903657293676544");
        document.getElementById('main').src = 'img/黒２.png';
        break;
      case 79:
        document.querySelector("h3").innerText = ("604462909807314587353088");
        break;
      case 80:
        document.querySelector("h3").innerText = ("1208925819614629174706176");
        break;
      case 81:
        document.querySelector("h3").innerText = ("2417851639229258349412352");
        break;
      case 82:
        document.querySelector("h3").innerText = ("4835703278458516698824704");
        break;
      case 83:
        document.querySelector("h3").innerText = ("9671406556917033397649408");
        break;
      case 84:
        document.querySelector("h3").innerText = ("19342813113834066795298816");
        break;
      case 85:
        document.querySelector("h3").innerText = ("38685626227668133590597632");
        break;
      case 86:
        document.querySelector("h3").innerText = ("77371252455336267181195264");
        break;
      case 87:
        document.querySelector("h3").innerText = ("154742504910672534362390528");
        break;
      case 88:
        document.querySelector("h3").innerText = ("309485009821345068724781056");
        break;
      case 89:
        document.querySelector("h3").innerText = ("618970019642690137449562112");
        break;
      case 90:
        document.querySelector("h3").innerText = ("1237940039285380274899124224");
        break;
      case 91:
        document.querySelector("h3").innerText = ("2475880078570760549798248448");
        break;
        case 92:
        document.querySelector("h3").innerText = ("4951760157141521099596496896");
        break;
      case 93:
        document.querySelector("h3").innerText = ("9903520314283042199192993792");
        break;
      case 94:
        document.querySelector("h3").innerText = ("19807040628566084398385987584");
        break;
      case 95:
        document.querySelector("h3").innerText = ("39614081257132168796771975168");
        break;
      case 96:
        document.querySelector("h3").innerText = ("79228162514264337593543950336");
        break;
      case 97:
        document.querySelector("h3").innerText = ("158456325028528675187087900672");
        break;
      case 98:
        document.querySelector("h3").innerText = ("316912650057057350374175801344");
        break;
        case 99:
          document.querySelector("h3").innerText = ("633825300114114700748351602688");
          document.getElementById('main').src = 'img/タイトルなし.png';
        break;
      case 100:
        document.querySelector("h3").innerText = ("1267650600228229401496703205376");
        break;
      case 101:
        document.querySelector("h3").innerText = ("2535301200456458802993406410752");
        break;
      case 102:
        document.querySelector("h3").innerText = ("5070602400912917605986812821504");
        break;
      case 103:
        document.querySelector("h3").innerText = ("10141204801825835211973625643008");
        break;
      case 104:
        document.querySelector("h3").innerText = ("20282409603651670423947251286016");
        break;
      case 105:
        document.querySelector("h3").innerText = ("40564819207303340847894502572032");
        break;
      case 106:
        document.querySelector("h3").innerText = ("81129638414606681695789005144064");
        break;
      case 107:
        document.querySelector("h3").innerText = ("162259276829213363391578010288128");
        break;
      case 108:
        document.querySelector("h3").innerText = ("324518553658426726783156020576256");
        break;
      case 109:
        document.querySelector("h3").innerText = ("649037107316853453566312041152512");
        break;
      case 110:
        document.querySelector("h3").innerText = ("1298074214633706907132624082305024");
        break;
      case 111:
        document.querySelector("h3").innerText = ("2596148429267413814265248164610048");
        break;
      case 112:
        document.querySelector("h3").innerText = ("5192296858534827628530496329220096");
        break;
      case 113:
        document.querySelector("h3").innerText = ("10384593717069655257060992658440192");
        break;
      case 114:
        document.querySelector("h3").innerText = ("20769187434139310514121985316880384");
        break;
      case 115:
        document.querySelector("h3").innerText = ("41538374868278621028243970633760768");
        break;
      case 116:
        document.querySelector("h3").innerText = ("83076749736557242056487941267521536");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space2.jpg)";
        break;
      case 117:
        document.querySelector("h3").innerText = ("166153499473114484112975882535043072");
        break;
      case 118:
        document.querySelector("h3").innerText = ("332306998946228968225951765070086144");
        break;
      case 119:
        document.querySelector("h3").innerText = ("664613997892457936451903530140172288");
        break;
      case 120:
        document.querySelector("h3").innerText = ("1329227995784915872903807060280344576");
        break;
      case 121:
        document.querySelector("h3").innerText = ("2658455991569831745807614120560689152");
        break;
      case 122:
        document.querySelector("h3").innerText = ("5316911983139663491615228241121378304");
        break;
      case 123:
        document.querySelector("h3").innerText = ("10633823966279326983230456482242756608");
        break;
      case 124:
        document.querySelector("h3").innerText = ("21267647932558653966460912964485513216");
        break;
      case 125:
        document.querySelector("h3").innerText = ("42535295865117307932921825928971026432");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space3.jpg)";

        break;
      case 126:
        document.querySelector("h3").innerText = ("85070591730234615865843651857942052864");
        break;
      case 127:
        document.querySelector("h3").innerText = ("170141183460469231731687303715884105728");
        break;
      case 128:
        document.querySelector("h3").innerText = ("340282366920938463463374607431768211456");
        break;
      case 129:
        document.querySelector("h3").innerText = ("680564733841876926926749214863536422912");
        break;
      case 130:
        document.querySelector("h3").innerText = ("1361129467683753853853498429727072845824");
        break;
      case 131:
        document.querySelector("h3").innerText = ("2722258935367507707706996859454145691648");
        break;
      case 132:
        document.querySelector("h3").innerText = ("5444517870735015415413993718908291383296");
        break;
      case 133:
        document.querySelector("h3").innerText = ("10889035741470030830827987437816582766592");
        break;
      case 134:
        document.querySelector("h3").innerText = ("21778071482940061661655974875633165533184");
        break;
      case 135:
        document.querySelector("h3").innerText = ("43556142965880123323311949751266331066368");
        break;
      case 136:
        document.querySelector("h3").innerText = ("87112285931760246646623899502532662132736");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space4.jpg)";
        break;
      case 137:
        document.querySelector("h3").innerText = ("174224571863520493293247799005065324265472");
        break;
      case 138:
        document.querySelector("h3").innerText = ("348449143727040986586495598010130648530944");
        break;
      case 139:
        document.querySelector("h3").innerText = ("696898287454081973172991196020261297061888");
        break;
      case 140:
        document.querySelector("h3").innerText = ("1393796574908163946345982392040522594123776");
        break;
      case 141:
        document.querySelector("h3").innerText = ("2787593149816327892691964784081045188247552");
        break;
      case 142:
        document.querySelector("h3").innerText = ("5575186299632655785383929568162090376495104");
        break;
      case 143:
        document.querySelector("h3").innerText = ("11150372599265311570767859136324180752990208");
        break;
      case 144:
        document.querySelector("h3").innerText = ("22300745198530623141535718272648361505980416");
        break;
      case 145:
        document.querySelector("h3").innerText = ("44601490397061246283071436545296723011960832");
        break;
      case 146:
        document.querySelector("h3").innerText = ("89202980794122492566142873090593446023921664");
        break;
      case 147:
        document.querySelector("h3").innerText = ("178405961588244985132285746181186892047843328");
        break;
      case 148:
        document.querySelector("h3").innerText = ("356811923176489970264571492362373784095686656");
        break;
      case 149:
        document.querySelector("h3").innerText = ("713623846352979940529142984724747568191373312");
        break;
      case 150:
        document.querySelector("h3").innerText = ("1427247692705959881058285969449495136382746624");
        break;
      case 151:
        document.querySelector("h3").innerText = ("2854495385411919762116571938898990272765493248");
        break;
      case 152:
        document.querySelector("h3").innerText = ("5708990770823839524233143877797980545530986496");
        break;
      case 153:
        document.querySelector("h3").innerText = ("11417981541647679048466287755595961091061972992");
        break;
      case 154:
        document.querySelector("h3").innerText = ("22835963083295358096932575511191922182123945984");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space5.jpg)";
        document.getElementById('main').src = 'img/黒1.png';
        break;
      case 155:
        document.querySelector("h3").innerText = ("45671926166590716193865151022383844364247891968");
        break;
      case 156:
        document.querySelector("h3").innerText = ("91343852333181432387730302044767688728495783936");
        break;
      case 157:
        document.querySelector("h3").innerText = ("182687704666362864775460604089535377456991567872");
        break;
      case 158:
        document.querySelector("h3").innerText = ("365375409332725729550921208179070754913983135744");
        break;
      case 159:
        document.querySelector("h3").innerText = ("730750818665451459101842416358141509827966271488");
        break;
      case 160:
        document.querySelector("h3").innerText = ("1461501637330902918203684832716283019655932542976");
        break;
      case 161:
        document.querySelector("h3").innerText = ("2923003274661805836407369665432566039311865085952");
        break;
      case 162:
        document.querySelector("h3").innerText = ("5846006549323611672814739330865132078623730171904");
        break;
      case 163:
        document.querySelector("h3").innerText = ("11692013098647223345629478661730264157247460343808");
        break;
      case 164:
        document.querySelector("h3").innerText = ("23384026197294446691258957323460528314494920687616");
        break;
      case 165:
        document.querySelector("h3").innerText = ("46768052394588893382517914646921056628989841375232");
        break;
      case 166:
        document.querySelector("h3").innerText = ("93536104789177786765035829293842113257979682750464");
        break;
      case 167:
        document.querySelector("h3").innerText = ("187072209578355573530071658587684226515959365500928");
        break;
      case 168:
        document.querySelector("h3").innerText = ("374144419156711147060143317175368453031918731001856");
        break;
      case 169:
        document.querySelector("h3").innerText = ("748288838313422294120286634350736906063837462003712");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space6.jpg)";
        break;
      case 170:
        document.querySelector("h3").innerText = ("1496577676626844588240573268701473812127674924007424");
        break;
      case 171:
        document.querySelector("h3").innerText = ("2993155353253689176481146537402947624255349848014848");
        break;
      case 172:
        document.querySelector("h3").innerText = ("5986310706507378352962293074805895248510699696029696");
        break;
      case 173:
        document.querySelector("h3").innerText = ("11972621413014756705924586149611790497021399392059392");
        break;
      case 174:
        document.querySelector("h3").innerText = ("23945242826029513411849172299223580994042798784118784");
        break;
      case 175:
        document.querySelector("h3").innerText = ("47890485652059026823698344598447161988085597568237568");
        break;
      case 176:
        document.querySelector("h3").innerText = ("95780971304118053647396689196894323976171195136475136");
        break;
      case 177:
        document.querySelector("h3").innerText = ("191561942608236107294793378393788647952342390272950272");
        break;
      case 178:
        document.querySelector("h3").innerText = ("383123885216472214589586756787577295904684780545900544");
        break;
      case 179:
        document.querySelector("h3").innerText = ("766247770432944429179173513575154591809369561091801088");
        break;
      case 180:
        document.querySelector("h3").innerText = ("1532495540865888858358347027150309183618739122183602176");
        break;
      case 181:
        document.querySelector("h3").innerText = ("3064991081731777716716694054300618367237478244367204352");
        break;
      case 182:
        document.querySelector("h3").innerText = ("6129982163463555433433388108601236734474956488734408704");
        break;
      case 183:
        document.querySelector("h3").innerText = ("12259964326927110866866776217202473468949912977468817408");
        break;
      case 184:
        document.querySelector("h3").innerText = ("24519928653854221733733552434404946937899825954937634816");
        break;
      case 185:
        document.querySelector("h3").innerText = ("49039857307708443467467104868809893875799651909875269632");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space7.jpg)";
        document.getElementById('main').src = 'img/白.png';
        break;
      case 186:
        document.querySelector("h3").innerText = ("98079714615416886934934209737619787751599303819750539264");
        break;
      case 187:
        document.querySelector("h3").innerText = ("196159429230833773869868419475239575503198607639501078528");
        break;
      case 188:
        document.querySelector("h3").innerText = ("392318858461667547739736838950479151006397215279002157056");
        break;
      case 189:
        document.querySelector("h3").innerText = ("784637716923335095479473677900958302012794430558004314112");
        break;
      case 190:
        document.querySelector("h3").innerText = ("1569275433846670190958947355801916604025588861116008628224");
        break;
      case 191:
        document.querySelector("h3").innerText = ("3138550867693340381917894711603833208051177722232017256448");
        break;
      case 192:
        document.querySelector("h3").innerText = ("6277101735386680763835789423207666416102355444464034512896");
        break;
      case 193:
        document.querySelector("h3").innerText = ("12554203470773361527671578846415332832204710888928069025792");
        break;
      case 194:
        document.querySelector("h3").innerText = ("25108406941546723055343157692830665664409421777856138051584");
        break;
      case 195:
        document.querySelector("h3").innerText = ("50216813883093446110686315385661331328818843555712276103168");
        break;
      case 196:
        document.querySelector("h3").innerText = ("100433627766186892221372630771322662657637687111424552206336");
        break;
      case 197:
        document.querySelector("h3").innerText = ("200867255532373784442745261542645325315275374222849104412672");
        break;
      case 198:
        document.querySelector("h3").innerText = ("401734511064747568885490523085290650630550748445698208825344");
        break;
      case 199:
        document.querySelector("h3").innerText = ("803469022129495137770981046170581301261101496891396417650688");
        break;
      case 200:
        document.querySelector("h3").innerText = ("1606938044258990275541962092341162602522202993782792835301376");
        break;
      case 201:
        document.querySelector("h3").innerText = ("3213876088517980551083924184682325205044405987565585670602752");
        break;
      case 202:
        document.querySelector("h3").innerText = ("6427752177035961102167848369364650410088811975131171341205504");
        break;
      case 203:
        document.querySelector("h3").innerText = ("12855504354071922204335696738729300820177623950262342682411008");
        break;
      case 204:
        document.querySelector("h3").innerText = ("25711008708143844408671393477458601640355247900524685364822016");
        break;
      case 205:
        document.querySelector("h3").innerText = ("51422017416287688817342786954917203280710495801049370729644032");
        break;
      case 206:
        document.querySelector("h3").innerText = ("102844034832575377634685573909834406561420991602098741459288064");
        break;
      case 207:
        document.querySelector("h3").innerText = ("205688069665150755269371147819668813122841983204197482918576128");
        break;
      case 208:
        document.querySelector("h3").innerText = ("411376139330301510538742295639337626245683966408394965837152256");
        break;
      case 209:
        document.querySelector("h3").innerText = ("822752278660603021077484591278675252491367932816789931674304512");
        break;
      case 210:
        document.querySelector("h3").innerText = ("1645504557321206042154969182557350504982735865633579863348609024");
        break;
      case 211:
        document.querySelector("h3").innerText = ("3291009114642412084309938365114701009965471731267159726697218048");
        break;
      case 212:
        document.querySelector("h3").innerText = ("6582018229284824168619876730229402019930943462534319453394436096");
        break;
      case 213:
        document.querySelector("h3").innerText = ("13164036458569648337239753460458804039861886925068638906788872192");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space8.jpg)";
        break;
      case 214:
        document.querySelector("h3").innerText = ("26328072917139296674479506920917608079723773850137277813577744384");
        break;
      case 215:
        document.querySelector("h3").innerText = ("52656145834278593348959013841835216159447547700274555627155488768");
        break;
      case 216:
        document.querySelector("h3").innerText = ("105312291668557186697918027683670432318895095400549111254310977536");
        break;
      case 217:
        document.querySelector("h3").innerText = ("210624583337114373395836055367340864637790190801098222508621955072");
        break;
      case 218:
        document.querySelector("h3").innerText = ("421249166674228746791672110734681729275580381602196445017243910144");
        break;
      case 219:
        document.querySelector("h3").innerText = ("842498333348457493583344221469363458551160763204392890034487820288");
        break;
      case 220:
        document.querySelector("h3").innerText = ("1684996666696914987166688442938726917102321526408785780068975640576");
        break;
      case 221:
        document.querySelector("h3").innerText = ("3369993333393829974333376885877453834204643052817571560137951281152");
        break;
      case 222:
        document.querySelector("h3").innerText = ("6739986666787659948666753771754907668409286105635143120275902562304");
        break;
      case 223:
        document.querySelector("h3").innerText = ("13479973333575319897333507543509815336818572211270286240551805124608");
        break;
      case 224:
        document.querySelector("h3").innerText = ("26959946667150639794667015087019630673637144422540572481103610249216");
        break;
      case 225:
        document.querySelector("h3").innerText = ("53919893334301279589334030174039261347274288845081144962207220498432");
        break;
      case 226:
        document.querySelector("h3").innerText = ("107839786668602559178668060348078522694548577690162289924414440996864");
        break;
      case 227:
        document.querySelector("h3").innerText = ("215679573337205118357336120696157045389097155380324579848828881993728");
        break;
      case 228:
        document.querySelector("h3").innerText = ("431359146674410236714672241392314090778194310760649159697657763987456");
        break;
      case 229:
        document.querySelector("h3").innerText = ("862718293348820473429344482784628181556388621521298319395315527974912");
        break;
      case 230:
        document.querySelector("h3").innerText = ("1725436586697640946858688965569256363112777243042596638790631055949824");
        break;
      case 231:
        document.querySelector("h3").innerText = ("3450873173395281893717377931138512726225554486085193277581262111899648");
        break;
      case 232:
        document.querySelector("h3").innerText = ("6901746346790563787434755862277025452451108972170386555162524223799296");
        break;
      case 233:
        document.querySelector("h3").innerText = ("13803492693581127574869511724554050904902217944340773110325048447598592");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space9.jpg)";
        break;
      case 234:
        document.querySelector("h3").innerText = ("27606985387162255149739023449108101809804435888681546220650096895197184");
        break;
      case 235:
        document.querySelector("h3").innerText = ("55213970774324510299478046898216203619608871777363092441300193790394368");
        break;
      case 236:
        document.querySelector("h3").innerText = ("110427941548649020598956093796432407239217743554726184882600387580788736");
        break;
      case 237:
        document.querySelector("h3").innerText = ("220855883097298041197912187592864814478435487109452369765200775161577472");
        break;
      case 238:
        document.querySelector("h3").innerText = ("441711766194596082395824375185729628956870974218904739530401550323154944");
        break;
      case 239:
        document.querySelector("h3").innerText = ("883423532389192164791648750371459257913741948437809479060803100646309888");
        break;
      case 240:
        document.querySelector("h3").innerText = ("1766847064778384329583297500742918515827483896875618958121606201292619776");
        break;
      case 241:
        document.querySelector("h3").innerText = ("3533694129556768659166595001485837031654967793751237916243212402585239552");
        break;
      case 242:
        document.querySelector("h3").innerText = ("7067388259113537318333190002971674063309935587502475832486424805170479104");
        break;
      case 243:
        document.querySelector("h3").innerText = ("14134776518227074636666380005943348126619871175004951664972849610340958208");
        break;
      case 244:
        document.querySelector("h3").innerText = ("28269553036454149273332760011886696253239742350009903329945699220681916416");
        break;
      case 245:
        document.querySelector("h3").innerText = ("56539106072908298546665520023773392506479484700019806659891398441363832832");
        break;
      case 246:
        document.querySelector("h3").innerText = ("113078212145816597093331040047546785012958969400039613319782796882727665664");
        break;
      case 247:
        document.querySelector("h3").innerText = ("226156424291633194186662080095093570025917938800079226639565593765455331328");
        break;
      case 248:
        document.querySelector("h3").innerText = ("452312848583266388373324160190187140051835877600158453279131187530910662656");
        break;
      case 249:
        document.querySelector("h3").innerText = ("904625697166532776746648320380374280103671755200316906558262375061821325312");
        break;
      case 250:
        document.querySelector("h3").innerText = ("1809251394333065553493296640760748560207343510400633813116524750123642650624");
        break;
      case 251:
        document.querySelector("h3").innerText = ("3618502788666131106986593281521497120414687020801267626233049500247285301248");
        break;
      case 252:
        document.querySelector("h3").innerText = ("7237005577332262213973186563042994240829374041602535252466099000494570602496");
        break;
      case 253:
        document.querySelector("h3").innerText = ("14474011154664524427946373126085988481658748083205070504932198000989141204992");
        break;
      case 254:
        document.querySelector("h3").innerText = ("28948022309329048855892746252171976963317496166410141009864396001978282409984");
        break;
      case 255:
        document.querySelector("h3").innerText = ("57896044618658097711785492504343953926634992332820282019728792003956564819968");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_space10.jpg)";
        break;
      case 256:
        document.querySelector("h3").innerText = ("115792089237316195423570985008687907853269984665640564039457584007913129639936");
        break;
      case 257:
        document.querySelector("h3").innerText = ("231584178474632390847141970017375815706539969331281128078915168015826259279872");
        break;
      case 258:
        document.querySelector("h3").innerText = ("463168356949264781694283940034751631413079938662562256157830336031652518559744");
        break;
      case 259:
        document.querySelector("h3").innerText = ("926336713898529563388567880069503262826159877325124512315660672063305037119488");
        break;
      case 260:
        document.querySelector("h3").innerText = ("1852673427797059126777135760139006525652319754650249024631321344126610074238976");
        break;
      case 261:
        document.querySelector("h3").innerText = ("3705346855594118253554271520278013051304639509300498049262642688253220148477952");
        break;
      case 262:
        document.querySelector("h3").innerText = ("7410693711188236507108543040556026102609279018600996098525285376506440296955904");
        break;
      case 263:
        document.querySelector("h3").innerText = ("14821387422376473014217086081112052205218558037201992197050570753012880593911808");
        document.getElementById('cantainar').style.backgroundImage = "url(img/bg_uchu_spaceEND.jpg)";
        break;
      default:
        
        console.log("終わり");
    }
  }
  
  
}
