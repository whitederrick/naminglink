import type { SyllableGroup } from "@/lib/hanja-guide-data";

/**
 * 음절 하나에 딸린 한자들을 늘어놓는다.
 *
 * **표(`<table>`)를 쓰지 않는다.** 음절당 글자 수가 1개에서 135개까지 들쭉날쭉해서 표로
 * 만들면 칸이 텅 비거나 좁은 화면에서 가로로 넘친다. 글자를 흐르게 두고 줄바꿈에 맡기면
 * 어느 폭에서도 깨지지 않는다.
 *
 * 한자는 `font-hanja`로 그린다. 기본 글꼴에 없는 글자가 섞여 있어 두부 문자가 나올 수 있다.
 */
export function HanjaSyllableList({ syllables }: { syllables: SyllableGroup[] }) {
  return (
    <div className="mt-3 grid gap-4">
      {syllables.map((group) => (
        <section key={group.syllable} id={`syllable-${group.syllable}`}>
          <h3 className="text-base font-semibold">
            {group.syllable}
            <span className="ml-2 text-xs font-normal text-muted">
              {group.entries.length}자
            </span>
          </h3>
          <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1.5 text-sm leading-7">
            {group.entries.map((entry) => (
              <li key={`${group.syllable}-${entry.hanja}`} className="break-keep">
                <b className="font-hanja text-base">{entry.hanja}</b>
                {entry.meaning ? (
                  <span className="ml-1 text-muted">{entry.meaning}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
