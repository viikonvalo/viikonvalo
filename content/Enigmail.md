+++
Date = "2013-09-07T21:00:00.000Z"
Title = "Enigmail"
Description = "OpenPGP:tä käyttävä salaus- ja allekirjoituslisäosa Thunderbird-sähköpostiohjelmalle."
Week = "3x37"
Number = "141"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris","OS/2"]
Tagit = ["Viestintä","Sähköposti","Tietoturva"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo141-enigmail.png"
+++


**OpenPGP:tä käyttävä salaus- ja allekirjoituslisäosa
Thunderbird-sähköpostiohjelmalle.**

![ ](/images/valo141-enigmail.png "fig:valo141-enigmail.png") Enigmail on
Thunderbird-sähköpostiohjelman lisäosa, jolla tietoturvastaan huolta
pitävä sähköpostinkäyttäjä voi **salata viestinvaihtonsa** [NSA:nkin
kestävällä](http://www.digitoday.fi/tietoturva/2013/09/06/nsa-purkaa-internetin-salaukset-lennossa-vain-ilmainen-pgp-kestaa/201312458/66)
salauksella sekä **allekirjoittaa viestinsä** niin, että vastaanottaja
voi varmistua lähettäjän aitoudesta. Enigmail käyttää salaukseen ja
viestien sähköiseen allekirjoittamiseen
[GnuPG](GnuPG)-ohjelmaa, joka on toteutettu
[OpenPGP](http://www.openpgp.org/)-standardin mukaisesti. Enigmail
sisältää työkalut tarvittavien avainten luomiseen, omien ja kontaktien
avainten hallintaan, sähköpostin salaamiseen ja allekirjoittamiseen,
salattujen viestien avaamiseen ja allekirjoitusten tarkistamiseen sekä
luottamusverkoston rakentamiseen.

[Thunderbird](Mozilla Thunderbird)-sähköpostiohjelman
lisäosana Enigmailin asentaminen vaatii luonnollisesti ensin
Thunderbirdin asentamisen. Tämän lisäksi se vaatii myöskin
[GnuPG](GnuPG):n toimiakseen. Enigmailin asennus tapahtuu
joko sen kotisivujen kautta tai helpommin suoraan Thunderbirdistä käsin
"Työkalut"-valikon lisäosien hallinnasta. Itse Enigmailin käyttö
aloitetaan luomalla uudet salaus- ja allekirjoitusavaimet taikka
tuomalla käyttöön jo olemassa olevat avaimet. Avaimet voi luoda
Thunderbirdiin Enigmailin asennuksen myötä ilmaantuneen OpenPGP-valikon
työkaluilla joko luomalla ne itse "Avainten hallinta"-työkalulla taikka
käyttämällä ohjattua asennusta ("Setup wizard"). Lisää julkisen avaimen
kryptografiasta ja sen avaimista voi lukea aiemmasta
[GnuPG](GnuPG):tä käsittelevästä artikkelista.

Kun tarvittavat avaimet on luotu, voi avainten hallintatyökalulla tuoda
kontaktien julkisia avaimia joko tiedostoista taikka avainpalvelimilta,
joista Enigmail osaa etsiä avaimia käyttäjätunnusten
(sähköpostiosoitteiden) taikka avaintunnusten perusteella. Julkisia
avaimia tuotaessa on syytä tuoda vain avaimia, joiden aitouden on
varmistanut joko henkilökohtaisesti taikka jotka ovat jo luotetulla
avaimella allekirjoitettuja.

Enigmailin varsinainen arkipäiväinen käyttö on varsin suoraviivaista.
Uutta viestiä kirjoitettaessa on työkalupaneelissa OpenPGP-valinta,
josta voi valita viestin salaamisen ja allekirjoittamisen käyttöön.
Allekirjoittamiseen riittää, että omat avaimet on luotu. Salatun viestin
lähettämiseen vaaditaan, että käytettävissä on viestin vastaanottajan
julkinen avain, jolla salaaminen tapahtuu. Kun allekirjoitettavaa
viestiä ollaan lähettämässä, Enigmail kysyy käyttäjältä hänen salaiseen
avaimeensa liittyvän salasanan, jolla vielä varmistetaan, että viestin
lähettäjä todellakin on avaimen omistaja. Vastaavasti saapuneen salatun
viestin avaamisen yhteydessä Enigmail kysyy jälleen saman salaiseen
avaimeen liittyvän salasanan, purkaa viestin ja näyttää sen
selväkielisenä. Enigmailille on mahdollista luoda myös
vastaanottajakohtaisia sääntöjä, joiden mukaisesti kaikki tiettyihin
osoitteisiin lähetettävät viestit allekirjoitetaan tai salataan.

Allekirjoitettuja viestejä näytettäessä Enigmail tarkistaa
automaattisesti, että viestin allekirjoitus vastaa lähettäjän julkista
avainta ja ilmoittaa hyväksytystä allekirjoituksesta tekstillä ja
vihreällä värillä sekä sinettikuvakkeella. Enigmail myös varoittaa, jos
allekirjoitus on virheellinen, sitä ei voitu varmistaa lähettäjän
julkisen avaimen puuttumisen takia taikka allekirjoitus on oikeellinen,
mutta sen tekemiseen käytetty avain ei ole tarpeeksi luotettu.

Enigmailin työkaluilla onnistuu myös luottamusverkoston ylläpitäminen.
Luottamusverkostolla tarkoitetaan sitä, että käyttäjä voi luottaa itse
henkilökohtaisen tapaamisen ja henkilöllisyystodistuksen tarkistamisen
yhteydessä saamiensa julkisten avainten lisäksi avainpalvelimelta
saatuihin julkisiin avaimiin, jotka ovat jonkun jo ennestään luotetun
allekirjoittamia. Enigmaililla voidaan lisätä oma allekirjoitus itse
varmistettuihin omien kontaktien julkisiin avaimiin, jotka palautetaan
allekirjoitettuina omistajilleen. Näin omalla allekirjoituksella siis
vakuutetaan, että kyseinen julkinen avain kuuluu sille henkilölle, jolle
sen väitetään kuuluvan.

Kotisivu
:   <https://www.enigmail.net>

Lisenssi
:   [MPLv2/GPLv2](https://www.enigmail.net/home/license.php)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD, OpenBSD, NetBSD, Solaris, OS/2

Asennus
:   Enigmail on asennettavissa Thunderbird-sähköpostiohjelmaan joko sen
    kotisivujen kautta taikka Mozillan palvelusta Thunderbirdin
    työkaluvalikosta löytyvällä lisäosien hallinnalla. Joihinkin
    Linux-jakeluihin, kuten Ubuntuun ja Debianiin, Enigmailin voi
    asentaa myös paketinhallinnan kautta.

VALO-CD
:   Windows-koneille [Mozilla
    Thunderbird](Mozilla Thunderbird),
    [GnuPG](GnuPG) sekä Enigmail löytyvät kaikki myös
    [VALO-CD:ltä](http://www.valo-cd.fi/ilmainen_thunderbird).

Käyttöohjeet
:   [Linux.fi-wikin Enigmail-ohje](http://linux.fi/wiki/Enigmail)
:   [VALO-CD:n
    Enigmail-ohje](http://www.valo-cd.fi/ilmainen_enigmail-opas) (pdf,
    sovitettu linux.fi:n ohjeesta)

{{% wrapper class="psgallery" %}}
-   [Enigmail-lisäosa lisää Thunderbirdiin uuden
    "OpenPGP"-valikon.](/images/enigmail-1.png)
-   [Enigmailin ohjattu asennus OpenPGP-avainten ja asetusten
    luomiseen.](/images/enigmail-2.png)
-   [OpenPGP-avainten hallintaikkunalla voi etsiä julkisia avaimia
    avainpalvelimelta ja hallita tuotuja
    avaimia.](/images/enigmail-3.png)
-   [Lähetettävän viestin allekirjoittaminen ja salaaminen tapahtuvat
    helposti OpenPGP-valikon kautta.](/images/enigmail-4.png)
-   [Allekirjoittaminen varmistetaan syöttämällä salaisen avaimen
    salasana.](/images/enigmail-5.png)
-   [Saapuneen salatun viestin avaamiseen tarvitaan niin ikään salaisen
    avaimen salasanaa.](/images/enigmail-6.png)
-   [Allekirjoitetun viestin allekirjoitus on tarkistettu
    automaattisesti ja sen hyväksymisestä ilmoitetaan tekstillä ja
    vihreällä värillä sekä sinetti-ikonilla. Lukkosymboli muistuttaa,
    että kyseessä on salattu viesti.](/images/enigmail-7.png)
-   [Salatun viestin raakasisältö näyttää tältä. Lähettäjätiedot ovat
    selväkieliset ja vain sisältö on salattua.](/images/enigmail-8.png)
-   [Tuoduille julkisille avaimille valitaan, kuinka luotettavasti
    niiden kuuluminen oikealle omistajalle on
    varmistettu.](/images/enigmail-9.png)
-   [Viesti on allekirjoitettu, mutta lähettäjän julkisesta avaimesta ei
    ole täyttä varmuutta.](/images/enigmail-10.png)
-   [Omalla avaimella voi allekirjoittaa toisten julkisia avaimia, jos
    on vakuuttunut niiden oikeellisuudesta.](/images/enigmail-11.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


