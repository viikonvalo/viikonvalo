+++
Date = "2014-08-02T21:00:00.000Z"
Title = "Midnight Commander"
Description = "Midnight Commander eli `mc` on tiedostonhallintaohjelma tekstipohjaisella käyttöliittymällä."
Week = "4x32"
Number = "188"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris","AmigaOS"]
Tagit = ["Komentorivi","Tiedostonhallinta"]
Type = "post"
Author = "Taleman"
Pageimage = "valo188-midnight_commander.png"
+++


**Midnight Commander eli `mc` on tiedostonhallintaohjelma
tekstipohjaisella käyttöliittymällä.**

![ ](/images/valo188-midnight_commander.png "fig:valo188-midnight_commander.png")
Vastaavia on ollut jo DOS:n ajoilta, tunnetuimpia [Norton
Commander](http://en.wikipedia.org/wiki/Norton_Commander).
Aiemmin esitelty [Dolphin](Dolphin) on vastaava sovellus,
mutta Midnight Commander ei tarvitse graafista käyttöympäristöä eikä
hiirtä. Sitä voi siis käyttää pääteikkunassa, konsolilla ja SSH-yhteyden
kautta.

Hiirtä voi käyttää jos koneessa sellainen on. Näköjään X Window:n
pääteikkunassa hiiri toimiikin suoraan. Konsolilta käytettäessä pitänee
olla [gpm](http://en.wikipedia.org/wiki/GPM_(software)) asennettuna.

{{% wrapper class="rightimage" %}}
![ ](/images/MC-Classeur-vertical_ouvert.png "fig:MC-Classeur-vertical_ouvert.png")
{{% /wrapper %}}
MC osaa monenlaisia toimintoja: tekstitiedostoja voi muokata
sisäänrakennetulla editorilla, tiedostoja voi kopioida tai siirtää,
hakemistoja voi luoda jne. Käsiteltävät tiedostot voi merkitä yksitellen
insert-näppäimellä tai valita komentotulkin \*- ja ?-jokerimerkeillä ja
säännöllisillä lausekkeilla. Näitä voi yhdistelläkin, eli käyttää ensin
jokerimerkkejä valitsemaan suurin osa ja sitten täydentää merkitsemällä
yksitellen ne jotka eivät sopineet jokerimerkkeihin. Mikäli on tarpeen
MC voi käynnistää (automaattisesti) toisen ohjelman tiedoston käsittelyä
varten. Esimerkiksi kuvatiedoston kohdalla toiminto View käynnistää
ohjelman joka osaa näyttää kuvan ruudulla. Kuvien katselu taitaa toimia
vain X Window:ssa käytettäessä, konsollilla ei taida olla keinoa näyttää
kuvaa.

Virtuaalitiedostojärjestelmätkin toimivat, näkymässä voi katsella .zip-,
.tar- tai iso-tiedoston sisältöä taikka FTP- tai SFTP-palvelimen
hakemistoa.

X Window on hieman hankala, kun jotkut näppäilyt eivät mene Midnight
Commanderille asti. Esimerkiksi F1 käynnistää päätteen sisäänrakennetun
ohjeen. Jos on hiiri käytössä voi hiirellä klikata Midnight Commanderin
Help-painiketta ikkunan alareunassa. Toinen mahdollisuus on näppäillä
Esc 1, jonka MC tulkitsee F1:ksi. Jos muu ei auta on mahdollista
määritellä näppäinkomennot toisenlaisiksi joko päätteessä tai Midnight
Commanderissa. Näitä ongelmia ei pitäisi olla konsolilla käytettäessä,
kun X Window ei ole sekaantumassa asiaan.

Tiedostonhallinta tällaisella sovelluksella on näppärää ja nopeaa. Koska
toiminnot, kuten kopiointi, hakemiston luonti, tiedoston siirto jne.,
ovat sovelluksessa sisäänrakennettuina, ne käynnistyvät nopeammin kuin
ulkoinen komento (siis cp tai copy, mkdir, mv tai move jne.). Myöskään
ei tarvitse opetella, mikä komento missäkin käyttöjärjestelmässä on
kopiointi, kun MC:n kopiointitoiminto on sama joka järjestelmässä.
Ohjelmassa on onnistuttu yhdistämään komentorivin ja tiedostoselaimen
vahvuudet käyttökelpoisella tavalla.

Samantapaisia tai vastaavia ohjelmia on
[useita](http://en.wikipedia.org/wiki/Norton_Commander#Norton_Commander_inspired_software).
Vertailu ja luettelo ominaisuuksista [löytyy
Wikipediasta](http://en.wikipedia.org/wiki/Comparison_of_file_managers#Manager_views).

Kotisivu
:   <https://www.midnight-commander.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Amiga OS, BSD, Linux, Mac OS X, Unix, Windows

Asennus
:   Linux-jakeluissa löytynee jakelun pakettivarastosta. Windows-version
    saa [Sourceforgesta](http://sourceforge.net/projects/mcwin32/).
    Muille käyttöjärjestelmille voi katsoa vinkkejä saatavuudesta
    [Binaries](https://www.midnight-commander.org/wiki/Binaries)-sivulta.

Käyttöohjeet
:   Mukana on sisäänrakennettu ohje, löytyy funktionäppäimellä F1.
    Wikistä löytyy englanninkielinen
    [käsikirja](https://www.midnight-commander.org/wiki/doc).

{{% wrapper class="psgallery" %}}
-   [Midnight Commander ja Windows Vista](/images/MC-01.jpg)
-   [Midnight Commander Debian GNU/Linux 7:ssa](/images/MC-02.png)
-   [Tiedostonäkymän kahdessa osassa eri hakemistot. Kapeassa
    sarakkeessa tiedostonimiä typistetään. ](/images/MC-03.png)
-   [Kun ikkuna on tarpeeksi iso pitkät nimet mahtuvat näkymään
    kokonaisina.](/images/MC-04.png)
-   [Näkymiä on erilaisia](/images/MC-05.png)
-   [Virtuaalitiedostojärjestelmätkin toimivat, tässä FTP-palvelimen
    hakemisto oikeanpuoleisessa näkymässä.](/images/MC-06.png)
-   [Tar-tiedoston sisällön voi katsoa](/images/MC-07.png)
{{% /wrapper %}}

Lisätietoja:

-   [Midnight Commander / MC
    Tutorial](http://www.trembath.co.za/mctutorial.html)
-   [An Introduction to the Midnight
    Commander](http://www.tldp.org/LDP/LG/issue23/wkndmech_dec97/mc_article.html)
-   [man-sivu](http://linux.die.net/man/1/mc)

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman*


