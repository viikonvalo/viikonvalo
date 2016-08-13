+++
Date = "2011-11-12T22:00:00.000Z"
Title = "GNU Emacs"
Description = "GNU Emacs on tekstieditori jolla voi tehdä kaiken. Jos jotain ei voi Emacsilla tehdä, se ei ole tekemisen arvoista."
Week = "1x46"
Number = "46"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris","Aix","HP-UX","Irix","OpenVMS","Dos"]
Tagit = ["Toimisto","Ohjelmointi","Tekstinkäsittely","Tekstieditori","Teksti"]
Type = "post"
Author = "Taleman"
Pageimage = "valo46-gnu_emacs.png"
+++


**GNU Emacs on
[tekstieditori](http://fi.wikipedia.org/wiki/Tekstieditori) jolla voi
tehdä kaiken. Jos jotain ei voi Emacsilla tehdä, se ei ole tekemisen
arvoista.**

![ ](/images/valo46-gnu_emacs.png "fig:valo46-gnu_emacs.png") Emacsia käyttävät
etenkin ohjelmoijat, se soveltuukin koodaamiseen kaikenlaisilla
ohjelmointikielillä.

Oikeasti löytyy toki kohteita joiden tekemiseen Emacs ei sovellu, mutta
koska Emacs on laajennettavissa voi ohjelmoida tarvittavat lisätoiminnot
ja sitten Emacsilla voi tehdä senkin.

Alunperin vitsailtiin Emacsin olevan lyhenne sanoista **Emacs Makes Any
Computer Slow**. Aikoinaan tässä olikin totta toinen puoli, Emacs on
alunperin kehitetty vuonna 1976, ja GNU Emacs vuonna 1984. Tuohon aikaan
tietokoneissa muistin määrä oli rajoitettu ja tehoakin oli hintelästi
nykykoneisiin verrattuna. Tämän kirjoittamalla oli [Commodore
64](http://fi.wikipedia.org/wiki/Commodore_64) vuonna 1984, silloin se
oli kova luu koska [Amiga](http://fi.wikipedia.org/wiki/Amiga) ja [Atari
ST](http://fi.wikipedia.org/wiki/Atari_ST) julkaistiin vasta vuonna
1985. Emacsin tunnetuin kehittäjä on GNU-projektin alullepanija [Richard
M. Stallman](http://fi.wikipedia.org/wiki/Richard_M._Stallman).

Toinen Unixien alkuajoista asti mukana ollut tekstieditori on
[vi](http://fi.wikipedia.org/wiki/Vi). Sen filosofia on tyystin
erilainen kuin Emacsilla. Vi on pieni yksinkertainen, Emacsin
ohjelmatiedosto on kertaluokkaa suurempi.

Emacs on suosionsa ansiosta saanut paljon jäljittelijöitä.
Tekstieditoreita tehdään toimimaan samoilla näppäinkomennoilla kuin
Emacs, jotta Emacsia osaavien ei tarvitse opetella uusia komentoja.
Samoin Linuxin [Bash-komentotulkki](http://fi.wikipedia.org/wiki/Bash)
käyttää Emacsin näppäinkomentoja (voi valita käytettävän [vi:n
näppäinkomentoja](http://fi.flossmanuals.net/komentorivin-perusteet/ch018_interaktiivinen-muokkaus)).
Sovelluksissa joissa muokataan tekstiä on ehkä mahdollista käynnistää
Emacs tekemään muokkaus; esimerkiksi Firefoxin laajennos [It's All
Text](https://addons.mozilla.org/en-US/firefox/addon/its-all-text/)
mahdollistaa Emacsin tai muun tekstieditorin käynnistämisen kun
selaimessa muokataan tekstikenttää (saatavilla Debian GNU/Linuxissa
pakettina
[xul-ext-itsalltext](http://packages.debian.org/squeeze/xul-ext-itsalltext)).
Tämäkin teksti on kirjoitettu GNU Emacs versiolla 23 It's All Text
-lisäosan avulla. Muutenhan tätä ei olisi kannattanut kirjoittaa
lainkaan, kuten artikkelin alussa todettiinkin.

GNU Emacs -projektista haarautui
[XEmacs](http://en.wikipedia.org/wiki/XEmacs) 80- ja 90-lukujen
vaihteessa. Koska lähdekoodi on vapaa, voi toinen taho kehittää
sovellusta mieleiseensä suuntaan, ja jos eri tahot pysyvät erimielisinä
voi syntyä pysyvästi kaksi kehityshaaraa.

Alunperin GNU Emacs toimi
[tekstipäätteessä](http://fi.wikipedia.org/wiki/P%C3%A4%C3%A4te).
Nykyään Emacseja voi käyttää
[hiirelläkin](http://fi.wikipedia.org/wiki/Hiiri_%28osoitinlaite%29),
toiminnot ovat pudotusvalikoissa. Samaa Emacsia voi käyttää sekä
tekstipäätteessä että X Window -järjestelmässä tai Windowsissa GUI:n
kera. Pikakomennot opettelemalla saa nopeammin kirjoitettua molemmissa
kun sormia ei tarvitse siirtää pois näppäimistöltä hiirtä hamuamaan.

[Toimitilat](http://linux.fi/index.php/Emacsin_perusk%C3%A4ytt%C3%B6#Toimitilat)
ovat Emacsin moodeja joissa toiminnallisuus on sovitettu muokattavaan
tekstiin. Esimerkiksi Python-moodi osaa korostaa syntaksia ja ymmärtää
sisentää koodin kuten Pythonissa kuuluu. Näitä moodeja on paljon vakiona
mukana ja lisää löytyy, Debian GNU/Linuxissa 44 kappaletta emacs mode
-paketteja.

Koska Emacsin laajennoksia on helppo tehdä, ainakin helpompi kuin muissa
tekstieditoreissa joissa niitä ei voi lainkaan tehdä, on kaikenlaista
erikoistakin tehty. Vakiona on mukana kaksi laskinta (ohjelmoitava ja
tavallinen), kalenteri, noin tusina peliä, sähköpostiohjelma ja usenetin
uutisten lukija. Luulin jo Emacsista jätetyn psykiatri pois, mutta sepä
ei vaan olekaan työkaluvalikossa. Näppäilemällä Meta-X doctor <Return>
saa sen käynnistettyä.

Kannattaa opetella Emacs, niin ei tarvitse opetella muita
tekstieditoreita kun Emacs on saatavilla joka paikkaan.

Kotisivu
:   <http://www.gnu.org/s/emacs/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Aika kattavasti kaikilla alustoilla. Ehkä voisi arvailla, että jos
    laitteessa on QWERTY-näppäimistö, siihen saa Emacsin.

Asennus
:   Linux-jakeluissa tulee jakelun omista pakettivarastoista. Muissa
    Unixeissa Emacs joko tulee valmiiksi mukana tai asennuspaketin voi
    noutaa jostain tai itse kääntää. Windows-käyttäjät joutunevat
    noutamaan asennustiedoston
    [kotisivulta](http://ftp.gnu.org/gnu/emacs/windows/).

Käyttöohjeet
:   GNU Emacsissa on sisäänrakennettu ohjetoiminto. Saatavilla on vapaa
    GNU Emacs käsikirja. Netistä löytyy paljon ohjeita ja kirjakaupasta
    kirjoja.

{{% wrapper class="psgallery" %}}
-   [GNU Emacs 23 aloituskuva](/images/Kuvakaappaus-emacs23.png)
-   [Its All Text Firefox lisäosan asetukset, tekstieditoriksi Emacs](/images/Kuvakaappaus-itsalltext.png)
-   [Kirjoitetaan Emacsilla Wikisivu](/images/Kuvakaappaus-emacs-wikisee.png)
-   [Emacs ja Python-moodi](/images/Kuvakaappaus-emacs-python.png)
-   [Emacsin psykiatri](/images/Kuvakaappaus-emacs23-terapia.png)
{{% /wrapper %}}

Linkkejä:

-   [Emacsin peruskäyttö, linux.fi
    ohje](http://linux.fi/index.php/Emacsin_perusk%C3%A4ytt%C3%B6)
-   [Emacs käsikirjat](http://www.gnu.org/software/emacs/#Manuals)
-   [Emacs Usein Kysytyt
    Kysymykset](http://www.gnu.org/software/emacs/emacs-faq.html)

*Teksti: Taleman* <br />
*kuvakaappaukset: Taleman*

{{% wrapper class="comments" %}}
Kommentit
---------

Emacs, XKCD ja perhoset
:   Anonymous 17. Joulukuu 2011 - 4:50
:   <http://xkcd.com/378/>

{{% /wrapper %}}
