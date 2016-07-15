+++
Date = "2012-09-22T21:00:00.000Z"
Title = "Zen Coding"
Description = "Html-tekstin kirjoittamista helpottava lisäosa useampaankin tekstieditoriin."
Week = "2x39"
Number = "91"
Alustat = ["Linux","Windows","Mac OS X"]
Tagit = ["Ohjelmointi"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo91-zencoding.png"
+++


**Html-tekstin kirjoittamista helpottava lisäosa useampaankin
tekstieditoriin.**

![ ](/images/valo91-zencoding.png "fig:valo91-zencoding.png") Zen Coding on
tekstieditoriin asennettava lisäosa, joka mahdollistaa html-, xml- ja
xsl-tiedostojen rakenteen kirjoittamisen lyhenteillä, jotka muistuttavat
css-tyylikielen valitsimia. Editoriin kirjoitetaan haluttu lyhenne, joka
laajennetaan näppäinkomennolla vastaavaksi html-tekstiksi, jonka jälkeen
saatuun pohjaan voidaan html-tagien sisään kirjoittaa varsinainen
asiasisältö. Lisäosaa voidaan siis käyttää tiedoston pohjan nopeaan
luomiseen.

Lyhenteillä voi merkitä muun muassa html-elementtien sisäkkäisyyden,
rinnakkaisuuden, niiden id-ominaisuuden, luokan sekä lukumäärän.
Esimerkiksi lyhenne:

```
div#page>div.logo+ul#navigation>li*5>a
```

laajentuu html-koodiksi:

```
<div id="page">
         <div class="logo"></div>
         <ul id="navigation">
                 <li><a href=""></a></li>
                 <li><a href=""></a></li>
                 <li><a href=""></a></li>
                 <li><a href=""></a></li>
                 <li><a href=""></a></li>
         </ul>
</div>
```

Lyhenteitä voi tarvittaessa myös ryhmitellä sulkeilla. Samoja
elementtejä kertomerkillä lisättäessä voidaan käyttää myös \$-merkkiä
juoksevana laskurina elementtien nimeämiseen. Esimerkiksi:

```
ul>li#item-$*5
```

laajentuu muotoon:

```
<ul>
        <li id="item-1"></li>
        <li id="item-2"></li>
        <li id="item-3"></li>
        <li id="item-4"></li>
        <li id="item-5"></li>
</ul>
```

Lisäosan uusin versio tukee myös sisällön kirjoittamista suoraan
lyhenteeseen. Näin esimerkiksi lyhenne

```
p>{Click }+a{here}+{ to continue}
```

laajennetaan muotoon:

```
<p>Click 
        <a href="">here</a> to continue
</p>
```

Zen Coding -lisäosa on saatavilla useaan tekstieditoriin. Virallisen
version luvataan toimivan ainakin seuraavissa editoreissa:

-   Aptana/Zend Studio/Eclipse (useilla alustoilla)
-   TextMate (Mac)
-   Coda (Mac)
-   Espresso (Mac)
-   Komodo Edit/IDE (useilla alustoilla)
-   Notepad++ (Windows)
-   PSPad (Windows)
-   &lt;textarea&gt;
    (selaimissa)
-   editArea (selaimessa)
-   CodeMirror (selaimessa)
-   CodeMirror2 (selaimessa)

Näiden lisäksi kolmannet osapuolet ovat sovittaneet Zen Codingin
toimimaan useiden muiden editoreiden kanssa. Luettelo näistä löytyy
[ohjelman kotisivuilta](http://code.google.com/p/zen-coding/).

Myös muille editoreille, kuten Emacs, Vim ja Kate, on toteutettu
vastaavia toiminnallisuuksia, mutta Zen Codingista riippumatta.
Esimerkiksi Katen lisäosa on nimeltään Insane.

Kotisivu
:   <http://code.google.com/p/zen-coding/>

Lisenssi
:   [MIT](MIT)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, Unixit, alustat, joille löytyy tuettu
    editori

Asennus
:   Asennukseen tarvittavat paketit löytyvät Zen Codingin kotisivuilta.
    Zen Coding saattaa olla valmiiksi mukana joidenkin tekstieditorien
    oletusasennuksissa.

Käyttöohjeet
:   [Tutoriaali](http://coding.smashingmagazine.com/2009/11/21/zen-coding-a-new-way-to-write-html-code/)
:   [Esittelyvideo](http://vimeo.com/7405114)

{{% wrapper class="psgallery" %}}
-   [Zen Coding -lyhenne Aptana Studio 3:ssa.](/images/zen-coding-1.png)
-   [Lyhenne laajennettuna html:ksi Aptana Studio
    3:ssa.](/images/zen-coding-2.png)
-   [Lyhenteissä voi käyttää laskureita, jotka merkitään \$-merkillä.
    Etunollien käyttö laskureissa merkitään käyttämällä useampaa
    peräkkäistä \$-merkkiä.](/images/zen-coding-3.png)
-   [Laskurimerkinnät laajennettuina Aptana Studio
    3:ssa.](/images/zen-coding-4.png)
-   [Hieman Zen Coding -lyhenteitä suppeampaa merkintää käyttävä Insane
    Kate-editorissa.](/images/zen-coding-5.png)
-   [Insane-lyhenne laajennettuna Katessa.](/images/zen-coding-6.png)
-   [Zen Coding on toteutettu myös javascriptillä käytettäväksi html:n
    textarea-tekstilaatikoissa.](/images/zen-coding-7.png)
-   [Html5-tiedoston pohja laajennettuna
    textareassa.](/images/zen-coding-8.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

