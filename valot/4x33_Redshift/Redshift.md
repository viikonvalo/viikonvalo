+++
Date = "2014-08-09T21:00:00.000Z"
Title = "Redshift"
Description = "Redshift säätää näytön värilämpötilaa vuorokaudenajan mukaan."
Week = "4x33"
Number = "189"
Alustat = ["Linux","Windows"]
Tagit = ["Näyttö","Värilämpötila"]
Type = "post"
Author = "Taleman"
Pageimage = "valo189-redshift.png"
+++


**Redshift säätää näytön värilämpötilaa vuorokaudenajan mukaan.**

![ ](/images/valo189-redshift.png "fig:valo189-redshift.png")
Redshift säätää näytön värilämpötilaa yöllä lämpimämmäksi eli
punaisemmaksi, ja päivällä kylmemmäksi eli sinisemmäksi. Tietokoneen
näytöissä lienee tämmöinen säätö muutenkin, mutta se pitää käsin säätää
näytön painikkeista. Redshift tekee säädön automaattisesti.

Redshiftille pitää kertoa maantieteellinen sijainti. Tästä ohjelma
laskee, milloin siinä paikassa alkaa iltahämärä ja milloin päivä alkaa
valkenemaan. Päivisin näytön värilämpötila on neutraali 5500 °C ja yöllä
punasävyinen 3700 °C. Arvot voi muuttaa mieleisikseen tai omalle
näytölle paremmin sopiviksi.

Tarkoitus on vähentää silmien rasittumista öiseen aikaan näyttöä
tuijotellessa. Kun ympärillä on hämärää, kirkas näyttö on liian suuri
kontrasti ympäristölle. Yhden illan kokeilun jälkeen sanoisin tässä voi
olla jotain perää. Toisaalta pitäisi ehkä huoneen valaistuskin muuttaa
punasävyisemmäksi jotta vaikutus ei menisi piloille. Ehkä myös uni tulee
paremmin silmään kun ei ole tuijotellut päivänvalon väristä ruutua juuri
ennen nukkumaanmenoa. Redshift säätää värilämpötilaa hiljalleen eikä
rusauta sitä suoraan keskipäivästä iltapimeään.

{{% wrapper class="rightimage" %}}
![ ](/images/Redshift-bulb.png "fig:Redshift-bulb.png")
{{% /wrapper %}}
Tarjolla on komentorivisovellus, joka ainakin Debian GNU/Linuxissa ja
Ubuntussa on nimellä redshift. Tätä voivat käyttää myös graafista
käyttöliittymää näytöllään käyttävät, koska näytön värilämpötila muuttuu
siinäkin, vain käyttöliittymä on pelkästään komentorivi. On olemassa
myös gtk-redshift, mutta siinäkään ei varsinaisesti ole graafista
käyttöliittymää, osaapahan tehdä työkalupalkkiin kuvakkeen josta
sovelluksen voi kytkeä päälle tai pois.

Käyttöönotto oli Debian Wheezyssä hieman hankalaa. Asennus ei kysynyt
mitään, joten ohjelma ei käynnistynyt kun se ei tiennyt sijaintiaan.
Ohjelma piti käynnistää tarkentimen -l kera ja ilmoittaa leveyspiiri ja
pituuspiiri. Ohjelma väitti osaavansa katsoa sijainnin muista
ohjelmista, muttei se kyllä toiminut. Kun selvittää sijaintinsa
koordinaatit voi ohjelman käynnistää seuraavasti:

```
$ gtk-redshift -l 61.466667:21.799999
Käytetään menetelmää 'randr'.
```

Koordinaatit saa selville esimerkiksi [Googlen
Maps](https://support.google.com/maps/answer/18539?hl=fi)-palvelulla.
Etsii oman paikkakuntansa kartalle näkyviin ja klikkaa hiiren
ominaisuuspainikkeella. Esiin tulee ponnahdusikkuna, jossa "Mitä täällä
on?" näyttää tietoja paikasta ja koordinaatit leveyspiirille ja
pituuspiirille. Toinen mahdollisuus on Gnome Kello ja kalenteri, siinä
sijainniksi voi ilmoittaa kaupungin ja se näyttää koordinaatit joilla
ilmeisesti voi hienosäätää sijaintiaan.

Ubuntu 12.04:ssä gtk-redshift toimi heti, se osasi katsoa sijainnin
itse. Arvaan, että sijainti tuli säätiedotteesta, johon olin pistänyt
kotikaupunkini jotta säätiedote tulee lähialueelta. Piti lisätä
gtk-redshift käynnistyviin ohjelmiin, jotta se käynnistyy joka
sisäänkirjautumisella.

Kuvakaappauksissa värimuutokset eivät näkyneet. En oikein ymmärtänyt
miksi. Piti ottaa kameralla kuva näytöstä, tällä kertaa kuvakaappausten
tilalla on siis valokuvia.

Kotisivu
:   <http://jonls.dk/redshift/>

Lisenssi
:   [GNU GPL](GNU_GPL) v3

Toimii seuraavilla alustoilla
:   Linux, Windows

Asennus
:   Linux-jakeluissa löytynee jakelun omista pakettivarastoista.
    Windowsille sovellus löytyy kotisivulta.

Käyttöohjeet
:   Löytyy man-sivu. Lisäksi kotisivulla on selitetty miten ohjelma
    toimii ja käyttövinkkejä.

{{% wrapper class="psgallery" %}}
-   [Redhift pois päältä](/images/Redshift-01.jpg)
-   [Värilämpötilaksi pakotettu 3500 °C](/images/Redshift-02.jpg)
-   [Värilämpötilaksi pakotettu 8000 °C](/images/Redshift-03.jpg)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*Valokuvaus: Taleman*


