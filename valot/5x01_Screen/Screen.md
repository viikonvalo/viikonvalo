+++
Date = "2014-12-31T22:00:00.000Z"
Title = "Screen"
Description = "Screen on tekstiterminaalissa toimiva työkalu, joka mahdollistaa muun muassa ajossa olevan (tekstipohjaisen) ohjelman jättämisen taustalle käyntiin koneelta ulos kirjautuessa."
Week = "5x01"
Number = "209"
Alustat = ["Linux","FreeBSD","OpenBSD","NetBSD","Solaris"]
Tagit = ["Komentorivi"]
Type = "post"
Author = ""
Pageimage = "valo209-screen.png"
+++


**Screen on tekstiterminaalissa toimiva työkalu, joka mahdollistaa muun
muassa ajossa olevan (tekstipohjaisen) ohjelman jättämisen taustalle
käyntiin koneelta ulos kirjautuessa.**

![ ](/images/valo209-screen.png "fig:valo209-screen.png")
Screen on ohjelma, jolla voi hallita terminaali-ikkunassa ajettavia komentoriviohjelmia,
niiden suorittamista rinnakkain sekä tausta-ajossa. Screen on mahdollista jättää käyntiin
taustalle ilman käyttöliittymää ja kutsua taas tarvittaessa esiin. Tämän lisäksi Screen sisältää
toimintoja, joilla voidaan hallita useita rinnakkain ajettavia komentoriviohjelmia,
siirtyä niiden välillä ja näyttää halutut ohjelmat yhtä aikaa.

Screenistä irtautuminen ja siihen kytkeytyminen
-------------

Oletetaan tilanne, jossa halutaan suorittaa jokin pitkäkestoinen operaatio tekstipohjaisella
ohjelmalla etäkoneella, johon voidaan ottaa ssh-yhteys. Ongelmaksi muodostuu yhteyden ottamiseen
käytetyn koneen ja etäkoneen välinen yhteys. Jos yhteys katkaistaan, katkeaa myös ohjelman
suoritus. Jos yhteys jätetään auki, jää paikalliselle koneelle auki yhteyden ottamiseen käytetty
ssh-ohjelma ja joudutaan varomaan, ettei sitä suljeta vahingossa. Jos paikallinen kone jostain
syystä sammuu tai verkossa ilmenee häiriötä, katkeaa myös yhteys etäkoneelle ja samalla ohjelman
suoritus keskeytyy. Tällaisessa tilanteessa voidaan hyödyntää Screeniä.

Eräs usein käytetty sovellutus on Screenin käyttö yhdessä [Irssi](Irssi)-IRC-sovelluksen kanssa.
Koska IRC-keskustelukanavilla käytävä keskustelu on reaaliaikaista ja käyttäjä näkee vain ne
keskustelut, jotka tapahtuvat hänen ollessa paikalla, haluaa moni keskustelija jättää IRC-sovelluksensa
päälle myös silloin, kun eivät itse ole tietokoneen ääressä. Yksi toimivaksi todettu tapa on hankkia ssh-tunnukset
johonkin jatkuvasti päällä olevaan tietokoneeseen ja käynnistää sinne Screen-ohjelma ja sen sisään
komentorivipohjainen Irssi. Tällöin käyttäjä voi halutessaan ottaa yhteyden tuohon tietokoneeseen ja kytkeytyä
siellä käynnissä olevaan Screen+Irssi-yhdistelmään ja tarvittaessa katkaista yhteyden tuohon etätietokoneeseen
ja jättää Screen+Irssi-yhdistelmän käyntiin.

Screenin käyttö tässä esimerkkitapauksessa toimii seuraavasti. Otetaan ssh-yhteys etäkoneelle ja käynnistetään Screen komennolla:
```
screen
```

Ruudulle ilmestyy Screenin asetuksista riippuen mahdollisesti jotain tiedotustekstejä ja
edelleen etäkoneen komentokehote. Nyt Screen on käynnissä ja sen sisään on käynnistetty
uusi komentokehote. Tämän jälkeen voidaan käynnistää Irssi-ohjelma komennolla:
```
irssi
```

Kun yhteys halutaan sulkea, mutta jättää Screen ja Irssi käyntiin, käytetään Screenin erityisominaisuutta nimeltä *detach*.
Detach tarkoittaa screen-istunnosta irtautumista. Toisin sanoen Screen-ohjelma ja sen sisään käynnistetyt ohjelmat jätetään
käyntiin taustalle, mutta Screen irroitetaan käytössä olevasta terminaalista. Tämän jälkeen käyttäjä on vapaa kirjautumaan
ulos etäkoneelta Screenin jäädessä huolehtimaan sen sisään käynnistetyistä ohjelmista. Irtautuminen tapahtuu
näppäinyhdistelmällä *Ctrl-a d*. Ensin siis painetaan Ctrl-näppäintä pohjassa pitäen a-kirjainta, irrotetaan
molemmista näppäimistä ja painetaan vielä d-kirjainta. (d=detach) Screen käyttää tämän lisäksi monia muitakin
*Ctrl-a*-alkuisia näppäinkomentoja.

Irtautumisen jälkeen Screen tulostaa ruudulle
```
[detached]
```

jonka jälkeen käyttäjä "putoaa" takaisin samaan komentotulkkiin, josta Screen käynnistettiin. Sen jälkeen käyttäjä voi kirjautua ulos etätietokoneelta normaaliin tapaan.
Kun käyttäjä seuraavan kerran ottaa yhteyden etäkoneelle, hän voi pyytää jo käynnissä olevan Screen-ohjelman uudelleen hallintaansa komennolla:
```
screen -r
```

Tällöin Screen kytkeytyy takaisin terminaaliin ja käyttäjä saa eteensä saman ohjelman tai samat ohjelmat,
jotka hän jätti käyntiin Screenistä irtautuessaan.

Entäpä, jos ohjelmia on käynnistetty useampiin Screen-istuntoihin? Mihin näistä
`screen -r` -komento kytkeytyy? Screen ei tiedä ja siksi se kysyy sitä käyttäjältä seuraavasti:

```
 There are several suitable screens on:
     30852.pts-3.etakone  (03/01/2015 04:25:27 PM)        (Detached)
     8604.pts-3.etakone   (03/01/2015 03:59:10 PM)        (Detached)
 Type "screen [-d] -r [pid.]tty.host" to resume one of them.
```

Screen luettelee käynnissä olevat Screen-istunnot numeroituina ja ohjeistaa kertomaan,
mihin näistä käyttäjä haluaa kytkeytyä. Screen-istuntoon 8604 kytkeydytään komennolla:

```
screen -r 8604
```

Screen-istunnolle voidaan myös käynnistyksen yhteydessä antaa nimi, jolloin takaisin
kytkeytymiseen voidaan käyttää prosessin numeron sijasta annettua nimeä. Istunnolle
annetaan nimi "irssi" annetaan käynnistämällä Screen seuraavasti:
```
screen -S irssi
```

Tähän istuntoon kytkeydytään puolestaan viittaamalla siihen nimellä seuraavasti:
```
screen -r irssi
```

Jos Screen-istuntoon on jo kytkeydytty esimerkiksi toisessa ikkunassa,
Screen ilmoittaa siitä, eikä suostu kytkeytymään uudelleen. Tämän voi
välttää kahdella tavalla. Komennolla:
```
screen -d -r
```

Screen irrotetaan edellisestä terminaalista ja kytketään tämänhetkiseen. Toinen vaihtoehto on käyttää komentoa:
```
screen -x
```

Tämä komento ei irrota Screen-istuntoa aiemmasta terminaalista vaan kytkee Screen-istunnon
aiemman terminaalin lisäksi myös tämänhetkiseen terminaaliin. Tätä komentoa hyödyntämällä
voidaan siis saada sama komentorivinäkymä näkymään vaikka useamman tietokoneen näytöllä yhtä aikaa.

Alueet ja ikkunat screenin sisällä
----------------------------------

Screenin yleisin käyttötarkoitus on varmasti edellä kuvattu mahdollisuus
jättää ohjelmia käyntiin taustalle. Tämän lisäksi Screenistä löytyy myös
muita ominaisuuksia, jotka liittyvät sen sisään käynnistettyjen ohjelmien
hallintaan. Screenillä voidaan esimerkiksi jakaa terminaali-ikkuna osiin,
joita kutsutaan *alueiksi* (*region*).

Kun Screen on käynnissä, näppäinyhdistelmä *Ctrl-a S* (iso S) jakaa (split)
terminaalin vaakasuuntaisesti kahtia yläosaan ja alaosaan. Käytössä ollut
ohjelma jatkaa suoritustaan ylemmässä alueessa, mutta alempi alue on tyhjänä.
Alueiden välillä voi liikkua näppäinkomennolla *Ctrl-a tab*. Alueeseen voi
käynnistää uuden komentotulkin näppäilemällä *Ctrl-a c* (screen).
Näin voidaan kummassakin alueessa ajaa eri ohjelmia. Split-komentoa voidaan
käyttää toistuvasti jakamaan alueita uusiin.

Alueita voi poistaa näppäinkomennolla *Ctrl-a X* (remove), joka poistaa
aktiivisena olleen alueen, tai yhdistelmällä *Ctrl-a Q* (only),
joka poistaa muut ja jättää jäljelle vain aktiivisen alueen.

Mitä tapahtuu poistetuissa alueissa käynnissä olleille ohjelmille? Ei mitään.
Ohjelmat ovat käynnissä omissa ikkunoissaan (window) ja alueet ovat vain näkymiä
näihin ikkunoihin. Ikkuna voi olla näkyvissä jossain alueessa tai se voi olla
taustalla näkymättömissä. Uusia ikkunoita voi luoda jo mainitulla *Ctrl-a c* -näppäinyhdistelmällä
ja niissä käynnissä olevia ohjelmia ja komentotulkkeja voi sulkea normaaliin tapaan.
Listan käynnissä olevista ikkunoista saa näkyviin näppäilemällä *Ctrl-a "*.
Tästä listasta voi valita aktiiviseen alueeseen näkyviin haluamansa ikkunan.
Sama ikkuna voi olla näkyvissä yhtä aikaa useammassa alueessa.

Jotta ikkunat eivät menisi sekaisin, niille voi antaa kuvaavammat nimet (title).
Aktiivisessa alueessa näkyvissä olevan ikkunan nimen voi vaihtaa näppäilemällä
*Ctrl-a A* ja syöttämällä sille uuden nimen.

Historian selaaminen
--------------------

Screen-ikkunan sisällä juossutta tekstiä voi tarkastella taakse päin
kopiointi- ja vieritystilassa (copy/scrollback mode), johon pääsee
näppäilemällä *Ctrl-a Esc* (copy). Tämän näppäilyn jälkeen Screen
siirtyy tilaan, jossa voi nuolinäppäimillä selata ikkunan sisältöä
taakse päin. Selaamisen lisäksi tässä tilassa voi myös kopioida tekstiä.
Ensimmäinen enter-näppäimen painallus merkitsee kopioinnin aloituskohdan
ja toinen lopetuskohdan. Näiden väliin jäänyt teksti kopioidaan talteen
ja tämän jälkeen kontrolli palaa takaisin ikkunassa ajettavalle ohjelmalle.
Kopioidun tekstin voi Screenin sisällä liittää näppäilemällä *Ctrl-a ]*.

Tärkeimmät näppäinkomennot
--------------------------

Näppäinyhdistelmä  |nimi             |merkitys
-------------------|-----------------|-----------------------------------------------------------------------------------------
C-a "              |(windowlist -b)  |Esitä valintalista kaikista ikkunoista.
C-a tab            |(focus)          |Vaihda kohdistus seuraavaan alueeseen. (Katso myös *split*, *remove* ja *only*)
C-a a              |(meta)           |Lähetä ohjelmalle ctrl-a -näppäily. Tarvitaan, joska screen nappaa todellisen ctrl-a:n.
C-a A              |(title)          |Nimeä nykyinen ikkuna
C-a c              |(screen)         |Luo uusi ikkuna, käynnistä siihen komentotulkki ja siirry siihen.
C-a d              |(detach)         |Irrota screen tästä terminaalista.
C-a space          |(next)           |Vaihda seuraavaan ikkunaan.
C-a backspace      |(prev)           |Vaihda edelliseen ikkunaan.
C-a Q              |(only)           |Sulje muut alueet ja jätä vain tämä.
C-a S              |(split)          |Jaa alue kahtia vaakasuunnassa. (Katso myös *only*, *remove* ja *focus*.)
C-a X              |(remove)         |Poista nykyinen alue. (Katso myös *split*, *only* ja *focus*.)
C-a C-\\           |(quit)           |Sulje kaikki ikkunat ja lopeta screen.
C-a [, C-a esc     |(copy)           |Siirry kopiointi- ja vieritystilaan.
C-a ]              |(paste)          |Liitä kopioitu teksti.

Lisää näppäinkomentoja ja ohjeita löytyy screen-ohjelman
**man**-sivuilta.

```
man screen
```

Kotisivu
:    <http://www.gnu.org/software/screen/>

Lisenssi
:    [GNU GPL](GNU_GPL) v.3+

Toimii seuraavilla alustoilla
:    Linux, FreeBSD, NetBSD, OpenBSD, Solaris

Asennus
:    Linux-järjestelmiin ohjelma löytyy paketinhallinnasta.

{{% wrapper class="psgallery" %}}
-   [Vasta käynnistetty screen näyttää versio- ja lisenssitietonsa.](/images/screen-1.jpg)
-   [Screen jaettuna kahtia.](/images/screen-2.jpg)
-   [Alemmassa alueessa luettelo käynnissä olevista ikkunoista.](/images/screen-3.jpg)
-   [Ylemmässä alueessa kopiointi- ja vieritystilassa kopiointi meneillään.](/images/screen-4.jpg)
{{% /wrapper %}}


*Pesasa* <br />
*Kuvakaappaukset: Pesasa*

