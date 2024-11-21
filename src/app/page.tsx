"user client";

import type {Card} from "./types";

import {Suspense} from "react";
import Link from "next/link";

import {ListItemSkeletonHome} from "./ui/skeleton";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function ListItem() {
  sleep(3 * 5000);
  const {case_studies} = await fetch(
    "https://raw.githubusercontent.com/theappbusiness/engineering-challenge/main/endpoints/v1/caseStudies.json",
  ).then((resp) => resp.json() as Promise<Card>);

  return (
    <>
      <h2 className="leading-[2rem]">Real Solutions, Real Impact</h2>

      <section className="grid grid-cols-2 gap-4 py-4">
        {case_studies.map((item) => {
          return (
            <article
              key={item.id}
              className="grid grid-rows-[1fr,auto] gap-2  rounded-md bg-gray-800 p-3"
            >
              <Link href={`${item.id}`}>
                <img
                  alt={item.title}
                  className="h-full w-full object-cover"
                  src={item.hero_image}
                />
              </Link>
              <p className="py-2 text-center">{item.teaser}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default async function Home() {
  return (
    <Suspense fallback={<ListItemSkeletonHome />}>
      {/* @ts-expect-error Server Component */}
      <ListItem />
    </Suspense>
  );
}
