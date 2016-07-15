+++
Date = "2014-11-22T22:00:00.000Z"
Title = "ImageMagick"
Description = "ImageMagick on kokoelma komentoriviltä käytettäviä ohjelmia kuvien käsittelemiseen."
Week = "4x48"
Number = "204"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris","iOS"]
Tagit = ["Komentorivi","Kuvat","Kuvankäsittely"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo204-imagemagick.png"
+++


**ImageMagick on kokoelma komentoriviltä käytettäviä ohjelmia kuvien
käsittelemiseen.**

![ ](/images/valo204-imagemagick.png "fig:valo204-imagemagick.png") ImageMagick
on komentoriviltä toimiva kuvankäsittelyn monitoimityökalu. Kokoelmaan
kuuluvilla ohjelmilla hoituu helposti moni kuvankäsittelyn perustoiminto
tallennusmuodon ja kuvan koon muuttamisesta peilauksiin, kiertoihin,
kuvatekstityksiin ja erilaisiin efekteihin. Koska ohjelmat toimivat
komentoriviltä käsin, on niiden kanssa helppoa automatisoida suurtenkin
tiedostomäärien käsittely sekä muokkausoperaatioiden ketjuttaminen.
Lisäksi ohjelmistopaketin toiminnallisuudet ovat käytettävissä myös
kirjastona suoraan eri ohjelmointikielistä käsin.

ImageMagick osaa lukea ja kirjoittaa yli sataa tiedostomuotoa.
Esimerkiksi tiedoston muuttaminen JPG-muodosta PNG-muotoon tapahtuu
helposti `convert`-komennolla:

```
convert alkuperainen.jpg uusi_kuva.png
```

Komentoriviltä käyttämisen etuna on esimerkiksi mahdollisuus tehdä
muunnoksia suurissa erissä. Esimerkiksi, jos tehtävänä on muuntaa
JPG-muotoiset kuvatiedostot `kuva-0000.jpg` ... `kuva-9999.jpg`
PNG-muotoisiksi esikatselukuviksi, tämä muunnos tapahtuu helposti
Bash-komentotulkin for-silmukalla:

```
for i in `seq -w 0 9999`; do convert kuva-$i.jpg -geometry 150x150 kuva-$i.png; done
```

Tässä `-geometry 150x150` -valitsimella kerrotaan, että kuvan koko
muutetaan mittasuhteet säilyttäen sellaiseksi, että se mahtuu 150x150
kokoisen neliön sisään.

ImageMagickin
[convert](http://www.imagemagick.org/script/convert.php)-komennolla
hoituu pelkän tiedostomuodon muuttamisen lisäksi suuri joukko muitakin
operaatioita, kuten koon muuttaminen (resize), kuvan peilaaminen (flip
ja flop), kiertäminen (rotate) ja negatiiviseksi muuttaminen (negate).
Täydellinen luettelo toiminnoista löytyy convert-komennon
[ohjesivulta](http://www.imagemagick.org/script/convert.php) sekä sen
[man-sivuilta](http://linux.die.net/man/1/convert).

ImageMagick sisältää suuren määrän toimintoja ja kaikkien niiden
opetteluun voi vierähtää useampikin tovi. Toisaalta jo muutamien
tärkeimpien toimintojen, kuten koon muokkaus ja peilaukset, opettelu voi
käytännössä helpottaa rutiininomaisten kuvankäsittelytehtävien
tekemisessä varsinkin, jos käsiteltäviä kuvia on suuria määriä.

ImageMagick-pakettiin kuuluvat seuraavat ohjelmat:

convert
:   Muuntaa tiedostomuotojen välillä ja tekee muunnoksia, kuten koon
    muunto (resize), sumennus (blur), rajaus (crop), piirtäminen kuvan
    päälle (draw on), peilaukset pysty- ja vaaka-akselin suhteen (flip
    ja flop).

identify
:   Kertoo yhden tai useamman kuvatiedoston ominaisuuksia, kuten
    tiedostomuodon, kuvan pikselikoon, väriavaruuden.

mogrify
:   Tekee vastaavia muunnoksia kuin convert, mutta korvaa alkuperäisen
    tiedoston sen sijaan, että kirjoittaisi tuotoksen uuteen.

composite
:   Asettelee yhden kuvan toisen päälle.

montage
:   Yhdistelee useampia kuvia yhdeksi kollaasiksi ja lisää haluttaessa
    kuvalle reunoja tai kehyksiä ja tekstityksiä.

compare
:   Vertailee kahta kuvaa ja tuottaa niiden eroista uuden kuvan.
    Tulostaa myös matemaattista tietoa kuvien eroista.

stream
:   Tallettaa kuvan pikselien komponenttien tietoa suoraan raakana
    datavirtana tiedostoon.

display
:   Näyttää kuvan X-ikkunointia käyttävissä järjestelmissä.

animate
:   Animoi joukon kuvia X-ikkunointijärjestelmässä.

import
:   Komentoriviltä toimiva kuvakaappausohjelma, jolla voi ottaa
    kuvakaappauksia yksittäisistä ikkunoista, koko ruudusta tai
    rajatusta suorakaiteesta.

conjure
:   Suorittaa ImageMagickin omalla Magick Scripting Language (MSL)
    -kielellä kirjoitettuja skriptejä.

Ohjelman [omilta sivuilta](http://www.imagemagick.org/) voi lukea lisää
ohjeita ohjelmistopaketin käytöstä. Ohjelman käyttöön voi tutustua myös
Anthony Thyssenin kirjoittaman
[tutorialin](http://www.imagemagick.org/Usage/) avulla.

Kotisivu
:   <http://www.imagemagick.org/>

Lisenssi
:   [Apache 2.0](http://www.imagemagick.org/script/license.php)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, iOS, FreeBSD, OpenBSD, NetBSD, Solaris

Asennus
:   Ohjelmakokonaisuuden voi asentaa joko sen kotisivuilta ladattavista
    paketeista tai Linux-jakelun omasta paketinhallinnasta.

Ohjeita
:   [tutorialin](http://www.imagemagick.org/Usage/) (Anthony Thyssen)

Kuvat
:   <https://www.flickr.com/photos/trishhamme/4973966926> (Trish Hamme,
    CC BY)
:   <https://www.flickr.com/photos/flikr/846993294> (flikr, CC BY)
:   <https://www.flickr.com/photos/joshme17/1235327221> (Josh, CC BY)
:   <https://www.flickr.com/photos/kwc909/6131811835> (kwc90, CC BY)

{{% wrapper class="psgallery" %}}
-   [Tutkitaan JPG-kuvien tiedot identify-ohjelmalla, tehdään niistä
    PNG-muotoiset esikatselukuvakkeet, katsotaan uusien tiedostojen
    tiedot ja näytetään ne
    display-ohjelmalla.](/images/imagemagick-1.jpg)
-   [Tehdään samasta kissakuvasta neljä 500x333 -kokoista kuvaa, joita
    peilataan eri suuntiin. Koostetaan näistä neljästä kuvasta
    kollaasi.](/images/imagemagick-2.jpg)
-   [Käännetään koostettu kuva vielä
    negatiiviseksi.](/images/imagemagick-3.jpg)
-   [Tehdään koostekuva, jossa on kunkin edellä tehdyn kuvan pienoiskuva
    tiedostonimellä nimikoituina.](/images/imagemagick-4.jpg)
-   [Display-ohjelmasta löytyvät ImageMagickin toiminnot myös graafisen
    valikon kautta.](/images/imagemagick-5.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*kuvakaappaukset: Pesasa*


