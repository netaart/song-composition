# Style description

The style description is the production brief for the song2 model. It says what the song should sound like. The lyrics say what it sings. Keep them separate.

## What the request carries

The request contract is the model declaration in `@neta-art/generation`, at `node_modules/@neta-art/generation/models/song2.yaml`. This page was checked against 0.2.2; when the installed version says otherwise, the declaration wins.

The request has two required text blocks and one optional text block:

- `prompt` role: the style description;
- `lyrics` role: the words to sing, up to 4,000 characters;
- `abc` role (optional): the score.

The optional parameters are:

- `abc_mode`: `full` or `melody`. `full` follows the melody and chords; `melody` follows only the melody and rejects chord marks. If omitted, it is inferred from the score, else `full`.
- `seed`: the random seed, for reproducibility.
- `return_abc`: also return the score the song used.
- `abc_continue`: continue the given `abc` as a score opening, then sing it. Requires `abc`; use it only when the brief asks to start from an existing opening.

The declaration gives no character cap for the style description. Keep the brief short enough to read in one pass. Generation is asynchronous and can take several minutes.

## Seed and the returned score

Keep `seed` when you compare two versions of the same idea; change it when you want a different take. `return_abc` asks for the score with the audio. If the model returns a score, check it with the dialect before you use it.

## What goes in the style description

Cover these slots, in this order. Leave out a slot only when it does not matter.

| Slot | What to say | Example |
| --- | --- | --- |
| Genre and era | The family and the period | "1970s soul ballad", "modern synth pop" |
| Mood | The feeling, in a few words | "warm, hopeful, a little tired" |
| Vocal | Voice type, delivery, range, language | "female lead, close and dry, doubled on the chorus" |
| Instruments | Four to six, with their roles | "piano, muted guitar, warm bass, kick and clap" |
| Groove | Tempo, meter, feel, drum pattern | "120 BPM, 4/4, straight backbeat, no swing" |
| Production | Space, texture, era of the mix | "clean and modern, short reverb, no distortion" |
| Arc | How the energy moves | "sparse verse, wide chorus, biggest last chorus" |
| Constraints | What to avoid | "no rap, no spoken word, no distorted guitar" |

A useful template:

```
[Genre and mood] song in [key], [tempo] BPM, [meter].
[Vocal]. [Instruments]. [Groove].
[Production]. [Arc]. [Constraints].
```

## Examples

For a song built on [assets/chorus-eight-bars.abc](../assets/chorus-eight-bars.abc):

> Bright pop chorus in C, 120 BPM, 4/4. Female lead, close and dry, doubled on the chorus. Piano, muted electric guitar, warm bass, kick and clap. A four-on-the-floor kick and a wide piano. Clean, modern production. No rap, no distorted guitar.

For a song built on [assets/verse-eight-bars.abc](../assets/verse-eight-bars.abc):

> Warm acoustic pop verse in G, 92 BPM, 4/4. Male lead, intimate and close. Fingerpicked acoustic guitar, soft upright piano, upright bass, light shaker. Sparse, so the words are clear. Analog, roomy production. No drums.

For a song built on [assets/ballad-eight-bars-3-4.abc](../assets/ballad-eight-bars-3-4.abc):

> Slow 3/4 ballad verse in A minor, 66 BPM. Female lead, breathy and forward. Grand piano, cello, sustained strings, upright bass, no drums. Minor harmony, close and intimate. A long reverb tail. No electronic drums.

These are section sketches. Each describes the section in its score; a longer song can add sections in the same style. Three or four sentences is enough for a clear brief.

## Keep the brief consistent with the score

The score and the style description are two views of one song. They must agree on:

- the key and the mode;
- the tempo and the meter;
- the form and the section lengths;
- the instruments that carry the melody and the harmony;
- the vocal range and the kind of voice;
- the language of the words.

If the score is in 3/4 and the brief says "four-on-the-floor", the model gets two contradictory instructions. Fix one before you generate. Do not ask the model to ignore the score.

## Write the lyrics block

- Label the sections: `[verse]`, `[chorus]`, `[bridge]`, `[outro]`.
- Put one lyric line per phrase. A line break is a breath.
- Keep the syllable count of each line close to the note onsets in its phrase.
- Repeat the chorus words. A chorus is remembered because it repeats.
- Keep the language consistent. If the song mixes languages, say which lines are in which language in the style description.
- Do not put chords, score syntax or production notes in the lyrics block. The lyrics are words to sing.

Lyric labels name sections, not singers. A duet is described in the style description; the score has one sung line.

The lyrics are not part of the score text. `WRITING.md` §10 says the words belong to the song project, not the score. In the request, put them in the `lyrics` block; in the editor, in the song project's `lyrics` and `lyricLines`. The score carries the melody only.

## Iterate on one slot

Change one part of the brief at a time, so you can hear what changed.

- Vocal wrong? Change the vocal sentence only.
- Arrangement too busy? Remove one instrument or one layer.
- Chorus does not lift? Change the arc sentence and the chorus instrumentation, not the whole brief.
- Tempo feel wrong? Change the BPM and the groove sentence together. If the score has a tempo, change it there too.
- Style wrong? Change the genre and the production sentence, then keep the same lyrics and score.

Keep the seed when you compare two style descriptions. Change the seed only when you are exploring, not when you are testing one change.

## Check the style description

- Does it name a genre and a mood?
- Does it describe the vocal and at least four instruments?
- Does it state the tempo and the meter, and do they match the score?
- Does it say how the energy moves, when the song has more than one section?
- Does it say what to avoid?
- Is it free of artist names, file names and platform commands?
- Is the style description short enough to read in one pass?
- Is the lyrics block within 4,000 characters?
- Does the lyrics block match the phrases in the score?
- Is the score's own key, tempo and meter the same as the brief?

Next: [revising before a regeneration](revising.md) · [melody and lyrics](melody-and-lyrics.md)
