import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex border border-blue p-2 mb-[2vh] text-blue">
      <p className="w-full">SAMANTHA CHUNG</p>
      <div className="flex justify-end w-full space-x-3">
        <Link href="" target="_blank">
          V1
        </Link>
        <p>/</p>
        <Link href="https://smchng.github.io/" target="_blank">
          V2
        </Link>
      </div>
    </div>
  );
}
