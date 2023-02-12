import * as Tone from 'tone'

export const runSpeech = (sampler: Tone.Sampler | null, numbers: string[], language: string) => {
  if (sampler) {

    Tone.start()

    Tone.Transport.schedule(() => {
      console.log("Restarting BPM")
      Tone.Transport.bpm.value = 130
  
    }, "0")

    Tone.Transport.schedule(() => {
      console.log("Slowing BPM")
      Tone.Transport.bpm.value = 80
    }, "4:3")

    const notes = generateNotes(numbers)

    const lastEvent = notes[notes.length - 1]
    const lastEventTime = parseInt(lastEvent.time.split(":")[0])
    
    const mockingbirdNode = playMockingbirdSignal().start(0)
    const numbersNode = speakNumbers(sampler, notes, language)?.start(0)
    
    Tone.Transport.schedule(() => {
      console.log("Stopping")
      Tone.Transport.stop()
      mockingbirdNode.dispose()
      numbersNode?.dispose()
    }, `${lastEventTime + 1}:0`)

    
    Tone.Transport.start()
  }
}

const MockingbirdSynth = new Tone.MonoSynth({
  oscillator: {
    type: 'sine'
  },
  envelope: {
    attack: 0,
    decay: 0.1,
    sustain: 1,
    release: 0.01
  }
}).toDestination()

const mockingbirdNotes = [
  {"time": "0:0", "note": "Bb4", "duration": "4n"},
  {"time": "0:1", "note": "F5", "duration": "4n"},
  {"time": "0:2", "note": "A5", "duration": "4n"},
  {"time": "2:0", "note": "Bb4", "duration": "4n"},
  {"time": "2:1", "note": "F5", "duration": "4n"},
  {"time": "2:2", "note": "A5", "duration": "4n"},
]

export const speakNumbers = (sampler: Tone.Sampler | null, notes: any[], language: string) => {
  if (sampler) {
    return new Tone.Part((time, value) => {
      sampler.triggerAttackRelease(value.note, value.duration, time)
    }, notes)
  }
}

export const playMockingbirdSignal = () => {
  return new Tone.Part((time, value) => {
    MockingbirdSynth.triggerAttackRelease(value.note, value.duration, time)
  }, mockingbirdNotes)
}

const generateNotes = (numbers: string[]) => {
  console.log(numbers)
  const noteMap = [
    {"time": "4:0", "note": "A0", duration: "4n"},
    {"time": "4:2", "note": "A0", duration: "4n"}
  ]

  let measure = 5
  let beat = 0

  numbers.forEach((number, i) => {
    const mod = i % 2 === 0 ? 0 : 2
    const div = Math.floor(i / 2)
    noteMap.push({"time": `${5 + div}:${mod}`, "note": noteToSignalMap[number], 
      duration: "2n"})
  })

  console.log(noteMap)

  return noteMap
}


// There's definitely a better way to do this.
export const noteToSignalMap: {[key: string]: string} = {
  "attn": "A0",
  "colon": "A#0",
  "0": "B0",
  "1": "C0",
  "2": "C#0",
  "3": "D0",
  "4": "D#0",
  "5": "E0",
  "6": "F0",
  "7": "F#0",
  "8": "G0",
  "9": "G#0",
  "10": "A1",
  "11": "A#1",
  "12": "B1",
  "13": "C1",
  "14": "C#1",
  "15": "D1",
  "16": "D#1",
  "17": "E1",
  "18": "F1",
  "19": "F#1",
  "20": "G1",
  "21": "G#1",
  "22": "A2",
  "23": "A#2",
  "24": "B2",
  "25": "C2",
  "26": "C#2",
  "27": "D2",
  "28": "D#2",
  "29": "E2",
  "30": "F2",
  "31": "F#2",
  "32": "G2",
  "33": "G#2",
  "34": "A3",
  "35": "A#3",
  "36": "B3",
  "37": "C3",
  "38": "C#3",
  "39": "D3",
  "40": "D#3",
  "41": "E3",
  "42": "F3",
  "43": "F#3",
  "44": "G3",
  "45": "G#3",
  "46": "A4",
  "47": "A#4",
  "48": "B4",
  "49": "C4",
  "50": "C#4",
  "51": "D4",
  "52": "D#4",
  "53": "E4",
  "54": "F4",
  "55": "F#4",
  "56": "G4",
  "57": "G#4",
  "58": "A5",
  "59": "A#5",
  "60": "B5",
  "61": "C5",
  "62": "C#5",
  "63": "D5",
}