# Web Design @cmda-minor-web 1819

_Voor het vak Web Design gaan we bezig met een opdracht specifiek voor 1 persoon, namelijk Larissa. Larissa is blind maar maakt alsnog vaak gebruik van het web. Toch zijn er helaas websites die voor haar slecht/niet te gebruiken zijn. Door te interviewen, haar te laten testen en vragen te stellen hebben we allemaal een website specifiek voor haar gebruik gemaakt. In dit verslag lees je welke site ik voor haar gemaakt heb._

## Table of Content
1. Opdracht
2. Onderzoek
3. Eindresultaat
4. Versies
5. Conclusie
   
## Hoofdstuk 1 | Opdracht
Voorafgaand aan het maken van de website hebben we Larissa geinterviewd om haar beter te leren kennen. Hierin heb ik de vraag gesteld welke website voor Larissa slecht te gebruiken is. Als antwoord op deze vraag zei ze dat de website van buienradar slecht te gebruiken is, omdat er gebruik wordt gemaakt van een visuele map zonder tekst. Hierdoor heb ik ervoor gekozen om buienradar voor haar te maken.

## Hoofdstuk 2 | Onderzoek
Zoals eerder vermeld hebben we voor dit vak meerdere mogelijkheden gehad om vragen aan Larissa te stellen. Alle vragen, antwoorden en aantekeningen zijn hieronder te zien:

**Gesprek Larissa - Woensdag, 10-04-2019**
```
Notes:
- valkuil: dropdown menu (liever niet, werkt niet goed met screenreader)
- nvda = goeie screenreader 
- navigatie onderaan of bovenaan? bovenaan
- goed: navigatie -> te zien krijgen welke navigatie je al gehad hebt (bv. categorien -> boeken -> roman -> ... )
- tip: luchtvaartmaatschappijen hebben slechte accessability pages 
- geen automatisch startende audio/video gebruiken. 
- iframe is not done, niet gebruiken
- feedback dmv geluid is goed, als geluiden maar niet te lang duren.
- aparte slechtziende pagina is goed alternatief, maar liever niet omdat je dan 2 sites voor alle paginas hebt.
- wel is een accessability vraag een goeie, omdat je dan stylesheets kan aanpassen voor bijvoorbeeld kleurenblinden (op dezelfde pagina waar je al was).
Q: is er een site die je op dit moment niet accessable vind maar wel graag accessable wil zien ?
A: luchtvaartmaatschappijen, buienradar 
Q: Zijn er ook voorbeelden van goeie sites voor jou?
A: voorbeeld van goeie site: NS, stichting accessability	


Conclusie: 
- Voor het testen van mijn website ga ik de screenreader 'NVDA' gebruiken.
- De site: Het mogelijk maken om het weer te checken (omdat dit nu nog niet mogelijk is)
- Geen gebruik maken van: 
	- dropdown menu
	- automatisch startende video
	- iframe
- Gebruik maken van:
	- Feedback geluiden
	- Navigatie overzicht
```

**Gesprek Larissa - Woensdag, 17-04-2019**
```
Q: Welke informatie vind jij belangrijk om te weten? 
A: Wanneer het gaat regenen
1, 3 & 24 uur (table, paragraph -> nog niet duidelijk. meerdere dingen proberen)
regen in mm & daarbij hoeveel dat dan precies is (meer mensentaal)

Q: Werkt navigatie door middel van pijltjes goed voor jou (met een screenreader etc.)
A: Werkt wel, maar ook optionele opties (voor gebruik mobiel)

Q: Heb je problemen met Engels (i.v.m. API)
A: Screenreader alles in nederlands <language attribute = nl> <- belangrijk!
```

**Gesprek Larissa - Woensdag 24/04/2019**
```
'=' tekentje veranderen naar 'is'

24 uur -> ochtend middag avond nacht
			ochtend knop -> dan 0-6 uur elk half uur
			middag knop -> dan 6-12 uur elk half uur
```

## Hoofdstuk 3 | Eindresultaat

<img src="https://i.ibb.co/Dk95kvF/image.png">

Functies:
- Live de huidige temperatuur
- Live de huidige status (winderig, bewolkt, zonnig etc.)
- Live de huidige windsnelheid
- Live de zonsopkomst en zonsondergang van vandaag
- (niet live) regenval 
- Navigatie door middel van pijltjestoetsen
- Ook is het mogelijk om tot 10 dagen dag vooruit te gaan (met live data):
  
<img src="https://i.ibb.co/2WhFmhq/image.png" width="300">

## Hoofdstuk 4 | Versies

**Versie week 1**

Na week 1 is het mij gelukt live data op te halen vanuit de Yahoo Weather API. Deze data wordt server-side gerendered en vervolgens op de pagina weergegeven. De site zag er als volgt uit:

<img src="https://i.ibb.co/0rbxF8m/image.png">

**Versie week 2**

Na week 2 heb ik geluisterd naar de feedback van Larissa. 

- Ik heb de navigatie bovenaan de pagina gezet, zodat Larissa meteen weet dat ze door de site kan navigeren. 
- Ook vind Larissa belangrijk dat de '1, 3 & 24 uurs kaart' ook voor haar mogelijk wordt gemaakt. Dit heb ik gedaan door middel van het opdelen van 1 uur in elk 10 minuten, 3 uur elk kwartier en de 24 uurs functie per uur.
- Bepaalde dingen van Engels naar Nederlands (en lang attribute in html toegevoegd)

<img src="https://i.ibb.co/z2bMB28/image.png">

**Versie week 3**

Na de laatste review heb ik nog een paar kleine aanpassingen gemaakt:
  - '=' teken veranderd naar 'is', voor de screenreader.
  - De 24-uur functie opgedeeld in 4x 6 uur, zodat het geen lange tabel van 24 rijen is.
  - Kleine layout aanpassingen en knoppen groter gemaakt voor telefoongebruik.
  
<img src="https://i.ibb.co/Dk95kvF/image.png">

## Hoofdstuk 5 | Conclusie
Al met al was het super leerzaam om samen met een 'echt' persoon te testen. Dit is de beste manier om erachter te komen of je site voldoet aan de juiste functionaliteit en of het te gebruiken is. Ook was het leerzaam om vanuit de ogen van een slechtziende te zien hoe ze het internet gebruiken.

Tot slot wil ik Larissa bedanken voor de medewerking.


