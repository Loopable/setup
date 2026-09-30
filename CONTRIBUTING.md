# CONTRIBUTING.md

This repository contains the Loopable Instance Setup. It is a Next.js application that guides an operator from a blank machine or environment to a running Loopable instance: creating and configuring the server files, credentials, keys, and services an instance needs.

## Before changing code

Read the relevant existing code and documentation first. Follow the repository's existing patterns. Do not add a second mechanism when one already exists.

Use the repository's existing tooling: the scripts in `package.json`, the ESLint and Prettier configuration, and the React and TypeScript conventions already in use.

## Compliance with Loopable

The Loopable Protocol specification at [github.com/loopable/protospec](https://github.com/loopable/protospec) is authoritative for protocol behavior, and `loopable/server` is the reference implementation.

Setup configures Loopable instances. Every configuration and behavior it produces must correspond one-to-one with the specification where the specification applies, and must be accepted by the reference server implementation. Do not duplicate protocol definitions in this repository, reinterpret requirements for convenience, or have setup create server-only behavior the server does not support.

When the specification or implementation is ambiguous, incomplete, or appears incorrect, stop and raise the issue. Do not guess, add a workaround, or quietly define a local interpretation.

## Production safety

Loopable instances may be used by government officials, activists, independent journalists, and other people whose safety depends on privacy and reliable service. Treat every change as production-sensitive.

Setup runs on real machines and creates real credentials and configuration. A broken install, a leaked credential, or a misconfigured service can expose an instance and the people on it.

Prioritize correctness, privacy, security, and specification compliance over speed. If a change could break an existing deployment, corrupt or expose data, weaken security, or put users at risk, stop and ask what to do.

Do not make a band-aid fix by changing unrelated software, weakening validation, disabling checks, hiding an error, or replacing a dependency without understanding the cause. Investigate the root problem and escalate when the correct solution is uncertain.

## Portability

Do not make a change merely because it works on one computer. Code and scripts must work on Windows, macOS, and Linux unless the repository documents a platform-specific requirement. Avoid assumptions about shells, paths, environment variables, line endings, installed tools, or filesystem behavior.

## Privacy and security

Protect user content, credentials, private keys, identifiers, instance configuration, metadata, logs, backups, and instance data. Do not place real secrets or user data in the repository, tests, examples, issues, or pull requests.

Review access control, credential handling and storage, key creation, error handling, logging, data retention, and failure behavior for relevant changes. A change that preserves configuration confidentiality may still expose sensitive metadata.

Setup handles private material that operators must not see displayed, echoed, logged, or stored insecurely. Do not log credential material or secret values.

Report security vulnerabilities through `SECURITY.md`. Do not disclose an undisclosed vulnerability in a public issue or pull request.

## Licensing and dependencies

This project is licensed under AGPL-3.0. Do not add code, generated material, examples, assets, or dependencies of unclear origin or incompatible licensing. Check licensing and attribution requirements before copying or introducing external material.

Preserve license and attribution notices. Do not modify `LICENSE` unless the user explicitly requests it and the change has been reviewed for legal correctness.

## Data and compatibility

Treat databases, migrations, stored credentials, generated configuration, existing installations, and upgrade behavior as compatibility-sensitive. Do not make destructive changes without a reviewed migration and upgrade plan.

For changes that may affect existing installations or operators, document the impact, upgrade requirements, rollback behavior, and compatibility risks. If the safe behavior is unclear, stop and ask rather than choosing a potentially breaking option.

## Tests and validation

Run the narrowest relevant checks for the change, then expand validation when the risk requires it. Include or update tests for changed behavior when appropriate. Validate behavior against the specification, the reference server implementation, and the environments the project supports.

Do not change unrelated code to make an unrelated check pass. If validation cannot run, report that fact and the reason.

## Protected repository files

Do not modify `README.md`, `SECURITY.md`, `AGENTS.md`, `CONTRIBUTING.md`, `LICENSE`, or other repository-policy, security, deployment, or release files during an ordinary implementation task. Such changes require explicit user authorization for the specific file and purpose.

## Pull requests and commits

Keep each pull request focused on one coherent change. Explain what changed, why it is needed, how it was validated, and any effects on production safety, privacy, security, portability, compatibility, or existing installations.

When using AI tools or agents, the contributor remains responsible for understanding and reviewing the result. Remove unrelated generated changes before submitting the pull request.

Use Conventional Commits when writing commit messages. Use `!` or a `BREAKING CHANGE` footer for breaking changes.