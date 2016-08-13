+++
Date = "2014-07-19T21:00:00.000Z"
Title = "Tails"
Description = "Tails eli The Amnesic Incognito Live System on tietoturvaan panostava Debian GNU/Linuxiin pohjautuva Linux-jakelu. Erityisesti yksityisyyden suoja ja tunnistamattomana toimiminen ovat tavoitteina."
Week = "4x30"
Number = "186"
Alustat = ["Linux"]
Tagit = ["Käyttöjärjestelmä","Tietoturva"]
Type = "post"
Author = "Taleman"
Pageimage = "valo186-tails.png"
+++


**Tails eli The Amnesic Incognito Live System on tietoturvaan panostava
Debian GNU/Linuxiin pohjautuva Linux-jakelu. Erityisesti yksityisyyden
suoja ja tunnistamattomana toimiminen ovat tavoitteina.**

![ ](/images/valo186-tails.png "fig:valo186-tails.png") Tails on kehitetty
[Ingogniton](https://en.wikipedia.org/wiki/Incognito_(operating_system))
seuraajaksi. Tavoitteet ovat samat, eli yksityisyyden suoja ja
tietoliikenteen käyttö tunnistamattomana. Tämä on se käyttöjärjestelmä
jota Edward Snowden
[käyttää](http://www.engadget.com/2014/05/01/tails-linux-os-version1-0/)
(samoin kuin Snowdenin
[yhteistyökumppanit](https://en.wikipedia.org/wiki/Tails_(operating_system)#History)).

Yhteys Internettiin kulkee [Tor-verkon](https://www.torproject.org/)
kautta. Tarkoitus on vaikeuttaa yhteyden salakuuntelua ja estää
salakuuntelijoita löytämästä tietokonetta josta yhteys nettiin on
otettu. Tor-verkkoa käytettäessä yhteyttä ei muodosteta suoraan
kohdeosoitteeseen, vaan Tor-verkon solmuun. Tor-verkko välittää yhteyden
usean verkon sisäisen solmun kautta ja lopulta kohdekoneeseen. Solmu
tietää vain yhteyden edellisen ja seuraavan solmun, eikä siis tiedä
mistä yhteys aloitettiin ja mihin se on menossa. Data on myös
[kryptattu](https://fi.wikipedia.org/wiki/Kryptaus) ja lisäksi tavalla
joka tekee datasta erilaisen kun se lähetetään seuraavaan solmuun.
Tällöin ei edes seuraamalla kaikkien solmujen välistä liikennettä löydä
yhteyksiä vertailemalla samanlaista dataa ja sen perusteella saa
selville mistä yhteys alkoi ja mihin se meni. Tor-Verkko salakirjoittaa
vain Tor-verkon sisäisen liikenteen, ei Tor-verkoon tulevaa ja verkosta
lähtevää liikennettä jolloin näissä kohtia saa selväkielisenä lähetetyn
viestin selville (mutta ei lähettäjän sijaintia, jos sitä ei ole
kirjoittanut viestin sisältöön). Siksi on Tor-verkon käytön lisäksi
mietittävä onko tarpeen salakirjoittaa luottamuksellinen viestintä.

{{% wrapper class="rightimage" %}}
![ ](/images/Tails-11.png "fig:Tails-11.png")
{{% /wrapper %}}
Tailsia voi käyttää Live-DVD:ltä tai USB-tikulta, eli ei ole
välttämätöntä asentaa sitä tietokoneelle (CD-levy ei riitä,
Tails-levyotos on kooltaan 914 Mt). Eli voi lainata satunnaista
tietokonetta Tails-käyttöön ja käyttää Internettiä yksityisesti suojassa
salakuuntelijoilta. Näin saa lisäsuojaa kun voi ottaa yhteyden joka
päivä eri paikasta.

Tails on hieman hankalampi asentaa USB-tikulle kuin tavanomaiset
Live-Linuxit, ainakin jos toimii ohjeiden mukaan ja tarkistaa
ladanneensa muuttamattoman asennustiedoston. Asennusohje on pitkähkö
mutta yksityiskohtainen, eli sen mukaan tekemällä asennuksen saa tehtyä
vaikkei kaikkia kohtia täysin ymmärtäisikään. Tails tuntuu olevan
suunnattu edistyneemmille tietokoneen käyttäjille, peruskäyttäjä
saattaisi kaivata suoraviivaisempaa tapaa Tailsin käyttöönottoon. Tosin
jos vain ostaa USB-tikun johon Tails on valmiiksi asennettu, pitää
luottaa tikun myyjään ja tekijään. Luottamuspula tuo tarpeen tehdä koko
asennus itse.

Mukana tulevia sovelluksia ovat Gnome-työpöytäympäristö, jo mainittu Tor
jonka kautta hoidetaan yhteydet ulkomaailmaan, NetworkManager tekemään
verkkoasetukset, selaimena Firefox muutaman lisäosan yms. kera, Pidgin
pikaviestintään, sähköpostiohjelmana Claws, Liferea uutissyötteiden
lukuun, Gobby (teksturi jolla usea käyttäjä voi samaan aikaan muokata
samaan tiedostoa, kuten [Etherpad](Etherpad) mutta ei
selaimessa käytettävä vaan natiivi ohjelma), Aircrack-ng WiFI verkon
tutkimiseen ja anonymisoiva verkon kerros I2P. Sovelluksia on muokattu
toimimaan Tor-verkon kanssa ja muutenkin tietoturvallisemmiksi.

Tailsin asennusohje neuvoo varmistamaan noudetun asennustiedoston olevan
ehjä ja alkuperäinen varmistamalla digitaalisen allekirjoituksen
kuuluvan Tails-projektille. Jos suhtautuu vakavasti netin käytön
suojaamiseen, on ensimmäiseksi varmistettava käytettyjen työkalujen
olevan luotettavasta lähteestä noudettuja, eli nämä tarkistukset eivät
ole vain käyttäjien kiusaamiseksi.

Tailsin käyttö on samanlaista kuin muidenkin live-Linuxien käyttö.
Periaatteessa nettiyhteyksien pitäisi olla tavanomaista hitaampia kun
kaikki liikenne kulkee Tor-verkon kautta, mutta eipä tuota käytössä
juurikaan huomaa.

Hieman työlästä on tehdä Tails-muistitikku, jossa on tallennustilaa
omille tiedostoille. Tails installer osaa tehdä tämmöisen muistitikun,
mutta se on käytettävissä vain Tails-järjestelmässä. Pitää siis [ensin
tehdä DVD-levylle tai
muistitikulle](https://tails.boum.org/doc/first_steps/installation/manual/index.en.html)
Tails-järjestelmä ilman tallennustilaa, käynnistää se ja [tehdä siinä
olevalla
Tails-installerilla](https://tails.boum.org/doc/first_steps/installation/index.en.html)
muistitikku tallennustilan kera. DVD-levy on ehkä kätevämpi, kun
tarvitaan vain yksi muistitikku. Toisaalta jos on kaksi ainakin 4 Gt
kokoista muistitikkua, pärjää ilman DVD:tä.

Tails Installer ei kokeilussani toiminut. Se kyllä kirjoitti uuden
USB-tikun, mutta siitä ei saanut tietokonetta käynnistettyä, vaikutti
kuin siitä puuttuisi käynnistystiedot pääkäynnistyslohkosta tai jotain.

Minun Gnomessani ei tunnu olevan semmoista levytyökalua kuin ohjeessa
mainittu, jolla katsotaan mikä laitenimi on muistitikulla. Katsoin
laitenimen pistämällä muistitikun USB-liittimeen ja komentamalla

```
dmesg | tail -20
```

Tailsin levyotoksessa on kaksi ydintä, 486 ja amd64. Nähtävästi bootti
valitsee kumpaa ydintä käytetään. Järjestelmä on muuten 32-bittinen,
ainakin dpkg --print-architecture ilmoittaa i386.

Uusin versio 1.0.1
[julkaistiin](https://tails.boum.org/news/version_1.0.1/index.en.html)
10. kesäkuuta 2014. Tulossa on versio 1.1, sen esijulkaisuversio
1.1\~beta1 julkaistiin 30. toukokuuta 2014 ja release candidate 1
julkaistiin 15. heinäkuuta. Tailsin [kalenterin
mukaan](https://tails.boum.org/contribute/calendar/) versio 1.1 on
tarkoitus julkaista 22. heinäkuuta 2014.

Kotisivu
:   <https://tails.boum.org/>

Lisenssi
:   [GNU GPL](GNU_GPL) v3+

Toimii seuraavilla alustoilla
:   i386, AMD64

Asennus
:   Asennustiedosto noudetaan kotisivulta.

Asennusohjeet
:   Kotisivuilla on perusteelliset asennusohjeet englanniksi.

{{% wrapper class="psgallery" %}}
-   [Tails 1.0.1 heti käynnistyksen jälkeen](/images/Tails-01.png)
-   [Näppäinasettelu on US, kannattaa vaihtaa ](/images/Tails-02.png)
-   [Selaimena Iceweasel, eli Debianin brändäämätön
    Firefox](/images/Tails-03.png)
-   [Paikallisen aliverkon koneet ovat saavutettavissa suoraan omalla
    IP-numerollaan](/images/Tails-04.png)
-   [Tor-verkko tosiaan peittää koneen oikean
    IP-numeron](/images/Tails-05.png)
-   [Selainta voi käyttää tavanomaiseen tapaan, ja enimmäkseen
    webbisivut toimivat tavanomaiseen tapaan](/images/Tails-06.png)
-   [Tails Installerilla voi tehdä USB-muistin tai SD-muistikortin,
    jossa mahdollisuus tallentaa omia tiedostoja samalle
    taltiolle](/images/Tails-07.png)
-   [Asetuksissa näköjään säädetään tietoturvaa tiukaksi. Jotkut
    webbisivut yrittävät tehdä jotain joka on Tailsissa
    kiellettyä](/images/Tails-08.png)
-   [Tails Installer kirjoittaa muistitikkua melkoisen
    kauan](/images/Tails-09.png)
-   [Löytyi webbisivu joka ei toimi: Slashdot ei päästä Tailsin selainta
    saitilleen](/images/Tails-10.png)
-   [Tailsin greeter, eli ensimmäinen näkyvä ruutu käynnistyksen
    jälkeen. Helpompi on valita No eli ei mitään ylimääräisiä
    asetuksia](/images/Tails-12.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman ja Tails-projekti*


{{% wrapper class="comments" %}}
Kommentit
---------

Tails Installerin tekemästä muistitikusta
:   Anonymous 5. Helmikuu 2015 - 12:10
:   Huomasin Tails Installerin tekemän muistikun toimivan muissa tietokoneissa. 
    Teen siis koneessa A sen ensimmäisen Tails-muistitikun. Tikku toimii ja kone A 
    käynnistyy siitä. Tikku toimii myös muissa tietokoneissa. Teen koneessa A Tails 
    Installerilla tikun jossa tallennustilaa tikulla Tailsin käyttöön. Tämä tikku ei 
    toimi koneessa A, olen toistanut tikun teon monta kertaa. Mutta tikku toimii 
    muissa koneissa ihan hyvin. Eli Tailsissa ei ollut vikaa, testikoneeni oli vaan 
    jollain tavalla kranttu muistitikulta boottaamiseen.

Toimija:Tailsissa tietoturva-aukkoja, muttei kerro mitkä ne on
:   Anonymous 22. Heinäkuu 2014 - 20:13
:   <http://tech.slashdot.org/story/14/07/22/165231/exodus-intelligence-details-zero-day-vulnerabilities-in-tails-os>

Miksi Tails ei päästä katsomaan selaimen kanvaasia
:   Anonymous 22. Heinäkuu 2014 - 20:11
:   <https://securehomes.esat.kuleuven.be/~gacar/persistent/index.html>
    <http://www.propublica.org/article/meet-the-online-tracking-device-that-is-virtually-impossible-to-block>
    <https://securehomes.esat.kuleuven.be/~gacar/persistent/canvas_urls.html>

{{% /wrapper %}}
