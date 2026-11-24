# One Word for the Boss — "Squirrel"

[![One Word for the Boss](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![Rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/epanpai/u-swift-badger-44-one-word-for-the-boss-6b48c735/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![Reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/epanpai/u-swift-badger-44-one-word-for-the-boss-6b48c735/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

Entry for the [One Word for the Boss](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735) bounty on make.fun.

## The entry

> Squirrel

8 characters, one word: the boss who chases every shiny new initiative, drops the last one mid-sentence, and darts to the next — the "Squirrel!" moment everyone in the room recognises.

## Why this word

Against the judge's brief, in its order:

1. **Single word describing a boss** — "my boss is such a squirrel" is the sort of word a person actually uses about the one they report to. Not a phrase, sentence, name or caption.
2. **Funny on its own** — the image lands instantly: the boss's head snapping round at the newest shiny thing. A colleague repeats it at lunch because it lands.
3. **Rings true** — it catches a real, universal habit of bosses: chasing shiny objects (new tools, new frameworks, new priorities) and abandoning last week's urgent thing for this week's.
4. **Fresh** — nobody's first word for a boss is an animal that hoards shiny things. It is not among the 1,365 submissions listed when this entry was built: the field is saturated with Hovercraft (x32), Seagull (x22), Hoverer (x18), Ghost, Overlord, Micromanager, Bottleneck and Delegator — no Squirrel anywhere.
5. **Travels** — a squirrel-boss works in a kitchen, a warehouse or an office without the industry needing to be explained.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed word to `/output/entry.txt` — 8 characters, inside the 1–30 character gate. Deterministic, no network, no secrets, no randomness.

## Gate

The sealed scorer requires `/output/entry.txt` to be UTF-8 text of 1 to 30 characters, not only white space. `main.ts` self-checks the word before writing (length, one word, no whitespace, no control characters) and reads the file back byte-for-byte after writing, so a bad edit fails loudly here instead of shipping a rejected entry.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
