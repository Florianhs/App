# App
UC-Stromzähler
Use-Case Name: Auftragsbearbeitung
Auslösender Aktor: Außendienstmitarbeiter
Zweck/Ziel: neue Daten aufnehmen
Eingehende Informationen: Datum, aktueller Standort
Ergebnis: aktualisierte Kundendaten (letzter Zählerstand, Kundennummer, Kundenname, Kundenadresse, Tarif)
Grundlegender Ablauf:
1.	Mitarbeiter drückt „Auftrag bearbeiten“
2.	[optional] Mitarbeiter schaltet Musik aus
3.	Mitarbeiter wählt Datum aus
4.	Mitarbeiter lädt Künden „Kunden laden“
5.	System listet Kunden auf
6.	System sortiert Kunden nach Entfernung
7.	[optional] Mitarbeiter ruft Kunden an
8.	Mitarbeiter gibt neuen Zählerstand ein/ aktualisiert
9.	System aktualisiert letzten Zählerstand und letzte Messung/ speichert in Model.js
10.	Mitarbeiter drückt „Auftrag erledigt“
11.	System löscht obersten Kunden

Use-Case Name: Route zu Kunde anzeigen
Auslösender Aktor: Außendienstmitarbeiter
Zweck/Ziel: Route zu nächsten anstehenden Kunden berechnen
Eingehende Informationen: aktuelle Position, Position/Standort Kunde, Datum
Ergebnis: Liste der anstehenden Kunden, Route zu ausgewählten Kunden
Grundlegender Ablauf:
1.	Mitarbeiter drückt „Auftrag bearbeiten“
2.	[optional] Mitarbeiter schaltet Musik aus
3.	Mitarbeiter wählt Datum aus
4.	Mitarbeiter lädt Künden „Kunden laden“
5.	System listet Kunden auf
6.	System sortiert Kunden nach Entfernung
7.	[optional] Mitarbeiter ruft Kunden an
8.	Kunde drückt „Karte aktualisieren“
9.	System berechnet Route und aktualisiert Karte
