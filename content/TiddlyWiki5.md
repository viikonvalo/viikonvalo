+++
Date = "2015-02-20T22:00:00.000Z"
Title = "TiddlyWiki5"
Description = "TiddlyWiki5 on selaimella käytettävä yhden tiedoston muistiinpanotyökalu."
Week = "5x08"
Number = "216"
Alustat = []
Tagit = ["Muistiinpanot","www","Verkkoselaimet"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo216-tiddlywiki5.png"
+++


**TiddlyWiki5 on selaimella käytettävä yhden tiedoston
muistiinpanotyökalu.**

![ ](/images/valo216-tiddlywiki5.png "fig:valo216-tiddlywiki5.png") TiddlyWiki5
on uudelleen toteutettu versio aiemmin esitellystä
[TiddlyWikistä](TiddlyWiki "wikilink"). Se on selainpohjaisena yhden
sivun sovelluksena (Single Page Application, SPA) toteutettu
wiki-tyyppinen muistiinpanotyökalu. Siinä muistiinpanoja ei tarvitse
järjestää lineaarisesti vaan yksittäisiä asiasisältöjä, tiddlereitä, voi
linkittää vapaasti toisiinsa. Sen versionumero 5 viittaa toteutukseen
käytettyihin HTML5-tekniikoihin. TiddlyWiki5 muodostuu yhdestä
HTML-tiedostosta ja siihen sisällytetystä Javascript-ohjelmistosta sekä
wikin datasisällöstä. Kun tiedosto avataan selaimella, näyttää
Javascriptillä toteutettu ohjelmisto käyttöliittymän, jolla TiddlyWikin
sisältöä voi selata ja jolla siihen voi muokata uutta sisältöä.
Tallennus tapahtuu samaan HTML-tiedostoon ja se on toteutettu selaimesta
riippuen muutamalla eri tavalla. Yhden tiedoston sovelluksena
TiddlyWiki5 on helppo kuljettaa mukana USB-tikulla tai säilyttää
verkossa pilvitallennuspalvelussa.

TiddlyWiki5:n käyttöliittymä koostuu yksittäisiä tiddlereitä näyttävästä
alueesta sekä niiden selaamiseen ja muokkaamiseen käytettävästä
sivupalkista. Tiddlereiden sisällöt kirjoitetaan oletuksena
TiddlyWiki5:n omalla wiki-kielellä, josta löytyvät tyypillisesti
käytetyt muotoilut, kuten otsikot, listat, lihavoinnit, kursivoinnit,
alleviivaukset, taulukot sekä muita muotoiluja. Wiki-kieli on jonkin
verran kehittynyt TiddlyWikin aiemmasta versiosta. Varsinaisten
wiki-muotoilujen lisäksi tekstin seassa on mahdollista käyttää
TiddlyWikin makroja ja widget-sovelmia, joilla tiddlereihin voi rakentaa
yksinkertaisia käyttöliittymiä, kuten välilehtiä ja nappuloita.
TiddlyWiki5:n tiddlereiden sisällöt ovat oletuksena wiki-tekstiä, mutta
muita vaihtoehtoja ovat esimerkiksi SVG-muotoinen vektorigrafiikka,
GIF-, ICO-, JPG- ja PNG-muotoiset kuvat, CSS-tyylit sekä JSON-muotoinen
data. TiddlyWiki5 tukee myös sisällön salasanasuojattua kryptausta.

TiddlyWiki5 on monipuolisesti laajennettavissa sen plugin-arkkitehtuurin
ansiosta. Lisäosat voivat tuoda TiddlyWiki5-tiedostoon uusia
toiminnallisuuksia, kuten uusia sisältötyyppejä, ominaisuuksia
wiki-parseriin tai erilaisia makroja ja widgettejä. Uusia lisäosia omaan
TiddlyWiki5-tiedostoon voi tuoda joko hiirellä raahaamalla jostain
toisesta TiddlyWiki5-tiedostosta tai kirjoittamalla niitä itse. Lisäosat
muodostuvat käytännössä yhdestä tai useammasta tiddleristä, joissa voi
olla esimerkiksi Javascript-ohjelmakoodia tai muita määrittelyitä.
Esimerkkejä hyödyllisistä lisäosista ovat esimerkiksi KaTeX-lisäosa
LaTeX-kielellä kirjoitettujen matemaattisten kaavojen näyttämiseen,
Markdown-lisäosa, joka lisää Markdown-merkintäkielen vaihtoehtoiseksi
tavaksi kirjoittaa tiddlereiden sisältöä, sekä highlight-lisäosa, jolla
tiddlereihin kirjoitettuihin ohjelmakoodia sisältäviin osioihin saadaan
syntaksin korostus.

Koska yhden tiedoston sovelluksessa sekä itse ohjelma että sillä luotu
sisältö ovat samassa HTML-tiedostossa, pitää TiddlyWiki5:n pystyä
tallentamaan itsensä jotenkin. Koska selaimessa suoritettavalla
Javascript-ohjelmalla ei ole oikeuksia kirjoittaa käyttäjän tietokoneen
levylle, on TiddlyWikiin täytynyt keksiä muita tapoja hoitaa tallennus.
Firefox-selainta käytettäessä sujuvin tapa on käyttää selaimeen
ladattavaa TiddlyFox-lisäosaa. Tällöin TiddlyWiki5 pyytää aina
tallennusta tehdessään lisäosaa hoitamaan varsinaisen levylle
kirjoittamisen. Muilla HTML5:ttä tukevilla selaimilla tallennus tapahtuu
siten, että tallennuskuvake on todellisuudessa latauslinkki, jolla
käyttäjä lataa itselleen ohjelman generoiman uuden version
HTML-tiedostosta. Selaimesta ja sen asetuksista riippuen joko käyttäjä
joutuu itse valitsemaan tallennettavan tiedoston paikan ja nimen tai
tiedosto tallennetaan automaattisesti käyttäjän oman kotihakemiston
"Ladatut"-kansioon (tai "Downloads"). Kolmantena vaihtoehtona on käyttää
TiddlyWiki5:ttä [Node.js](Node.js "wikilink")-ohjelman kautta. Tällöin
Node.js:ään asennettu <tt>tiddlywiki</tt>-moduli toimii käyttäjän tietokoneella
paikallisena palvelimena, jonka tarjoamaa sivua käyttäjä voi muokata.
Neljäs vaihtoehto on käyttää
[TiddlyDesktop](https://github.com/Jermolene/TiddlyDesktop)-sovellusta,
joka on node-webkit-pohjainen sovellus TiddlyWiki5:n käyttöön.

Lisäksi on tarjolla palveluita, kuten
[Tiddlyspot](http://tiddlyspot.com), jotka tarjoavat muokattavan
TiddlyWikin verkossa.

Kotisivu
:   <http://tiddlywiki.com>

Lähdekoodi
:   <https://github.com/Jermolene/TiddlyWiki5>

TiddlyDesktop
:   <https://github.com/Jermolene/TiddlyDesktop>

Lisenssi
:   [BSD](http://opensource.org/licenses/BSD-3-Clause) (3 kohdan BSD-lisenssi)

Toimii seuraavilla alustoilla
:   Selaimet

Asennus
:   TiddlyWiki on ladattavissa sen kotisivulta.

Videot
:   [TiddlyWiki5:n esittely](https://www.youtube.com/watch?v=KtCUr83XgyE)
:   [Esittely TiddlyDesktopin käytöstä](https://www.youtube.com/watch?v=i3Bggkm7paA)

{{% wrapper class="psgallery" %}}
* [TiddlyWiki5:n käyttöliittymä: avattujen tiddlerien lista ja sivupalkki.](/images/tiddlywiki5-1.jpg)
* [Aloitusohjeet eri selaimille.](/images/tiddlywiki5-2.jpg)
* [Asetukset, kuten tiedoston otsikko ja käyttäjän tunnus.](/images/tiddlywiki5-3.jpg)
* [Uusi tiddleri kirjoitetaan wiki-kielellä.](/images/tiddlywiki5-4.jpg)
* [Sisältötyyppejä on useita oletuksena olevan wiki-kielen lisäksi.](/images/tiddlywiki5-5.jpg)
* [TiddlyWiki5 tukee suoraan SVG-sisältöä. Lisäosilla saa tuen esimerkiksi matematiikalle ja ohjelmakoodin syntaksikorostukselle.](/images/tiddlywiki5-6.jpg)
* [Firefoxin lisäosan avulla saadaan tehtyä suora tallennus. Muilla selaimilla tallennus tapahtuu lataamalla ja tallentamalla uusi versio tiedostosta.](/images/tiddlywiki5-7.jpg)
* [Lisäosat tallennetaan TiddlyWikiin tiddlereinä, kuten kaikki muukin sisältö.](/images/tiddlywiki5-8.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*
