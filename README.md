# Drop out, Max — Next.js

App Router export of the design. Four routes, shared note state.

## Run

    cd nextjs
    npm install
    npm run dev

## Structure

- app/page.js — Open Letter (letter copy, signers, "Add your initials")
- app/notes/page.js — Notes to Max (4 notes per page, arrow-paged snap-scroll wall)
- app/records/page.js — Other Records (DM screenshots, community-leader posts, electioneering timeline)
- app/info/page.js — Info (who made it, why, contact)
- app/layout.js — fonts, global CSS, nav, add-note modal, WallProvider
- components/WallProvider.js — notes + signers state, localStorage persistence, redirect to /notes after posting
- components/NotesWall.js — paginated wall
- components/AddNoteModal.js, AddButton.js — the "add" flow
- components/Screenshot.js — image, or a dashed placeholder when no file is set yet
- components/theme.js — shared type styles (fluid clamps), note paper palette, helpers
- components/data.js — seed notes, screenshot manifest, history entries

## Images

DM screenshots live in public/. The Facebook post slot and the two "From Community Leaders" slots render dashed
placeholders — drop those files into public/ and pass their paths to <Screenshot src="…"> in app/records/page.js.

## Notes

Posting a note is client-side only (localStorage). Swap addNote in WallProvider.js for a route handler / DB call to
make submissions real, and move seed data server-side.
