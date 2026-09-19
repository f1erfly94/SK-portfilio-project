import NoteList from "@/components/NoteList";
import Reveal from "@/components/Reveal";
import {notes} from "@/data/notes";
import {pageMetadata} from "@/lib/metadata";

export const metadata = pageMetadata({
    title: "Notes",
    description:
        "Write-ups of bugs and decisions from my projects: what broke, how I measured it, and what fixed it — with the numbers.",
    path: "/notes",
});

export default function Notes() {
    return (
        <section className="container mx-auto pb-24 pt-6 xl:pt-10">
            <Reveal>
                <p className="label">Notes</p>
                <h1 className="h1 mt-4 max-w-4xl">Bugs worth writing down</h1>
                <p className="mt-5 max-w-2xl text-white/60">
                    Write-ups of bugs and decisions from my projects: what broke, how I measured it, and what
                    fixed it. Each one has the numbers, because &ldquo;it felt faster&rdquo; is not a result.
                </p>
            </Reveal>

            <div className="mt-14">
                <NoteList notes={notes}/>
            </div>
        </section>
    );
}
