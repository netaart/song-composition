# Harmony

Chords support the melody and mark the form. Choose the progression and the chord rhythm before you write a second voice.

Use only the chord names the dialect accepts. The grammar is in the dialect's `RULES.md` (C1–C4); this page does not repeat the vocabulary. A name outside it is a reading error, not a style choice.

## Harmonic rhythm

Harmonic rhythm is how often the chord changes. It is as important as the progression.

| Chord rhythm | Where it works | Effect |
| --- | --- | --- |
| One chord per two bars | Slow ballad verse, intro, outro | Spacious, lets the melody breathe |
| One chord per bar | Most verses and choruses | Clear and stable |
| Two chords per bar | Pre-chorus, chorus build, jazz | Busy, pushes forward |
| One chord per beat | A short build or a tag | Rare; it can sound frantic |

Keep one chord rhythm inside a phrase. Change it at a phrase boundary, not in the middle. A chorus can move twice as fast as its verse; that is a lift.

Do not change a chord under every note. The melody needs room to move against a stable harmony.

## Progressions

Numbers are scale degrees. In C major, `I` is C, `ii` is Dm, `V` is G, `vi` is Am.

Major keys:

| Progression | Sound | Use |
| --- | --- | --- |
| I–V–vi–IV | Open, anthemic | Pop chorus, folk verse |
| vi–IV–I–V | The same loop, starting on the relative minor | A chorus that feels bittersweet |
| I–IV–V–I | Direct, old-fashioned | Rock, country, a clear close |
| I–vi–IV–V | Warm, circular | Doo-wop, ballad |
| ii–V–I | A cadence, not a loop | Jazz, a last two bars |
| I–V–IV–I | A plagal close | A chorus that lands softly |
| IV–I–V–I | A rise from the fourth | A final chorus |

Minor keys:

| Progression | Sound | Use |
| --- | --- | --- |
| i–VI–III–VII | Natural minor, open | A minor pop chorus |
| i–iv–V–i | Harmonic minor, strong | A dramatic close |
| i–VII–VI–VII | A loop with no tonic | A verse that keeps moving |
| i–iv–i | Sparse, modal | A ballad or a drone |

A progression is not a song. The same four chords can carry a hundred melodies. The melody, the rhythm and the words do the work.

## Cadences

A cadence is how a phrase ends.

- **Authentic:** V–I. Strong close. Use it at the end of a chorus or the song.
- **Half:** ends on V. Open. Use it at the end of a verse or the first phrase of a pair.
- **Plagal:** IV–I. Soft close. Use it for a tag or an outro.
- **Deceptive:** V–vi. A surprise. Use it once, where the words turn.

Plan the cadence with the lyric line. A question at the end of a line wants a half cadence. A statement wants an authentic or plagal close.

## Fit the chord to the melody

The melody and the chord must agree on the strong beat.

- Put a chord tone (root, third or fifth) under the melody when the chord changes.
- A seventh or a ninth can be a color tone, but it should resolve by step.
- A fourth over a major triad is a suspension. Resolve it down to the third.
- A major seventh in the melody over a major chord on a strong beat is a strong color. Use it on purpose, not by accident.
- A tritone between the melody and the chord root on a strong beat sounds unstable. Move the melody to a chord tone or change the chord.
- When the melody holds one note across a chord change, choose the second chord so the held note is still a chord tone, or make the clash resolve.

The third decides major or minor. If the melody has E over a C chord, the chord is C major. If the melody has E-flat, the chord is C minor. Check the third before you write the name.

## Chords and style

| Style | Chord rhythm | Typical harmony |
| --- | --- | --- |
| Acoustic pop | One per bar | I–V–vi–IV, I–IV–V–I |
| Piano ballad | One per bar or two bars | I–vi–IV–V, i–VI–III–VII |
| Rock | One per bar, sometimes two | I–IV–V, i–VI–III–VII |
| Jazz | Two per bar | ii–V–I, sevenths, altered dominants |
| Modal folk | One per two bars | i–VII, i–iv |

The style description and the score should name the same harmony. If the style says "jazz", the score should use sevenths and a ii–V–I, not four triads in a row.

## The second voice

The dialect's `RULES.md` says where a chord may stand (C7). Write the second voice as a line that outlines the harmony instead: an arpeggio, a bass line, a riff, or a countermelody.

- Keep the second voice below the verse vocal, or in the gaps between vocal phrases.
- Use chord tones on the strong beats.
- Do not double the vocal melody exactly for a whole section. Use thirds or sixths below it, or answer it.
- Keep the same bar grid as the vocal; the dialect's voice-agreement rules apply (V2–V4).
- A repeated arpeggio is enough. The chorus example uses four chord tones per bar.

## Spell the chords for the key

- In a sharp key, spell the roots with sharps. In a flat key, spell them with flats.
- Do not mix `F#` and `Gb` in one progression unless the harmony really changes.
- Use a slash chord when the bass note is not the root: `C/E`, `G/B`, `F/A`.
- Use a double accidental only when the spelling requires it.

The dialect's `RULES.md` has the key table and the spelling rule (H9, W13). Check the chord name against it before you write.

## Worked examples

[assets/chorus-eight-bars.abc](../assets/chorus-eight-bars.abc), bars 1–8:

| Bars | Chords | Strong-beat melody | Chord tone |
| --- | --- | --- | --- |
| 1 | C | E | Third |
| 2 | G | G | Root |
| 3 | Am | C | Third |
| 4 | F | F | Root |
| 5 | C | E | Third |
| 6 | G | D | Fifth |
| 7 | F | C | Fifth |
| 8 | C | G | Fifth |

Every chord changes once per bar, and every strong-beat melody note is a chord tone. The progression is I–V–vi–IV for the first phrase and I–V–IV–I for the second. The second phrase ends on the tonic, so the chorus closes.

The `Ins` voice plays four quarter notes per bar:

```
C E G E | G B D B | A C E C | F A C A
```

Those are chord tones in a steady arpeggio. They outline the harmony without competing with the vocal.

[assets/verse-eight-bars.abc](../assets/verse-eight-bars.abc), bars 1–8:

| Bars | Chords | Strong-beat melody | Chord tone |
| --- | --- | --- | --- |
| 1 | G | D | Fifth |
| 2 | Em | G | Third |
| 3 | C | E | Third |
| 4 | D | A | Fifth |
| 5 | C | E | Third |
| 6 | G | B | Third |
| 7 | D | A | Fifth |
| 8 | G | G | Root |

The first phrase ends on D, the dominant. The second ends on G, the tonic. That is a half cadence followed by an authentic cadence: the pair sounds like a question and an answer.

[assets/ballad-eight-bars-3-4.abc](../assets/ballad-eight-bars-3-4.abc) uses i–VI–III–VII in A minor:

| Bars | Chords | Strong-beat melody | Chord tone |
| --- | --- | --- | --- |
| 1 | Am | A | Root |
| 2 | F | F | Root |
| 3 | C | E | Third |
| 4 | G | D | Fifth |
| 5 | Am | C | Third |
| 6 | F | A | Third |
| 7 | G | B | Third |
| 8 | Am | E | Fifth |

The last bar returns to the tonic, but the melody ends on the fifth, not the root. That keeps the verse open for the next section.

## Check the harmony

- Does every chord belong to the key, or is it a borrowed chord with a reason?
- Is the chord rhythm the same inside each phrase?
- Is every strong-beat melody note a chord tone, or a color tone that resolves?
- Does the phrase end on the cadence you planned?
- Does the second voice outline the harmony without clashing with the vocal?
- Is every chord name from the dialect's vocabulary?
- Are the chords where the dialect allows them?
- Is the chord spelling right for the key?

Next: [key, tempo and meter](keys-tempo-meter.md) · [revising](revising.md)
