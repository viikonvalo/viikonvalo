+++
Date = "2013-10-12T21:00:00.000Z"
Title = "Filezilla"
Description = "FileZilla on avoimeen lähdekoodiin perustuva alustariippumaton FTP, SFTP ja FTPS muotoja tukeva tiedonsiirto-ohjelma. Ohjelma on äänestetty parhaaksi ohjelmaksi vuonna 2006 järjestetyissä Sourceforge.net Community Choice Awardsissa."
Week = "3x42"
Number = "146"
Alustat = ["Linux","Windows","Mac OS X"]
Tagit = ["Internet","Tiedostonhallinta","FTP","SFTP"]
Type = "post"
Author = "Taleman"
Pageimage = "valo146-filezilla.png"
+++


**FileZilla on avoimeen lähdekoodiin perustuva alustariippumaton FTP,
SFTP ja FTPS muotoja tukeva tiedonsiirto-ohjelma. Ohjelma on äänestetty
parhaaksi ohjelmaksi vuonna 2006 järjestetyissä Sourceforge.net
Community Choice Awardsissa.**

![ ](/images/valo146-filezilla.png "fig:valo146-filezilla.png")
Filezilla-projekti on tehnyt sekä FTP-asiakasohjelman että
FTP-palvelinohjelmiston. Asiakasohjelma on näistä suositumpi,
SourceForgen kaikkien aikojen eniten ladattujen sovellusten listalla se
on sijalla 9, ja tällä viikolla ladattujen listalla sijalla 8[[1]][1].
Filezillan kanssa samantapaisia sovelluksia ovat jo aiemmin esitellyt
[WinSCP](WinSCP) ja [FireFTP](FireFTP).

{{% wrapper class="rightimage" %}}
![ ](/images/Filezilla.png "fig:Filezilla.png")
{{% /wrapper %}}
Projekti aloitettiin vuoden 2001 tammikuussa tietojenkäsittelytieteen
harjoitustyönä. Ensimmäinen julkaisu tapahtui 22. kesäkuuta 2001[[2]][2] .
Mainetta tuli ripeästi, sillä marraskuussa 2003 Filezilla valittiin
SourceForgen kuukauden projektiksi[[3]][3].

FTP eli File Transfer Protocol on käytössä tiedostojen siirtoon
esimerkiksi omalta koneelta webbipalvelimelle, tai tiedostopalvelimelta
omalle koneelle. Yksityiskohdat riippuvat käytetystä FTP-ohjelmasta,
mutta ajatus on oman koneen hakemistosta siirtää tiedosto
webbipalvelimen hakemistoon. FTP-ohjelmat joissa on GUI tapaavat näyttää
rinnakkain kaksi hakemistolistausta, toinen on oman koneen ja toinen on
etäkoneen. Ensin pitää muodostaa yhteys etäkoneeseen, tähän tarvitaan
käyttäjätunnus ja salasana. Kun molemmat hakemistolistaukset näkyvät,
vedetään siirrettävä tiedosto listauksesta toiseen ja ohjelma siirtää
tiedoston paikalleen. Tai siirrettävät tiedostot merkitään, ja jollain
painikkeella käynnistetään siirto.

Filezilla osaa tehdä tämän vaivattomasti, eikä käyttäjän yleensä
tarvitse tietää muuta kuin palvelinkoneen osoite, oma käyttäjätunnus ja
salasana. Komentoriviltä käytettävissä FTP-asiakasohjelmissa voi joutua
säätämään enemmänkin, esimerkiksi jos on palomuuri välissä ei tavallinen
FTP toimi vaan on vaihdettava Passive Mode käyttöön.

Filezilla on saanut moitetta salasanojen tallentamisesta salaamattomiin
tekstitiedostoihin[[4]][4]. Kritiikkiin on vastattu, ettei salaaminen
oikeasti lisää turvallisuutta, koska kräkkeri joka saa haltuunsa
tiedoston johon salasanat on tallennettu, pystyy murtamaan salauksen ja
saa salasanat haltuunsa joka tapauksessa. Suojauksessa pitää siis
panostaa koko järjestelmän suojaamiseen, etteivät asiattomat pääse
lainkaan käsiksi suojattaviin tiedostoihin. Lisäksi kannattaa käyttää
SSH-avaimia käyttäjien tunnistamiseen ja kieltää salasanojen käyttö, jos
tosiaan on tärkeää pitää kräkkerit poissa.

{{% wrapper class="rightimage" %}}
![ ](/images/Filezilla-file-server.png)
{{% /wrapper %}}
Uusin versio Filezilla 3.7.3 julkaistiin 7. elokuuta. Tämä on jo
seitsemäs julkaisu 9. toukokuuta tapahtuneen 3.7.0 julkaisun jälkeen.
Projekti tuntuu työskentelevän ahkerasti. [[5]][5]

Kotisivu
:   <https://filezilla-project.org/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Linux, Mac OS X, Windows

Asennus
:   Linux-jakeluissa Filezilla kannattaa asentaa jakelun omasta
    pakettivarastosta. Filezillan kotisivulta löytyy asennuspaketit Mac
    OS X:lle ja Windowsille (sekä Linuxille ja lähdekoodipaketti)

Käyttöohjeet
:   Ohjelmassa on sisäänrakennettu ohje. Webbisivulla on [laajat
    käyttöohjeet](https://wiki.filezilla-project.org/Documentation),
    kylläkin vain enlanniksi.

Lisätietoja
-----------

-   <http://fi.wikipedia.org/wiki/FileZilla>
-   <http://en.wikipedia.org/wiki/Comparison_of_FTP_client_software>

Viitteitä
---------

1. [http://sourceforge.net/top/][1]
2. [http://web.archive.org/web/20080423060025/http://filezilla.sourceforge.net/documentation/history.htm][2]
3. [http://sourceforge.net/potm/potm-2003-11.php][3]
4. [http://unsharptech.com/2008/05/20/filezilla-ftp-passwords-stored-in-plaintext/][4]
5. [https://filezilla-project.org/versions.php][5]

{{% wrapper class="psgallery" %}}
-   [Käynnistys](/images/Filezilla-01.png)
-   [Muodostetaan yhteys etäkoneeseen](/images/Filezilla-02.png)
-   [Siirretty yksi tiedosto vetämällä hakemistosta
    toiseen](/images/Filezilla-03.png)
-   [Tiedostoja voi merkata siirrettäväksi ](/images/Filezilla-04.png)
-   [Usein käytetyistä yhteyksistä voi tehdä
    kirjanmerkin](/images/Filezilla-05.png)
-   [Noudetaan Filezillan Windows-versio](/images/Filezilla-06.png)
-   [Windowsin Filezilla](/images/Filezilla-07.png)
-   [Filezilla Mac OS X:ssä](/images/Filezilla-08.png)
{{% /wrapper %}}

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman, Pesasa* <br />
*Kuvituskuvat: Filezilla-projekti ja OpenClipArt*

[1]: http://sourceforge.net/top/
[2]: http://web.archive.org/web/20080423060025/http://filezilla.sourceforge.net/documentation/history.htm
[3]: http://sourceforge.net/potm/potm-2003-11.php
[4]: http://unsharptech.com/2008/05/20/filezilla-ftp-passwords-stored-in-plaintext/
[5]: https://filezilla-project.org/versions.php

