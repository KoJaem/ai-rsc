import { env } from "@/env";
import { } from "ai/rsc";

export default function Home() {
  const example = env.NEXT_PUBLIC_EXAMPLE;
  return <main className="">{example}</main>;
}
