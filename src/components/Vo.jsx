/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4Fmo44VYBg2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import a from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Step into Style</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the perfect pair. Quality. Comfort. Fashion.
              </p>
            </div>
            <form className="flex flex-col gap-2 min-[400px]:flex-row sm:gap-4 lg:gap-6">
              <Input className="max-w-md flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Sign Up</Button>
            </form>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Perfect Pair</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Comfort meets style. Introducing our latest collection of footwear. Whether you're looking for casual
                  sneakers, elegant heels, or rugged boots, we've got you covered. Step into fashion. Step into comfort.
                </p>
              </div>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Collection
              </a>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Showroom</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our showroom is a paradise for shoe lovers. We offer a wide variety of footwear for every occasion. From
                trendy sneakers to elegant heels, from rugged boots to comfortable sandals, we have it all. Step in and
                find your perfect pair.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] xl:gap-24">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Testimonials</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our customers love our shoes. Here's what they have to say.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Amazing</p>
                <p className="font-semibold">Samantha W.</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Love the variety of shoes available. The showroom is fantastic.
                </p>
                <p className="font-semibold">Emily J.</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The shoes are so comfortable. I can't wait to show them off.
                </p>
                <p className="font-semibold">Michael S.</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The shoes are so comfortable. I can't wait to show them off.
                </p>
                <p className="font-semibold">Michael S.</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Love the variety of shoes available. The showroom is fantastic.
                </p>
                <p className="font-semibold">Emily J.</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Amazing</p>
                <p className="font-semibold">Samantha W.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] xl:gap-24">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question? Want to schedule a visit to our showroom? Fill out the form below and we'll get back to
                you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[400px]">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
