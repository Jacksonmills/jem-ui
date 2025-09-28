import * as React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
} from "@/components/ui/combobox";

export function ComboboxMultipleDemo() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const id = React.useId();

  return (
    <Combobox items={langs} multiple>
      <div className="max-w-[28rem] flex flex-col gap-1">
        <label htmlFor={id}>Programming languages</label>
        <ComboboxChips
          className="w-64 min-[500px]:w-[22rem]"
          ref={containerRef}
        >
          <ComboboxValue>
            {(value: ProgrammingLanguage[]) => (
              <React.Fragment>
                {value.map((language) => (
                  <ComboboxChip key={language.id} aria-label={language.value}>
                    {language.value}
                    <ComboboxChipRemove aria-label="Remove" />
                  </ComboboxChip>
                ))}
                <ComboboxInput
                  id={id}
                  placeholder={value.length > 0 ? "" : "e.g. TypeScript"}
                  className="focus-visible:border-transparent focus-visible:ring-transparent focus-visible:ring-0 bg-transparent border-transparent min-w-12 flex-1 h-fit rounded-md border-0 pl-0 text-base outline-none"
                />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
      </div>

      <ComboboxPopup anchor={containerRef}>
        <ComboboxEmpty>No languages found.</ComboboxEmpty>
        <ComboboxList>
          {(language: ProgrammingLanguage) => (
            <ComboboxItem key={language.id} value={language}>
              {language.value}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}

interface ProgrammingLanguage {
  id: string;
  value: string;
}

const langs: ProgrammingLanguage[] = [
  { id: "js", value: "JavaScript" },
  { id: "ts", value: "TypeScript" },
  { id: "py", value: "Python" },
  { id: "java", value: "Java" },
  { id: "cpp", value: "C++" },
  { id: "cs", value: "C#" },
  { id: "php", value: "PHP" },
  { id: "ruby", value: "Ruby" },
  { id: "go", value: "Go" },
  { id: "rust", value: "Rust" },
  { id: "swift", value: "Swift" },
];
