+++
Date = "2013-05-04T21:00:00.000Z"
Title = "Debian Wheezy"
Description = "Debian Wheezy on 27 kuukauden kehitystyön tulos: Debian GNU/Linux -käyttöjärjestelmän versio 7.0."
Week = "3x19"
Number = "123"
Alustat = []
Tagit = ["Käyttöjärjestelmä"]
Type = "post"
Author = "Taleman"
Pageimage = "valo123-debian_wheezy.png"
+++


**Debian Wheezy on 27 kuukauden kehitystyön tulos: Debian GNU/Linux
-käyttöjärjestelmän versio 7.0.**

![ ](/images/valo123-debian_wheezy.png "valo123-debian_wheezy.png")
Debian on vapaaehtoistyönä tehty jakelu, kehitystyö ei ole kytköksissä
mihinkään yritykseen tai yksittäiseen ohjelmatoimittajaan.
Debian-projekti on julkaissut [vapaiden ohjelmien
ohjeiston](http://www.debian.org/social_contract.fi.html#guidelines)
määrittämään, mitkä ohjelmistot ovat vapaita. Debian on laatinut myös
[yhteisösopimuksen](http://www.debian.org/social_contract.fi.html)
vapaiden ohjelmien yhteisön kanssa määrittämään mitä sitoumuksia
projekti noudattaa. Debiania on käytetty useiden jakeluhaarojen pohjana,
muiden muassa [Knoppix](http://www.knopper.net/knoppix/) ja
[Ubuntu](http://ubuntu-fi.org/) pohjautuvat Debianiin. Debian soveltuu
työpöytäkäyttöön, palvelinkoneelle, miniläppäriin jne. Debian on alusta
lähtien painottanut julkaisun vakaata toimintaa ja seuraavaan versioon
päivittämisen helppoutta. Uusi versio julkaistaankin vasta, kun sen
luotettavasta toiminnasta on varmistuttu riittävän pitkän testausvaiheen
aikana, versioiden väliä on saattanut olla ylikin kaksi vuotta.

{{% wrapper class="rightimage" %}}
![ ](/images/Tonybaldwin_-_Debian_gnu_linux_7_Wheezy.png "Tonybaldwin - Debian gnu linux 7 Wheezy.png")
{{% /wrapper %}}
Debian Wheezyssä julkistetaan kaksi uutta tuettua laitealustaa: s390x,
64-bittinen siirros IBM System z -koneille (tarkoituksena korvata s390)
ja armhf, vaihtoehto ARMv7 koneille joissa on liukulukusuoritin.
Tuettuja laitealustoja on yhteensä yhdeksän, ja lisäksi teknologiademona
on GNU/kFreeBSD siirrokset ('kfreebsd-amd64' and 'kfreebsd-i386').
Suunnitelmissa oli myös julkaista
[Hurd-versio](http://www.debian.org/ports/hurd/), mutta se lienee vielä
liian keskeneräinen.

Edellisen julkaisun [Debian Squeeze](Debian_GNU_Linux)
helmikuulta 2011 jälkeen on tullut yli 12800 uutta ohjelmapakettia.
Ohjelmapaketteja on nyt yli 37000. Lisäksi yli puolet ohjelmapaketeista
on saanut uuden version Squeezen jälkeen. Yli 4000 pakettia on poistettu
monenlaisista syistä.

Tässä julkaisussa X.Org 7.5 päivittyy versioon X.Org 7.7. LibreOffice
3.5 korvaa sovelluksen OpenOffice.org. Työpöytäympäristöjä on useita,
esimerkiksi GNOME 3.4, KDE 4.8.4, Xfce 4.8 ja LXDE.

Oletuskäyttöliittymä on saman tapainen kuin Ubuntu 12.04:n Unity.
Debianissa tämä on toteutettu Gnome Shellillä, mielestäni paremmin kuin
Ubuntussa kun helposti löytää käynnistimen niillekin sovelluksille
joille *ei ole* käynnistintä vasemman reunan kuvakesarakkeessa.

Debian Wheezy toimitetaan kahdella Blueray-levyllä, 9:llä tai 10:llä
DVD-levyllä tai 61-69:llä CD-levyllä. Taltioiden massiivista määrää ei
pidä pelästyä, ne kaikki tarvitaan vain jos asennetaan koneeseen jossa
ei ole nettiyhteyttä ja halutaan kaikkien julkaisun ohjelmapakettien
olevan asennettavissa. Itse noudan tavallisesti
[Netinst-CD:n](http://www.debian.org/distrib/netinst), se on vain pari
sataa megatavua kooltaan ja siitä voi asentaa koko Debianin kunhan on
toimiva nettiyhteys asennuspakettien noutamiseksi asennuspalvelimilta.
Debianin asennusromppujen levyotokset ovat hybridejä, eli saman otoksen
voi polttaa CD:lle tai kirjoittaa USB-muistitikulle ja asennus menee
samalla tavalla.

Lisäksi Linuxin saa ostettua esiasennettuna tietokoneeseen, [Suomessakin
on toimittaja](http://www.debian.org/distrib/pre-installed#fi).

Squeezen kanssa oli käytettävissä Debian Multimedia -saitti, josta sai
[Christian
Marillatin](http://qa.debian.org/developer.php?login=marillat@debian.org)
paketoimia multimediasovelluksia. Saitti on vieläkin olemassa mutta sen
URL on muuttunut, se on nyt
[<http://www.deb-multimedia.org/>](http://www.deb-multimedia.org/).
Muutos tehtiin Debian-projektin pyynnöstä, jotta nimessä ei olisi sanaa
Debian, koska sivusto on Marillatin itsenäisesti ylläpitämä palvelu eikä
virallinen Debianin osa. Virallisessa Debianissakin on nyt [enemmän
tukea multimedialle](http://wiki.debian.org/DebianMultimedia).

[Debian Backports](http://backports.debian.org/) on virallinen
Debian-projektin palvelu, jossa on Debianin vakaaseen versioon
saatavilla uudempia versioita joistakin ohjelmista. Debianissa
painotetaan vakaata toimintaa: julkaisun jälkeen korjataan vikoja, ei
oteta mukaan uusia versioita sovelluksista.

Kotisivu
:   <http://debian.org/>

Lisenssi
:   [GNU GPL](GNU_GPL) ja muita
    [DFSG:n](http://www.debian.org/social_contract.fi.html#guidelines)
    mukaisia lisenssejä

Toimii seuraavilla alustoilla
:   Kämmentietokoneista supertietokoneisiin, 9 tuettua
    laitearkkitehtuuria

Asennus
:   Asennustaltiot noudettavista kotisivulta, pikapuoliin on myös
    mahdollista [tilata maksulliset CD:t tai
    DVD:t](http://www.debian.org/CD/vendors/). [Debian
    Live](http://live.debian.net/) -projekti tekee Live-CD:t, joilla voi
    kokeilla Debiania asentamatta ja myös asentaa.

Käyttöohjeet
:   Käyttöohjeita löytyy [kotisivuilta](http://www.debian.org/doc/) ja
    [muualtakin Internetistä](http://www.debianhelp.co.uk/).
    [Asennusohje](http://www.debian.org/releases/stable/installmanual)
    löytyy useilla kielillä HTML, PDF ja tekstitiedostona.

{{% wrapper class="psgallery" %}}
-   [Oletuskäyttöliittymä on Gnome-Shell. Gnome Classic on saman
    näköinen kuin Squeezen Gnome](/images/Wheezy-tyopoyta.png)
-   [Käynnistyskuvakkeet saa näkyviin logonäppäimellä tai viemällä
    hiiren kohdistin vasempaan ylänurkkaan](/images/Wheezy-tyopoyta2.png)
-   [Kaikkien sovellusten käynnistyskuvakkeet saa helposti näkyviin](/images/Wheezy-kaikki-sovellukset.png)
-   [Järjestelmän saa suomenkieliseksi](/images/Wheezy-finnish.png)
-   [Youtuben videot näkyvät ja kuuluvat ilman säätämistä](/images/Wheezy-youtube.png)
-   [Elokuvasoitin osaa näyttää CSS-suojatut DVD:t vasta kun on asennettu deb-multimedia.org:sta libdvdcss2](/images/Wheezy-elokuvasoitin.png)
-   [Debian GNU/Linux 7.0 ja Linux-ydin on 3.2.](/images/Wheezy-release-uname.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*kuvakaappaukset: Taleman* <br />
*Kuvituskuva: [Tony Baldwin](http://www.debianart.org/cchost/?ccm=/files/tonybaldwin/1276)*

### Lisätietoa

-   [Tiedote julkaisusta](http://www.debian.org/News/2013/20130504)
-   [Wikipedian Debian-artikkeli](http://fi.wikipedia.org/wiki/Debian)
-   [Julkaisumuistio
    (englanniksi)](http://www.debian.org/releases/wheezy/amd64/release-notes/ch-whats-new.en.html)
-   [debian.fi Wiki](http://debian.fi/)
-   Viikon VALO edellisestä Debian-julkaisusta:
    [Debian GNU/Linux](Debian_GNU_Linux "wikilink")


