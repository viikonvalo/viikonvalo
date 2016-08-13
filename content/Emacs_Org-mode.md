+++
Date = "2012-03-17T22:00:00.000Z"
Title = "Emacs Org-mode"
Description = "Emacs org-mode muokkaa hierarkkisista osista muodostuvaa tekstiä. org-mode tukee kirjoittamista siinä järjestyksessä kuin ongelmanratkaisun pohdiskelu etenee."
Week = "2x12"
Number = "64"
Alustat = ["Aix","FreeBSD","HP-UX","Irix","Linux","Mac OS X","NetBSD","OpenBSD","OpenVMS","Solaris","Windows","Dos"]
Tagit = ["Muistiinpanot"]
Type = "post"
Author = "Taleman"
Pageimage = "valo64-emacs_org-mode.png"
+++


**Emacs [org-mode](http://en.wikipedia.org/wiki/Org-mode) muokkaa
hierarkkisista osista muodostuvaa tekstiä. org-mode tukee kirjoittamista
siinä järjestyksessä kuin ongelmanratkaisun pohdiskelu etenee.**

![ ](/images/valo64-emacs_org-mode.png "fig:valo64-emacs_org-mode.png")
Org-modessa on vähän samaa ajatusta kuin
[Tomboy](http://viikonvalo.fi/Tomboy)-muistiinpanosovelluksessa. Kun
kirjoitetaan tekstiä paperille, se on siinä, korkeintaan pyyhekumia voi
käyttää ja kirjoittaa marginaaliin ja rivien väliin. Teksturilla
kirjoitettaessa, kunhan pääsee irti paperille kirjoittamisen
tottumuksista, voidaan tekstille tehdä kaikenlaisia temppuja
kirjoittamisen aikana. Org-mode toimii muistiinpanojen kirjoittamisessa,
projektin suunnittelussa, tehtävälistojen teossa ja aikatauluttamisessa,
luetteloiden kirjoittamisessa, sisällön hahmottelemisessa ja vieläpä
kirjoituksen julkaisemisessa webbisivuna tai LaTeX-tiedostona. Org-moden
ominaisuuksia voi lisäksi käyttää tavanomaisessa kirjoittamisessaan
tekstin työstämisen tukena.
{{% wrapper class="rightimage" %}}
![ ](/images/Org-mode_organize.png "fig:Org-mode_organize.png")
{{% /wrapper %}}

Tiedosto tallennetaan tavallisena
[tekstitiedostona](http://fi.wikipedia.org/wiki/Tekstitiedosto). Tästä
on merkittäviä etuja: tiedoston voi siirtää mihin tahansa muuhun
tekstinkäsittelysovellukseen ja käyttöjärjestelmään,
[versionhallintajärjestelmät](http://fi.wikipedia.org/wiki/Versionhallinta)
käsittelevät tiedostot vaivatta, tiedostoa voi muokata Linuxin
komentorivin
[tekstinkäsittelykomennoilla](http://en.wikipedia.org/wiki/Category:Unix_text_processing_utilities)
tai omilla skripteillä, käyttöön riittää tekstipääte (ei tarvitse olla
graafista käyttöliittymää). Voi siis luottaa voivansa lukea tekstin
vielä 50 vuoden päästäkin. Vähäisempien tekstureiden kanssa voi huomata,
ettei kyseistä sovellusta enää ole saatavissa kun joskus tulevina
vuosina haluaisi tiedostoaan käsitellä.

Org-modella voi aloittaa kirjoitelman laatimalla ensin sisällysluettelon
kuten kuvakaappauksessa 1. Sitten kuhunkin lukuun voi kirjoittaa tekstiä
inspiraation salliessa. Ne luvut jotka juuri sillä hetkellä eivät
kiinnosta voi [laskostaa](http://en.wikipedia.org/wiki/Folding_editor)
eli piilottaa pois näkyvistä.

Toiminnot ovat kätevästi
[pikanäppäimissä](http://fi.wikipedia.org/wiki/Pikan%C3%A4pp%C3%A4in),
joiden opetteluun tosin kuluu hieman aikaa. Org-modessa pikanäppäilyt
ovat kohtalaisen tolkullisesti. Nekin on osattu järjestää helpommin
muistettaviksi. Käytettäessä Emacsia graafisella käyttöliittymällä ovat
toiminnot käytettävissä hiirelläkin, kuten kuvassa 2.

Org-mode osaa luettelot: numeroidut, ranskalaisella viivalla ja
määrittelyluettelot. Lisäksi ranskalaisilla viivoilla kirjoitetun
luettelon voi muuttaa numeroiduksi ja päinvastoin. Taulukot ovat
tuettuja, soluun kirjoittaminen sovittaa automaattisesti sarakkeen
leveyden, lisäksi voi käyttää taulukkolaskimen ominaisuuksia eli
kirjoittaa laskentakaavoja taulukon soluihin. Tekstiin voi lisätä
[alaviitteitä](http://en.wikipedia.org/wiki/Footnote) (footnotes).
[Hyperlinkkejä](http://fi.wikipedia.org/wiki/Hyperlinkki) voi käyttää,
esimerkiksi pitkän kirjoitelman alussa voi olla hyperlinkit jokaiseen
lukuun tai avainkohtiin, eli pääsee helposti haluamaansa kohtaan
tekstiä. Hyperlinkit voivat osoittaa myös tiedoston ulkopuolelle.
[Tehtävälista](http://en.wikipedia.org/wiki/Todo_list#Task_list)
kirjoitetaan TODO -merkinnöillä haluttuihin kohtaan kirjoitelmaa.
Org-mode osaa näyttää hajallaan olevat tehtävät yleisnäkymässä.

Tiedoston voi viedä HTML-muotoisena tai LaTeX:in kautta PDF-tiedostona.
Tällöin näkyvät Org-moden tekemät värilliset korostukset yms. Niitä ei
ole erityisesti tallennettu tiedostoon, koska se on tavallinen
tekstitiedosto. Kuvassa 3 on tekstitiedosto sellaisenaan, kuvassa 4 sama
tiedosto vietynä HTML-tiedostoksi.

Org-modella on varsin vilkas moderoitu
[postituslista](http://orgmode.org/org-mode-support.html). Sen
[arkistoa](http://news.gmane.org/gmane.emacs.orgmode) voi lukea
selaimella.

Laskin, että
[Org-tutorials](http://orgmode.org/worg/org-tutorials/index.html)
-sivulta löytyy 5 tuntia 53 minuuttia videota tai
[videokaappausta](http://en.wikipedia.org/wiki/Screencast). Yhden
elokuvaillan voi viettää mukavasti org-modeen tutustumalla. Luettavia
ohjeitakin on paljon, seuraavat illat voi käyttää niihin.

Org-mode:n kehitti Karsten Dominik omaan käyttöönsä astronomisten
muistiinpanojen ja töiden organisointiin vuonna 2003
([1](http://lumiere.ens.fr/~guerry/emacs-orgmode-gnu-hackers-meeting-2011.html)
kalvo 5). Tekijä ei ole päätoiminen ohjelmoija vaan tiedemies, koodaus
on vain harrastus. Projektin kakkosmies on [Bastien
Guerry](http://lumiere.ens.fr/~guerry/) (joka näköjään tekee
webbisivunsa Org-modella). Projektiin on osallistunut varsin paljon
muitakin. Kehitys ja ylläpito jatkuu, uusin vikoja korjaava väliversio
7.8.04 [julkaistiin 16. maaliskuuta
2012](http://orgmode.org/org-mode-news.html), sitä edellinen 3.
tammikuuta.

Org-modesta löytyy myös [MobileOrg](http://mobileorg.ncogni.to/)-niminen
mobiiliversio iPhonelle ja
[Android-laitteille](https://play.google.com/store/apps/details?id=com.matburt.mobileorg).
Se kykenee synkronoimaan tiedostoja muun muassa Dropboxin, WebDAV-jaon
tai ssh-yhteyden kautta. Android-laitteille on myös vaihtoehtoinen
toteutus
[MobileOrgNG](https://play.google.com/store/apps/details?id=com.matburt.mobileorg.ng).

Kotisivu
:   <http://orgmode.org>

Lisenssi
:   [GNU GPL](GNU_GPL) v.3

Toimii seuraavilla alustoilla
:   Katso Viikon VALO:sta <http://viikonvalo.fi/GNU_Emacs>. Toimii siis
    samoilla alustoilla kuin Emacs

Asennus
:   Linux-jakeluissa jakelun omista pakettivarastoista. Sisältyy Emacs
    versioon 22.1 ja uudempiin (mutta on [otettava
    käyttöön](http://orgmode.org/org.html#Activation)). Jos asennetun
    Emacsin mukana ei tullut org-modea, joutunet noutamaan
    asennustiedoston
    [kotisivulta](http://orgmode.org/org-mode-download.html).

Käyttöohjeet
:   Käyttöohjeita ja esittelyvideoita on
    [runsaasti](http://orgmode.org/org-mode-documentation.html).
:   Kätevän pikaohjeen saa kaksipuolisena kolmeen osaan laskostettavana
    [A4-arkkina](http://orgmode.org/orcgard.pdf).
:   Käsikirjan n. 40 sivuinen
    [tiivistelmä](http://orgmode.org/orgguide.pdf).
:   [Käsikirja](http://orgmode.org/manual/index.html) n. 200 sivua.
:   Käsikirja on ostettavissa [painettuna
    kirjana](http://www.network-theory.co.uk/org/manual/).
:   [Usein kysytyt kysymykset](http://orgmode.org/worg/org-faq.html)
:   [EmacsWikin artikkeli
    org-modesta](http://www.emacswiki.org/emacs/OrgMode)
:   25 minuutin [videokaappaus](http://jaderholm.com/screencasts.html)
    esittelee org-moden perustoiminnot
:   n. 45 minuutin Google Tech Talk jossa org-moden tekijä [Carsten
    Dominik](http://staff.science.uva.nl/~dominik/)
    [esittelee](http://orgmode.org/talks/GoogleTech.html) org-moden.
:   n. 53 minuutin [video](http://twit.tv/show/floss-weekly/136) Floss
    Weeklystä, jossa [Randall
    Schwartz](http://en.wikipedia.org/wiki/Randal_L._Schwartz)
    haastattelee Karsten Dominikia. Tekijä kertoo miten kehitti
    Org-moden ja perustelee ratkaisujaan, sekä kertoo miten itse käyttää
    Org-modea.

{{% wrapper class="psgallery" %}}
-   [Kirjoitelma aloitettu](/images/Org-mode-01.png)
-   [Voi käyttää hiirelläkin](/images/Org-mode-02.png)
-   [Tiedosto sellaisena kuin se on levyllä](/images/Org-mode-03.png)
-   [Sama kuin edellä vietynä HTML-tiedostoksi](/images/Org-mode-04.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman*

