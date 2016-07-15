+++
Date = "2013-11-09T22:00:00.000Z"
Title = "BirdFont"
Description = "Birdfont on vapaa työkalu kirjasintyyppien (eli fonttien) suunnitteluun."
Week = "3x46"
Number = "150"
Alustat = ["Linux","Windows","Mac OS X","OpenBSD"]
Tagit = ["Teksti","Piirto","Vektoripiirto"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo150-birdfont.png"
+++


**Birdfont on vapaa työkalu kirjasintyyppien (eli fonttien)
suunnitteluun.**

![ ](/images/valo150-birdfont.png "fig:valo150-birdfont.png") Birdfontilla
onnistuu oman
[kirjasintyypin](https://fi.wikipedia.org/wiki/Kirjasintyyppi) tekeminen
suhteellisen helposti. Työtä toki vaaditaan, kun jokaisen kirjaimen,
numeron tai muun kirjasintyyppiin tarvittavan merkin ulkoasu pitää
piirtää erikseen, mutta itse piirtäminen on suhteellisen helppoa. Merkit
piirretään suljetuilla
[bezier-käyrillä](https://fi.wikipedia.org/wiki/B%C3%A9zier-k%C3%A4yr%C3%A4),
jotka koostuvat käyrän pisteistä ja kulmien pyöristyksistä.

Kirjasinten piirtämistä helpottaa esimerkiksi mahdollisuus laittaa
piirtoalueen taustalle malliksi jokin kuva. Esimerkiksi käsin
kirjoitetun kirjasimen voi suunnitella kirjoittamalla kirjaimet ensin
käsin paperille, skannaamalla nämä sähköiseksi kuvaksi ja käyttämällä
kuvaa taustana, jonka päälle piirretään varsinaiset kirjasimet. Toinen
piirtämistä helpottava ominaisuus on joukko erilaisia apuviivoja ja
pisteiden kohdistamiseen käytettävä ruudukko. Näiden avulla on helppoa
tehdä kirjasimista säännöllisiä ja symmetrisiä.

Ohjelmaan on mahdollista tuoda myös valmiita kuvioita svg-muotoisina
tiedostoina esimerkiksi [Inkscapesta](Inkscape). Ohjelman
"export"-toiminto tallentaa kirjasintyypin kolmena erityyppisenä
fonttitiedostona: eot-, svg- ja ttf-muodoissa.

Birdfont tukee myös kirjasintyyppien
[välistystä](http://fi.wiktionary.org/wiki/välistys)
([kerning](https://en.wikipedia.org/wiki/Kerning)), eli eri kirjasimien
välisten etäisyyksien määrittämistä kirjainparikohtaisesti. Esimerkiksi
'A'- ja 'V'-kirjaimien viemän tilan voi tällä menetelmällä sallia
menevän hieman ristiin.

Ohjelman lisenssijärjestely vaikuttaa hieman erikoiselta, sillä
Birdfontia tarjotaan sen kotisivuilla kolmella eri tavalla:

1.  Lähdekoodipakettina, jonka lisenssinä on GPL (ja muutama
    kääntämiseen tarvittava tiedosto MIT-lisenssillä)
2.  Freewareksi sanotut ilmaiset binäärimuotoiset ajettavat versiot,
    joilla saa tehdä SIL-Open Font Lisenssin mukaan lisensoituja
    kirjasintyyppejä
3.  Maksullinen versio kaupallisten fonttien tekemiseen

Käytännössä asetetuilla rajoituksilla on vaikutusta lähinnä
Windows-alustalle, sillä muihin tuettuihin järjestelmiin ohjelman
asentaminen suoraan GPL-lisenssillä tarjotusta lähdekoodipaketista ei
ole kovin vaikea seuraamalla
[README](https://gitorious.org/birdfont/birdfont/source/656669a3716674f7598f9038cb7f99723eba5d27:README)-tiedoston
ohjeita. Testitilanteessa tosin asennusskripti kopioi käytettävät
kirjastotiedostot hakemistoon `/usr/lib64` toimivan `/usr/lib`
-hakemiston sijaan ja tämä jouduttiin korjaamaan käsin. Ohjelman
lähdekoodit ovat saatavilla myös
[Gitorius-lähdekoodivarastosta](https://gitorious.org/birdfont/birdfont/).

Ubuntu-pohjaisiin järjestelmiin ohjelman voi asentaa
[helpommin](http://linuxg.net/how-to-install-birdfont-0-31-on-ubuntu-13-10-13-04-linux-mint-16-15-pear-os-8/)
myös tekijöiden tarjoamasta ppa-pakettilähteestä. OpenBSD-alustalle
ohjelma on tarjolla suoraan sen omista lähteistä. (graphics/birdfont)

Kotisivu
:   <http://birdfont.org/>
:   Lähdekoodit: <https://gitorious.org/birdfont/birdfont>

Lisenssi
:   [GNU GPL](GNU_GPL) v.3 (ja muutama käännöstyökalu
    MIT-lisenssillä)

Toimii seuraavilla alustoilla
:   Windows, Mac OS X, Linux, OpenBSD

Asennus
:   Lisenssiltään rajoitetummat suoritettavat versiot Windows- ja Mac OS
    X -alustoille löytyvät ohjelman kotisivuilta. Ubuntu-pohjaisiin
    järjestelmiin voi käyttää tekijöiden tarjoamaa ppa-lähdettä.
    OpenBSD-järjestelmiin ohjelma on asennettavissa sen omista
    lähteistä. Varmasti vapaan version voi asentaa suhteellisen helposti
    myös suoraan lähdekoodeista niiden mukana tulevan README-tiedoston
    ohjeita seuraamalla.

Käyttöohjeet
:   Ohjelman kotisivuilla on joukko hyödyllisiä tutoriaaleja, joista osa
    on varustettu opastavalla videolla.
:   Tutoriaali ja videot: <http://birdfont.org/doku/doku.php/tutorials>

{{% wrapper class="psgallery" %}}
-   [Vasta aloitettu BirdFont-projekti. ](/images/birdfont-1.png)
-   [Yleisnäkymä, josta näkyy kukin muokattavissa oleva
    merkki.](/images/birdfont-2.png)
-   [Yksittäisen merkin muokkausta. Taustalla mallina toimiva
    kuva.](/images/birdfont-3.png)
-   [Kirjasimen kerning-asetukset. Kuvassa A- ja V- merkit sekä A- ja
    W-merkit menevät hieman limittäin.](/images/birdfont-4.png)
-   [Kerning-parit taulukkona.](/images/birdfont-5.png)
-   [Esikatselutila on html-sivu, joka tallennetaan samaan hakemistoon
    tallennetun fonttiprojektin kanssa. Tiedostoa voi muokata
    tekstieditorilla sisältämään sopivampaa
    tekstiä.](/images/birdfont-6.png)
-   [Kirjasintyypin kuvaus ja metatiedot.](/images/birdfont-7.png)
-   [Ohjelmasta True Type -fonttitiedostoksi viedyn keskeneräisen
    kirjasintyypin tarkastelu kirjasintyyppien asennukseen tarkoitetulla
    ohjelmalla.](/images/birdfont-8.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


