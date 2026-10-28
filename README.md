# Song composition

Composition guidance for songs written as song2 `.abc` scores and generated with the song2 model.

This repository is the one home of that guidance. It covers:

- song form, sections and phrase lengths;
- bar counts;
- key, tempo and time signature;
- melody range, contour and rhythm against lyric syllables;
- chords, chord rhythm and progressions;
- how lyric lines sit over phrases;
- the style description for the generation request;
- choosing what to change before a regeneration.

It does not teach the song2 text format and it does not edit scores. The format authority is [`@neta-art/score-dialect-song2`](https://www.npmjs.com/package/@neta-art/score-dialect-song2): read its `WRITING.md` before writing a score and its `RULES.md` when a rule is unclear. Editing, drafts and handoff belong to [`@neta-art/score-editor`](https://www.npmjs.com/package/@neta-art/score-editor).

## Install and use

By npm:

```bash
npm install @neta-art/song-composition
```

The skill is then at:

```text
node_modules/@neta-art/song-composition/skills/song-composition/SKILL.md
```

By repository path:

```bash
git clone https://github.com/netaart/song-composition.git
```

Point the agent at `song-composition/skills/song-composition/SKILL.md`.

The skill is plain Markdown. Agent Skills hosts load the `SKILL.md` and its `references/` pages; other tools can read the same files directly.

## Use it with the score packages

The skill writes guidance, not code. To read, check or edit a score, install the dialect and editor packages at the same version:

```bash
npm install @neta-art/score-dialect-song2 @neta-art/score-editor
```

Then follow the dialect's `WRITING.md` for the text and this skill for the musical choices.

## What is here

```text
skills/song-composition/
  SKILL.md                    the short route
  references/
    song-form.md              form, sections, bar counts, phrases
    melody-and-lyrics.md      range, contour, rhythm, syllable fit
    harmony.md                chords, chord rhythm, progressions
    keys-tempo-meter.md       key, tempo, time signature
    style-description.md      the generation brief
    revising.md               what to change before regenerating
  assets/
    verse-eight-bars.abc
    chorus-eight-bars.abc
    ballad-eight-bars-3-4.abc
scripts/
  check-examples.mjs
  check-links.mjs
```

## Check the examples

```bash
npm install
npm run check
```

The check reads every `.abc` under `skills/**/assets/` with the dialect's `parse` and `check`, and exits non-zero on any diagnostic. It installs nothing itself; the two packages are devDependencies.

To check that every relative link under `skills/` resolves to a file:

```bash
npm run check:links
```

## License

MIT. See [LICENSE](LICENSE).
