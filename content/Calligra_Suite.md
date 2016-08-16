+++
Date = "2014-12-06T22:00:00.000Z"
Title = "Calligra Suite"
Description = "Calligra Suite on avoimen lähdekoodin toimisto-ohjelmistopaketti."
Week = "4x50"
Number = "206"
Alustat = ["Linux","FreeBSD","OpenBSD","NetBSD"]
Tagit = ["Taulukkolaskenta","Kuvankäsittely","Tekstinkäsittely","Toimisto"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo206-calligra_suite.png"
+++

**Calligra Suite on avoimen lähdekoodin toimisto-ohjelmistopaketti.**

![ ](/images/valo206-calligra_suite.png "fig:valo206-calligra_suite.png")
Calligra Suite on toimisto-ohjelmisto, jonka juuret ovat
[KDE](KDE)-työpöydän käyttöön tehdyssä KOffice-ohjelmistossa.
Calligra Suite haarautui KOfficesta vuonna 2010. Calligra Suite sisältää
kymmenen sovellusta perinteisistä tekstinkäsittely- ja
taulukkolaskentaohjelmista projektinhallintaan ja miellekarttojen
piirtämiseen käytettäviin sovelluksiin. Calligra Suite on käytettävissä
ensisijaisesti Linux- ja BSD-järjestelmissä, mutta siitä on olemassa
esiversiot myös Mac OS X:lle ja Windowsille. Esimerkiksi
kuvankäsittelyohjelma Krita on suoraan asennettavissa myös näille
alustoille.

Ohjelmistopaketin ohjelmat on suunniteltu toimimaan keskenään
suurimmaksi osaksi samalla käyttölogiikalla ja samanlaisella työkalujen
asettelulla. Huomiota herättävintä verrattuna esimerkiksi muihin
tekstinkäsittely- ja taulukkolaskentaohjelmiin on se, miten Calligra
Suite hyödyntää paremmin nykyään yleisten laajakuvanäyttöjen muodon.
Perinteisissä ohjelmissa valikot ja painikepalkit on sijoitettu
varsinaisen työskentelyalueen ylä- tai alapuolelle. Tämä on kuitenkin
ongelmallista näytöillä, joiden korkeus on selvästi pienempi kuin
leveys. Erityisesti tekstinkäsittelyohjelmissa näkymä on joko skaalattu
koko näytön levyiseksi, jolloin asiakirjasta näkyy pystysuunnassa vain
vähän kerrallaan, tai vaihtoehtoisesti näytölle jää sivusuunnassa paljon
hyödyntämätöntä tilaa. Calligra Suitessa kaikki työkalut on sijoitettu
ikkunan oikean reunan palkkiin, jolloin itse työskentelyalue on
luonnollisemman muotoinen. Työkalut voi toki siirtää myös itse
haluamaansa reunaan tai irrottaa kelluvaksi ikkunaksi.

Calligra Suite sisältää seuraavat ohjelmistot:

Words
-----

Paketin tekstinkäsittelyohjelmalle on annettu nimeksi yksinkertaisesti
Words. Words hyödyntää työkalupalkkeja hyvin näyttämällä tekstin
muokkaamiseen käytettävät toiminnot, kuten tyylien valinnat, lihavoinnit
ja muuta vastaavat toiminnot yhdellä välilehdellä. Muilta välilehdiltä
löytyvät muun muassa viittaustiedot (sisällysluettelo, alaviitteet,
kirjallisuusviitteet), sivun asettelu (marginaalit, ylä- ja
alatunniste), kommentointityökalut, upotettujen objektien (kuvat,
kuviot, kaavat, kaaviot) hallinta sekä polkujen piirtämiset.

Words käyttää oletuksena tallennusmuotona OpenDocument-standardin
tekstinkäsittelytiedostomuotoa, eli samaa ODT-tiedostomuotoa kuin
esimerkiksi [LibreOffice Writer](LibreOffice_Writer). Se osaa
avata ainakin jollain tarkkuudella myös MicroSoftin Word-tiedostomuotoja
sekä muutamaa muuta tiedostomuotoa. Tallentamiseen ohjelma tarjoaa
OpenDocument-tiedostomuotoja, HTML:ää sekä mobi- ja epub-muotoisia
e-kirjatiedostoja.

Käyttöliittymältään Words on hieman erilainen kuin monet muut
tekstinkäsittelyohjelmat ja sen käyttö vaatii hetken totuttelua.
Totuttelun jälkeen sen käyttöliittymä on kuitenkin varsin miellyttävä.
Wordsin toiminta kappaleiden ja alikappaleiden numeroinnin kanssa on
kuitenkin hieman hämmentävää. Mistään ei tuntunut löytyvän keinoa
vaihtaa numerointia päälle tai pois päältä.

Sheets
------

Taulukkolaskentaohjelma Sheets on nimetty samaan suoraviivaiseen tapaan
kuin Words. Sheets käyttää käyttöliittymässä samanlaista välilehdillä
varustettua sivupalkkia kuin Words ja myös sen käyttö on varsin selkeää.

Stage
-----

Ohjelmistopaketin esitystyökalu on nimeltään Stage (näyttämö). Myös
Stage käyttää samanlaista sivupalkkia kuin Words ja Sheets. Sen käyttö
on suoraviivaista ja selkeää. Yksinkertaisten esitysten tekeminen on
sillä hyvin helppoa. Käytettävyydeltään Stage tuntui paikoin
miellyttävämmältä kuin LibreOfficen vastaava työkalu
[Impress](LibreOffice_Impress). Erityisesti Stage on selvästi
Impressiä kevyempi käyttää. Stage osaa myös näyttää esitystilassa
ollessaan itse esityksen yhdellä näytöllä sekä esittäjän näkymän
muistiinpanoineen ja kelloineen toisella näytöllä.

Stage osaa varsin hyvin avata sekä OpenDocument-muotoisia ODP-tiedostoja
että MicroSoftin PowerPoint-tiedostoja. Tallentaminen sen sijaan
onnistuu vain OpenDocument-muodossa sekä vientinä PDF-muotoon.
Miinuspuolena voidaankin todeta ohjelman yhteensopivuus muiden ohjelmien
kanssa, sillä OpenDocument-muotoisena tallennettu tiedosto aukesi
tyyleiltään varsin erinäköisenä LibreOfficen Impressillä. Vaikea sanoa,
kumman ohjelman ongelmasta on kyse, mutta tämä voi vaikeuttaa Calligran
Stagella tehtyjen tiedostojen katselua muilla ohjelmilla.

Plan
----

Plan on Calligra Suiten työkalu projektinhallintaan. Sillä voi hallita
projektin resursseja, ajanhallintaa, tehtävälistoja sekä monia muita
projektinhallintaan liittyviä toimintoja. Siitä saa tulostettua
Gantt-kaavioita sekä muita raportteja.

Krita
-----

Krita on ohjelmistopaketin kuvankäsittelyohjelma. Krita on kehittynyt
nopeaa vauhtia hyväksi kilpailijaksi
[GIMP](GIMP)-kuvankäsittelyohjelmalle ja saanut sen jo aika
hyvin kiinni. Krita soveltuu erityisesti piirtämiseen ja sen käytössä on
hyötyä piirtopöydästä.

Kritasta on tarjolla vakaa versio Linux-järjestelmien lisäksi myös
Windowsille ja kokeellinen versio Mac OS X:lle.

Kexi
----

Kexi on visuaalinen työkalu tietokantojen hallintaan. Sillä voidaan
käsitellä sekä paikallisia tiedostoon tallennettuja tietokantoja että
erilaisilla palvelimilla olevia tietokantoja. Sillä voi luoda uusia
tauluja, muokata niiden rakennetta ja tietosisältöä sekä tehdä niihin
kyselyitä.

Kexin oletuksena käyttämä tietokantamuoto on SQLite 3 -muotoinen
tiedosto. Muita tuettuja tietokantoja ainakin MySQL- ja
PostgreSQL-kannat. Tietoa voi ohjelmaan tuoda myös ainakin Microsoftin
Access-kannasta ja csv-tiedostosta.

Karbon
------

Karbon on ohjelmistopaketin vektoripiirto-ohjelma, eli vaihtoehto
[Inkscapelle](Inkscape). Myös Karbon käyttää oikean reunan
työkalupalkkia. Karbonin käyttöliittymä poikkeaa jonkin verran
Inkscapesta. Inkscapeen verrattuna Karbonilla on helpompi tehdä
kaavioita, joissa on toisiinsa viivoilla kytkettyjä elementtejä, sillä
Karbonissa on työkalu, jolla voi piirtää tällaisia kytköksiä niin, että
ne päivittyvät myös elementtejä siirrettäessä.

Karbon osaa tallentaa OpenDocumentin piirtotiedostoina, SVG-tiedostoina
sekä muutamassa rasterimuodossa. Avaaminen puolestaan onnistuu edellä
mainittujen vektorimuotojen lisäksi myös muun muassa Xfig-, PDF-, PS- ja
EPS-muodoista.

Flow
----

Flow on työkalu erilaisten kaavioiden ja diagrammien, kuten
vuokaavioiden, kytkentäkaavioiden ja verkkokaavioiden piirtämiseen.
Toinen sitä vastaava ohjelma on [Dia](Dia). Myös Flow käyttää
Calligra Suiten yhtenäistä tapaa käyttää työkalupalkkia. Flow tarjoaa
monta erilaista palettia valmiita piirroskuvioita, kuten nuolia, tähtiä,
standardeja vuokaavioiden symboleja, kytkentäkaavioiden komponenttien
symboleja, verkkolaitteiden symboleja ja niin edelleen. Symboleja voi
raahata ja sijoitella piirtoalueelle, käännellä sekä kytkeä toisiinsa
erilaisilla viivoilla ja nuolilla.

Flowlla piirrettyjä kaavioita voi tallentaa ja avata käyttäen vastaavia
tedostomuotoja kuin Karbon-sovelluksella.

Braindump
---------

Braindump on työkalu muistiinpanojen tekemiseen ja miellekarttejen
muodostamiseen.

Author
------

Author on ohjelmistopaketin uusin sovellus. Se muistuttaa toistaiseksi
hyvin paljon Wordsiä, mutta siitä on tarkoitus kehittyä erikoistunut
työkalu pitkien tekstien ja esimerkiksi interaktiivisuutta sisältävien
sähkökirjojen tekemiseen iBooks Authorin tapaan. Tallennusmuotona Author
käyttää OpenDocumentin tekstitiedostoja ja standardia
EPUB-tiedostomuotoa.

Kotisivu
:   <https://www.calligra.org/>

Lisenssi
:   [GNU GPL](GNU_GPL) / [GNU LGPL](GNU_LGPL)

Toimii seuraavilla alustoilla
:   Linux, FreeBSD, OpenBSD, NetBSD. Jotkin ohjelmat myös Windows- ja
    Mac OS X -alustoilla.

Asennus
:   Linux-järjestelmiin ohjelma löytyy suoraan paketinhallinnasta. Osaan
    ohjelmista, kuten Kritaan asennuspaketit Windowsille tai Mac OS
    X:lle saattavat löytyä ohjelman omalta kotisivulta.

{{% wrapper class="psgallery" %}}
-   [Words-tekstinkäsittelyohjelma](/images/calligra_suite-1.jpg)
-   [Sheets-taulukkolaskentaohjelma](/images/calligra_suite-2.jpg)
-   [Stage-esitysohjelma](/images/calligra_suite-3.jpg)
-   [Plan-projektinhallintaohjelma](/images/calligra_suite-4.jpg)
-   [Krita-kuvankäsittelyohyjelma](/images/calligra_suite-5.jpg)
-   [Kexi-tietokantahallintaohjelma](/images/calligra_suite-6.jpg)
-   [Karbon-vektoripiirto-ohjelma](/images/calligra_suite-7.jpg)
-   [Flow, kaavioiden ja diagrammien
    piirtoon](/images/calligra_suite-8.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


