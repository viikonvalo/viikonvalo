+++
Date = "2014-03-01T22:00:00.000Z"
Title = "ownCloud"
Description = "OwnCloud on palvelinohjelmisto, jolla voi luoda itselleen oman pilvipalvelun tiedostojen tallennukseen, kalenterin ja yhteistietojen säilytykseen sekä moneen muuhun käyttöön."
Week = "4x10"
Number = "166"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris"]
Tagit = ["Palvelin","Pilvipalvelu"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo166-owncloud.png"
+++


**OwnCloud on palvelinohjelmisto, jolla voi luoda itselleen oman
pilvipalvelun tiedostojen tallennukseen, kalenterin ja yhteistietojen
säilytykseen sekä moneen muuhun käyttöön.**

![ ](/images/valo166-owncloud.png "fig:valo166-owncloud.png")
Pilvitallennuspalvelut ovat usein käteviä, sillä ne mahdollistavat omien
tietojen ja tiedostojen käytön verkon kautta paikasta ja laitteesta
riippumatta. Niiden avulla onnistuu esimerkiksi tiedostojen, kalenterien
ja yhteystietojen synkronointi useamman laitteen välillä ja esimerkiksi
valokuvien varmuuskopiointi mobiililaitteesta muualle on helppoa.
Ongelmaksi muodostuu kuitenkin helposti tietoturva, sillä palvelun
käyttäjän täytyy luottaa palveluntarjoajaan. Tunnetuimmat
pilvipalveluiden tarjoajat ovat kuitenkin suuria ulkomaisia yrityksiä,
joiden suhteista esimerkiksi
tiedustelupalvelu-[NSA](http://fi.wikipedia.org/wiki/NSA):han ei ole
tarkkaa tietoa. Muutenkin erityisesti yritysten ja julkisten tahojen
tulisi harkita tarkkaan, voivatko ne uskoa tietojaan ulkopuolisen tahon
säilytettäväksi.

OwnCloud tuo ongelmaan käytännön ratkaisun. Asentamalla
OwnCloud-ohjelmiston www-palvelimelle, voi rakentaa itselleen oman
pilvipalvelun, joka tarjoaa muun muassa tallennuspalvelun, kalenterin,
yhteystietojen tallennuksen ja paljon muuta. OwnCloud toimii
tavallisella www-palvelimella. Sen asennus on helppo ja asennuksen
jälkeen käyttäjä pääsee omiin tietoihinsa ja tiedostoihinsa käsiksi
mistä tahansa, mistä www-palvelin on saavutettavissa.

OwnCloudin tallennuspalvelua voi käyttää joko selainpohjaisella
käyttöliittymällä,
[WebDAV](http://en.wikipedia.org/wiki/WebDAV)-protokollaa käyttämällä
taikka synkronoimalla tietokoneen jonkin kansion automaattisesti
palvelun kanssa samaan tapaan kuin esimerkiksi Ubuntu One tai Dropbox
tekevät. Tiedostoja automaattisesti synkronoiva asiakasohjelma on
saatavilla ainakin Windows-, Mac OS X- ja Linux-alustoille.
OwnCloud-sovellukset löytyvät myös Android- ja iOS-laitteille. Palveluun
tallennettuja tiedostoja voidaan jakaa palvelun muille käyttäjille
suoraan palvelussa sekä lisäksi myös ulkopuolisille linkkeinä
esimerkiksi sähköpostin välityksellä. OwnCloud pitää automaattisesti
yllä palveluun tallennettujen tiedostojen versiohistoriaa, eli
tiedostojen aiemmat versiot ovat ladattavissa ja palautettavissa.

Tallennuspalveluun tallennetut kuvatiedostot OwnCloud näyttää
sisäänrakennetulla kuvasovelluksella kansioittain gallerioina. Näin
esimerkiksi puhelimesta automaattisesti palveluun synkronoidut kuvat
ovat helposti selattavissa ja näytettävissä. OwnCloud osaa näyttää
sisäänrakennetulla näyttimellä PDF-tiedostot sekä
[OpenDocument-muotoiset (ODF)](Vapaat_tiedostomuodot)
tiedostot. OwnCloudiin on [kuutosversiossa](http://owncloud.org/six/)
tuotu uutuutena mukaan "Documents"-toiminto, eli mahdollisuus myös
muokata ODT-muotoisia tekstidokumentteja suoraan selaimessa.
OwnCloudissa jaettuja ODT-tiedostoja on lisäksi mahdollista muokata yhtä
aikaa useammankin käyttäjän yhteistyönä.

Kalenteritietojen synkronointi useamman laitteen kesken alkaa olla melko
tärkeää, kun ihmiset käyttävät useita päätelaitteita erilaisissa
ympäristöissä. Useimmat puhelinalustat, Googlen Android, Applen iOS ja
Microsoftin Windows Phone, tarjoavat palveluna omia
verkkokalentereitaan. OwnCloud tarjoaa vaihtoehdon, jossa tallennettavat
kalenteritiedot ovat kuitenkin käyttäjän omassa hallinnassa omalla
palvelimella. Kalenteria voi käyttää selkeällä selainkäyttöliittymällä,
jossa on helppoa luoda uusia tapahtumia ja uusia kalentereita. OwnCloud
tarjoaa kalenterit myös standardissa
[CalDAV](http://en.wikipedia.org/wiki/CalDAV)-muodossa, jolloin ne on
helppoa saada näkyviin ja synkronoitumaan useimpiin puhelimiin ja
kalenteriohjelmiin.

Samaan tapaan kuin kalenteritietoja, voi OwnCloudissa säilyttää myös
yhteystietoja. Yhteystiedot ovat muokattavissa OwnCloudin
selainkäyttöliittymällä sekä käytettävissä ja synkronoitavissa
osoitetietojen siirtämiseen tarkoitetulla standardilla
[CardDAV](http://en.wikipedia.org/wiki/CardDAV)-protokollalla eri
laitteissa ja ohjelmissa. Yhteystietoihin tallennetut syntymäpäivät
näkyvät myös OwnCloudin kalenterissa.

OwnCloud sisältää useita sovelluksia, joita ylläpitäjä voi kytkeä
käyttöön ja pois. Näitä ovat muun muassa uutisvirtalukija, muistio sekä
tehtävälista. Uutisvirtalukijalla käyttäjä voi tallettaa ja seurata
useita [RSS](http://fi.wikipedia.org/wiki/RSS)- ja
[Atom](http://fi.wikipedia.org/wiki/Atom)-muotoisia uutisvirtoja
kootusti. Muistiolla voi kirjoittaa txt-päätteisiä tekstitiedostoja,
joita voi halutessaan muotoilla
[Markdown](http://en.wikipedia.org/wiki/Markdown)-syntaksilla.
Tehtävälistaan voi luetella tehtäviä, joille voi merkitä määräajan sekä
erilaisia leimoja, eli avainsanoja, joilla tehtävälistaa voi suodattaa.

OwnCloudiin voi asentaa lisää sovelluksia lataamalla niitä
[apps.owncloud.com](http://apps.owncloud.com/)-palvelusta. Eräs
tällainen sovellus on Music-sovellus, joka näyttää OwnCloudiin
tallennetut musiikkitiedostot esiintyjän ja levyn mukaan järjestettynä
luettelona ja joka sisältää yksinkertaisen soitto-ohjelman musiikin
soittamiseen selainkäyttöliittymässä.

OwnCloud on käytettävissä useilla kielillä, mukaan lukien suomi.
Www-palvelimeksi käy jokin PHP-kielen kanssa yhteen sopiva
palvelinohjelmisto, kuten Apache tai Nginx, ja tietokantana on
mahdollista käyttää Sqliteä, MySQL:ää (tai
[MariaDB](MariaDB):tä) taikka PostgreSQL:ää. Jos ohjelmistoa
aikoo käyttää muutenkin kuin vain kokeiluun, on erittäin suositeltavaa
ottaa käyttöön ssl-suojattu https-protokolla. [Useampikin
yritys](http://owncloud.org/providers/) tarjoaa OwnCloudia myös
palveluna.

Kotisivu
:   <http://owncloud.org/>

Lisenssi
:   [GNU AGPL](http://www.gnu.org/licenses/agpl-3.0.html)

Toimii seuraavilla alustoilla
:   Linux, FreeBSD, NetBSD, OpenBSD, Solaris, Mac OS X, Windows

Asennus
:   Ohjelman asennuspaketit löytyvät ohjelman kotisivujen kautta.
    Ladattavissa on lähdekoodipaketti tai joukko eri Linux-jakeluille
    openSUSE:n paketointipalvelulla valmiiksi paketoituja
    asennuspaketteja. Lisäksi tarjolla on erityisesti
    web-hotellikäyttöön suunnattu *Web Installer*, eli
    selainkäyttöliittymällä uusimman version verkosta hakeva ja
    asennuksen suorittava ohjelma.

Linkkejä
:   [Demo](http://demo.owncloud.org)

Videoita
:   [OwnCloud 6 -esittely](https://www.youtube.com/watch?v=70pCBnNPdew)

{{% wrapper class="psgallery" %}}
-   [OwnCloudin sisäänkirjautumissivu.](/images/owncloud-1.jpg)
-   [Ensimmäinen sisäänkirjautuminen toivottaa käyttäjän tervetulleeksi
    ja antaa linkkejä asiakasohjelmiin sekä
    ohjeisiin.](/images/owncloud-2.jpg)
-   [OwnCloudin tiedostonäkymässä on oletuksena valmiiksi kansiot
    asiakirjoille, musiikille ja kuville.](/images/owncloud-3.jpg)
-   [Sisäänrakennettu PDF-katselin osaa näyttää PDF-tiedostot varsin
    hyvin.](/images/owncloud-4.jpg)
-   [Documents-kansioon tallennettuja ODT- ja
    PDF-tiedostoja.](/images/owncloud-5.jpg)
-   [ODT-tiedoston katselu suoraan selaimessa.](/images/owncloud-6.jpg)
-   [Käyttäjän omat asetukset. Valittavissa muun muassa suomen
    kieli.](/images/owncloud-7.jpg)
-   [Palveluun ladatut kuvat näytetään kansiorakenteen mukaisesti
    gallerioina.](/images/owncloud-8.jpg)
-   [Gallerian kuvia voi selata.](/images/owncloud-9.jpg)
-   [Uutisvirtalukijaan voi tallentaa RSS- ja Atom-syötteitä ja lukea
    niitä kootusti.](/images/owncloud-10.jpg)
-   [Yhteystietoja voi muokata ja selata. Niitä voi myös tuoda ja viedä
    vcf-muodossa, joten yhteystietojen tuonti esimerkiksi GMailista
    onnistuu helposti.](/images/owncloud-11.jpg)
-   [Kalenterisovellukseen voi tehdä useampia kalentereita, joihin voi
    syöttää tapahtumia. Kalentereita voi käyttää CalDAV-standardilla
    muilla laitteilla ja ohjelmilla.](/images/owncloud-12.jpg)
-   [Kalenterin käyttäminen on helppoa ja yhteystietoihin syötetyt
    syntymäpäivät näkyvät kalenterissa.](/images/owncloud-13.jpg)
-   [Musiikkisovellus näyttää musiikkitiedostot esiintyjän ja levyn
    mukaan järjestettyinä. Minimaalinen soitto-ohjelma soittaa
    tiedostoja suoraan palvelimelta.](/images/owncloud-14.jpg)
-   [Tehtävälistaan voi syöttää tehtäviä, niiden määräaikoja sekä
    leimoja. Tehdyt tehtävät voi merkitä rastilla suoritetuiksi. Listaa
    voi järjestellä usealla tavalla sekä suodattaa leimojen
    mukaan.](/images/owncloud-15.jpg)
-   [Taustalla ODT-tiedosto muokkaustilassa, edustalla asiakasohjelman
    asetusten syöttäminen.](/images/owncloud-16.jpg)
-   [Valitaan paikallinen kansio OwnCloudiin
    synkronoitavaksi.](/images/owncloud-17.jpg)
-   [Synkronoitu kansio KDE:n
    Dolphin-tiedostonhallinnassa.](/images/owncloud-18.jpg)
-   [ODT-tiedosto editoitavana. Tiedoston voi jakaa toisen käyttäjän
    kanssa ja antaa hänelle muokkausoikeuden.](/images/owncloud-19.jpg)
-   [apps.owncloud.com-palvelusta voi ladata lisää sovelluksia
    OwnCloudiin.](/images/owncloud-20.jpg)
-   [Synkronointiasiakas suorittanut
    synkronoinnin.](/images/owncloud-21.jpg)
-   [Asiakasohjelma käynnistyy automaattisesti ja näyttää työpöydällä
    ilmoituksia, kun synkronointia tehdään.](/images/owncloud-22.jpg)
-   [Ylläpitäjän näkymässä voi laittaa sovelluksia päälle ja
    pois.](/images/owncloud-23.jpg)
-   [Kaksi käyttäjää muokkaa samaa ODT-tiedostoa yhtä aikaa. Toinen
    käyttäjä on tiedoston omistaja ja toinen on saanut sen
    muokattavakseen jaettuna tiedostona.](/images/owncloud-24.jpg)
-   [Muistiolla voi kirjoittaa tekstitiedostoja. Halutessaan voi käyttää
    Markdown-syntaksia.](/images/owncloud-25.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


{{% wrapper class="comments" %}}
Kommentit
---------

Suosittelen parin vuoden kokemuksella
:   Anonymous 3. Maaliskuu 2014 - 10:19
:   Moi, hyvä kun boostaat tuota softaa. Omana kortenani kekoon voin kehua 
    ownCloudia. Olen ajanut sitä pari vuotta, ja synkkaamme kaikki perheen 
    vekottimet sinne. Omalla freenas palvelimella tietty :) Projekti etenee hyvää 
    vauhtia, käytettävyys on parantunut niin, että viimeiseen puoleen vuoteen ei ole 
    ollut edes moittimista. Ennen sitä android client oli vähän epävarmempi 
    synkassa. t. ikke

{{% /wrapper %}}
