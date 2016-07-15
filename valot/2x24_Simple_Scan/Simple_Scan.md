+++
Date = "2012-06-09T21:00:00.000Z"
Title = "Simple Scan"
Description = "Simple Scan on hyvin yksinkertaiseksi tehty skannausohjelmisto, jolla voi skannata paperilta digitaaliseen muotoon niin yksittäisiä kuvia kuin monisivuisia dokumenttejakin."
Week = "2x24"
Number = "76"
Alustat = ["Linux","FreeBSD","OpenBSD","NetBSD"]
Tagit = []
Type = "post"
Author = "Pesasa"
Pageimage = "valo76-simplescan.png"
+++


**Simple Scan on hyvin yksinkertaiseksi tehty skannausohjelmisto, jolla
voi skannata paperilta digitaaliseen muotoon niin yksittäisiä kuvia kuin
monisivuisia dokumenttejakin.**

![ ](/images/valo76-simplescan.png "fig:valo76-simplescan.png")
Skanneriohjelmistot ylpeilevät helposti monipuolisuudellaan ja
lukuisilla säädöillään, joita käyttämällä skannerin käytöstä saa irti
täyden hyödyn. Monessa tilanteessa kuitenkin on tarve vain nopeasti ja
helposti muuntaa sähköiseen muotoon, esimerkiksi pdf-tiedostoksi, jokin
yhden tai useamman sivun mittainen dokumentti tai skannata riittävällä
tarkkuudella jokin kuva. *Simple Scan* on suunniteltu juuri tällaiseen
käyttöön. Ohjelman tarkoituksena on vain mahdollistaa nopea ja huoleton
skannaaminen ilman suurta perehtymistä ja asetusten säätämistä. Ohjelman
ei ole tarkoitus kilpailla monipuolisempien skanneriohjelmien kanssa
vaan hoitaa yksinkertaiset skannaustehtävät nopeasti ja vaivattomasti.
Ohjelma soveltuu erinomaisesti esimerkiksi laskujen, kuittien,
takuulappujen sekä muiden säilytettävien paperisessa muodossa saatujen
asiakirjojen skannaamiseen sähköistä arkistointia varten. Takuulappujen
ja kuittien lämpöpaperistahan häviää teksti näkyvistä jo hyvissä ajoin
ennen takuuajan umpeutumista.

Ohjelman käyttöliittymä on tehty mahdollisimman minimalistiseksi, mutta
siinä on silti säilytetty tärkeimmät toiminnot. Työpalkissa ovat
painikkeet vain uuden asiakirjan aloittamiselle, seuraavan sivun (tai
kaikkien syöttölaitteella olevien sivujen) skannaamiselle, skannattujen
sivujen tallentamiselle, aloitetun skannauksen keskeyttämiselle, sivun
kääntämiselle 90 astetta myötä- tai vastapäivään sekä skannatun sivun
rajaamiselle. Sivua skannatessa voi valita kahdesta esiasetetusta
skannaustilasta, jotka ovat mustavalkoinen tekstiskannaus ja värillinen
valokuvaskannaus. Ohjelman asetuksetkin ovat minimaaliset ja koostuvat
vain skannerilaitteen valinnasta (jos laitteita on useampia), teksti- ja
valokuvaskannausten tarkkuudesta, joidenkin laitteiden kanssa
valittavasta skannauspuolesta sekä halutusta sivukoosta. Mitään muita
asetuksia ohjelmassa ei ole valittavissa.

Skannatut sivut voidaan ohjelmalla tallentaa, tulostaa tai lähettää
sähköpostina. Tallennusmahdollisuuksina ovat pdf-, jpg- ja
png-tiedostomuodot. Pdf-tiedostona tallennettaessa kuvat tallennetaan
yhtenä useampisivuisena pdf-tiedostona, kukin kuva omana sivunaan. Jpg-
ja png-muodoissa tallennettaessa kukin kuva tallennetaan erillisenä
tiedostona. Sähköpostina lähettäminen tapahtuu käyttämällä järjestelmän
oletussähköpostiohjelmaa ja skannattu asiakirja liitetään sähköpostiin
pdf-tiedostona.

Teknisesti Simple Scan toimii käyttöliittymänä taustalla toimivalle
[SANE](http://www.sane-project.org/)-järjestelmälle (*Scanner Access Now
Easy*). SANE on Linux- ja UNIX-ympäristöissä yleisesti käytetty
ohjelmointirajapinta skannereille. Kaikkien skannausohjelmien ei siis
tarvitse osata käyttää kaikkia erilaisia skannereita vaan ne osaavat
jutella SANE-järjestelmälle, joka hoitaa itse laitteen ohjaamisen.
Useissa Linux-jakeluissa, kuten esimerkiksi Ubuntussa, SANE on
oletuksena valmiiksi asennettuna ja se tunnistaa sekä osaa käsitellä
suoraan suurta osaa tietokoneeseen kytketyistä skannereista. Muita
käyttöliittymiä SANElle ovat muun muassa monipuolisempi
[XSane](http://www.xsane.org/), KDE-työpöytäympäristön käyttämä
[skanlite](http://docs.kde.org/development/en/extragear-graphics/skanlite/)
sekä myös dokumenttien pdf-tiedostoiksi skannaamiseen soveltuva
[gscan2pdf](http://gscan2pdf.sourceforge.net/).

Kotisivu
:   <https://launchpad.net/simple-scan>

Lisenssi
:   [GNU GPLv](GNU_GPL)3

Toimii seuraavilla alustoilla
:   Linux, BSD-Unixit

Asennus
:   Simple Scan löytyy useissa Linux-jakeluissa suoraan
    paketinhallinnasta. BSD-Unixeihin ohjelma löytyy yleensä joko niiden
    omista paketeista tai ohjelman kotisivuilta lähdekoodina.

{{% wrapper class="psgallery" %}}
-   [ ](/images/simplescan-1.png)
-   [ ](/images/simplescan-2.png)
-   [ ](/images/simplescan-3.png)
-   [ ](/images/simplescan-4.png)
-   [ ](/images/simplescan-5.png)
-   [ ](/images/simplescan-6.png)
-   [ ](/images/simplescan-7.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

