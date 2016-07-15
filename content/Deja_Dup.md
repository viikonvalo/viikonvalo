+++
Date = "2015-01-03T22:00:00.000Z"
Title = "Déjà Dup"
Description = "Déjà Dup on yksinkertainen varmuuskopiointityökalu Linux-työpöydälle."
Week = "5x02"
Number = "210"
Alustat = ["Linux"]
Tagit = ["Varmuuskopiointi","Tietoturva"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo210-deja_dup.png"
+++


**Déjà Dup on yksinkertainen varmuuskopiointityökalu
Linux-työpöydälle.**

![ ](/images/valo210-deja_dup.png "fig:valo210-deja_dup.png") Déjà Dup tarjoaa
helpon käyttöliittymän Linux-työpöydän varmuuskopiointiin tarpeen mukaan
salattuna, etäpalvelimelle ja säännöllisesti. Déjà Dup toimii
käyttöliittymänä komentoriviltä toimivalle Duplicity-ohjelmalle, joka
hoitaa varsinaisen varmuuskopioinnin Déjà Dupin avulla määritellyllä
tavalla. Déjà Dup on integroitu hyvin Gnome-työpöytäympäristöön ja on
oletuksena osana myös Ubuntun Unity-työpöydän toiminnallisuutta.

Déjà Dupin asetuksista valitaan varmuuskopioitavat tiedostojärjestelmän
kansiot, mahdollisesti varmuuskopioinnin ulkopuolelle jätettävät
alikansiot tai tiedostot, varmuuskopioiden tallennuspaikka sekä
aikataulu. Varmuuskopioiden tallennuspaikaksi on valittavissa useita
vaihtoehtoja. Ne voidaan tallentaa paikallisesti taikka etänä.
Etätallennus on varmuuskopioiden kannalta yleensä järkevin vaihtoehto.
Ohjelma tarjoaa etätallennukseen käytettäviksi yhteyksiksi ainakin FTP-,
SSH- ja WebDAV-yhteyksiä sekä Windows-jakoja. Näiden lisäksi on myös
mahdollista käyttää lisäosina saatavaa tukea Rackspace Cloudfiles ja
Amazon S3 -palveluille.

Varmuuskopioinnin yhteydessä Déjà Dup tarjoaa mahdollisuutta salata
varmuuskopiot. Salaus tehdään käyttäjän omalla koneella GnuPG:llä
käyttäjän antamalla salasanalla. Näin käyttäjän ei tarvitse luottaa
etätallennustilaa tarjoavaan tahoon. Salaamiseen käytetty salasana on
tietenkin syytä pitää muistissa varmassa tallessa, sillä ilman sitä
salattujen varmuuskopioiden palauttaminen ei onnistu. Varmuuskopioinnin
voi toki tehdä myös salaamattomana, jos tallennustila on luotettava,
kuten oma ulkoinen kiintolevy tai tiedostopalvelin. Salasanan voi myös
tallentaa Gnomen avainrenkaaseen, mutta se on syytä muistaa myös muilla
keinoin, etteivät varmuuskopiot jää hyödyttömiksi esimerkiksi
kiintolevyn hajoamisen tai varkauden sattuessa.

Varmuuskopioinnin ajastuksen Déjà Dup hoitaa työpöydälle kirjautumisen
yhteydessä käynnistyvän *deja-dup-monitor*-tarkkailuohjelman avulla. Se
pitää kirjaa tehdyistä varmuuskopioinneista ja hoitaa seuraavan
kopioinnin määräajoin käyttäjän ollessa kirjautuneena koneelle. Näin
siis varmuuskopiointeja ei ole ajoitettu määräpäiviksi ja tietyiksi
kellonajoiksi vaan ne tehdään määräajan tullessa täyteen käyttäjän
ollessa läsnä. Näin muun muassa siksi, että voidaan kysyä käyttäjältä
tarvittavia salasanoja etäpalvelimille tai salausta varten. Tämän takia
Déjà Dup soveltuu erityisesti työpöytäkäyttöön, jossa tiedostot
muuttuvat lähinnä vain käyttäjän omien toimien takia hänen ollessaan
kirjautuneena työpöydälle.

Déjà Dup tekee ensimmäisellä varmuuskopiointikerralla täyden
varmuuskopion ja seuraavilla kerroilla tallennetaan vain muutokset
edelliseen kertaan verrattuna. Kopioinneista muodostuu ketju, jonka
kaikkia osia tarvitaan jonkin tilanteen palauttamiseen. Tämän takia Déjà
Dup tekee toisinaan uuden täydellisen varmuuskopion, joka aloittaa uuden
ketjun. Tämä mahdollistaa vanhimpien varmuuskopioiden poistamisen tilan
vapauttamiseksi. Déjà Dup poistaa vanhoja varmuuskopioita
automaattisesti määrätyn ajan kuluttua. Se pyrkii pitämään aina tallessa
kaksi täydestä kopiosta alkavaa ketjua.

Déjà Dupin integrointi Gnome-työpöydälle näkyy muun muassa siinä, että
Nautilus-tiedostonhallintaohjelma sisältää toimintoja, kuten yksittäisen
tiedoston palauttamisen viimeiseen varmuuskopioituun versioon tai
poistettujen tiedostojen palauttamisen.

Kotisivu
:   <https://wiki.gnome.org/Apps/DejaDup> (Déjà Dup)
:   <http://duplicity.nongnu.org/> (Duplicity)

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux

Asennus
:   Ohjelma löytyy suoraan useiden Linux-jakeluiden paketinhallinnasta.
    Esimerkiksi Ubuntussa se on valmiiksi asennettuna.

{{% wrapper class="psgallery" %}}
-   [Déjà Dupin käyttöliittymä on
    yksinkertainen.](/images/deja_dup-1.jpg)
-   [Kopioitavat ja kopioimatta jätettävät kansiot valitaan
    listaksi.](/images/deja_dup-2.jpg)
-   [Tallennuspaikan tietojen syöttäminen.](/images/deja_dup-3.jpg)
-   [Useita vaihtoehtoja varmuuskopioiden
    etätallennukseen.](/images/deja_dup-4.jpg)
-   [Varmuuskopioinnin ajastus ja säilytysaika.](/images/deja_dup-5.jpg)
-   [Haluttaessa varmuuskopiot voi salata salasanalla käyttäen
    GnuPG:tä.](/images/deja_dup-6.jpg)
-   [Varmuuskopiointi käynnissä.](/images/deja_dup-7.jpg)
-   [Palautus etäkoneelle tehdyistä
    varmuuskopioista.](/images/deja_dup-8.jpg)
-   [Palautuksen yhteydessä voi valita palautettavan
    version.](/images/deja_dup-9.jpg)
-   [Palautetaanko tiedostot alkuperäiselle paikalleen vai johonkin
    muuhun kansioon.](/images/deja_dup-10.jpg)
-   [Salatut varmuuskopiot etäkoneella.](/images/deja_dup-11.jpg)
-   [Déjà Dup on integroitu
    Nautilus-tiedostonhallintaohjelmaan.](/images/deja_dup-12.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


