+++
Date = "2013-09-21T21:00:00.000Z"
Title = "ClamAV"
Description = "Clam Antivirus on avoimen lähdekoodin virustorjuntamoottori, joka on suunniteltu havaitsemaan troijalaisia, viruksia ja muita haittaohjelmia."
Week = "3x39"
Number = "143"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris","Aix","HP-UX","OpenVMS"]
Tagit = ["OSF","Tietoturva","Virustorjunta"]
Type = "post"
Author = "Taleman"
Pageimage = "valo143-clamav.png"
+++


**Clam Antivirus on avoimen lähdekoodin virustorjuntamoottori, joka on
suunniteltu havaitsemaan troijalaisia, viruksia ja muita
haittaohjelmia.**

![ ](/images/valo143-clamav.png "fig:valo143-clamav.png") ClamAV etsii
tiedostoista haittaohjelmia ja viruksen saastuttamia tiedostoja.
Tiedoston voi siirtää karanteenihakemistoon, poistaa tai vain ilmoittaa
löydöstä.

Linux-koneissa ei tietokoneviruksista liiemmälti ole haittaa, mutta
virustorjuntaa voi silti käyttää tutkimaan tiedoston ennen kuin lähettää
sen Windows-koneen käyttäjälle. Posti- tai tiedostopalvelimena
toimivassa Linux-koneessa on hyvä tutkia viestit virusten ja muiden
haittaohjelmien varalta ennen niiden välittämistä eteenpäin. ClamAV:n
mukana tulee virustunnistetiedot ajan tasalla pitävä taustaohjelma
freshclam.

{{% wrapper class="rightimage" %}}
![ ](/images/J_Alves_germ_1c.png "fig:J_Alves_germ_1c.png")
{{% /wrapper %}}
Windows-koneissa sitä vastoin tulisi olla käytössä virustorjunta.
ClamAV:stä on kaksikin Windowsille tarkoitettua versiota, ClamWin ja
Immunet 3.0, powered by ClamAV.

[ClamWin](http://www.clamwin.com/) on ClamAV täydennettynä Windowsissa
toimivalla graafisella käyttöliittymällä. Virustarkistus tehdään
käyttäjän pyytäessä, eli valitsemalla tiedostoselaimessa tiedosto tai
hakemisto ja valitsemalla tarkista ClamWinillä. Lisäksi
Outlook-sähköpostiohjelmaan on mahdollista saada toiminnallisuus joka
tarkistaa jokaisen saapuvan ja lähtevän sähköpostin.

Harmittavasti ClamWin ei sisällä toimintoa, joka tutkisi tiedostoja sitä
mukaa, kun niitä levylle kirjoitetaan, tai tutkisi käynnistettävän
tiedoston ennen kuin se päästetään käynnistymään. Puutetta voi kiertää
asentamalla selaimeen lisäosan, joka tutkituttaa ladatun tiedoston
ClamWinillä. Esimerkiksi Firefoxiin on saatavilla
[Fireclam](https://addons.mozilla.org/fi/firefox/addon/fireclam/).

Toinen lähestymistapa on sovelluksella nimeltä [Clam
Sentinel](http://sourceforge.net/projects/clamsentinel/). Se on
Windows-ohjelma, joka tiedostojärjestelmän muutoksen huomatessaan tutkii
tiedoston ClamWinillä.

Kattavampi suojaus saadaan sovelluksella [Immunet powered by
ClamAv](http://www.clamav.net/lang/en/about/win32/), jossa on myös
käynnistettävät ohjelmat ennen käynnistystä tutkiva toiminto. ClamAV:n
lisäksi sen mukana on pilvipohjainen viruksia tunnistava osa. Immunet on
toiminnallisuudeltaan vastaava kuin kaupalliset
virustorjuntaohjelmistot. Saatavilla on myös [maksullinen
Plus-versio](http://www.immunet.com/plus/index.html), jossa on joitakin
lisäominaisuuksia. Toisin kuin ClamAV ja ClamWin, Immunet **ei ole vapaa
ohjelma**. Lähdekoodia ei siis ole saatavilla ilmaisestakaan Immunetin
versiosta.

ClamAV:n uusin versio 0.98
[julkaistiin](http://www.clamav.net/lang/en/2013/09/19/clamav-0-98-has-been-released/)
19. syyskuuta 2013.

Kotisivu
:   <http://www.clamav.net/lang/en/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   AIX, HP-UX, BSD, Linux, Mac OS X, OpenVMS, OSF, Solaris, Windows

Asennus
:   ClamAV löytynee Linux-jakelun omista pakettivarastoista. Clamwin
    asennetaan webbisivultaan <http://www.clamwin.com/>. Immunet 3.0,
    Powered by ClamAV asennetaan webbisivultaan
    <http://www.clamav.net/lang/en/>.

Käyttöohjeet
:   Sovellusten mukana tulee ohje, tai sovelluksen webbisivulla on
    ohjetiedostoja. Niihin on syytä tutustua, jotta saa virustorjunnan
    koneellaan toimimaan kuten pitää, ja ettei epähuomiossa tee mitään
    joka estäisi virustorjuntaa toimimasta.

{{% wrapper class="psgallery" %}}
-   [clamscan Linuxissa käynnistetty](/images/ClamAV-01.png)
-   [clamscan Linuxissa, tulokset](/images/ClamAV-02.png)
-   [ClamWin asennusohjelma](/images/ClamAV-03.png)
-   [ClamWin lataa virustunnisteiden päivitykset](/images/ClamAV-04.png)
-   [ClamWin ei toimi koko ajan taustalla, vaan tiedostot tutkitaan
    vasta erikseen käynnistämällä](/images/ClamAV-05.png)
-   [Tiedoston tutkimisen tulos](/images/ClamAV-06.png)
-   [Viruksiakin löytyy, tai ainakin epäilyttäviä tiedostoja (nimittäin
    mikään muu antivirusohjelma ei löytänyt noista tiedostoista
    virusta)](/images/ClamAV-07.png)
-   [Immunet 3.0, powered by ClamAV asennus](/images/ClamAV-08.png)
-   [Asennuksen säätämö](/images/ClamAV-09.png)
-   [Asennettu Immunet 3.0, powered by ClamAV](/images/ClamAV-10.png)
-   [Tiedoston tutkimisen tulos](/images/ClamAV-11.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman* <br />
*Kuvituskuva: Openclipart.org, Drawn by:J. Alves*

### Lisätietoja

-   [Virustorjuntaan keskittynyt
    tietoturvasivusto](http://www.virustorjunta.net/)
-   [Virustorjunta suomalaisessa
    Wikipediassa](http://fi.wikipedia.org/wiki/Virustorjunta)
-   [Perusteellisempi artikkeli englanninkielisessä
    Wikipediassa](http://en.wikipedia.org/wiki/Antivirus_software)
-   [ClamAV Wikipediassa](http://en.wikipedia.org/wiki/Clam_AntiVirus)
-   [ClanWin Wikipediassa](http://en.wikipedia.org/wiki/ClamWin)
-   [Immunet Wikipediassa](http://en.wikipedia.org/wiki/Immunet)
-   [Blogiartikkeli
    ClamAV:stä](http://blog.clamav.net/2011/03/top-5-misconceptions-about-clamav.html)
-   [Immunet Test and
    Review](http://malwaretips.com/Thread-Immunet-Free-3-0-Test-and-Review-MalwareDoctor)
-   [Clamwin
    Review](http://download.cnet.com/ClamWin-Antivirus/3000-2239_4-10369483.html)
-   [Fireclam, Firefoxin
    lisäosa](https://addons.mozilla.org/fi/firefox/addon/fireclam/)
-   [Clam Sentinel](http://sourceforge.net/projects/clamsentinel/)


