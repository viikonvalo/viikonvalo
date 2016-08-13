+++
Date = "2011-11-19T22:00:00.000Z"
Title = "KeePass / KeePassX"
Description = "KeePass ja KeePassX ovat salasanojen turvalliseen säilyttämiseen tarkoitettuja vapaita ohjelmia."
Week = "1x47"
Number = "47"
Alustat = ["Linux","Windows","Mac OS X","Android","iOS","Windows Phone 7","Blackberry"]
Tagit = ["Java","PocketPC","Apuohjelma","Salaus"]
Type = "post"
Author = "pesasa"
Pageimage = "valo47-keepass.png"
+++


**KeePass ja KeePassX ovat salasanojen turvalliseen säilyttämiseen
tarkoitettuja vapaita ohjelmia.**

![ ](/images/valo47-keepass.png "fig:valo47-keepass.png") Viimeviikkojen
tietovuototapaukset ovat nostaneet esiin salasanojen turvallisen
säilyttämisen ongelman. Nykyisin ihmisillä on käyttäjätilejä yhä
useammassa verkkopalvelussa ja kuhunkin tarvitaan kirjautumista varten
tunnus ja salasana. Jotta salasana olisi turvallinen, pitäisi sen olla
riittävän pitkä ja tarpeeksi sattumanvarainen. Monen satunnaisen
salasanan muistaminen ulkoa voi kuitenkin käydä ylivoimaiseksi. Tällöin
saman salasanan käyttäminen eri palveluissa saattaa tuntua
houkuttelevalta, mutta sekään ei ole hyvä ratkaisu. Päinvastoin kaikissa
palveluissa pitäisi käyttää aina eri salasanoja, sillä jos jokin
palveluista vuotaa salasanat tai ei jostain muusta syystä olekaan
luotettava, ovat muut käyttäjätilit silti turvassa.

![](Lukko_avaimia.png "fig:Lukko_avaimia.png") Käyttäjätunnusten ja
salasanojen hallintaan on kehitetty ohjelmia, kuten KeePass ja KeePassX.
Nämä taltioivat tunnukset ja salasanat yhteen tietokantaan, joka
suojataan salakirjoittamalla niin, että niihin pääsee käsiksi vain
tietämällä oikean "master-salasanan". Näin kaikki muut salasanat saadaan
lukittua yhden salasanan taakse ja tämän yhden salasanan muistaminen
riittää. Vaihtoehtoisesti master-salasanan käytön sijasta näissä
ohjelmissa voidaan generoida erillinen avaintiedosto, jolla
salasanasäilö voidaan avata. Kun avaintiedosto tallennetaan
muistitikulle tai cd-levylle, saadaan näin eräänlainen fyysinen avain,
jota ilman salasanasäilön avaaminen ei onnistu. Tällainen avain täytyy
tietenkin säilyttää hyvässä tallessa. Kaikkein tärkeimpien salasanojen
suojaksi voidaan myös käyttää salasanan ja avaintiedoston yhdistelmää,
jolloin säilön avaamiseen tarvitaan molemmat.

Alkuperäinen KeePass (versio 1.x, eli Classic Edition) on tehty vain
Windows-alustalle. Uudempi KeePass2 (Professional Edition) sen sijaan on
ohjelmoitu .NET-ympäristöllä, jolloin se toimii myös Mono-kirjastoilla
varustetussa Linux-, Mac OS X- tai BSD-järjestelmässä. Monon
mahdollisista patenttiongelmista huolestuneille hyvä uutinen on, että
näiden virallisten versioiden lisäksi ohjelmasta on olemassa useita
erillisinä projekteina toteutettuja versioita erilaisille alustoille.
Näistä KeePassX on Qt-kirjaston avulla ohjelmoitu Classic-version kanssa
yhteensopiva toteutus, joka toimii ainakin Windows-, Linux, Mac OS X-
sekä BSD-järjestelmissä. Lisäksi muita epävirallisia toteutuksia löytyy
ainakin Android-alustalle (KeePassDroid), iPhonelle ja iPadille
(MiniKeePass, iKeePass, MyKeePass, KyKeePass) sekä Windows Phone 7:lle
(7Pass).

{{% wrapper class="leftimage" %}}
![ ](/images/keyring.png "fig:keyring.png")
{{% /wrapper %}}
KeePass ja KeePassX toimivat molemmat
hyvin samalla tavoin. Niihin tallennettuja tunnusten ja salasanojen
yhdistelmiä voidaan luokitella esimerkiksi käyttötarkoituksen
(sähköpostit, foorumit, webbipalvelut, ftp-/sftp-palvelimet, jne.)
mukaan ryhmiksi sekä tarvittaessa myös aliryhmiksi. Kun tunnusta tai
salasanaa tarvitaan, ne voi kopioida syöttökenttään joko leikepöydän
kautta tai hiirellä raahaamalla. Lisäksi ohjelma osaa myös tyhjentää
leikepöydän käytön jälkeen, jotta salasana ei jää vahingossa sinne
saataville. Lisäksi käytettävissä on *Auto-Type*-toiminto, jolla voidaan
määritellä sarja näppäimenpainalluksia, jotka voidaan syöttää haluttuun
ohjelmaikkunaan. Esimerkiksi Gmail-palvelun kirjautumissivulle sopiva
*Auto-Type*-sääntö voisi olla: *{USERNAME}{TAB}{PASSWORD}{ENTER}"*.
KeePass-ohjelmien mukana on myös salasanageneraattori, jolla voi arpoa
itselleen turvallisen salasanan. Generaattorille voidaan antaa haluttu
salasanan pituus sekä käytettävissä olevat merkkityypit, kuten isot ja
pienet kirjaimet, numerot sekä erikoismerkit.

KeePass-ohjelmasta on tietokoneelle asennettavan version lisäksi
tarjolla myös niin sanottu *portable*-, eli tikkuversio. Tämä tarkoittaa
sitä, että ohjelmaa voidaan käyttää suoraan muistitikulta ilman, että se
tallentaa tietojaan tai asetuksiaan tietokoneelle. Koska
salasanatietokanta on yhdessä tiedostossa, on se helppo siirtää koneelta
toiselle tai tuon tikkuversion seuraksi samalle muistitikulle. Ohjelman
tuo- ja vie-toimintojen avulla myös tietokannan siirtäminen muiden
vastaavien ohjelmien välillä onnistuu helposti.

Kaiken lisäksi, koska ohjelma on avointa lähdekoodia, ohjelman käyttäjän
ei tarvitse vain luottaa, että ohjelma ei tee salasanoille mitään
vilpillistä.

> "As a cryptography and computer security expert, I have never understood
> the current fuss about the open source software movement. In the
> cryptography world, we consider open source necessary for good security;
> we have for decades. Public security is always more secure than
> proprietary security. It's true for cryptographic algorithms, security
> protocols, and security source code. For us, open source isn't just a
> business model; it's smart engineering practice."

-- [Bruce Schneier, Crypto-Gram 1999/09/15](http://www.schneier.com/crypto-gram-9909.html)

Kotisivu
:   <http://keepass.info> ja <http://www.keepassx.org>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Windows, Linux, Mac OS X, Android, iOS, Windows Phone 7, PocketPC,
    J2ME (matkapuhelimet), Blackberry

Asennus
:   Useimpiin Linux-järjestelmiin KeePass tai KeePassX löytyy suoraan
    jakelun paketinhallinnasta. Esimerkiksi Ubuntussa ovat saatavilla
    sekä KeePass2 että KeePassX. Muille alustoille asennuspaketit
    löytyvät ohjelman kotisivujen kautta.

VALO-CD
:   KeePass löytyy myös [ VALO-CD]-kokoelmasta.

Oppaita
:   <http://www.valo-cd.fi/oppaat/keepass-opas.pdf>

KeePass muualla
:   <http://en.wikipedia.org/wiki/KeePass>

Muita vastaavia ohjelmia
:   [Salasananhallintaohjelmia
    Wikipediassa](http://en.wikipedia.org/wiki/Category:Password_managers)

{{% wrapper class="psgallery" %}}
-   [ ](/images/KeePass-0.png)
-   [ ](/images/KeePass-1.png)
-   [ ](/images/KeePass-2.png)
-   [ ](/images/KeePass-3.png)
-   [ ](/images/KeePass-4.png)
-   [ ](/images/KeePass-5.png)
-   [ ](/images/KeePass-6.png)
-   [ ](/images/KeePass-7.png)
-   [ ](/images/KeePass-8.png)
-   [ ](/images/KeePass-9.png)
-   [ ](/images/KeePass-10.png)
-   [ ](/images/KeePass-11.png)
-   [ ](/images/KeePass-12.png)
-   [ ](/images/KeePass-13.png)
-   [ ](/images/KeePass-14.png)
-   [ ](/images/KeePass-15.png)

{{% /wrapper %}}
*Teksti: pesasa* <br />
*kuvakaappaukset: pesasa*

