# AGENTS.md

You are working in the Loopable Instance Setup repository.

Read `CONTRIBUTING.md` before changing anything. It contains the shared rules for contributors and agents, including production safety, portability, privacy, security, licensing, compliance, testing, and when to stop and ask for direction.

## What is Loopable?

Loopable is a privacy-first, decentralized social network.

The Loopable Protocol defines how independent Loopable implementations communicate. It covers identities, accounts, devices, encrypted social data, social relationships, groups, files, federation, and related protocol behavior.

Loopable is designed to feel like one social network to users. Instances and federation are underlying infrastructure.

Privacy is a core part of the protocol. Private data is protected cryptographically rather than relying on every instance or service being trusted.

The official Loopable implementation is an implementation of the protocol. It is not the protocol itself.

## What is this repository?

This repository contains the setup process for the Loopable Installation Server.

Setup takes someone from a blank machine or environment to a running Loopable instance. It creates and configures the infrastructure an instance operator needs: server configuration, credentials, keys, and the files and services that run the instance.

The people who run setup are instance operators. Many of them host instances for government officials, activists, and journalists whose safety depends on privacy and reliable service. Treat setup as production-sensitive.

## Repository structure

Start with the relevant existing routes, components, and configuration before making changes.

* `src/app/` contains the Next.js pages that guide the operator through setup.
* `src/lib/` contains the reusable code behind setup, including installation and configuration logic.
* `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.js`, and `prettier.config.js` contain the tooling configuration.
* `SECURITY.md` contains security guidance.
* `LICENSE` contains licensing terms.

More specific `AGENTS.md` files may exist deeper in the repository. When working in a directory with more specific instructions, follow those instructions as well.

## Work from the existing repository

Read before changing.

Search for existing routes, components, logic, tests, and documentation before creating new ones.

Follow existing patterns unless the task requires changing them. This includes patterns in React, Next.js, and TypeScript usage.

Do not invent a new mechanism when the repository already has one.

Do not assume something is missing because it is not present in the first file you inspect.

## Keep changes small

Make the smallest change that completely solves the task.

Do not optimize for the amount of code changed or the amount of work performed.

A small change with a large impact is preferable to a large rewrite.

Do not make unrelated improvements, refactors, cleanups, reorganizations, or "while I'm here" changes.

Do not change the license, copyright, attribution, dependencies, project structure, terminology, or design unless the task requires it.

Do not modify CI, release automation, or other repository infrastructure unless the task requires it.

If you notice an unrelated problem, leave it alone.

## Preserve existing behavior

Do not change behavior outside the scope of the task.

Be especially careful around:

* Credential, key, and identity creation and handling
* Server and service configuration that setup produces
* Installation and upgrade behavior
* Security and privacy of what is created, displayed, logged, or stored
* Steps an operator has already completed

If the requested change is unclear, do not guess at setup behavior.

Read the relevant routes and logic first. If the required behavior is still not clear, stop and ask.

## Compliance with Loopable

The protocol specification in `loopable/protospec` is authoritative for protocol behavior, and `loopable/server` is the reference implementation.

Setup configures Loopable instances. It does not define protocol behavior. Do not invent protocol behavior, duplicate definitions from the specification, or have setup produce configuration that contradicts the server or the specification. When behavior is ambiguous, check the specification and the server implementation. If it is still unclear, stop and ask.

## Markdown

When creating or editing Markdown, use the `i-have-adhd` and `unslop` skills.

Markdown should be easy for a human to read.

Keep existing useful wording where possible. Do not rewrite large amounts of Markdown just to make it sound different.

## Generated files

Do not manually edit generated files when the repository provides a generator or documented way to update them.

`.next/`, `node_modules/`, and `dist/` are generated or transient. Find the source and generation process first.

If the task requires generated output to change, use the repository's existing generation process.

## Tests and validation

Use the repository's existing validation and test commands.

Run the smallest relevant checks for the change rather than running everything by default. Relevant checks may include `bun run lint`, `bun run build`, and component or end-to-end tests where they exist.

For a bug fix, add or update a test when the repository has an appropriate test for the affected behavior.

Do not change unrelated code to make an unrelated failing check pass.

If validation cannot be run, say so rather than assuming the change works.

## Using agents

Agents are tools, not decision makers.

When using an agent, keep the task's original scope intact.

Do not let an agent turn a focused task into a repository-wide rewrite, redesign, cleanup, or modernization project.

Review generated changes before keeping them.

If an agent changes something that was not required, remove it.

If an agent proposes a broader change that appears useful, do not apply it automatically. Treat it as a separate change.

## Before finishing

Inspect the final diff.

Check that every changed file is relevant to the task and that there are no accidental changes.

Remove unnecessary changes before finishing.

The final state should contain the smallest complete change that solves the requested problem.