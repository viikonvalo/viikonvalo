+++
Date = "2012-05-05T21:00:00.000Z"
Title = "Glabels"
Description = "Glabels on vapaa työkalu käyntikorttien, nimilappujen, osoitetarrojen tai vaikka cd- tai dvd-kansien tekoon."
Week = "2x19"
Number = "71"
Alustat = ["Linux","Mac OS X","FreeBSD","OpenBSD","NetBSD"]
Tagit = []
Type = "post"
Author = "Pesasa"
Pageimage = "valo71-glabels.png"
+++


**Glabels on vapaa työkalu käyntikorttien, nimilappujen, osoitetarrojen
tai vaikka cd- tai dvd-kansien tekoon.**

![ ](/images/valo71-glabels.png "fig:valo71-glabels.png") Glabels on työkalu
käyntikorttien ja muiden lappusten luomiseen. Sen käyttöliittymä on
varsin yksinkertainen, mutta juuri tähän käyttöön riittävän
monipuolinen. Sillä syntyvät helposti käyntikorttien lisäksi muun muassa
konferenssien nimilaput, kirjekuorien osoitetarrat, jäsenkortit, cd- ja
dvd-levyjen kannet ja levynpäälliskuvat sekä monenlaiset muut
tulostettavat laput. Ohjelmassa on tarjolla useita valmiita pohjia eri
tarkoituksiin esimerkiksi tarra-arkkien valmistajien ja mittojen mukaan.
Myös omien pohjien tekeminen omien mittojen mukaan on helppoa
avustavalla, askel askeleelta etenevällä suunnitteluvälineellä.

Ohjelman suunnittelualustana on yksi käyntikortti tai muu "lappunen",
joita sitten monistetaan valitun pohjan mukaisesti tulostettavalle
arkille. Käyttöliittymä mahdollistaa muutaman erityyppisen objektin
lisäämisen alustalle. Näitä ovat: teksti, suorakaide, viiva,
ellipsi/ympyrä, kuva tai viivakoodi. Lisättävälle tekstille voi työkalun
välilehdillä valita erilaisia asetuksia, kuten tekstin sisällön,
sijainnin, koon, kirjasimen, värin sekä varjostuksen. Kuviksi Glabels
kelpuuttaa lukuisan joukon erilaisia kuvatiedostomuotoja, kuten png, jpg
sekä svg. Erityisesti svg-kuvat ovat käytännöllisiä esimerkiksi logoa
lisättäessä, sillä vektorigrafiikkana ne ovat aina tarkkoja.
Viivakoodityökalu kysyy viivakoodiin lisättävän tekstisisällön sekä
käytettävän viivakoodistandardin ja luo niistä pyydetyn viivakoodin.

Käyntikortteja tehtäessä halutaan suunnitella arkillinen samalla
tekstillä varustettuja kortteja. Esimerkiksi konferenssin nimilappuja
tai postitustarroja tehtäessä halutaan kuitenkin jokaiseen korttiin eri
teksti, mutta samanlaisella pohjalla. Tätä varten Glabelsissa on
mahdollista tuoda halutut tiedot
[CSV](http://fi.wikipedia.org/wiki/CSV)-muotoisena tekstitiedostona
(*comma-separated values*, eli *"pilkuilla erotetut arvot"*).
CSV-tiedostossa aina yhdelle kortille halutut tiedot, esimerkiksi nimi
ja osoite, ovat kirjoitettuina yhdelle riville pilkulla tai jollain
muulla erotinmerkillä erotettuina. CSV-tiedostoja voi tehdä esimerkiksi
tallentamalla taulukkolaskentaohjelmaan kerätty tieto CSV-muodossa. Kun
ohjelmalle on kerrottu käytettävä CSV-tiedosto, on tekstiin mahdollista
lisätä viittauksia sen kenttiin. Esimerkiksi, jos CSV-tiedoston
ensimmäinen sarake sisältää etunimiä, lisätään tekstiin etunimen
paikalle merkkijono "\${1}", jolloin tulostettaessa kuhunkin korttiin
haetaan CSV-tiedostosta kyseisen rivin ensimmäinen kenttä. Tekstien
lisäksi CSV-tiedosto voi sisältää värejä rgb-muodossa
([html-syntaksilla](http://www.w3schools.com/html/html_colors.asp),
esimerkiksi vaaleanpunainen "\#ffaaaa") sekä viittauksia kuviin niiden
tiedostopolkuina. Näin esimerkiksi kunkin henkilön nimikorttiin voidaan
tulostaa hänen kuvansa ja taustaväriksi laittaa osastoa tai asemaa
kuvaava väri. CD-levyjen kanssa näin on mahdollista esimerkiksi koota
tiedostoon useamman levyn tiedot: esittäjä, levyn nimi, kansikuva,
kappaleiden nimet, halutut värit yms. Levyille voi suunnitella yhden
pohjan ja tulostaa levyille yksilölliset, mutta yhteisen tyylin mukaiset
kansilehdet.

Kotisivu
:   <http://www.glabels.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, Mac OS X, FreeBSD, OpenBSD, NetBSD,

Asennus
:   Linux- ja BSD-jakeluihin Glabels löytyy todennäköisesti niiden
    omasta paketinhallinnasta. Mac OS X:lle ohjelman voi asentaa
    [Fink](http://pdb.finkproject.org/pdb/package.php/glabels)-projektin
    kautta.

{{% wrapper class="psgallery" %}}
-   [ ](/images/glabels-1.png)
-   [ ](/images/glabels-2.png)
-   [ ](/images/glabels-3.png)
-   [ ](/images/glabels-4.png)
-   [ ](/images/glabels-5.png)
-   [ ](/images/glabels-6.png)
-   [ ](/images/glabels-7.png)
-   [ ](/images/glabels-8.png)
-   [ ](/images/glabels-9.png)
-   [ ](/images/glabels-10.png)
-   [ ](/images/glabels-11.png)
-   [ ](/images/glabels-12.png)
-   [ ](/images/glabels-13.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

