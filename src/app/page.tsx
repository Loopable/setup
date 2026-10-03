import Image from "next/image"
import Link from "next/link"
import { IconArrowUpRight } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const helpLinks = [
  {
    label: "Visit the Loopable docs",
    href: "https://docs.loopable.party",
    external: true,
    hint: "(opens in a new tab)",
  },
  {
    label: "Join our Discord server",
    href: "https://loopable.party/go/discord",
    external: true,
    hint: "(opens in a new tab)",
  },
  {
    label: "Join our Matrix server",
    href: "https://loopable.party/go/matrix",
    external: true,
    hint: "(opens in a new tab)",
  },
  {
    label: "Contact us via email",
    href: "mailto:contact@loopable.party",
    external: false,
    hint: "(opens in your email client)",
  },
]

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-6 sm:p-10">
      <Card className="w-full max-w-md p-8 max-xs:bg-transparent max-xs:p-0 max-xs:border-0">
        <CardContent className="flex flex-col items-center gap-6 px-0 text-center">
          <Image
            src="/logos/logo_accent.svg"
            alt=""
            width={56}
            height={56}
            priority
            className="max-xs:h-16 max-xs:w-16"
          />

          <div className="space-y-1.5">
            <h1 className="font-heading text-2xl font-semibold text-balance max-xs:text-3xl">
              Welcome to Loopable
            </h1>
            <p className="text-muted-foreground max-xs:text-base">
              Let&apos;s set up your instance
            </p>
          </div>

          <Button size="lg" className="w-full rounded-full">
            Let&apos;s go
          </Button>

          <nav aria-label="Help" className="mt-2 flex w-full flex-col gap-2">
            <div className="flex w-full items-center gap-3">
              <span className="text-muted-foreground">Need help?</span>
              <span aria-hidden="true" className="h-px flex-1 bg-white/4" />
            </div>

            <ul className="-mb-2 flex w-full flex-col gap-1">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Button
                    variant="link"
                    className="h-auto min-h-11 w-full justify-between gap-4 px-0 py-2 text-left text-base"
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      />
                    }
                  >
                    <span>
                      {link.label}
                      <span className="sr-only"> {link.hint}</span>
                    </span>
                    <IconArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 max-xs:size-5"
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>
    </main>
  )
}
