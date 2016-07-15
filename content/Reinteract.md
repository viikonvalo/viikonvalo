+++
Date = "2013-04-27T21:00:00.000Z"
Title = "Reinteract"
Description = "Reinteract on helppokäyttöinen käyttöliittymä Python-kokeiluihin ja -laskentaan."
Week = "3x18"
Number = "122"
Alustat = ["Linux","Windows","Mac OS X"]
Tagit = ["Matematiikka","Ohjelmointi","Tiede","Opiskelu","Opetus"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo122-reinteract.png"
+++


**Reinteract on helppokäyttöinen käyttöliittymä Python-kokeiluihin ja
-laskentaan.**

![ ](/images/valo122-reinteract.png "fig:valo122-reinteract.png") Reinteract on
ympäristö Python-kielellä tehtäviin interaktiivisiin kokeiluihin. Se on
erityisen kätevä matemaattiseen laskentaan ja niihin liittyvien graafien
piirtoon. Ohjelman työsivu (worksheet) sisältää käyttäjän kirjoittamaa
Python-koodia sekä niiden suorituksesta syntyviä tulosterivejä.
Reinteractin erityisominaisuus verrattuna normaaliin Python-tulkkiin on
se, että jo kertaalleen kirjoitettuja rivejä voi käydä tekstieditorin
tapaan muokkaamassa ja rivit voi suorittaa uudelleen. Jonkin aiemman
rivin suorittaminen laukaisee samalla kaikkien myöhempien, siitä
riippuvien rivien suorittamisen uudelleen. Näin sivun alkuun voidaan
kirjoittaa esimerkiksi sijoituslause, jossa muuttujalle *x* annetaan
jokin arvo ja sen jälkeen rivejä, joilla tuota muuttujaa käytetään. Kun
sijoituslausetta käydään muuttamassa, Reinteract suorittaa uudelleen
kaikki sen jälkeen tulevat rivit, jolloin ne päivittyvät vastaamaan
muuttujan *x* uutta arvoa.

Reinteract merkitsee kunkin käyttäjän syöttämän rivin yhdellä kolmesta
väristä sen mukaan, missä tilassa rivi on. Sinisellä merkityt rivit ovat
suoritettuja rivejä. Keltaisella merkityt ovat muokattuja, vielä
suorittamattomia rivejä. Violetilla puolestaan merkitään rivit, jotka on
jo kertaalleen suoritettu ja joita ei ole muokattu, mutta joiden tulos
ei enää vastaa sitä edeltäviä rivejä. Päivitysnappulan painaminen taikka
control-enter-näppäinyhdistelmän näppäily suorittaa keltaiset ja
violetit rivit järjestyksessä, tulostaa tarvittaessa niille kullekin
tulosteen ja merkitsee ne jälleen sinisellä värillä.

Yhden rivin Python-komentojen lisäksi Reinteractille voi syöttää ihan
tavallista Python-koodia, jonka ohjelma näyttää syntaksikorostuksilla
värjättynä. Näin Reinteractin käytössä on täysi Pyhton-kielen
suorituskyky. Työsivulle voi kirjoittaa myös kommenttirivejä. Reinteract
tuo mukanaan yksinkertaisen plot-käskyn, jolla voi tulostaa funktioiden
käyriä suoraan työsivulle, sekä play-käskyn, jolla käyrän voi
tulostamisen sijasta soittaa äänenä. Reinteractin kanssa voi toki
käyttää myös muita Python-kirjastoja. Näitä ovat muun muassa synboliseen
laskentaan sopiva [SymPy](http://sympy.org/en/index.html), numeeriseen
lasketaan kehitetty [NumPy](http://www.numpy.org/) tai 2D-käyrien
piirtämiseen tarkoitettu [matplotlib](http://matplotlib.org/).

Reinteract tallentaa kirjoitettuja Python-tekstejä muistikirjoina
(notebook), jotka sisältävät yhden tai useamman työsivun (worksheet).
Näin samaan projektiin liittyvät erilliset laskennat tai
Python-koodikokonaisuudet voi kirjoittaa erillisille työsivuille samaan
muistikirjaan. Reinteractia voi käyttää työkaluna esimerkiksi
Python-kurssilla siten, että opettaja kirjoittaa oppitunnin
tehtävänannot kommentteina muistikirjan työsivuille ja opiskelijat
kirjoittavat niihin sitten omat ratkaisunsa. Kukin muistikirja
tallennetaan levylle yhtenä kansiona (hakemistona), joka sisältää
tiedoston index.rnb, jossa ovat muistikirjan yleiset tiedot, sekä joukon
rws-päätteisiä Python-lähdekooditiedostoja, joissa kussakin on yhden
työsivun sisältö.

Kotisivu
:   <http://www.reinteract.org/>

Lisenssi
:   [BSD](http://fi.wikipedia.org/wiki/BSD-lisenssi)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X

Asennus
:   Ohjelma on ladattavissa sen kotisivuilta. Linux-jakeluihin se löytyy
    suoraan paketinhallinnasta.

Käyttöohjeet
:   Lyhyt johdanto ohjelman käyttöön löytyy sen
    [kotisivuilta](http://www.reinteract.org/documentation.html).
:   Tutoriaaleja Pythonin käyttöön löytyy verkosta lukuisia. Esimerkiksi
    Python-projektin oma
    [tutoriaali](http://docs.python.org/2/tutorial/).
:   [SymPy](http://docs.sympy.org/dev/tutorial/tutorial.en.html)-tutoriaali

{{% wrapper class="psgallery" %}}
-   [Luodaan uusi työsivu
    Reinteract-muistikirjaan.](/images/reinteract-1.png)
-   [Yksinkertaisia laskutoimituksia tallentamattoman muistikirjan
    nimeämättömällä työsivulla. Siniset rivit on suoritettu, keltaista
    vasta muokataan.](/images/reinteract-2.png)
-   [Keltaista riviä on muokattu ja kaikki sen jälkeen tulevat rivit on
    merkitty violetilla, sillä ne vaativat
    päivittämistä.](/images/reinteract-3.png)
-   [Avataan ohjelman mukana tullut esimerkkejä sisältävä
    muistikirja.](/images/reinteract-4.png)
-   [Esimerkki työsivun sisällöstä. Kommentteja, muuttujia,
    laskutoimituksia, funktioiden määrittelyitä ja
    kutsuja.](/images/reinteract-5.png)
-   [Reinteractin plot-komennolla tulostettuja
    kuvaajia.](/images/reinteract-6.png)
-   [Numpy, matplotlib ja Reinteractin imshow käytössä kuvaajien
    piirtämiseen.](/images/reinteract-7.png)
-   [Reinteractin replay-kirjaston mukana tuleva play-komento, jolla voi
    soittaa kuvaajan äänenä.](/images/reinteract-8.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*kuvakaappaukset: Pesasa*


