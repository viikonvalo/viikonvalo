+++
Date = "2017-01-01T14:00:00.000Z"
Title = "ReText"
Description = "ReText on yksinkertainen, mutta tehokas, työkalu tekstien ja muistiinpanojen kirjoittamiseen Markdown-,  reStructuredText- tai Textile-merkintäkielillä."
Week = "7x01"
Number = "245"
Alustat = ["Linux"]
Tagit = ["tekstinkäsittely", "muistiinpanot", "markdown"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo245-retext.png"
+++


**ReText on yksinkertainen, mutta tehokas, työkalu tekstien ja muistiinpanojen kirjoittamiseen Markdown-,  reStructuredText- tai Textile-merkintäkielillä.**

![ ](/images/valo245-retext.png "fig:valo245-retext.png")

[Markdown], [reStructuredText](ReST) ja [Textile] ovat merkintäkieliä, joilla muotoiluja sisältäviä
tekstidokumentteja voidaan kirjoittaa puhtaasti tekstimuotoisena. Valmis dokumentti käännetään
yleensä näytettäväksi johonkin toiseen muotoon, kuten html- tai pdf-tiedostoiksi.
Näissä kielissä muotoilut merkitään mahdollisimman luonnollisilla tavoin, jolloin myös merkintäkielinen
alkuperäinen teksti pysyy helposti luettavana. Esimerkiksi luettelot merkitään rivin aloittavilla "-"-merkeillä.

ReText on sovellus, jolla näillä kielillä kirjoitettujen dokumenttien muokkaaminen on helppoa. Kielissä käytettävät
merkinnät korostetaan ohjelmassa havainnollisesti ja lopullista dokumenttia voi tarkastella ohjelman 
esikatselutoiminnolla. Esikatselu on käytettävissä joko erillisenä näkymänä tai raakatekstin rinnalla näytettävänä
tosiaikaisesti päivittyvänä näkymänä.

Esimerkiksi Markdown-muotoinen teksti:

```markdown
Otsikko
=======

Tekstiä

- numeroimaton
- luettelo
```

sitä vastaava html-koodi:

```html
<h1>Otsikko</h1>
<p>Tekstiä</p>
<ul>
<li>numeroimaton</li>
<li>luettelo</li>
</ul>
```

ja lopullinen käyttäjälle näytettävä teksti:

--------------------------
Otsikko
=======

Tekstiä

- numeroimaton
- luettelo

---------------------------

ReTextin yhteydessä on mahdollista käyttää joitain Python-kirjastojen tukemia laajennuksia
Markdown-kieleen. [Extra-laajennuspaketti] on oletuksena käytössä. Tämä laajennus sisältää
muun muassa tuen taulukoille ja määritelmälistoille.

Laajennetussa Markdown-kielssä taulukot kirjoitetaan "piirtämällä" sarakkeet pystyviivamerkeillä "|" ja
erottamalla sarakkeiden otsikot muusta taulukosta "-"-merkeillä. Esimerkiksi:

```markdown
| Item     | Value |
| -------- | -----:|
| Computer | $1600 |
| Phone    | $12   |
| Pipe     | $1    |
```

Eli valmiina taulukkona:

| Item     | Value |
| -------- | -----:|
| Computer | $1600 |
| Phone    | $12   |
| Pipe     | $1    |

Taulukoiden muokkaaminen tässä muodossa voi olla hankalaa, jos pystyviivojen haluaa pysyvän
kohdakkain. Tämän takia ReTextissä on erikseen päälle kytkettävä "table mode", jolloin ohjelma
pyrkii automaattisesti kohdistamaan pystyviivat taulukon "solun" leveyden muuttuessa.
Tämä toiminnallisuus on oletuksena kuitenkin pois päältä.

Jos ohjelmalla on käytössään [MathJax]-kirjasto, on ReTextillä mahdollista kirjoittaa myös matemaattisia
kaavoja käyttämällä LaTeX-kieltä.

ReText on sellaisenaan varsin kätevä työkalu muistiinpanojen tekemiseen, mutta toisinaan lopputulos halutaan
tallentaa jossain luettavaksi tai edelleen välitettäväksi tarkoitetussa muodossa. Tämä onnistuu ReTextin
vienti- eli export-toiminnoilla. Luotu dokumentti voidaan oletuksena viedä html-, odt- ja pdf-muotoihin. 
[Vientitoiminnot](https://github.com/retext-project/retext/wiki/Export-Extensions)
ovat ohjelman laajennuksia, joita voi halutessaan tehdä itse hyödyntämällä
esimerkiksi [Pandoc](Pandoc)-ohjelmaa.

Kotisivu
:   <https://github.com/retext-project/retext>
:   [Ohjeita](https://github.com/retext-project/retext/wiki)
:   [Asennusohje](https://github.com/retext-project/retext/wiki/Installing-ReText)
:   [Matematiikkaa](https://github.com/retext-project/retext/wiki/Math)

Lisenssi
:   [GNU GPL](GNU_GPL) (v2+)

Toimii seuraavilla alustoilla
:   Linux

Asennus
:   Ohjelma on asennettavissa Linux-järjestelmäiin paketinhallinnasta tai vaihtoehtoisesti Pythonin pip-paketointijärjestelmän avulla. Muut käyttöjärjestelmät eivät ole virallisesti tuettuja, mutta [asennusohjeista](https://github.com/retext-project/retext/wiki/Installing-ReText) löytyy neuvoja ohjelman asentamiseen myös Windows- ja MacOS-alustoille.



{{% wrapper class="psgallery" %}}
- [Markdown-tekstiä ja esikatselu](/images/retext-1.jpg)
- [reStructuredText-tekstiä ja esikatselu](/images/retext-2.jpg)
- [Matematiikkaa](/images/retext-3.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


[Markdown]: https://en.wikipedia.org/wiki/Markdown
[ReST]: https://en.wikipedia.org/wiki/ReStructuredText
[Textile]: https://en.wikipedia.org/wiki/Textile_%28markup_language%29
[Extra-laajennuspaketti]: http://pythonhosted.org/Markdown/extensions/extra.html
[MathJax]: https://www.mathjax.org/
