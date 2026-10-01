import Image from "next/image"
import Link from "next/link"
import { IconArrowUpRight } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const helpLinks = [
  {
    label: "Visit the Loopable docs",
    href: "https://docs.loopable.party",
  },
  {
    label: "Join our Discord server",
    href: "https://loopable.party/go/discord",
  },
  {
    label: "Join our Matrix server",
    href: "https://loopable.party/go/matrix",
  },
  {
    label: "Contact us via email",
    href: "mailto:contact@loopable.party",
  },
]

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-6 sm:p-10">
      <Card className="w-full max-w-md p-8 max-xs:bg-transparent max-xs:p-0 max-xs:ring-0">
        <CardContent className="flex flex-col items-center gap-6 px-0 text-center">
          <Image
            src="/logos/logo_accent.svg"
            alt="Loopable"
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

          <div className="flex mt-2 w-full flex-col gap-2">
            <div className="flex w-full items-center gap-3">
              <span className="text-muted-foreground">Need help?</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <ul className="-mb-2 flex w-full flex-col gap-1">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Button
                    variant="link"
                    className="h-auto w-full justify-between px-0 py-2 text-left text-sm max-xs:text-base"
                    render={<Link href={link.href} />}
                  >
                    <span>{link.label}</span>
                    <IconArrowUpRight className="size-4 shrink-0 max-xs:size-5" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
