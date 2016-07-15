+++
Date = "2015-03-06T22:00:00.000Z"
Title = "Pandoc"
Description = "Pandoc on komentorivityökalu tekstipohjaisten tiedostojen muuntamiseen muodosta toiseen."
Week = "5x10"
Number = "218"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD"]
Tagit = ["Tekstinkäsittely","Tiedostomuodot","Teksti"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo218-pandoc.png"
+++


**Pandoc on komentorivityökalu tekstipohjaisten tiedostojen muuntamiseen
muodosta toiseen.**

![ ](/images/valo218-pandoc.png "fig:valo218-pandoc.png") Pandoc on todellinen
monitoimityökalu, kun on tarve muuntaa yhdellä merkintäkielellä
kirjoitettua tekstimateriaalia toiseen merkintäkieleen. Pandoc osaa
lukea monessa muodossa kirjoitettuja tiedostoja ja tallentaa luetun
tekstin vielä useammalla muotoilukielellä. Pandocilla on helppoa vaikka
automatisoida useiden tiedostojen muuntaminen muodosta toiseen. Toki
tällaisia muunnoksia tehdessä Pandocin tuottamia tiedostoja voi joutua
vielä muokkaamaan ja viimeistelemään käsin, mutta suurin osa
rutiinityöstä hoituu Pandocilla.

Kieliä ja tiedostomuotoja, joita Pandoc osaa lukea, ovat muun muassa:
[HTML](http://fi.wikipedia.org/wiki/HTML),
[Markdown](http://en.wikipedia.org/wiki/Markdown),
[LaTeX](http://fi.wikipedia.org/wiki/Latex),
[MediaWiki](http://en.wikipedia.org/wiki/MediaWiki#Markup) ja
[textile](http://en.wikipedia.org/wiki/Textile_%28markup_language%29).
Pandocin tuottamia kieliä ja tiedostomuotoja on jo mainittujen lisäksi
muun muassa Microsoftin Word-ohjelman DOCX-tiedostomuoto, OpenOffice- ja
LibreOffice-ohjelmistojen käyttämä ODT, sähkökirjojen tiedostomuoto EPUB
sekä PDF-tiedostot. Pandoc osaa tuottaa myös muutamien HTML- ja
LaTeX-pohjaisten esitystiedostojen mukaista tekstiä. Näitä ovat
esimerkiksi
[Slidy](http://www.w3.org/Talks/Tools/Slidy2/Overview.html#%281%29),
[reveal.js](http://viikonvalo.fi/Reveal.js),
[Slidous](http://goessner.net/articles/slideous/),
[S5](http://meyerweb.com/eric/tools/s5/) ja
[DZSlides](http://paulrouget.com/dzslides/) sekä
[Beamer](https://en.wikipedia.org/wiki/Beamer_%28LaTeX%29). Tarkempi
luettelo tuetuista muodoista löytyy ohjelman kotisivuilta tai sen mukana
tulevasta dokumentaatiosta.

Markdown-kielestä Pandoc osaa useampia variaatiota ja laajennuksia,
mukaan lukien GitHubin laajennettu syntaksi. Näiden ansiosta
Markdownilla kirjoitetut tekstit voivat sisältää muun muassa taulukoita,
alaviitteitä, koodilohkoja, automaattisia sisällysluetteloita, upotettua
LaTeX-tyylistä matematiikkaa sekä HTML-koodin sisään kirjoitettua
Markdown-syntaksia. Markdown-tekstiä HTML-tiedostoksi käännettäessä on
mahdollista valita käytettäväksi vaikka ohjelmakoodin syntaksin korostus
väreillä.

Pandoc on toteutettu siten, että kukin ohjelmaan sisään luettu tiedosto
käännetään ohjelman sisäiseen muotoon, josta puolestaan muodostetaan
halutun kohdekielen mukainen tuloste. Näin ohjelmasta on saatu
modulaarinen ja uuden tuetun kielen lisääminen on joustavaa. Ohjelma
tukee myös esimerkiksi LaTeX-muotoisten matemaattisten kaavojen
esittämistä HTML-muodossa useammallakin tavalla, mukaan lukien MathJax
ja MathML.

Pandocin käytön aloittaminen on varsin helppoa. Yksinkertaisimmillaan
Pandoc tunnistaa syötetiedostossa käytetyn muodon ja tallentaa <tt>-o</tt>
-valitsimella määrätyn tulostiedoston päätteensä mukaisessa muodossa.
Esimerkiksi:

`pandoc -o testi.pdf testi.html`

Syöte- ja tulostiedostojen muodon voi kuitenkin kertoa Pandocille
käyttäen <tt>-f</tt> -valitsinta (from) ja <tt>-t</tt> -valitsinta (to).
(Vaihtoehtoisesti <tt>-r</tt> (read) ja <tt>-w</tt> (write)).

`pandoc -f markdown -t html -o index.html index.md`

Pandocista löytyy lisäksi suuri määrä muita valitsimia, joilla sen
toimintaa voi muokata haluamakseen. Esimerkiksi <tt>--template=TIEDOSTO</tt>
-valitsimella voi valita haluamansa dokumenttipohjan luotavan tiedoston
malliksi. Muita esimerkkejä valitsimista ovat sisällysluettelon
generointi, rivinumeroiden ja syntaksikorostuksen lisääminen
ohjelmakoodiin ja matematiikkapaketin valinta HTML-tulostukseen.

Kotisivu
:   <http://johnmacfarlane.net/pandoc/>

Lähdekoodi
:   <https://github.com/jgm/pandoc>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD, NetBSD, OpenBSD

Asennus
:   Ohjelma on ladattavissa sen kotisivuilta. Linux-järjestelmiin se on
    yleensä asennettavissa paketinhallinnan kautta.

{{% wrapper class="psgallery" %}}
-   [Markdown-tiedosto ja siitä tehty HTML-tiedosto.](/images/pandoc-1.jpg)
-   [HTML-tiedosto selaimessa. Sivun ulkoasua voi jatkomuokata vaikka CSS:llä. Sivulle voi käyttää myös omaa tiedostopohjaa.](/images/pandoc-2.jpg)
-   [Samasta Markdown-tiedostosta tuotettu PDF-tiedosto. PDF-tiedostojen luontiin hyödynnetään pdflatex-ohjelmaa.](/images/pandoc-3.jpg)
-   [Edelleen samasta tiedostosta tuotettu ODT-tiedosto.](/images/pandoc-4.jpg)
-   [Muunnos Markdownin ja MediaWikin wikisyntaksin välillä.](/images/pandoc-5.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

