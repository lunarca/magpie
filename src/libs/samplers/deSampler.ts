import * as Tone from "tone"

import attn from "../../assets/samples/de/attn.mp3"
import colon from "../../assets/samples/de/colon.mp3"

import zero from "../../assets/samples/de/0.mp3"
import one from "../../assets/samples/de/1.mp3"
import two from "../../assets/samples/de/2.mp3"
import three from "../../assets/samples/de/3.mp3"
import four from "../../assets/samples/de/4.mp3"
import five from "../../assets/samples/de/5.mp3"
import six from "../../assets/samples/de/6.mp3"
import seven from "../../assets/samples/de/7.mp3"
import eight from "../../assets/samples/de/8.mp3"
import nine from "../../assets/samples/de/9.mp3"

import ten from "../../assets/samples/de/10.mp3"
import eleven from "../../assets/samples/de/11.mp3"
import twelve from "../../assets/samples/de/12.mp3"
import thirteen from "../../assets/samples/de/13.mp3"
import fourteen from "../../assets/samples/de/14.mp3"
import fifteen from "../../assets/samples/de/15.mp3"
import sixteen from "../../assets/samples/de/16.mp3"
import seventeen from "../../assets/samples/de/17.mp3"
import eighteen from "../../assets/samples/de/18.mp3"
import nineteen from "../../assets/samples/de/19.mp3"

import twenty from "../../assets/samples/de/20.mp3"
import twentyone from "../../assets/samples/de/21.mp3"
import twentytwo from "../../assets/samples/de/22.mp3"
import twentythree from "../../assets/samples/de/23.mp3"
import twentyfour from "../../assets/samples/de/24.mp3"
import twentyfive from "../../assets/samples/de/25.mp3"
import twentysix from "../../assets/samples/de/26.mp3"
import twentyseven from "../../assets/samples/de/27.mp3"
import twentyeight from "../../assets/samples/de/28.mp3"
import twentynine from "../../assets/samples/de/29.mp3"

import thirty from "../../assets/samples/de/30.mp3"
import thirtyone from "../../assets/samples/de/31.mp3"
import thirtytwo from "../../assets/samples/de/32.mp3"
import thirtythree from "../../assets/samples/de/33.mp3"
import thirtyfour from "../../assets/samples/de/34.mp3"
import thirtyfive from "../../assets/samples/de/35.mp3"
import thirtysix from "../../assets/samples/de/36.mp3"
import thirtyseven from "../../assets/samples/de/37.mp3"
import thirtyeight from "../../assets/samples/de/38.mp3"
import thirtynine from "../../assets/samples/de/39.mp3"

import forty from "../../assets/samples/de/40.mp3"
import fortyone from "../../assets/samples/de/41.mp3"
import fortytwo from "../../assets/samples/de/42.mp3"
import fortythree from "../../assets/samples/de/43.mp3"
import fortyfour from "../../assets/samples/de/44.mp3"
import fortyfive from "../../assets/samples/de/45.mp3"
import fortysix from "../../assets/samples/de/46.mp3"
import fortyseven from "../../assets/samples/de/47.mp3"
import fortyeight from "../../assets/samples/de/48.mp3"
import fortynine from "../../assets/samples/de/49.mp3"

import fifty from "../../assets/samples/de/50.mp3"
import fiftyone from "../../assets/samples/de/51.mp3"
import fiftytwo from "../../assets/samples/de/52.mp3"
import fiftythree from "../../assets/samples/de/53.mp3"
import fiftyfour from "../../assets/samples/de/54.mp3"
import fiftyfive from "../../assets/samples/de/55.mp3"
import fiftysix from "../../assets/samples/de/56.mp3"
import fiftyseven from "../../assets/samples/de/57.mp3"
import fiftyeight from "../../assets/samples/de/58.mp3"
import fiftynine from "../../assets/samples/de/59.mp3"

import sixty from "../../assets/samples/de/60.mp3"
import sixtyone from "../../assets/samples/de/61.mp3"
import sixtytwo from "../../assets/samples/de/62.mp3"
import sixtythree from "../../assets/samples/de/63.mp3"


export const getDeSampler = () => { 
  const deSampler = new Tone.Sampler({
    urls: {
      A0: attn,
      "A#0": colon,
      B0: zero,
      C0: one,
      "C#0": two,
      D0: three,
      "D#0": four,
      E0: five,
      F0: six,
      "F#0": seven,
      G0: eight,
      "G#0": nine,
      A1: ten,
      "A#1": eleven,
      B1: twelve,
      C1: thirteen,
      "C#1": fourteen,
      D1: fifteen,
      "D#1": sixteen,
      E1: seventeen,
      F1: eighteen,
      "F#1": nineteen,
      G1: twenty,
      "G#1": twentyone,
      A2: twentytwo,
      "A#2": twentythree,
      B2: twentyfour,
      C2: twentyfive,
      "C#2": twentysix,
      D2: twentyseven,
      "D#2": twentyeight,
      E2: twentynine,
      F2: thirty,
      "F#2": thirtyone,
      G2: thirtytwo,
      "G#2": thirtythree,
      A3: thirtyfour,
      "A#3": thirtyfive,
      B3: thirtysix,
      C3: thirtyseven,
      "C#3": thirtyeight,
      D3: thirtynine,
      "D#3": forty,
      E3: fortyone,
      F3: fortytwo,
      "F#3": fortythree,
      G3: fortyfour,
      "G#3": fortyfive,
      A4: fortysix,
      "A#4": fortyseven,
      B4: fortyeight,
      C4: fortynine,
      "C#4": fifty,
      D4: fiftyone,
      "D#4": fiftytwo,
      E4: fiftythree,
      F4: fiftyfour,
      "F#4": fiftyfive,
      G4: fiftysix,
      "G#4": fiftyseven,
      A5: fiftyeight,
      "A#5": fiftynine,
      B5: sixty,
      C5: sixtyone,
      "C#5": sixtytwo,
      D5: sixtythree,    
    },
  }).toDestination()

  return deSampler
}