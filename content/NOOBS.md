+++
Date = "2014-01-25T22:00:00.000Z"
Title = "NOOBS"
Description = "NOOBS on helppo työkalu Raspberry Pi -pikkutietokoneen käyttöönoton helpottamiseen."
Week = "4x05"
Number = "161"
Alustat = ["Raspberry Pi"]
Tagit = ["Käyttöjärjestelmä"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo161-noobs.png"
+++


**NOOBS on helppo työkalu Raspberry Pi -pikkutietokoneen käyttöönoton
helpottamiseen.**

![ ](/images/valo161-noobs.png "fig:valo161-noobs.png") NOOBS, eli New Out of Box
Software on zip-pakettina jaettava kokonaisuus, jolla Raspberry Pi:lle
sopivan käyttöjärjestelmän asennus muistikortille on lasten leikkiä.
NOOBS luo Raspberry Pi:n muistikortille käynnistyksen yhteydessä
näytettävän valikon, josta käyttäjä voi ensimmäisellä käynnistyksellä
valita käytettäväksi halutun käyttöjärjestelmän. Valinnan jälkeen NOOBS
asentaa valitun järjestelmän ja asettaa sen seuraavilla käynnistyksillä
suoraan käynnistettäväksi. NOOBS jää muistikortille talteen ja sen
valikko on seuraavilla käynnistyksillä mahdollista ottaa uudelleen
esille jonkin muun käyttöjärjestelmän asentamiseksi. Käyttöjärjestelmiä
voi asentaa muistikortille myös useampia yhtä aikaa. Asennettavien
käyttöjärjestelmien listassa NOOBS näyttää sekä kortilla valmiiksi
olevia käyttöjärjestelmien asennuspaketteja että verkosta ladattavissa
olevia muita käyttöjärjestelmiä. NOOBSin ideana on olla niin
yksinkertainen, että sen asentaminen onnistuu helposti ilman suurempaa
kokemusta tietokoneiden käytöstä.

Asentamiseen tarvitaan FAT32-tiedostojärjestelmällä alustettu
SD-muistikortti. Käytännössä kaikki muistikortit ovat kaupasta
ostettaessa tällaisia. Muistikortin on myös syytä olla mahdollisimman
nopea, eli nopeusluokka 10 on suositeltava. Seuraavaksi
NOOBS-zip-paketin sisältö yksinkertaisesti vain puretaan muistikortille
ja sen jälkeen NOOBS on valmis käytettäväksi. NOOBS-paketti on
ladattavissa Raspberry Pi -projektin
[lataussivulta](http://www.raspberrypi.org/downloads) kahtena erilaisena
pakettina. Tavallinen paketti on kooltaan noin 1,4 gigatavua ja sisältää
useamman vaihtoehtoisen käyttöjärjestelmän. Tämä sopii käyttöön
erityisesti, jos verkko ei ole käytettävissä taikka se on hidas. Toinen
NOOBS-paketti on niin sanottu lite-versio, jolla on kokoa vain noin 20
megatavua ja joka ei sisällä valmiiksi yhtään käyttöjärjestelmää.
Lite-versiota käytettäessä kaikki asennettavat järjestelmät ladataan
suoraan verkosta.

Käytännössä NOOBS ensimmäisellä käynnistyksellä pienentää käytössään
olevan osion vain tarvitsemansa kokoiseksi RECOVERY-osioksi tehden tilaa
varsinaisille käytettäville järjestelmille. Kun valikosta on valittu
yksi tai useampi asennettava järjestelmä sekä haluttaessa data-osio
omien tiedostojen tallentamista varten, NOOBS tekee muistikortille
tarvittavat osiot ja asentelee järjestelmät niille. Asennuksen tämä
vaihe kestää jonkin aikaa. Seuraavilla käynnistyskerroilla Raspberry Pi
käynnistyy automaattisesti valittuun järjestelmään. Takaisin
NOOBS-valikkoon pääsee painamalla käynnistyksen yhteydessä
shift-näppäintä.

Oletuksena NOOBSin valikossa ovat tarjolla ainakin seuraavat
käyttöjärjestelmävaihtoehdot:

-   Raspbian (Raspberry Pi:lle sovitettu Debian),
-   Arch (Arch Linux Raspberry Pi:lle sovitettuna),
-   OpenELEC (nopea ja käyttäjäystävällinen XBMC-multimediajärjestelmä),
-   Pidora (Fedora Linux-järjestelmän versio Raspberry Pi:lle),
-   RISC OS (kevyt ja pieni käyttöjärjestelmä),
-   RaspBMC (toinen versio XBMC-multimediajärjestelmästä) ja
-   Raspbian - Boot to Scratch (suoraan ohjelmointia opettavaan
    Scratch-ohjelmaan käynnistyvä versio Raspbianista)

Kotisivu
:   <https://github.com/raspberrypi/noobs>
:   <http://www.raspberrypi.org/downloads>

Lisenssi
:   [BSD (3-clause)](http://opensource.org/licenses/BSD-3-Clause)

Toimii seuraavilla alustoilla
:   Raspberry Pi

Asennus
:   NOOBS on ladattavissa [Raspberry Pi -projektin
    lataussivulta](http://www.raspberrypi.org/downloads) kahtena
    versiona. Kaiken sisältävänä noin 1,4 gigatavun pakettina ja
    minimaalisena kaiken tarvittavan verkosta lataavana 20 megatavun
    minipakettina.

{{% wrapper class="psgallery" %}}
-   [NOOBS GitHubissa.](/images/noobs-1.jpg)
-   [NOOBSin latauspaketit Raspberry Pi -projektin
    lataussivulla.](/images/noobs-2.jpg)
-   [Zip-paketin sisältö puretaan
    SD-muistikortille.](/images/noobs-3.jpg)
-   [NOOBSin näyttää käynnistyksen yhteydessä valikon, josta voi valita
    asennettavat järjestelmät.](/images/noobs-4.jpg)
-   [Asennetaan muistikortille Raspbian, eli Raspberry Pi:lle optimoitu
    Debian Wheezy.](/images/noobs-5.jpg)
-   [Järjestelmän kopiointi muistikortille kestää jonkin
    aikaa.](/images/noobs-6.jpg)
-   [Raspbian-paketista löytyy myös Scratch-ohjelma, jolla voi tutustua
    helposti ja havainnollisesti ohjelmointiin.](/images/noobs-7.jpg)
-   [Raspbian asennettuna.](/images/noobs-8.jpg)
-   [Seuraavilla käynnistyskerroilla oletuksena käynnistyy asennettu
    käyttöjärjestelmä. NOOBSin asetuksiin pääsee painamalla
    näppäimistöltä shift-näppäintä käynnistyksen
    aikana.](/images/noobs-9.jpg)
-   [Asennetaan OpenELEC-multimediajärjestelmää, joka pohjautuu
    XBMC-järjestelmään.](/images/noobs-10.jpg)
-   [Samalle muistikortille voi asentaa useamman käyttöjärjestelmän.
    NOOBS antaa valita käynnistettävän
    järjestelmän.](/images/noobs-11.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


