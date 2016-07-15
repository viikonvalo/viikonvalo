+++
Date = "2015-12-30T22:00:00.000Z"
Title = "Hugo"
Description = "Hugo on kevyt, nopea ja helppokäyttöinen työkalu staattisten, mutta hyvin organisoitujen www-sivujen julkaisemiseen."
Week = "5x34"
Number = "242"
Alustat = ["Windows","Mac OS X","Linux"]
Tagit = ["www"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo242-hugo.png"
+++


**Hugo on kevyt, nopea ja helppokäyttöinen työkalu staattisten, mutta hyvin organisoitujen www-sivujen julkaisemiseen.**

![ ](/images/valo242-hugo.png "fig:valo242-hugo.png")
Www-sivujen toiminta pohjautuu nykyisin tyypillisesti siihen, että käyttäjän pyytäessä palvelimelta sivua www-selaimella,
palvelin suorittaa jollain ohjelmointikielellä tehdyn ohjelman, jolla sivu muodostetaan dynaamisesti tietokannasta noudettujen tietojen
pohjalta. Tällä menetelmällä palvelin joutuu suorittamaan saman ohjelmakoodin toistuvasti uudelleen ja uudelleen aina, kun
käyttäjä pyytää samaa sivua. Aikoinaan www-sivut oli toteutettu staattisina html-sivuina, jolloin palvelimen tarvitsi vain
palauttaa www-selaimelle valmiina oleva sivu suorittamatta sen generoivaa ohjelmakoodia. Staattiset html-sivut säästävät
aikaa ja palvelimen resursseja. Ne toimivat hyvin, kun on kyse vain muutamasta sivusta, mutta suuremmilla sivustoilla
ongelmaksi muodostuu koko sivuston ylläpito. Jos sivuja on esimerkiksi 242 kappaletta ja sivuston navigointiin tulee yksi
uusi valinta, pitää sama valikko päivittää kaikille sivuille samanlaisena.

Vaihtoehtona kahdelle edellä kuvatulle tavalle ylläpitää www-sivustoa on tapa, jossa koko sivusto luodaan staattisiksi
html-sivuiksi generoimalla ne ohjelmallisesti yhdellä kertaa ja tämän jälkeen palvelin voi tarjota nopeasti näitä valmiiksi
luotuja staattisia sivuja. Tämä tapa siis yhdistää edellä kuvattujen kahden tavan hyvät puolet. Muutoksen yhteydessä sivuston
sivut generoidaan uudelleen, mutta vain yhden kerran. Koska sivut ovat pelkkää html:ää, on ne helppoa sijoittaa lähes mihin
tahansa kotisivutilaa tarjoavaan palveluun tai vaikka GitHubiin.

Hugo on komentoriviltä käytettävä työkalu, jolla on helppoa luoda näyttäviä ja nopeita staattisia html-sivuja käyttäviä www-sivustoja.
Hugo on toteutettu [Go-kielellä](https://golang.org/), sillä voi luoda työhakemistoon www-sivuprojektin, ylläpitää ja luoda sivustolle
uusia Markdown-muotoisia sivuja sekä kääntää Markdown-tekstistä staattisia html-tiedostoja. Hugo luo sivuston valitun teeman mukaisella
pohjalla ja luo kullekin sivulle käytetyn pohjan mukaisesti tarvittavat valikot sekä muut komponentit. Hugo on ohjelmoitu nopeutta
silmälläpitäen ja se generoikin uuden version sivustosta hyvin nopeasti.

Hugolla on helppo ylläpitää sivustoa, jolla on erityyppisiä sivuja, kuten blogipostauksia ja pysyviä sivuja. Hugolla on helppo tehdä
luettelosivuja, joilla luetellaan kaikki saman tyyppiset sivut tai vaikka tietyllä tunnisteella (tag) merkityt sivut.
Uuden sivuston aloittaminen tapahtuu helposti komennolla:

```
hugo new site .
```
Tämä alustaa nykyiseen työhakemistoon joukon valmiita hakemistoja ja tiedostoja, joita käytetään sivuston pohjana.

Uuden blogi-kirjoituksen voi luoda komennolla:

```
hugo new post/welcome.md
```
Tämä luo uuden työhakemiston alle uuden tiedoston `content/post/welcome.md`, johon käyttäjä voi kirjoittaa haluamansa tekstin
Markdown-muotoiluilla.

Ennen sivuston html-tiedostojen generoimista tarvitaan vielä käytettävä teema, jonka voi joko [luoda itse](http://gohugo.io/themes/creation/)
tai ladata valmiina [tarjolla olevista vaihtoehdoista](http://themes.gohugo.io/). Kun teema on asennettu `themes`-hakemistoon ja
sivuston asetustiedostoon `config.toml` on ilmoitettu valittu teema ja sivuston otsikko, voidaan sivuston tarvitsemat html-tiedostot
generoida komennolla:

```
hugo
```

Tämä luo tiedostot oletuksena työhakemiston alla olevaan `public`-hakemistoon. Kääntämisen voi tehdä myös komennolla:

```
hugo server
```

Tällöin sivujen kääntämisen lisäksi Hugo käynnistää myös sisäänrakennetun www-palvelimen, jota käyttämällä on helppoa testata
sivuston toimiminen. Oletuksena käynnissä oleva palvelin seuraa myöskin Hugo-projektin tiedostojen muutoksia ja generoi
html-tiedostot uudelleen aina tarvittaessa. Näin esimerkiksi sisällön, valikoiden tai sivupohjan muokkaaminen laukaisee
html-tiedostojen uudelleenluonnin ja sivuston kehittäminen on helppoa.

Hugo soveltuu hyvin sellaisille käyttäjille, jotka haluavat www-sivustonsa toimivan mahdollisimman nopeasti ja joita ei haittaa
komentorivin käyttäminen sekä tiedostojen siirtäminen palvelimelle. Hugolla yhden blogi-kirjoituksen lisääminen tarkoittaa
teemasta riippuen mahdollisesti sitä, että uuden kirjoituksen otsikko näkyy monilla muillakin sivuilla ja sivutetuissa artikkeliluetteloissa
ensimmäisen sivun alkuun tulee uusi artikkeli, ensimmäisen sivun viimeinen siirtyy toiselle sivulle ja niin edelleen. Näin yhden sivun
muuttaminen vaikuttaa mahdollisesti useampaan sivuun. Uusien html-sivujen generointi ei Hugolla kestä hetkeä pidempää, mutta kaikki
muuttuneet sivut pitää muistaa kopioida palvelimelle. Tähän voi käyttää esimerkiksi rsync-ohjelmaa. Jos mahdollista, Hugoa voi käyttää
myös suoraan palvelimella, jolloin sivuston asetuksiin voi määritellä `public`-hakemiston sijasta jonkin muun hakemiston julkaisemista varten.

Halutessaan Hugon voi yhdistää [Git](Git)-versionhallinnan kanssa, jolloin Gitin "post-receive hook" -toimintoa käyttämällä julkaiseminen voi
tapahtua yksinkertaisesti lisäämällä uusi Markdown-tiedosto versionhallintaan ja lähettämällä sen `git push` -toiminnolla www-palvelimella
sijaitsevaan git-repositoryyn. [Ohjeet Hugon ja Gitin yhdistämiseen](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-hugo-site-to-production-with-git-hooks-on-ubuntu-14-04).

Kotisivu
:   <http://gohugo.io/>
:   [Ohjesivusto](http://gohugo.io/overview/introduction/)
:   [Pikaohje](http://gohugo.io/overview/quickstart/)
:   [Keskustelupalsta](https://discuss.gohugo.io/)
:   [Hugo-teemoja](http://themes.gohugo.io/)
:   [Lähdekoodi (Github)](https://github.com/spf13/hugo/releases)

Lisenssi
:   [Apache 2.0](https://github.com/spf13/hugo/blob/master/LICENSE.md)

Toimii seuraavilla alustoilla
:   Windows, Mac OS X, Linux

Asennus
:   Ohjelma on asennettavissa sen kotisivuilta ladattavista paketeista.

{{% wrapper class="psgallery" %}}
-   [Hugon omat kotisivut](/images/hugo-1.jpg)
-   [Hugo-sivuston työhakemisto vasemmalla ja public-hakemistoon generoitu staattinen sivusto oikealla.](/images/hugo-2.jpg)
-   [Valmiita Hugoon tarjolla olevia teemoja](/images/hugo-3.jpg)
-   [Hugoon Markdownilla kirjoitettu sivu vasemmalla ja samasta sivusta generoitu staattinen html-sivu oikealla. Markdown-tiedoston alussa on "front matter", eli sivun generoinnissa käytettävää metadataa.](/images/hugo-4.jpg)
-   [Sivuston generointi tapahtuu millisekunneissa.](/images/hugo-5.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


