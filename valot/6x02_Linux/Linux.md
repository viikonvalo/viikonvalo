+++
Date = "2016-08-25T08:00:00.000Z"
Title = "Linux"
Description = "Linux on suomalaisen Linus Torvaldsin alulle panema UNIX-tyyppisen käyttöjärjestelmän ydin. Sen julkistamisesta tulee 25. elokuuta 2016 kuluneeksi 25 vuotta. Sen jälkeen Linux on valloittanut maailman puhelimista ja reitittimistä palvelimiin ja supertietokoneisiin saakka."
Week = "6x02"
Number = "244"
Alustat = ["Linux"]
Tagit = ["Käyttöjärjestelmä"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo244-linux.png"
+++


**Linux on suomalaisen Linus Torvaldsin alulle panema UNIX-tyyppisen käyttöjärjestelmän ydin. Sen julkistamisesta
tulee 25. elokuuta 2016 kuluneeksi 25 vuotta. Sen jälkeen Linux on valloittanut maailman puhelimista ja reitittimistä
palvelimiin ja supertietokoneisiin saakka.**

![ ](/images/valo244-linux.png "fig:valo244-linux.png")

Linuxin kehitys alkoi, kun [Helsingin Yliopistossa](https://helsinki.fi) silloin opiskellut Linus Torvalds halusi
ohjelmoida UNIX-tyyppisen käyttöjärjestelmän omiin tarpeisiinsa. Ensimmäinen versio toimi vain Torvaldsin itsensä
omistaman koneen tyyppisissä laitteissa. Aikaansaannoksen julkistus 25.8.1991 sen ajan "sosiaalisessa mediassa", Usenet News -ryhmässä `comp.os.minix` oli melko vaatimaton ilmoitus vapaasta "harrasteprojektista", josta
"ei tule mitään suurta ja ammattimaista, kuten GNU-järjestelmästä". Linus pyysi muilta Minix-järjestelmän
käyttäjiltä kommentteja ja ehdotuksia siitä, mitä hyviä ja huonoja puolia heidän mielestään Minixissä oli
ja mihin suuntaan uutta käyttöjärjestelmää heidän mielestään pitäisi kehittää. Erityisesti Torvalds painotti,
että järjestelmä ei ole sovitettavissa muun tyyppisille laitteille ja että se tulee tuskin koskaan tukemaan
muun tyyppisiä levyjä kuin niitä, joita hänellä itsellään sattui olemaan käytössä.

> Hello everybody out there using minix -
> 
> I'm doing a (free) operating system (just a hobby, won't be big and
> professional like gnu) for 386(486) AT clones.  This has been brewing
> since april, and is starting to get ready.  I'd like any feedback on
> things people like/dislike in minix, as my OS resembles it somewhat
> (same physical layout of the file-system (due to practical reasons)
> among other things).
> 
> I've currently ported bash(1.08) and gcc(1.40), and things seem to work.
> This implies that I'll get something practical within a few months, and
> I'd like to know what features most people would want.  Any suggestions
> are welcome, but I won't promise I'll implement them :-)
> 
> Linus (torv...@kruuna.helsinki.fi)
> 
> PS.  Yes - it's free of any minix code, and it has a multi-threaded fs.
> It is NOT protable (uses 386 task switching etc), and it probably never
> will support anything other than AT-harddisks, as that's all I have :-(. 

([Linus Torvaldsin alkuperäinen viesti Googlen arkistoimana][composminix])

Historia on kuitenkin näyttänyt, miten pahasti Linus aliarvioi aloittamansa projektin merkityksen.
Erityisesti hänen päätöksensä lisensoida Linux [Richard M. Stallmanin][RMS] ja [Free Software Fondationin][FSF]
[GNU-projektia][GNU] varten esittelemällä [GNU GPL](GNU_GPL) -lisenssillä vaikutti ratkaisevasti
käyttöjärjestelmäytimen jatkokehitykseen ja menestykseen. Vapaa avoimen lähdekoodin lisensointi
mahdollisti järjestelmän avoimen kehityksen ja houkutteli mukaan asiasta kiinnostuneita ohjelmoijia.

{{% wrapper class="rightimage" %}}
![](../images/Awesome-Tux.png)
{{% /wrapper %}}
Usein kuulee arvioita, että Linuxin menestyksen huomioon ottaen Linus Torvalds olisi voinut lyödä rahoiksi,
jos hän ei olisi lisensoinut järjestelmää avoimeksi. Tämä tuskin kuitenkaan pitää paikkaansa, sillä
ilman vapaata lisensointia järjestelmä ei todennäköisesti olisi houkutellut ympärilleen samanlaista
kehittäjien ja suurten yritystenkin muodostamaa yhteisöä, jonka seurausta sen voimakas kehitystahti ja
maailmanvalloitus on ollut. Ilman vapaata lisensointia Linux olisi jäänyt vain Torvaldsin viestissään
mainitsemaksi harrastusprojektiksi. Kenties Linuxin nykyisen aseman ja suosion olisi saanut jokin muu vapaa
käyttöjärjestelmä, esimerkiksi [FreeBSD][FreeBSD], joka on Linuxin tavoin UNIX-tyyppinen järjestelmä ja
avointa lähdekoodia.

Linuxin vapaa ja avoin lähdekoodi on mahdollistanut myös sen sovittamisen mitä moninaisimpiin laitteisiin.
Pieniin ja vähillä resursseilla varustettuisiin laitteisiin, kuten reitittimiin, siitä on voitu riisua kaikki
ylimääräinen ja suuriin tehokkaisiin supertietokoneisiin siitä on ollut mahdollista räätälöidä tehokkaita
ja skaalautuvia versioita. Hajautetusti tapahtuva kehitys on suuri talkooprojekti, josta jokainen
osallistuva osapuoli hyötyy moninkertaisesti enemmän kuin oman työpanoksensa verran.
Linuxin kehitystä onkin sanottu [maailman suurimmaksi ohjelmistoprojektiksi][Largest].

Suuri osa Internetin toiminnasta tukeutuukin Linuxiin aina liikennettä ohjaavista reititinlaitteista
suurten toimijoiden, kuten Googlen, Facebookin, Twitterin, Wikipedian ja Amazonin, palvelinsaleihin.

[![Red Hat](/images/redhat.png)][RedHat]
[![Fedora](/images/fedora.png)][Fedora]
[![Ubuntu](/images/ubuntu.png)][Ubuntu]
[![Debian](/images/debian.png)][Debian]
[![Linux Mint](/images/linuxmint.png)][Mint]
[![OpenSUSE](/images/opensuse.png)][openSUSE]

Linux-ydintä jaetaan tyypillisesti *jakeluiksi* kutsuttujen käyttöjärjestelmäkokonaisuuksien osana.
Tunnetuimpia jakeluita ovat esimerkiksi [Red Hat Enterprise Linux][RedHat], sen yhteisövetoinen versio
[Fedora][Fedora], [Ubuntu][Ubuntu], sen taustalla oleva yhteisöllisesti kehitettävä [Debian GNU/Linux][Debian],
[Linux Mint][Mint], [openSUSE][openSUSE] sekä lukuisat muut versiot. Koska jakelut sisältävät Linux-ytimen
lisäksi valtavan joukon muitakin ohjelmistoja, halutaan toisinaan antaa kunniaa myös GNU-projektin
aikaansaannoksille käyttämällä kokonaisuudesta nimitystä "GNU/Linux".

Jakeluina levitettäviä käyttöjärjestelmäversioita käytetään tyypillisesti työpöytäkäytössä (varsinaiset
työpöytäkoneet ja kannettavat tietokoneet) sekä palvelimissa. Näiden lisäksi Linux-ydin esiintyy
myös lukemattomissa kuluttajalaitteissa, joiden Linux-pohjaisuus ei näy päälle päin ja joiden käyttäjät
eivät edes tiedä käyttävänsä Linuxia. Näitä ovat muun muassa Android-puhelimet ja -tabletit, suuri osa
[reitittimistä ja langattomista tukiasemista][Zyxel], monet älytelevisiot ja [medialaitteet][NeoTV]
sekä Googlen kehittämään järjestelmään perustuvat [Chromebook][Chromebook]-kannettavat.

{{% wrapper class="leftimage" %}}
[![](/images/android-robot.png)](https://commons.wikimedia.org/wiki/File:Android_robot.svg "CC-by: Google")
{{% /wrapper %}}
Erityisesti Android-laitteiden raju yleistyminen on lisännyt Linux-pohjaisten laitteiden
käyttäjien määrän valtaviin lukemiin, vaikka suurin osa käyttäjistä ei
tätä itse tiedostakaan. Perinteisessä työpöytäkäytössä Linux-pohjaisten
järjestelmien osuus on vielä pysynyt melko vaatimattomana. Tämä lienee johtunut osaltaan virheellisestä
vaikeakäyttöisyyden mielikuvasta sekä ennen kaikkea siitä, että kuluttajat ostavat tietokoneensa valmiiksi
asennettuina ja laitteisiin esiasennettu järjestelmä on käytännössä lähes aina valmistajasta riippuen joko
Applen MacOS tai jokin Microsoftin Windows-versioista. Vuoden 2016 aikana Linuxin käyttöosuus on tilastoissa
kuitenkin noussut, syystä tai toisesta, jo yli kahden prosentin. Onko kyse kasvaneesta kiinnostuksesta vapaampaa ja
käyttäjän yksityisyyttä paremmin kunnioittavaa käyttöjärjestelmäalustaa kohtaan vai kuluttajalaitteiden painotuksen
yleisestä siirtymisestä puhelimiin ja tablettilaitteisiin?

Linuxin työpöytävalloitus on ollut jo pitkään vuosittainen vitsin aihe. "Onko tämä vuosi työpöytä-Linuxin vuosi?"
Varsinaiseen työpöytäkäyttöön Linux-järjestelmät ovat olleet oikeasti käyttöliittymiensä kannalta valmiita jo vuosia.
Työpöytäympäristöjä on ollut tarjolla jopa useampia erilaisiin makuihin. Valloitusta on kuitenkin hidastanut
erityisesti esiasennettujen laitteiden puute sekä kuluttajien haluttomuuus vaihtaa tutusta järjestelmästä
toiseen. Työpöytäkäytön vähentyminen on kuitenkin luonut uudenlaisen tilanteen ja samalla esimerkiksi
Googlen markkinoille tuomat Chromebook-laitteet ovat viimeisteltyinä ja pelkistettyinä tuotteina keränneet
uudenlaista suosiota myös Linuxille. Muun perinteisen tietokonemyynnin laskiessa [Chromebookit ovat lisänneet myyntiään][CBsales1] ja jopa vallanneet [Amazonin joulumyynnin kärkipaikat][CBsales2].

Oman lisänsä Linux-tarjontaan tuovat Androidin rinnalle nousseet uudet mobiilialustat, kuten
[Ubuntun puhelin- ja tablettiversio][UbuntuTouch], [Jollan][Jolla] [Sailfish OS][SailfishOS] sekä
Samsungin [Tizen][Tizen].

{{% wrapper class="psgallery" %}}
- [Linux ja KDE Plasma -työpöytä](/images/kde-10.jpg)
- [Linux ja Ubuntun Unity-työpöytä](/images/Ubuntu_14.04_LTS_-_3.png)
- [Kevyeksi tarkoitettu Linux-jakelu Lubuntu ja sen Lxde-työpöytä](/images/lxde-13.jpg)
- [Linux ja ElementaryOS:n työpöytä](/images/elementaryos-7.jpg)
- [Linux Mintin Cinnamon-työpöytä](/images/linuxmint-2.jpg)
- [Linuxiin pohjautuva Android-tabletti](/images/Android-screenshot.jpg)
- [Sailfish OS](/images/sailfishos-screenshot.jpg)
- [Linux ja Ubuntu puhelimessa](/images/Ubuntu_14.04_Unity8-1.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


[composminix]: https://groups.google.com/forum/#!msg/comp.os.minix/dlNtH7RRrGA/SwRavCzVE7gJ "comp.os.minix"
[RMS]: https://www.stallman.org/ "Richard M. Stallman"
[FSF]: http://www.fsf.org/ "Free Software Foundation"
[GNU]: https://www.gnu.org/ "GNU-projekti"
[FreeBSD]: http://www.freebsd.org/ "FreeBSD"
[Largest]: http://www.cio.com/article/3069529/linux/linux-is-the-largest-software-development-project-on-the-planet-greg-kroah-hartman.html "Maailman suurin ohjelmistoprojekti"
[RedHat]: https://www.redhat.com/rhel "RedHat"
[Fedora]: https://getfedora.org/ "Fedora"
[Ubuntu]: http://www.ubuntu.com/ "Ubuntu"
[Debian]: https://www.debian.org/ "Debian GNU/Linux"
[Mint]: https://linuxmint.com/ "Linux Mint"
[openSUSE]: https://www.opensuse.org/ "openSUSE"
[Zyxel]: http://www.zyxel.com/products_services/nbg5715.shtml?t=p "ZyXEL NBG5715"
[NeoTV]: https://www.netgear.com/home/products/connected-entertainment/streaming-players/NTV300SL.aspx "NeoTV Max"
[Chromebook]: https://www.google.com/chromebook/ "Chromebook"
[CBsales1]: http://www.digitaltrends.com/computing/chromebook-sales-up-end-2015/ "While PC sales continue to sink, Chromebooks swim to the surface"
[CBsales2]: http://www.omgchrome.com/chromebooks-best-selling-amazon-xmas/ "Chromebooks Top 3 Selling Laptops at Christmas, Say Amazon"
[UbuntuTouch]: http://www.ubuntu.com/phone "Ubuntu Touch"
[Jolla]: https://jolla.com "Jolla"
[SailfishOS]: https://sailfishos.org "Sailfish OS"
[Tizen]: https://www.tizen.org/ "Tizen"