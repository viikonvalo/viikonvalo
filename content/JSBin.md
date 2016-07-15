+++
Date = "2013-04-13T21:00:00.000Z"
Title = "JS Bin"
Description = "JS Bin on web-pohjainen ympäristö, jolla voi nopeasti kokeilla HTML-koodista, CSS-tyyleistä sekä Javascript-tiedostoista koostuvaa kokonaisuutta."
Week = "3x16"
Number = "120"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD"]
Tagit = ["Palvelinohjelma","Ohjelmointi"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo120-jsbin.png"
+++


**JS Bin on web-pohjainen ympäristö, jolla voi nopeasti kokeilla
HTML-koodista, CSS-tyyleistä sekä Javascript-tiedostoista koostuvaa
kokonaisuutta.**

![ ](/images/valo120-jsbin.png "fig:valo120-jsbin.png") JS Bin on avoimen
lähdekoodin palvelinohjelmisto, jota voi käyttää www-tekniikoiden
opetteluun, opettamiseen, harjoitteluun sekä kokeilemiseen taikka
ohjelmointivirheiden etsimiseen yhteistyössä web-pohjaisesti selaimella.
Sitä on mahdollista käyttää [jsbin.com](http://jsbin.com)-palvelussa tai
vaihtoehtoisesti sen voi asentaa omalle koneelle tai palvelimelle.

Palvelun toimintaideana on, että näyttö on valinnan mukaan jaettu
korkeintaan viiteen palstaan, joissa ovat nähtävillä tai muokattavissa
**HTML**-koodi, **CSS**-tyylisäännöt, **Javascript**-ohjelmakoodi,
interaktiivinen Javascript-**konsoli** sekä näistä muodostuvan www-sivun
sisällön näyttävä **Output**-näkymä. Kunkin sarakkeista voi kytkeä
päälle tai pois näkymän yläreunassa olevilla nappuloilla. HTML-koodin ja
CSS-tyylien muokkaaminen päivittävät tulostussarakkeen sisältöä
välittömästi. Javascript taas suoritetaan valinnan mukaan joko jokaisen
päivityksen yhteydessä automaattisesti taikka vasta nappia painamalla.

Uuden JS Bin -työn, eli binin, aloittaminen luo palveluun uuden tähän
istuntoon viittaavan url-osoitteen, esimerkiksi
<http://jsbin.com/ohevev/1/edit> ja aloittaan kyseisen sivukokonaisuuden
ensimmäisen version muokkaamisen. Muokkaukset tallentuvat
automaattisesti palvelimelle ja samaa biniä pääsee muokkaamaan menemällä
selaimella uudelleen samaan muokkausosoitteeseen. Nykyisen version
pystyy lukitsemaan, jonka jälkeen muokkaaminen tapahtuu seuraavalla
versionumerolla. Versionumero on aina nähtävissä binin osoitteessa.
Osoitteen voi myös jakaa muille käyttäjille nähtäväksi katseluversiona
(esimerkiksi <http://jsbin.com/ohevev/2/watch>), joka päivittyy
reaaliaikaisesti sitä mukaa kun muokkausversiota päivitetään. Binistä
voi jakaa myös vain valmiin tuloksen näyttävän näkymän (esimerkiksi
<http://jsbin.com/ohevev/2>). Binistä voi myös tehdä itselleen kloonin,
joka on kopio alkuperäisestä, mutta uudella osoitteella. Tätä
ominaisuutta voi käyttää esimerkiksi opetuksessa antamalla
opiskelijoille linkin alkuperäiseen tehtävänantona toimivaan biniin ja
käskemällä opiskelijoita kloonaamaan sen itselleen ja tekemään omaan
versioonsa käsketyt tehtävät.

JS Biniin on mahdollista myös rekisteröityä. Rekisteröitynyt käyttäjä
pystyy selaamaan kaikkia muokkaamiaan binien versioita. Tarpeeksi
uudessa JS Binin versiossa on lisäksi ominaisuus, joka suojaa
rekisteröityneen käyttäjän aloittamat binit niin, että vain sama
käyttäjä voi muokata sitä. Jos joku muu käyttäjä yrittää muokata
tällaista suojattua biniä, luodaan siitä automaattisesti uusi klooni
uudella url-osoitteella.

Muokattavaan biniin voi pudotusvalikosta lisätä yleisimpiä
Javascript-kirjastoja. Listassa ovat valittavina muun muassa jQuery,
jQuery-ui, jQuery Mobile, Bootstrap, Prototype ja MooTools.
HTML-näkymään voi toki lisätä script-tagilla viittauksen myös mihin
tahansa muuhun kirjastoon. HTML-, CSS- ja Javascript-palstoilla on
lisäksi valittavissa asetus, joka määrää, missä muodossa niiden sisältö
syötetään. HTML-palstaan on mahdollista syöttää puhtaan html-tekstin
sijasta myös Markdown-syntaksilla kirjoitettua tekstiä, jossa
esimerkiksi listat on merkitty rivin aloittavalla tähdellä. Sisältö on
mahdollista kirjoittaa myös Jade-kielellä. Myös tyylit on mahdollista
kirjoittaa normaalin CSS-kielen sijasta [LESS](http://lesscss.org/)- tai
[Stylus](http://learnboost.github.io/stylus/)-kielillä. Javascript
voidaan puolestaan korvata [CoffeeScriptillä](http://coffeescript.org/)
taikka muutamalla muulla Javascriptiksi käännettävällä kielellä.
Vaihtoehtoisilla kielillä kirjoitetut sisällöt, tyylit sekä
ohjelmakoodit on mahdollista muuntaa kirjoittamisen jälkeen html-, css-
ja Javascript-koodiksi. Bin on myös mahdollista ladata itselleen yhtenä
html-tiedostona, joka sisältää tyylisäännöt ja Javascript-koodin.

JS Bin tukee myös syntaksin korostusta sekä [Zen
Coding](Zen Coding "wikilink") -lyhenteiden käyttöä.

JS Bin on alun perin toteutettu PHP-kielellä, mutta sen kehitys on
sittemmin siirtynyt käyttämään Javascriptiä
[Node.js](http://nodejs.org/)-alustalla. Ohjelma on asennettavissa
käyttämään kumpaa tahansa näistä kielistä, mutta eräät viimeisimmistä
ominaisuuksista toimivat vain Node.js-versiossa.

Kotisivu
:   <http://jsbin.com>

Lisenssi
:   [MIT](MIT)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD, NetBSD, OpenBSD, palvelinohjelma

Asennus
:   JS Binin lähdekoodi ja asennusohjeet ovat saatavilla
    [Githubista](https://github.com/remy/jsbin/). Ohjelma vaatii
    toimiakseen Node.js-ympäristön. Sen varhaisemmat versiot toimivat
    myös PHP-alustalla.

Käyttöohjeet
:   Opasvideoita JS Binin käyttöön löytyy
    [Youtubesta](http://jsbin.com/videos).

{{% wrapper class="psgallery" %}}
-   [Uusi bin valmiina aloitettavaksi. Näkyvissä HTML-palsta sekä
    tulostepalsta.](/images/jsbin-1.png)
-   [Uudella binillä on yksilöivä url-osoite. Näkyvissä HTML-koodi,
    CSS-tyylit sekä niiden mukainen sivu.](/images/jsbin-2.png)
-   [Javascriptillä voi luoda sivuun
    toiminnallisuutta.](/images/jsbin-3.png)
-   [JS Binissä on suoraan pudotusvalikosta valittavissa joukko
    yleisimmin käytettyjä Javascript-kirjastoja.](/images/jsbin-4.png)
-   [Bin voidaan jakaa muille pelkkänä lopputuloksen näyttävänä
    reaaliaikaisesti päivittyvänä sivuna, muokkaustilana, muuhun sivuun
    upotettavana elementtinä taikka koodin kehittymistä reaaliaikaisesti
    näyttävänä katselutilana.](/images/jsbin-5.png)
-   [Sivun sisältö voidaan kirjoittaa html-koodin sijasta myös
    Markdown-merkintäkielellä taikka Jade-kielellä.](/images/jsbin-6.png)
-   [Sisältö Markdown-kielellä. Tyylit voidaan kirjoittaa myös LESS- tai
    Stylus-kielellä.](/images/jsbin-7.png)
-   [Ohjelmakoodi voi olla Javascriptin lisäksi kirjoitettu
    CoffeeScript-, Processing-, Traceur- tai
    TypeScript-kielillä.](/images/jsbin-8.png)
-   [JS Bin käynnissä omalla koneella. Tietokantana toimii Sqlite. JS
    Bin osaa myös Emmet / Zen Coding -lyhenteiden käytön html-koodin
    kirjoittamiseen.](/images/jsbin-9.png)
-   [JS Bin osaa myös Emmet / Zen Coding -lyhenteiden käytön html-koodin
    kirjoittamiseen.](/images/jsbin-10.png)
-   [Rekisteröitynyt käyttäjä voi tarkastella listaa kaikista
    muokkaamistaan binien versioista.](/images/jsbin-11.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


