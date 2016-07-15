+++
Date = "2012-07-28T21:00:00.000Z"
Title = "FireFTP"
Description = "FireFTP on Firefox-selaimen lisäosana toimiva vapaa tiedostojensiirto-ohjelma."
Week = "2x31"
Number = "83"
Alustat = ["Linux","Windows","Mac OS X","www-selain"]
Tagit = ["Tiedostonsiirto"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo83-fireftp.png"
+++


**FireFTP on Firefox-selaimen lisäosana toimiva vapaa
tiedostojensiirto-ohjelma.**

![ ](/images/valo83-fireftp.png "fig:valo83-fireftp.png") FireFTP on täysiverinen
FTP- ja SFTP-yhteyskäytäntöjä tukeva tiedostojensiirto-ohjelma. Se on
toteutettu Firefox-selaimen lisäosana ja avautuu siis selaimen
välilehteen. Ohjelman käyttöliittymänä on perinteinen kahtia jaettu
näkymä, jossa vasemmassa puolikkaassa näkyy paikallisen koneen
hakemistopuu ja tiedostolistaus ja oikeassa puolikkaassa vastaavasti
etäkoneen hakemistorakenne ja tiedostot. Lisäksi näkymän alaosassa ovat
nähtävissä omina välilehtinään tiedostojensiirron tapahtumaloki sekä
jonossa olevat siirrot. Tiedoston siirtäminen koneelta toiselle tapahtuu
valitsemalla siirrettävät tiedostot ja klikkaamalla hiirellä sarakkeiden
välissä olevaa nuolta. Myös tiedostojen raahaaminen
tiedostonkäsittelyohjelmasta hiirellä on mahdollista.

FireFTP tukee [FTP](http://fi.wikipedia.org/wiki/FTP)-yhteyskäytännöstä
sekä aktiivista että passiivista tilaa. FTP-yhteyden turva-asetuksiksi
voi valita TLS- tai SSL-salauksen tai yhteyden ilman salausta.
Vaihtoehtoisesti yhteyden voi muodostaa
[SFTP](http://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol)-yhteytenä,
joka siirtää tiedostot ssh-yhteyden kautta. Ohjelmaan voi myös tallettaa
useimmin käytettyjen etäkoneiden yhteystiedot halutulla nimellä. FireFTP
osaa myös automaattisesti palauttaa katkenneen yhteyden ja jatkaa
keskeytynyttä tiedostonsiirtoa. Ohjelma kykenee myös avaamaan
etätiedostoja katselua ja muokkaamista varten. Käytännössä etätiedosto
siirretään paikalliselle koneelle tilapäiseksi tiedostoksi ja muutosten,
tallennuksen ja ohjelman sulkemisen jälkeen tiedosto siirretään takaisin
etäkoneelle. Ohjelmalle pystyy myös kertomaan, mitä ohjelmia käytetään
eri tiedostomuotojen avaamiseen.

Muita ominaisuuksia ovat muun muassa tiedostojen haku ja suodattaminen
tiedoston nimen mukaan sekä hakemiston synkronointi. Hakemistojen
synkronointi auttaa pitämään paikallisella ja etäkoneella sijaitsevien
hakemistojen sisällöt samanlaisina. Synkronointi-ikkuna luettelee etä-
ja paikallisella koneella synkronoitavissa hakemistoissa olevat
tiedostot ja antaa kunkin kohdalla mahdollisuuden valita vaihtoehdoista
"download", "upload", "delete" ja "do nothing". Tiedostoille, jotka ovat
vain toisella koneella, merkitään automaattisesti "download"- tai
"upload"-toiminto ja molemmilta koneilta löytyville "do nothing".
Käyttäjä voi itse vaihtaa toiminnot haluamikseen ja aloittaa
synkronoinnin.

Kotisivu
:   <http://fireftp.mozdev.org/> ja
    <https://addons.mozilla.org/en-US/firefox/addon/fireftp/>

Lisenssi
:   [Mozilla Public License](http://www.mozilla.org/MPL/1.1/) / [GNU
    GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Windows, Mac OS X, Linux, tai mikä tahansa käyttöjärjestelmä, jossa
    Mozilla Firefox ja sen lisäosat toimivat.

Asennus
:   Asennus tapahtuu menemällä Firefox-selaimella
    [lisäosasivulle](https://addons.mozilla.org/en-US/firefox/addon/fireftp/)
    ja klikkaamalla linkkiä "**+ Add to Firefox**".

{{% wrapper class="psgallery" %}}
-   [Uuden yhteyden tallentaminen.](/images/fireftp-1.jpg)
-   [Valitaan uuden yhteyden tyyppi.](/images/fireftp-2.jpg)
-   [Yhteys muodostettu. Vasemmalla paikallinen kone, oikealla
    etäkone.](/images/fireftp-3.jpg)
-   [Tiedostoja voi siirtää myös paikallisen koneen tiedostoselaimesta
    hiirellä raahaamalla.](/images/fireftp-4.jpg)
-   [Tiedostojen synkronointi paikallisen koneen ja etäkoneen
    hakemistojen välillä.](/images/fireftp-5.jpg)
-   [Etätiedostot voi määrätä avautumaan haluamallaan
    ohjelmalla.](/images/fireftp-6.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

