+++
Date = "2013-11-23T22:00:00.000Z"
Title = "Chromium"
Description = "Chromium on nopea avoimen lähdekoodin www-selain ja sitä tekevä projekti."
Week = "3x48"
Number = "152"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Android","www-selain"]
Tagit = ["Internet"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo152-chromium.png"
+++


**Chromium on nopea avoimen lähdekoodin www-selain ja sitä tekevä
projekti.**

![ ](/images/valo152-chromium.png "fig:valo152-chromium.png") Chromium on Googlen
johtama projekti, jonka tuottamasta avoimesta lähdekoodista Google
muodostaa oman Google Chrome -selaimensa. Alun perin tarkoituksena oli,
että projektin nimi olisi Chromium ja sen tuloksena oleva www-selain
olisi nimeltään Chrome, mutta monet kolmannet osapuolet, kuten
Linux-jakeluiden valmistajat, ovat paketoineet myös lähdekoodista
käännettyä selainta nimellä **Chromium**.

Avoin Chromium toimii suurimmalta osin täsmälleen samoin kuin sen
suljettu versio Chrome. Sen käyttöliittymä on selkeän minimalistinen
antaen pääosan välilehdille, osoite- ja hakukentälle (Omnibox) sekä itse
www-sivun sisällön näyttävälle alueelle. Kaikki valikkotoiminnot on
koottu yhden valikkonappulan taakse. Selain on varsin nopea ja
varmatoiminen. Se käyttää html-sivun näyttämiseen
[WebKit](http://fi.wikipedia.org/wiki/WebKit)-moottorista edelleen
kehitettyä
[Blink](http://fi.wikipedia.org/wiki/Blink_(selainmoottori))-moottoria.
JavaSriptin suorittamiseen käytetään Googlen kehittämää nopeaa
[V8-JavaScript-moottoria](http://en.wikipedia.org/wiki/V8_(JavaScript_engine)).
Chromiumissa kukin välilehti toimii omana prosessinaan, mikä tarkoittaa
sitä, että yhden välilehden tai esimerkiksi sillä toimivan
Flash-lisäosan kaatuminen ei vaikuta muihin välilehtiin tai koko
selaimeen. Tämän ansiosta myöskään hitaasti toimiva tai muuten raskas
www-sivusto ei hidasta tai jumiuta koko selainta. Lisäksi vähän
Chromiumin jakeluversiosta riippuen sivujen renderöinnistä vastuussa
olevat prosessit toimivat niin kutsutuissa hiekkalaatikoissa.
Hiekkalaatikoiminen lisää selaimen tietoturvallisuutta, sillä
hiekkalaatikossa toimivan prosessin ei ole mahdollista päästä käsiksi
esimerkiksi tietokoneen tiedostojärjestelmään taikka toisten välilehtien
tietoihin.

Chromiumin ulkoasua voi muokata samoilla teemoilla kuin Chrome-selaimen
ulkoasua. Käytettävissä on myös sama sovelluskauppa kuin Googlen
brändillä varustetussa Chromessa. Mediatiedostomuodoista Chromium tukee
oletuksena vain [avoimia
tiedostomuotoja](Vapaat_tiedostomuodot "wikilink") (Ogg Vorbix, Ogg
Theora ja WebM), mutta suljetuille mediatiedostomuodoille on mahdollista
asentaa tuki ulkoisina koodekkeina. Chromium on myös erinomainen työkalu
web-kehittäjälle, sillä se sisältää hyvät välineet web-sivun rakenteen
ja JavaScriptin analysointiin ja testaamiseen.

Chromium- ja Chrome-selainten suurimmat erot ovat:

-   Chromen Google-brändäys
-   Chromiumin logo on siniharmaa. Chromen logo on "Google-värikäs"
-   Chromium on avointa lähdekoodia. Chrome on suljettu ja pyytää
    käyttäjää hyväksymään ohjelmistolisenssin.
-   Chromiumista puuttuu Chromen sisäänrakennettu pdf-katselin. Sen
    sijaan käytetään järjestelmään asennettua erillista pdf-katselinta.
-   Chromiumista puuttuu Chromeen integroitu Adoben Flash-soitin, mutta
    siinä voidaan käyttää tavallista Flash-lisäosaa.
-   Chromiumista puuttuu Chromen sisäänrakennettu tulostus- ja
    esikatselujärjestelmä. Chromium käyttää alla olevan
    käyttöjärjestelmän normaalia tulostusjärjestelmää.
-   Chromiumista puuttuu Chromen sisäänrakennettu tuki suljetuille
    mediatiedostomuodoille (AAC, MP3, H.264), mutta tuki myös näille on
    saatavilla ulkopuolisina koodekkeina.
-   Chromium ei hae Chromen tapaan automaattisia päivityksiä, mutta
    varsinkin Linux-järjestelmissä tämä ominaisuus korvautuu
    keskitetyllä paketinhallinnalla.
-   Chromiumista puuttuu myös Chromen tarjoama mahdollisuus Googlen
    käyttäjäseurannalle ja kaatumisraporttien lähettämiseen Googlelle.

Chromium-selain on saatavissa usealle alustalle: BSD-järjestelmät,
Linux, Mac OS X, Windows ja Android. Näille alustoille Chromium on
ladattavissa Chromium-projektin virallisena [joka yö käännettävänä
versiona](http://download-chromium.appspot.com/). Suurimmalle osalle
Linux-jakeluista Chromium löytyy myös suoraan niiden paketinhallinnasta.
Esimerkiksi Ubuntussa Chromium saa tätä kautta myös päivitykset
versiosta toiseen.

Kotisivu
:   <http://www.chromium.org/>
:   <http://download-chromium.appspot.com/>

Lisenssi
:   BSD-lisenssi sekä lisäksi komponentteja useilla sallivilla
    lisensseillä: [MIT](MIT), [GNU LGPL](GNU_LGPL),
    [MPL](http://en.wikipedia.org/wiki/Mozilla_Public_License), MPL/GNU
    GPL/GNU LGPL-kolmoislisenssi

Toimii seuraavilla alustoilla
:   FreeBSD, OpenBSD, NetBSD, Linux, Mac OS X, Windows ja Android

Asennus
:   Chromiumin voi ladata "Nightly build"-pakettina osoitteesta
    <http://download-chromium.appspot.com/> tai asentaa
    Linux-järjestelmiin suoraan paketinhallinnan kautta.

{{% wrapper class="psgallery" %}}
-   [Chromium selain vasta käynnistettynä.](/images/chromium-1.png)
-   [Chromium Viikon VALO -sivustolla.](/images/chromium-2.png)
-   [Chromiumin valikko](/images/chromium-3.png)
-   [Ubuntun Chromiumin versiotiedot](/images/chromium-4.png)
-   [Chromiumin asetukset](/images/chromium-5.png)
-   [Chromiumissa toimivat samat teemat kuin
    Chromessakin.](/images/chromium-6.png)
-   ["Lone Tree"-teema valittuna.](/images/chromium-7.png)
-   [Chromiumin työkaluista on hyötyä
    web-kehittäjälle.](/images/chromium-8.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


