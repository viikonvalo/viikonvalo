+++
Date = "2014-05-03T21:00:00.000Z"
Title = "Node.js"
Description = "Node.js on JavaScript-ohjelmointiympäristö monelle alustalle esimerkiksi palvelinkäyttöön."
Week = "4x19"
Number = "175"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris","WebOS"]
Tagit = ["Ohjelmointi","JavaScript","Palvelin"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo175-nodejs.png"
+++


**Node.js on JavaScript-ohjelmointiympäristö monelle alustalle
esimerkiksi palvelinkäyttöön.**

![ ](/images/valo175-nodejs.png "fig:valo175-nodejs.png")
JavaScript-ohjelmointikielen merkitys on lisääntynyt viime vuosina
runsaasti alustariippumattomien websovellusten yleistymisen myötä.
Aiemmin JavaScript oli käytettävissä pääasiassa vain webselaimissa,
mutta Node.js:n myötä se on yleistynyt myös palvelinkäytössä. Node.js
käyttää JavaScript-ohjelmakoodin suorittamiseen Googlen Chrome-selainta
varten tehtyä V8-JavaScript-moottoria. Node.js:llä on mahdollista
toteuttaa sekä suurempia projekteja että pieniä nopeita prototyyppejä.

Node.js:n on tarkoitus olla tehokas ja skaalautuva. Node.js:n kantavana
ajatuksena on, että se on vahvasti tapahtumapohjainen
([event-driven](http://en.wikipedia.org/wiki/Event-driven_programming))
ja siinä esimerkiksi tiedostojen luku ja kirjoitus sekä verkkoliikenne
on toteutettu
[asynkronisesti](http://en.wikipedia.org/wiki/Asynchronous_I/O).
Käytännössä tämä tarkoittaa, että mahdollisesti pitkien levy- tai
verkko-operaatioiden ajaksi ohjelma ei pysähdy odottamaan niiden
valmistumista vaan jatkaa muuta ohjelman suoritusta. Levy- tai
verkko-operaation valmistuttua ohjelma havahtuu käsittelemään
valmistumisesta syntyvän tapahtuman. Tekniikasta käytetään myös
nimitystä "non-blocking I/O".

Node.js ei tyypillisesti tarvitse erillistä www-palvelinta välittämään
sillä toteutettuja sivuja tai sovelluksia vaan se toimii itse
palvelimena, joka kuuntelee verkosta tulevia pyyntöjä. Web-sivujen
kanssa käytetyn http-protokollan lisäksi Node.js voi toimia
yleisemminkin verkkopalvelimena ja sillä onkin melko helppoa toteuttaa
mitä tahansa verkon yli tarjottavia palveluita, kuten chat-palveluita.

Node.js sisältää valmiina jonkin verran moduuleja, joilla siihen voidaan
ladata lisää ominaisuuksia, kuten *fs*-olio tiedostojen käsittelyyn sekä
*http*-olio http-yhteyksien luomiseen. Lisäksi siihen on asennettavissa
lukuisa määrä erilaisia ja eri tahojen kehittämiä moduuleja. Moduulien
asentamiseen käytetään *npm*-nimistä työkalua ([Node Packaged
Modules](https://www.npmjs.org/)). Monet selainpäässä käytetyistä
JavaScript-kirjastoista ovat käytettävissä myös Node.js:n kanssa.
JavaScript-kielen käyttämisestä myös palvelinpuolella onkin muun muassa
se etu, että asiakas- ja palvelinpään ohjelmistokehitykseen voidaan
käyttää samaa kieltä sekä samoja kirjastoja ja tietorakenteita.

Koska JavaScript on tulkittu kieli, Node.js:ää voi käyttää myös
interaktiivisena komentorivinä, johon syötetään JavaScript-kielen
komentoja. Tämä mahdollistaa nopeita ja lyhyitä kokeiluja sekä pikaisien
laskelmien suorittamisia. Node.js:ää voidaan käyttää myös JavaScriptillä
tehtyjen skriptien suorittamiseen komentoriviltä aivan samoin, kuten
muitakin skriptikieliä, kuten esimerkiksi Bash, Python, PHP tai Perl.

Eräs mielenkiintoinen käyttökohde Node.js:lle on
[NodeCopter](http://nodecopter.com/). Node.js:lle on toteutettu
moduuleja, joita käyttämällä sillä voidaan ohjata [Parrot AR Drone
2.0](http://en.wikipedia.org/wiki/Parrot_AR.Drone#Version_2.0)
-nelikoptereita. Yhteisö järjestää NodeCopter.js-tapahtumia, joissa
ohjelmoijaryhmät toteuttavat päivän aikana projekteja nelikoptereiden
kanssa ja päivän päätteeksi esittelevät aikaansaannoksiaan.

Kotisivu
:   <http://nodejs.org/>

Lähdekoodit
:   <https://github.com/joyent/node>

Lisenssi
:   [MIT](MIT) (osalla käytetyistä kirjastoista muita
    lisenssejä)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD, OpenBSD, NetBSD, Solaris

Asennus
:   Ohjelman viimeisin versio on ladattavissa sen kotisivuilta. Node.js
    on asennettavissa Linux-järjestelmiin myös paketinhallinnan kautta.
    Paketinhallinnasta asennettu versio ei välttämättä ole viimeisin
    julkaistu versio.

Käyttöohjeet
:   [Johdanto JavaScript sovellusten kehitykseen
    Node.js:llä](http://blite.iki.fi/artikkelit/javascript-nodejs-johdanto/)
    (Jaakko Salonen)
:   [JavaScript-puutarha](http://bonsaiden.github.io/JavaScript-Garden/fi/)
:   [Teach Yourself Node.JS in 10
    Steps](http://blog.ponyfoo.com/2013/07/12/teach-yourself-nodejs-in-10-steps)
:   [Felix's Node.js Beginners
    Guide](http://nodeguide.com/beginner.html)
:   [How To Node](http://howtonode.org/)
:   [The Node Beginner Book](http://www.nodebeginner.org/)

{{% wrapper class="psgallery" %}}
-   [Node.js:n käynnistys ja nodejs.org:sivuston etusivulta kopioitu
    Hello, World -esimerkki liitettynä suoraan
    komentoriville.](/images/nodejs-1.jpg)
-   [Nodejs.org-sivuston etusivu.](/images/nodejs-2.jpg)
-   [Lyhyt funktio ja sillä tehtyä laskentaa.](/images/nodejs-3.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


