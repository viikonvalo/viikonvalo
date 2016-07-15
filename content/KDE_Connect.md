+++
Date = "2015-05-09T21:00:00.000Z"
Title = "KDE Connect"
Description = "KDE Connect on ohjelmisto tietokoneiden ja mobiililaitteiden väliseen Viestintään."
Week = "5x20"
Number = "228"
Alustat = ["Linux","Android","SailfishOS"]
Tagit = ["Blackberry","Tiedostonhallinta","Viestintä"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo228-kdeconnect.png"
+++


**KDE Connect on ohjelmisto tietokoneiden ja mobiililaitteiden väliseen
Viestintään.**

![ ](/images/valo228-kdeconnect.png "fig:valo228-kdeconnect.png") KDE Connect on
ohjelma, joka mahdollistaa tietokoneen ja mobiililaitteiden
yhteistoiminnan samassa lähiverkossa. Kun tietokoneeseen ja
Android-laitteeseen on asennettu niiden omat versiot KDE Connectista, ne
näkevät toisensa ollessaan samassa (langattomassa) lähiverkossa. Kun
laitteet on paritettu, niiden välillä voidaan siirtää helposti
tiedostoja ja käyttää mobiililaitetta tietokoneen etäohjaamiseen.
Ohjelma on nimensä mukaisesti suunniteltu KDE:n Plasma-työpöydälle,
mutta se toimii myös muiden Linux-työpöytien kanssa.

Tietokoneessa käynnissä olevan KDE Connectin kanssa voidaan yhdistää,
eli parittaa, useita mobiililaitteita ja niille kullekin voidaan
määritellä käytössä olevat toiminnallisuudet. Toiminnallisuudet ovat
lisäosia, joita oletuksina on asennettuna ainakin seuraavat:

-   mobiililaitteen akun varauksen seuranta,
-   leikepöydän jako,
-   tietokoneen näytönsäästäjän käynnistyksen esto mobiililaitteen
    ollessa kytkettynä,
-   multimediaohjelmistojen etähallinta,
-   puhelimen ilmoitusten synkronointi tietokoneen ilmoituksiksi,
-   musiikin (tai järjestelmä-äänten) vaiennus puhelun tullessa,
-   ping,
-   tiedostoselaus (SFTP:tä käyttäen),
-   puhelinintegraatio (saapuvien puheluiden ja tekstiviestien
    ilmoittaminen tietokoneella) ja
-   kosketushiiritoiminnallisuus.

Tiedostojen siirtäminen yhdistetyn mobiililaitteen ja tietokoneen
välillä hoituu helposti Dolphin-tiedostohallintaohjelmalla (tai millä
tahansa KDE-ohjelmalla) sivupalkkiin automaattisesti ilmestyvän
pikalinkin kautta. Erityisesti KDE:n Plasma-työpöytää käyttäville
tiedonsiirtoyhteyden käyttö on KDE-integraationsa vuoksi hyvinkin
helppoa. Teknisesti yhteys on käytännössä toteutettu SFTP-yhteytenä
avaintunnistuksella ja fuse.sshfs-mounttauksella, joten sitä on
tarvittaessa mahdollista käyttää myös komentoriviltä käsin.

Tiedostoja voi siirtää Android-laitteesta tietokoneelle myös Androidin
"Jaa"-toiminnolla, johon KDE Connect lisää oman kuvakkeensa uudeksi
vaihtoehdoksi. Tällöin tiedosto lähetetään valitulle tietokoneelle
ennalta määrättyyn kansioon, joka oletuksena on kotihakemiston Downloads
(tai Lataukset) -kansio. Tämä toiminto tosin ei jostain syystä toiminut
kokeiltaessa vaan tuotti jostain syystä korruptoituneita tiedostoja.
Android-laitteiden jakotoiminnallisuutta voidaan käyttää myös
selainosoitteiden jakamiseen mobiililaitteelta tietokoneelle. Tällöin
jaettu osoite avataan tietokoneella oletusselaimeen.

Jos asetuksista on valittu leikepöydän synkronointi päälle, ohjelmisto
synkronoi leikepöydän sisällön automaattisesti tietokoneen ja
mobiililaitteen välillä. Tietokoneella leikepöydälle kopioitu teksti on
siis liitettävissä mobiililaitteella ja päin vastoin.

Tietokoneella KDE Connect on esillä työpöydän paneelin
järjestelmäalueella omana kuvakkeenaan ja antaa käyttäjälle ilmoituksia
työpöydän oman ilmoitusjärjestelmän kautta. Ilmoituksia tulee
esimerkiksi saapuneista tiedostoista sekä saapuvista puheluista ja
tekstiviesteistä. Järjestelmäalueella oleva kuvake tarjoaa myös näkymän
tarkkailla yhdistettyjen mobiililaitteiden akkujen varaustilaa. Ohjelman
voi asettaa esimerkiksi vaientamaan tietokoneella soivan musiikin tai
järjestelmä-äänet puhelun tullessa puhelimeen.

Mobiilisovellusta voi käyttää tietokoneen etäohjaamiseen kahdella tapaa.
Mediakaukosäädintoiminnolla voi ohjata tietokoneella käynnissäolevaa
mediasoitinta, kuten Amarokia tai
[VLC-mediasoitinta](VLC-mediasoitin). Kauko-ohjaimessa on
mahdollisuus valita ohjattava ohjelma useammasta käynnissä olevasta.
Toinen vaihtoehto etäkäyttöön on mobiililaitteen käyttö langattomana
hiirenä, jolloin laitteen kosketusnäyttö toimii tietokoneen laattahiiren
tavoin. Tässä tilassa myös mobiililaitteen virtuaalinäppäimistö on
käytettävissä, joten sitä voidaan käyttää myös näppäimistönä.

Kotisivu
:   <https://community.kde.org/KDEConnect>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, Android, Blackberry

Asennus
:   Ohjelma saattaa löytyä suoraan Linux-jakelun omasta
    pakettivarastosta. Joillekin Ubuntun versioille suositellaan
    uudemman version asentamista PPA-lähteestä. Android-sovellus on
    ladattavissa [Goolgen
    Play-kaupasta](https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp)
    tai [F-Droidilla](F-Droid).

{{% wrapper class="psgallery" %}}
-   [KDE Connectin asetukset tietokoneelle KDE:n järjestelmäasetuksissa.
    Kaksi verkossa näkyvää laitetta ja niiden
    asetukset.](/images/kdeconnect-1.jpg)
-   [Paritetut mobiililaitteet näkyvät Dolphin-tiedostoselaimessa ja
    tiedostoja voidaan kopioida tietokoneen ja mobiililaitteen
    välillä.](/images/kdeconnect-2.jpg)
-   [Työpöydän viestialueella näytetään viestejä laitteiden
    kommunikaatiosta. Tässä tabletilta on saapunut lähetetty
    kuvatiedosto.](/images/kdeconnect-3.jpg)
-   [Työpöydän tehtäväalueella näkyvä sovelma näyttää yhdistetyt
    mobiililaitteet, niiden akkujen varaustilan sekä pikakuvakkeen
    tiedostoselaukseen.](/images/kdeconnect-4.jpg)
-   [Puhelimeen saapuvat puheluista ja tekstiviesteistä tulee ilmoitus
    tietokoneen näytölle.](/images/kdeconnect-5.jpg)
-   [Android-sovellusten Jaa-valikkoon tulee KDE Connect -vaihtoehto,
    jolla tiedostoja ja selainlinkkejä voi jakaa toisille
    laitteille.](/images/kdeconnect-6.jpg)
-   [Jakotoiminnossa valitaan, mille laitteelle tiedosto
    jaetaan.](/images/kdeconnect-7.jpg)
-   [Tietokoneen etäkäyttö on mahdollista mobiililaitteella hiiri- ja
    näppäimistötoiminnoilla sekä
    multimediakauko-ohjaimella.](/images/kdeconnect-8.jpg)
-   [KDE Connect voi toimia tietokoneen hiiren ohjaimena laattahiiren
    tapaan sekä virtuaalinäppäimistönä.](/images/kdeconnect-9.jpg)
-   [KDE Connect -sovellus Androidissa toimii tietokoneen mediasoitinten
    kauko-ohjaimena.](/images/kdeconnect-10.jpg)
-   [Useammasta tietokoneella käynnissä olevasta soitto-ohjelmasta voi
    valita, mitä halutaan ohjata.](/images/kdeconnect-11.jpg)

{{% /wrapper %}}
*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


