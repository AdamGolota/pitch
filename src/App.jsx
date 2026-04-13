import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import './App.css';
import G from './g.svg';
import Sharp from './sharp.svg';
import Flat from './flat.svg';
import Note from './note.svg';
import packageJson from "../package.json";

// ReactGA

ReactGA.initialize('UA-138302548-2');
ReactGA.pageview('/homepage');


// --------------------------------PITCH TRAINER-------------------------------


const centFrequencyRatio = Math.pow(2, 1 / 1200);
const centsDeviationRange = 100;
const centsSearchRange = 110;
const defaultGainValue = 0.3;
const gainFadeTime = 0.05;

document.body.style.backgroundColor = '#f7e9a3';

const noteFrequencies = [
    ['A3', 220.0000],
    ['B3b', 233.0819],
    ['A3#', 233.08191],
    ['B3', 246.9417],
    ['C4', 261.6256],
    ['D4b', 277.1826],
    ['C4#', 277.18261],
    ['D4', 293.6648],
    ['E4b', 311.1270],
    ['D4#', 311.12701],
    ['E4', 329.6276],
    ['F4', 349.2282],
    ['G4b', 369.9944],
    ['F4#', 369.99441],
    ['G4', 391.9954],
    ['A4b', 415.3047],
    ['G4#', 415.30471],
    ['A4', 440.0000],
    ['B4b', 466.1638],
    ['A4#', 466.16381],
    ['B4', 493.8833],
    ['C5', 523.2511],
    ['D5b', 554.3653],
    ['C5#', 554.36531],
    ['D5', 587.3295],
    ['E5b', 622.2540],
    ['D5#', 622.25401],
    ['E5', 659.2551],
    ['F5', 698.4565],
    ['G5b', 739.9888],
    ['F5#', 739.98881],
    ['G5', 783.9909],
    ['A5b', 830.6094],
    ['G5#', 830.60941],
    ['A5', 880.0000],
    ['B5b', 932.3275],
    ['A5#', 932.32751],
    ['B5', 987.7666],
    ['C6', 1046.5023],
];

const noteNames = [
    'A3',
    'B3',
    'C4',
    'D4',
    'E4',
    'F4',
    'G4',
    'A4',
    'B4',
    'C5',
    'D5',
    'E5',
    'F5',
    'G5',
    'A5',
    'B5',
    'C6',
];

let audioCtx = null;
let oscillator;
let gainNode;
let startingFrequency;
let mouseInitialTop;
let startingDeviationCents;

const gainOn = () => {
    gainNode.gain.value = 0;
    gainNode.gain.linearRampToValueAtTime(defaultGainValue, audioCtx.currentTime + gainFadeTime);
};

const gainOff = async () => {
    gainNode.gain.value = defaultGainValue;
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + gainFadeTime);
};

const initializeAudio = async () => {
    if (!audioCtx) {
        audioCtx = new AudioContext();
        await audioCtx.resume();

        // set up oscillator
        oscillator = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();
        gainNode.gain.value = 0;
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
    }
}

function NoteButton({onClick, note, frequency, disabled}) {
    const handleUp = () => {
        gainOff();
        document.removeEventListener('mouseup', handleUp);
        document.removeEventListener('touchend', handleUp);
    };

    const playNote = async (e) => {
        if (e.cancelable) e.preventDefault();
        if (!audioCtx) {
            await initializeAudio();
        }

        oscillator.frequency.value = frequency;
        gainOn();
        document.addEventListener("mouseup", handleUp);
        document.addEventListener("touchend", handleUp);
    }

    return (
        <>
            <StyledPlayButton
                onMouseUp={handleUp}
                onMouseDown={playNote}
                onTouchEnd={handleUp}
                onTouchStart={playNote}
                disabled={disabled}
            >
                Play
            </StyledPlayButton>
        </>
    )
}

function NoteSymbol({note: noteToDraw, disabled}) {
    const noteToDrawName = noteToDraw.slice(0, 2);
    const noteToDrawIndex = noteNames.length - noteNames.indexOf(noteToDrawName) - 1;

    const lineArray = noteNames.reduce((lines, noteName, index) => {
        let Line = StyledEmptyLine;

        if ((index < 4 && noteToDrawIndex <= index)
            || (index > 12 && noteToDrawIndex >= index)
        ) {
            Line = StyledAdditionalLine;
        } else if (index >= 4 && index <= 12) {
            Line = StyledMainLine;
        }

        const sign = noteToDraw[2] || '';
        let signComponent = <></>

        if (sign === '#') {
            signComponent = <StyledSharp/>;
        } else if (sign === 'b') {
            signComponent = <StyledFlat/>;
        }

        const NoteComponent = ({isOnLine}) => (
            <>
                <StyledNote {...{isOnLine}} >
                    {
                        signComponent
                    }
                </StyledNote>
            </>
        );

        let Note = <></>

        if (noteToDrawIndex === index) {
            Note = (<NoteComponent isOnLine/>);
        } else if (noteToDrawIndex === index - 1) {
            Note = <NoteComponent/>
        }

        if (index % 2 === 0) {
            return [
                ...lines,
                (
                    <Line key={`${noteToDraw}-${index}`}>
                        {
                            Note
                        }
                    </Line>
                )
            ];
        }

        return lines;
    }, []);

    return lineArray;
}

const initialise = () => {
    mouseInitialTop = null;
    startingDeviationCents = null;
}

initialise();

const changeNote = frequency => {
    console.log(`playing on ${frequency}`);
    oscillator.frequency.value = frequency;
}

const startPlaying = frequency => {
    oscillator.frequency.value = frequency; // value in hertz
    gainOn();
}

const mouseIsPressed = () => !!mouseInitialTop;

const diviateFrequency = (frequency, cents) => frequency * Math.pow(centFrequencyRatio, cents);


function PitchTrainer() {
    const [resultingDeviationCents, setResultingDeviationCents] = useState(null);
    const [chosenFrequency, setChosenFrequency] = useState(220.0000);
    const [soundIsPlaying, setSoundIsPlaying] = useState(null);
    const [history, setHistory] = useState(() => {
        const savedHistory = localStorage.getItem('pitchHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });

    useEffect(() => {
        localStorage.setItem('pitchHistory', JSON.stringify(history));
    }, [history]);

    const containerRef = useRef();

    const pixelsToCents = (pixels, centsRange) => (
        pixels / (containerRef.current.clientHeight / (centsRange * 2))
    );

    const handleMouseMove = ({clientY}) => {
        if (mouseIsPressed()) {
            changeNote(diviateFrequency(
                startingFrequency,
                pixelsToCents(mouseInitialTop - clientY, centsSearchRange)
            ));
        }
    }

    const handleTouchMove = (e) => {
        if (e.cancelable) e.preventDefault();
        const clientY = (e.changedTouches && e.changedTouches.item(0).clientY) || (e.touches && e.touches.item(0).clientY);
        if (mouseIsPressed()) {
            changeNote(diviateFrequency(
                startingFrequency,
                pixelsToCents(mouseInitialTop - clientY, centsSearchRange)
            ));
        }
    }

    const handeStartClick = async (e) => {
        if (soundIsPlaying) return;
        if (e && e.cancelable) e.preventDefault();
        if (e && e.stopPropagation) e.stopPropagation();
        
        const clientY = (e && e.clientY) || (e && e.changedTouches && e.changedTouches.item(0).clientY) || (e && e.touches && e.touches.item(0).clientY);

        initialise();

        if (!audioCtx) {
            await initializeAudio();
        }

        setResultingDeviationCents(null);
        setSoundIsPlaying(true);

        mouseInitialTop = clientY;
        startingDeviationCents = Math.ceil(Math.random() * (centsDeviationRange * 2)) - centsDeviationRange;
        startingFrequency = diviateFrequency(chosenFrequency, startingDeviationCents);

        startPlaying(startingFrequency);
    }

    const handeStartTouch = async (e) => {
        await handeStartClick(e);
    }

    const handleFinishClick = (e) => {
        if (!soundIsPlaying) {
            return;
        }

        if (e && e.cancelable) e.preventDefault();
        if (e && e.stopPropagation) e.stopPropagation();
        
        const clientY = (e && e.clientY) || (e && e.changedTouches && e.changedTouches.item(0).clientY);

        const result = startingDeviationCents + pixelsToCents(mouseInitialTop - clientY, centsSearchRange);
        setResultingDeviationCents(result);

        const currentNote = noteFrequencies.find(([, freq]) => freq === chosenFrequency);
        const noteName = currentNote ? currentNote[0] : 'Unknown';

        setHistory(prevHistory => [{
            timestamp: new Date().toISOString(),
            note: noteName,
            deviation: result
        }, ...prevHistory]);

        ReactGA.event({
            category: 'Training',
            action: 'Finish Click',
            value: result,
        });

        mouseInitialTop = null;
        gainOff();
        setSoundIsPlaying(false);
    }

    const handleFinishTouch = (e) => {
        handleFinishClick(e);
    }

    const changeFrequency = frequency => {
        setResultingDeviationCents(null);
        setChosenFrequency(frequency);
    }

    const formatNumber = number => {
        number = Math.round(number);
        let sign = '';

        if (number > 0) {
            sign = '+';
        }

        let cents = 'cents';

        if (Math.abs(number) === 1) {
            cents = 'cent';
        }

        return `${sign}${number} ${cents}`;
    };

    const exportToCSV = () => {
        const header = "Timestamp,Note,Deviation (cents)\n";
        const csvContent = history.map(entry => {
            return `${entry.timestamp},${entry.note},${entry.deviation.toFixed(2)}`;
        }).join("\n");
        const blob = new Blob([header + csvContent], {type: 'text/csv;charset=utf-8;'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "pitch_trainer_history.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const clearHistory = () => {
        if (window.confirm("Are you sure you want to clear the history?")) {
            setHistory([]);
        }
    };

    return (
        <div className="App">
            <StyledContainer ref={containerRef}>
                <StyledNoteSelector>
                    {
                        noteFrequencies.map(([note, frequency]) => (
                            <StyledNoteContainer key={note}>
                                <NoteButton disabled={soundIsPlaying} note={note} frequency={frequency}/>
                                <StyledStaff
                                    disabled={soundIsPlaying}
                                    chosen={frequency === chosenFrequency}
                                    onClick={() => changeFrequency(frequency)}
                                >
                                    <NoteSymbol {...{note}} />
                                </StyledStaff>
                            </StyledNoteContainer>
                        ))
                    }
                </StyledNoteSelector>
                <StyledField
                    onClick={handleFinishClick}
                    onTouchEnd={handleFinishTouch}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onTouchStart={handeStartTouch}
                >
                    <StyledHint visible={soundIsPlaying}>
                        <p>/\</p>
                        <p>||</p>
                        <p>Find your note</p>
                        <p>||</p>
                        <p>\/</p>
                    </StyledHint>
                    <StyledStartButton
                        visible={!soundIsPlaying}
                        onClick={handeStartClick}
                        onTouchStart={handeStartTouch}
                    >
                        <span className="desktop-text">Click here to start!</span>
                        <span className="mobile-text">Drag to find the note!</span>
                    </StyledStartButton>
                    {
                        resultingDeviationCents !== null && (
                            <StyledResults>
                                {`Deviation: ${formatNumber(resultingDeviationCents)}`}
                            </StyledResults>
                        )
                    }
                </StyledField>
                {history.length > 0 && (
                    <StyledHistoryContainer>
                        <StyledHistoryHeader>
                            <h3>History</h3>
                            <div>
                                <ExportButton onClick={exportToCSV}>Export CSV</ExportButton>
                                <ClearButton onClick={clearHistory}>Clear</ClearButton>
                            </div>
                        </StyledHistoryHeader>
                        <StyledHistoryList>
                            {history.map((entry, index) => (
                                <StyledHistoryItem key={index}>
                                    <span>{new Date(entry.timestamp).toLocaleString()}</span>
                                    <span>{entry.note}</span>
                                    <span style={{ color: Math.abs(entry.deviation) < 10 ? 'green' : 'inherit' }}>
                                        {formatNumber(entry.deviation)}
                                    </span>
                                </StyledHistoryItem>
                            ))}
                        </StyledHistoryList>
                    </StyledHistoryContainer>
                )}
            </StyledContainer>
        </div>
    );
}


// --------------------------------INFO--------------------------------


function Info() {
    ReactGA.modalview('info');

    const [started, setStarted] = useState(false);

    const getStarted = () => {
        setStarted(true);
    }

    if (started) {
        return <PitchTrainer/>;
    }

    const CallToAction = () => {
        return (
            <StyledButton onClick={getStarted}>Start the app!</StyledButton>
        );
    };

    return (
        <>
            <div className="App">
                <header>
                    <StyledHighlight>
                        <CallToAction/>
                    </StyledHighlight>
                </header>
                <main>
                    <h2>See how this app works</h2>
                    <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/vA1o9gU0Oh8"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    <h2>How to use this app</h2>
                    {
                        //Paste a gif here!
                    }
                    <p><strong>Pick</strong> a note</p>
                    <p><strong>Imagine</strong> it</p>
                    <p><strong>Hear</strong> a sound</p>
                    <p><strong>Find</strong> your note</p>
                    <p style={{color: 'lightgray'}}>v{packageJson.version}</p>
                </main>
            </div>
        </>
    );
}

// ------------------------------- APP --------------------------------


function App() {
    return (
        <div className="App">
            <Info/>
        </div>
    )
}

const StyledHistoryContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    max-height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`;

const StyledHistoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    h3 {
        margin: 0;
    }
`;

const StyledHistoryList = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledHistoryItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    &:last-child {
        border-bottom: none;
    }
`;

const ExportButton = styled.button`
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    margin-right: 5px;
    transition: background-color 0.2s;
    &:hover {
        background-color: #e0e0e0;
    }
`;

const ClearButton = styled.button`
    background-color: #f0f0f0;
    color: #d32f2f;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.2s;
    &:hover {
        background-color: #ffebee;
    }
`;

const noteLeft = 80;
const noteWidth = 20;
const lineInterval = 8;
const noteContainerHeight = ((lineInterval + 3) * 9) + 32;

const StyledField = styled.div`
    background-color: gray;
    position: relative;
    display: flex;
    width: 50%;
    user-select: none;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    cursor: default;
    touch-action: none;
`;

const StyledContainer = styled.div`
    height: 80dvh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px 30% 0;
    
    @media (max-width: 768px) {
        margin: 10px 5% 0;
    }
`;

const StyledNoteSelector = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    overflow-y: scroll;
`;

const StyledNoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    height: ${noteContainerHeight}px;
`

const StyledNoteItem = styled.button`
    height: 100%;
`;

const StyledStaff = styled(StyledNoteItem)`
  background-image: url(${G});
  background-size: auto ${noteContainerHeight - 32}px;
  background-position: -24px 71%;
  background-repeat: no-repeat;
  background-color: ${({ chosen, disabled }) => chosen ? 'lightgrey' : 'white'};
  width: 70%;
  padding-right: 16%;
  user-select: none;
`;

const StyledPlayButton = styled(StyledNoteItem)`
    width: 30%;
    touch-action: none;
    user-select: none;
`;

const StyledButton = styled.button`
  font-size: 18px;
  border-radius: 20px;
  height: 32px;
  min-width: 256px;
`;

const StyledHighlight = styled.div`
  margin: 48px 0;
`;

const StyledLineSpace = styled.div`
    height: ${lineInterval + 2}px;
`;

const StyledEmptyLine = styled(StyledLineSpace)`
    padding-left: ${noteLeft}px;
`;

const StyledLine = styled(StyledLineSpace)`
    border-bottom: solid 1px;
`;

const StyledMainLine = styled(StyledLine)`
    width: calc(100% - 42px);
    padding-left: ${noteLeft}px;
`;

const StyledAdditionalLine = styled(StyledLine)`
    width: ${noteWidth + 4}px;
    margin-left: ${noteLeft - 2}px;
    padding-left: 2px;
`;

const StyledNote = styled.div`
    width: ${noteWidth}px;
    height: 15px;
    position: relative;
    left: 1px;
    background-repeat: no-repeat;
    background-image: url(${Note});
    background-size: ${noteWidth}px;
    bottom: ${({isOnLine}) => `${isOnLine ? -1 : lineInterval / 2 + 1}px`};
`;

const StyledSign = styled.div`
    position: absolute;
    background-repeat: no-repeat;
    right: ${noteWidth + 2}px;
`;

const StyledFlat = styled(StyledSign)`
    background-image: url(${Flat});
    width: 10px;
    height: 26px;
    background-size: 12px;
    bottom: -2px;
`;

const StyledSharp = styled(StyledSign)`
    background-image: url(${Sharp});
    width: 10px;
    height: 38px;
    background-size: 9px;
    bottom: -18px;

`;

const StyledStartButton = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: auto;
    background-color: ghostwhite;
    display: ${({visible}) => visible ? 'block' : 'none'};
    user-select: none;
    
    .mobile-text {
        display: none;
    }
    
    @media (max-width: 768px) {
        .desktop-text {
            display: none;
        }
        .mobile-text {
            display: inline;
        }
    }
`;

const StyledHint = styled.div`
    margin: auto;
    height: 210px;
    display: ${({visible}) => visible ? 'block' : 'none'};
`;

const StyledResults = styled.div`
    margin-top: 110%;
    margin-left: 25px;
    height: 30px;
    position: absolute;
`;

export default App;
