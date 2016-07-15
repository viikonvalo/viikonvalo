+++
Date = "2015-05-02T21:00:00.000Z"
Title = "SQLite"
Description = "SQLite on kevyt, yhtä tiedostoa käyttävä relaatiotietokantajärjestelmä."
Week = "5x18"
Number = "226"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris","Android","iOS"]
Tagit = ["Tietokanta"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo226-sqlite.png"
+++


**SQLite on kevyt, yhtä tiedostoa käyttävä
[relaatiotietokantajärjestelmä](https://fi.wikipedia.org/wiki/Relaatiotietokanta).**

![ ](/images/valo226-sqlite.png "fig:valo226-sqlite.png") Toisin kuin suurin osa
muista tietokantajärjestelmistä, SQLite ei toimi palvelimena, johon
otetaan yhteyttä asiakasohjelmalla, vaan tietokantatoiminnallisuus tulee
kevyen SQLite-kirjaston kautta suoraan sovellusohjelmaan.
SQLite-tietokanta tallennetaan kokonaisuudessaan yhteen tiedostoon, jota
sovellus osaa käsitellä SQLite-kirjaston avulla. SQLiten lähdekoodi on
julkista omaisuutta (Public Domain) ja se on saatavilla jotakuinkin
kaikille mahdollisille alustoille. Samoin se on käytettävissä lähes
kaikilla ohjelmointikielillä.

Koska SQLite-kanta tallennetaan yhteen tiedostoon ja koska
SQLite-kirjasto on hyvin pieni, on siitä tullut varsin suosittu tapa
tallentaa erilaisten sovellusohjelmien sisäisesti käyttämää tietoa.
Esimerkiksi suuri osa Android- ja iOS-ohjelmista käyttää
SQLite-tiedostoja asetustensa ja käsittelemänsä tiedon tallennukseen.
Samoin monet työpöytäohjelmistot, kuten [Firefox](Firefox) ja
[Chromium](Chromium)/Chrome käyttävät SQLite-tiedostoja
tietojensa, kuten selaushistorian ja kirjanmerkkien, tallentamiseen.

SQLite tukee suurinta osaa
[SQL-kielen](https://fi.wikipedia.org/wiki/SQL) SQL-92-standardista.
Vain [muutama ominaisuus](https://sqlite.org/omitted.html) standardista
on toteuttamatta. SQLite lupaa transaktioidensa olevan atomaarisia,
eheitä, eristyneitä ja pysyviä
([ACID](http://fi.wikipedia.org/wiki/ACID)), eli toisin sanoen tietoa
transaktiolla siirrytään aina ehjästä tilasta toiseen kokonaisuudessaan
tai ei lainkaan. Tämä tarkoittaa, että SQLite-tiedoston ei pitäisi
hajota edes ohjelman tai käyttöjärjestelmän kaatumiseen taikka
virtakatkoon. Tietokantatiedostoa voidaan lukea usealla prosessilla yhtä
aikaa, mutta kirjoittamista varten koko tiedosto lukitaan.

SQLiten mukana tulee komentorivikäyttöliittymä, jolla SQLite-tiedostoa
voidaan ylläpitää ja siihen voidaan tehdä kyselyitä. Lisäksi
SQLite-tiedostoja voi luoda, tarkastella ja ylläpitää useilla
erilaisilla graafisilla käyttöliittymillä, kuten
[SQLiteBrowser](DB_Browser_for_SQLite) (DB Browser for SQLite) ja
[Sqliteman](http://sqliteman.yarpen.cz/). Myös
[Calligra\_Suiten](Calligra_Suite) Kexi-tietokantaohjelma
käyttää omana tiedostomuotonaan SQLite-tiedostoja, joihin on lisätty
muutama Kexin omaan käyttöön tarkoitettu tietokantataulu.

Kotisivu
:   <https://sqlite.org/>

Lisenssi
:   Public Domain

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD, OpenBSD, NetBSD, Solaris,
    Android, iOS

Asennus
:   Ladattavissa alustan omasta paketinhallinnasta tai kauppapaikasta
    taikka ohjelmiston omilta kotisivuilta.

Linkkejä
:   [Luettelo SQLiten ominaisuuksista](https://sqlite.org/features.html)
:   [Milloin käyttää SQLiteä](https://sqlite.org/whentouse.html)
:   [FAQ](https://sqlite.org/faq.html) (Usein kysyttyjä kysymyksiä)

{{% wrapper class="psgallery" %}}
-   [SQLiten komentorivikäyttöliittymä ja SailfishOS:n viestihistorian
    sisältävä tietokantatiedosto. Haettuna paikallisliikenteen
    tekstiviestilippujen tilaukset ja liput.](/images/sqlite-1.jpg)
-   [SQLiten komentorivikäyttöliittymän tulostuksen
    muotoiluja.](/images/sqlite-2.jpg)
-   [Mozilla Firefoxin asetustiedosto, jossa tallennettuna muun muassa
    kirjanmerkit.](/images/sqlite-3.jpg)
-   [Sqliteman on yksi graafinen käyttöliittymä SQLite-tiedostojen
    käsittelyyn.](/images/sqlite-4.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


