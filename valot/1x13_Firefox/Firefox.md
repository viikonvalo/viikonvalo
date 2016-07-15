+++
Date = "2011-03-26T22:00:00.000Z"
Title = "Firefox"
Description = "Mozilla Firefox on suosittu avoimen lähdekoodin www-selain, josta on juuri julkaistu uusi, entistäkin parempi versio 4."
Week = "1x13"
Number = "13"
Alustat = ["Android","Linux","Mac OS X","Windows","Maemo","www-selain"]
Tagit = ["Internet","Viestintä"]
Type = "post"
Author = "pesasa"
Pageimage = "valo13-Firefox.png"
+++


**Mozilla Firefox on suosittu avoimen lähdekoodin www-selain, josta on
juuri julkaistu uusi, entistäkin parempi versio 4.**

![ ](/images/valo13-Firefox.png "fig:valo13-Firefox.png") Mozilla-projektin
Firefox-selain on saavuttanut vakiintuneen aseman Suomessa. [Tilastojen
mukaan](http://gs.statcounter.com/#browser-FI-monthly-201002-201102)
noin puolet suomalaisesta www-selailusta tapahtuu Firefox-selaimella.
Firefox onkin erinomainen ja hyvin standardeja noudattava selain. Vasta
julkistetussa Firefox 4 -versiossa on monia uusia tai uusittuja
ominaisuuksia.

Käyttöliittymä
--------------

Uuden version ulkoasun ehkä silmiinpistävin muutos on se, että
välilehdet on siirretty osoiterivin yläpuolelle, kuten esimerkiksi
Googlen Chrome-selaimessa. Tämä onkin loogista, koska osoite on aina
välilehdessä avoinna olevan sivun ominaisuus. Jos välilehtien aiempi
asettelu miellyttää kuitenkin enemmän, on siihen helppo palata.
Muutenkin ulkoasu on entistä helpompi muuttaa minimalistiseksi, jolloin
itse sivun sisällölle jää enemmän tilaa. Esimerkiksi kaikki
valikkotoiminnot saa yhden Firefox-painikkeen taakse, jolloin tilaa
säästyy. Tämä on erityisen hyödyllistä minikannettavissa, joissa
näytöllä ei ole juurikaan ylimääräistä tilaa. Tilaa on pyritty myös
säästämään yhdistämällä "päivitä"- ja "pysäytä"-painikkeet yhdeksi
napiksi.

Usein taustalla auki olevien web-sovellusten (sähköposti, Twitter, jne.)
välilehdet on nyt mahdollista muuttaa vähemmän tilaa vieviksi
sovellusvälilehdiksi. Käytännössä tämä tarkoittaa sitä, että niiden
välilehdissä näkyy vain sivun kuvake ilman otsikkotekstiä. Jos
välilehtiä on auki paljon voi niitä järjestellä ryhmiin Panoramalla.
Välilehtien välillä siirtyminen onnistuu myös kirjoittamalla
osoiteriville hakusanan, jolloin Firefox näyttää hakutuloksia selaimen
historiasta, kirjanmerkeistä sekä avoinna olevista välilehdistä.
Välilehden vaihtaminen tätä kautta voi olla hyödyllistä erityisesti
silloin, jos niitä on auki monta yhtä aikaa ja oikean välilehden
löytäminen selaamalla olisi hankalampaa.

Windows 7 -ympäristössä käyttöliittymää on lisäksi tehostettu
kosketusnäyttöä käytettäessä
[monikosketustuella](http://en.wikipedia.org/wiki/Multitouch), joka siis
mahdollistaa esimerkiksi sivujen zoomaamisen kahdella sormella
vetämällä.

Suorituskyky
------------

Selaimen toimintaa on nopeutettu ja tämä näkyy muun muassa nopeampana
käynnistymisenä ja sivujen graafisten esityksen nopeampana piirtämisenä.
Lisäksi javascriptin käsittely on nopeutunut uuden
JägerMonkey-JavaScript-moottorin myötä. Testit osoittavat javascriptin
suorituksen olevan monta kertaa nopeampaa kuin aiemmissa versioissa.
Huomiota on kiinnitetty myös tavallisen selaamisen sujuvuuteen.
Esimerkiksi uusien välilehtien avaamista on nopeutettu.

Firefoxin **kaatumissuoja** tarkoittaa lisäosien parempaa kapselointia,
joka suojaa itse selainta lisäosan (Flash, Quicktime, Silverlight,...)
mahdolliselta kaatumiselta. Pelkän lisäosan huono käyttäytyminen ei siis
vaikuta itse selaimeen.

Uusia ominaisuuksia
-------------------

Uusista ominaisuuksista suuri osa keskittyy html5-nimen ympärille. Itse
**html5**:n tukea on kehitetty entisestään sekä siihen liittyviä
**css3**-tyylien käsittelyä sekä **ECMAScript5**-tukea. Uusista
html5-ominaisuuksista yksi näkyvimmistä on varmaankin video-tagin tuki
**WebM-videoille**, joka mahdollistaa esimerkiksi [Youtuben käytön
html5:llä](http://www.youtube.com/html5) ilman Flash-laajennosta. Myös
äänen käsittelyn mahdollisuudet lisääntyvät, kun äänidataa voi lukea ja
tuottaa suoraan javascriptillä.

Firefox on osannut jo pitkään näyttää **[skaalautuvaa
vektorigrafiikkaa](http://fi.wikipedia.org/wiki/SVG) (svg)**. Nyt
kuitenkin tuki on laajentunut svg:n käyttöön suoraan html5:n seassa,
erillisinä kuvatiedostoina img-tagillä (jpg-, png- ja gif-kuvien tapaan)
sekä taustakuvina. Suoraan html5:n sekaan upotettua svg-kuvaa voidaan
käyttää esimerkiksi graafien ja tilastojen näyttämiseen. Siis
tilanteisiin, joihin nykyisin usein käytetään erillisiä
Flash-sovelluksia. Tuki svg-tiedostoille img-tagissa avaa uusia
mahdollisuuksia tulevaisuudessa. Esimerkiksi Wikipediassa suuri osa
kaavioista, kartoista, lipuista yms. piirtokuvista on toteutettu
svg-kuvina, mutta selainten rajoitusten takia ne tällä hetkellä
muunnetaan png-kuviksi sivuilla käytettäessä. Tulevaisuudessa svg-kuvia
voitaisiin siis alkaa käyttää suoraan. Taustakuvina svg-tiedostot
mahdollistava korkealaatuisten, mutta tallennustilaltaan kompaktien ja
hyvin skaalautuvien kuvien käytön.

Firefox tukee myös avoimia **kirjasintiedostomuotoja** (mm. WOFF,
TrueType ja OpenType). Näin www-sivun tai web-sovelluksen tekijän ei
tarvitse enää rajoittua sivun käyttäjän koneelle varmasti asennettuihin
fontteihin vaan käytettävät fontit voidaan ladata palvelimelta muun
sisällön mukana. Vaarana toki on, että sivujen tekijät innostuvat
tekemään huonosti luettavia sivuja mitä ihmeellisemmillä kirjasimilla.
Toisaalta palvelimelta ladattavat kirjasimet avaavat aivan uusia
mahdollisuuksia muun muassa matemaattisen tai jonkin muun erikoisalan
erikoismerkkejä vaativan tekstin esittämiseen.

Matematiikan esittäminen verkossa on kehittynyt myös **MathML**-kielen
esityksen parantumisen kautta. Firefox on jo ennestään ollut
edelläkävijä MathML-muotoisten matemaattisten kaavojen näyttämisessä,
mutta nyt tuota osa-aluetta on kehitetty edelleen. Esimerkiksi
sisäkkäisten neliöjuurten sekä murtoluvun ympärillä olevan neliöjuuren
esittäminen on muuttunut selvästi paremmaksi.

Kotisivu
:   <http://www.mozilla.com/firefox/>

Lisenssi
:   MPL/GPL/LGPL -kolmoislisenssi

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, Android, Maemo

Asennus
:   Asennuspaketit löytyvät Firefoxin omilta kotisivuilta.
    Linux-jakeluissa selain löytyy jakelun omasta pakettivarastosta joko
    Firefox-brändillä tai brändäämättömänä nimellä IceWeasel (mm.
    Debianissa). Firefox 4 ilmaantuu Linux-jakeluihin joko uusien
    jakeluversioiden ilmestymisen myötä taikka jo aiemmin riippuen
    jakelun päivityspolitiikasta.

VALO-CD
:   VALO-CD:n versiolla 6 on vielä vanhempi Firefox, mutta seuraavan
    VALO-CD:n version myötä mukaan tulee todennäköisesti uusi Firefox 4.

Lisää luettavaa
:   [Ominaisuudet](http://www.mozilla-europe.org/fi/firefox/features/)

{{% wrapper class="psgallery" %}}
* [Firefoxin valikko](/images/Firefox-1-valikko.png)
* [Firefox-painike](/images/Firefox-2-firefox-painike.png)
* [Sovellusvälilehdet](/images/Firefox-3-sovellusvalilehdet.png)
* [Firefox-painikkeesta tuleva valikko](/images/Firefox-4-firefox-painike.png)
* [Firefox Ubuntu-Linuxilla](/images/Firefox-5-linux.png)
* [Kehittynyt MathML-tuki](/images/Firefox-6-mathml.png)
* [Webm-videoiden tuki](/images/Firefox-7-webm.png)
* [Välilehtiryhmät](/images/Firefox-8-tabgroups.png)
{{% /wrapper %}}

*Teksti: pesasa* <br />
*kuvakaappaukset: pesasa*

