import type {Card} from "../types";

import {notFound} from "next/navigation";

export default async function ListItem({id}: {id: string}) {
  const {case_studies} = await fetch(
    "https://raw.githubusercontent.com/theappbusiness/engineering-challenge/main/endpoints/v1/caseStudies.json",
  ).then((resp) => resp.json() as Promise<Card>);
  const element = case_studies.find((item) => item.id === Number(id));

  if (!element) return notFound();

  return (
    <article className="grid gap-12">
      {element.sections.map((item, index) => (
        <div
          key={item.title}
          className={`mb-20 rounded-md ${index % 2 === 0 ? "bg-slate-800" : "bg-slate-600"} p-10`}
        >
          <h2
            className={`text-center text-xl font-bold ${index % 2 === 0 ? "text-white" : "text-white"}`}
          >
            {item.title}
          </h2>
          {item.body_elements.map((elementBody) => (
            <div key={crypto.randomUUID()} className="mt-5">
              {typeof elementBody === "object" ? (
                <img alt="" className="" src={elementBody.image_url} />
              ) : (
                <p className="font-medium text-gray-300">{elementBody}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </article>
  );
}
