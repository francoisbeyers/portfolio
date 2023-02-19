import Image from "next/image";
import resumeCYM from "../public/Resume-cym.jpg";
import resumeCF from "../public/Resume-catchf_fire.jpg";
import resumeBL from "../public/Resume-big_lemon.jpg";
import resumeYS from "../public/Resume-yellowsub.jpg";

export default function WorkExperience() {
  return (
    <section className="my-10">
      <div className="p-6 mx-auto border md:w-1/2 rounded-2xl border-gray-800/40">
        <h2 className="flex text-sm font-semibold text-zinc-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="flex-none w-6 h-6"
          >
            <path
              d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              className="fill-zinc-100 stroke-zinc-400"
            ></path>
            <path
              d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
              className="stroke-zinc-400 dark:stroke-zinc-500"
            ></path>
          </svg>
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          <li className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
              <Image
                alt="carymor logo"
                src={resumeCYM}
                decoding="async"
                data-nimg="1"
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="h-7 w-7 grayscale hover:filter-none hover-duration-500"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900">
                Câr-y-Môr
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500">Co-founder</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400"
                aria-label="2019 until Present"
              >
                <time dateTime="2018">2018</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime="2023">Present</time>
              </dd>
            </dl>
          </li>
          <li className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
              <Image
                alt="catchafire logo"
                src={resumeCF}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                decoding="async"
                data-nimg="1"
                className="h-7 w-7 grayscale hover:filter-none hover-duration-500"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900">
                Catchafire
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500">
                Volunteer developer/designer
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400"
                aria-label="2014 until 2019"
              >
                <time dateTime="2020">2020</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime="2023">present</time>
              </dd>
            </dl>
          </li>
          <li className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                alt="big lemon logo"
                src={resumeBL}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                decoding="async"
                data-nimg="1"
                className="h-7 w-7 grayscale hover:filter-none hover-duration-500"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Big Lemon
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                Web developer
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label="2011 until 2014"
              >
                <time dateTime="2022">2022</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime="2023">2023</time>
              </dd>
            </dl>
          </li>
          <li className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                alt="yellow sub logo"
                src={resumeYS}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                decoding="async"
                data-nimg="1"
                className="h-7 w-7 grayscale hover:filter-none hover-duration-500"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Yellow Sub Creative
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                Software developer
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label="2008 until 2011"
              >
                <time dateTime="2021">2021</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime="2022">2022</time>
              </dd>
            </dl>
          </li>
        </ol>
        <a
          href="/Resume-François-Beyers.pdf"
          download={"Resume-François-Beyers.pdf"}
          alt="pdf resume"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full gap-2 px-3 py-2 mt-6 text-sm font-medium text-gray-800 transition border rounded-md group border-dark-grey hover:text-gray-200 outline-offset-2 hover:bg-dark-grey active:bg-dark-grey active:text-gray-200 active:transition-none hover:duration-500"
        >
          Download CV
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
          >
            <path
              d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
