(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[238],{1108:function(e){e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},115:function(e){e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}},4438:function(e,i,r){"use strict";var o,a,t,n,s,b,l=r(2265);l&&"object"==typeof l&&"default"in l&&l.default;var w=r(1132),c=new w,d=c.getBrowser(),u=c.getCPU(),m=c.getDevice(),p=c.getEngine(),f=c.getOS(),g=c.getUA(),h={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},v={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},setDefaults=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},getNavigatorInstance=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},isIOS13Check=function(e){var i=getNavigatorInstance();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},isBrowserType=function(e){return e.type===h.Browser},isEdgeType=function(e){return e.name===v.Edge},isEdgeChromiumType=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},getIPad13=function(){return isIOS13Check("iPad")};m.type,h.SmartTv,m.type,h.Console,m.type,h.Wearable,m.type,h.Embedded,d.name===v.MobileSafari||getIPad13(),d.name,v.Chromium;var y=(o=m.type)===h.Mobile||o===h.Tablet||getIPad13();m.type,h.Mobile,m.type===h.Tablet||getIPad13(),isBrowserType(m),isBrowserType(m),f.name,f.name,"iOS"===f.name||getIPad13(),d.name,v.Chrome,d.name,v.Firefox,(a=d.name)===v.Safari||v.MobileSafari,d.name,v.Opera,(t=d.name)===v.InternetExplorer||v.Ie,setDefaults(f.version),setDefaults(f.name),setDefaults(d.version),setDefaults(d.major),setDefaults(d.name),setDefaults(m.vendor),setDefaults(m.model),setDefaults(p.name),setDefaults(p.version),setDefaults(g),isEdgeType(d)||isEdgeChromiumType(g),d.name,v.Yandex,setDefaults(m.type,"browser"),(n=getNavigatorInstance())&&(/iPad|iPhone|iPod/.test(n.platform)||"MacIntel"===n.platform&&n.maxTouchPoints>1)&&window.MSStream,getIPad13(),isIOS13Check("iPhone"),isIOS13Check("iPod"),"string"==typeof(b=(s=getNavigatorInstance())&&s.userAgent&&s.userAgent.toLowerCase())&&/electron/.test(b),isEdgeChromiumType(g),isEdgeType(d)&&isEdgeChromiumType(g),f.name,f.name,d.name,v.MIUI,d.name,v.SamsungBrowser,i.tq=y},1132:function(e,i,r){var o;!function(a,t){"use strict";var n="function",s="undefined",b="object",l="string",w="major",c="model",d="name",u="type",m="vendor",p="version",f="architecture",g="console",h="mobile",v="tablet",y="smarttv",x="wearable",k="embedded",_="Amazon",S="Apple",O="ASUS",P="BlackBerry",T="Browser",E="Chrome",j="Firefox",C="Google",z="Huawei",I="Microsoft",M="Motorola",N="Opera",A="Samsung",U="Sharp",q="Sony",D="Xiaomi",B="Zebra",R="Facebook",F="Chromium OS",G="Mac OS",L=" Browser",extend=function(e,i){var r={};for(var o in e)i[o]&&i[o].length%2==0?r[o]=i[o].concat(e[o]):r[o]=e[o];return r},enumerize=function(e){for(var i={},r=0;r<e.length;r++)i[e[r].toUpperCase()]=e[r];return i},has=function(e,i){return typeof e===l&&-1!==lowerize(i).indexOf(lowerize(e))},lowerize=function(e){return e.toLowerCase()},trim=function(e,i){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof i===s?e:e.substring(0,500)},rgxMapper=function(e,i){for(var r,o,a,s,l,w,c=0;c<i.length&&!l;){var d=i[c],u=i[c+1];for(r=o=0;r<d.length&&!l&&d[r];)if(l=d[r++].exec(e))for(a=0;a<u.length;a++)w=l[++o],typeof(s=u[a])===b&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,w):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=w?w.replace(s[1],s[2]):t:this[s[0]]=w?s[1].call(this,w,s[2]):t:4===s.length&&(this[s[0]]=w?s[3].call(this,w.replace(s[1],s[2])):t):this[s]=w||t;c+=2}},strMapper=function(e,i){for(var r in i)if(typeof i[r]===b&&i[r].length>0){for(var o=0;o<i[r].length;o++)if(has(i[r][o],e))return"?"===r?t:r}else if(has(i[r],e))return"?"===r?t:r;return i.hasOwnProperty("*")?i["*"]:e},V={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},W={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,p],[/opios[\/ ]+([\w\.]+)/i],[p,[d,N+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[d,N+" GX"]],[/\bopr\/([\w\.]+)/i],[p,[d,N]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[d,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[p,[d,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,p],[/quark(?:pc)?\/([-\w\.]+)/i],[p,[d,"Quark"]],[/\bddg\/([\w\.]+)/i],[p,[d,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[d,"UC"+T]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[d,"Smart Lenovo "+T]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+T],p],[/\bfocus\/([\w\.]+)/i],[p,[d,j+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[d,N+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[d,N+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[d,"MIUI"+L]],[/fxios\/([\w\.-]+)/i],[p,[d,j]],[/\bqihoobrowser\/?([\w\.]*)/i],[p,[d,"360"]],[/\b(qq)\/([\w\.]+)/i],[[d,/(.+)/,"$1Browser"],p],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1"+L],p],[/samsungbrowser\/([\w\.]+)/i],[p,[d,A+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[p,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[d,p],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[d],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[p,d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,R],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[d,E+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,E+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[d,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[p,strMapper,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],p],[/(wolvic|librewolf)\/([\w\.]+)/i],[d,p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[d,j+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[d,[p,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[d,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[m,A],[u,v]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[c,[m,A],[u,h]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[m,S],[u,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[m,S],[u,v]],[/(macintosh);/i],[c,[m,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[m,U],[u,h]],[/(?:honor)([-\w ]+)[;\)]/i],[c,[m,"Honor"],[u,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[m,z],[u,v]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[m,z],[u,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[c,/_/g," "],[m,D],[u,h]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[m,D],[u,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[m,"OPPO"],[u,h]],[/\b(opd2\d{3}a?) bui/i],[c,[m,"OPPO"],[u,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[m,"Vivo"],[u,h]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[c,[m,"Realme"],[u,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[m,M],[u,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[m,M],[u,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[m,"LG"],[u,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[m,"LG"],[u,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[m,"Lenovo"],[u,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[m,"Nokia"],[u,h]],[/(pixel c)\b/i],[c,[m,C],[u,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[m,C],[u,h]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[m,q],[u,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[m,q],[u,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[m,"OnePlus"],[u,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[m,_],[u,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[m,_],[u,h]],[/(playbook);[-\w\),; ]+(rim)/i],[c,m,[u,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[m,P],[u,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[m,O],[u,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[m,O],[u,h]],[/(nexus 9)/i],[c,[m,"HTC"],[u,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[c,/_/g," "],[u,h]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[c,[m,"TCL"],[u,v]],[/(itel) ((\w+))/i],[[m,lowerize],c,[u,strMapper,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[m,"Acer"],[u,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[m,"Meizu"],[u,h]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[c,[m,"Ulefone"],[u,h]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[c,[m,"Energizer"],[u,h]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[c,[m,"Cat"],[u,h]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[c,[m,"Smartfren"],[u,h]],[/droid.+; (a(?:015|06[35]|142p?))/i],[c,[m,"Nothing"],[u,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,c,[u,h]],[/(imo) (tab \w+)/i,/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,c,[u,v]],[/(surface duo)/i],[c,[m,I],[u,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[m,"Fairphone"],[u,h]],[/(u304aa)/i],[c,[m,"AT&T"],[u,h]],[/\bsie-(\w*)/i],[c,[m,"Siemens"],[u,h]],[/\b(rct\w+) b/i],[c,[m,"RCA"],[u,v]],[/\b(venue[\d ]{2,7}) b/i],[c,[m,"Dell"],[u,v]],[/\b(q(?:mv|ta)\w+) b/i],[c,[m,"Verizon"],[u,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[m,"Barnes & Noble"],[u,v]],[/\b(tm\d{3}\w+) b/i],[c,[m,"NuVision"],[u,v]],[/\b(k88) b/i],[c,[m,"ZTE"],[u,v]],[/\b(nx\d{3}j) b/i],[c,[m,"ZTE"],[u,h]],[/\b(gen\d{3}) b.+49h/i],[c,[m,"Swiss"],[u,h]],[/\b(zur\d{3}) b/i],[c,[m,"Swiss"],[u,v]],[/\b((zeki)?tb.*\b) b/i],[c,[m,"Zeki"],[u,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],c,[u,v]],[/\b(ns-?\w{0,9}) b/i],[c,[m,"Insignia"],[u,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[m,"NextBook"],[u,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],c,[u,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],c,[u,h]],[/\b(ph-1) /i],[c,[m,"Essential"],[u,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[m,"Envizen"],[u,v]],[/\b(trio[-\w\. ]+) b/i],[c,[m,"MachSpeed"],[u,v]],[/\btu_(1491) b/i],[c,[m,"Rotor"],[u,v]],[/(shield[\w ]+) b/i],[c,[m,"Nvidia"],[u,v]],[/(sprint) (\w+)/i],[m,c,[u,h]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[m,I],[u,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[m,B],[u,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[m,B],[u,h]],[/smart-tv.+(samsung)/i],[m,[u,y]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[m,A],[u,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[u,y]],[/(apple) ?tv/i],[m,[c,S+" TV"],[u,y]],[/crkey/i],[[c,E+"cast"],[m,C],[u,y]],[/droid.+aft(\w+)( bui|\))/i],[c,[m,_],[u,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[m,U],[u,y]],[/(bravia[\w ]+)( bui|\))/i],[c,[m,q],[u,y]],[/(mitv-\w{5}) bui/i],[c,[m,D],[u,y]],[/Hbbtv.*(technisat) (.*);/i],[m,c,[u,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,trim],[c,trim],[u,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,c,[u,g]],[/droid.+; (shield) bui/i],[c,[m,"Nvidia"],[u,g]],[/(playstation [345portablevi]+)/i],[c,[m,q],[u,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[m,I],[u,g]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[c,[m,A],[u,x]],[/((pebble))app/i],[m,c,[u,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[m,S],[u,x]],[/droid.+; (glass) \d/i],[c,[m,C],[u,x]],[/droid.+; (wt63?0{2,3})\)/i],[c,[m,B],[u,x]],[/droid.+; (glass) \d/i],[c,[m,C],[u,x]],[/(pico) (4|neo3(?: link|pro)?)/i],[m,c,[u,x]],[/; (quest( \d| pro)?)/i],[c,[m,R],[u,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[u,k]],[/(aeobc)\b/i],[c,[m,_],[u,k]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[c,[u,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[u,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[u,h]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[d,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[d,p],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,p],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[d,[p,strMapper,V]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,strMapper,V],[d,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,G],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,p],[/\(bb(10);/i],[p,[d,P]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[d,j+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[d,E+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,F],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,p],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,p]]},UAParser=function(e,i){if(typeof e===b&&(i=e,e=t),!(this instanceof UAParser))return new UAParser(e,i).getResult();var r=typeof a!==s&&a.navigator?a.navigator:t,o=e||(r&&r.userAgent?r.userAgent:""),g=r&&r.userAgentData?r.userAgentData:t,y=i?extend(W,i):W,x=r&&r.userAgent==o;return this.getBrowser=function(){var e,i={};return i[d]=t,i[p]=t,rgxMapper.call(i,o,y.browser),i[w]=typeof(e=i[p])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:t,x&&r&&r.brave&&typeof r.brave.isBrave==n&&(i[d]="Brave"),i},this.getCPU=function(){var e={};return e[f]=t,rgxMapper.call(e,o,y.cpu),e},this.getDevice=function(){var e={};return e[m]=t,e[c]=t,e[u]=t,rgxMapper.call(e,o,y.device),x&&!e[u]&&g&&g.mobile&&(e[u]=h),x&&"Macintosh"==e[c]&&r&&typeof r.standalone!==s&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[c]="iPad",e[u]=v),e},this.getEngine=function(){var e={};return e[d]=t,e[p]=t,rgxMapper.call(e,o,y.engine),e},this.getOS=function(){var e={};return e[d]=t,e[p]=t,rgxMapper.call(e,o,y.os),x&&!e[d]&&g&&g.platform&&"Unknown"!=g.platform&&(e[d]=g.platform.replace(/chrome os/i,F).replace(/macos/i,G)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=typeof e===l&&e.length>500?trim(e,500):e,this},this.setUA(o),this};UAParser.VERSION="1.0.40",UAParser.BROWSER=enumerize([d,p,w]),UAParser.CPU=enumerize([f]),UAParser.DEVICE=enumerize([c,m,u,g,h,y,v,x,k]),UAParser.ENGINE=UAParser.OS=enumerize([d,p]),typeof i!==s?(e.exports&&(i=e.exports=UAParser),i.UAParser=UAParser):r.amdO?t!==(o=(function(){return UAParser}).call(i,r,i,e))&&(e.exports=o):typeof a!==s&&(a.UAParser=UAParser);var H=typeof a!==s&&(a.jQuery||a.Zepto);if(H&&!H.ua){var K=new UAParser;H.ua=K.getResult(),H.ua.get=function(){return K.getUA()},H.ua.set=function(e){K.setUA(e);var i=K.getResult();for(var r in i)H.ua[r]=i[r]}}}("object"==typeof window?window:this)},2346:function(e,i,r){"use strict";r.d(i,{w_:function(){return GenIcon}});var o=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t=o.createContext&&o.createContext(a),n=["attr","size","title"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function ownKeys(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(r),!0).forEach(function(i){var o,a;o=i,a=r[i],(o=function(e){var i=function(e,i){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,i||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"==typeof i?i:i+""}(o))in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function GenIcon(e){return i=>o.createElement(IconBase,_extends({attr:_objectSpread({},e.attr)},i),function Tree2Element(e){return e&&e.map((e,i)=>o.createElement(e.tag,_objectSpread({key:i},e.attr),Tree2Element(e.child)))}(e.child))}function IconBase(e){var elem=i=>{var r,{attr:a,size:t,title:s}=e,b=function(e,i){if(null==e)return{};var r,o,a=function(e,i){if(null==e)return{};var r={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(i.indexOf(o)>=0)continue;r[o]=e[o]}return r}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],!(i.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,n),l=t||i.size||"1em";return i.className&&(r=i.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,a,b,{className:r,style:_objectSpread(_objectSpread({color:e.color||i.color},i.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return void 0!==t?o.createElement(t.Consumer,null,e=>elem(e)):elem(a)}}}]);