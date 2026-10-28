# Melody and lyrics

A melody is a line one voice can sing. The words decide its rhythm. Write the melody and the words together, phrase by phrase. Do not write a tune first and force a paragraph onto it.

## Range

MIDI 60–82, C4 to A#5, is the editor's written-range check for the lead vocal (`SINGABLE_RANGE`). The format does not say how the model places a male or a female voice against the written pitches. Name the voice in the style description, and keep the melody inside the written range. The top is for a moment, not a whole section.

The dialect's check verifies the text, not the vocal range. Check the range yourself, note by note, not just the average. Write the pitches with the dialect's octave spelling (`RULES.md` P1); spelling a note an octave too high is easy to miss.

- **Verse.** Keep the verse lower than the chorus. A verse can be wider when the words need it; the verse example is an exception: it spans E4–E5, wider than the chorus's C5–A5.
- **Chorus.** The chorus can sit a third or a fourth higher than the verse. A top note around G5 or A5 is a climax.
- **Bridge.** A new register helps. Do not make the bridge the highest point unless the final chorus is bigger.
- **Tessitura.** A note you can reach once is not a note you can hold for sixteen bars. Keep the average in the comfortable part of the range.

## Transpose the whole score

If the melody sits outside the range, transpose the score with the editor's `transpose` command (semitones) or `setKey`. Both move every note, chord and key line together. Read the editor skill at `node_modules/@neta-art/score-editor/skills/score-editor/SKILL.md` and its README command list. Keep the melody's shape and intervals; do not rewrite it from memory.

## Contour

A melody needs a shape, not a sequence of correct notes.

- **Arch.** Start low, rise to a climax near the middle or the last third, then fall. This is the most common shape.
- **One climax.** Choose the highest note and the section that owns it. If every phrase has a high note, none of them is a climax.
- **Steps before leaps.** Move by step for most of the line. A leap of a third or a fourth is an event. After a leap of a sixth or more, step back in the opposite direction.
- **Sequence.** Repeat a two-bar idea a step higher or lower. Keep the rhythm and change the pitch.
- **Repeat for urgency.** Two or three notes on the same pitch can push a line forward. Four or more usually sounds stuck.
- **End with a fall.** A phrase that ends on a lower note sounds closed. A phrase that ends higher sounds open.

The verse example starts on D5, falls to G4, rises to E5 at the start of the second phrase, and closes on G4. The highest note is E5, at the start of the second phrase, and the line settles on the tonic.

## Rhythm against syllables

One note per syllable is the default. The stressed syllable of a word belongs on a strong beat.

| Meter | Strong beats | Weak beats |
| --- | --- | --- |
| 4/4 | 1 and 3 | 2 and 4 |
| 3/4 | 1 | 2 and 3 |
| 6/8 | 1 (the first dotted-quarter beat) | 2 (the second dotted-quarter beat) |

- Put the stressed syllable on the strong beat. "**Walk**-ing" puts walk on the beat, not ing.
- Leave time for a breath at the end of a phrase. A rest is the clearest way; a held note that releases on the barline can also work.
- Vary the note lengths. A line of equal quarter notes sounds like a test, not a song.
- Hold an open vowel at the end of a phrase. "Home" can last; "and" usually cannot.
- Do not put a long note on an unstressed final syllable such as "-ing" unless the effect is deliberate. The verse example does this in bars 2 and 6; it is a deliberate lift.
- A syncopation can put a syllable just before the beat, but the stressed syllable should still land on the beat.
- A melisma is one syllable over two or three notes, usually on a long vowel. It is not extra words. Use it once or twice, not on every line.

Tempo changes the room you have:

| Tempo | One 4/4 bar | Eight syllables in 4 bars |
| --- | --- | --- |
| 60 BPM | 4.0 s | 16 s |
| 90 BPM | 2.7 s | 10.7 s |
| 120 BPM | 2.0 s | 8 s |
| 140 BPM | 1.7 s | 6.9 s |

At a fast tempo, fewer syllables fit in a bar. At a slow tempo, a line of eight syllables can feel empty unless you hold vowels or add a melisma.

## Write lyric lines

Write the words in lines that match the phrases. One line per two, four or eight bars. A line is a breath, not a sentence.

- Count the syllables in each line. Write the count beside the line.
- Keep the line lengths stable within a section. A verse of 8, 8, 8, 8 is easier to sing than 8, 11, 6, 9.
- End a line on a vowel or a soft consonant when you can. A line that ends on a hard consonant cluster is hard to hold.
- Rhyme at the ends of phrases. Internal rhyme is a bonus, not a requirement.
- Chorus lines repeat more than verse lines, and the words should be easy to catch on one listen. Length follows the tempo; see the density note below.
- Avoid tongue-twisters at fast tempos. Consonant clusters cost time.

Counting syllables is not always obvious:

| Word or phrase | Syllables | Note |
| --- | --- | --- |
| quiet | 2 | qui-et |
| every | 2 or 3 | ev-ery or ev-e-ry, depending on the setting |
| fire | 1 or 2 | depends on the style and the note |
| walking | 2 | walk-ing |
| I will | 2 | two words, two syllables |
| don't | 1 | the contraction is one syllable |

Sing the line in the rhythm you plan. If a word needs a note you did not give it, the count is wrong.

## Pickups, density and a second singer

A pickup starts before the first full bar. song2 has no partial bar, so write a leading rest in bar 1 (for example `z2` for a one-beat pickup under `L:1/8`) and start the words after it (`RULES.md` D5, W6).

An upbeat 4-bar phrase often carries 8–12 syllables. A slow ballad can carry 6–8. At 10 syllables in four bars you have room to vary lengths; eight syllables in two bars is dense and tends to force equal quarters. If the words force equal quarters, give the line more bars or change the rhythm.

song2 has one sung line, `Vocal`; `Ins` is instrumental. A second singer cannot be written as a second sung part. Describe a duet in the style description, and listen for whether the model follows it; that is not a promise. Put a countermelody in `Ins`. Lyric labels name sections, not singers.

## Fit a line to a phrase

1. Count the syllables in the line.
2. Count the note onsets in the phrase. A tie continuation is not a new onset. A rest is not an onset.
3. If the counts are equal, give one syllable to each onset.
4. If the line has fewer syllables, add a rest, hold a vowel, or add one melisma. Do not invent words.
5. If the line has more syllables, split a word where it is natural, or rewrite the line. Do not cram two syllables onto one note.
6. Check the stress. The stressed syllable should fall on the strong beat.
7. Check the end. The last syllable should be on a note you want to hear, not a passing note.

The phrase is the unit. A whole-song count can match while one line is short and another is long. Check each line against its own phrase.

## Worked example

[assets/verse-eight-bars.abc](../assets/verse-eight-bars.abc) has two four-bar phrases and two lines of eight syllables:

| Line | Bars | Syllables | Onsets | Setting |
| --- | --- | --- | --- | --- |
| "I have been walking all night long" | 1–4 | 8 | 8 | I D5(1); have B4(1); been G4(2); walk- G4(2); ing B4(2); all E4(2); night G4(2); long A4(4) |
| "The road is carrying me home" | 5–8 | 8 | 8 | the E5(1); road D5(1); is C5(2); car- B4(1); ry- A4(1); ing G4(2); me A4(4); home G4(4) |

The first line ends on A over a D chord, the dominant, so it sounds open. The second line ends on G, the tonic, so it sounds closed. The verse spans E4–E5, an octave. The "-ing" notes in bars 2 and 6 and the held "me" in bar 7 are deliberate.

[assets/chorus-eight-bars.abc](../assets/chorus-eight-bars.abc) has two lines of eight syllables:

| Line | Bars | Syllables | Onsets | Setting |
| --- | --- | --- | --- | --- |
| "We are the light that never fades" | 1–4 | 8 | 8 | We E5(3); are G5(1); the G5(1); light D5(3); that C5(2); ne- E5(2); ver F5(1); fades A5(3) |
| "We are the light that leads you home" | 5–8 | 8 | 8 | We E5(3); are G5(1); the D5(1); light G5(3); that C5(2); leads F5(2); you G5(2); home C5(2) |

The chorus spans C5–A5. The A5 is on "fades" at the end of the first phrase; the second phrase tops out on G5, so the example has one climax. The chorus opens the second phrase with the same bar as the first, then changes the ending. That is enough repetition to be a hook without being a copy.

[assets/ballad-eight-bars-3-4.abc](../assets/ballad-eight-bars-3-4.abc) has two lines of eight syllables in 3/4:

| Line | Bars | Syllables | Onsets | Setting |
| --- | --- | --- | --- | --- |
| "Stay with me until the morning" | 1–4 | 8 | 8 | Stay A4(1.5); with C4(1.5); me F4(1.5); un- A4(1.5); til E4(1.5); the G4(1.5); morn- D4(1); ing B4(2) |
| "I will be waiting here tonight" | 5–8 | 8 | 8 | light C4(1.5); I A4(1.5); will A4(1.5); wait- F4(1.5); for B4(2); you D5(1); to E4(1); night A4(2) |

The ballad spans C4–D5, a ninth. The first phrase ends on B4 over G (open); the second ends on A4 over Am (the root, closed). The "ing" of "morning" is held for two beats as a deliberate hold.

## Lyrics are not score text

The lyrics are not part of the score text. `WRITING.md` §10 says the words belong to the song project, not the score. In this workflow, keep them in the request's `lyrics` block and, when editing, in the editor's song project (`lyrics` and `lyricLines`). Use the score only for the melody.

A lyric change that changes a line's syllable count needs a matching melody change for that phrase. Otherwise change one thing, unless the brief asks for both.

## Check the melody and the words

- Is the lead inside 60–82?
- Is there one clear climax?
- Does the contour rise and fall, rather than wander?
- Does each line match the onsets of its own phrase?
- Are the stressed syllables on strong beats?
- Is there a breath at the end of each phrase?
- Does the chorus repeat enough to be remembered?
- Does the last line of the section close, or leave the question open on purpose?

Next: [harmony](harmony.md) · [style description](style-description.md)
