// Controller fuer Events

$(document).ready(function(){
    //Ereignis: Attraktion suchen
   

    $('#refresh').click(searchPosition);
    $('#speichern').click(speichern);
    $('#upload').click(upload.php);

   //  $('#erledigt').click(erledigt);
   // $('#erledigt').click(searchPosition());


   // $('#day').selected();             Erst datum auswählen dann reefresh laden der kunden

    // $('#refresh').click(function() {
    //    document.reload();
    // });

    //Ereignis: Karte anzeigen
    $('#showMapButton').click(showMap1);
    $('#showMapButton2').click(showMap2);
    $('#showMapButton3').click(showMap3);
    $('#showMapButton4').click(showMap4);
    $('#showMapButton5').click(showMap5);
    $('#showMapButton6').click(showMap6);
    $('#showMapButton7').click(showMap7);
    $('#showMapButton8').click(showMap8);
    $('#showMapButton9').click(showMap9);
    $('#showMapButton10').click(showMap10);
    $('#showMapButton11').click(showMap11);
    $('#showMapButton12').click(showMap12);
    $('#showMapButton13').click(showMap13);
    $('#showMapButton14').click(showMap14);
    $('#showMapButton15').click(showMap15);
    $('#showMapButton16').click(showMap16);

    console.log("DOM ready");
});

function speichern() {

    var day = document.getElementById("day").value;
   // myLocation[locationID][Letzte] = day;
    //alert(day);
    locationID = localStorage.getItem('locationID');

  locationID ++;
  var letzte = locationID;

    locationID = 0;
    for (locationID; locationID < letzte; locationID++) {
        var standneu = document.getElementById("neu" + locationID).value;
        //alert(standneu);
// where (beschrLocationContentTop" + ) == myLocations.KundenID)
        myLocations[locationID].alterStand = standneu;
       // alert("neuer stand ist " + myLocations[0].alterStand);

        alert(("Daten wurden aktualisiert."));

        $("#lastdate" + locationID).text(day);
       // $("#alterStand" + locationID).text(myLocations[locationID].alterStand);
        $("#alterStand" + locationID).text(standneu);

    }
   // var pos = locationID;
   // myLocations.alterStand = standneu;

   // searchPosition();
   // localStorage.setItem('standneu', standneu);
   //  var gespeichert = localStorage.getItem('standneu');

   // var neu = $('#neu').val();
   // alert("gespeichert"+ gespeichert);
}

/*
function erledigt(){                                soll den bereits aktualisierten Kunden löschen
locationID = 0
    $("#container" + locationID).remove();
Alert("Kunden wurden aktualisiert!");
searchPosition();
}  */


    function searchPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(nearestLocation);
        } else {
            alert("Geolocation wird vom Browser nicht unterstuetzt");
        }
    }

 function nearestLocation(position){

        var myLocation;
        var currentLng = position.coords.longitude;
        var currentLat = position.coords.latitude;
        var locationLng;
        var locationLat;
        var selectedday;
        var dx;
        var dy;
     var anzahl = myLocations.length;
     var day = document.getElementById("day").value;
    //alert(day);
        var distance;
        var nearestAttraction = 15000; // ein extrem weit entfernter Ort (unrealistisch)

        var locationID=0;

        //Annahme: Maximal drei Attraktionen
        for (var i = 0; i < anzahl; i++){

            myLocation = myLocations[i];

            locationLng = myLocation.longitude;
            locationLat = myLocation.latitude;

            /***************************************************************************/
            /* TODO: 5a.1 nearestLocation ergaenzen */
            /***************************************************************************/
                //distance: Entfernung in km: distance = Math.sqrt(dx * dx + dy * dy);


            dx = 71.5 * (currentLng - locationLng);
            dy = 111.3 * (currentLat - locationLat);

            distance = Math.sqrt(dx * dx + dy * dy);

            myLocations[locationID].entfernung = distance;
          //  myLocations.sort(function(a, b){
           //     return a.entfernung-b.entfernung
           // });

            function sortbyname(a,b) {

                    var aName = a.entfernung.toLowerCase();                                 /*Sortieren*/
                    var bName = b.entfernung.toLowerCase();

                    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));

                console.log(myLocations);

            }

            //alert(myLocations.entfernung);


           /* if (distance < nearestAttraction){
                nearestAttraction = distance;
                var strecke = [];
                $(strecke).append(locationID)
                locationID = i;
            }
        */
            console.log('Distance ' + i + ': ' + distance);
        /*      var entfernungen = [];
            entfernungen[i]= nearestAttraction;
            //alert(entfernungen);
            entfernungen.sort(function (a,b) {
                return b - a
            });
        */
        }

        //Fuer Uebung 5c: Speichern der aktuellen Position und naechsten Attraktion im localStorage
        localStorage.setItem('currentLat', currentLat);
        localStorage.setItem('currentLng', currentLng);
        localStorage.setItem('locationID', locationID);
        localStorage.setItem('selectedday', day);

         alert("Kunden wurden aktualisiert");

            showLocation(locationID, nearestAttraction, distance);

    }

//Location anzeigen ohne Karte


    function showLocation(locationID, nearestAttraction, distance) {

        // Kunden auflisten:

          $("#liste2").empty();           //buttons funktionieren nach zurück nicht mehr!       PageKarte löschen!!!
          locationID=0;
          var anzahl = myLocations.length;
          day = localStorage.getItem('selectedday');

          myLocations.sort(function(a, b) {
          return a.entfernung - b.entfernung;
        });

            for (locationID; locationID < anzahl; locationID++) {
                var myLocation = myLocations[locationID];
                if (day == myLocation.datum) {
                    $("#liste2 ").append("<div data-role=\"collapsible\" data-theme=\"e\" id=\"container" + locationID + "\" data-content-theme=\"b\" data-collapsed-icon=\"arrow-r\" data-expanded-icon=\"arrow-d\"></div>");
                    $("#container" + locationID).append("<h3 id=\"beschrLocationContentTop" + locationID + "\"></h3>\n" +
                        "                                <br>\n" +
                        "                                <span><strong>Kunden-Nr.: </strong></span>\n" +
                        "                                <span id=\"KundenID" + locationID + "\"></span>\n" +                               
                        "                                <br>\n" +
                        "                                <br>\n" +
                        "                                <span><strong>Adresse: </strong></span>\n" +
                        "                                <span id=\"adrLocation" + locationID + "\"></span>\n" +
                        "                                <br>\n" +
                        "                                <br>\n" +
                        "                                <span><strong>Telefon: </strong></span>\n" +
                        "                                <span id=\"telLocation" + locationID + "\"></span>\n" +
                        "                                <a id=\"telLocationLink" + locationID + "\"> Anrufen</a>\n" +
                        "                                <br>\n" +
                        "                                <br>\n" +
                        "                                <span><strong>Tarif: </strong></span>\n" +
                        "                                <span id=\"Tarif" + locationID + "\"></span>\n" +
                        "                                <br>\n" +
                        "                                <br>\n" +
                        "                                <span><strong>letzte Messung: </strong></span><span id=\"lastdate" + locationID + "\"></span>\n" +
                        "                                <br>\n" +
                        "                                <br>\n" +
                        "                                <span><strong>letzter Zählerstand: </strong></span>\n" +
                        "                                <span id=\"alterStand" + locationID + "\"></span>\n" +
                        "                                <br>\n" +
                        "                                <br>\n" +
                        "                                <input type=\"text\" id=\"neu" + locationID + "\" placeholder=\"neuer Zählerstand\"/>\n" +
                        "                                <br>\n" +
                        "                                <br>\n" +
                        "                                <a href=\"#page-karte" + locationID + "\" data-icon=\"refresh\">Karte anzeigen</>\n" +
                        "<div data-role=\"collapsible\" data-collapsed-icon=\"location\" data-expanded-icon=\"location\" data-theme=\"e\" data-content-theme=\"c\">\n"+
                        "                                    </div></div>");
                    
                    
                  //  $("#container" + locationID).append("<button data-role='button' id=\"saveLocationReview" + locationID + "\" data-icon='refresh'>Aktualisieren</button>");
                    
                   
       /*              $("body ").append("<section data-role='page' id=\"page-karte" + locationID + "\" data-title='Stromzähler App - Details | page-attraktion'>\n" +
                        "                                <header data-role='header' data-theme='b'  >\n" +
                        "                                <h1>Route</h1>\n" +
                        "                                <a href='#page-attraktion' data-icon='back' >Zur&uuml;ck zu Aufträge</a>\n" +
                        "                                <img src='img/smartmeter.png' width='30' class='ui-btn-right rotation'/>\n" +
                        "                                </header>\n" +
                        "                                <article class='ui-content' >\n" +
                        "                                <button data-role='button' id='showMapButton' data-icon='refresh'>Karte Aktualisieren</button>\n" +
                        "                                <h3></h3>\n" +
                        "                                <p id='adresseAusgabe'></p>\n" +
                        "                                <p id='adresseKunde'></p>\n" +
                        "                                <center><div id='karteAusgabe' style='height: 500px; width: 300px;'></div></center>\n" +
                        "                                </article>\n" +
                        "                                <footer data-role='footer' data-theme='b'>\n" +
                        "                                <h6>2017 by Gruppe 6</h6>\n" +
                        "                                </footer>\n" +
                        "                                </section>");


                        //   Bei dieser Version hat der Button komischerweise nicht funktioniert, deshalb für jede eigene Karte eine Seite angelegt
                        */
                    
                    //var neuid = "beschrLocationContentTop" + locationID;
                    //$("#beschrLocationContentTop").attr(id, neuid).text(myLocation.bezeichnung);

                    $("#beschrLocationContentTop" + locationID).text(myLocation.bezeichnung);

                    $("#entferungID" + locationID).text(nearestAttraction);

                    $("#KundenID" + locationID).text(myLocation.KundenID);

                    $("#adrLocation" + locationID).text(myLocation.adresse);

                    $("#telLocation" + locationID).text(myLocation.telefon); // +' <a href="tel:' + myLocation.telefon + '">link</a>'
                    $("#telLocationLink" + locationID).attr("href", "tel:" + myLocation.telefon);

                    $("#Tarif" + locationID).text(myLocation.Tarif);
                    $("#lastdate" + locationID).text(myLocation.Letzte);
                    $("#alterStand" + locationID).text(myLocation.alterStand);

                    localStorage.setItem('locationID', locationID);

                    var km = (Math.round(distance * 100) / 100);

                  //  $("#beschrLocationContentTop" + locationID).append("<p>Entfernung: " + km + " km</p>");           //zeigt falsche entfernung an

                }}
                    //  $("#neuerStand").empty();
                    //  var neu = $('#neuerStand').val();
                    //  $("#neuerStandStand").text(neu);

                  /*  var Kunde = myLocation.bezeichnung;

                    var locationPosition = {
                        lat: parseFloat(myLocation.latitude),
                        lng: parseFloat(myLocation.longitude)
                    };

                    var markerLocation = new google.maps.Marker({
                        position: locationPosition,
                        map: map,
                        title: Kunde
                    });


*/

                /***************************************************************************/
                /* TODO 5a.2: Aktuelle Entferung zu Attraktion auf 2 Stellen runden und */
                /* an beschrLocationContent anfuegen                               */
                /***************************************************************************/
        
                var km = (Math.round(nearestAttraction * 100) / 100);

                $("#beschrLocationContentTop" + locationID).append("<p>Entfernung: " + km + " km</p>");

                // Location page oeffnen
                $(':mobile-pagecontainer').pagecontainer('change', '#page-attraktion');
      //      }
    }
var map;

/* function showMap() {                                                             //wird nur benötigt, wenn code zeile 264 bis 280 funltioniert

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: parseFloat(myLocation.latitude),
        lng: parseFloat(myLocation.longitude)
    };

     //var Northpole = {
        //lat: 84.953828,
      //  lng: 10.660512
    //};

    var geocoder = new google.maps.Geocoder();


    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe'),options );

    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);



    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });


    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

} */

    function showMap1() {

        //Werte fuer LocationID und aktueller Position aus localStorage laden
        //locationID = localStorage.getItem('locationID');

        locationID = localStorage.getItem('locationID');
        var myLocation = myLocations[locationID];

        latit = $("#latitude" + locationID).text(myLocation.latitude);
        longit = $("#longitude" + locationID).text(myLocation.longitude);


        locationID = 0;

        var currentLat = parseFloat(localStorage.getItem('currentLat'));
        var currentLng = parseFloat(localStorage.getItem('currentLng'));

        var currentPosition = {
            lat: currentLat,
            lng: currentLng
        };

        var locationPosition = {
            lat: 47.995567,
            lng: 7.852832
        };

        /* var Northpole = {
            lat: 84.953828,
            lng: 10.660512
        };
        */

        var geocoder = new google.maps.Geocoder();

        
        //----------------------------------------------------------------
        // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
        //----------------------------------------------------------------

        var options = {zoom: 10,
            center: currentPosition
        };

            map = new google.maps.Map(document.getElementById('karteAusgabe'),options );

        
        //----------------------------------------------------------------
        // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
        //----------------------------------------------------------------

        var markerCurrent =  new google.maps.Marker({
            position: currentPosition,
            map: map,
            title: "Hier sind Sie!"
        });


        //----------------------------------------------------------------
        // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
        //----------------------------------------------------------------

        var Kunde = myLocation.bezeichnung;

        var markerLocation =  new google.maps.Marker({
            position: locationPosition,
            map: map,
            title: Kunde
        });

        // Kartenausschnitt eingrenzen
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(markerCurrent.getPosition());
        bounds.extend(markerLocation.getPosition());
        map.fitBounds(bounds);

        // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
        geocoder.geocode({
            'latLng' : currentPosition
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    this.adresse = results[0].formatted_address;
                    $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                    $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
                }
            }
        });

        
        //----------------------------------------------------------------
        // Request für Navigation erstellen
        //----------------------------------------------------------------
        
        var directionsService = new google.maps.DirectionsService();

         var directionsRenderer = new google.maps.DirectionsRenderer();
         directionsRenderer.setMap(map);

         var request = {
                  origin: currentPosition,
                  destination: locationPosition,
                  travelMode: google.maps.DirectionsTravelMode.DRIVING
                  };

         // directions request absetzen
         directionsService.route(request, function (result, status) {
                      if (status == google.maps.DirectionsStatus.OK) {
                          // Display the directions using Google's Directions
                          // Renderer.
                          directionsRenderer.setDirections(result);

                      } else {
                          error("Directions failed due to: " + status);
                      }
                  });

    }

function showMap2() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.370297,
        lng: 8.548133
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

       map = new google.maps.Map(document.getElementById('karteAusgabe2'),options );

    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap3() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    //locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);


    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.995567,
        lng: 7.852832
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

       map = new google.maps.Map(document.getElementById('karteAusgabe3'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap4() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.995567,
        lng: 7.852832
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe4'),options );

    
    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap5() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);


    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.227533,
        lng: 8.815584
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe5'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap6() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.370297,
        lng: 8.548133
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe6'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap7() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.995567,
        lng: 7.852832
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe7'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });

    
    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap8() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.995567,
        lng: 7.852832
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe8'),options );

    
    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });

    
    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap9() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 49.917318,
        lng: 7.019277
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe9'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap10() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 49.917318,
        lng: 7.019277
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe10'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap11() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 49.014108,
        lng: 8.404330
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition


    };

    map = new google.maps.Map(document.getElementById('karteAusgabe11'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap12() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 48.284033,
        lng: 9.729371
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe12'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });


    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap13() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);


    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 49.014108,
        lng: 8.404330
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------


    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe13'),options );


    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });

    
    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap14() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.995567,
        lng: 7.852832
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe14'),options );

    
    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });

    
    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });
}

function showMap15() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.995567,
        lng: 7.852832
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe15'),options );

    
    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });

    
    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}

function showMap16() {

    //Werte fuer LocationID und aktueller Position aus localStorage laden
    // locationID = localStorage.getItem('locationID');

    locationID = localStorage.getItem('locationID');
    var myLocation = myLocations[locationID];

    latit = $("#latitude" + locationID).text(myLocation.latitude);
    longit = $("#longitude" + locationID).text(myLocation.longitude);

    locationID = 0;

    var currentLat = parseFloat(localStorage.getItem('currentLat'));
    var currentLng = parseFloat(localStorage.getItem('currentLng'));

    var currentPosition = {
        lat: currentLat,
        lng: currentLng
    };

    var locationPosition = {
        lat: 47.995567,
        lng: 7.852832
    };

    /* var Northpole = {
        lat: 84.953828,
        lng: 10.660512
    };
    */

    var geocoder = new google.maps.Geocoder();

    
    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------

    var options = {zoom: 10,
        center: currentPosition
    };

    map = new google.maps.Map(document.getElementById('karteAusgabe16'),options );

    
    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------

    var markerCurrent =  new google.maps.Marker({
        position: currentPosition,
        map: map,
        title: "Hier sind Sie!"
    });

    
    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER Kunden DEFINIEREN
    //----------------------------------------------------------------

    var Kunde = myLocation.bezeichnung;

    var markerLocation =  new google.maps.Marker({
        position: locationPosition,
        map: map,
        title: Kunde
    });

    // Kartenausschnitt eingrenzen
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(markerCurrent.getPosition());
    bounds.extend(markerLocation.getPosition());
    map.fitBounds(bounds);

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : currentPosition
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                $("#adresseKunde").text(Kunde + " ist gerade hier: " + myLocation.adresse);
            }
        }
    });

    
    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: currentPosition,
        destination: locationPosition,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // directions request absetzen
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Display the directions using Google's Directions
            // Renderer.
            directionsRenderer.setDirections(result);

        } else {
            error("Directions failed due to: " + status);
        }
    });

}
