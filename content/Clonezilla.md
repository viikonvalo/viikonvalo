+++
Date = "2011-09-24T21:00:00.000Z"
Title = "Clonezilla"
Description = "Clonezilla \"kloonaa\" järjestelmän asennuksen toiselle kiintolevylle tai toiseen tietokoneeseen. Näin tehdysta varmuuskopiosta saa palautettua suoraan toimivan koneen. Tai asentamalla yhden kerran tavanomaiseen tapaan ja kloonaamalla sataan muuhun koneeseen säästyy aikaa."
Week = "1x39"
Number = "39"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD"]
Tagit = ["Järjestelmä"]
Type = "post"
Author = "Taleman"
Pageimage = "valo39-clonezilla.png"
+++


**Clonezilla "kloonaa" järjestelmän asennuksen toiselle kiintolevylle
tai toiseen tietokoneeseen. Näin tehdysta varmuuskopiosta saa
palautettua suoraan toimivan koneen. Tai asentamalla yhden kerran
tavanomaiseen tapaan ja kloonaamalla sataan muuhun koneeseen säästyy
aikaa.**

![ ](/images/valo39-clonezilla.png "fig:valo39-clonezilla.png") Clonezilla ei
kopioi tiedostoja, vaan levyosioita tai kokonaisia levyjä. Levyotos
tallennetaan tiedostoon, joten sitä voi käyttää varmuuskopiona, tällöin
mukana ovat käyttäjän tiedostot, käyttöjärjestelmä ja levyn
pääkäynnistyslohko. Tällaisesta varmuuskopiosta voi suoraan palauttaa
toimivan järjestelmän samalle tai toiselle kiintolevylle. Samantapainen
kaupallinen ohjelma on Norton Ghost.

Samaan tapaan voi yhdestä koneesta kopioida koko kiintolevyn sisällön
toisiin koneisiin. Clonezillaan kuuluu myös [Clonezilla
SE](http://clonezilla.org/clonezilla-SE.php) eli Server Edition, jolla
Clonezilla-palvelimesta voidaan verkon yli kloonata levyotos useisiin
koneisiin samaan aikaan.

{{% wrapper class="rightimage" %}}
![ ](/images/Clonezilla_logo_by_Timothy.png "fig:Clonezilla_logo_by_Timothy.png")
{{% /wrapper %}}
Clonezillaa ei asenneta tietokoneeseen, vaan se käynnistetään omalta
taltioltaan. Live-CD tai boottaava USB-muistitikku ovat käteviä.
Mahdollista on myös asentaa Clonezilla käynnistyspalvelimelle jolloin
verkossa olevat PXE-käynnistyksen osaavat tietokoneet voivat käynnistyä
siitä. Kotikäytössä Live-CD tai USB-muistitikku ovat käyttökelpoiset
tavat. Jotkut koneet ovat kranttuja käynnistymään USB-muistitikuilta, CD
lienee varmempi valinta.

Levyotoksen tallentamiseen USB-kiintolevy on kätevä. Sitä voi helposti
siirtää koneesta toiseen ja tallennustilaa riittää isoillekin
levyotoksille. USB-muistitikkukin kelpaa, kunhan sen tila riittää
tallennettaville levyotoksille. Myös verkkolevyjä voi käyttää
levyotoksien tallentamiseen.

Clonezilla on GNU/Linux käyttöjärjestelmä, johon on asennettu levyjen
kopioimiseen tarvittava toiminnallisuus ja suoraviivainen
käyttöliittymä. Clonezillasta ei ole yleiskäyttöiseksi järjestelmäksi,
sillä siitä puuttuvat ne toiminnot joille ei ole käyttöä
levykopioinnissa.

{{% wrapper class="rightimage" %}}
![ ](/images/Clonezilla_2cm.jpg "fig:Clonezilla_2cm.jpg")
{{% /wrapper %}}
Clonezillan ohjeet ovat varsin pitkät ja tekniset, muttei pidä pelästyä.
Peruskäyttö eli koneen käynnistys Clonezilla-taltiolta, levyn tai
levyosion kopioiminen tiedostoksi ja palautus toisessa koneessa ovat
varsin suoraviivaisia. Parin harjoittelukerran jälkeen tämä sujuu
sutjakkaasti. Vahinkojen välttämiseksi pitää kuitenkin olla tarkkana
levyjen kanssa, eli mikä levy on se josta luetaan, mikä se johon
kirjoitetaan ja mikä on Clonezillan käynnistystaltio.

Clonezillaa kehitetään
koko ajan, uusin versio 1.2.9-19 julkaistiin 26. heinäkuuta 2011. Se oli
jo viides julkaistu vakaa versio kuluvana vuonna, tahti on varsin
rivakkaa.

Kotisivu
:   <http://clonezilla.org>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Osaa kloonata seuraavia järjestelmiä: Linux, Windows, Mac OS
    Intel-suorittimella, FreeBSD, NetBSD, OpenBSD

Asennus
:   Sovelluksen kotisivulta löytyy CD-levylle tai USB-muistitikulle
    kopioitavat levyotokset.

Käyttöohjeet
:   [Clonezilla-Live Doc](http://clonezilla.org/clonezilla-live/doc/)
:   ["Lunttilappu", yhden arkin tiivis
    ohje](http://clonezilla.org/downloads/doc/clonezilla-live-stable-doc.php)
:   [Keskustelualue](http://www.clonezilla.org/forum.php)

Clonezillasta muualla
:   [Artikkeli englanninkielisessä
    Wikipediassa](http://en.wikipedia.org/wiki/Clonezilla)
:   [Kehuja käyttäjiltä ja esimerkkejä
    käyttötavoista](http://clonezilla.org/testimonials.php)

{{% wrapper class="psgallery" %}}
-   [ ](/images/clonezilla-0.png)
-   [ ](/images/clonezilla-1.png)
-   [ ](/images/clonezilla-2.png)
-   [ ](/images/clonezilla-3.png)
-   [ ](/images/clonezilla-4.png)
-   [ ](/images/clonezilla-5.png)
-   [ ](/images/clonezilla-6.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*kuvakaappaukset: Taleman*

