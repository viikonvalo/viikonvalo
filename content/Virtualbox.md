+++
Date = "2011-07-30T21:00:00.000Z"
Title = "Virtualbox"
Description = "Virtualbox on avoimeen lähdekoodiin perustuva virtualisointiympäristö, jolla voidaan ajaa muita käyttöjärjestelmiä sovelluksen tapaan \"isäntäjärjestelmässä\"."
Week = "1x31"
Number = "31"
Alustat = ["Windows","Mac OS X","Linux","Solaris"]
Tagit = ["Virtualisointi","Järjestelmä"]
Type = "post"
Author = "pesasa"
Pageimage = "valo31-Virtualbox.png"
+++


**Virtualbox on avoimeen lähdekoodiin perustuva virtualisointiympäristö,
jolla voidaan ajaa muita käyttöjärjestelmiä sovelluksen tapaan
"isäntäjärjestelmässä".**

![ ](/images/valo31-Virtualbox.png "fig:valo31-Virtualbox.png") Virtualisoinnilla
tarkoitetaan menetelmää, jossa oikealla tietokoneella, *isäntäkoneella*
(host), ohjelmallisesti matkitaan kokonaista tietokonetta, johon voidaan
asentaa valittu käyttöjärjestelmä, *vierasjärjestelmä* (guest), ja
siihen haluttuja ohjelmia. Virtualisoinnilla on mahdollista käynnistää
esimerkiksi Ubuntu-käyttöjärjestelmää käyttävä virtuaalikone yhteen
Windows-työpöydällä näkyvään ikkunaan. Näin on mahdollista kokeilla
uusia käyttöjärjestelmiä ja niiden eri versioita asentamatta niitä
varsinaiselle koneelle. Toisaalta tämä mahdollistaa myös sellaisten
sovellusten ajamisen, joita ei muuten ole saatavilla
isäntäjärjestelmään. Esimerkiksi MS Word -ohjelmaa on mahdollista
käyttää näin Linux-isäntään asennetussa Windows-virtuaalikoneessa.

Virtualbox on vapaa ja käyttäjäystävällinen virtualisointiohjelma, jolla
uuden virtuaalikoneen luominen ja käyttö ovat helppoa. Uutta
virtuaalikonetta luotaessa valitaan koneelle halutut perusominaisuudet,
kuten muistin määrä, kiintolevykuvan koko, käytettävä optinen asema
(isäntäkoneen asema tai levykuva) ja asennettavan käyttöjärjestelmän
tyyppi. Tämän jälkeen uusi virtuaalikone käynnistetään ja siihen
asennetaan käyttöjärjestelmä aivan kuten mihin tahansa tyhjään
tietokoneeseen. Asennuksen jälkeen virtuaalikone on käynnistettävissä
parilla hiiren napsautuksella. Virtuaalikoneen käyttö eroaa tavallisen
koneen käytöstä pääasiassa vain siinä, että sen näyttönä toimii yksi
isäntäkoneen ikkuna ja jotkin sen "laitteistoista" saattavat toimia
hieman normaalia vajaammin. Esimerkiksi näytön 3d-tehosteet eivät
välttämättä ole käytettävissä virtuaalikoneessa samoin kuin isäntäkoneen
usb-laitteet.

Virtualboxin mahdollisia käyttökohteita ovat esimerkiksi:

-   uusien (tai vanhojen) käyttöjärjestelmien ja niiden versioiden
    kokeilu
-   jonkin sellaisen sovellusohjelman käyttäminen, jota ei ole
    saatavilla suoraan normaalisti käytössä olevaan isäntäjärjestelmään
    (esimerkiksi www-sivujen testaaminen Internet Explorerilla
    Linux-järjestelmässä asentamalla virtuaalikoneeseen Windows ja
    siihen IE)
-   palvelinasennuksen testaaminen virtuaalikoneessa "sotkematta"
    varsinaista järjestelmää
-   oman, itselle tutun järjestelmän käyttäminen lainakoneessa

Virtualboxissa on mahdollista ottaa virtuaalikoneista myös niin
kutsuttuja snapshotteja. Tällä tarkoitetaan virtuaalikoneen sen hetkisen
tilan tallentamista. Samasta virtuaalikoneesta voi siis olla tallessa
useampia erilaisissa tiloissa olevia snapshotteja, joiden välillä
voidaan helposti siirtyä. Tämä tekniikka on erityisen kätevää, kun
halutaan esimerkiksi tallentaa järjestelmän tila ennen jonkin suuremman
ohjelman tai päivityksen asentamista siltä varalta, että asennus
epäonnistuu tai jostain muusta syystä osoittautuu virheeksi.

Virtualbox vaatii toimiakseen riittävän tehokkaan isäntäkoneen, eli
isäntäkoneessa tulee olla muistia ja prosessoritehoa riittävästi sekä
isännän että vieraan käyttöön. Samoin isännän kiintolevyllä on oltava
riittävästi tilaa kaikkien luotujen virtuaalikoneiden ja niihin
asennettujen käyttöjärjestelmien sekä ohjelmien tallennukseen.

Virtualboxiin on myös asennettavissa yksityiskäyttöön ilmainen, mutta
epävapaa laajennuspaketti, joka mahdollistaa muun muassa isäntäkoneen
usb-porttien käytön suoraan vierasjärjestelmästä käsin.

Kotisivu
:   <http://www.virtualbox.org/>

Lisenssi
:   [GNU GPL](GNU_GPL) v.2

Toimii seuraavilla alustoilla
:   Windows, Mac OS X, Linux, Solaris (isäntinä)

Asennus
:   Ohjelman asennuspaketit löytyvät ohjelman kotisivuilta sekä useiden
    Linux-jakeluiden pakettivarastoista.

{{% wrapper class="psgallery" %}}
-   [ ](/images/Virtualbox-1.png)
-   [ ](/images/Virtualbox-2.png)
-   [ ](/images/Virtualbox-3.png)
-   [ ](/images/Virtualbox-4.png)
-   [ ](/images/Virtualbox-5.png)
-   [ ](/images/Virtualbox-6.jpg)
-   [ ](/images/Virtualbox-7.jpg)
{{% /wrapper %}}

*Teksti: pesasa* <br />
*kuvakaappaukset: pesasa*

