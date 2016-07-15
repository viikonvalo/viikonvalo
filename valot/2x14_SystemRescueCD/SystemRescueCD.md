+++
Date = "2012-04-01T09:00:00.000Z"
Title = "SystemRescueCD"
Description = "SystemRescueCd on tietokoneen järjestelmän pelastuksiin, korjauksiin ja varmuuskopiointiin tarkoitettu cd-levyltä tai usb-tikulta käynnistyvä Linux-järjestelmä, joka sisältää monia tähän käyttöön soveltuvia työkaluja."
Week = "2x14"
Number = "66"
Alustat = ["Kaikki alustat"]
Tagit = ["Ylläpito","Järjestelmä"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo66-systemrescuecd.png"
+++


**SystemRescueCd on tietokoneen järjestelmän pelastuksiin, korjauksiin
ja varmuuskopiointiin tarkoitettu cd-levyltä tai usb-tikulta käynnistyvä
Linux-järjestelmä, joka sisältää monia tähän käyttöön soveltuvia
työkaluja.**

![ ](/images/valo66-systemrescuecd.png "fig:valo66-systemrescuecd.png") Kun
tietokone ei käynnisty, tiedostojärjestelmä on rikki tai tietokoneen
järjestelmä kaipaa jostain muusta syystä korjaamista, saattaa
SystemRescueCd olla juuri oikea väline tehtävään. SystemRescueCd on
nimensä mukaisesti cd-levyltä, tai vaihtoehtoisesti usb-muistitikulta,
käynnistyvä Linux-pohjainen järjestelmä, johon on koottu suuri joukko
vapaita työkaluja järjestelmän ja tiedostojen pelastamiseen.

Oletuksena SystemRescueCd käynnistyy näppäimistöasettelun valinnan
jälkeen tekstipohjaiseen komentorivitilaan root-käyttäjän oikeuksilla.
Komennolla *wizard* käynnistyy kuitenkin Xfce-työpöytää käyttävä
graafinen käyttöliittymä, jota tarvitaan joidenkin työkalujen
käyttämiseen. SystemRescueCd on voimakas työkalupakki, jolla osaava
käyttäjä saa korjattua monella tavalla rikki olevia järjestelmiä. Näiden
työkalujen käyttö vaatii kuitenkin vastuullisuutta ja tietoa siitä, mitä
on tekemässä, sillä niillä voi myös tuhota järjestelmänsä helposti.

Levyltä löytyviä työkaluja ovat muun muassa **[GNU
Parted](http://www.gnu.org/software/parted/)** ja sen graafinen
käyttöliittymä **[GParted](http://gparted.sourceforge.net/)**, joilla on
mahdollista luoda, siirtää ja kopioida levyosioita ja
tiedostojärjestelmiä sekä muuttaa niiden kokoja.
**[Partimage](http://www.partimage.org/Main_Page)** puolestaan osaa
luoda ja palauttaa levykuvia levyosioista. Levykuvia voi tallettaa ja
kopioida esimerkiksi ulkoiselle kiintolevylle tai verkon yli toiselle
koneelle sekä vastaavasti palauttaa niiltä takaisin. Tällä työkalulla
onnistuu myös levyjen kloonaaminen, kun on tarve asentaa useita
identtisiä tietokoneita samanlaisin asetuksin. Siis samaan tapaan kuin
aiemmin esitellyllä [Clonezillalla](Clonezilla "wikilink").
**[Ddrescue](http://www.gnu.org/software/ddrescue/ddrescue.html)**
pyrkii luomaan levykuvan jopa viallisesta laitteesta ja tarvittaessa
täyttää vioittuneet kohdat annetulla datalla.

Levyltä vahingossa poistettujen tiedostojen tai vioittuneen
tiedostojärjestelmän takia hukattujen tiedostojen palauttamiseen
SystemRescueCd sisältää myös työkaluja.
**[PhotoRec](http://www.cgsecurity.org/wiki/PhotoRec)** ja
**[Magicrescue](http://www.itu.dk/~jobr/magicrescue/)** ovat molemmat
työkaluja, jotka osaavat etsiä esimerkiksi kuva- ja videotiedostoja
suoraan levyn raakadatasta, esimerkiksi vioittuneelta puhelimen tai
kameran muistikortilta.

SystemRescueCd tukee useita tiedostojärjestelmiä, mukaan lukien
Windowsin verkkolevyjaot sekä Windowsin ntfs-tiedostojärjestelmä, jota
se kykenee sekä lukemaan että kirjoittamaan. Levyn työkaluilla onnistuu
siis myös esimerkiksi koneen tiedostojen varmuuskopiointi vaikka verkon
yli toiselle koneelle. Tämä onnistuu liittämällä toisen koneen jakama
Windows-jako, esimerkiksi * <br />\\\192.168.56.1\\jaonnimi*, SystemRescueCd:n
hakemistopuuhun komennolla:

```
mount -t cifs \\\\192.168.56.1\\jaonnimmi /mnt/backup
```

Tämän jälkeen verkkolevy on käytettävissä hakemistossa /mnt/backup ja
jos jaon oikeudet sen sallivat sinne voidaan kirjoittaa halutut
tiedostot. Vastaavasti tiedostoja voidaan varmuuskopioida myös
ssh-palvelimelle. Toinen tapa varmuuskopiointiin on käyttää
SystemRescueCd:n käynnistyksen yhteydessä käynnistyvää ssh-palvelinta,
johon on mahdollista ottaa yhteys toiselta koneelta esimerkiksi
[WinSCP](WinSCP "wikilink")-ohjelmalla. Tarvittavat käyttäjätunnus on
*root* ja salasanan voi asettaa SystemRescueCd:ssä komennolla *passwd*.

Levyltä löytyy myös graafinen www-selain,
**[Midori](http://www.twotoasts.de/index.php?/pages/midori_summary.html)**,
jolla sujuu esimerkiksi erilaisten ohjeiden etsiminen ja lukeminen
verkosta. Lisää levyn sisältämistä työkaluista ja niiden käytöstä
kannattaa lueskella SystemRescueCd:n omilta kotisivuilta, joilta
löytyykin oppaita useampaan käyttötarkoitukseen.

Kotisivu
:   <http://www.sysresccd.org/>

Lisenssi
:   Sisältää ohjelmia monilla vapailla lisensseillä.

Asennus
:   Ei asenneta vaan käynnistetään suoraan cd-levyltä tai usb-muistilta.

Käyttöohjeet
:   Ohjeita erilaisiin käyttötarkoituksiin löytyy SystemRescueCd:n
    kotisivuilta.

{{% wrapper class="psgallery" %}}
-   [ ](/images/systemrescuecd-01.png)
-   [ ](/images/systemrescuecd-02.png)
-   [ ](/images/systemrescuecd-03.png)
-   [ ](/images/systemrescuecd-04.png)
-   [ ](/images/systemrescuecd-05.png)
-   [ ](/images/systemrescuecd-06.png)
-   [ ](/images/systemrescuecd-07.png)
-   [ ](/images/systemrescuecd-08.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

