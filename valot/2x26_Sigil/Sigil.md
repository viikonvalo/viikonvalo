+++
Date = "2012-06-23T21:00:00.000Z"
Title = "Sigil"
Description = "Sigil on vapaa työkalu epub-muotoisten sähkökirjojen tekoon."
Week = "2x26"
Number = "78"
Alustat = ["Linux","Windows","Mac OS X"]
Tagit = ["EPUB","e-kirja"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo78-sigil.png"
+++


**Sigil on vapaa työkalu epub-muotoisten sähkökirjojen tekoon.**

![ ](/images/valo78-sigil.png "fig:valo78-sigil.png") Sigil on sähkökirjaeditori,
jolla kirjan muokkaaminen onnistuu sekä visuaalisessa
[WYSIWYG](http://fi.wikipedia.org/wiki/WYSIWYG)-tilassa että sisällön
tarkemman hallinnan mahdollistavana raakakoodina. Ohjelman
tallennusmuotona on avoin sähkökirjatiedostomuoto
[EPUB](http://fi.wikipedia.org/wiki/EPUB). EPUB-tiedostot hyödyntävät
olemassa olevia avoimia standardeja ja esimerkiksi jo olemassa olevan
html-muotoisen sisällön tuominen kirjaan on helppoa. WYSIWYG-tilassa
kirjan editoitava sisältö näyttää suurin piirtein siltä miltä sen on
tarkoitus lopullisena sähkökirjanakin näyttää. Esimerkiksi otsikot,
kuvat, luettelot ja korostukset näkyvät paikoillaan, kuten kirjoittaja
on ne tarkoittanutkin. Vaihtoehtoisesti sisältöä voi editoida
raakakooditilassa tai jaetussa näkymässä, jossa sekä lopputulos että
raakakoodi ovat yhtä aikaa näkyvissä.

Sigilin käyttöliittymä koostuu kirjaselaimesta, editointialueesta ja
sisällysluettelosta. Kirjaselaimessa (*book browser*) luetellaan kaikki
kirjan komponentit, eli tekstiosiot, kuvat, tyylimäärittelyt, kirjasimet
sekä muut tarvittavat osaset. Editointialueessa tapahtuu itse kirjan
muokkaaminen. Editointialueeseen voidaan avata muokattavaksi
kirjaselaimessa lueteltuja tekstiosioita ja tyylimäärittelyitä. Kirjan
voi kirjoittaa käyttämällä vain yhtä tekstiosiota, mutta käytännössä on
hyödyllistä jakaa kirja esimerkiksi lukujen kohdalta osiin, jolloin
erillisten osien muokkaaminen on helpompaa niiden pienemmän koon vuoksi.
Myös kappaleiden uudelleen järjestäminen on helpompaa, kun ne ovat kukin
omassa osiossaan. Kirjaan voidaan lisätä kuvatiedostoja ja tekstiin
merkitä kohtia, joissa kuvat näytetään. Tyylimäärittelyillä voidaan
muokata kirjan ulkoasua, esimerkiksi muuttamalla otsikoiden
kirjasintyyliä tai tekstin korostustyylejä. Sisällysluettelonäkymä
näyttää nimensä mukaisesti kirjan sisällysluettelon.
Sisällysluettelonäkymän alareunan nappulalla sisällysluettelon saa
generoitua vastaamaan tekstiosioiden otsikkorakennetta juuri sillä
hetkellä. Generoinnin yhteydessä on mahdollista valita, minkä tasoiset
otsikot otetaan mukaan sisällysluetteloon. Myös valikoitujen otsikoiden
jättäminen pois sisällysluettelosta on mahdollista.

Sähkökirjaan voidaan lisätä myös useita metatietokenttiä. Tärkeimmät
tiedot ovat meta-editorissa heti kysytyt otsikko (*title*) ja tekijä
(*author*) sekä kirjan kieli. Näiden lisäksi lisättävissä on 15
perustietoa, esimerkiksi julkaisupäivä, kuvaus sekä kirjan ISBN-koodi.
Loput yli 200 metatietokenttää ovat valittavissa erillisen napin takaa.
Sigil tukee täysin EPUB2-standardia ja siinä on myös tuki svg-kuville.
Sigiliin on integroitu
[FlightCrew](http://code.google.com/p/flightcrew/)-validaattori, joka
tarkistaa, että tiedosto on EPUB-standardin mukainen. Niin ikään
Sigiliin upotettu [HTML Tidy](http://tidy.sourceforge.net/) puolestaan
varmistaa, että käytetyt xhtml-tiedostot ovat syntaksiltaan oikeellisia
ja siistittyjä.

Käytännössä EPUB-tiedosto on ZIP-paketti, jonka sisältö koostuu itse
kirjan tekstin sisältävistä xhtml-tiedostoista (tekstiosiot), ulkoasun
asettelun kuvaavista css-tyylitiedostoista, kirjassa käytetyistä kuvista
sekä mahdollisesti käytetyistä fonttitiedostoista. Näiden lisäksi
paketissa ovat vielä sisällysluettelon sekä metatiedot ja kirjan
rakenteen kuvaavat xml-tiedostot. EPUB-tiedosto on siis mahdollista
rakentaa, jos osaa, tekemällä kaikki tarvittavat tiedostot käsin,
pakkaamalla ne ZIP-tiedostoon ja nimeämällä tiedosto epub-päätteiseksi.
Kirjan tekeminen Sigil-ohjelmalla on kuitenkin huomattavan paljon
helpompaa, sillä Sigil huolehtii muun muassa kirjan rakenteen
ylläpidosta ja sisällysluettelon luomisesta. Myöskään sisällön
kirjoittamiseen ei välttämättä tarvita xhtml-kielen tuntemista vaan
WYSIWYG-editoria käyttäen kirjan kirjoittaminen on varsin intuitiivista.
Kannattaa kuitenkin huomata, että xhtml-kielen ja css-tyylien tunteminen
mahdollistaa sähkökirjan rakenteen ja ulkoasun monipuolisemman ja
näyttävämmän muokkaamisen.

Kotisivu
:   <http://code.google.com/p/sigil/>

Lisenssi
:   [GNU GPLv](GNU_GPL)3

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X

Asennus
:   Ohjelman asennuspaketit eri järjestelmiin löytyvät sen kotisivuilta.
    Linkit Windows- ja Mac OS X -paketteihin löytyvät suoraan etusivun
    vasemmasta palkista. Linkit eri Linux-jakeluihin sopiviin
    paketteihin löytyvät
    [wiki-sivulta](http://code.google.com/p/sigil/wiki/LinuxDistroPackages).
    Linuxeihin ohjelma kannattaa asentaa näiden pakettien avulla eikä
    "InstallationInstructions"-sivun ohjeen mukaan.

Käyttöohjeet
:   [Käyttäjän opas.](http://web.sigil.googlecode.com/git/contents.html)

{{% wrapper class="psgallery" %}}
-   [Sigilin käyttöliittymä WYSIWYG-näkymällä](/images/sigil-1.png)
-   [Jaettu WYSIWYG- ja koodinäkymä.](/images/sigil-2.png)
-   [Sigilin editointia koodinäkymällä.](/images/sigil-3.png)
-   [Kirjan sivulle lisätty kuva ja otsikkorakenteesta generoitu
    sisällysluettelo](/images/sigil-4.png)
-   [Metatietomuokkain](/images/sigil-5.png)
-   [Lisätään kenttiä yleisimpiä metatietoja
    varten.](/images/sigil-6.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

