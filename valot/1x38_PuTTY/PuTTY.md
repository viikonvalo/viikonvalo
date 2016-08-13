+++
Date = "2011-09-17T21:00:00.000Z"
Title = "PuTTY"
Description = "PuTTY on vapaa SSH-pääteohjelma Windowsille ja Unixille. PuTTYn avulla Windows-koneesta voi etäkäyttää Linux- ja Unix-koneita pääteyhteydellä kätevästi ja tietoturvallisesti."
Week = "1x38"
Number = "38"
Alustat = ["Windows","Linux","Unix","Windows Mobile","Symbian"]
Tagit = ["Internet"]
Type = "post"
Author = "Taleman"
Pageimage = "valo38-putty.png"
+++


**PuTTY on vapaa SSH-pääteohjelma Windowsille ja Unixille. PuTTYn
avulla Windows-koneesta voi etäkäyttää Linux- ja Unix-koneita
pääteyhteydellä kätevästi ja tietoturvallisesti.**

![ ](/images/valo38-putty.png "fig:valo38-putty.png") Linux-jakeluissa on yleensä
auto­maat­tisesti asennettuna SSH-asiakasohjelma, jolla voi ottaa
salatun pääteyhteyden etäkoneeseen. Windowissa ei vastaavaa ole, mutta
PuTTY pelastaa. PuTTY on helppo asentaa Windowsissa, riittää kun kopioi
tiedoston **putty.exe** johonkin hakemistoon johon käyttäjällä on
kirjoitusoikeus. Ei siis tarvita asennusvelhoa eikä asennusohjelmaa.
Ohjelma käynnistyy kliksauttamalla ohjelman kuvaketta tai
komentoikkunassa kirjoittamalla putty.exe tai tiedoston polkunimi jos se
ei ole nykyhakemistossa eikä hakupolulla olevassa hakemistossa.

PuTTY osaa SSH:n käyttämän salauksen ja osaa toimia myös tavallisena
telnet-pääteohjelmana. Salaamattomia etäyhteyksiä tosin on syytä
välttää, matkan varrella voidaan kuunnella liikennettä ja vakoilla
selväkielinen sisältö ja salasanat selville. SSH ja siis myös sitä
käyttävä PuTTY osaa salakirjoittaa yhteyttä muodostettaessa lähetettävät
salasanat ja koko yhteyden, yhteyden kuuntelusta ei siis ole hyötyä.
{{% wrapper class="rightimage" %}}
![ ](/images/Computer1.png "fig:Computer1.png")
{{% /wrapper %}}
Etäkoneessa johon yhteys otetaan
pitää olla asennettuna SSH-palvelinohjelmisto. Linux-jakeluissa tämä
löytyy esimerkiksi nimellä **openssh-server**.

PuTTYä voi käyttää myös Linuxissa, jos vaikkapa on Windowsissa tottunut
PuTTYyn tai haluaa graafisen käyttöliittymän SSH-asiakasohjelmaan. PuTTY
tukee joustavia päätteen asetuksia, joita voi muuttaa myös istunnon
aikana (Ctrl + oikea hiiren painike -toiminnolla), monia
X11-todentamisyhteyskäytäntöjä ja lukuisia muita kiinnostavia
toimintoja, joita xtermissä suoritettava ssh ei tarjoa.

Sama tekijä tarjoaa samalla kotisivulla myös muita SSH-komentoja,
esimerkiksi PSCP on secure copy, vastaava komento kuin Linuxin
[scp](http://linux.die.net/man/1/scp). Se siis kopioi tiedostoja
koneesta toiseen salatulla yhteydellä. Tuo scp on saatavilla muualta
graafisen käyttöliittymän kera,
[WinSCP](http://winscp.net/eng/index.php) on esitelty [Viikon
VALOna](http://viikonvalo.fi/WinSCP). Muut komennot ovat

-   PSFTP (SFTP-asiakasohjelma)
-   PuTTYtel (PuTTY josta on poistettu salaus. Joissain maissa on
    salauksen käyttö kiellettyä.)
-   plink (komentorivikäyttöliittymä PuTTY:n taustaohjelmiin)
-   Pagaent (SSH-autentikointiagentti ohjelmille PuTTY, PSCP, PSFTP ja
    Plink)
-   PuTTYgen (tekee RSA ja DSA avaimia)

SSH-tunnelin saa tehtyä komennon plink avulla. Tällöin paikallisverkossa
A oleva Windows-kone saadaan toimimaan ikään kuin se olisi
paikallisverkossa B, kun ensin on luotu tunneli näiden verkkojen
välille.

Otettaessa yhteys etäkoneeseen ensimmäistä kertaa SSH näyttää etäkoneen
koneavaimen "sormenjäljen", eli fingerprint. Se on avaimesta laskettu
lyhyt
[tiiviste](http://fi.wikipedia.org/wiki/Tiiviste_%28tietotekniikka%29),
ja tarkoitus on verrata muuta kautta hankittuun saman avaimen
sormenjälkeen että ne täsmäävät. Näin varmistetaan otetun yhteys siihen
etäkoneeseen johon oli tarkoitus, eikä johonkin vallan muuhun
tietokoneeseen jolla sillä hetkellä sattuu olemaan sama IP-numero.
Koneavaimen sormenjäljen näkee kirjautumalla koneeseen ja katsomalla
komennolla

```
ssh-keygen -l -f /etc/ssh/ssh_host_rsa_key
```

SSH osaa tunnistaa käyttäjän salasanan sijaan tunnistusavaimella. Jotkut
tietoturvasta huolestuneet palvelut sallivat vain tunnistusavaimella
tapahtuvan sisäänkirjautumisen.

Kotisivu
:   <http://www.chiark.greenend.org.uk/~sgtatham/putty/>

Lisenssi
:   [MIT](MIT)

Toimii seuraavilla alustoilla
:   Windows, Linux, Unix, Windows Mobile, Symbian OS
    <http://fi.wikipedia.org/wiki/PuTTY>

Asennus
:   Windowsissa noudetaan tiedosto putty.exe Puttyn kotisivulta.
    Linux-jakeluissa löytynee jakelun omista pakettivarastoista.

Käyttöohjeet
:   [PuTTY-ohjelman asetukset -
    vinkkejä](http://www.cs.tut.fi/~jkorpela/putty.html)
:   [PuTTYn käyttö](http://edu.joroinen.fi/~jliik/putty.html)
:   [PuTTY Documentation
    Page](http://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html)
:   [SSH
    tunnistusavaimella](http://www.debian-administration.org/articles/530)
:   [SSH ilman salasanan
    kyselyä](http://www.debian-administration.org/articles/152)
:   [PuTTY:n käsikirjan luku
    plink:stä](http://the.earth.li/~sgtatham/putty/0.60/htmldoc/Chapter7.html)
:   [SSH Tunneling for
    Windows](http://cims.nyu.edu/webapps/content/systems/userservices/netaccess/tunnel)

{{% wrapper class="psgallery" %}}
-   [Etäkoneen osoite, asetukset voi tallentaa konekohtaisesti](/images/PuTTY_asetukset.png)
-   [Oletukset kelpaa paitsi merkistön vaihdan Unicodeksi](/images/PuTTY_kayttamaan_Unicodea.png)
-   [Koneavaimella tunnistetaan etäkone](/images/PuTTY_SSH-tunnistaa-koneet.png)|
-   [Pääteyhteys muodostettu](/images/PuTTY_SSH-paateyhteys-muodostettu.png)
-   [Väritkin toimivat, PuTTYn asetuksissa voi säätää](/images/PuTTY_Varitkin_toimivat_paatteessa.png)
-   [Päätesovellukset toimivat](/images/PuTTY_Myos_Emacs_toimii.png)
-   [Iptraf toisena esimerkkinä](/images/PuTTY_Curses-sovelluksetkin_toimivat.png)
-   [Kopioidaan tiedostoja etäkoneelle pscp.exe-komennolla](/images/PuTTY_pscp_toimii.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*kuvakaappaukset: Taleman*

{{% wrapper class="comments" %}}
Kommentit
---------

Myös SSH-tunnelointi mahdollista
:   Taleman 22. Syyskuu 2011 - 18:44
:   En muistanut artikkelia kirjoittaessani mainita: SSH-tunnelin saa
    tehtyä komennon plink avulla. Tällöin paikallisverkossa A oleva
    Windows-kone saadaan toimimaan ikään kuin se olisi paikallisverkossa B,
    kun ensin on luotu tunneli näiden verkkojen välille. 

{{% /wrapper %}}
