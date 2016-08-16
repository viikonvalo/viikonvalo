+++
Date = "2012-10-20T21:00:00.000Z"
Title = "Sozi"
Description = "Sozi on ohjelma animoitujen diaesitysten tekoon."
Week = "2x43"
Number = "95"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD"]
Tagit = ["Esitys","Toimisto","Opetus"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo95-sozi.png"
+++


**Sozi on ohjelma animoitujen diaesitysten tekoon.**

![ ](/images/valo95-sozi.png "fig:valo95-sozi.png") Sozi on
[Inkscape](Inkscape)-vektoripiirto-ohjelman lisäosana toimiva
ohjelma, jolla voi tehdä näyttäviä animoituja esityksiä, jotka ovat
katseltavissa www-selaimella lähes kaikilla alustoilla. Sozin idea on
sama kuin Flashilla toteutetussa Prezissä. Esityksen vaiheet eivät ole
erillisinä "kalvoina" vaan sisältönä samassa suuressa julisteessa, jossa
esityksen edetessä siirrytään eri kohtiin ja samalla tarvittaessa
zoomataan ja käännetään katselukulmaa.

Sozi-esitys on standardin mukainen svg-muotoinen vektorikuva, johon on
lisätty toiminnallisuutta Javascript-ohjelmointikielellä. Sozin suurena
etuna esimerkiksi Preziin on se, että Sozi-esityksen katsomiseen riittää
mikä tahansa nykyaikainen www-selain eikä sen lisäksi tarvita mitään
muuta, kuten Prezin katsomiseen tarvittavaa Flash-lisäosaa. Tämä
tarkoittaa samalla sitä, että Sozi-esitykset ovat katsottavissa myös
Applen iPad- ja iPhone-laitteilla.

Esityksen luominen Inkscapessa on toteutettu käytännössä siten, että
kaikki sisältö luodaan ensin piirtoalueelle yhdelle (tai useammalle)
tasolle ja lopuksi omalle erilliselle tasolleen luodaan joukko näytön
muotoisia suorakaiteita, jotka Sozilla määrätään esityksen
pysähdyspisteiden näkymiksi, eräänlaisiksi "ikkunoiksi" sisältöön.
Esitystä katseltaessa siirrytään siis animoidusti tällaisesta ikkunasta
toiseen. Inkscapen Sozi-lisäosa antaa käyttöliittymän, jolla esitykseen
voi lisätä pysähdyspisteitä ja vaihtaa niiden järjestystä. Kullekin
pysähdyspisteelle voi halutessaan määritellä ajoitetun keston.
Pysähdyspisteiden väliseen siirtymään käytettävä aika ja sen kiihtyvyys
ovat myös asetettavissa tällä työkalulla.

Esitystä selaimella katseltaessa sitä ohjataan eteenpäin ja taaksepäin
näppäimistöllä välilyönnillä, enterillä, pageup-, pagedown-, home-, end-
ja nuolinäppäimillä. Vaihtoehtoisesti esityksessä voi edetä eteenpäin
hiiren ykkösnäppäintä painamalla. Hiiren kolmosnäppäintä, eli rullaa,
painamalla saa esiin listan esityksen näkymistä, joista voi hiirellä
klikkaamalla valita haluamansa. Muita käytössä olevia näppäimiä ovat
ainakin koko esityskuvan kerralla näyttävä **f**, esitystä vastapäivään
kiertävä **r**, saman myötäpäivään tekevä **R** sekä näkymään sisään ja
ulos zoomaavat **+** ja **-**. Näkymäluettelon saa esiin myös
näppäimistöllä painamalla **t**-näppäintä.

Esitystä tehtäessä on syytä huomioida ainakin seuraavat esityksen
animoinnin sujuvuuteen vaikuttavat seikat. Svg-kuvan elementtien
pehmennystä (blur) on syytä välttää, sillä pehmennettyjen elementtien
animointi näyttää olevan hidasta ja aiheuttaa nykimistä esitystä
katsottaessa. Jossain tapauksessa myös suuri määrä tekstiä voi aiheuttaa
animoinnin nykimistä. Tällaisessa tilanteessa animointia on mahdollista
nopeuttaa muuttamalla tekstit poluiksi Inkscapessa. Esityksessä on syytä
myös pysyttäytyä yleisimmin käytetyissä kirjasimissa, jos haluaa, että
esitys näyttää täsmälleen samalta kaikilla koneilla. Erikoisempiakin
kirjasimia voi toki käyttää, mutta tällöin voi olla myös tarpeen muuttaa
tekstit poluiksi Inkscapessa, jotta esitys näyttää samalta myös
koneella, jolla sitä katsellaan. Tekstejä poluksi muutettaessa täytyy
tietenkin muistaa, että tämän jälkeen tekstin muokkaaminen tekstinä ei
ole enää mahdollista.

Kotisivu
:   <http://sozi.baierouge.fr/wiki/en:welcome>

Lisenssi
:   [GNU GPL](GNU_GPL) v.3.0

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD, NetBSD, OpenBSD sekä muut
    alustat, joilla [Inkscape](Inkscape "wikilink") on käytettävissä.
    Sozi-esitysten katselu onnistuu millä tahansa alustalla, johon saa
    modernin svg-tiedostoja osaavan selaimen.

Asennus
:   Asennuspaketit ja -ohjeet löytyvät ohjelman kotisivuilta. Ubuntuun
    Sozi löytyy myös suoraan paketinhallinnasta. Ubuntun kanssa on hyvä
    varmistaa, että paketti *libcanberra-gtk-module* on asennettuna.

Esimerkki
:   [Viikon VALO presents SOZI](http://viikonvalo.fi/files/vv-sozi.svg)

Käyttöohjeet
:   [Lyhyt video-tutoriaali Sozin
    käytöstä](http://www.youtube.com/watch?v=QOuf7w_Qesk)

{{% wrapper class="psgallery" %}}
-   [Koko svg-kuvana tehty sisältö ennen esityksen vaiheiden
    lisäämistä.](/images/sozi-1.png)
-   [Svg-tiedostoon on lisätty näytön muotoisia suorakaiteita kunkin
    pysähdyspisteen näkymän kohdalle.](/images/sozi-2.png)
-   [Sozi on käytettävissä valikosta Inkscapen
    lisäosana.](/images/sozi-3.png)
-   [Sozin käyttöliittymä, jossa voi lisätä pysähdyspisteitä. Kukin
    ruutu valitaan vuorollaan kuvasta ja lisätään tässä ikkunassa
    pysähdyspisteeksi.](/images/sozi-4.png)
-   [Siirtymän nopeuden voi valita tasaiseksi (linear) tai eri tavoin
    kiihtyväksi tai hidastuvaksi.](/images/sozi-5.png)
-   [Sozi-esityksen katselua Chromium-selaimella.](/images/sozi-6.png)
-   [Sozi-esityksen katselua Chromium-selaimella.](/images/sozi-7.png)
-   [Näkymälistan saa esiin joko hiiren keskimmäistä nappia, eli rullaa,
    painamalla tai näppäimistöltä t-kirjainta
    painamalla.](/images/sozi-8.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*uKvakaappaukset: Pesasa*

