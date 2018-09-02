+++
date = "2018-09-01T15:02:01+03:00"
Title = "Nextcloud"
Description = "Nextcloud on pilvipalvelualusta, jonka voi asentaa omalle palvelimelle. Omassa ylläpidossa oma data on omassa hallinnassa."
Week = ""
Number = 1
Alustat = ["Linux"]
Tagit = ["Palvelin", "Pilvipalvelu"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo247-nextcloud.png"

+++

**Nextcloud on pilvipalvelualusta, jonka voi asentaa omalle palvelimelle. Omassa ylläpidossa oma data on omassa hallinnassa.**

![ ](/images/valo247-nextcloud.png "fig:valo247-nextcloud.png")

Kun on tarve käyttää pilveen synkronoitavia palveluita, kuten tiedostojen, yhteystietojen ja kalenterin synkronointia useamman laitteen välillä,
muttei halua luottaa tietojaan suurten palveluntarjoajien haltuun, on itse omalla palvelimella ylläpidettävä Nextcloud hyvä vaihtoehto.
Näkyvimpänä ominaisuutena Nextcloudissa on tiedostojen pilvitallennus, joka vastaa esimerkiksi Dropbox-, GoogleDrive- ja OneCloud-palveluita.
Sen lisäksi Nextcloud voi kuitenkin sisältää myös monia muita sovelluksia, joita siihen on mahdollista asentaa sisäänrakennetun sovellusvalikoiman kautta.
Sovellustarjontaa voi selata myös sivustolla [apps.nextcloud.com](https://apps.nextcloud.com/).

{{% wrapper class="rightimage" %}}
![ ](/images/nextcloud-logo.svg "fig:nextcloud-logo.svg")
{{% /wrapper %}}
sovellustarjonnasta löytyy muun muassa:

- **Galleria** tallennettujen kuvien näyttämiseen
- **Kalenteri** tapahtumien merkitsemiseen
- **Yhteystiedot** käytettäväksi esimerkiksi sähköpostisovelluksiin ja mobiililaitteisiin synkronoituina
- **Toimisto-ohjelmistot** websovelluksina (LibreOfficeen pohjautuva Collabora Online ja [OnlyOffice](OnlyOffice))
- **Video- ja tekstikeskustelu** turvalliseen videokonferenssien pitämiseen ja keskusteluiden käymiseen
- **Webmail-sovelluksia**: yksinkertaisempi Mail sekä laajempi ja monipuolisempi RainLoop
- **Muistiinpanotyökaluja** esimerkiksi Markdown-kieltä käyttäen
- **Musiikkisovellus** Nextcloudiin tallennetun musiikin kuunteluun ja vaikka streamaamiseen Ampache-yhteensopivasti
- **RSS-lukija** palvelimelle tallennettujen RSS-syötteiden lukemiseen
- **Kanban-taulusovellus** tehtävien hallintaan
- **GPS-jäljen katselu- ja muokkaussovellukset** vaikka juoksulenkeiltä tallennettujen gpx-tiedostojen hallintaan

Näillä ja muilla tarjolla olevilla sovelluksilla varustettu Nextcloud on varteenotettava vaihtoehto esimerkiksi
Googlen verkkosovelluspaketille tai Microsoftin Office 365:lle.

Tiedostojen tallennusta voi käyttää suoraan www-selaimella, synkronointisovelluksella, joka kopioi tiedostoja automaattisesti
palvelimen ja asiakaslaitteen välillä, taikka sopivalla tiedostonhallintaohjelmalla.
Tiedostojen tallennus Nextcloudiin on toteutettu standardina [WebDAV](https://en.wikipedia.org/wiki/WebDAV)-palveluna,
joten tiedostojen kopiointi onnistuu siis millä tahansa WebDAV-protokollaa osaavalla ohjelmalla.

Vastaavasti kalenteripalvelu ja yhteystietopalvelu on toteutettu CalDAV- ja CardDAV-palveluina, jotka ovat WebDAVin laajennuksia.
Näillä standardeilla kalenterimerkinnät ja yhteystiedot on helppoa synkronoida näkymään esimerkiksi mobiililaitteissa tai
työpöytätietokoneen kalenteri- ja sähköpostisovelluksissa.

Asiakassovellukset
------------------

Tiedostojen synkronointisovellus löytyy **Linux**-, **Windows**- ja **Mac OS** -järjestelmille. Sovellukselle osoitetaan hakemisto (kansio),
johon se synkronoi palvelimella olevat tiedostot. Vastaavasti tähän hakemistoon kopioidut tai siellä muokatut tiedostot synkronoidaan
palvelimelle. Sovellukseen voi liittää useampia käyttäjätilejä ja Nextcloud-palvelimia ja ne kukin synkronoidaan omiin hakemistoihinsa.
Asetuksista voidaan lisäksi valita hakemistokohtaisesti, jos jotain hakemistoa ei halutakaan synkronoida kyseiselle laitteelle.
Ohjelmalle voidaan antaa kokorajoitus, jota suurempia hakemistoja ei synkronoida ilman käyttäjän antamaa lupaa.

Vastaavasti Nextcloud-sovellukset löytyvät myös mobiililaitteille **Android**- ja **iOS**-alustalle.
Nämä eivät synkronoi tiedostoja automaattisesti laitteelle vaan mobiilisovelluksella on mahdollista selata Nextcloudissa olevia tiedostoja,
ladata niistä halutut paikallisesti katseltavaksi, poistaa niitä joko laitteelta tai palvelimelta,
sekä lähettää palvelimelle uusia tiedostoja. Nextcloud onkin kätevä keino siirtää tiedostoja tietokoneen ja mobiililaitteen välillä.

Erityisen hyödyllinen toiminnallisuus on "**Automaattinen lähetys**" -toiminto, jolla voidaan valita mobiililaitteelta kansioita,
joihin tallennetut kuvat tai videot lähetetään automaattisesti palvelimelle. Käytännössä tällä toiminnolla puhelimen saa lähettämään
otetut valokuvat heti Nextcloudiin, josta ne synkronoituvat tietokoneelle. Toiminnolle voidaan haluttaessa asettaa rajoitus, että
tiedostot lähetetään vain wifi-yhteyden kautta, jolloin ne lähetetäänkin esimerkiksi vasta, kun käyttäjä tulee kotiin oman langattoman
verkon ääreen. Tällä voi säästää puhelimen data-liittymästä riippuen sekä rahaa että tietoliikennekaistaa.
Tämä voi olla järkevää erityisesti videotiedostojen kanssa. Itse otettujen kuvien lisäksi tällä toiminnolla voidaan palvelimen
kautta synkronoida talteen myös vaikka pikaviestinten, kuten WhatsApp, kautta vastaanotetut mediatiedostot.
Automaattisessa lähetyksessä kullekin synkronoitavalle kansiolle voidaan määrätä eri sijainti, johon ne lähetetään palvelimella.
Lisäksi kuvat voidaan lajitella alikansioihin vuoden ja kuukauden mukaan, jolloin ne ovat helpommin selattavissa.

Muita mobiilisovelluksia
-------------------------------

Tiedostosovellusten lisäksi on useita Nextcloudin kanssa käytettäväksi tarkoitettuja tai sen kanssa yhteensopivia
mobiilisovelluksia.

Android-laitteen saa käyttämään Nextcloudiin tallennettuja yhteystietoja ja kalenterimerkintöjä
asentamalla siihen niiden synkronointiin käytettävän DAVdroid-ohjelmiston.
DAVdroid on avointa lähdekoodia ja se löytyy sekä [Play-kaupasta](https://play.google.com/store/apps/details?id=at.bitfire.davdroid)
(maksullisena) että [F-Droidista](https://f-droid.org/en/packages/at.bitfire.davdroid/) (ilmaisena).

Muita Android-laitteille saatavia sovelluksia ovat ainakin:

- [Nextcloud Talk](https://f-droid.org/en/packages/com.nextcloud.talk2) videopuheluiden ja chat-viesteihin,
- [Notes](https://f-droid.org/en/packages/it.niedermann.owncloud.notes) muistiinpanojen tekemiseen,
- [OCReader](https://f-droid.org/en/packages/email.schaal.ocreader) palvelimelle tallennettujen RSS-virtojen lukemiseen,
- [Nextcloud News](https://f-droid.org/en/packages/de.luhmer.owncloudnewsreader/) toinen RSS-lukija,
- [Nextcloud Bookmarks](https://f-droid.org/en/packages/org.schabi.nxbookmarks) web-kirjanmerkkien ylläpitoon ja käyttöön,
- [Save to nextcloud Bookmarks](https://f-droid.org/en/packages/com.tttdevs.stncbookmarks/) kirjanmerkkien tallentamiseen suoraan selaimesta jakotoiminnolla,
- [Power Ampache](https://f-droid.org/en/packages/com.antoniotari.reactiveampacheapp/) musiikin toistamiseen streamaamalla suoraan Nextcloudin Ampache-yhteensopivasta Music-sovelluksesta,
- [Joplin](Joplin) muistiinpanosovellus

Sailfish OS -laitteilla Cargo Dock -tiedostonhallinta osaa myös Nextcloud-/ownCloud-yhteydet.

Lisäksi löytyy myös muita sovelluksia, jotka tukevat joko suoraan Nextcloudia taikka WebDAV-protokollaa.

Jakaminen ja federointi
-----------

Yhtenä keskeisenä toimintona Nextcloudissa on tietojen ja tiedostojen jakaminen sekä Nextcloudin käyttäjien kesken että muille.
Tiedoston tai hakemiston voi jakaa suoraan web-sivulla tiedostonäkymässä painamalla jakokuvaketta ja valitsemalla halutun jakotavan.
Jaon voi tehdä joko **saman Nextcloudin** käyttäjille, **toisen Nextcloud-palvelimen** käyttäjille taikka **linkillä** kenelle tahansa.

Toisen Nextcloud-palvelimen käyttäjään voi viitata tämän **federoidulla pilvi-id:llä** (Federated Cloud ID). Tämä id on muotoa:
`username@example.com/nextcloud`. Eri Nextcloud-palvelimet muodostavat yhdessä siis [federoidun pilven](https://nextcloud.com/federation/)
ja niiden käyttäjät voivat viitata toisiinsa samaan tapaan kuin lähetettäessä sähköpostia yhdellä sähköpostipalvelimella
olevalta tililtä toiselle.

Linkillä jaettaessa taas Nextcloud luo jaolle muotoa
`https://example.com/nextcloud/index.php/s/jfDYJDijiJmr3ok` olevan satunnaisen osoitteen, jota käyttämällä sisältöön pääsee käsiksi.

Jaon vastaanottajalle voi myöntää erilaisia oikeuksia resurssiin. Näitä ovat:

- uudelleenjakaminen,
- tiedostojen luominen,
- tiedostojen vaihtaminen ja
- tiedostojen poistaminen.

Jaoille voi lisäksi määrätä **vanhenemispäivämäärän**. Tämä on erityisen kätevää,
kun jako tehdään linkillä ja on tarkoitettu väliaikaiseksi. Näin linkillä tehtyjä jakoja
ei tarvitse muistaa käydä erikseen siivoamassa, kun asia on hoidettu.

Jakoja voi tehdä myös mobiilisovelluksessa, jolloin esimerkiksi jossain tapahtumassa otetut ja Nextcloudiin synkronoidut kuvat
on helppoa jakaa muille osallistuneille.

Joihinkin tiedostohallintaohjelmiin, kuten [Dolphin](Dolphin), on sisäänrakennettuna tuki Nextcloudille, mukaan lukien
mahdollisuus jakojen tekemiseen.

Tiedostojen lisäksi jaettavissa ovat erityisesti kalenterit. Nextcloudiin on helppoa luoda esimerkiksi perheen yhteinen
**jaettu kalenteri**, jonka sisältö näkyy kaikkien perheenjäsenten puhelimessa ja johon joko kaikilla tai vain osalla perheenjäsenistä
on mahdollisuus lisätä tapahtumia ja muistutuksia.


Ulkoiset tallennuspalvelut
--------------------------

Käyttämällä "External Storage" -sovellusta, Nextcloud pystyy käyttämään ulkoisia tallennuspalveluita, kuten Google Drive,
Dropbox, Amazon S3, SMB/CIFS -tiedostopalvelimia sekä FTP-palvelimia. Näitä käyttämällä esimerkiksi Nextcloudiin
siirtyvä yritys voi saada aiemmat tallennusratkaisunsa näkymään suoraan Nextcloudissa.


Tiedon salaus
-------------

[Tiedon salausta](https://nextcloud.com/blog/encryption-in-nextcloud/) on mahdollista käyttää useammalla eri tasolla.
Ensimmäisenä on tietenkin verkkoyhteyksien salaus https-yhteyksillä.

Toisena tasona on palvelimella tapahtuvan tallennuksen salaus, joka voi olla joko palvelin- tai käyttäjäkohtaista.
Koska tässä tapauksessa salausavaimet ovat palvelimella, tämä salaus on oleellista erityisesti ulkoisia tallennuspalveluita käytettäessä.

Kolmantena tasona on asiakaslaitteella tapahtuva päästä päähän salaus.  Tässä vaihtoehdossa tiedostot eivät missään
vaiheessa päädy palvelimelle salaamattomina. Tällä salaustavalla kuitenkin menetetään luonnollisestikin joitain
Nextcloudin ominaisuuksia, kuten tiedostojen online-muokkaus sekä julkinen jakaminen.


Valmiit palvelinlaitteet
------------------------

Nextcloud-palvelimen voi asentaa itse omalle palvelimelle, mutta on myös mahdollista ostaa
[pieniä valmiita laitteita](https://nextcloud.com/devices/)
valmiiksi asennetulla Nextcloudilla. Omaa palvelinta asentaessa tai valmiiksi asennettua hankkiessa
kannattaa pitää mielessä, minkälainen tarve Nextcloudille on. Käytetäänkö sitä suurten tiedostojen
siirtelyyn ja miten paljon? Esimerkiksi osa valmiista ratkaisuista pohjautuu Raspberry Pi -tietokoneille,
joissa pullonkaulana on erityisesti levy- ja verkkoliikenteen kapasiteetti. Ahkeraan tiedostojen siirtoon ja videokonferensseihin
kannattaa harkita siis jykevämpää palvelinlaitteistoa.

Palveluntarjoajat
-----------------

Nextcloudille löytyy myös useita kaupallisia [palveluntarjoajia](https://nextcloud.com/providers/), joiden
tarjonta vaihtelee itse ylläpidettävistä virtuaalipalvelimista "avaimet käteen" -periaatteella toimiviin
palveluihin, joissa asiakkaan tarvitsee vain käyttää ja maksaa.

Nextcloud julkishallinnossa
---------------------------

Viime vuosina erityisesti Edward Snowdenin paljastusten ja EU:n GDPR-säädösten jälkeen useat valtiolliset
toimijat ovat heränneet siihen, että voi olla järkevää hallinnoida omaa dataa omilla palvelimilla sen
sijaan, että käytetään ulkomaisia, yleensä amerikkalaisia, pilvipalveluita. Tässä tilanteessa avointa
lähdekoodia oleva ja EU:n sisältä Saksasta alkujaan lähtöisin oleva Nextcloud on erinomainen vaihtoehto.

Keväällä 2018 [Saksan liittovaltion hallinto](https://www.techradar.com/news/german-government-goes-open-source-with-open-source-cloud-firm-nextcloud)
päätti ottaa käyttöön Nextcloudin.


Historiaa
-------------

Nextcloud syntyi vuonna 2016, kun [ownCloudin](ownCloud) alkuperäinen kehittäjä [Frank Karlitschek](https://en.wikipedia.org/wiki/Frank_Karlitschek)
ja joukko muita ownCloudin kehittäjiä lähti ownCloud-yhtiöstä. He perustivat uuden yhtiön, Nextcloud GmbH:n, ja jatkoivat ohjelmiston kehitystä
uutena haarana (fork) nimellä Nextcloud. Nextcloudin kehitys eroaa ownCloudin kehityksestä aatteellisin ja teknisin seikoin.

Nextcloudin väki ei antanut virallista lausuntoa ohjelmiston haarautumisen ja ownCloudista eroamisen syistä. Niitä voidaan kuitenkin
päätellä muista lausunnoista ja Nextcloudin, sekä ohjelmiston että yrityksen, ottamasta suunnasta. Nähtävästi kyse oli erityisesti
businessihmisten ja open source -henkisen koodariväen ristiriidasta. Frank Karlitschekin
[esiin nostamia kysymyksiä](http://karlitschek.de/2016/04/big-changes-i-am-leaving-owncloud-inc-today/) olivat:
"*Kuka omistaa yhteisön?*", "*Kuka omistaa itse ownCloudin?*", "*Kumpi on tärkeämpää, lyhyen tähtäimen raha vai pitkän tähtäimen vastuullisuus ja kasvu?*"

Aatteellisesti yhtiöiden ja projektien toiminnat eroavat esimerkiksi siinä, että ownCloudista on tarjolla erikseen avoimen lähdekoodin yhteisöversio
(community edition) ja suljettu kaupallinen versio (Enterprise Edition). Nextcloudista on kuitenkin vain yksi avoimen lähdekoodin versio.
Nextcloud tekee liiketoimintansa, kuten niin moni muukin avoimen lähdekoodin ohjelmistoyritys, tarjoamalla yrityksille maksullista tukea ja konsultointia.
Nextcloud painottaa myös ownCloudia enemmän kehittäjä- ja käyttäjäyhteisön tärkeyttä ja vapautta. Koska ownCloudista on tarjolla myös
suljettu Enterprise Edition, joutuvat ownCloudin kehittäjät hyväksymään CLA-sopimuksen (Contributor License Agreement), jonka perusteella
heidän koodinsa käyttäminen suljetussa tuotteessa on mahdollista. Koska Nextcloud on kokonaan tarjolla avoimen lähdekoodin lisenssillä,
ei sen kehittäjiltä vaadita CLA-sopimusta ja siksi kynnys osallistumiseen on matalampi.

Nextcloudin kehittäjät antoivat jossain haastattelussa ymmärtää, että ownCloud yhtiönä keskittyi ainakin jossain vaiheessa erityisesti
tiedostojen pilvitallennukseen, kun kehittäjät ja yhteisö näkivät ohjelmiston laajemmin alustana erilaisille pilvipalveluille.
Nextcloudin avoimempi kehitysmalli antoi kehittäjien keskittyä vapaammin erilaisten sovellusten kehittämiseen Nextcloud-alustan päälle.




Kotisivu
:   <https://nextcloud.com/>

Lisenssi
:   [GNU AGPL](https://www.gnu.org/licenses/agpl-3.0.html)v3

Palvelin toimii seuraavilla alustoilla
:   Linux

Asiakasohjelmia saatavilla seuraaville alustoille
:   Windows, MacOS, Linux, Android, iOS

Asennus
:   Latauslinkit ja -ohjeet löytyvät ohjelman kotisivulta. 

Muita vastaavia
:   [ownCloud](ownCloud)

Logo
:   Lähde: <https://github.com/nextcloud/promo>
:   "Nextcloud promotion material like logos, sticker templates, flyers and presentation slides. Everyone is welcome to print material and present Nextcloud at events – permission is not needed, everyone in the community can help! :)"

{{% wrapper class="psgallery" %}}
-   [Nextcloudin sisäänkirjautumisnäkymä. Värin ja kuvituksen voi ylläpitäjä valita.](/images/nextcloud-1.jpg)
-   ["Tiedostot" on Nextcloudin oletusnäkymä.](/images/nextcloud-2.jpg)
-   [Nextcloudin sovellukset ovat valittavissa yläpalkin kuvakkeista. Galleria näyttää koosteen Nextcloudiin tallennetuista kuvista kansiorakenteen mukaisesti.](/images/nextcloud-3.jpg)
-   [Yhteystiedot ovat helposti selattavissa ja muokattavissa sekä synkronoitavissa mobiililaitteiden ja sähköpostiohjelmien kanssa.](/images/nextcloud-4.jpg)
-   [Kalenterissa voi olla useampia omia, jaettuja tai muualta tuotuja kalentereita. Mukaan lukien yhteystietojen syntymäpäivät.](/images/nextcloud-5.jpg)
-   [Kirjanmerkkisovelluksella kaikki mielenkiintoiset kirjanmerkit saa koottua helposti ja asiasanoilla merkittyinä yhteen paikkaan. Selaimeen lisättävällä bookmarkletilla uusien kirjanmerkkien lisääminen Nextcloudiin on helppoa.](/images/nextcloud-6.jpg)
-   [Rainloop on webmail-sovellus, jota on mahdollista käyttää Nextcloudiin upotettuna. Sillä voi käyttää useampaa IMAP-tiliä ja se on teemoitettavissa tilikohtaisesti.](/images/nextcloud-7.jpg)
-   [GpxPod-sovellus näyttää palvelimelle ladataut gpx-tiedostot OpenStreetMap-karttapohjalla. Liikuntadataa ei aina tarvitse lähettää ulkopuolisen palvelun hallinnoitavaksi.](/images/nextcloud-8.jpg)
-   [Deck on kanban-taulusovellus, jolla voi organisoida ja vaiheistaa työtehtäviä.](/images/nextcloud-9.jpg)
-   [Palvelimen ylläpitäjä voi helposti selata käytössä olevia ja asennettavissa olevia sovelluksia sekä päivittää, asentaa tai poistaa niitä.](/images/nextcloud-10.jpg)
-   [Nextcloudin Android-sovellus](/images/nextcloud-11.jpg)
-   [Automaattisen lähetyksen asetukset mobiilisovelluksessa.](/images/nextcloud-12.jpg)
-   [Notes-mobiilisovellus synkronoi itsensä Nextcloud-palvelimelle ja toimii yhdessä saman nimisen Nextcloud-muistiinpanosovelluksen kanssa.](/images/nextcloud-13.jpg)
-   [Nextcloud News -mobiilisovellus synkronoituu Nextcloudin selainpohjaisen News-RSS-lukijan kanssa.](/images/nextcloud-14.jpg)
-   [Kirjanmerkkisovelluksen kanssa toimiva mobiilisovellus.](/images/nextcloud-15.jpg)
-   [Power Ampache kykenee streamaamaan musiikkia Nextcloudin Ampache-yhteensopivasta Musiikki-sovelluksesta.](/images/nextcloud-16.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*
