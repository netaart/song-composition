---
name: song-composition
description: "Compose a song as a song2 `.abc` score and generate it with the song2 model. Use for song form and section lengths, bar counts and phrase lengths, key, tempo and meter, melody range and contour, rhythm against lyric syllables, chords and chord rhythm, the style description, and choosing what to change before a regeneration. Triggers on: 'write a song', 'compose a verse', 'write a chorus', 'set these lyrics to a melody', 'make a chord chart', 'write a style prompt', 'what should I change before regenerating', '写歌', '作曲', '写旋律', '写一段副歌', '配和弦', '填词', '写风格描述', '重新生成前改什么'."
---

# Song composition

Compose the song first, then write it as a song2 `.abc` score and generate it with the song2 model. This skill covers the musical choices: form, phrases, key, tempo, meter, melody, lyrics, chords, the style description, and revision.

The score format is not this skill's business. The format authority is `@neta-art/score-dialect-song2`: read its `WRITING.md` before you write text and `RULES.md` when a rule is unclear. Read the text back with the dialect's `parse` and run its `check` before you hand the score over. Editing, drafts and the handoff belong to `@neta-art/score-editor`.

## Route

| The job | Read |
| --- | --- |
| Choose the form, sections, bar counts and phrase lengths | [references/song-form.md](references/song-form.md) |
| Write the melody and fit the words to it | [references/melody-and-lyrics.md](references/melody-and-lyrics.md) |
| Choose chords, chord rhythm and a progression | [references/harmony.md](references/harmony.md) |
| Choose the key, tempo and time signature | [references/keys-tempo-meter.md](references/keys-tempo-meter.md) |
| Write the style description for the generation request | [references/style-description.md](references/style-description.md) |
| Decide what to change before a regeneration | [references/revising.md](references/revising.md) |

The examples are small complete scores:

- [assets/verse-eight-bars.abc](assets/verse-eight-bars.abc): an eight-bar verse in G, 4/4, two four-bar phrases.
- [assets/chorus-eight-bars.abc](assets/chorus-eight-bars.abc): an eight-bar chorus in C, 4/4, with a second voice.
- [assets/ballad-eight-bars-3-4.abc](assets/ballad-eight-bars-3-4.abc): an eight-bar verse in A minor, 3/4.

## Order of work

1. Read the brief. Write down the form, the section lengths, the key, the tempo, the meter and the singer.
2. Plan the bars before the notes. Give every section a phrase layout and a bar count. Read `WRITING.md` for the block shape before you write the first phrase.
3. Write the words in lines, one line per phrase. Count the syllables in each line.
4. Write the melody phrase by phrase. Match one note to one syllable by default.
5. Add the chords. Put chord tones on strong beats and choose a chord rhythm for the section.
6. Write the style description so it agrees with the score: genre, vocal, instruments, tempo, mood.
7. Read the score with the dialect, run its check, and fix every diagnostic.
8. Generate. Before a second generation, change one thing and keep everything else.

## Rules of thumb

- A phrase is usually two, four or eight bars. A section is usually two to four phrases.
- Keep the verse lower and narrower than the chorus. Save the highest note for one climax.
- One note per syllable is the default. A melisma is one syllable over several notes, not extra words.
- Count the note onsets in the phrase, not the notes in the whole song, when you match a lyric line.
- Change chords on strong beats. Put a chord tone under the melody on the beat where the chord changes.
- Write the style description as a production brief. Do not name artists; describe the sound.
- Change the score first, then regenerate. Generation is not an edit.
- A passing dialect check is a format check. It does not judge the tune, the vocal range or the syllable fit; check those yourself.
- If the score does not read, fix it with the dialect pages. Do not add a second change nobody asked for.

## What this skill does not do

- It does not define the song2 text format. The dialect package's `WRITING.md` and `RULES.md` do.
- It does not mount, theme, save or hand off a score. The editor package does.
- It does not call a model or a platform command. It tells you what to put in the request.
- It does not replace listening. A score that passes every check can still be dull.
