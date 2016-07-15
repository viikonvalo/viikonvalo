+++
Date = "2015-01-10T22:00:00.000Z"
Title = "Back In Time"
Description = "Back In Time on varmuuskopiointisovellus Linuxille."
Week = "5x03"
Number = "211"
Alustat = ["Linux"]
Tagit = ["Varmuuskopiointi","Tietoturva"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo211-backintime.png"
+++


**Back In Time on varmuuskopiointisovellus Linuxille.**

![ ](/images/valo211-backintime.png "fig:valo211-backintime.png") Back In Time on
helppokäyttöinen työkalu varmuuskopioiden tekemiseen Linuxilla.
Varmuuskopioita voi tehdä halutuista kansioista joko paikallisesti tai
etäpalvelimelle, selväkielisenä tai salattuna sekä automaattisesti
ajastettuna. Ohjelmisto koostuu komentoriviohjelmasta sekä graafisesta
käyttöliittymästä, jolla valitaan halutut asetukset. Taustalla ohjelma
hyödyntää kopiointiin
[rsync](https://en.wikipedia.org/wiki/Rsync)-ohjelmaa. Ohjelman
graafisesta käyttöliittymästä on tarjolla versiot sekä Gnome- että
KDE-työpöydille. [Déjà Dup](Deja_Dup) -ohjelmaan verrattuna
yksi hyödyllinen ominaisuus on mahdollisuus luoda useita erilaisia
varmuuskopiointiprofiileja eri käyttötarkoituksiin.

Vastaavasti kuin Déjà Dupissa käyttäjä voi valita varmuuskopioitavat
kansiot, ohitettavat kansiot ja tiedostot, vanhojen kopioiden
poistamisasetukset, tallennussijainnin, salauksen sekä ajastusasetukset.
Back In Timen tarjoamien asetusten määrä ja tarkkuus on kuitenkin jonkin
verran monipuolisempi. Erilaisilla varmuuskopiointiprofiileilla käyttäjä
voi määrätä eri kansiot varmuuskopioitaviksi eri tavoin, eri paikkoihin
ja erilaisella ajastuksella. Varmuuskopiot voidaan tallentaa joko
paikallisesti, esimerkiksi ulkoiselle usb-kiintolevylle, tai
etäpalvelimelle käyttäen SSH-yhteyttä.

Varmuuskopiot voidaan tallentaa myös salattuina. Salaamiseen käytetään
kryptattua tiedostojärjestelmää
([EncFs](https://en.wikipedia.org/wiki/EncFS)) ja sen käyttöä varten
käyttäjän täytyy kuulua *fuse*-ryhmään. Salatut varmuuskopiot lisäävät
turvallisuutta varsinkin etäpalvelimelle tehtyjen varmuuskopioiden
suhteen, kunhan käyttäjä ei unohda salaamiseen käytettyä salasanaa.
Salaamattomat varmuuskopiot ovat puolestaan siitä käytännöllisiä, että
Back In Timen tallennustavalla ne ovat suoraan selattavissa ja
käytettävissä myös ilman varmuuskopiointiohjelmaa. Salauksen käyttö
kannattaa siis valita käyttökohteen ja varmuuskopioitavan materiaalin
mukaan.

Toisin kuin [Déjà Dup](Deja_Dup), Back In Time ei käytä
varmuuskopioiden tallentamiseen omaa tallennusmuotoa vaan kopioi
tiedostot sellaisenaan rsync-ohjelman avulla. Déjà Dupin ja Duplicityn
yhdistelmä tekee varmuuskopiot tekemällä ensin täydellisen kopion ja
tallentamalla seuraavilla kerroilla vain tiedon muutoksista. Déjà Dupin
kanssa varmuuskopion palauttaminen vaatii siis koko ketjun täydellisestä
kopiosta palautettavaan versioon. Back In Time puolestaan hyödyntää
tiedostojärjestelmän kykyä tehdä niin kutsuttuja kovia linkkejä, jolloin
ensimmäisen varmuuskopioinnin yhteydessä kopioidaan kaikki tiedostot ja
seuraavien versioiden yhteydessä kopioidaan vain muuttuneet tiedostot.
Muuttumattomat tiedostot puolestaan luodaan linkittämällä ne jo olemassa
oleviin versioihin. Tämä säästää levytilaa ja toisaalta säilyttää
varmuuskopioiden eri versiot ja niiden kansiorakenteen myös muilla
ohjelmilla helposti selattavassa muodossa. Tämä toteutus kuitenkin
vaatii varmuuskopioiden tallentamiseen käytettävältä
tiedostojärjestelmältä tuen koville linkeille eikä mahdollista
varmuuskopioiden pakkaamista.

Otettuja varmuuskopioiden versioita voi selata Back In Timen
käyttöliittymällä helposti ja sieltä voi palauttaa joko yksittäisiä
tiedostoja tai kokonaisia varmuuskopioitavaksi valittuja kansioita.
Palautuksen voi tehdä alkuperäiseen sijaintiin tai valita palautukselle
jonkin muun paikan. Varmuuskopioiden vanhoja versioita voi myös poistaa
tai nimetä tätä kautta.

Myös varmuuskopioinnin ajastaminen on toteutettu Back In Timessa toisin
kuin Déjà Dupissa. Back In Time käyttää ajastukseen Unix-tyyppisissä
järjestelmissä käytettävää
[cron](https://en.wikipedia.org/wiki/Cron)-ohjelmaa, jolla tehtäviä
voidaan ajastaa suoritettaviksi. Back In Time lisää käyttäjän
cron-ajastuksiin komennot, jotka suoritetaan profiileissa määrättyinä
aikoina. Tästä on se hyöty, että käyttäjän ei tarvitse olla
kirjautuneena sisälle, jotta varmuuskopiot tulevat tehtyä. Haittana
puolestaan se, että varmuuskopiointi voi jäädä väliin, jos tietokone on
sammutettuna määrättynä aikana. Cron-ajastuksina suoritetut
varmuuskopioinnit sopivat erityisesti jatkuvasti päällä oleville
tietokoneille, kuten palvelimille. Vaihtoehtoisesti varmuuskopioinnin
voi määrätä suoritettavaksi päivittäin käyttäen cronin sijasta
anacronia, joka suoritetaan myös käynnistyksen yhteydessä, jolloin ei
ole vaaraa kopioinnin jäämisestä väliin. Muita vaihtoehtoja ovat
kopioinnin tekeminen aina tietokoneen käynnistyksen yhteydessä taikka
ulkoisen kiintolevyn kytkemisen yhteydessä annettujen päivien välein.

Kotisivu
:   <http://backintime.le-web.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux

Asennus
:   Ohjelma löytyy suoraan useimpien Linux-jakeluiden pakettivarastosta.

{{% wrapper class="psgallery" %}}
-   [KDE-käyttöliittymä. Back In Timessa voi luoda useita
    varmuuskopiointiprofiileja sekä kopioida paikallisesti tai <SSH:n>
    yli, salattuna tai salaamattomana.](/images/backintime-1.jpg)
-   [Salattu varmuuskopiointi <SSH:n> yli palvelimelle
    ajastettuna.](/images/backintime-2.jpg)
-   [Valitut varmuuskopioitavat kansiot.](/images/backintime-3.jpg)
-   [Varmuuskopioinnista pois jätettävät kansiot ja
    tiedostot.](/images/backintime-4.jpg)
-   [Varmuuskopioiden automaattinen poistaminen niiden vanhentuessa tai
    tilan käydessä vähiin.](/images/backintime-5.jpg)
-   [Muita asetuksia.](/images/backintime-6.jpg)
-   [Lisäasetuksia edistyneemmille
    käyttäjille.](/images/backintime-7.jpg)
-   [Ohjelman selausnäkymä.](/images/backintime-8.jpg)
-   [Valitun varmuuskopioversion
    palauttaminen.](/images/backintime-9.jpg)
-   [Palautus käynnissä.](/images/backintime-10.jpg)
-   [Gnome-versio Back In Timen
    käyttöliittymästä.](/images/backintime-11.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


