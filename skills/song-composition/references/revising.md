# Revising before a regeneration

A regeneration is not an edit. Change the score first, then generate again. Before you generate, decide what to change and what to leave alone.

## Diagnose first

Name the symptom in one sentence. Then name the musical cause. Then choose the smallest change that addresses it.

| Symptom | Likely cause | Smallest change |
| --- | --- | --- |
| The vocal is too high | Key too high, or the melody sits above the range | Transpose the whole score down; do not rewrite the tune |
| The vocal is too low | Key too low, or the verse is in the basement | Transpose up a step or move the verse up an octave |
| The words are rushed | Too many syllables for the phrase or the tempo | Cut syllables, split the line, or slow the tempo |
| The words drag | Too few syllables, or the tempo is too slow | Add a note or a melisma, or raise the tempo |
| The chorus does not lift | Same range, same chord rhythm, same texture | Raise the chorus register, quicken the chords, open the drums |
| The verse and chorus sound the same | Same range and same harmony | Lower the verse, change the chord rhythm, thin the verse |
| The melody wanders | No climax and no repetition | Choose one high note and repeat a two-bar motif |
| The melody is boring | Every phrase has the same rhythm | Vary the note lengths and the phrase endings |
| The harmony is muddy | Chords change too often, or the voicing is low and thick | Slow the chord rhythm, raise the voicing, remove a layer |
| A chord clashes with the melody | The melody's strong-beat note is not in the chord | Change the chord, or move the melody to a chord tone |
| The form sags | A section is too long, or the intro or outro overstays | Cut four bars, shorten the intro, or trim the outro |
| The bridge feels disconnected | New key with no preparation | Keep the motif and change only the harmony, or prepare the key |
| A lyric line does not fit | Syllable count differs from the phrase's onsets | Rewrite the line, or change the melody and keep the count |
| The words are hard to catch | Dense consonants at a fast tempo | Simplify the line, or slow the tempo |
| The style is wrong | The brief is vague or contradicts the score | Rewrite the style description, not the score |

If two symptoms point in different directions, fix the one the listener hears first. Usually that is the vocal range or the words.

## One change at a time

Change one thing, then listen. If you change the key, the tempo, the words and the style at once, you cannot tell which change helped.

- One musical change per regeneration is ideal.
- A melody change and a lyric change can travel together only when the syllable count changes.
- A tempo change and a style change can travel together when the style names the tempo.
- Keep a note of the previous version, so you can compare.

## What to keep

Keep everything the brief did not ask you to change:

- the form, unless the form is the symptom;
- the words, unless the words are the symptom;
- the key and tempo, unless the symptom points at them;
- the style description, unless the sound is the symptom;
- the seed, when you are comparing two versions of the same idea;
- the score mode, unless the mode is the question.

Do not rewrite the lyrics or the style description when the request was a melody fix. Do not change the key when the request was a chord fix.

## Change the score first

1. Apply the smallest score edit that addresses the cause.
2. Read the score with the dialect and run its check. Fix every diagnostic before you go on.
3. Sing or play the changed phrase against the words. Check the stress and the breath.
4. If the edit did not help, undo it. Do not stack a second change on top.
5. Only then prepare the regeneration.

If the score was generated and is the original, keep it. Make the edit in a new version or a draft, so the original song and its score stay as they were. A generated score is a record, not a scratch pad.

## Regenerate with the score

Send the score with the request, along with the final style description and lyrics. Keep the seed and the score mode when you have them, and ask for the score back. The exact keys depend on the model declaration:

- style description in the `prompt` role;
- lyrics in the `lyrics` role;
- score in the `abc` role;
- `abc_mode` for the score mode;
- `seed`;
- `return_abc` to ask for the score.

If the model returns no score, report that. Do not write a score from memory and present it as the model's output.

If the model returns both an input and an output score, keep them apart. The input is what you sent; the output is the new song's score. Compare the output with the input, not with your memory of it.

## Compare the new score

Check the returned score against the old one, bar by bar:

- Is the form the same, or did the section lengths change?
- Is the key the same? Is the tempo the same? Is the meter the same?
- Does the melody keep the phrase shape, or did it move?
- Do the chords still fit the strong beats?
- Does each lyric line still match its phrase?
- Is the vocal still inside 60–82?
- Did the change you asked for actually happen?

Then listen for the symptom. If it is unchanged, the change did not reach the request. Check that the new score was the one sent.

## When to start over

Start over when the form, the key and the words are all wrong. Fixing one bar will not save a song that is in the wrong shape.

Otherwise, fix locally. A wrong chord, a high note, a long line and a dull phrase are all local problems. They do not need a new song.

## Report the revision

Say:

- what you changed, with bar numbers;
- what you left alone;
- why you changed it;
- the diagnostics, if any;
- what to listen for in the new version.

A short report is enough. "Bars 5–8: lowered the melody a third and kept the words. Bars 1–4 unchanged. Listen for the chorus lift." That is useful. "Improved the song" is not.

## Check before you regenerate

- Is the symptom named?
- Is the cause musical, not a guess about the model?
- Is this the smallest change?
- Does the score still read with zero diagnostics?
- Do the words still match the phrases?
- Is the style description still consistent with the score?
- Are you keeping the seed and the score mode?
- Will you be able to tell whether the change worked?

Next: [song form](song-form.md) · [melody and lyrics](melody-and-lyrics.md)
