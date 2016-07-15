+++
Date = "2012-12-08T22:00:00.000Z"
Title = "Subversion"
Description = "Subversion on versionhallintajärjestelmä, varsin suosittu vapaissa ohjelmistoprojekteissa."
Week = "2x50"
Number = "102"
Alustat = ["Linux","Mac OS X","Windows","FreeBSD","OpenBSD","NetBSD","Solaris","Unix","Android"]
Tagit = ["Ohjelmointi","Versionhallinta"]
Type = "post"
Author = "Taleman"
Pageimage = "valo102-subversion.png"
+++


**Subversion on versionhallintajärjestelmä, varsin suosittu vapaissa
ohjelmistoprojekteissa.**

![ ](/images/valo102-subversion.png "fig:valo102-subversion.png")
[Versionhallinnalla](http://fi.wikipedia.org/wiki/Versionhallinta)
hallitaan muutosta. Erityisesti ohjelmistoprojekteissa on tarpeen pitää
kirjaa ohjelmakoodiin tehdyistä muutoksista. Versionhallintajärjestelmä
näyttää milloin ja mikä muutos on tehty, kuka sen teki ja mahdollisesti
muutakin tietoa. Versionhallintajärjestelmästä on saatavilla halutun
tiedoston vanhakin versio, tai voi verrata tiedoston kahta versiota.
Tästä on hyötyä, jos ohjelma toimi toissapäivänä mutta ei toimi nyt, ja
halutaan nähdä mitä on muuttunut.

[Ohjelmistoprojektien](http://fi.wikipedia.org/wiki/Ohjelmiston_versiohallinta)
lisäksi mitä tahansa projektia, jossa käsitellään tiedostoja voi pyrkiä
saamaan ruotuun versionhallinnalla. Erityisesti versionhallinta sopii,
jos tiedostot ovat tekstitiedostoja, koska tällöin
versionhallintajärjestelmä pystyy muodostamaan
[deltan](http://en.wikipedia.org/wiki/Delta_encoding), eli kahden
peräkkäisen tiedostoversion välisen eron. Tästä on hyötyä tallennustilan
säästönä, voidaan esimerkiksi tallentaa tiedoston ensimmäinen versio
kokonaan ja sen jälkeen vain deltat, joista sitten pystytään
muodostamaan tiedoston haluttu versio.

Versionhallintajärjestelmiä on useita. Yksi varsin suosittu on
[Subversion](http://en.wikipedia.org/wiki/Apache_Subversion). Subversion
kehitettiin alun perin
[<CVS:n>](http://en.wikipedia.org/wiki/Concurrent_Versions_System)
korvaajaksi. Tavoitteena oli lisätä CVS:tä puuttuvat
ominaisuudet ja korjata kiusaavat viat. Projekti keskittyi
tavoitteeseensa eikä alkanut kehittämään versionhallintajärjestelmää
joka korvaisi kaikki versionhallintajärjestelmät, niinpä projekti
valmistuikin ajallaan ja lopputulos oli
[hyvä](http://www.businesswire.com/news/home/20050323005246/en/CollabNet-Subversion-Wins-Jolt-Product-Excellence-Award).
Wikipedia vertailee versionhallintajärjestelmiä:
[Comparison_of_revision_control_software](http://en.wikipedia.org/wiki/Comparison_of_revision_control_software).

Toinen tunnettu ja suosittu vapaa versionhallintajärjestelmä on
[Git](http://fi.wikipedia.org/wiki/Git). Toisin kuin Subversion, Git on
hajautettu versionhallintajärjestelmä, ts. jokainen "asiakas" tallentaa
kaiken projektin tiedon ja voi toimia myös "keskuspalvelimena". Git
suunniteltiin nimenomaan Linux-ytimen kehitysprojektille, mutta
käyttäjiä on hyvin paljon muitakin. Tässä
[pikakurssissa](http://git.or.cz/course/svn.html) näytetään miten sama
asia tehdään Git:llä ja Subversionilla.

Käytettäessä versionhallintaa noudetaan ensin työkopio versionhallinnan
varastoalueelta (check-out). Terminologia vaihtelee hieman eri
versionhallintajärjestelmissä, mutta Subversionissa varastoalue nimetään
repositoryksi. Työkopiota muokataan, eli tiedostoja muutetaan, lisätään
tai poistetaan. Tässä vaiheessa tulisi tarkistaa työkopion tiedostojen
olevan kunnossa, esimerkiksi ohjelmoitaessa katsotaan ettei kääntäjä
ilmoita virheistä tiedostoissa. Työkopio tallennetaan varastoalueelle
toiminnolla commit (eli tehdään check-in). Tästä työnkulusta on kaavio
kuvassa [SVN Työnkulkukaavio](/images/Svn-tyonkulkukaavio.png).

Projektin muut työntekijät menettelevät samalla tavalla. Muiden tekemät
muutokset saa omaan työkopioonsa tekemällä **svn update**, se noutaa
varastoalueelta muutokset omaan työkopioon. Tämän jälkeen varastoalue ja
oma työkopio ovat synkronissa.

Halutun version voi merkitä, eli tehdään sille tag. Komennolla **svn
copy** luodaan nimetty snaphot, jossa on halutun version mukaiset
tiedostot koko projektista. Esimerkiksi julkaistaessa versio halutaan
myöhemminkin päästä käsiksi tiedostoihin juuri sellaisina kuin ne olivat
versiota julkaistaessa.

```
$ svn copy http://svn.example.com/repos/calc/trunk \
   http://svn.example.com/repos/calc/tags/release-1.0 \
   -m "Tagging the 1.0 release of the 'calc' project." \
Committed revision 902.
```

Kun julkaisun jälkeen jatketaan projektin kehittämistä, tarvitaan
kehityshaaroja. Seuraavaa versiota kehitetään päähaarassa (joka
Subversionissa on trunk), vanhaan versioon tehdään korjauksia
sivuhaarassa joka nimetään julkaistun version mukaan tai miten nyt
halutaan. Vanhan version vikoja korjaavat ohjelmoijat noutavat
työkopiokseen sivuhaaran, uutta versiota kehittävät käyttävät päähaaraa.
Tarvittaessa voidaan limittää muutoksia haarojen välillä, esimerkiksi
sivuhaarassa on korjattu vika joka on myös päähaarassa, tällöin
limitetään muutos päähaaraan (**svn merge**).

Subversion ja muutkin versionhallintajärjestelmät toimivat myös
varmuuskopiona. Kun käsiteltävät tiedostot on tallennettu
versionhallintaan, ovat tiedostot sieltä saatavissa jos onnistuu
hävittämään ne työkopiostaan. Mikäli versionhallinnan varastoalue on
etäkoneella, saa versioidut tiedostot takaisin vaikka oma tietokone
tuhoutuisi kokonaan.

Subversionin ensimmäinen versio julkaistiin 12 vuotta sitten 20.
lokakuuta vuonna 2000. Hieman
[historiaa](http://www.open.collab.net/community/subversion/articles/SubversionHistory.html)
Subversionista. Uusin versio 1.7.7. julkaistiin 9. lokakuuta 2012,
varsin tuore siis. Kehitys
[jatkuu](http://subversion.apache.org/roadmap.html).

Kotisivu
:   <http://subversion.apache.org>

Lisenssi
:   [Apache License](http://en.wikipedia.org/wiki/Apache_License),
    versio 2.0.

Toimii seuraavilla alustoilla
:   Android, Linux, Mac OS X, Unix, Windows, luultavasti kaikille
    muillekin käyttöjärjestelmille.

Asennus
:   Linux-jakeluissa löytyy jakelun omista pakettivarastoista. Muille
    käyttöjärjestelmille kotisivulta tai muualta, Androidille
    esimerkiksi Google Play tarjoaa ilmaisia ja maksullisia
    subversion-ohjelmia.

Käyttöohjeet
:   Erinomaiset käyttöohjeet ovat saatavilla [vapaana
    kirjana](http://svnbook.red-bean.com/), joka on julkaistu samalla
    [ASL](http://en.wikipedia.org/wiki/Apache_License) käyttöoikeudella
    kuin ohjelmakin
:   Youtubessa on [viiden minuutin
    video](http://www.youtube.com/watch?v=8wYiabh2hpM) Subversionin
    olemuksesta ja versionhallinnan tarpeellisuudesta

{{% wrapper class="psgallery" %}}
-   [Työn kulku käsiteltäessä versioituja tiedostoja](/images/Svn-tyonkulkukaavio.png)
-   [TortoiseSVN Windows XP:ssä, muokattu tiedosto näkyy huutomerkkinä punaisessa ympyrässä.](/images/Subversion-2.png)
-   [TortoiseSVN Windows XP:ssä. Näytä isoina kuvakkeina. Muutettu tiedosto näkyy huutomerkkinä punaisessa ympyrässä.](/images/Subversion-3.png)
-   [TortoiseSVN Windows XP:ssä. Hiiren oikealla painikkeella saa toiminnot näkyviin.](/images/Subversion-4.png)
-   [Subversion komentorivillä Linuxissa.](/images/Subversion-5.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*Kuvat: Taleman, Pesasa*

