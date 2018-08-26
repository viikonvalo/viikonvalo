+++
Date = "2015-04-25T21:00:00.000Z"
Title = "OpenWRT"
Description = "OpenWRT on avoimen lähdekoodin käyttöjärjestelmä reitittimille ja muille sulautetuille laitteille."
Week = "5x17"
Number = "225"
Alustat = []
Tagit = ["Sulautetut","Käyttöjärjestelmä"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo225-openwrt.png"
+++


**OpenWRT on avoimen lähdekoodin käyttöjärjestelmä reitittimille ja
muille sulautetuille laitteille.**

![ ](/images/valo225-openwrt.png "fig:valo225-openwrt.png") OpenWRT sulautetuille laitteille,
kuten reitittimille ja langattomille tukiasemille, tarkoitettu
Linux-pohjainen käyttöjärjestelmä, joka vapauttaa laitteen omistajan
muokkaamaan laitteen toiminnallisuuksia tarpeidensa mukaan. Laitteissa
valmiina oleva ohjelmisto, firmware, saattaa laitteesta ja valmistajasta
riippuen joko saada tai olla saamatta tietoturvapäivityksiä. Usein
laitteiden haavoittuvuudet voivat olla pitkiäkin aikoja korjaamatta.
Asentamalla laitteeseen avoimen lähdekoodin käyttöjärjestelmän, kuten
OpenWRT:n, sen omistaja saa mahdollisuuden päivittää laitettaan tarpeen
vaatiessa. Samalla omistaja voi valita laitteeseensa juuri itse
tarvitsemansa toiminnot.

OpenWRT:n tarkoituksena on toteuttaa hyvin minimaalinen
käyttöjärjestelmä, joka toimii alustana käyttäjän omien tarpeiden
mukaisen kokonaisuuden koostamiseen. Itse perusjärjestelmä on hyvin
kevyt, jotta se saadaan helposti mahtumaan laitteiden usein hyvinkin
niukkaan tallennustilaan. Kaikki muut varsinaiset toiminnallisuudet on
paketoitu omiksi paketeikseen, joita voidaan asentaa OpenWRT:n
paketinhallintajärjestelmällä (aiemmin ipkg, nykyään opkg). Laitteen
omistaja voi siis basaarin tavoin valita laitteeseen haluamansa
ominaisuudet tarjolla olevien pakettien joukosta. Asennettavissa olevia
ominaisuuksia ovat muun muassa:

-   reititys
-   [Mesh-verkkojen](http://en.wikipedia.org/wiki/Mesh_networking) tuki
-   langattomat toiminnallisuudet (reititys, tukiasema, jne.)
-   palomuuri, NAT, porttien edelleenohjaus, liikenteen suodatus
-   UPnP
-   port knocking
-   DNS-palvelut
-   DHCP-palvelut
-   tuki dynaamiselle DNS-nimelle
-   tulostinpalvelut
-   webbikameratuki
-   äänikorttituki ja musiikontoistopalvelut
-   tiedostopalvelintoiminnot
-   VOIP-palvelut
-   web-käyttöliittymiä

OpenWRT:n asetuksia voi muokata oman mieltymyksen mukaan joko
komentorivillä ssh-yhteyden kautta tai web-käyttöliittymällä.

OpenWRT-ohjelmiston asennus tapahtuu laite- ja valmistajakohtaisesti eri
tavoin. Osa tuetuista laitteista mahdollistaa muokatun laiteohjelmiston,
kuten OpenWRT:n, asentamisen suoraan oman käyttöliittymänsä kautta.
Suuressa osassa laitteita puolestaan asentamiseen joudutaan joko
käyttämään hyväksi jotain alkuperäisen ohjelmiston haavoittuvuutta
taikka avaamaan laite ja mahdollisesti tekemään jopa joitain juotoksia.
Toisaalta joissain laitemalleissa, kuten eräissä Zyxelin tukiasemissa,
on jo valmistajan asentamana OpenWRT.

Kotisivu
:   <https://openwrt.org/>

Lisenssi
:   [GNU GPL](GNU_GPL) (käännösympäristö) sekä ohjelmistoja
    useilla avoimen lähdekoodin lisensseillä

Toimii seuraavilla alustoilla
:   Reitittimet ja muut laitteet ([luettelo tuetuista
    laitteista](http://wiki.openwrt.org/toh/start))

Asennus
:   Kullekin tuetulle laitteelle löytyvät mallikohtaiset ohjeet
    asennukseen OpenWRT:n sivustolta.

Muita vastaavia
:   [DD-WRT](https://dd-wrt.com)

{{% wrapper class="psgallery" %}}
-   [OpenWRT tervehtii ssh:lla sisään kirjautunutta käyttäjää Zyxelin
    tukiasemassa.](/images/openwrt-1.jpg)
-   [OpenWRT:n kotisivu.](/images/openwrt-2.jpg)
-   [OpenWRT:n oma käännösympäristö on lisensoitu GNU GPL -lisenssillä.
    Lisäksi järjestelmä sisältää monilla muilla vapailla lisensseillä
    julkaistuja ohjelmia.](/images/openwrt-3.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


{{% wrapper class="comments" %}}
Kommentit
---------

Yksi pienistä reitittimistä
:   Anonymous 26. Huhtikuu 2015 - 15:16
:   <http://www.dx.com/s/GL.iNet>

{{% /wrapper %}}
