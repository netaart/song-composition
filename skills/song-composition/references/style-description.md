# Style description

The style description is the production brief for the song2 model. It says what the song should sound like. The lyrics say what it sings. Keep them separate.

## What the request carries

The song2 request has two required text blocks:

- the **style description**, in the `prompt` role;
- the **lyrics**, in the `lyrics` role.

Depending on the model declaration, the request can also carry:

- an input score, in the `abc` role;
- a score mode, `abc_mode`;
- a seed;
- a request to return the score, `return_abc`.

Read the model's declaration for the exact keys, allowed values and text limits. Keep both texts well inside the cap: a style description of 300–800 characters and lyrics of 1,000–2,000 characters are usually enough. A short, specific brief works better than a long list. Generation is asynchronous and can take several minutes.

## Score mode, seed and the returned score

`abc_mode` says how much score the model should carry. The editor's project model names the two modes `full` and `melody`; the model declaration gives the values it accepts. Use `full` when the song needs the whole arrangement and `melody` when the score should carry the vocal line.

`seed` makes a run repeatable. Keep it when you compare two versions of the same idea. Change it when you want a different take.

`return_abc` asks for the score with the audio. If it is off, the model returns audio only. If the model returns a score, check it with the dialect before you use it.

## What goes in the style description

Cover these slots, in this order. Leave out a slot only when it does not matter.

| Slot | What to say | Example |
| --- | --- | --- |
| Genre and era | The family and the period | "1970s soul ballad", "modern synth pop" |
| Mood | The feeling, in a few words | "warm, hopeful, a little tired" |
| Vocal | Lead, range, delivery, harmony, language | "female lead, close and dry in the verse, doubled in the chorus" |
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

> Bright pop in C, 120 BPM, 4/4. Female lead, close in the verse and doubled in the chorus, with a small harmony on the last line. Piano, muted electric guitar, warm bass, kick and clap. The verse is sparse; the chorus opens with a four-on-the-floor kick and a wide piano. Clean, modern production. No rap, no distorted guitar.

For a song built on [assets/verse-eight-bars.abc](../assets/verse-eight-bars.abc):

> Warm acoustic pop in G, 92 BPM, 4/4. Male lead, intimate and close. Fingerpicked acoustic guitar, soft upright piano, upright bass, light shaker. Keep the arrangement sparse so the words are clear. Analog, roomy production. No drums in the first verse.

For a song built on [assets/ballad-eight-bars-3-4.abc](../assets/ballad-eight-bars-3-4.abc):

> Slow 3/4 ballad in A minor, 66 BPM. Female lead, breathy and forward, with a low harmony on the last chorus. Grand piano, cello, sustained strings, upright bass, no drums in the verse. Minor harmony with a lift in the last line. Intimate, close production with a long reverb tail. No electronic drums.

These are three or four sentences. That is enough for a clear brief.

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

The lyrics are not part of the score text; the dialect's `WRITING.md` explains where the words live. Keep them in this block and in the song project, not in the `.abc`.

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
- Does it say how the energy moves from verse to chorus?
- Does it say what to avoid?
- Is it free of artist names, file names and platform commands?
- Is it well under the character cap?
- Does the lyrics block match the phrases in the score?
- Is the score's own key, tempo and meter the same as the brief?

Next: [revising before a regeneration](revising.md) · [melody and lyrics](melody-and-lyrics.md)
