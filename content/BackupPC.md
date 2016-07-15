+++
Date = "2012-08-11T21:00:00.000Z"
Title = "BackupPC"
Description = "BackupPC varmistaa tiedostoja levyltä levylle paikallisverkossa olevilta koneilta tai etäyhteydellä Internetin yli."
Week = "2x33"
Number = "85"
Alustat = ["Linux","Windows","Mac OS X","Solaris","Unix"]
Tagit = ["Varmuuskopiointi"]
Type = "post"
Author = "Taleman"
Pageimage = "valo85-backuppc.png"
+++


**BackupPC varmistaa tiedostoja levyltä levylle paikallisverkossa
olevilta koneilta tai etäyhteydellä Internetin yli.**

![ ](/images/valo85-backuppc.png "fig:valo85-backuppc.png") Levytilan hinta
teratavua kohti on laskenut vuosien mittaan romahdusmaisesti samalla kun
levyjen koot ovat kasvaneet. Yksi osoitus tästä on levyjen koosta
käytetty yksikkö, aikoinaan megatavuja, sitten gigatavuja ja nyt
teratavuja. Niinpä on tarkoituksenmukaista ottaa
[varmuuskopiot](http://fi.wikipedia.org/wiki/Varmuuskopiointi) levylle,
eikä enää nauhalle.

[BackupPC](http://backuppc.sourceforge.net/) osaa kopioida useista
koneista halutut tiedostot varmuuskopioksi, josta voidaan suoraan
palauttaa tiedostoja samaan koneeseen tai muualle. Varmuuskopio voi olla
täysi tai
[inkrementaalinen](http://www.recall.fi/why-recall/data-protection-terminology).
BackupPC osaa tiedostojen
[deduplikoinnin](http://www.tietoviikko.fi/taustat/deduplikointi+laakitsee+dataturvotusta/a317122),
eli sama tiedosto tallennetaan vain kerran. Kun varmuuskopio otetaan
joka päivä, ovat useimmat tiedostot samoja kuin eilen, eli tiedoston
sisällön tallentaminen toiseen kertaan olisi turhaa. Lisäksi
varmistettaessa useita koneita on niissä usein samoja tiedostoja.

<div markdown="1" class="rightimage">
![ ](/images/BackupPC-07.jpg "fig:BackupPC-07.jpg")
</div>
BackupPC osaa tehdä arkiston tiedostoista. Tämä arkisto voidaan
tallentaa muullekin kuin levytaltiolle, vaikkapa nauhalle tai optiselle
levylle. Arkisto voidaan sitten kiikuttaa palosuojakaappiin, toiseen
kaupunkiin tai pankin tallelokeroon.
Nauhoille varmistaminen on hankalaa jos ei ole
[nauharobottia](http://www.itviikko.fi/ratkaisut/2007/05/31/nauharobotti-varmistaa-viikkotolkulla-putkeen/200713406/7)
[vaihtamassa](http://www.digitoday.fi/vimpaimet/2006/03/15/nauharobotti-poydalle/20065703/66)
nauhoja. Kiintolevyjen kapasiteetti on suurempi kuin nauhakasetin, joten
uusia kasetteja täytyisi vaihtaa kesken kopioinnin. Nauhakasetti pitäisi
joka tapauksessa vaihtaa päivittäin, jotta nauhat kiertävät ja
edellinenkin varmistus on tallessa. Levylle varmistamalla ei ole näitä
ongelmia, ja isoja levyjä on saatavilla ja vieläkin isompia saa
tekemällä useasta levystä
[RAID-tekniikalla](http://fi.wikipedia.org/wiki/RAID).

Tiedonsiirtoon käytetään
[yhteyskäytäntöjä](http://fi.wikipedia.org/wiki/Protokolla_(tietoliikenne))
smb, tar, rsync ja ftp. Jokin näistä toiminee asiakaskoneessa, siihen ei
siis ole pakollista asentaa lisäohjelmia. BackupPC:stä ei ole
asiakaskoneelle tarkoitettua versiota, sitä siis ei ainakaan tarvitse
asentaa. Jos haluaa käyttää
[rsync-yhteyskäytäntöä](http://en.wikipedia.org/wiki/Rsync), pitänee se
asentaa sekä palvelimeen että asiakaskoneeseen, koska rsync ei kaikissa
Linuxeissakaan tule vakioasennuksessa. Myös Windowsille on saatavilla
rsync BackupPC:n [käsikirjan
mukaan](http://backuppc.sourceforge.net/faq/BackupPC.html#step_5__client_setup).

Linux-koneiden varmistus on varsin suoraviivaista. Palvelinkoneen
käyttäjälle backuppc (ohjelman asennus luo tämän käyttäjän) sallitaan
pääsy ssh-avaimella varmistettaville koneille. Tämä tapahtuu luomalla
ssh-avain tyhjällä salasanalla ja kopioimalla avaimen julkinen osa
**ssh-copy-id**:llä varmistettavien koneiden root-käyttäjälle. Mikäli
tämä tapa tuntuu liian turvattomalta, voi toisia tapoja katsoa
[wikistä](http://backuppc.sourceforge.net/faq/ssh.html#how_can_client_access_as_root_be_avoided).
Lisää aiheesta löytyy [Brian Hatchin
artikkelin](http://www.hackinglinuxexposed.com/articles/20021211.html)
osasta
[kolme](http://www.hackinglinuxexposed.com/articles/20030109.html).
Windows-koneelta en vielä ole onnistunut varmuuskopiota saamaan, pitää
yrittää lisää.

Yksi niksi BackupPC:n palvelimella pitää muistaa.
Konfiguraatiotiedostossa voi muuttaa hakemiston johon BackupPC
kirjoittaa varmuuskopioita, mutta sitä ei pidä siellä muuttaa. Toimiva
tapa on muuttaa oletushakemisto linkiksi sinne mihin varmuuskopiot
haluaa. Tämä nähtävästi johtuu hieman hutiloiden kirjoitetusta koodista,
jossa oletushakemisto on vakiona monessa paikkaa. Jos asetustiedostossa
muuttaa tätä, osa ohjelmaa käyttää muutettua ja osa alkuperäistä,
jolloin tiedostot eivät ole kaikki samalla tiedostojärjestelmällä ja
BackupPC ei voi luoda hard linkkejä tiedostoihin. Jos tämän virheen on
mennyt tekemään, oire on että varmuuskopiot näyttävät menevän OK, mutta
BackupPC:n Spool ei kasva koska linkkejä ei saada tehtyä. Lokiin tulee
kyllä virheilmoituksia, eli tarkka varmuuskopioitsija huomaa jotain
olevan pielessä.

Toinen hieman hölmö ominaisuus on palvelinkoneen varmistukset.
BackupPC:n asennus pistää sen automaattisesti käyntiin varmistamaan
hakemistopuun **/etc**, mutta käyttäjänä backuppc jolla ei ole
lukuoikeutta kaikkiin tiedostoihin. Esimerkiksi **/etc/shadow** jää
varmuuskopioimatta.

Vallan on hyvä tämä ohjelmisto. Varmuuskopiot tulevat automaattisesti
päivittäin. Jos varmistettava kone ei ole käynnissä, BackupPC yrittää
uudelleen tasatunnein kunnes varmistus onnistuu. On mahdollista saada
lähetettyä sähköposti varoittamaan koneen haltijaa jos liian pitkään
menee ilman varmistusta. Kun varmistukset saa pyörimään, toimii
järjestelmä omia aikojaan.

Kotisivu
:   <http://backuppc.sourceforge.net/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, Solaris, Unix palvelimelle, asiakaskoneet lisäksi MacOS,
    Windows.

Asennus
:   Linux-jakeluissa tulee jakelun omista pakettivarastoista. Solaris ja
    muut Unixit: nouda kotisivulta. Asiakaskoneisiin ei asenneta
    BackupPC:tä.

Käyttöohjeet
:   Sisäänrakennettu ohje webbikäyttöliittymässä englanniksi
:   [Dokumentaatio
    englanniksi](http://backuppc.sourceforge.net/faq/BackupPC.html)
:   [Wiki](http://sourceforge.net/apps/mediawiki/backuppc/index.php?title=Main_Page)
:   [BackupPC Install Guide for Windows 7/Vista/XP Clients & Ubuntu
    Server](http://www.cs.umd.edu/~cdunne/projs/backuppc_guide.html)

{{% wrapper class="psgallery" %}}
-   [Yleiskatsaus palvelimen tilasta](/images/BackupPC-01.png)
-   [Asiakaskoneiden tilanne](/images/BackupPC-02.png)
-   [Webbikäyttöliittymä asetuksille](/images/BackupPC-03.png)
-   [Lokista näkee mitä tehtiin](/images/BackupPC-04.png)
-   [Webbikäyttöliittymästä pääsee suoraan ohjeisiin](/images/BackupPC-05.png)
-   [Palvelin ollut käytössä useita viikkoja](/images/BackupPC-06.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman* <br />
*Valokuva: Taleman*

