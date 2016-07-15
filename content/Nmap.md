+++
Date = "2013-04-20T21:00:00.000Z"
Title = "Nmap"
Description = "Nmap on verkkoanalysoinnin työkalu, jota voi käyttää tutkimus- ja turvallisuustarkoituksiin."
Week = "3x17"
Number = "121"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","NetBSD","OpenBSD","Solaris","Unix"]
Tagit = ["Verkko","Tietoturva"]
Type = "post"
Author = ""
Pageimage = "valo121-nmap.png"
+++


**Nmap on verkkoanalysoinnin työkalu, jota voi käyttää tutkimus- ja
turvallisuustarkoituksiin.**

![ ](/images/valo121-nmap.png "fig:valo121-nmap.png")
Komentorivipohjainen Nmap on vapaa avoimen lähdekoodin ohjelma. Sen
avulla voi tunnistaa verkon avoimia portteja, käytössä olevia palveluja,
palvelinohjelmien versioita sekä käyttöjärjestelmiä. Tästä on apua
tietoturvan tarkastamisessa, sillä tarpeettomat tietoturvariskiä
lisäävät tekijät voidaan tunnistaa ja korjata. Ohjelmaa voidaan käyttää
myös ylläpidon tehtävissä: Nmap voi auttaa hahmottamaan verkon
rakennetta ja palvelinohjelmien päivitysten tarvetta.

Nmapia käytetään komentoriviltä. Komennon perään lisätään valitsimilla
halutut toiminnat ja tutkittava verkko-osoite tai -alue.
Tekstipohjaisuutensa vuoksi Nmapia on helppo käyttää skripteissä.
Lisäksi Nmap ymmärtää Lua-ohjelmointikielellä kirjoitettuja skriptejä,
joilla voidaan automatisoida tehtäviä.

Vaihtoehtoisesti Nmapia voi käyttää erillisellä graafisella
käyttöliittymällä. Suosittu vaihtoehto on Nmapin kehittäjien luoma
Zenmap. Sen tarkoitus on tehdä Nmapista helpommin lähestyttävä uusille
käyttäjille. Käyttäjä voi esimerkiksi tutkia verkkoa tietyllä valmiiksi
luodulla profiililla, joka on nimetty tehtävänsä mukaan. Profiili
sisältää vaadittavat valitsimet. Käyttäjän tarvitsee vain valita haluttu
tehtävä ja kohde sekä käynnistää skannaus painikkeesta.

Yksi ohjelman tyypillisistä käyttötarkoituksista on TCP- ja UDP-porttien
tilojen selvitys. Tällöin tavoitteena on selvittää, vastaanottaako jokin
tietokoneen palvelu verkkoliikennettä. Nmap kertoo, onko portti auki,
kiinni vai selvittämättömissä. Vaikkei portin tarkka tila selviäisi,
Nmap kuitenkin ilmoittaa, vastasiko portti ollenkaan kyselyyn.
Vastauksesta riippuen portin tilaksi ilmoitetaan filtered tai
unfiltered. Nmapin selvitystyötä voi vaikeuttaa esimerkiksi palomuuri
tai reititin.

Skannauksen tuloksia voidaan tutkia eri tavoin. Tavanomaisessa tilassa
tulokset ryhmitellään ja tulostetaan lukijalle ymmärrettävään muotoon.
Tulokset voidaan myös muotoilla toisiin ohjelmiin sopiviksi. Silloin
sisältö ryhmitellään esimerkiksi siten, että sitä on mahdollista
käsitellä rivipohjaisesti säännöllisillä lausekkeilla (esimerkiksi
grep-ohjelmalla). Vaihtoehtoisesti tulokset voidaan tulostaa
XML-muodossa.

Nmap-työkaluihin kuuluu myös muita ohjelmia. Esimerkiksi Ndiff-ohjelmaa
voi käyttää kahden eri skannaustuloksen vertailuun. Tämä on hyödyllistä
etenkin silloin, kun verkkoa tarkkaillaan säännöllisesti ja halutaan
tietää muutoksista. Muita mukana tulevia ohjelmia ovat nping ja ncat.

Ohjelmisto on kattavasti dokumentoitu. Tietoa on saatavilla esimerkiksi
Man-sivuilta, Webin lukuisista johdatusohjeista, kirjoista ja
akateemisista julkaisuista.

Kotisivu
:   <http://nmap.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, Mac OS X, Windows, Unix

Asennus
:   Asennustiedostosta ohjelman kotisivuilta tai
    pakettienhallintaohjelmistolla

Käyttöohjeet
:   Englanninkieliset [käyttöohjeet](http://nmap.org/docs.html)

Huomautus
:   Verkkojen ja koneiden skannaaminen ilman lupaa ei ole kohteliasta.
    Tällainen toiminta on myös rikoslain kannalta ongelmallista (ks.
    esim. [Tietotekniikkarikosten
    tunnusmerkistöjä](https://www.poliisi.fi/poliisi/krp/home.nsf/pages/C2315A82BE4616A1C225783E0056EDE0)
    ja
    [KKO:2003:36](https://www.finlex.fi/fi/oikeus/kko/kko/2003/20030036)).

{{% wrapper class="psgallery" %}}
-   [Iflist-valitsimella saadaan selville verkkolaitteet ja
    reitit.](/images/Nmap-1.png)
-   [Pingaamalla koko lähiverkkoalue saadaan selville verkossa olevat
    laitteet.](/images/Nmap-2.png)
-   [Nmap osaa arvuutella, mikä käyttöjärjestelmä kohdelaitteessa on.
    Tällä kertaa Nmap ei tiennyt, mikä ohjelma pitää tietyt portit
    avoinna.](/images/Nmap-3.png)
-   [Nmapia voi käyttää myös interaktiivisessa tilassa. Tästä on hyötyä
    esimerkiksi silloin, kun ei halua jättää komentorivihistoriaan
    jälkiä skannauksesta.](/images/Nmap-4.png)
-   [Kuvassa on Nmapin graafinen käyttöliittymä Zenmap. Ajettava
    nmap-komento määräytyy Target- ja Profile-kohdan
    valinnoista.](/images/Nmap-5.png)
-   [Zenmap osaa piirtää kaavion lähiverkon
    laitteista.](/images/Nmap-6.png)
{{% /wrapper %}}

*Teksti ja kuvakaappaukset: Mikko Harhanen*


