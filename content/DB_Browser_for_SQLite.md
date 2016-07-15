+++
Date = "2015-05-04T21:00:00.000Z"
Title = "DB Browser for SQLite"
Description = "DB Browser for SQLite on graafinen käyttöliittymä SQLite-tiedostojen käsittelyyn."
Week = "5x19"
Number = "227"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD"]
Tagit = ["Tietokanta"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo227-sqlitebrowser.png"
+++


**DB Browser for SQLite on graafinen käyttöliittymä SQLite-tiedostojen
käsittelyyn.**

![ ](/images/valo227-sqlitebrowser.png "fig:valo227-sqlitebrowser.png") DB
Browser for SQLite on usealla käyttöjärjestelmällä toimiva graafinen
käyttöliittymä tiedostopohjaisen [SQLite](SQLite)-tietokannan
tietokantatiedostojen käsittelyyn. Sillä voidaan luoda tietokantoja,
etsiä niistä tietoa sekä syöttää uutta tietoa kantaan. Taulujen luontia
ja määrittelyä voidaan tehdä graafisella työkalulla ja tietoja voi
syöttää suoraan taulukkonäkymässä. Vaihtoehtoisesti ohjelmalle voidaan
antaa suoritettavaksi komentoja SQL-kyselykieltä käyttäen.

Ohjelman tuonti- ja vientitoiminnoilla voidaan tietokantaan tuoda ja
sieltä viedä tauluja pilkulla eroteltuun tekstimuotoiseen tiedostoon
(csv, comma separated values). Joissain tapauksissa tosin csv-tiedoston
tuonti on nopeampaa tuoda suoraan SQLiten komentorivikäyttöliittymällä.
Esimerkiksi [Trafin avoimen
ajoneuvodatan](http://www.trafi.fi/tietopalvelut/avoin_data) vanhemman
version (noin 2,5 miljoonaa riviä) tuonti SQLite-tietokantaan DB Browser
for SQLitellä kesti noin tunnin, kun sen uudemman version (lähes 5
miljoonaa riviä) tuonti SQLiten komentorivikäyttöliittymällä kesti
samalla tietokoneella vain noin 1,5 minuuttia. Pienillä tiedostoilla
tällä ei ole suurta merkitystä, mutta suurilla aikaero on merkittävä.
Komentorivityökalulla tuonnin voi tehdä seuraavilla komennoilla:

```
.separator ','
.mode csv
.import tiedosto.csv taulu
```

Lisäksi DB Browser for SQLite sisältää yksinkertaisen plot-työkalun,
jolla taulun tai kyselyn tuloksen numeerisia arvoja voi sijoittaa
x-y-koordinaatistoon. Luettelosta valitaan rastiruuduilla, mikä arvoista
on x-akselilla ja mitkä piirretään y-arvoina.

Kotisivu
:   <http://sqlitebrowser.org/>

Lähdekoodi
:   <https://github.com/sqlitebrowser/sqlitebrowser>

Twitter
:   [@sqlitebrowser](https://twitter.com/sqlitebrowser)

Lisenssi
:   [MPL](https://www.mozilla.org/MPL/) v.2 / [GNU GPL](GNU_GPL) v.3 (kaksoislisensointi)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD

Asennus
:   Linux- ja BSD-jakeluihin ohjelma löytyy suoraan paketinhallinnasta
    nimellä sqlitebrowser. Ohjelman lataus- ja asennusohjeet löytyvät
    sen kotisivuilta.

{{% wrapper class="psgallery" %}}
-   [Uuden taulun luonti tietokantaan. Luetellaan kentät ja niiden
    tyypit sekä muut ominaisuudet.](/images/sqlitebrowser-1.jpg)
-   [Taulukkonäkymässä voi tarkastella taulun sisältöä, syöttää uusia
    rivejä ja muokata solujen sisältöä. Oikeassa reunassa olevassa
    näkymässä näkyvät ohjelman sisäisesti suorittamat
    SQL-kyselyt.](/images/sqlitebrowser-2.jpg)
-   [Tietokannan asetuksia.](/images/sqlitebrowser-3.jpg)
-   [Tekstinä syötetty SQL-kysely sekä sen tuloksena saatu
    taulu.](/images/sqlitebrowser-4.jpg)
-   [Eri tauluja yhdistävä kysely.](/images/sqlitebrowser-5.jpg)
-   [CSV-tiedoston tuonti tauluksi.](/images/sqlitebrowser-6.jpg)
-   [Kysely lähes viisi miljoonaa riviä sisältävään
    tauluun.](/images/sqlitebrowser-7.jpg)
-   [Suomen vanhimmat ajoneuvot käyttöönottopäivämäärän mukaan. Oikean
    reunan näkymässä käyttäjän syöttämien SQL-kyselyiden
    historia.](/images/sqlitebrowser-8.jpg)
-   [Oikeassa reunassa plot-toiminto, jossa x-akselille valittu rivin
    järjestysnumero ja y-akselille ajoneuvon
    omamassa.](/images/sqlitebrowser-9.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


