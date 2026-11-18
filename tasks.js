const calendarContent = {
    1: { 
        title: "Tisdag 1 December", 
        dayType: "weekday",
        u1: { prompt: "(-7) + (-9) - (-5)", answer: ["-11"] },
        u2: { prompt: "Area för triangel med bas = 8 cm, höjd = 5 cm", answer: ["20", "20cm2", "20cm²", "20 cm2", "20 cm²"] },
        desc: "Välkommen till årets magiska julkalender! Svara på dagens två frågor för att tända en guldstjärna!", 
        rhyme: "", video: "", starVideo: "" 
    },
    2: { 
        title: "Onsdag 2 December", 
        dayType: "weekday",
        u1: { prompt: "Förenkla: 4a + 7b - 2a - 3b", answer: ["2a+4b", "2a + 4b"] },
        u2: { prompt: "15% av 600 kr", answer: ["90", "90kr", "90 kr"] },
        desc: "Härligt jobbat! Glöm inte att lösa båda uppgifterna för att tända en bakgrundsstjärna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/WM7M7zSMJcw?autoplay=1" 
    },
    3: { 
        title: "Torsdag 3 December", 
        dayType: "weekday",
        u1: { prompt: "2/5 + 1/3", answer: ["11/15"] },
        u2: { prompt: "Medelvärde av 4, 7, 8, 9, 12", answer: ["8"] },
        desc: "Kura ihop dig i vintermörkret och lös dagens kluringar!", 
        rhyme: "", video: "", starVideo: "" 
    },
    4: { 
        title: "Fredag 4 December", 
        dayType: "weekday",
        u1: { prompt: "Totalt 48 kulor (röda, blå, guldiga). Dubbelt så många guldiga som blå, och 8 fler röda än blå. Hur många guldiga kulor finns det?", answer: ["20", "20 guldiga", "20guldiga", "20 guldiga kulor"] },
        u2: { prompt: "Hur många blå kulor finns det i lådan?", answer: ["10", "10 blå", "10blå", "10 blå kulor"] },
        desc: "Fredagens utmaning! Lös båda frågorna för att tända helgens första stjärna!", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/aAkMkVFwAoo?autoplay=1&mute=0" 
    },
    5: { 
        title: "Lördag 5 December", 
        dayType: "weekday", 
        u1: { prompt: "Vinkelsumman i en triangel minus 45°", answer: ["135", "135°", "135 deg"] },
        u2: { prompt: "Vad är 0,75 uttryckt i enklaste bråkform?", answer: ["3/4"] },
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
        u1: { prompt: "Omkrets för rektangel med sidorna 7 cm × 9 cm", answer: ["32", "32cm", "32 cm"] },
        u2: { prompt: "Skriv 3 800 000 i grundpotensform", answer: ["3,8*10^6", "3.8*10^6", "3,8·10^6", "3,8*106", "3.8*106", "3,8x10^6", "3,8 10^6"] },
        desc: "Ny vecka och nya utmaningar!", 
        rhyme: "", video: "", starVideo: "" 
    },
    8: { 
        title: "Tisdag 8 December", 
        dayType: "weekday",
        u1: { prompt: "Lös ekvationen: 5x - 8 = 22", answer: ["x=6", "6"] },
        u2: { prompt: "Sannolikhet att få mer än 4 på en sexsidig tärning", answer: ["1/3", "2/6"] },
        desc: "Tomteverkstaden ångar på! Lös uppgifterna och samla fler stjärnor.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/ESWWoF657VE?start=22&autoplay=1&mute=0" 
    },
    9: { 
        title: "Onsdag 9 December", 
        dayType: "weekday",
        u1: { prompt: "800 kr sänks med 25%. Vad blir det nya priset?", answer: ["600", "600kr", "600 kr"] },
        u2: { prompt: "Det n-te talet i talföljden 5, 9, 13, 17 ...", answer: ["4n+1", "4n + 1"] },
        desc: "Halvvägs genom veckan! Du kämpar på jättebra.", 
        rhyme: "", video: "", starVideo: "" 
    },
    10: { 
        title: "Torsdag 10 December", 
        dayType: "weekday",
        u1: { prompt: "Omkrets för cirkel med radie r = 5 cm (Använd pi = 3,14)", answer: ["31,4", "31.4", "31,4cm", "31.4cm"] },
        u2: { prompt: "Beräkna: (-3) · (-6) - 10", answer: ["8"] },
        desc: "Snyggt klarat! Lös frågorna för att tända stjärnan.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/xi4OpBMbyGY?autoplay=1&mute=0" 
    },
    11: { 
        title: "Fredag 11 December", 
        dayType: "weekday",
        u1: { prompt: "Tre bagare (Anna, Bertil, Cecilia). Anna bakar dubbelt så snabbt som Bertil. Cecilia bakar 10 bullar mer än Anna/h. Tillsammans bakar de 110 bullar på 2 timmar. Hur många bakar Bertil per timme?", answer: ["9", "9 bullar", "9 bullar/h", "9bullar"] },
        u2: { prompt: "Hur många bakar Cecilia per timme?", answer: ["28", "28 bullar", "28 bullar/h", "28bullar"] },
        desc: "Lussebullsbaket närmar sig! Lös båda uppgifterna för att tända fredagsstjärnan.", 
        rhyme: "", video: "", starVideo: "" 
    },
    12: { 
        title: "Lördag 12 December", 
        dayType: "weekday", 
        u1: { prompt: "Beräkna 5² - 3²", answer: ["16"] },
        u2: { prompt: "Delar du ett snöre på 120 cm i tre delar med förhållandet 1:2:3, hur lång är den längsta delen?", answer: ["60", "60cm", "60 cm"] },
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
        u1: { prompt: "3 kg äpplen kostar 75 kr. Vad kostar 7 kg?", answer: ["175", "175kr", "175 kr"] },
        u2: { prompt: "Beräkna: (3/4) · (8/9)", answer: ["2/3"] },
        desc: "Start på veckan efter Lucia! Lös båda frågorna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/j9jbdgZidu8?autoplay=1&mute=0" 
    },
    15: { 
        title: "Tisdag 15 December", 
        dayType: "weekday",
        u1: { prompt: "Längd på hypotenusan i en rätvinklig triangel med kateterna 6 cm & 8 cm", answer: ["10", "10cm", "10 cm"] },
        u2: { prompt: "Hur många procent är 12 cm av 60 cm?", answer: ["20%", "20", "20 %"] },
        desc: "Riktigt bra jobbat i tomteverkstaden!", 
        rhyme: "", video: "", starVideo: "" 
    },
    16: { 
        title: "Onsdag 16 December", 
        dayType: "weekday",
        u1: { prompt: "Beräkna värdet av 2x - 3y om x = 4 och y = -2", answer: ["14"] },
        u2: { prompt: "Bestäm medianen för talen: 3, 5, 5, 6, 8, 9, 13", answer: ["6"] },
        desc: "Knäck och julgodis koka! Lös uppgifterna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/TS9vmrBTxEo?autoplay=1&mute=0" 
    },
    17: { 
        title: "Torsdag 17 December", 
        dayType: "weekday",
        u1: { prompt: "Beräkna 2⁴ + 3²", answer: ["25"] },
        u2: { prompt: "4 vänner delar nota. En har inga pengar, övriga 3 betalar 80 kr extra var. Vad var totalkostnaden?", answer: ["960", "960kr", "960 kr"] },
        desc: "Torsdagsutmaning! Svara på båda frågorna för att tända stjärnan.", 
        rhyme: "", video: "", starVideo: "" 
    },
    18: { 
        title: "Fredag 18 December", 
        dayType: "weekday", 
        u1: { prompt: "Skala 1:5000. Hur lång är 4 cm på kartan i verkligheten?", answer: ["200m", "200 m", "200"] },
        u2: { prompt: "Vinkelsumman i en sexhörning (hexagon)", answer: ["720", "720°", "720 deg"] },
        desc: "Fredagsutmaning! Lös båda frågorna för att tända stjärnan.", 
        video: "", starVideo: "https://www.youtube.com/embed/RH-xd5bPKTA?autoplay=1&mute=0" 
    },
    19: { 
        title: "Lördag 19 December", 
        dayType: "weekday", 
        u1: { prompt: "Skriv 0,0045 i grundpotensform", answer: ["4,5*10^-3", "4.5*10^-3", "4,5·10^-3", "4,5*10-3", "4.5*10-3"] },
        u2: { prompt: "Beräkna 3/5 - 1/4", answer: ["7/20"] },
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
        u1: { prompt: "Lös ekvationen: x/4 - 7 = 5", answer: ["x=48", "48"] },
        u2: { prompt: "Priset på en jacka höjs med 10% och därefter med 20%. Vad är den totala procentuella höjningen?", answer: ["32%", "32", "32 %"] },
        desc: "Vintersolståndet! Lös frågorna för att tända stjärnan.", 
        video: "", starVideo: "" 
    },
    22: { 
        title: "Tisdag 22 December", 
        dayType: "weekday", 
        u1: { prompt: "Beräkna värdet av a² - b² om a = 9 och b = 7", answer: ["32"] },
        u2: { prompt: "Vad är typvärdet för datamängden 4, 2, 8, 4, 9, 4, 6, 2?", answer: ["4"] },
        desc: "Uppesittarstämning! Lös båda matematikuppgifterna.", 
        video: "", starVideo: "https://www.youtube.com/embed/4Q7cIyWadUg?autoplay=1&mute=0" 
    },
    23: { 
        title: "Onsdag 23 December - Dan före dan", 
        dayType: "weekday", 
        u1: { prompt: "Vad blir (5/6) ÷ (2/3) i enklaste bråkform?", answer: ["5/4"] },
        u2: { prompt: "En cirkel har omkretsen 18,84 cm. Vad är dess radie? (pi ≈ 3,14)", answer: ["3cm", "3 cm", "3"] },
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
