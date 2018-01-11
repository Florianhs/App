// Modell besteht aus Array von Locations mit Attributen

var myLocations = 
[
	{
		"bezeichnung":"Müller",
        "datum":"2017-12-20",
        "entfernung":"1",
    	"adresse":"Lindenhügel 8640 Rapperswil",
    	"telefon":"0552101828",
       	"longitude":"8.815584",
    	"latitude":"47.227533",
        "Beratungsgespraech": "Nein",
        "KundenID":"100",
    	"alterStand":"241322",
    	"Pos":"1",

        "Tarif":"Oekostrom",
        "Letzte":"25.09.12",
        "images": {
            "0": "schloss1.jpg",
            "1": "schloss2.jpg"
        }
    }, {
        "bezeichnung":"Schmidt",
        "datum":"2017-12-20",
    "entfernung":"3",
    	"adresse":"Heimplatz 1, 8001 Zürich",
    	"telefon":"+44 253 48484",
       	"longitude":"8.548133",
    	"latitude":"47.370297",
        "Beratungsgespraech": "JA",
        "KundenID":"101",
    	"alterStand":"476223",
        "Pos":"2",
        "Tarif":"Oekostrom",
        "Letzte":"27.07.16",
        "images": {
            "0": "schloss3.jpg",
            "1": "schloss2.jpg"
        }
    }, {
        "bezeichnung":"Maier",
        "datum":"2017-12-20",
    "entfernung":"3",
        "adresse":"Münsterplatz, 79098 Freiburg im Breisgau",
        "telefon":"+49 761 4488243",
        "longitude":"7.852832",
        "latitude":"47.995567",
        "Beratungsgespraech": "JA",
        "KundenID":"102",
        "alterStand":"436345",
         "Pos":"3",
        "Tarif":"Konventionell",
        "Letzte":"23.04.10",
        "images": {
            "0": "freiburg_muenster1.jpg",
            "1": "freiburg_muenster2.jpg"
        }
    }, {
        "bezeichnung":"Schwammkopf",
        "datum":"2017-12-20",
    "entfernung":"6",
        "adresse":"Münsterplatz, 79098 Freiburg im Breisgau",
        "telefon":"+49 761 2187243",
        "longitude":"7.852832",
        "latitude":"47.995567",
        "Beratungsgespraech": "JA",
        "KundenID":"103",
        "alterStand":"436345",
        "Pos":"4",
        "Tarif":"Konventionell",
        "Letzte":"23.04.10",
        "images": {
            "0": "freiburg_muenster1.jpg",
            "1": "freiburg_muenster2.jpg"
        }
    }, {
		"bezeichnung":"Patrick",
        "datum":"2017-12-20",
    "entfernung":"4",
    	"adresse":"Lindenhügel 8640 Rapperswil",
    	"telefon":"+49 5521 01828",
       	"longitude":"8.815584",
    	"latitude":"47.227533",
        "Beratungsgespraech": "Nein",
        "KundenID":"104",
    	"alterStand":"241322",
         "Pos":"5",
        "Tarif":"Oekostrom",
        "Letzte":"25.09.12",
        "images": {
            "0": "schloss1.jpg",
            "1": "schloss2.jpg"
        }
    }, {
        "bezeichnung":"Candy",
        "datum":"2017-12-20",
    "entfernung":"9",
    	"adresse":"Heimplatz 1, 8001 Zürich",
    	"telefon":"044 253 84 84",
       	"longitude":"8.548133",
    	"latitude":"47.370297",
        "Beratungsgespraech": "JA",
        "KundenID":"105",
    	"alterStand":"476223",
        "Pos":"6",
        "Tarif":"Oekostrom",
        "Letzte":"27.07.16",
        "images": {
            "0": "schloss3.jpg",
            "1": "schloss2.jpg"
        }
    }, {
        "bezeichnung":"Tadeus",
        "datum":"2017-12-20",
    "entfernung":"23",
        "adresse":"Münsterplatz, 79098 Freiburg im Breisgau",
        "telefon":"+49 761 2188243",
        "longitude":"7.852832",
        "latitude":"47.995567",
        "Beratungsgespraech": "JA",
        "KundenID":"106",
        "alterStand":"436345",
         "Pos":"7",
        "Tarif":"Konventionell",
        "Letzte":"23.04.10",
        "images": {
            "0": "freiburg_muenster1.jpg",
            "1": "freiburg_muenster2.jpg"
        }
    }, {
        "bezeichnung":"Ms. Puff",
        "datum":"2017-12-20",
    "entfernung":"44",
        "adresse":"Münsterplatz, 79098 Freiburg im Breisgau",
        "telefon":"+49 761 2188243",
        "longitude":"7.852832",
        "latitude":"47.995567",
        "Beratungsgespraech": "JA",
        "KundenID":"107",
        "alterStand":"436345",
    "Pos":"8",
        "Tarif":"Konventionell",
        "Letzte":"23.04.10",
        "images": {
            "0": "freiburg_muenster1.jpg",
            "1": "freiburg_muenster2.jpg"
        }
    }, {
        "bezeichnung":"Marx",
        "datum":"2017-12-20",
    "entfernung":"11",
        "adresse":"Moselstraße 33, 54470 Lieser",
        "telefon":"+49 552 1018428",
        "longitude":"7.019277",
        "latitude":"49.917318",
        "Beratungsgespraech": "Nein",
        "KundenID":"108",
        "alterStand":"241322",
     
        "Tarif":"Oekostrom",
        "Letzte":"25.09.12",
        "images": {
            "0": "schloss-lieser.jpg",
            "1": "schloss-lieser2.jpg"
        }
    }, {
        "bezeichnung":"Engel",
        "datum":"2017-12-21",
    "entfernung":"2",
        "adresse":"Moselstraße 33, 54470 Lieser",
        "telefon":"+49 6531 33625.",
        "longitude":"7.019277",
        "latitude":"49.917318",
        "Beratungsgespraech": "Nein",
        "KundenID":"109",
        "alterStand":"241322",
    
        "Tarif":"Konventionell",
        "Letzte":"25.09.12",
        "images": {
            "0": "schloss_lieser.jpg",
            "1": "schloss-lieser2.jpg"
        }
    }, {
        "bezeichnung":"McConchita",
        "datum":"2017-12-20",
    "entfernung":"67",
        "adresse":"Schlossbezirk, 76131, Karlsruhe",
        "telefon":"+49 6531 1828",
        "longitude":"8.404330",
        "latitude":"49.014108",
        "Beratungsgespraech": "Ja",
        "KundenID":"110",
        "alterStand":"241322",
    
        "Tarif":"Oekostrom",
        "Letzte":"25.09.12",
        "images": {
            "0": "schloss-karlsruhe.jpg",
            "1": "schloss-karlsruhe2.jpg"
        }
    }, {
        "bezeichnung":"Mr. Star",
        "datum":"2017-12-21",
    "entfernung":"90",
        "adresse":"Sternplatz, 89584, Ehingen",
        "telefon":"+49 761 2188243",
        "longitude":"9.729371",
        "latitude":"48.284033",
        "Beratungsgespraech": "JA",
        "KundenID":"111",
        "alterStand":"436345",
  
        "Tarif":"Oekostrom",
        "Letzte":"23.07.12",
        "images": {
            "0": "freiburg_muenster1.jpg",
            "1": "freiburg_muenster2.jpg"
        }
    }, {
        "bezeichnung":"Bibidubabidu",
        "datum":"2017-12-20",
    "entfernung":"54",
        "adresse":"Schlossbezirk, 76131, Karlsruhe",
        "telefon":"+49 6531 1828",
        "longitude":"8.404330",
        "latitude":"49.014108",
        "Beratungsgespraech": "Ja",
        "KundenID":"112",
        "alterStand":"23666",
    
        "Tarif":"Oekostrom",
        "Letzte":"25.09.14",
        "images": {
            "0": "schloss-karlsruhe.jpg",
            "1": "schloss-karlsruhe2.jpg"
        }
    }, {
        "bezeichnung":"Kalinka",
        "datum":"2017-12-21",
    "entfernung":"30",
        "adresse":"Schlossbezirk, 76131, Karlsruhe",
        "telefon":"+49 6531 1828",
        "longitude":"8.404330",
        "latitude":"49.014108",
        "Beratungsgespraech": "Ja",
        "KundenID":"113",
        "alterStand":"241322",
   
        "Tarif":"Konventiontell",
        "Letzte":"25.09.10",
        "images": {
            "0": "schloss-karlsruhe.jpg",
            "1": "schloss-karlsruhe2.jpg"
        }
    }, {
        "bezeichnung":"Fasnacht",
        "datum":"2017-12-20",
    "entfernung":"76",
        "adresse":"Schlossbezirk, 76131, Karlsruhe",
        "telefon":"+49 334 1828",
        "longitude":"8.404330",
        "latitude":"49.014108",
        "Beratungsgespraech": "Nein",
        "KundenID":"114",
        "alterStand":"241322",
 
        "Tarif":"Konventiontell",
        "Letzte":"25.09.10",
        "images": {
            "0": "schloss-karlsruhe.jpg",
            "1": "schloss-karlsruhe2.jpg"
        }
    },   {
    "bezeichnung":"Karneval",
    "datum":"2017-12-21",
    "entfernung":"23",
    "adresse":"Domkloster 4, 50667 Köln",
    "telefon":"+49 221 1828",
    "longitude":"6.958657",
    "latitude":"50.941268",
    "Beratungsgespraech": "Ja",
    "KundenID":"115",
    "alterStand":"241322",

    "Tarif":"Konventiontell",
    "Letzte":"25.09.10",
    "images": {
        "0": "dom_koeln.jpg",
        "1": "dom_koeln2.jpg"
    }
}
];

/*
 "longitude":"8.546794652938843",
 "latitude":"47.37633445120742",
 */

