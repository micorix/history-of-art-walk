import React, { Component } from 'react';
import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  themes
} from 'spectacle';
import styled from '@emotion/styled'
import {Global, css} from '@emotion/core'

const  { defaultTheme }= themes
   const theme = defaultTheme({
     // Change default settings
     primary: "#1e1e1e",
     secondary: "#E98A15",
     tertiary: '#F6F8FF',
     quaternary: '#E98A15'
   },
   {
     primary: "SF UI Display",
   });

const FullScreenSlide = `
  max-width: none !important;
  max-height:none !important;
  width: 100%;
  height:100%;
`
const firstURL = 'https://upload.wikimedia.org/wikipedia/commons/5/56/POL_Kosciol_sw_Anny_w_Warszawie_2008_%283%29.JPG'
const secondURL = 'https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-09/krakow-93.jpg'
const BaroqueFont = styled('span')`
  // font-family: 'Charm' !important;
`
const RenaissanceFont = styled('span')`
  // font-family: 'Cinzel' !important;
`
const images = {
  laskawa: {
    inside: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/NAWA_G%C5%81%C3%93WNA.JPG/800px-NAWA_G%C5%81%C3%93WNA.JPG',
    outside: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Warszawa_MBLaskawa_fc00.jpg/800px-Warszawa_MBLaskawa_fc00.jpg',
    sklepienie: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Sklepienie_dachowe_ko%C5%9Bcio%C5%82a_MB%C5%81.jpg',
    kaplica: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kaplica_adoracyjna_ko%C5%9Bci%C3%B3%C5%82_jezuit%C3%B3w_w_Warszawie.JPG/1920px-Kaplica_adoracyjna_ko%C5%9Bci%C3%B3%C5%82_jezuit%C3%B3w_w_Warszawie.JPG'
  },
  wizytki: {
    outside: 'http://archwwa.net/wp-content/uploads/2014/05/wizytki.jpg',
    inside: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Kosciol_wizytek_wnetrze.jpg/1920px-Kosciol_wizytek_wnetrze.jpg',
    ambona: 'https://vignette.wikia.nocookie.net/warszawa/images/d/d1/Ambona_ko%C5%9Bci%C3%B3%C5%82_Wizytek.JPG/revision/latest/scale-to-width-down/1000?cb=20120323220845'
  },
  anna: {
    inside: 'https://ocs-pl.oktawave.com/v1/AUTH_f9dd5582-c0b6-4b27-a573-ecf06cf3ef09/tropter-www/uploads/images/0e/3c/54ae0eb680816441ca3caa9c6fcc6c19cfec/kosciol_sw_anny_005_big.jpeg'
  }
}
const FullSlide = styled(Slide)`
${FullScreenSlide}

  `
const ComparsionSlide = styled(Slide)`
${FullScreenSlide}
display:flex;
justify-content:space-between;
  .in-row{
    width:49%;
    img{
      object-fit: cover;
    }
  }
`
export default class App extends Component {
  constructor(props){
    super(props)
    document.addEventListener('keydown', console.log)
  }
  render() {
    return (
      <>
      <Global styles={css`
        @font-face {
    font-family: 'SF UI Display';
    src: url('https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-Regular.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}
        `} />
      <Deck theme={theme} progress="bar" transition={["fade"]}>
        <Slide bgImage="https://i.pinimg.com/originals/b7/18/f7/b718f7daf03d36fb4cecbc69e770ada5.jpg" bgDarken={0.8} transition={["zoom"]}>

          <Heading size={1} textColor="tertiary"><BaroqueFont>Barokowo</BaroqueFont><br/><RenaissanceFont>renesansowy</RenaissanceFont></Heading>
          <Heading size={4} textColor="secondary">spacer po Starym Mieście i okolicach</Heading>
        </Slide>

        <Slide  transition={["zoom"]}>
        <Heading textColor="secondary"><BaroqueFont>Kościół Wizytek</BaroqueFont></Heading>
        </Slide>
        <FullSlide transition={["slide"]}>
                <Image src={images.wizytki.outside} />
        </FullSlide>
        <Slide  transition={["fade"]}>
        <Heading>Kościół renesansowy?</Heading>
        </Slide>
        <Slide  transition={["zoom"]}>
        <Heading><RenaissanceFont>Kościół Matki Bożej Łaskawej</RenaissanceFont></Heading>
        </Slide>
        <FullSlide transition={["slide"]}>
                <Image src={images.laskawa.outside} />
        </FullSlide>

        <ComparsionSlide >
        <div className="in-row">
        <Image src={images.laskawa.inside} />
        </div>
        <div className="in-row">
                <Image src={images.wizytki.inside} />
                  <Text margin={40}  textAlign="left" textColor="secondary">{'\u2191'} <BaroqueFont>Kościół Wizytek</BaroqueFont></Text>
                  <Text margin={40} textAlign="left" textColor="tertiary">{'\u2190'} <RenaissanceFont>Kościół Matki Bożej Łaskawej</RenaissanceFont></Text>
                </div>
        </ComparsionSlide>
        <Slide transition={["slide"]}>
        <Image src={images.laskawa.sklepienie} />

        </Slide>
        <FullSlide transition={["slide"]}>
        <Image src={images.laskawa.kaplica} />

        </FullSlide>
        <FullSlide>
        <Image src={images.wizytki.ambona} />

        </FullSlide>
        <FullSlide transition={["zoom"]}>
        <Image src={images.anna.inside} />

        </FullSlide>
        <Slide bgColor="secondary">
        <Heading size={2} textColor="tertiary">Dziękujemy za uwagę</Heading>
        <Heading size={4} textColor="primary">Wojciech Leśnik & Michał Oręziak</Heading>
        </Slide>
          <Slide bgColor="secondary" transition={["slide"]}>
        <Heading size={4} textColor="tertiary">Zdjęcia</Heading>
        <Text textColor="primary">wikimedia.org, archwwa.net, nocookie.net</Text>
        <Heading size={4} textColor="tertiary">Bilbiografia</Heading>
        <Text textColor="primary">laskawa.pl, historiana6.pl, wikipedia.org</Text>
        </Slide>
      </Deck>
      </>
    );
  }
}
