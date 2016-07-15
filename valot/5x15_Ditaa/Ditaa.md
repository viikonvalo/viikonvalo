+++
Date = "2015-04-11T21:00:00.000Z"
Title = "Ditaa"
Description = "Ditaa on komentoriviohjelma ascii-grafiikkana piirrettyjen diagrammien muuntamiseen PNG-kuviksi."
Week = "5x15"
Number = "223"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD"]
Tagit = ["Toimisto","Kuvat","Kaaviot"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo223-ditaa.png"
+++


**Ditaa on komentoriviohjelma ascii-grafiikkana piirrettyjen diagrammien muuntamiseen PNG-kuviksi.**

![ ](/images/valo223-ditaa.png "fig:valo223-ditaa.png")
Diagrammeja ja kaavioita voi piirtää graafisesti työkaluilla, kuten [Dia](Dia)
tai [Inkscape](Inkscape). Ditaa lähestyy tehtävää toisella tavalla. Ditaa varten
kaaviot piirretään tekstieditorilla merkkigrafiikkana ja käännetään
<tt>ditaa</tt>-komentoriviohjelmalla PNG-kuvaksi. Etuina tässä toteutuksessa on
muun muassa selkeä tekstipohjainen esitysmuoto sekä helppo muokattavuus
yksinkertaisilla työkaluilla.

Käytettävissä ovat ascii-grafiikkana piirretyt laatikot sekä viivat ja
nuolet. Tavallisen suorakulmaisen laatikon piirtämiseen käytetään
merkkejä <tt>|</tt>, <tt>-</tt> ja <tt>+</tt>. Laatikon ulkoasun voi muuttaa dokumentiksi
kirjoittamalla sen sisään tekstin <tt>{d}</tt>. Vastaavasti tallennustilaa
merkitsevän laatikon saa käyttämällä tekstiä <tt>{s}</tt> ja syötettä sekä
tulostetta symboloivan laatikon käyttämällä tekstiä <tt>{io}</tt>. Laatikon
kulmia voi pyöristää merkeillä <tt>/</tt> ja <tt>\</tt>.

Kaavioon voi piirtää viivoja käyttämällä merkkejä <tt>|</tt>, <tt>-</tt> ja <tt>+</tt>.
Viivojen kulmia voi pyöristää samoin kuin laatikoidenkin kulmia.
Viivojen päähän voi lisätä nuolenkärjet käyttämällä merkkejä <tt>^</tt>, <tt>v</tt>,
<tt>&lt;</tt> ja <tt>&gt;</tt>. Kaavioissa viivoja ja laatikoiden reunoja voi muuttaa
yhtenäisestä viivasta katkoviivaksi korvaamalla ainakin yhden sen
piirtämiseen käytetyistä vaakasuorista viivamerkeistä merkillä <tt>=</tt> tai
pystysuorista viivoista merkillä <tt>:</tt>.

Laatikoiden sisään voi kirjoittaa normaalia tekstiä sekä muotoa "cXXX"
olevan värikoodin, joka määrää laatikon värin. Värikoodissa osuus "XXX"
voi olla joku lyhenteistä "RED", "BLU", "GRE", "YEL", "PNK" tai "BLK"
taikka värin heksamuotoinen RGB-arvo. Laatikon sisään voi kirjoittaa
myös luetteloita käyttämällä luettelosymbolina merkkiä <tt>o</tt>.

Laatikoita voi jakaa myös sisäisesti osiin ja kullekin osalle voi
määrätä värin erikseen. Kaavioiden viivoihin tai laatikoiden reunoihin
voi lisäksi lisätä pistemerkkejä merkillä <tt>*</tt>.

Kun ascii-muotoinen kuva on valmis, se käännetään PNG-kuvaksi
esimerkiksi komennolla:
```
ditaa kuva.txt kuva.png
```

Tuotetut PNG-kuvat ovat bittigrafiikkaa, eivätkä siten skaalattavissa,
mutta käännösvaiheessa voidaan valita skaalauskerroin, joka määrittää
tuotettavan kuvan koon. Komentorivivalitsimella <tt>-s</tt> voi muuttaa kuvan
skaalauksen haluamakseen.

Valitsimella <tt>-h</tt> puolestaan voidaan syötteenä antaa HTML-tiedosto,
jossa kuvat on esitetty ascii-grafiikkana "textdiagram"-luokalla
merkittyjen <tt>pre</tt>-tagien välissä. Esimerkiksi:
```
<pre class="textdiagram">
  +-----------+
  | Esimerkki |
  +-----------+
</pre>
```

Valitsimella <tt>-h</tt> käännettäessä ditaa kääntää kunkin kuvan erikseen
"images"-hakemistoon ja luo uuden HTML-tiedoston, jossa ascii-kuvat on
korvattu vastaaviin PNG-kuviin viittaavilla <tt>img</tt>-tageilla.

Ditaa voi käyttää myös muiden ohjelmien yhteydessä. Esimerkiksi [Emacsin Org-modeen](Emacs_Org-mode)
sekä Dokuwikiin löytyy tuki Ditaan ascii-kuville. Javadoc-käyttöön löytyy myös
[lisäosa](http://ditaa-addons.sourceforge.net/), jolla voi
dokumentaatiota luodessa hyödyntää Java-ohjelman kommenttiin piirrettyjä
ascii-kaavioita.

Toimiakseen Ditaa tarvitsee Javan.

Kotisivu
:   <http://ditaa.sourceforge.net/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD, OpenBSD, NetBSD

Asennus
:   Ohjelma on asennettavissa joko Linux-jakelun paketinhallinnan kautta
    tai kotisivuilta lataamalla.

{{% wrapper class="psgallery" %}}
-   [Ascii-muotoinen kaavio.](/images/ditaa-1.jpg)
-   [Kaavio muunnettuna PNG-kuvaksi.](/images/ditaa-2.png)
-   [Esimerkki, jossa esiteltyinä ascii-kaavioiden syntaksia.](/images/ditaa-3.jpg)
-   [Esimerkkikuviot käännettynä PNG-kuvaksi.](/images/ditaa-4.png)
-   [Ascii-kuvan kääntäminen PNG-kuvaksi komentorivillä.](/images/ditaa-5.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*
