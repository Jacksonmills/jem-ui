# JEM/UI

A custom component registry built with [Base UI](https://mui.com/base-ui/) primitives and powered by [Shadcn](https://ui.shadcn.com/).

## Simple to try out!

If you're already using Shadcn but have been looking to explore Base UI without the hassle of ripping out Radix-UI, JEM/UI makes it easy! Just initialize your project like any Shadcn setup and seamlessly add Base UI-powered components with the Shadcn CLI.

## Table of Contents

- [JEM/UI](#jemui)
  - [Simple to try out!](#simple-to-try-out)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Quick Start](#quick-start)
    - [With pnpm (recommended)](#with-pnpm-recommended)
    - [Alternative package managers](#alternative-package-managers)
  - [Usage](#usage)
  - [Full Documentation](#full-documentation)
  - [License](#license)

## Introduction

JEM/UI simplifies your development workflow by integrating Base UI primitives directly into a streamlined Shadcn registry. It leverages Shadcn CLI commands, enabling you to quickly scaffold fully-styled, type-safe components directly into your project.

## Features

- Seamless integration of Base UI primitives
- Type-safe components built with TypeScript
- Easy customization and extensibility
- Complete documentation and component API references

## Quick Start

Use the Shadcn CLI to directly add components to your project:

### With pnpm (recommended)

```bash
pnpm dlx shadcn@latest add https://jem-ui.vercel.app/ui/accordion
```

### Alternative package managers

- npm
```bash
npx shadcn@latest add https://jem-ui.vercel.app/ui/accordion
```

- bun
```bash
bunx --bun shadcn@latest add https://jem-ui.vercel.app/ui/accordion
```

## Usage

Once you've added a component using the Shadcn CLI, it's ready to use in your project like any other shadcn component.

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion className="w-full">
      <AccordionItem>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          {`Yes. It comes with default styles that matches the other
          components&apos; aesthetic.`}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          {`Yes. It's animated by default, but you can disable it if you prefer.`}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## Full Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation.

## License

JEM/UI is licensed under the [MIT License](LICENSE).
