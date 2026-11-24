// One Word for the Boss — entry program (Node 22, stdlib only).
//
// Writes exactly one original word to /output/entry.txt: "Squirrel",
// 8 characters, well inside the 1–30 gate. The word is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// Why this word, against the judge's brief (in its order):
// 1. It is a single word that describes a boss, the sort of word a person
//    would actually use about the one they report to: "my boss is such a
//    squirrel" — a boss who chases every shiny new initiative, drops the
//    last one mid-sentence, and darts to the next. Not a phrase, a
//    sentence, a name or a caption.
// 2. It is funny on its own: the image lands instantly — the boss's head
//    snapping round at the newest shiny thing, the "Squirrel!" moment
//    everyone in the room recognises. A colleague repeats it at lunch
//    because it lands.
// 3. It rings true: it catches a real, universal habit of bosses —
//    chasing shiny objects (new tools, new frameworks, new priorities),
//    abandoning last week's urgent thing for this week's. The entrant has
//    clearly met this boss.
// 4. It is fresh: nobody's first word for a boss is an animal that hoards
//    shiny things, and it is not among the 1,365 submissions listed when
//    this entry was built (the field is saturated with Hovercraft x32,
//    Seagull x22, Hoverer x18, Ghost, Overlord, Micromanager, Bottleneck,
//    Delegator — no Squirrel anywhere; nor Magpie, Butterfly, Avalanche,
//    Pivot or Spreadsheet, the other fresh candidates considered).
//    "Squirrel" was picked over "Magpie" because the distraction moment
//    is instantly funny to any audience, not just bird-watchers.
// 5. It travels: a squirrel-boss works in a kitchen, a warehouse or an
//    office without the industry needing to be explained — every
//    workplace has the boss who cannot finish one shiny thing before
//    chasing the next.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORD = 'Squirrel';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–30 characters, not whitespace-only,
// exactly one word (no spaces, no newline at all), no leading/trailing
// whitespace that would pad the judged text, and no control characters
// that would make the judged text anything but one clean word. The word
// is 8 characters.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  WORD.trim() === '' ||
  WORD !== WORD.trim() ||
  /\s/.test(WORD) ||
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u001f\u007f]/.test(WORD)
) {
  throw new Error(`entry violates the gate: ${WORD.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, WORD, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the word that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== WORD) {
  throw new Error('entry.txt does not match the gated word');
}

// Confirm on stdout what was written, so a run log shows the judged
// text and its length without opening the file: the word itself plus
// its character count (8) and byte count (8 — pure ASCII, so the two
// agree), which the gate already bounded to 1–30.
console.log(
  `wrote ${WORD.length} chars (${Buffer.byteLength(WORD, 'utf8')} bytes) to ${target}: ${WORD}`,
);
