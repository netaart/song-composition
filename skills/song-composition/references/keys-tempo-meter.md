# Key, tempo and meter

These three choices set the frame of the song. Choose them with the singer, the words and the style, before you write the melody.

## Key

Choose the key for the voice, not for an instrument shape. A key that is easy on a guitar can be too high for a singer.

| Key | Mood | Common use |
| --- | --- | --- |
| C, G, D, A | Bright, open | Pop, folk, rock |
| F, Bb, Eb | Warm, rounded | Ballads, horns, keyboards |
| Am, Em, Dm | Serious, inward | Minor verses and choruses |
| F#m, C#m, G#m | Tense, bright | A high-energy chorus |

The same melody can move between a major key and its relative minor. C major and A minor share the same notes, but the tonic changes the feel. Use the relative minor for a verse and the relative major for a chorus when you want a lift. The key signature stays the same, but the tonic changes: for example, if the verse is in A minor and the chorus in C, write `K:C` in both voices at the chorus start (B3, V4, W7), and name C in the style description.

If the melody sits outside the singable range, transpose the whole score with the editor's `transpose` or `setKey` command (see the editor skill); keep the melody's shape and intervals.

## Modulation

A modulation is a key change. It is a strong effect; one per song is usually enough.

- **Up a whole step for the final chorus.** The most common pop lift. Prepare it with the dominant of the new key in the bar before.
- **Relative major for the chorus.** A soft lift. The key signature stays the same, but the tonic changes; write the new key in both voices (B3, V4, W7), and name it in the style description.
- **Parallel major for the last chorus.** A minor verse turns major for the ending. Use it when the words turn from doubt to hope.

Write any key change with the dialect's change rules (B3, V4, W7), in both voices.

## Tempo

Tempo is part of the style, not a number to copy. The same song at 90 and 110 BPM is two different songs.

| Tempo | Feel | Typical use |
| --- | --- | --- |
| 50–70 BPM | Very slow | Ballad, hymn, lament |
| 70–90 BPM | Slow | Soul ballad, acoustic verse |
| 90–110 BPM | Mid | Pop verse, reggae, hip-hop |
| 110–130 BPM | Up | Pop chorus, dance, rock |
| 130–160 BPM | Fast | Punk, drum and bass, fast folk |

The tempo value counts quarter notes. In 4/4 that is the beat. In 3/4 it is also the beat. In 6/8 the felt beat is the dotted quarter, which is one and a half quarter notes. If you want a 6/8 song to feel like 120 dotted-quarter beats per minute, write a quarter-note tempo of 180.

Music can use any tempo, but a new `Q:` value in a song2 score must be 20–400 BPM (`RULES.md` H5).

Pick the tempo with the lyric density. A line of sixteen syllables in four bars at 60 BPM is a very long line. The same line at 120 BPM is comfortable.

## Meter

| Meter | Bar length | Feel | Use |
| --- | --- | --- | --- |
| 4/4 | 4 quarter notes | Even, walking | Most pop, rock, folk |
| 3/4 | 3 quarter notes | Circular, one strong beat | Waltz, ballad, hymn |
| 6/8 | 6 eighth notes, felt in 2 | Lilting, two strong beats | Ballad, shuffle, doo-wop |
| 2/4 | 2 quarter notes | March, polka | Folk, march, a short phrase |

4/4 is the default because it fits the most words and the most grooves. Use 3/4 when the words want a waltz or a turn. Use 6/8 when the song should roll rather than walk.

A meter change is a large event. Use it at a section boundary, and follow the dialect's rule for both voices (W7). Do not change meter inside a phrase.

## Phrase length against tempo

A phrase of four bars is not the same length in every tempo:

| Tempo | 4 bars of 4/4 | 8 bars of 4/4 | 16 bars of 4/4 |
| --- | --- | --- | --- |
| 60 BPM | 16 s | 32 s | 64 s |
| 90 BPM | 10.7 s | 21.3 s | 42.7 s |
| 120 BPM | 8 s | 16 s | 32 s |
| 140 BPM | 6.9 s | 13.7 s | 27.4 s |

If a verse feels long, either cut four bars or raise the tempo. If a chorus feels rushed, lower the tempo or give the hook longer notes.

## Set the frame in the score

The key, tempo and meter live in the score header. The dialect's `WRITING.md` gives the exact header form. Keep them constant unless the song needs a change.

- One key for the whole song is the normal case.
- A tempo change is rare. Use it only for a deliberate gear change, such as a slower bridge.
- A meter change belongs at a section boundary, not mid-phrase.
- Both voices share one bar grid; the dialect's voice-agreement rules apply (V2–V4).

## Worked examples

| Example | Key | Tempo | Meter | Bars |
| --- | --- | --- | --- | --- |
| [verse-eight-bars.abc](../assets/verse-eight-bars.abc) | G major | 92 BPM | 4/4 | 8 |
| [chorus-eight-bars.abc](../assets/chorus-eight-bars.abc) | C major | 120 BPM | 4/4 | 8 |
| [ballad-eight-bars-3-4.abc](../assets/ballad-eight-bars-3-4.abc) | A minor | 66 BPM | 3/4 | 8 |

The three examples are separate scores, not a verse–chorus pair. The verse is in G at 92 BPM, the chorus in C at 120 BPM, and the ballad in A minor at 66 BPM. To show a lift, write one song with a verse and a chorus.

## Check the frame

- Is the key inside the singer's range when the melody is written?
- Does the key match the mood of the words?
- Is the tempo right for the syllable density?
- Does the meter fit the groove, not just the bar count?
- Is there at most one modulation, and is it prepared?
- Do both voices agree on meter, bars and key changes?
- Is the tempo written as a quarter-note value, even in 6/8?

Next: [harmony](harmony.md) · [style description](style-description.md)
