+++
Date = "2012-07-07T21:00:00.000Z"
Title = "KMediaFactory"
Description = "KMediaFactory on helppokäyttöinen vapaa ohjelma video-DVD-levyn luomiseen."
Week = "2x28"
Number = "80"
Alustat = ["Linux","FreeBSD","OpenBSD","NetBSD"]
Tagit = ["Video","DVD"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo80-kmediafactory.png"
+++


**KMediaFactory on helppokäyttöinen vapaa ohjelma video-DVD-levyn
luomiseen.**

![ ](/images/valo80-kmediafactory.png "fig:valo80-kmediafactory.png")
KMediaFactorylla on helppoa ja nopeaa luoda kotivideoista,
tv-tallenteista ja kuvaesityksistä valikoilla varustettu DVD-levy
polttovalmiiksi. Valikoiden tekeminen on helppoa käyttämällä
valittavissa olevia valmiita pohjia. Ohjelma on kotimaista tuotantoa.
Sen tekijä on suomalainen Petri Damstén.

DVD-levyn luonti etenee neljässä vaiheessa.

Projektin asetukset
-------------------

Ensimmäisessä vaiheessa ohjelmalle kerrotaan projektin asetukset, eli
luotavan DVD-levyn otsikko, levyn tyyppi, jolle ovat vaihtoehtoina
"DVD-PAL" ja "DVD-NTSC", haluttu kuvasuhde, eli "4:3" tai "16:9", sekä
kansio, johon lopputulos tallennetaan.

Sisältö
-------

Toisessa vaiheessa ohjelmalle annetaan DVD-levyn sisältö. Oletuksena
projektiin on mahdollista lisätä kahta tyyppiä olevia sisältöraitoja:
videoita ja kuvaesityksiä. Tarvittavan lisäosan asentamalla projektiin
on mahdollista lisätä myös DVB-videoita, eli digi-tv-tallenteita.
Lisättävien video-tiedostojen tulee olla jo valmiiksi DVD-yhteensopivia
MPEG2-videoita, jotka voi omista tallenteista tehdä ja leikata
esimerkiksi [OpenShot](OpenShot)-ohjelmalla. Kuvaesitykseksi
taas kelpaa joukko JPG- tai PNG-muotoisia kuvia. Ohjelman kotisivulla
luvataan, että kuvaesityksen voisi tehdä myös valmiista PDF- tai
ODP-muotoisesta esityksestä, mutta ainakaan Ubuntun versiolla
kokeiltaessa tämä toiminto ei tuntunut toimivan. Kullekin raidalle on
määriteltävissä erikseen otsikko, esikatselukuva, kuvasuhde sekä
kappalejako. Videoraidalle voi lisäksi määritellä ääniraitojen kielet
sekä tekstitykset ja kuvaesitykselle taustalla soitettavat äänitiedostot
sekä tekstityksenä toimivien kommenttien asetukset.

Valikoiden ulkoasu
------------------

Kolmannessa vaiheessa valitaan DVD-levyn valikoiden ulkoasu tarjolla
olevista pohjista. Valmiita pohjia valikoille on kourallinen ja muutaman
yhteisön tekemän pohjan lisää saa ladattua verkosta painamalla
tähtikuvaketta. Osaava voi myös ottaa mallia olemassa olevista pohjista
ja tehdä omansa. Valitun pohjan asetuksia pystyy vielä jonkin verran
säätämään klikkaamalla hiiren oikealla napilla pohjan kuvaketta.
Tyypillisiä säädettävissä olevia asetuksia ovat taustakuva, taustaäänet,
pääotsikon ja raitojen otsikoiden fontit ja niiden värit, soitetaanko
ensimmäinen raita heti, kun levy laitetaan soittimeen, mitä tehdään
raidan soittamisen jälkeen ja valikoiden kieli.

Materiaalin valmistelu
----------------------

Kun kaikki muut asetukset on saatu tehtyä, valmistellaan neljännessä ja
viimeisessä vaiheessa materiaali DVD-levyn polttoa varten. Tässä
vaiheessa valittavina on neljä eri vaihtoehtoa: DVDAuthor-projekti,
DVD-kansio, K3b-projekti ja ISO-levykuva. Näistä vaihtoehdoista
DVDAuthor-projekti tekee DVDAuthor-ohjelman kanssa yhteensopivan
projektin DVD-levyn polttoa varten. DVD-kansio on DVD-poltto-ohjelmalla
levylle poltettavissa oleva kansiorakenne, josta tulevaa levyä voi myös
esikatsella esimerkiksi Xine-ohjelmalla. K3b-projekti on K3b-nimisen
levynpoltto-ohjelman käsittelemässä projektimuodossa. Neljäs vaihtoehto,
eli ISO-levykuva on ehkä kaikkein helpoin, sillä siinä lopputuloksena on
vain yksi DVD-levyä esittävä tiedosto, jonka voi
levykuvanpolttotoiminnolla polttaa suoraan DVD-levylle
poltto-ohjelmalla. ISO-kuvan esikatselu onnistuu esimerkiksi
[VLC-mediasoittimella](VLC-mediasoitin).

KMediaFactory on rakennettu laajennettavaksi käyttämällä hyväksi
[opendesktop.org](http://opendesktop.org)-sivustoa. Erilaisten pohjien
tekijät ovat julkaisseet ne opendesktop.org-sivustolla ja KMediaFactory
osaa lisäpohjia etsiessä hakea niitä tuolta. Sivusto pitää yllä
pisteytyksiä ja lataustilastoja lisäosista ja sovelluksessa on
mahdollista järjestää hakutulokset näiden tietojen perusteella. Samalla
tavalla työkalut/tools-valikon kautta on mahdollista asentaa helposti
lisäosia opendesktop.org-sivustolta. DVB-tiedostojen lisääminen
projektiin tapahtuu juuri tällaisella lisäosalla.

Kotisivu
:   <http://code.google.com/p/kmediafactory/> ja
    <http://kde-apps.org/content/show.php?content=20121>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, FreeBSD, OpenBSD, NetBSD

Asennus
:   Ohjelma löytyy oletettavasti suuresta osasta Linux-jakeluita suoraan
    paketinhallinnasta. Lähdekoodit ovat saatavilla ohjelman
    kotisivuilta.

{{% wrapper class="psgallery" %}}
-   [Aloitetaan uusi projekti.](/images/kmediafactory-1.png)
-   [Lisätään projektiin materiaalia.](/images/kmediafactory-2.png)
-   [Yksi videoraita lisätty levylle.](/images/kmediafactory-3.png)
-   [Ensimmäisen videoraidan asetuksia. Raitaan voidaan lisätä
    kappaleita, joihin voidaan hypätä suoraan. Esikatselukuvat kullekin
    kappaleelle sekä koko raidalle.](/images/kmediafactory-4.png)
-   [Ääniraidan kielen valinta ja tekstityksen
    asetukset.](/images/kmediafactory-5.png)
-   [Tekstityksen asetukset.](/images/kmediafactory-6.png)
-   [Still-kuvista voidaan luoda kuvaesityksiä lisäämällä niitä omalle
    kuvaesitysraidalle. Myös kuvaesitykseen voidaan merkitä
    kappalejaot.](/images/kmediafactory-7.png)
-   [Ääniraita kuvaesitykselle erillisestä äänitiedostosta. Tässä Open
    Goldberg Variationsia mp3-tiedostona.](/images/kmediafactory-8.png)
-   [Kuvaesityksen tekstitysten asetukset. Tekstityksinä näytetään
    kunkin kuvan kohdalla sen
    "kommentti"-kenttä.](/images/kmediafactory-9.png)
-   [Kaksi raitaa lisättynä: yksi video ja yksi
    kuvaesitys.](/images/kmediafactory-10.png)
-   [Oletuksena valikoille on valittavissa kolme mallipohjaa. Tässä
    mallissa ensimmäinen raita on esillä oletuksena ja muut valinnan
    takana.](/images/kmediafactory-11.png)
-   [Toisessa mallipohjassa molemmat raidat ovat esillä
    esikatselukuvineen.](/images/kmediafactory-12.png)
-   [Mallipohjien säädettävät asetukset saa esille klikkaamalla pohjan
    kuvaketta hiiren oikealla napilla.](/images/kmediafactory-13.png)
-   [Muutama pohja lisää on ladattavissa opendesktop.org:ista
    KMediaFactoryn lisäosien asentajalla.](/images/kmediafactory-14.png)
-   [Matka-aiheinen pohja.](/images/kmediafactory-15.png)
-   [ISO-levykuvan luonti käynnissä. Tämän jälkeen DVD-levy voidaan
    polttaa tästä kuvasta.](/images/kmediafactory-16.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

