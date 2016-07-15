+++
Date = "2014-09-20T21:00:00.000Z"
Title = "Subtitle Editor"
Description = "Subtitle Editor on vapaa työkalu videoiden tekstitysten tekemiseen ja kääntämiseen."
Week = "4x39"
Number = "195"
Alustat = ["Linux","FreeBSD","OpenBSD","NetBSD"]
Tagit = ["Video","Teksti"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo195-subtitleeditor.png"
+++


**Subtitle Editor on vapaa työkalu videoiden tekstitysten tekemiseen ja
kääntämiseen.**

![ ](/images/valo195-subtitleeditor.png "fig:valo195-subtitleeditor.png")
Subtitle Editor on ohjelma, jolla voi luoda ja muokata videotiedostoihin
liittyviä tekstitystiedostoja. Tällaisia ovat esimerkiksi paljon
käytetyt [SubRip](http://en.wikipedia.org/wiki/SubRip)-tekstitykset, eli
srt-päätteiset tekstitystiedostot. Ohjelma osaa käsitellä monessa eri
tiedostomuodossa tallennettua tekstimuotoista tekstitystä.
Tekstitystiedostot sisältävät tyypillisesti tiedon näytettävistä
teksteistä, näyttämisen aloitusajan millisekunteina sekä näytettävän
tekstityksen keston. Monet videotoistimet, kuten
[VLC-mediasoitin](VLC-mediasoitin), osaavat näyttää
erillisessä tiedostossa tallennettuja tekstityksiä videotiedostojen
yhteydessä. Useimpia tekstimuotoisia tekstitystiedostoja on mahdollista
muokata suoraan tekstinä, mutta hyvällä ja havainnollisella työkalulla
muokkaaminen on vaivattomampaa. Subtitle Editor sisältää muun muassa
työkalut tekstitysten muokkaamiseen, tekstitetyn videon
esikatselutoiminnon sekä aikajanamaisen näkymän videon ääniraitaan.

Ohjelman muokkausnäkymä voi olla joko ajoitustilassa, jossa näkyvissä
ovat tekstien alku- ja loppuajat sekä kesto, taikka käännösnäkymässä,
jossa voi kääntää jo oikein ajoitettua tekstitystä toiselle kielelle.
Ajoitusnäkymässä valittujen tekstitysten aloitusaikaa ja kestoa voi
muokata valikoiden monipuolisilla toiminnoilla. Useimmin käytetyille
valikoista saataville toiminnoille on helppoa määritellä omia
pikanäppäimiä viemällä hiiren osoitin niiden päälle ja painamalla
haluttua pikanäppäintä.

Videonäkymään voi avata halutun videotiedoston, esimerkiksi elokuvan tai
tv-sarjan jakson, johon halutaan luoda tekstitystä. Videonäkymä näyttää
muokattavan tekstityksen ajoituksen mukaisesti videon päällä.

Aaltomuotonäkymässä (Waveform) näytetään siihen avatun äänitiedoston,
joko videon ääniraidan tai jonkin ulkoisen tiedoston, aaltomuotoinen
esitys aikajanana. Aikajanan päälle on merkitty kukin muokkausnäkymässä
näkyvä tekstitys omana lohkonaan. Lohkoja voi hiirellä vetämäääl
siirrellä ja venytellä halutun kokoiseksi. Näin tekstejä ei tarvitse
sijoitella vain korvakuulolla vaan voi hyödyntää myös ääniraidan
aaltomuodossa näkyviä vaihteluita. Aaltomuotonäkymää voi zoomata ja
skrollata mieleisekseen.

Kun videota toistetaan esikatselunäkymässä, aaltomuotonäkymä seuraa
äänen toiston etenemistä näyttäen koko ajan, missä kohtaa ja minkä
tekstityksen kohdalla mennään.

Subtitle Editor osaa hyödyntää käyttöjärjestelmään asennettua
oikolukutyökalua, esimerkiksi Voikkoa, ja huomauttaa kirjoitusvirheistä.
Virheidentarkistustyökalu näyttää kootusti kaikki sen löytämät
tekstitysten ajoitukseen liittyvät virheet, kuten tekstitysten
päällekkäisyydet taikka kestoltaan määriteltyjä raja-arvoja lyhyemmät
tai pidemmät tekstitykset. Automaattinen korjaustoiminto osaa myös
korjata suurimman osan näistä virheistä lähinnä kai säätämällä
tekstitysten kestoja.

Tekstityksille voi myös lisäillä erilaisia tyylittelyitä, kuten värejä,
riippuen käytettävästä tallennusmuodosta. Kannattaa huomioida, että
kaikki tallennusmuodot ja videosoittimet eivät välttämättä tue
tyylittelyitä.

Ohjelma tukee ainakin seuraavia tiedostomuotoja (tiedostopääte
sulkeissa):

-   Adobe Encore DVD (NTSC) (txt)
-   Adobe Encore DVD (PAL) (txt)
-   [Advanced Sub Station
    Alpha](http://en.wikipedia.org/wiki/SubStation_Alpha#Advanced_SubStation_Alpha)
    (ass)
-   BITC (Burnt-in timecode) (txt)
-   DCSubtitle (xml)
-   [MicroDVD](http://en.wikipedia.org/wiki/MicroDVD) (sub)
-   MPL2 (txt)
-   MPsub (sub)
-   Plain Text Format (txt)
-   [Sami](http://en.wikipedia.org/wiki/SAMI) (smi)
-   SBV (sbv)
-   Spruce STL (stl)
-   [SubRip](http://en.wikipedia.org/wiki/SubRip) (srt)
-   [Sub Station Alpha](http://en.wikipedia.org/wiki/SubStation_Alpha)
    (ssa)
-   Subtitle Editor Project (xml)
-   [SubViewer](http://en.wikipedia.org/wiki/SubViewer) 2.0 (sub)
-   Timed Text Authoring Format 1.0 (xml)

Kotisivu
:   <http://home.gna.org/subtitleeditor/>

Lisenssi
:   [GNU GPL](GNU_GPL) v3

Toimii seuraavilla alustoilla
:   Linux, FreeBSD, OpenBSD, NetBSD

Asennus
:   Ohjelma on ladattavissa sen kotisivuilta. Linux-jakeluihin se löytyy
    todennäköisesti jakelun omasta pakettivarastosta.

Ohjeita
:   [Subtitling with Linux
    Tutorial](http://sub.wordnerd.de/linux-subs.html)

{{% wrapper class="psgallery" %}}
-   [Tekstityksen ajoitusnäkymä ja videon
    esikatselu.](/images/subtitleeditor-1.jpg)
-   [Tekstitysten sijainnit ja kestot on merkitty aaltomuotonäkymän
    aikajanan päälle lohkoina, joita voi siirrellä ja venytellä
    hiirellä.](/images/subtitleeditor-2.jpg)
-   [Tekstin ajoituksen virheet, kuten päällekkäisyydet, näytetään
    punaisella korostuksella.](/images/subtitleeditor-3.jpg)
-   [Käännöstilassa ei näytetä tekstitysten ajoituksia vaan rinnakkain
    alkuperäisen kielen tekstitykset ja käännetyt
    tekstit.](/images/subtitleeditor-4.jpg)
-   [Valikoista löytyy useita tekstitysten tekemistä helpottavia
    työkaluja, kuten korvaustoiminto ja
    oikoluku.](/images/subtitleeditor-5.jpg)
-   [Virheidentarkistustyökalu näyttää kaikki löydetyt
    ajoitusviheet.](/images/subtitleeditor-6.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


