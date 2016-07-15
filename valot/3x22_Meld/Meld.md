+++
Date = "2013-05-25T21:00:00.000Z"
Title = "Meld"
Description = "Meld on visuaalinen työkalu tekstitiedostojen vertailuun rinnakkain."
Week = "3x22"
Number = "126"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris"]
Tagit = ["Teksti","Ohjelmointi"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo126-meld.png"
+++


**Meld on visuaalinen työkalu tekstitiedostojen vertailuun rinnakkain.**

![ ](/images/valo126-meld.png "fig:valo126-meld.png") Perinteisesti
tekstitiedostojen eroja on vertailtu komentoriviohjelmalla nimeltä
*diff*. Meld tekee vastaavan vertailun sekä paljon muuta. Meld on
ikkunoitu graafinen ohjelma, joka näyttää vertailtavat tiedostot
rinnakkain ja merkitsee eroavat kohdat selkeästi ja havainnollisesti.
Tiedostojen vertailu tapahtuu riveittäin siten, että eroavat rivit
merkitään sinisellä värillä ja toisiaan vastaavat muuttuneet lohkot
kytketään selkeästi graafisesti yhteen. Lisäksi muuttuneiden rivien
sisällä eroavat merkit korostetaan, joten muuttuneet kohdat on hyvin
helppoa paikantaa. Poistetut tai lisätyt rivit, eli rivit, jotka
esiintyvät vain jommassakummassa tiedostossa, merkitään puolestaan
vihreällä värillä.

Kun vertailtavia tiedostoja selataan ylös ja alas, Meld selaa niitä
molempia yhtä aikaa rinnakkain niin, että tiedostojen toisiaan vastaavat
kohdat ovat samaan aikaan esillä. Tiedostojen vierityspalkkien rinnalla
on myös näkyvissä tiedostojen yleisnäkymä, jossa näkyvät muuttuneet
kohdat sinisellä ja vihreällä värillä merkattuina. Tätä ominaisuutta
hyödyntämällä eroavaisuuksien paikantaminen on helppoa pitkästäkin
tiedostosta. Meld mahdollistaa myös kolmen tekstitiedoston yhtäaikaisen
vertailun. Kolmenkeskeisessä vertailussa vertaillaan käytännössä
rinnakkain olevia tiedostoja pareittain, eli vasemmanpuoleista ja
keskimmäistä keskenään sekä keskimmäistä ja oikeanpuolimmaista
keskenään.

Pelkkien vertailujen lisäksi Meldillä on mahdollista tehdä muokkauksia.
Tiedostoihin voi kirjoittaa suoraan tekstiä tekstieditorin tapaan taikka
tuoda muutoksia vertailtavasta tiedostosta. Kunkin värillä merkityn
eroavan lohkon kohdalla on pieni nuolikuvake, jolla kyseisen version voi
kopioida vertailtavaan tiedostoon vastaavan lohkon tilalle. Jos
näppäimistöltä pidetään control-näppäintä pohjassa, vaihtuvat
nuolikuvakkeet kahdeksi nuoleksi, joista toinen osoittaa ylä- ja toinen
alaviistoon. Näitä painamalla valittu lohko voidaan kopioida
vastinlohkon edelle tai jälkeen ylikirjoittamatta aikaisempaa
vaihtoehtoa. Samat tuontitoiminnot löytyvät myös valikon kautta.
Muokatun tiedoston voi tallentaa haluamallaan nimellä.

Meldin asetuksilla voi jonkin verran vaikuttaa näkymän ulkoasuun.
Valittavissa ovat käytetyn kirjasimen lisäksi esimerkiksi tekstin
rivittäminen, rivinumerot sekä syntaksin korostaminen väreillä
tiedostossa käytetyn kielen mukaan.

Ohjelmalla voi vertailla yksittäisten tiedostojen lisäksi myös
hakemistoja ja versionhallinnassa olevia tiedostoja. Hakemistojen
vertailussa Meld näyttää molempien hakemistojen tiedostoluettelon johon
on merkitty puuttuvat, eroavat ja yhtenevät tiedostot eri tavoin.
Luettelosta voi valita eroavat tekstitiedostot vertailtaviksi.
Versionhallinnoista Meldin tukemia ovat muun muassa Git, Bazaar,
Mercurial ja Subversion. Meld sisältää rajoitetun joukon
versionhallinnan toimintoja. Se osaa näyttää työhakemiston sisällön ja
tiedostojen tilan, esimerkiksi onko tiedosto mukana versionhallinnassa
ja onko se muuttunut viimeisimmän *commitin* jälkeen. Muuttuneen
tiedoston valitsemalla pääsee vertaamaan nykyistä työversiota
viimeisimpään versionhallintaan lähetettyyn versioon, jolloin voi
tarkastella viimeisimmässä työskentelyrupeamassa tehtyjä muutoksia. Meld
kykenee myös suorittamaan joitakin yleisimmin käytettyjä
versionhallinnan toimintoja, kuten *commit*, *update*, *add*, *remove*
ja *delete*.

Meldin suomenkielinen käännös on vielä melko puolitiessään. Siitä on
vain noin [29 prosenttia
käännetty](https://l10n.gnome.org/module/meld/). Muita vastaavia avoimen
lähdekoodin työkaluja tekstitiedostojen visuaaliseen vertailuun ovat
muun muassa [Kdiff3](http://kdiff3.sourceforge.net/),
[Kompare](http://www.caffeinated.me.uk/kompare/) ja
[Diffuse](http://diffuse.sourceforge.net/). Wikipediasta löytyy
[vertailutaulukko](http://en.wikipedia.org/wiki/Comparison_of_file_comparison_tools)
useammasta vertailutyökalusta.

Kotisivu
:   <http://meldmerge.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, Mac OS X, Windows, FreeBSD, OpenBSD, NetBSD, Solaris

Asennus
:   Linux-jakeluihin ohjelma löytyy suoraan paketinhallinnasta tai
    ohjelman kotisivuilta. Ohjelma on asennettavissa myös Mac OS X:lle
    ja Windowsille, mutta näille ei ole varsinaista asennusohjelmaa. Mac
    OS X:ään asennuksen voi tehdä MacPorts- tai Fink-ohjelmistoilla ja
    ohjeet Meldin asentamiseen Windowsiin löytyvät [Gnome-projektin
    sivuilta](https://live.gnome.org/Meld/Windows).

{{% wrapper class="psgallery" %}}
-   [Meld näyttää vertailtavat tiedostot rinnakkain ja merkitsee
    toisiaan vastaavista kohdista muuttuneet rivit sinisellä värillä.
    Muuttuneet kohdat on yhdistetty toisiinsa niin, että on helppo nähdä
    vastinkohdat. Lisäksi muuttuneen rivin sisällä korostetaan
    punaisella värillä muuttuneet merkit. Tiedostojen vieritys vierittää
    molempia tekstejä rinnakkain. Vierityspalkkien vieressä on
    nähtävillä muuttuneet kohdat koko tiedoston
    matkalla.](/images/meld-1.png)
-   [Lisätyt tai poistetut rivit korostetaan vihreällä värillä ja
    niistäkin näkee selkeästi, mistä välistä teksti on poistettu tai
    mihin väliin se on lisätty. Tekstejä on helppo limittää tiedostosta
    toiseen painamalla nuolikuvaketta. Oletuksena tämä korvaa
    vastintekstin toisesta tiedostosta.](/images/meld-2.png)
-   [Tekstiä on mahdollista tuoda tiedostosta toiseen myös vastintekstin
    edelle tai jälkeen pitämällä control-näppäintä pohjassa samalla kun
    valitaan nuolikuvakkeella, kummalle puolelle vastintekstiä teksti
    tuodaan. Lopputulos sisältää tällöin siis molemmat tekstit halutussa
    järjestyksessä.](/images/meld-3.png)
-   [Oikealta puolelta on tuotu teksti vasemmalle puolella olleen
    tekstin alle.](/images/meld-4.png)
-   [Muutosten poisto ja tuonti puolelta toiselle on tehtävissä myös
    valikon kautta.](/images/meld-5.png)
-   [Meld voi vertailla myös kolmea tiedostoa rinnakkain. Myös
    hakemistojen ja versionhallintaan tallennettujen tiedostojen
    vertailu onnistuu.](/images/meld-6.png)
-   [Kolmen tiedoston vertailussa vertaillaan vierekkäisiä tiedostoja
    toisiinsa.](/images/meld-7.png)
-   [Meld osaa näyttää versionhallinnassa olevien tiedostojen statuksen
    sekä suorittaa muutamia yksinkertaisia versionhallinnan toimintoja,
    kuten *commit*, *update*, *add*, *remove* ja
    *delete*.](/images/meld-8.png)
-   [Meld ymmärtää useampaa versionhallintajärjestelmää (Git, Bazaar,
    Mercurial, Subversion,...) ja osaa näyttää viimeisimmän commitin
    jälkeen tiedostoihin tapahtuneet muutokset.](/images/meld-9.png)
-   [Kahden hakemiston vertailu Meldillä. Molemmissa
    tiedostoluetteloissa ovat lueteltuina samat tiedostonimet. Vihreällä
    merkityt esiintyvät vain kyseisessä hakemistossa ja vastaavasti
    yliviivatut eivät esiinny tarkasteltavassa hakemistossa.
    Tavallisella korostamattomalla mustalla näkyvät tiedostot ovat
    yhtenevät ja punaisella kirjoitetut ovat saman nimiset, mutta
    toisistaan eroavat. Tiedostoa klikkaamalla pääsee vertailemaan
    vastintiedostoja.](/images/meld-10.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


