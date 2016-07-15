+++
Date = "2015-04-06T13:11:00.000Z"
Title = "Piwik"
Description = "Piwik on avoimen lähdekoodin web-analytiikkaohjelmisto ja vaihtoehto Google Analyticsille."
Week = "5x14"
Number = "222"
Alustat = ["Linux","FreeBSD","OpenBSD","NetBSD","Solaris","Windows","Mac OS X"]
Tagit = ["Palvelinohjelma","Webtilastot"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo222-piwik.png"
+++


**Piwik on avoimen lähdekoodin web-analytiikkaohjelmisto ja vaihtoehto
Google Analyticsille.**

![ ](/images/valo222-piwik.png "fig:valo222-piwik.png") Piwik on omalle
palvelimelle asennettavissa oleva avoimen lähdekoodin
web-analytiikkaohjelmisto, jota käyttämällä voi korvata esimerkiksi
Google Analytics -palvelun käytön. Kävijätilastojen seuraaminen voi olla
tärkeää joillekin sivustoille ja tähän käytetään usein esimerkiksi
Google Analytics -palvelua. GA:n käytön suurimpana haittapuolena on
kuitenkin se, että kävijätilastot ovat tällöin kolmannen osapuolen
hallussa yrityksellä, joka toimii ulkomaisen lainsäädännön alaisena.
Kävijätilastot voivat olla tärkeää ja luottamuksellista tietoa sekä
sivustoa ylläpitävälle yritykselle itselleen että sivustolla käyville
käyttäjille. Piwik-ohjelmistoa käyttämällä tilastointipalvelu on
mahdollista asentaa omalle palvelimelle, jolloin sivuston kävijätiedot
pysyvät vain sivuston ylläpitäjän hallussa eivätkä vuoda ulkopuolisille.
Tietoturvan lisäksi omalle palvelimelle tallennettu tieto on myös
tarvittaessa saatavissa halutussa raakamuodossa.

Käyttämällä omille palvelimille asennettua Piwikiä esimerkiksi S-Pankki
olisi välttynyt taannoisista
[tietosuoja- ja PR-ongelmistaan](http://www.tivi.fi/Kaikki_uutiset/2015-02-26/Tietosuojavaltuutettu-selvitt%C3%A4%C3%A4-S-Pankin-Google-Analytics--k%C3%A4ytt%C3%B6%C3%A4-3216398.html), jotka aiheutuivat verkkopankkiin
kirjautuneiden käyttäjien seuraamisesta Google Analyticsilla. Sen
sijaan, että [käyttäjätiedot olisi välitetty kolmannelle osapuolelle](http://ospi.netcode.fi/blog/mita-tietoja-s-pankki-valittaa-kolmannelle-osapuolelle.html),
ne olisivatkin olleet vain pankin omassa hallinnassa.
[Twitter-keskustelua aiheesta](https://twitter.com/0spi/status/569045642003259392).

Kävijätietoihin Piwik tallentaa kaikki tyypillisesti tilastoitavat
tiedot, kuten sivukäynnit, tiedot linkittäneistä sivustoista ja
hakukoneista, sivustolle johtaneet hakusanat, tiedot kävijän selaimesta
ja käyttöjärjestelmästä, käyttäjän maan ja kielen sekä tiedot käytetyn
laitteen tyypistä (tietokone vai mobiililaite). Tarkemman luettelon
Piwikin ominaisuuksista voi lukea [sen omilta sivuilta](http://piwik.org/features/). Piwikin web-käyttöliittymästä voi
tarkastella tilastoja erilaisilla aikaväleillä ja monelta suunnalta.
Useimmin seuratuista tilastoista voi koostaa itselleen "dashboardin".

Piwikin toimintoja voi laajentaa [marketista](http://plugins.piwik.org/)
ladattavilla lisäosilla sekä sen ulkoasua muokata ladattavilla
[teemoilla](http://themes.piwik.org/).

Tilastojen seuraamista varten voi myös ladata mobiililaitteelle siihen
tarkoitetun sovelluksen. Piwik-sovellus löytyy sekä
[Android](https://play.google.com/store/apps/details?id=org.piwik.mobile2)-
että
[iOS](https://itunes.apple.com/us/app/piwik-mobile-2/id737216887?mt=8)-laitteille.
Piwikin toimintaa voi kokeilla [demo-sivulla](http://demo.piwik.org),
joka seuraa [Piwikin foorumisivuston](http://forum.piwik.org/) sekä
kahden muun sivuston liikennettä.

Kävijätilastojen [tuonti Google Analyticsistä
Piwikiin](http://piwik.org/blog/2012/08/google-analytics-to-piwik/) ei
valitettavasti ole vielä toteutettu ja on vasta suunnitteluasteella.

Kotisivu
:   <http://piwik.org/>

Demo
:   <http://demo.piwik.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, FreeBSD, OpenBSD, NetBSD, Solaris, Windows, Mac OS X

Asennus
:   Ohjelmisto on ladattavissa sen kotisivuilta ja se käyttää PHP:tä ja
    MySQL:ää.

Tuki
:   [Piwik-foorumi](http://forum.piwik.org/)

{{% wrapper class="psgallery" %}}
-   [Demo-sivuston dashboardilla näkyy muutama tilastosovelma.](/images/piwik-1.jpg)
-   [Kävijäkarttaa voi tutkia interaktiivisesti.](/images/piwik-2.jpg)
-   [Tilastokäyrään saa näkyviin useita eri tilastoja.](/images/piwik-3.jpg)
-   [Sovelmia voi siirrellä dashboardissa.](/images/piwik-4.jpg)
-   [Dashboardiin voi lisätä haluamiaan sovelmia.](/images/piwik-5.jpg)
-   [Yksittäisiä tilastoja voi tarkastella tarkemmin.](/images/piwik-6.jpg)
-   [Yksittäisiä tilastoja voi tarkastella tarkemmin.](/images/piwik-7.jpg)
-   [Koosteena toimivan dashboardin lisäksi tilastoista voi tarkastella
    esimerkiksi sivustolle johtavia linkityksiä ja yleisimmin käytettyjä
    hakusanoja tai hakukoneita.](/images/piwik-8.jpg)
-   [Websivustoja ja sosiaalista mediaa.](/images/piwik-9.jpg)
-   [Android-sovelluksessakin voi tarkastella useamman sivuston
    tilastoja.](/images/piwik-10.jpg)
-   [Raportteja Android-sovelluksessa](/images/piwik-11.jpg)
-   [Raportteja Android-sovelluksessa](/images/piwik-12.jpg)
-   [Raportteja Android-sovelluksessa](/images/piwik-13.jpg)
-   [Raportteja Android-sovelluksessa](/images/piwik-14.jpg)
-   [Raportteja Android-sovelluksessa](/images/piwik-15.jpg)
-   [Reaaliaikainen kävijäseuranta Android-sovelluksella.](/images/piwik-16.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

