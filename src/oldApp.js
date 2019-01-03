import React, { Component } from 'react';
import {
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
  Text
} from 'spectacle';
import styled from '@emotion/styled'
const FullScreenSlide = `
  max-width: none !important;
  max-height:none !important;
  width: 100%;
  height:100%;
`
const firstURL = 'https://upload.wikimedia.org/wikipedia/commons/5/56/POL_Kosciol_sw_Anny_w_Warszawie_2008_%283%29.JPG'
const secondURL = 'https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-09/krakow-93.jpg'
const BaroqueFont = styled('span')`
  font-family: 'Charm' !important;
`
const RenaissanceFont = styled('span')`
  font-family: 'Cinzel' !important;
`
const FirstSlide = styled(Slide)`
${FullScreenSlide}
  display:flex;
  align-items:center;
  justify-content:center;
  background:black;
  &::after{
    content: '';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    height:100%;
    background-repeat:no-repeat !important;
    background-size:cover !important;
    z-index:-1;
  }
  &::before{
    content: '';
    position:absolute;
    top:-.5px;
    left:0;
    width:100%;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    height:100%;

    background-repeat:no-repeat !important;
    background-size:cover !important;
    z-index:-1;
  }
  ${props => {
    switch(props.step){
      case 0:
        return `
          &::after{
            background: url('${firstURL}')
          }
          &::before{
            background: url('${firstURL}')
          }
        `
        break
    case 1:
      return `
      &::after{
        background: url('${secondURL}')
      }
      &::before{
        background: url('${secondURL}')
      }
      `
      break
    case 2:
      return `
      &::after{
        background: url('${firstURL}')
      }
      &::before{
        background: url('${secondURL}')
      }
      `
      break
    }
  }}
`
const MainHeading = styled(Heading)`
position:relative;
z-index:2;
  background: black;
  color:white;
  padding:20px;
  display:inline-block;
`
const Shadower = styled('div')`
  position:absolute;
  top:0;
  left:0;
  background:black;
  z-index:1;
  width:100%;
  height:100%;
  opacity: ${props => props.shown ? 1 : 0};
  transition: .1s all;
`
export default class App extends Component {
  state = {
    step: 0,
    shadower: false
  }
  constructor(props){
    super(props)
    this.beginAnimation()
  }
  beginAnimation = () => {
    let interval = setInterval(() => {
      if(this.state.step < 2){
        this.setState({
          shadower: true
        })
        console.log('shadower on')
        setTimeout(() => {
          this.setState({
            step: this.state.step+1,
          })
          console.log('step')
        }, 100)
        setTimeout(() => {
          this.setState({
            shadower:false
          })
          console.log('shadower off')
        }, 250)
      }else{
        clearInterval(interval)
      }

    }, 3000)
  }
  render() {
    return (
      <Deck>
        <FirstSlide step={this.state.step}>
        <Shadower shown={this.state.shadower} />
          <MainHeading>{
            (() => {
              switch(this.state.step){
                case 0: return <BaroqueFont>Barok</BaroqueFont>; break;
                case 1: return <RenaissanceFont>Renesans</RenaissanceFont>; break;
                case 2: return <span><BaroqueFont>Barok</BaroqueFont> vs <RenaissanceFont>Renesans</RenaissanceFont></span>; break;
              }
            })()
          }</MainHeading>
        </FirstSlide>
        <Slide>

        </Slide>
      </Deck>
    );
  }
}
