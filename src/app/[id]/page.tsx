import {Suspense} from "react";

import ListItem from "../ui/listitem";
import {ListItemSkeleton} from "../ui/skeleton";

export default async function page({params: {id}}: {params: {id: string}}) {
  return (
    <Suspense fallback={<ListItemSkeleton />}>
      {/* @ts-expect-error Server Component */}
      <ListItem id={id} />
    </Suspense>
  );
}
