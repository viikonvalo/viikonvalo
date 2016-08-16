+++
Date = "2012-04-14T21:00:00.000Z"
Title = "Irssi"
Description = "Irssi on komentoriviltä suoritettava alustariippumaton IRC-asiakasohjelma. Irssin kehitys alkoi Suomessa ja suurin osa koodista on suomalaisen Timo Siraisen käsialaa."
Week = "2x16"
Number = "68"
Alustat = ["Linux","Mac OS X","Windows","Solaris"]
Tagit = []
Type = "post"
Author = "Taleman"
Pageimage = "valo68-irssi.png"
+++


**Irssi on komentoriviltä suoritettava alustariippumaton
IRC-asiakasohjelma. Irssin kehitys alkoi Suomessa ja suurin osa koodista
on suomalaisen [Timo Siraisen](http://fi.wikipedia.org/wiki/Timo_Sirainen) käsialaa.**

![ ](/images/valo68-irssi.png "fig:valo68-irssi.png")
[Irssi](http://fi.wikipedia.org/wiki/Irssi) on varsin suosittu kauan
IRC-pikaviestintäpalvelua käyttäneiden keskuudessa. Itsekin käytin ensin
[X-Chat](http://xchat.org/)-ohjelmaa. Siinä on graafinen käyttöliittymä,
järkeilin ettei käyttöä tarvitse niin paljon opetella. Tämä pitikin
paikkansa mutta huomasin tekstikäyttöliittymän olevan aivan riittävä ja
mahdollistavan edistyneemmän irkkaamisen. Irssi kuten muutkin
komentoriviltä käytettävät ohjelmat toimii
[screenin](http://linux.fi/wiki/Screen) kanssa, eli voi pitää irssin
istuntoa käynnissä sopivassa aina käynnissä olevassa etäkoneessa ja
[liittyä istuntoon](http://porixi.l-a.fi/Edistyneempi_Irkkaus)
mahdollisesti eri paikoistakin silloin kun haluaa seurata mitä irkissä
on tapahtunut.

Irssi on siis asiakasohjelma jolla käytetään
[IRC-pikaviestinjärjestelmää](http://fi.wikipedia.org/wiki/IRC). Muita
IRC-asiakasohjelmia löytyy esimerkiksi Wikipedian
[artikkelista](http://fi.wikipedia.org/wiki/IRC#Suosittuja_ohjelmia).
IRC on määritelty RFC:ssä numero
[1459](http://tools.ietf.org/html/rfc1459), eli on avoin Internetin
standardi. IRC on suomalainen keksinto, ja levisi varsin nopeasti
maailmanlaajuiseen käyttöön. <IRC:n> kehitti [Jarkko "Wiz"
Oikarinen](http://fi.wikipedia.org/wiki/Jarkko_Oikarinen) vuoden 1988
kesällä korvaamaan OuluBox BBS:n MUT ("MultiUser Talk") -ohjelman.

<IRC:n> yleisin käyttö on todennäköisesti lähinnä yksityisten
henkilöiden välistä keskustelua. [IRC:ssä](IRC:ssä) on lähes rajaton
määrä kanavia eri aiheista monilla eri kielillä. [IRC:ssä](IRC:ssä) on
keskustelua vuorokaudenaikaan katsomatta lähes aina. Suosittuja kanavia
ovat esimerkiksi harrastus-, paikkakunta- ja opiskelukanavat. Osa
IRC:n viehätyksestä perustunee kasvottomuuteen: halutessaan voi olla
nimetön ja vaikkapa käyttää aina erilaista nimimerkkiä. Keskustelijan
nimeä, ulkonäköä ja asuinpaikkaa ei tiedä kukaan – ellei sitä itse halua
kertoa. Toisaalta moni irc-käyttäjä on ottanut käyttöön vakiintuneen
[irc-nimen](http://fi.wikipedia.org/wiki/IRC#Nimimerkit_ja_k.C3.A4ytt.C3.A4j.C3.A4tunnukset),
"irkkinikin", josta on ajan myötä tullut osa hänen
netti-identiteettiään. Tämän lempinimen voi
[rekisteröidä](http://freenode.net/using_the_network.shtml)
IRC-verkossa, jolloin muut eivät voi käyttää samaa nikkiä. Monille
kanaville muodostuu sisäpiiri, joka tapaa toisiaan säännöllisesti myös
kasvotusten. [IRC:stä](IRC:stä) löytää melko varmasti samanhenkistä
seuraa, kunhan muistaa normaalit käytöstavat, terveen järjen ja
[netiketin](http://fi.wikipedia.org/wiki/Netiketti).

Irssin [Teemoja](http://irssi.org/themes) löytyy lukuisia. Teema muuttaa
irssin ulkonäköä väreillä ja tilarivin sisältöä. Söpö pinkki teema on
tietenkin saatavilla, synkempiäkin värisävyjä löytyy. Teemaa voi
täydentää asettamalla pääteikkunaan taustavärin tai taustakuvan.

Lisää toiminnallisuutta saa [scripteillä](http://scripts.irssi.org/). Ne
ovat pieniä Perlillä koodattuja ohjelmia. Kokoelmassa on monenlaista
lisätoimintoa, esimerkiksi
[ai.pl](http://scripts.irssi.org/html/ai.pl.html) lisää [public
away](http://mutru.fi/irc/away.html) toimintoa käyttävän
[Ignore](http://www.uta.fi/laitokset/tkk/ohjeet/palvelimet/irc.html#kappale18)-listaan.
Irssi tukee liitännäisten avulla myös [SILC](http://silcnet.org/)- ja
[ICB](http://www.icb.net/)-yhteyskäytäntöjä.

Irssi osaa käyttää UTF-8-merkistöä, muutkin merkistöt toimivat. Irssin
lisäksi on merkistö vaihdettava käytetyssä päätteessä ja varmistettava
ettei pääteyhteys typistä 8-bittisiä merkkejä. Suomalaisilla kanavilla
tapaa olla käytössä UTF-8, muissa maissa on mahdollisesti kansallinen
merkistö.

Irssiin löytyy hyvin käyttöohjeita, suomeksi ja muillakin kielillä.
Käytännöllisiä vinkkejäkin on, esimerkiksi kohta "my anti annoyance
filters ;)" sivulla [Tips &Trics](http://irssi.org/documentation/tips)
neuvoo miten IRC-kanavalle tulevat turhanaikaiset viestit saa pois
näkyvistä. Irssillä voi myös automatisoida irkkaamista, esimerkiksi heti
käynnistettäessä [muodostamaan
yhteys](http://irssi.org/documentation/startup#c3) haluttuihin
IRC-verkkohin ja liittymään kanaville.

Irssin uusin versio on 0.8.15, julkaistu 3. huhtikuuta 2010. Versioon 1
ei siis vielä ole ennätetty, mutta irssi on varsin vakaa ja
luotettavasti toimiva sovellus. Irssi lienee jo niin täydellinen, ettei
kaksi vuotta riitä keksimään mitä voisi lisätä.

Kotisivu
:   <http://irssi.org>

Lisenssi
:   [GNU GPL](GNU_GPL "wikilink")

Toimii seuraavilla alustoilla
:   Linux, Mac OS X, Solaris, Windows

Asennus
:   Linux-jakeluissa tulee jakelun omista pakettivarastoista.
    Windows-käyttäjät joutunevat noutamaan asennustiedoston kotisivulta.
    Solaris-versio saatavilla
    [pkg-tiedostona](http://www.opencsw.org/packages/irssi/). Mac OS X
    versio löytyy kotisivuilta. Muille alustoillekin saattaa löytyä
    asennuspaketti, tai voi kääntää itse lähdekoodeista.

Käyttöohjeet
:   <http://porixi.l-a.fi/Irc_kurssi>
:   <http://linux.fi/index.php/Irssi>
:   <http://www.vhosti.com/~pate81/irssi.html>
:   <http://irssi.org/documentation>

{{% wrapper class="psgallery" %}}
-   [Myrtin dark winter -teema](/images/Irssi-01.png)
-   [Päätteen värit säädetty, Irssin oletusteema](/images/Irssi-02.png)
-   [dark winter ja pinkki taustaväri, gnome-terminal pääteprofiilissa
    säädetty värejä](/images/Irssi-03.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman*

