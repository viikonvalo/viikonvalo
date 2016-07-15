+++
Date = "2014-02-22T22:00:00.000Z"
Title = "LXDE"
Description = "LXDE (Lightweight X11 Desktop Environment, suom. Kevyt X11-työpöytäympäristö) on erittäin kevyt avoimen lähdekoodin monikielinen työpöytäympäristö, joka vie vain noin puolet XFCE:n vaatimasta keskusmuistin määrästä."
Week = "4x09"
Number = "165"
Alustat = ["Linux","FreeBSD","OpenBSD","NetBSD","Solaris"]
Tagit = ["työpöytäympäristö"]
Type = "post"
Author = "Taleman"
Pageimage = "valo165-lxde.png"
+++


**[LXDE](https://fi.wikipedia.org/wiki/LXDE) (Lightweight X11 Desktop
Environment, suom. Kevyt X11-työpöytäympäristö) on erittäin kevyt
avoimen lähdekoodin monikielinen työpöytäympäristö, joka vie vain noin
puolet [XFCE:n](https://fi.wikipedia.org/wiki/XFCE) vaatimasta
keskusmuistin määrästä.**

![ ](/images/valo165-lxde.png "fig:valo165-lxde.png")
Asennetaan LXDE-työpöytäympäristöä käyttävä Linux-jakelu koneeseen,
jossa on alun perin ollut [Windows
XP](http://windows.microsoft.com/fi-fi/windows/end-support-help).
Käyttöön valittiin Ubuntun LXDE-versio eli
[Lubuntu](http://lubuntu.net/) 13.10. Se on valmis Linux-jakelu, jossa
työpöytäympäristönä on LXDE ja mukana olevat sovelluksetkin on valittu
kevyemmästä päästä. Lubuntu onkin tarkoitettu koneisiin, joissa on
vähemmän keskusmuistia kuin nykykoneissa ja joissa suoritintehoakin on
niukemmin. Tarjolla on sekä 32-bittinen että 64-bittinen versio.
32-bittinen Lubuntu lienee parempi valinta, jos muistia on vähän, koska
32-bittinen järjestelmä käyttää periaatteessa hieman
[vähemmän](http://windowsitpro.com/windows-server/q-does-64-bit-version-os-use-more-memory-32-bit-version-same-os)
[muistia](http://forums.anandtech.com/showthread.php?t=2144728) kuin
64-bittinen, ja 64-bittisen merkittävästä edusta osata käyttää yli 4
Gtavun keskusmuistia ei ole hyötyä.

**Testikoneen kokoonpano:**

Suoritin
:   Intel Core 2 6300 1,9 GHz

Keskusmuisti
:   1 Gt

Levy
:   200 Gt

Näytönohjain
:   Intel Corporation 82Q963/Q965 Integrated Graphics Controller

{{% wrapper class="rightimage" %}}
![ ](/images/Lxde-kuvituskuva.jpg "fig:Lxde-kuvituskuva.jpg")
{{% /wrapper %}}
Asennus vei runsaan puoli tuntia USB-muistitikulla olleelta asentimelta.
Kolmen vartin kohdalla päästiin jo Internettiin mobiililaajakaistalla.
3G-modeemina oli Siptune SM-30, joka on toiminut Linuxeissa loistavasti.
Myös WIFI-sovitin TP-Link TL-WN321G tunnistui ja toimi heti. Asennuksen
jälkeen levyä on käytössä 3 gigatavua.

LXDE:n myötä tulee samalla esiteltyä myös
[Lubuntu](http://lubuntu.net/)-käyttöjärjestelmä, sillä LXDE ei itse ole
kokonainen Linux-jakelu vaan työpöytäympäristö. Ensin pitää olla
asennettu käyttöjärjestelmä, johon LXDE asennetaan työpöytäympäristöksi.
Siksi valittiin Lubuntu, joka on valmis Ubuntuun pohjautuva
Linux-jakelu, jossa LXDE on työpöytäympäristönä. LXDE:n voi toki asentaa
muihinkin Linuxeihin ja luultavasti LXDE on mukana useimmissa
Linux-jakeluissa.

Käyttöliittymänä LXDE on saman tapainen kuin Windows XP. Se ei ole
ainakaan niin erilainen kuin Ubuntun oletustyöpöytä
[Unity](https://unity.ubuntu.com/) eikä niin futuristinen kuin
[KDE](KDE). Kun Windows XP korvataan toisella
käyttöjärjestelmällä hankkimatta samalla uutta tietokonetta, on
merkitystä asennettavan järjestelmän resurssitarpeella. XP-koneissa ei
ehkä ole muistia kuin puoli gigatavua tai yksi gigatavu ja suoritinkin
lienee yksiytiminen. Tällaisessa koneessa Unity tai KDE ei oikein jaksa
toimia vaan tarvitaan jotain kevyempää, kuten LXDE. Kun Windows XP:n
tilalle asennetaan toinen käyttöjärjestelmä ennen [Windows
XP](http://www.microsoft.com/fi-fi/windows/business/retiring-xp.aspx):n
tuen loppumista, on LXDE ja Lubuntu varteenotettava vaihtoehto.

LXDE:tä osannee käyttää, jos Windows XP on tuttu. Samoja ohjelmia siihen
ei välttämättä saa, eli jotain uuden opettelua tarvitaan kuitenkin. Jos
on käyttänyt esimerkiksi [VALO-CD-projektin](http://valo-cd.fi)
kokoelmasta peräisin olevia ohjelmia, voi Lubuntuun asentaa lähes kaikki
samat ohjelmat.

Lubuntun valmiiksi asennetut sovellukset on valittu kevyemmästä päästä.
Esimerkiksi LibreOffice ei ole mukana, mutta sen voi halutessaan asentaa
tavanomaiseen tapaan, kuten muitakin Ubuntun tarjoamia ohjelmia. Sen
sijaan on tekstinkäsittelyohjelmana [AbiWord](AbiWord) ja
taulukkolaskimena [Gnumeric](Gnumeric).
[Vertailun](http://l3net.wordpress.com/2013/03/17/a-memory-comparison-of-light-linux-desktops/)
mukaan LXDE käyttää muistia 36 Mt, ja Gnome 3 -typöytä käyttää 155 Mt.
Tuo muistin käytön lisäys on merkittävä erityisesti jos koneessa on
muistia vain 512 Mt.

LXDE on koottu seuraavista osista, siis sovelluksista:

-   PCManFM, tiedostoselain
-   LXPanel, työpöydän "kojetaulu", eli alareunan työkalupalkki yms.
-   LXSession Lite, istuntomanageri
-   LXSession Edit, istunnon muokkaus
-   LXAppearance, teemanvalitsin
-   [LXLauncher](http://wiki.lxde.org/en/LXLauncher), 7 — 10 tuuman
    ruuduille kehitetty sovellusten käynnistin
-   Openbox, ikkunamanager
-   GPicView, kuvankatselin
-   LeafPad, teksturi, eli tekstitiedoston muokkain
-   LXDE Common, sovellusten yhteinen asetustiedosto integroimaan
    sovellukset kokonaisuudeksi
-   LXTerminal, pääte
-   XArchiver, pakkaa ja purkaa tiedostoja
-   LXRandR, näyttöjen asetukset. Voi kytkeä toisen näytön tai
    dataprojektorin
-   LXNM, verkkoyhteyksien hallinta
-   LXMusic, minimalistinen musiikkisoitin
-   GtkNetCat, graafinen edustaohjelma sovellukselle netcat
-   LXShortCut, pikakäynnistimien muokkaus
-   LXInput, näppäimistön ja kohdistinlaitteen (eli hiiren) asetukset

LXDE osaa näyttää pikkusovelmat työkalupalkissa. Esimerkiksi
LXNM-pikkusovelma toimii alareunan työkalupalkissa ja osaa muodostaa
nettiyhteyden mobiililaajakaistan, WIFIn tai Ethernet-johdon kautta sen
mukaan, mitä koneeseen on kytketty. Vielä LXDE:täkin vähemmän muistia
käyttäviä työpöytäympäristöjä on saatavilla, mutta niissä voi
esimerkiksi nettiyhteydet joutua muodostamaan itse. Jos nettiyhteys on
Ethernet-johdon kautta, se kyllä toimii mutta WIFI ja mobiililaajakaista
vaativat säätöä lähteäkseen toimimaan.

Selaimena Lubuntu käyttää Firefoxia. Muitakin selaimia voi asentaa,
saatavilla ovat samat selaimet kuin Ubuntussakin.

Kotisivu
:   <http://lxde.org>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   BSD, Linux, OpenSolaris, muutkin POSIX-yhteensopivat
    käyttöjärjestelmät

Asennus
:   Linux-jakeluissa tulee jakelun omista pakettivarastoista.

Käyttöohjeet
:   LXDE:llä on [Wiki](http://wiki.lxde.org/en/Main_Page) jossa ohjeita.
    Wikistä on myös suomenkielinen versio, joka näytti olevan hyvin
    puutteellisesti suomennettu.
:   [Lubuntun ohjeet
    (englanniksi)](https://help.ubuntu.com/community/Lubuntu/Documentation)

Testikoneessa Lubuntu toimi oikein ripeästi. LXDE ja Lubuntun
sovelluskokoelma tuntuivat varsin näppäriltä. Näillä eväillä Windows
XP:n korvaaminen vanhassa koneessa Lubuntulla onnistui oikeinkin hyvin.

{{% wrapper class="psgallery" %}}
-   [Lubuntun LXDE-työpöytä: Firefox, tiedostonhallinta ja
    musiikkisoittimen paneeliin integroitu
    hallinta.](/images/lxde-13.jpg)
-   [Abiword-tekstinkäsittely ja
    Gnumeric-taulukkolaskenta](/images/lxde-14.jpg)
-   [Lubuntun Software Center, eli ohjelmistopakettien asennustyökalu,
    sekä musiikkosoitin.](/images/lxde-15.jpg)
-   [Asentamalla lubuntu-restricted-extras
    -paketti alkavat multimediat toimia.](/images/Lxde-01.png)
-   [Youtube toimii HTML5-tilassa](/images/Lxde-02.png)
-   [Automaattiset päivitykset toimivat kaikille
    Ubuntun asennusjärjestelmän kautta asennetuille sovelluksille.](/images/LXDE-04.png)
-   [Tehtävienhallinta näyttää suorittimen
    kuorman ja muistin käytön](/images/LXDE-05.png)
-   [CD-levyjä kirjoitetaan Xfburnilla](/images/LXDE-06.png)
-   [Näyttöjen asetukset LXRandR:lla](/images/LXDE-07.png)
-   [Valikon kohdista saa työkaluvihjeen](/images/LXDE-08.png)
-   [Vaihteeksi tavallinen Ubuntu 12.04.4 johon asennettu työpöytäympäristö LXDE. Nettiyhteys WiFI:n kautta ja LXNM.](/images/LXDE-09.png)
-   [Vaihteeksi tavallinen Ubuntu 12.04.4 johon
    asennettu työpöytäympäristö LXDE. LXNM näyttää mitä tukiasemaa WiFI
    käyttää.](/images/LXDE-10.png)
-   [Tiedostoselain PCManFM](/images/LXDE-11.png)
-   [LXAppearance säätää ulkoasua](/images/LXDE-12.png)
{{% /wrapper %}}

### Lisätietoja

-   [YLEn ruotsinkielinen toimitus asensi
    LUbuntun](http://svenska.yle.fi/artikel/2014/01/25/linux-kan-blasa-liv-i-en-gammal-dator)
-   [Youtubessa
    esittelyvideo](http://www.youtube.com/watch?v=_SSb4Nx2j0Y) Lubuntu
    13.04:stä (englanniksi (vai onko australian murretta))
-   [Kevyiden työpöytäympäristöjen muistin käytön vertailu,
    englanniksi](http://l3net.wordpress.com/2013/03/17/a-memory-comparison-of-light-linux-desktops/)

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman ja Pesasa* <br />
*Valokuva: Taleman*


