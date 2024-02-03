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
    <section className="grid grid-cols-2 gap-4 py-4">
      {case_studies.map((item) => {
        return (
          <Link key={item.id} className="flex rounded-md bg-gray-800 p-3" href={`/${item.id}`}>
            <article className="grid grid-rows-[1fr,30px] place-items-center gap-2">
              <img alt={item.title} className="h-full w-full object-cover" src={item.hero_image} />
              <p className="">{item.teaser}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default async function Home() {
  return (
    <ListItemSkeletonHome />
    // <Suspense fallback={<ListItemSkeletonHome />}>
    //   {/* @ts-expect-error Server Component */}
    //   <ListItem />
    // </Suspense>
  );
}
