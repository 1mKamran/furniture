// var noutbuk = document.getElementsByClassName("card")[0];
var nv = document.getElementsByClassName("navv");


window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (scrollY>350) {
        $(".card").css("animation-name","anime")
        // liler.style.animationName = "animasiya"
    }
    else{
        $(".card").css("animation-name","")
        // liler.style.animationName = ""
    }
 });
    //  {ym1:"", ym2:"", ym3:"", ym4:"", ym5:"", ym6:"", ym7:""},

    // window.addEventListener("scroll", function () {
    //     console.log(window.scrollY);
    //     if (scrollY>1) {
            // $("nav").css("background-color","transparent");
            // nv.style.backgroundColor = "transparent";
            // noutbuk.style.animationName = "anime"
            // liler.style.animationName = "animasiya"
        // }
        // else{
            // $("nav").css("background-color","#192730");
            // nv.style.backgroundColor = "#192730";
            // noutbuk.style.animationName = ""
            // liler.style.animationName = ""
        // }
    // $("nav").scroll(function () {
    //     if (scrollY<1) {
    //         $("nav").css("background-color","transparent");
    //     } else {
    //         $("nav").css("background-color","#192730");
    //     }
    // })

    var btn = $('#button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
    
    
 var array = [
     {pht1:"https://www.ikea.com/ru/ru/images/products/torsby-torsbi-leifarne-leyf-arne-stol-i-4-stula-glyancevyy-belyy-belyy__0738106_pe741371_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/torsby-torsbi-leifarne-leyf-arne-stol-i-4-stula-glyancevyy-belyy-belyy__0871116_pe595159_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/torsby-torsbi-leifarne-leyf-arne-stol-i-4-stula-glyancevyy-belyy-belyy__0870773_pe594941_s5.jpg?f=xl", pht4:"https://www.ikea.com/ru/ru/images/products/torsby-torsbi-leifarne-leyf-arne-stol-i-4-stula-glyancevyy-belyy-belyy__1002172_pe824629_s5.jpg?f=xl", pht5:"TORSBY / LEIFARNE", pht6:"Stol və 4 stul, parlaq ağ/ağ,135 sm", pht7:"350", category:"stol"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/moerbylanga-morbilonga-bernhard-berngard-stol-i-4-stula-dubovyy-shpon-myuk-zolotisto-korichnevyy__0738068_pe741338_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/moerbylanga-morbilonga-bernhard-berngard-stol-i-4-stula-dubovyy-shpon-myuk-zolotisto-korichnevyy__0896233_pe696392_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/moerbylanga-morbilonga-bernhard-berngard-stol-i-4-stula-dubovyy-shpon-myuk-zolotisto-korichnevyy__0871205_pe594901_s5.jpg?f=xl", pht4:"https://www.ikea.com/ru/ru/images/products/moerbylanga-morbilonga-bernhard-berngard-stol-i-4-stula-dubovyy-shpon-myuk-zolotisto-korichnevyy__0976344_pe813145_s5.jpg?f=xl", pht5:"MÖRBYLÅNGA / BERNHARD", pht6:"Stol və 4 stul, palıd şpon/Muk qızılı qəhvəyi, 140x85 sm", pht7:"370", category:"stol"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/ingatorp-ingatorp-ingolf-ingolf-stol-i-6-stulev-chernyy-korichnevo-chyornyy__0737451_pe741100_s5.jpg?f=xl", pht2:"https://www.ikea.com/ru/ru/images/products/ingatorp-ingatorp-ingolf-ingolf-stol-i-6-stulev-chernyy-korichnevo-chyornyy__0721033_pe733016_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/ingatorp-ingatorp-ingolf-ingolf-stol-i-6-stulev-chernyy-korichnevo-chyornyy__0870376_pe594981_s5.jpg?f=xl", pht4:"https://www.ikea.com/ru/ru/images/products/ingatorp-ingatorp-ingolf-ingolf-stol-i-6-stulev-chernyy-korichnevo-chyornyy__0947817_pe798643_s5.jpg?f=xl", pht5:"INGATORP / INGOLF", pht6:"Stol və 6 stul, qara/qəhvəyi qara, 155/215 sm", pht7:"410", category:"stol"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/moerbylanga-morbilonga-odger-odger-stol-i-6-stulev-dubovyy-shpon-siniy__0738079_pe741356_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/moerbylanga-morbilonga-odger-odger-stol-i-6-stulev-dubovyy-shpon-siniy__0721028_pe733011_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/moerbylanga-morbilonga-odger-odger-stol-i-6-stulev-dubovyy-shpon-siniy__0976335_pe813144_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/moerbylanga-morbilonga-odger-odger-stol-i-6-stulev-dubovyy-shpon-siniy__0948332_pe798956_s5.jpg?f=s", pht5:"MÖRBYLÅNGA / ODGER", pht6:"Stol və 6 stul, palıd şpon/mavi, 220x100 sm", pht7:"400", category:"stol"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/ekedalen-ekedalen-ekedalen-ekedalen-barn-stol-4-barn-stula-temno-korichnevyy-ramna-svetlo-seryy__0747808_pe744732_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/ekedalen-ekedalen-ekedalen-ekedalen-barn-stol-4-barn-stula-temno-korichnevyy-ramna-svetlo-seryy__0756430_ph158715_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/ekedalen-ekedalen-ekedalen-ekedalen-barn-stol-4-barn-stula-temno-korichnevyy-ramna-svetlo-seryy__0870847_pe640491_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/ekedalen-ekedalen-ekedalen-ekedalen-barn-stol-4-barn-stula-temno-korichnevyy-ramna-svetlo-seryy__0947749_pe798630_s5.jpg?f=s", pht5:"EKEDALEN / EKEDALEN", pht6:"Bar stolu + 4 bar stul, tünd qəhvəyi/Çərçivə açıq boz, 120 sm", pht7:"315", category:"stol"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/ingatorp-ingatorp-sakarias-zakarias-stol-i-4-stula-chernyy-kvilsfors-temno-siniy-siniy__1027113_pe834739_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/ingatorp-ingatorp-sakarias-zakarias-stol-i-4-stula-chernyy-kvilsfors-temno-siniy-siniy__1027114_pe834738_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/ingatorp-ingatorp-sakarias-zakarias-stol-i-4-stula-chernyy-kvilsfors-temno-siniy-siniy__0870376_pe594981_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/ingatorp-ingatorp-sakarias-zakarias-stol-i-4-stula-chernyy-kvilsfors-temno-siniy-siniy__0993286_pe820482_s5.jpg?f=s", pht5:"INGATORP / SAKARIAS", pht6:"Stol və 4 stul, qara/Quilsfors tünd göy/mavi, 155/215 sm", pht7:"680", category:"stol"}, 
     {pht1:"https://www.ikea.com/ru/ru/images/products/aepplaryd-epplaryud-3-mestnyy-divan-s-kozetkoy-leyde-seryy-chernyy__0992921_pe820347_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/aepplaryd-epplaryud-3-mestnyy-divan-s-kozetkoy-leyde-seryy-chernyy__1023719_pe833235_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/aepplaryd-epplaryud-3-mestnyy-divan-s-kozetkoy-leyde-seryy-chernyy__1134557_pe878807_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/aepplaryd-epplaryud-3-mestnyy-divan-s-kozetkoy-leyde-seryy-chernyy__1039844_pe840470_s5.jpg?f=s", pht5:"ÄPPLARYD", pht6:"Divan 3 nəfərlik divanlı, seriya Leide/qara", pht7:"450", category:"ymebel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/aepplaryd-epplaryud-2-mestnyy-divan-leyde-svetlo-seryy__0992863_pe820294_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/aepplaryd-epplaryud-2-mestnyy-divan-leyde-svetlo-seryy__1023706_pe833222_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/aepplaryd-epplaryud-2-mestnyy-divan-leyde-svetlo-seryy__1032007_pe836732_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/aepplaryd-epplaryud-2-mestnyy-divan-leyde-svetlo-seryy__1039251_pe840105_s5.jpg?f=s", pht5:"ÄPPLARYD", pht6:"2 nəfərlik divan, Leide açıq boz", pht7:"470", category:"ymebel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/glostad-2-mestnyy-divan-knisa-klassicheskiy-siniy__0950900_pe800740_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/glostad-2-mestnyy-divan-knisa-klassicheskiy-siniy__0950902_pe800742_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/glostad-2-mestnyy-divan-knisa-klassicheskiy-siniy__1059524_ph179219_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/glostad-2-mestnyy-divan-knisa-klassicheskiy-siniy__1059524_ph179219_s5.jpg?f=s", pht5:"GLOSTAD", v:"2 nəfərlik divan, Knissa klassik mavi", pht7:"1500", category:"ymebel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/holmsund-ugl-div-krov-s-otd-d-hran-nordvalla-svetlo-zelenyy__0981692_pe815456_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/holmsund-ugl-div-krov-s-otd-d-hran-nordvalla-svetlo-zelenyy__0981697_pe815461_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/holmsund-ugl-div-krov-s-otd-d-hran-nordvalla-svetlo-zelenyy__0981694_pe815460_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/holmsund-ugl-div-krov-s-otd-d-hran-nordvalla-svetlo-zelenyy__0973710_pe812114_s5.jpg?f=s", pht5:"HOLMSUND", pht6:"Otd d / saxlama ilə künc divan çarpayı, Nordwalla açıq yaşıl", pht7:"620", category:"ymebel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/klippan-2-mestnyy-divan-bumstad-chernyy__0813176_pe772310_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/klippan-2-mestnyy-divan-bumstad-chernyy__0813175_pe772312_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/klippan-2-mestnyy-divan-bumstad-chernyy__0813172_pe772309_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/klippan-2-mestnyy-divan-bumstad-chernyy__0788219_pe763539_s5.jpg?f=s", pht5:"KLIPPAN", pht6:"2 nəfərlik divan, Bumstad qara", pht7:"740", category:"ymebel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/askesta-3-mestnyy-divan-krovat-knisa-svetlo-seryy__0805680_pe769655_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/askesta-3-mestnyy-divan-krovat-knisa-svetlo-seryy__0805681_pe769656_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/askesta-3-mestnyy-divan-krovat-knisa-svetlo-seryy__0805685_pe769660_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/askesta-3-mestnyy-divan-krovat-knisa-svetlo-seryy__0805679_pe769654_s5.jpg?f=s", pht5:"ASKESTA", pht6:"3 nəfərlik divan çarpayı, Knysa açıq boz", pht7:"385", category:"ymebel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/hauga-garderob-s-razdvizhnymi-dveryami-belyy__0964993_pe809314_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/hauga-garderob-s-razdvizhnymi-dveryami-belyy__0931942_pe791324_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/hauga-garderob-s-razdvizhnymi-dveryami-belyy__0950056_pe800134_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/hauga-garderob-s-razdvizhnymi-dveryami-belyy__0948172_pe798892_s5.jpg?f=s", pht5:"HAUGA", pht6:"Sürüşən qapılı qarderob, ağ, 118x55x199 sm", pht7:"650", category:"skaflar"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/pax-paks-garderob-uglovoy-belyy-flisberget-svetlo-bezhevyy__0625986_pe692549_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/pax-paks-garderob-uglovoy-belyy-flisberget-svetlo-bezhevyy__0938827_ph170615_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/pax-paks-garderob-uglovoy-belyy-flisberget-svetlo-bezhevyy__0534110_pe648926_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/pax-paks-garderob-uglovoy-belyy-flisberget-svetlo-bezhevyy__0646425_pe704189_s5.jpg?f=s", pht5:"PAX", pht6:"Künc qarderob, ağ/açıq bej fleece, 160/88x236 sm", pht7:"320", category:"skaflar"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/songesand-shkaf-platyanoy-korichnevyy__0555114_pe660180_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/songesand-shkaf-platyanoy-korichnevyy__0858553_pe660181_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/songesand-shkaf-platyanoy-korichnevyy__0858559_pe660182_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/songesand-shkaf-platyanoy-korichnevyy__0858565_pe660183_s5.jpg?f=xl", pht5:"SONGESAND", pht6:"Шкаф платяной, коричневый, 120x60x191 см", pht7:"500", category:"skaflar"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/brimnes-shkaf-platyanoy-3-dvernyy-chernyy__0428307_pe583468_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/brimnes-shkaf-platyanoy-3-dvernyy-chernyy__0428308_pe583470_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/brimnes-shkaf-platyanoy-3-dvernyy-chernyy__0746969_pe744302_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/brimnes-shkaf-platyanoy-3-dvernyy-chernyy__0787429_pe763245_s5.jpg?f=s", pht5:"BRIMNES", pht6:"3 qapılı qarderob, qara, 117x190 sm", pht7:"640", category:"skaflar"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/pax-paks-garderob-belyy-mehamn-auli__0716100_pe730710_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/pax-paks-garderob-belyy-mehamn-auli__0916122_ph162772_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/pax-paks-garderob-belyy-mehamn-auli__0716099_pe730707_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/pax-paks-garderob-belyy-mehamn-auli__0704007_pe724945_s5.jpg?f=xl", pht5:"PAX", pht6:"Гардероб, белый/Мехамн Аули, 250x66x236 см", pht7:"740", category:"skaflar"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/smastad-smostad-garderob-belyy-poverhnost-doski-dlya-zapisey-s-3-yashchikami__0925794_pe788891_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/smastad-smostad-garderob-belyy-poverhnost-doski-dlya-zapisey-s-3-yashchikami__0939295_pe794512_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/smastad-smostad-garderob-belyy-poverhnost-doski-dlya-zapisey-s-3-yashchikami__0939299_pe794516_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/smastad-smostad-garderob-belyy-poverhnost-doski-dlya-zapisey-s-3-yashchikami__0945664_pe797759_s5.jpg?f=s", pht5:"OPPHUS", pht6:"3 qapılı qarderob, ağ/Fonnes ağ, 140x57x181 sm", pht7:"640", category:"skaflar"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/kungsbacka-kungsbakka-dver-antracit__0635399_pe697171_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/kungsbacka-kungsbakka-dver-antracit__0864848_pe622867_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/kungsbacka-kungsbakka-dver-antracit__0864849_pe682310_s5.jpg?f=xl", pht4:"https://www.ikea.com/ru/ru/images/products/kungsbacka-kungsbakka-dver-antracit__1031465_ph174294_s5.jpg?f=s", pht5:"KUNGSBACKA", pht6:"Qapı, antrasit, 60x140 sm", pht7:"850", category:"metbex"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/askersund-frontalnaya-panel-yashchika-pod-svetlyy-yasen__0633780_pe696068_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/askersund-frontalnaya-panel-yashchika-pod-svetlyy-yasen__0864825_pe622889_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/askersund-frontalnaya-panel-yashchika-pod-svetlyy-yasen__0864832_pe682328_s5.jpg?f=xl", pht4:"https://www.ikea.com/ru/ru/images/products/askersund-frontalnaya-panel-yashchika-pod-svetlyy-yasen__1011638_ph174644_s5.jpg?f=s", pht5:"ASKERSUND", pht6:"Çekmece önü, yüngül kül effekti, 60x20 sm", pht7:"780", category:"metbex"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/tornviken-otkrytyy-shkaf-seryy__0593887_pe675420_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/tornviken-otkrytyy-shkaf-seryy__0862638_pe691947_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/tornviken-otkrytyy-shkaf-seryy__0862642_pe691948_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/tornviken-otkrytyy-shkaf-seryy__0862634_pe691946_s5.jpg?f=s", pht5:"TORNVIKEN ", pht6:"Açıq şkaf, boz, 20x37x80 sm", pht7:"360", category:"metbex"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/sinarp-dver-korichnevyy__0943159_pe796778_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/sinarp-dver-korichnevyy__0946644_pe798187_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/sinarp-dver-korichnevyy__0974967_ph175665_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/sinarp-dver-korichnevyy__1030320_ph179312_s5.jpg?f=s", pht5:"SINARP", pht6:"Qapı, qəhvəyi, 20x80 sm", pht7:"250", category:"metbex"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/lysekil-lizekil-nastennaya-panel-dvustoronniy-belyy-svetlo-seryy-pod-beton__0817922_pe774175_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/lysekil-lizekil-nastennaya-panel-dvustoronniy-belyy-svetlo-seryy-pod-beton__0865578_pe681872_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/lysekil-lizekil-nastennaya-panel-dvustoronniy-belyy-svetlo-seryy-pod-beton__0738461_ph154877_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/lysekil-lizekil-nastennaya-panel-dvustoronniy-belyy-svetlo-seryy-pod-beton__0865571_pe594798_s5.jpg?f=s", pht5:"LYSEKIL", pht6:"Divar paneli, ikitərəfli ağ/açıq boz beton effekti, 119,6x55 sm", pht7:"410", category:"metbex"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/bodbyn-budbin-dverca-d-napoln-uglovogo-shk-2sht-temno-zelenyy__0725257_pe734782_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/bodbyn-budbin-dverca-d-napoln-uglovogo-shk-2sht-temno-zelenyy__0746315_pe743976_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/bodbyn-budbin-dverca-d-napoln-uglovogo-shk-2sht-temno-zelenyy__0804769_ph163815_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/bodbyn-budbin-dverca-d-napoln-uglovogo-shk-2sht-seryy__1030336_ph172894_s5.jpg?f=s", pht5:"BODBYN", pht6:"Döşəmə künc şkaf üçün qapı, 2 ədəd, tünd yaşıl, 25x80 sm", pht7:"1230", category:"metbex"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/godmorgon-godmorgon-braviken-broviken-komplekt-mebeli-dlya-vannoy-4-predm-pod-belenyy-dub-brogrund-smesitel__0730943_pe737868_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/godmorgon-godmorgon-braviken-broviken-komplekt-mebeli-dlya-vannoy-4-predm-pod-belenyy-dub-brogrund-smesitel__0756399_pe748895_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/godmorgon-godmorgon-braviken-broviken-komplekt-mebeli-dlya-vannoy-4-predm-pod-belenyy-dub-brogrund-smesitel__0756398_pe748896_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/godmorgon-godmorgon-braviken-broviken-komplekt-mebeli-dlya-vannoy-4-predm-pod-belenyy-dub-brogrund-smesitel__0861354_pe414898_s5.jpg?f=s", pht5:"GODMORGON / BRÅVIKEN", pht6:"Hamam mebeli dəsti, 4 ədəd, vitrajlı palıd effekti/BROGRUND mikser kranı, 61 sm", pht7:"610", category:"sanuzel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/hemnes-hemnes-toernviken-tornviken-komplekt-mebeli-dlya-vannoy-4-predm-belyy-voksnan-smesitel__0832991_pe777909_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/hemnes-hemnes-toernviken-tornviken-komplekt-mebeli-dlya-vannoy-4-predm-belyy-voksnan-smesitel__0832992_pe777908_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/hemnes-hemnes-toernviken-tornviken-komplekt-mebeli-dlya-vannoy-4-predm-belyy-voksnan-smesitel__0756616_pe748989_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/hemnes-hemnes-toernviken-tornviken-komplekt-mebeli-dlya-vannoy-4-predm-belyy-voksnan-smesitel__1096025_pe864167_s5.jpg?f=s", pht5:"HEMNES / TÖRNVIKEN", pht6:"Hamam mebeli dəsti, 4 ədəd, ağ/VOXNAN kran, 82 sm", pht7:"960", category:"sanuzel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/lilltjaern-lilltern-skatsjoen-skatshyon-komplekt-mebeli-dlya-vannoy-5-predm-belyy-salen-smesitel__1031295_pe836468_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/lilltjaern-lilltern-skatsjoen-skatshyon-komplekt-mebeli-dlya-vannoy-5-predm-belyy-salen-smesitel__1031301_pe836473_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/lilltjaern-lilltern-skatsjoen-skatshyon-komplekt-mebeli-dlya-vannoy-5-predm-belyy-salen-smesitel__1031299_pe836471_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/lilltjaern-lilltern-skatsjoen-skatshyon-komplekt-mebeli-dlya-vannoy-5-predm-belyy-salen-smesitel__1031306_pe836475_s5.jpg?f=s", pht5:"LILLTJÄRN / SKATSJÖN", pht6:"Hamam mebeli dəsti, 5 ədəd, ağ/Salien kran, 45x35 sm", pht7:"610", category:"sanuzel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/hemnes-hemnes-raettviken-rettviken-komplekt-mebeli-dlya-vannoy-5-predm-belyy-runsher-smesitel__0730949_pe737873_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/hemnes-hemnes-raettviken-rettviken-komplekt-mebeli-dlya-vannoy-5-predm-belyy-runsher-smesitel__0757319_pe749166_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/hemnes-hemnes-raettviken-rettviken-komplekt-mebeli-dlya-vannoy-5-predm-belyy-runsher-smesitel__0757318_pe749165_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/hemnes-hemnes-raettviken-rettviken-komplekt-mebeli-dlya-vannoy-5-predm-belyy-runsher-smesitel__1095806_pe864036_s5.jpg?f=s", pht5:"HEMNES / RÄTTVIKEN", pht6:"Hamam mebeli dəsti, 5 ədəd, ağ/RUNSHER kran, 82 sm", pht7:"430", category:"sanuzel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/nysjoen-nyushyon-bjoerkan-byorkon-komplekt-mebeli-dlya-vannoy-6-predm-belyy-pilkon-smesitel__0968971_pe810657_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/nysjoen-nyushyon-bjoerkan-byorkon-komplekt-mebeli-dlya-vannoy-6-predm-belyy-pilkon-smesitel__0968972_pe810660_s5.jpg?f=xl", pht3:"https://www.ikea.com/ru/ru/images/products/nysjoen-nyushyon-bjoerkan-byorkon-komplekt-mebeli-dlya-vannoy-6-predm-belyy-pilkon-smesitel__0971574_pe811381_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/nysjoen-nyushyon-bjoerkan-byorkon-komplekt-mebeli-dlya-vannoy-6-predm-belyy-pilkon-smesitel__0968956_pe810649_s5.jpg?f=s", pht5:"NYSJÖN НЮШЁН / BJÖRKÅN", pht6:"Hamam mebeli dəsti, 6 ədəd, ağ/PILKON kran, 54x40x98 sm", pht7:"850", category:"sanuzel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/fiskan-fiskon-shkaf-dlya-stiralnoy-mashiny-yelsen-belyy__1031247_pe836463_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/fiskan-fiskon-shkaf-dlya-stiralnoy-mashiny-yelsen-belyy__1039564_pe840372_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/fiskan-fiskon-shkaf-dlya-stiralnoy-mashiny-yelsen-belyy__1050947_pe844986_s5.jpg?f=xl", pht4:"https://www.ikea.com/ru/ru/images/products/fiskan-fiskon-shkaf-dlya-stiralnoy-mashiny-yelsen-belyy__1050948_pe844989_s5.jpg?f=s", pht5:"FISKÅN", pht6:"Paltaryuyan şkaf, Jelsen ağ, 64x40x203 sm", pht7:"300", category:"sanuzel"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/malm-karkas-krovati-2-krovatnyh-yashchika-dubovyy-shpon-belenyy-luroy__0638624_pe699041_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/malm-karkas-krovati-2-krovatnyh-yashchika-dubovyy-shpon-belenyy-luroy__0803797_ph163207_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/malm-karkas-krovati-2-krovatnyh-yashchika-dubovyy-shpon-belenyy-luroy__1101591_pe866765_s5.jpg?f=xl", pht4:"https://www.ikea.com/ru/ru/images/products/malm-karkas-krovati-2-krovatnyh-yashchika-dubovyy-shpon-belenyy-luroy__0722749_pe733709_s5.jpg?f=s", pht5:"MALM", pht6:"Çarpayı çərçivəsi + 2 çarpayı saxlama qutusu, palıd şpon, ağardılmış/Lura, 160x200 sm", pht7:"740", category:"yataq"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/brimnes-karkas-krovati-s-izgolovem-belyy-luroy__1151032_pe884763_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/brimnes-karkas-krovati-s-izgolovem-belyy-luroy__0734481_pe739475_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/brimnes-karkas-krovati-s-izgolovem-belyy-luroy__0861367_pe614970_s5.jpg?f=xl", pht4:"https://www.ikea.com/ru/ru/images/products/brimnes-karkas-krovati-s-izgolovem-belyy-luroy__0781803_pe760913_s5.jpg?f=xl", pht5:"BRIMNES", pht6:"Başlıqlı çarpayı çərçivəsi, ağ/Lura, 160x200 sm", pht7:"660", category:"yataq"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/songesand-karkas-krovati-s-2-yashchikami-korichnevyy-lonset__1151018_pe884725_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/songesand-karkas-krovati-s-2-yashchikami-korichnevyy-lonset__0800862_ph162917_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/songesand-karkas-krovati-s-2-yashchikami-korichnevyy-lonset__0627015_ph149552_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/songesand-karkas-krovati-s-2-yashchikami-korichnevyy-lonset__0752955_pe747532_s5.jpg?f=s", pht5:"SONGESAND", pht6:"2 çekmeceli çarpayı çərçivəsi, qəhvəyi/Lonset, 160x200 sm", pht7:"700", category:"yataq"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/brimnes-kushetka-s-2-matrasami-2-yashchikami-belyy-vannereid-ochen-zhestkiy__1161832_pe889556_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/brimnes-kushetka-s-2-matrasami-2-yashchikami-belyy-vannereid-ochen-zhestkiy__1092117_pe863030_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/brimnes-kushetka-s-2-matrasami-2-yashchikami-belyy-vannereid-ochen-zhestkiy__1101301_pe866570_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/brimnes-kushetka-s-2-matrasami-2-yashchikami-belyy-vannereid-ochen-zhestkiy__0767736_pe754240_s5.jpg?f=s", pht5:"BRIMNES", pht6:"Divan çarpayısı 2 döşəkli/2 çekmeceli, ağ/VANNEREID ekstra sərt, 80x200 sm", pht7:"250", category:"yataq"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/flekke-kushetka-s-2-matrasami-2-yashchikami-cherno-korichnevyy-osvang-zhestkiy__1162088_pe889631_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/flekke-kushetka-s-2-matrasami-2-yashchikami-cherno-korichnevyy-osvang-zhestkiy__0734571_pe739512_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/flekke-kushetka-s-2-matrasami-2-yashchikami-cherno-korichnevyy-osvang-zhestkiy__0860865_pe608744_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/flekke-kushetka-s-2-matrasami-2-yashchikami-cherno-korichnevyy-osvang-zhestkiy__0767745_pe754243_s5.jpg?f=s", pht5:"FLEKKE", pht6:"Divan çarpayısı 2 matras/2 çekmece, qara-qəhvəyi/osvanq sərt, 80x200 sm", pht7:"630", category:"yataq"},
     {pht1:"https://www.ikea.com/ru/ru/images/products/fyresdal-firesdal-kushetka-s-2-matrasami-chernyy-ogotnes-zhestkiy__1171956_pe893219_s5.jpg?f=s", pht2:"https://www.ikea.com/ru/ru/images/products/fyresdal-firesdal-kushetka-s-2-matrasami-chernyy-ogotnes-zhestkiy__1092118_pe863031_s5.jpg?f=s", pht3:"https://www.ikea.com/ru/ru/images/products/fyresdal-firesdal-kushetka-s-2-matrasami-chernyy-ogotnes-zhestkiy__0454444_ph132998_s5.jpg?f=s", pht4:"https://www.ikea.com/ru/ru/images/products/fyresdal-firesdal-kushetka-s-2-matrasami-chernyy-ogotnes-zhestkiy__0767756_pe754253_s5.jpg?f=s", pht5:"FYRESDAL", pht6:"Divan 2 döşəkli, qara/sərt, 80x200 sm", pht7:"370", category:"yataq"}
    ]

    // var array = [
    //     {

    //     },
    //     {

    //     }
    // ]

    // var shkaf = [
    //  {sh1:"", sh2:"", sh3:"", sh4:"", sh5:"", sh6:"", sh7:""},

    // ]
    // var metbex = []
    // var sanuzel = []
    // var yataq = []




    // $(".modal1").hide()
    $(".secimler").show()
    $(".grandphoto").hide()
    $(".modal2").hide()



 
  
for (let i = 0; i < array.length; i++) {
            // $(".button").click(function () {
                
            $(".secimler").append(
                `
        <div class="secme" cat="${array[i].category}"><img src="${array[i].pht1}" alt="" onclick="ac(${i})"  ><i class="fa-solid fa-basket-shopping" onclick="adet(${i})"></i></div>     
                `
            )
        // })
        
}
// $("#ym").click(function () {
// for (let i = 0; i < array.length; i++) {

//     $(".secimler").append(
//         `
// <div class="secme"><img src="${array[i].ym1}" alt="" onclick="ac(${i})"><i class="fa-solid fa-basket-shopping" onclick="adet(${i})"></i></div>     
//         `
//     )}
// })
var deyer;
$(".f").click(function () {
    deyer = $(this).attr("id")
    // console.log(deyer)
    $(".secme").each(function () {
        if ($(this).attr("cat")==deyer || deyer == "all") {
            $(this).show()
        }
        else{
            $(this).hide()
        }
    })

});
var a = 0;

function ac(a) {
    $(".secimler").hide()
    $(".modal1").show()
    $(".modal2").hide()

    $(".modal1").html(
            `
            <div class="ph">
            <button type="button" class="btn btn-secondary" onclick="back()"><i class="fa-solid fa-caret-left"></i>Geri</button>
            <div class="photos"><img src="${array[a].pht1}" onclick="grand(this)"></div>
            <div class="photos"><img src="${array[a].pht2}" onclick="grand(this)"></div>
            <div class="photos"><img src="${array[a].pht3}" onclick="grand(this)"></div>
            <div class="photos"><img src="${array[a].pht4}" onclick="grand(this)"></div>
            </div>  
            <div class="about">
            <h1>${array[a].pht5}</h1>
            <h3>${array[a].pht6}</h3>
            <h2>Qiymət: ${array[a].pht7}$</h2>
             </div>
            `
        )
    
}
function grand(gg) {       
    // alert("salam")
    $(".modal2").hide()

    $(".grandphoto").show()
    esass.src = gg.src
}
$(".grandphoto").click(function () {
    $(".grandphoto").hide()
})
function back(q) {
    $(".modal1").hide()
    $(".secimler").show()
}
// function next(y) {
//     esassekil.src = y.src   
// }
/* <div class="boss"><img src="${array[a].pht1}"></div> */
var cem = 0
var c = 0;
var yeni = 0;
function adet(x) {
    // h2.style.display = "none"
    sfr() 
    c++
        // $(".hhh").html(c) 
    $(".mehsul").append (`
    <div class="yeni"><img src="${array[x].pht1}" alt=""><h1>${array[x].pht5}</h1><h1>${array[x].pht7}$</h1><button class="silmod"><i class="fa-solid fa-trash ll"></i></button></div>
       
    `
    )
    cem =  cem + Number(array[x].pht7)
    $(".total span").html(cem)
}
console.log(yeni);

    $(".fa-cart-shopping").click(function () {
        $(".modal2").show()
    })
    $(".xx").click(function () {
        $(".modal2").hide()
    })

    $(".xxx").click(function () {
        $(".mehsul").html("")
        sfr()
        $(".modal2").show()
        c=0
        // $(".hhh").html(c)
        $(".total span").html(cem = t)
        

    })
    var t = 0;
        $(".mehsul").on("click", ".silmod", function () {
            c--
            // $(".hhh").html(c)
            t= $(this).parent().children().eq(2).html()
            console.log(t);
            $(this).parent().remove()
             cem = cem - t
            $(".total span").html(cem)
                sfr()
        })
        function sfr() {
            if ($(".yeni").length!=0) {
                $(".hh").hide()
            }
             if($(".yeni").length==0){
                $(".hh").show()
            }
            
        }
$(".ph").click(function () {
    $(".modal2").hide()
})
// else{
//     $("#demo").hide()
//     $(".s2").hide()
//     $(".card").hide()
//     value = $(this).val()
//     // console.log(value);
// }

var value ="";
$(".inp input").keyup(function () {
    if ($(this).val()=="") {
        $("#demo").show()
        $(".s2").show()
        $(".card").show()

    }
    else{
        $("#demo").hide()
            $(".s2").hide()
            $(".card").hide()
            value = $(this).val()
        $(".card-title").each(function () {
            if($(this).html().toLowerCase().includes(value.toLowerCase())) {
                $(this).parents(".card").show()
            }
        })
    }
})
// var value ="";
// $(".inp input").keyup(function () {
//     $("#demo").hide()
//     $(".s2").hide()
//     $(".card").hide()
//     value = $(this).val()
//     console.log(value);
//     $(".card-title").each(function () {
//         if($(this).html().includes(value)) {
//             $(this).parents(".card").show()
//         }
//     })
// })