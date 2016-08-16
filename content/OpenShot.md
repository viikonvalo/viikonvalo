+++
Date = "2012-06-30T21:00:00.000Z"
Title = "OpenShot"
Description = "OpenShot korkeatasoinen vapaa ohjelmisto videoeditointiin."
Week = "2x27"
Number = "79"
Alustat = ["Linux"]
Tagit = ["Video"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo79-openshot.png"
+++


**OpenShot korkeatasoinen vapaa ohjelmisto videoeditointiin.**

![ ](/images/valo79-openshot.png "fig:valo79-openshot.png") OpenShot on
käyttöliittymältään varsin selkeä ja helposti opittava ohjelmisto. Sillä
onnistuu niin yksinkertainen videoleikkeiden yhteen liittäminen kuin
monimutkaisempien useita video- ja ääniraitoja, siirtymiä, tehosteita ja
otsikoita sisältävien kokonaisuuksien luominenkin. Ohjelma tukee
lukuisia video- ja ääniformaatteja. Ohjelman laitevaatimukset eivät ole
suuren suuret. Itse videoiden editointi sujuu yllättävänkin hyvin
suorituskyvyltään hieman vaatimattomammallakin tietokoneella, kuten
miniläppärillä. Koneen hitauden toki huomaa siirtymiä ja raskaampia
tehosteita esikatsellessa, mutta itse editointiin sillä ei välttämättä
ole suurta vaikutusta. Varsinaisen editoinnin jälkeen tapahtuva
lopullisen videotiedoston luominen toki on sitten jo raskaampi suoritus,
josta myös heikkotehoisempi kone suoriutuu, vaikkakin selvästi
pidemmässä ajassa kuin tehokkaammat koneet.

OpenShotin käyttöliittymä koostuu kolmesta osiosta:

-   **"luetteloruutu"**, joka luettelee omilla välilehdillään
    projektissa käytettävissä olevat tiedostot, siirtymät ja tehosteet,
-   **esikatseluruutu**, jossa aikaansaannosta voi katsoa
    reaaliaikaisena videona,
-   useammista raidoista koostuva
    **[aikajana](http://vimeo.com/29131615)**, jolle käytettyjä video-,
    ääni- ja kuvatiedostoja voi sijoitella.

![](/images/Charles_Chaplin.png "fig:Charles_Chaplin.png") Yksinkertaisimmillaan
[videon editointi tapahtuu seuraavasti](http://vimeo.com/34708256).
Ensin aloitetaan uusi projekti, eli valitaan projektille nimi ja
tallennuskansio, kerrotaan videotuotoksen arvioitu pituus sekä valitaan
projektille profiili. Profiililla valitaan käytännössä videon kuvakoko,
kuvasuhde sekä kuvataajuus. Valittavan profiilin määrää videon
käyttötarkoitus. Esimerkiksi DVD-levyn tekoon sopivia profiileja ovat
"DV/DVD PAL" ja "DVD/DVD Widescreen PAL" riippuen videomateriaalin
kuvasuhteesta. Tämän jälkeen projektin tiedostolistaan tuodaan
työkalupalkin pluspainiketta painamalla halutut video-, ääni- ja
kuvatiedostot. Tästä listasta tiedostot voi tämän jälkeen sijoitella
hiirellä raahaamalla paikoilleen aikajanan raidoille. Ylemmällä raidalla
olevat kuvat ja videot näkyvät aina samalla kohtaa olevan alemman raidan
sisällön päällä. Kustakin raidasta voi erikseen valita, näytetäänkö sen
kuvaa ja soitetaanko sen ääntä. Näin on mahdollista käyttää esimerkiksi
yhden videon kuvaa ja toisen ääntä. Raitoja saa lisättyä aikajanan
työkalupalkin pluspainikkeella. Kun kaikki halutut leikkeet ovat
aikajanalla paikoillaan, voidaan kootusta kokonaisuudesta luoda uusi
videotiedosto työkalupalkin "Vie videoksi"-toiminnolla. Tässä vaiheessa
kysytään vielä luotavan tiedoston tiedot. Tiedot on jaoteltu kahteen
välilehteen: yksinkertainen ja lisäasetukset. Yksinkertaiset asetukset
sisältävät valmiina valintoina yleisimmät käyttökohteen, kuten
DVD-videon ja web-videon luonnit. Lukuisia tarkempia yksityiskohtia voi
kuitenkin muokata lisäasetusvälilehdeltä. Lopullisen videon koostaminen
saattaa kestää materiaalin määrästä ja laadusta riippuen lyhyemmän tai
pidemmän aikaa.

Pelkän videoleikkeiden asettelun lisäksi kokonaisuuteen voidaan luoda
erilaisia siirtymiä ja tehosteita. Siirtymällä tarkoitetaan sitä, miten
yhdestä videoleikkeestä siirrytään toiseen esimerkiksi vähitellen
häivyttämällä tai vaikka kaihdinefektillä. Käytännössä tämä tehdään
laittamalla peräkkäiset video-otokset kahdelle peräkkäiselle raidalle
hieman limittäin ja raahaamalla siirtymälistasta valittu siirtymä tähän
limittäiseen kohtaan ja venyttämällä siirtymä sopivan mittaiseksi. Näin
siirtymän kohdalla toisella raidalla oleva kuva häviää vähitellen
näkyvistä ja toisella oleva kuva tulee samalla esiin. Toteutukseltaan
siirtymät ovat vain harmaasävyisiä png-, pgm- tai svg-kuvia ja siirtymä
etenee siten, että ylemmän raidan kuva muuttuu läpinäkyvästä vähitellen
näkyväksi siirtymäkuvan harmaasävyjen mukaan. Näin myös omien
siirtymäefektien tekeminen on varsin helppoa.

![](/images/TrinitySquare_Sepia_Film_Strip.png "fig:TrinitySquare_Sepia_Film_Strip.png")
Tehosteet puolestaan ovat video- tai äänileikkeen sisältöön luotavia
muunnoksia. Kuvaan voidaan esimerkiksi lisätä satunnaisia naarmuja ja
tärinää sekä muuttaa sen värit seepiaksi, jolloin video saadaan
näyttämään vanhalta filmiltä. Äänitehosteilla voidaan haluttuun
leikkeeseen lisätä vaikka bassoa tai kaikua.

OpenShotissa kukin aikajanalla oleva leike esittää pätkää jostain
valitusta tiedostosta. Pätkä alkaa jostain kohtaa tiedostoa ja kestää
jonkin määrätyn pituuden. Samasta tiedostosta voi olla useita leikkeitä
eri kohdissa aikajanaa ja näitä leikkeitä voi saksityökalulla jakaa
kahtia. Kutakin leikettä voi myös venyttää venytystyökalulla, jolloin
käytännössä siirretään käytettävän leikkeen alku- tai loppukohtaa
kyseisessä video- tai äänitiedostossa. Hiiren toisella napilla leikettä
klikkaamalla saadaan esiin valikko yleisimmistä leikkeelle tehtävistä
operaatioista, kuten alun tai lopun häivytys. Valikon kautta pääsee myös
leikkeen ominaisuudet sisältävään ikkunaan, jossa pääsee muokkaamaan
kaikkia leikkeeseen vaikuttavia tietoja, kuten sen alku- ja loppukohtaa,
nopeutta, kokoa, sijaintia, tehosteita ja niin edelleen.

Videoiden ja äänitiedostojen lisäksi projektiin voi lisätä kuvia sekä
staattisia ja animoituja otsikoita. Projektiin lisättyjä kuvia voi
asetella aikajanan raidoille haluttuihin kohtiin ja venytystyökalulla
venyttää niiden näyttämisen halutun pituiseksi. Näin voi helposti luoda
vaikka kuvaesityksen ja laittaa toiselle raidalle taustalle musiikkia
soimaan. Otsikkoja varten OpenShotissa on joukko valmiita pohjia, joista
voi valita mieleisimmän. Pohjissa tausta on tyypillisesti läpinäkyvä,
jolloin otsikkoleikkeen läpi näkyy alemmalla raidalla oleva video.
Tekstin kirjasimen ja värin voi työkalulla valita haluamakseen.
Tarvittaessa luotavaa otsikkoa voi muokata täysin mielensä mukaan
valitsemalla "Käytä laajempaa editoria". Otsikkokuvat ovat käytännössä
svg-kuvia ja tämä laajempi muokkaaminen tapahtuukin
[Inkscape](Inkscape "wikilink")-ohjelmalla, joten otsikoita tehdessä
vain taivas on rajana. OpenShotiin on mahdollista lisätä myös
[animoituja otsikoita](http://vimeo.com/13152065). Myös näitä varten
ohjelmassa on valmiita pohjia, joista valita. Animoitujen otsikoiden
käyttämiseen tarvitaan erillinen
[Blender](http://www.blender.org/)-ohjelmisto, joka hoitaa animaatioiden
renderöinnin.

Kotisivu
:   <http://www.openshot.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux

Asennus
:   Useimmissa Linux-jakeluissa ohjelma löytyy suoraan
    pakettivarastoista. Viimeisen versio löytyy ohjelman kotisivujen
    [download](http://www.openshot.org/download/)-osiosta. Sivuilta
    löytyy myös linkki [AV
    Linux](http://www.bandshed.net/AVLinux.html)-live-DVD-levyyn. Tältä
    DVD-levyltä tietokoneen käynnistämällä voi OpenShot-ohjelmaa
    kokeilla asentamatta sitä tai linuxia.

Käyttöohjeet
:   [Käyttöohjeet](http://openshotusers.com/help/1.4/en/) (englanniksi)
:   Ohjelmaan löytyy suomenkielinen opas [FLOSS
    Manuals](http://fi.flossmanuals.net/openshot/)-sivustolta
:   [Openshot Users](http://www.openshotusers.com/forum/) -foorumi,
    jossa käydään keskustelua OpenShotista sekä jaetaan tutorialeja,
    vinkkejä, siirtymiä, tehosteita sekä esitellään ohjelmalla tehtyjä
    esimerkkivideoita.

Videoita
:   Ohjelman toimintoja esitteleviä videoita löytyy kotisivujen
    [video-osastolta](http://openshot.org/videos/).

{{% wrapper class="psgallery" %}}
-   [Aloitetaan uusi projekti](/images/openshot-1.png)
-   [Lisätään halutut tiedostot listaan ja raahataan leikkeet kohdilleen
    aikajanalle.](/images/openshot-2.png)
-   [Lisätään ääniraita.](/images/openshot-3.png)
-   [Kuvalle ja äänelle voi lisätä tehosteita.](/images/openshot-4.png)
-   [Leikkeellä on useita muokattavissa olevia
    ominaisuuksia.](/images/openshot-5.png)
-   [Leikkeitä voi leikata useampaan osaan.](/images/openshot-6.png)
-   [Ohjelmassa on useita valmiita
    otsikkotyyppejä.](/images/openshot-7.png)
-   [Otsikkopohjia voi muokata vapaasti
    Inkscapella.](/images/openshot-8.png)
-   [Otsikon käyttö ja siirtymän lisääminen.](/images/openshot-9.png)
-   [Ohjelmassa on useita valmiita pohjia animoiduille otsikoille.
    Animoitujen otsikoiden käyttö vaatii Blender-ohjelman
    asentamisen.](/images/openshot-10.png)
-   [Animoitu otsikko voidaan lisätä aikajanalle kuin mikä tahansa
    videoleike.](/images/openshot-11.png)
-   [Lopulliseen videoiden renderöintiin on useita käyttövalmiita
    asetuksia.](/images/openshot-12.png)
-   [Lopullisen videon luonti kestää koneen tehoista riippuen jonkin
    tovin.](/images/openshot-13.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

