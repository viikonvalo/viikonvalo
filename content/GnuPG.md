+++
Date = "2011-12-03T22:00:00.000Z"
Title = "GnuPG"
Description = "GNU Privacy Guard eli GnuPG on julkisen avaimen salakirjoitusohjelmisto tiedon ja viestinnän salaamiseen."
Week = "1x49"
Number = "49"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","VMS","GNU/Hurd"]
Tagit = ["Internet","Salaus","Viestintä","Tietoturva"]
Type = "post"
Author = "Taleman"
Pageimage = "valo49-gnupg.png"
+++


**GNU Privacy Guard eli GnuPG on julkisen avaimen
salakirjoitusohjelmisto tiedon ja viestinnän salaamiseen.**

![ ](/images/valo49-gnupg.png "fig:valo49-gnupg.png")
GnuPG:llä voi
[salakirjoittaa](http://fi.wikipedia.org/wiki/Salakirjoitus) tiedoston
jolloin ilman avainta sisältöä ei saa selväkieliseksi. Sähköpostin voi
salata siten, etteivät muut kuin vastaanottaja pysty viestiä lukemaan.
Lisäksi viestiin voi lisätä [digitaalisen
allekirjoituksen](http://fi.wikipedia.org/wiki/Digitaalinen_allekirjoitus),
jolloin varmistutaan lähettäjän henkilöllisyydestä ja myös tiedetään,
ettei viestiä ole muutettu allekirjoittamisen jälkeen.

[Julkisen avaimen
salakirjoituksessa](http://fi.wikipedia.org/wiki/Salaus#Salausalgoritmeja)
tarvitaan kaksi avainta, toinen yksityinen tiukasti salaisena pidettävä
avain jolla viesti avataan eli muutetaan selväkielisiksi, toinen
julkinen avain jolla viesti salakirjoitetaan. Julkisen avaimen
tunteminen ei ollenkaan helpota viestin avaamista, niinpä julkisen
avaimen voi huoletta julkistaa webbisivullaan, puhelinluettelossa,
[avainpalvelimella](http://linux.fi/wiki/Gpg#Avainpalvelimet) tai muussa
kaikkien saatavilla olevassa mediassa.

Viestin lähettäjä etsii vastaanottajan julkisen avaimen, salakirjoittaa
viestin ja lähettää sen. Viestiä ei saa selväkieliseksi muuten kun
tuntemalla oikean yksityisen avaimen. Viestin voi huoletta lähettää
sähköpostissa tai postikortilla eikä haittaa vaikka asiaankuulumattomat
saavat viestin haltuunsa.

GnuPG:tä voi käyttää myös digitaaliseen allekirjoitukseen. Tällöin
allekirjoittaja muodostaa viestistä tiivisteen ja salakirjoittaa sen
yksityisen avaimensa avulla. Allekirjoituksen varmistusta haluava laskee
saman tiivisteen, etsii lähettäjän julkisen avaimen ja purkaa sillä
salakirjoitetun tiivisteen. Jos tiivisteet ovat samat, oli viesti
allekirjoitettu avainparin yksityisellä osalla eikä viestin sisältö ole
muuttunut matkan aikana.

{{% wrapper class="rightimage" %}}
![ ](/images/key_juliane_krug_01.png "fig:key_juliane_krug_01.png‎")
{{% /wrapper %}}
GnuPG ei
käytä [keskitettyä avaintietokantaa](http://fi.wikipedia.org/wiki/PKI)
eikä muutakaan keskusjohtoisuutta. Näin ollen pulmaksi jää varmistua
avaimen omistajan henkilöllisyydestä. Jos osapuolet voivat tavata
kasvokkain, tarkistetaan viranomaisen antamista kuvallisista
henkilöllisyystodistuksista henkilöllisyys ja vaihdetaan avaimia tai
avainten "sormenjälkiä". Sormenjälki on avaimesta laskettu
[tiiviste](http://fi.wikipedia.org/wiki/Tiiviste_%28tietotekniikka%29),
joka yksilöi avaimen tarpeeksi luotettavasti. Avaimet ovat varsin
pitkiä, 4000 bittiä esimerkiksi, jolloin lyhyt 8 merkin mittainen
sormenjälki on helpompi kirjoittaa muistiin ja noutaa varsinainen avain
myöhemmin avainpalvelimelta. Jos avaimesta laskettu sormenjälki täsmää
saatuun sormenjälkeen kuuluu avain sormenjäljen antaneelle henkilölle.

Voidaan myös rakentaa luottamusverkkoa, [web of
trust](http://en.wikipedia.org/wiki/Web_of_trust), allekirjoittamalla
avain kun avaimen haltija on varmistettu ja haltijan henkilöllisyys
todennettu mieluummin kahdesta virallisesta kuvallisesta
henkilöllisyystodistuksesta. Kun saadussa avaimessa on allekirjoitus
henkilöltä jonka tietää luotettavaksi avainten tarkistajaksi, voi
halutessaan luottaa avaimeen vaikkei ole itse tavannut avaimen haltijaa
ja vaihtanut sormenjälkiä.

Luottamusverkkoa voi kasvattaa osallistumalla [avainten
allekirjoitustilaisuuksiin](http://en.wikipedia.org/wiki/Key_signing_party).
On tärkeää noudattaa sovittua menettelytapaa avaimia
allekirjoitettaessa, jottei luottamusverkkoa heikennetä väärillä
henkilöllisyyksillä tai väärillä avaimilla.

Sähköpostiohjelmaan on mahdollista lisätä GnuPG-toiminnallisuus.
Suosittuun sähköpostiasiakasohjelmaan
[Thunderbird](http://fi.wikipedia.org/wiki/Mozilla_Thunderbird),
saatavilla myös
[VALO-CD:llä](http://www.valo-cd.fi/ilmainen_thunderbird), on saatavilla
lisäosa [Enigmail](http://linux.fi/wiki/Enigmail) joka sekin on
saatavilla [VALO-CD:llä](http://www.valo-cd.fi/ilmainen_enigmail-opas).
Salauksen käyttöönotto on hieman mutkikasta, kannattaa lukea asennus- ja
käyttöohje ensin.

GnuPG on GNU-projektin tekemä OpenPGP toteutus.
[OpenPGP](http://www.openpgp.org/) on standardi, määritelty
[RFC4880:ssa](http://www.ietf.org/rfc/rfc4880.txt). OpenPGP kehitettiin
[Phil Zimmermannin](http://www.philzimmermann.com/EN/background/index.html)
[Pretty Good Privacy](http://fi.wikipedia.org/wiki/PGP) -sovelluksesta,
jonka Zimmermann julkaisi vuonna 1991.

Kotisivu
:   <http://www.gnupg.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   FreeBSD, GNU/Hurd, Linux, MacOS X, NetBSD, OpenBSD, VMS, Windows ja
    muita

Asennus
:   Linux-jakeluissa tulee jakelun omista pakettivarastoista. MacOS X
    käyttäjät noutavat asennustiedoston kotisivulta. Windows-käyttäjille
    saatavilla [VALO-CD:llä](http://www.valo-cd.fi/ilmainen_gpg-opas) tai
    kotisivuilta.

Käyttöohjeet
:   [Linux.fi wikin artikkeli GPG:stä](http://linux.fi/wiki/Gpg)
:   [Ilmainen GPG-opas
    VALO-CD:llä](http://www.valo-cd.fi/ilmainen_gpg-opas)
:   [GnuPG ohjeet](http://www.gnupg.org/documentation/index.en.html)
    (englanniksi)
:   [Debian-projektin ohje avainten
    allekirjoittamisesta](http://www.debian.org/events/keysigning)
    (suomeksi, jos selaimen oletuskieli suomi)
:   [Ohje avainten allekirjoitustilaisuuden
    järjestämisestä](http://cryptnet.net/fdp/crypto/keysigning_party/en/keysigning_party.html)
    (englanniksi).

{{% wrapper class="psgallery" %}}
-   [Thunderbirdin lisäosa Enigmail](/images/Kuvakaappaus-OpenPGP-avainten_hallintaikkuna.png)
-   [Thunderbirdin lisäosa Enigmail](/images/Kuvakaappaus-OpenPGP-asetukset.png)
-   [GnuPG komentorivillä](/images/Kuvakaappaus-gnupg-1.png)
-   [gpg --list-public-keys](/images/Kuvakaappaus-gpg-avaimia.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*kuvakaappaukset: Taleman*

