const calendarContent = {
    1: { 
        title: "Tisdag 1 December", 
        dayType: "weekday",
        u1: { prompt: "En mobiltelefon har fullt batteri (100 %). Efter att du spelat i 2 timmar har batteriet sjunkit med 15 procentenheter per timme. Hur många procent återstår?", answer: ["70", "70%", "70 %", "70 procent"] },
        u2: { prompt: "En biograf har 120 platser. En kväll är 75 % av platserna bokade. Av de bokade biljetterna är en tredjedel barnbiljetter (80 kr) och resten vuxenbiljetter (140 kr). Hur stora blir de totala biljettintäkterna den kvällen?", answer: ["10800", "10 800", "10800 kr", "10 800 kr", "10800kr", "10 800kr"] },
        desc: "Välkommen till årets magiska julkalender! Svara på dagens två frågor för att tända en guldstjärna!", 
        rhyme: "", video: "", starVideo: "" 
    },
    2: { 
        title: "Onsdag 2 December", 
        dayType: "weekday",
        u1: { prompt: "Summan av tre på varandra följande heltal är 54. Vilket är det största av de tre talen?", answer: ["19"] },
        u2: { prompt: "En rektangulär trädgård är 15 meter lång och 10 meter bred. Mitt i trädgården anläggs ett kvadratiskt trädgårdsland med sidan 4 meter. Hur stor gräsyta återstår runt trädgårdslandet?", answer: ["134", "134 m²", "134 m2", "134m²", "134m2", "134 kvadratmeter"] },
        desc: "Härligt jobbat! Glöm inte att lösa båda uppgifterna för att tända en bakgrundsstjärna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/WM7M7zSMJcw?autoplay=1" 
    },
    3: { 
        title: "Torsdag 3 December", 
        dayType: "weekday",
        u1: { prompt: "En vattentank rymmer 500 liter. Från början finns 140 liter i tanken. En kran fyller på med 15 liter per minut. Hur många minuter tar det tills tanken är helt full?", answer: ["24", "24 minuter", "24minuter", "24 min", "24min"] },
        u2: { prompt: "Du köper 3 stycken likadana böcker och betalar med en 500-kronorssedel. Du får 95 kr tillbaka i växel. Om du istället hade köpt 5 stycken av samma bok, vad hade det kostat totalt?", answer: ["675", "675 kr", "675kr", "675 kronor"] },
        desc: "Kura ihop dig i vintermörkret och lös dagens kluringar!", 
        rhyme: "", video: "", starVideo: "" 
    },
    4: { 
        title: "Fredag 4 December", 
        dayType: "weekday",
        u1: { prompt: "I en skål ligger dubbelt så många röda godisbitar som gröna. Totalt ligger det 36 godisbitar i skålen. Hur många röda godisbitar finns det?", answer: ["24", "24 röda", "24 stycken", "24 st", "24 godisbitar"] },
        u2: { prompt: "En temperaturmätare visar -4°C på morgonen. Fram till lunch stiger temperaturen med 9°C, och på kvällen sjunker den igen med 7°C. Vad blir medelvärdet av de tre uppmätta temperaturerna? (Avrunda till två decimaler eller svara i bråkform)", answer: ["-0,33", "-0.33", "-0,33°C", "-0.33°C", "-0,33 °C", "-1/3", "-1/3°C", "-1/3 °C"] },
        desc: "Fredagens utmaning! Lös båda frågorna för att tända helgens första stjärna!", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/aAkMkVFwAoo?autoplay=1&mute=0" 
    },
    5: { 
        title: "Lördag 5 December", 
        dayType: "weekday", 
        u1: { prompt: "En kvadrat har omkretsen 32 cm. Du sätter ihop två likadana kvadrater kant i kant så att de bildar en rektangel. Vad blir rektangelns omkrets?", answer: ["48", "48 cm", "48cm"] },
        u2: { prompt: "En fabrik tillverkar 450 glödlampor per timme. Vid en kvalitetskontroll kasseras 4 % av lamporna. Resten packas i kartonger med 6 lampor i varje. Hur många hela kartonger fylls på en timme?", answer: ["72", "72 kartonger", "72kartonger", "72 stycken", "72 st"] },
        desc: "Lördagsutmaning! Svara på båda frågorna för att tända dagens stjärna.",
        video: "", starVideo: ""
    },
    6: { 
        title: "Söndag 6 December - 2:a Advent", 
        dayType: "minigame",
        minigameType: "multiplication",
        desc: "2:a Advent! Klara multiplikationsspelet genom att svara rätt på 20 frågor (tabellerna 1–10). Varje rätt svar tänder en stjärna i ramen. När alla 20 stjärnor lyser tänds det andra adventsljuset!", 
        video: "", starVideo: "https://www.youtube.com/embed/E8gmARGvPlI?autoplay=1&mute=0" 
    },
    7: { 
        title: "Måndag 7 December", 
        dayType: "weekday",
        u1: { prompt: "Förhållandet mellan antalet katter och hundar på ett djurhem är 3 : 5. Om det finns 15 katter på hemmet, hur många djur finns det totalt?", answer: ["40", "40 djur", "40djur", "40 stycken", "40 st"] },
        u2: { prompt: "Kim tjänar 120 kr i timmen och arbetar 6 timmar. Av lönen sparar Kim en fjärdedel och köper sedan en tröja för 350 kr. Hur mycket pengar har Kim kvar att spendera?", answer: ["190", "190 kr", "190kr", "190 kronor"] },
        desc: "Ny vecka och nya utmaningar!", 
        rhyme: "", video: "", starVideo: "" 
    },
    8: { 
        title: "Tisdag 8 December", 
        dayType: "weekday",
        u1: { prompt: "En kub har totalt 12 kanter. Summan av längden på alla kanter är 60 cm. Hur stor är kubens volym?", answer: ["125", "125 cm³", "125 cm3", "125cm³", "125cm3", "125 kubikcentimeter"] },
        u2: { prompt: "Ett tåg avgår kl. 08:45 och ankommer kl. 11:15. Under resan gör tåget ett uppehåll på 30 minuter. Sträckan mellan stationerna är 220 km. Vilken var tågets medelhastighet under den tid det faktiskt rullade?", answer: ["110", "110 km/h", "110km/h", "110 km/tim"] },
        desc: "Tomteverkstaden ångar på! Lös uppgifterna och samla fler stjärnor.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/ESWWoF657VE?start=22&autoplay=1&mute=0" 
    },
    9: { 
        title: "Onsdag 9 December", 
        dayType: "weekday",
        u1: { prompt: "I en triangel är den första vinkeln 45° och den andra vinkeln dubbelt så stor som den första. Hur stor är den tredje vinkeln?", answer: ["45", "45°", "45 grader"] },
        u2: { prompt: "Ett paket med 400 g ost kostar 48 kr. Ett större paket av samma ost väger 750 g och har ett kilopris som är 10 kr lägre än det lilla paketet. Vad kostar det stora paketet?", answer: ["82,50", "82.50", "82,5", "82.5", "82,50 kr", "82.50 kr", "82,5 kr", "82.5 kr"] },
        desc: "Halvvägs genom veckan! Du kämpar på jättebra.", 
        rhyme: "", video: "", starVideo: "" 
    },
    10: { 
        title: "Torsdag 10 December", 
        dayType: "weekday",
        u1: { prompt: "Talet x multipliceras med 4 och produkten minskas med 7. Resultatet blir 29. Vilket är talet x?", answer: ["9", "x = 9", "x=9"] },
        u2: { prompt: "På en fotbollsmatch såldes 2 400 biljetter. 65 % var hemmapublik och resten bortapublik. Om 150 personer ur bortapubliken gick hem i halvtid, hur många i bortapubliken såg slutet av matchen?", answer: ["690", "690 personer", "690personer", "690 st"] },
        desc: "Snyggt klarat! Lös frågorna för att tända stjärnan.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/xi4OpBMbyGY?autoplay=1&mute=0" 
    },
    11: { 
        title: "Fredag 11 December", 
        dayType: "weekday",
        u1: { prompt: "En blomma är 12 cm hög när du köper den. Den växer med 1,5 cm per vecka. Hur många veckor tar det innan den är 30 cm hög?", answer: ["12", "12 veckor", "12veckor", "12 v"] },
        u2: { prompt: "En rätvinklig triangel har kateterna 8 cm och 9 cm. En kvadrat har exakt samma area som triangeln. Vilken sidlängd har kvadraten?", answer: ["6", "6 cm", "6cm"] },
        desc: "Lussebullsbaket närmar sig! Lös båda uppgifterna för att tända fredagsstjärnan.", 
        rhyme: "", video: "", starVideo: "" 
    },
    12: { 
        title: "Lördag 12 December", 
        dayType: "weekday", 
        u1: { prompt: "Du kastar en vanlig sexsidig tärning två gånger. Hur stor är sannolikheten att du får en sexa på första kastet och ett udda tal på andra kastet? Svara i enklaste bråkform.", answer: ["1/12"] },
        u2: { prompt: "En tankbil innehåller 12 000 liter bensin. Först levereras 35 % av bensinen till en mack. Därefter levereras hälften av det som är kvar till en annan mack. Hur många liter finns kvar i tankbilen?", answer: ["3900", "3 900", "3900 liter", "3 900 liter", "3900l", "3900 l"] },
        desc: "Lördagsutmaning! Lös kluringarna och tänd dagens stjärna.",
        video: "", starVideo: "https://www.youtube.com/embed/kpSOWZCSPxo?autoplay=1&mute=0" 
    },
    13: { 
        title: "Söndag 13 December - Glad Lucia & 3:e Advent", 
        dayType: "minigame", 
        minigameType: "division",
        desc: "Glad Lucia & 3:e Advent! Klara divisionsspelet genom att svara rätt på 20 frågor (tabellerna 1–10). När alla 20 stjärnor i ramen lyser tänds det tredje adventsljuset!", 
        video: "https://www.youtube.com/embed/QVc5rAzMQCs?autoplay=1&mute=1", starVideo: "" 
    },
    14: { 
        title: "Måndag 14 December", 
        dayType: "weekday",
        u1: { prompt: "En bok har 240 sidor. Ali läser 35 sidor på måndagen och dubbelt så många sidor på tisdagen. Hur många sidor har Ali kvar att läsa?", answer: ["135", "135 sidor", "135sidor"] },
        u2: { prompt: "Tre syskon ska dela på 1 800 kr. Äldsta syskonet får hälften av pengarna. Mellansyskonet får en tredjedel av resten. Hur mycket får det yngsta syskonet?", answer: ["600", "600 kr", "600kr", "600 kronor"] },
        desc: "Start på veckan efter Lucia! Lös båda frågorna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/j9jbdgZidu8?autoplay=1&mute=0" 
    },
    15: { 
        title: "Tisdag 15 December", 
        dayType: "weekday",
        u1: { prompt: "Medelvärdet av tre tal är 20. Två av talen är 14 och 21. Vilket är det tredje talet?", answer: ["25"] },
        u2: { prompt: "En fyrkantig duk har måtten 1,2 m × 1,5 m. Du ska sy ett dekorband runt hela kanten. Bandet kostar 25 kr per meter, och du behöver köpa 10 % extra för att kunna vika hörnen. Vad kostar bandet?", answer: ["148,50", "148.50", "148,5", "148.5", "148,50 kr", "148.50 kr", "148,5 kr", "148.5 kr"] },
        desc: "Riktigt bra jobbat i tomteverkstaden!", 
        rhyme: "", video: "", starVideo: "" 
    },
    16: { 
        title: "Onsdag 16 December", 
        dayType: "weekday",
        u1: { prompt: "En isbit smälter så att dess vikt minskar med 20 % varje timme. Om isbiten väger 50 gram från början, hur mycket väger den efter 2 timmar?", answer: ["32", "32 gram", "32 g", "32g"] },
        u2: { prompt: "I en klass på 25 elever har 18 elever en hund och 12 elever en katt. 7 elever har både hund och katt. Hur många elever i klassen har varken hund eller katt?", answer: ["2", "2 elever", "2elever", "2 st"] },
        desc: "Knäck och julgodis koka! Lös uppgifterna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/TS9vmrBTxEo?autoplay=1&mute=0" 
    },
    17: { 
        title: "Torsdag 17 December", 
        dayType: "weekday",
        u1: { prompt: "Ett tåg har 8 vagnar med 64 sittplatser i varje vagn. Om 75 % av platserna är upptagna, hur många lediga sittplatser finns det?", answer: ["128", "128 platser", "128 sittplatser", "128platser", "128 st"] },
        u2: { prompt: "En cylindrisk burk med radien 5 cm och höjden 10 cm är fylld till hälften med vatten. Du häller över vattnet i en rätblockformad låda med bottenytan 10 cm × 10 cm. Hur högt stiger vattnet i lådan? (Avrunda till en decimal, använd π ≈ 3,14)", answer: ["3,9", "3.9", "3,9 cm", "3.9 cm", "3,9cm", "3.9cm"] },
        desc: "Torsdagsutmaning! Svara på båda frågorna för att tända stjärnan.", 
        rhyme: "", video: "", starVideo: "" 
    },
    18: { 
        title: "Fredag 18 December", 
        dayType: "weekday", 
        u1: { prompt: "Priset på en vara höjs från 200 kr till 250 kr. Med hur många procent höjdes priset?", answer: ["25", "25%", "25 %", "25 procent"] },
        u2: { prompt: "En bussbiljett kostar 32 kr för vuxen och 18 kr för ungdom. En familj betalar totalt 136 kr för 2 vuxna och ett antal ungdomar. Hur många ungdomar åkte med?", answer: ["4", "4 ungdomar", "4ungdomar", "4 st"] },
        desc: "Fredagsutmaning! Lös båda frågorna för att tända stjärnan.", 
        video: "", starVideo: "https://www.youtube.com/embed/RH-xd5bPKTA?autoplay=1&mute=0" 
    },
    19: { 
        title: "Lördag 19 December", 
        dayType: "weekday", 
        u1: { prompt: "En klocka går 3 minuter för fort per dygn. Den ställs rätt på måndag kl. 12:00. Vad visar klockan när den egentligen är 12:00 på fredag samma vecka?", answer: ["12:12", "12.12", "klockan 12:12", "kl 12:12"] },
        u2: { prompt: "En triangel har omkretsen 41 cm. Den längsta sidan är 4 cm längre än mellansidan, och den kortaste sidan är 2 cm kortare än mellansidan. Hur lång är den längsta sidan?", answer: ["17", "17 cm", "17cm"] },
        desc: "Klä granen och lös dagens två matteutmaningar!", 
        video: "", starVideo: "" 
    },
    20: { 
        title: "Söndag 20 December - 4:e Advent", 
        dayType: "minigame", 
        minigameType: "mixed",
        desc: "Fjärde advent! Klara den mixade utmaningen (multiplikation & division 1–10) för att tända 20 stjärnor i ramen och tända det fjärde adventsljuset!", 
        video: "", starVideo: "https://www.youtube.com/embed/wKhRnZZ0cJI?autoplay=1&mute=0" 
    },
    21: { 
        title: "Måndag 21 December", 
        dayType: "weekday", 
        u1: { prompt: "En trappa har 16 trappsteg. Varje trappsteg är 18 cm högt. Hur många meter skiljer det i höjd mellan golvet och översta trappsteget?", answer: ["2,88", "2.88", "2,88 meter", "2.88 meter", "2,88 m", "2.88 m", "2,88m", "2.88m"] },
        u2: { prompt: "En skola samlar in pengar till välgörenhet. Åk 7 samlar in 2 400 kr. Åk 8 samlar in 25 % mer än åk 7. Åk 9 samlar in hälften så mycket som åk 7 och åk 8 tillsammans. Hur mycket samlar åk 9 in?", answer: ["2700", "2 700", "2700 kr", "2 700 kr", "2700kr", "2 700kr"] },
        desc: "Vintersolståndet! Lös frågorna för att tända stjärnan.", 
        video: "", starVideo: "" 
    },
    22: { 
        title: "Tisdag 22 December", 
        dayType: "weekday", 
        u1: { prompt: "Du har 400 kr. Du köper 4 biobiljetter för 85 kr styck. Hur många 10-kronors godispåsar räcker resten av pengarna till?", answer: ["6", "6 påsar", "6 godispåsar", "6påsar", "6 st"] },
        u2: { prompt: "En rektangel har längden 12 cm och bredden 5 cm. Om längden ökas med 25 % och bredden minskas med 20 %, hur många procent förändras rektangelns area?", answer: ["0", "0%", "0 %", "0 procent", "ingen förändring"] },
        desc: "Uppesittarstämning! Lös båda matematikuppgifterna.", 
        video: "", starVideo: "https://www.youtube.com/embed/4Q7cIyWadUg?autoplay=1&mute=0" 
    },
    23: { 
        title: "Onsdag 23 December - Dan före dan", 
        dayType: "weekday", 
        u1: { prompt: "En rät linje skär y-axeln i punkten (0, 5) och går genom punkten (4, 13). Vad är linjens lutning (k-värde)?", answer: ["2", "k = 2", "k=2"] },
        u2: { prompt: "Tomten har 360 julklappar att dela ut. Under första timmen hinner han dela ut 1/4 av klapparna. Under andra timmen delar han ut 2/5 av de som var kvar. Hur många julklappar har han kvar att dela ut inför tredje timmen?", answer: ["162", "162 julklappar", "162 klappar", "162julklappar", "162 st"] },
        desc: "Dan före dopparedagen! Svara på frågorna för att tända sista stjärnan innan julafton.", 
        video: "", starVideo: "" 
    },
    24: { 
        title: "Julafton 24 December", 
        dayType: "weekend", 
        desc: "GOD JUL! Njut av Kalle Anka och hans vänner och ha en underbar julafton!", 
        video: "https://www.youtube.com/embed/l49a9z8xBL0?autoplay=1&mute=1", starVideo: "https://www.youtube.com/embed/joWd2P-6keM?autoplay=1&mute=0" 
    }
};
