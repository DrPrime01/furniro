"use client";
import { useRouter } from "next/navigation";

function Pagination() {
  const router = useRouter();
  const handlePrev = () => {
    const params = new URLSearchParams(window.location.search);
    const start = params.get("start");
    const end = params.get("end");

    if (start && Number(start) > 12) {
      const newStart = Number(start) - 12;
      params.set("start", String(newStart));
    } else {
      params.set("start", String(0));
    }

    if (end && Number(end) > 12) {
      const newEnd = Number(end) - 12;
      params.set("end", String(newEnd));
    } else {
      params.set("end", String(12));
    }

    // Update the URL
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  const handleNext = () => {
    const params = new URLSearchParams(window.location.search);
    const start = params.get("start");
    const end = params.get("end");

    const newStart = start ? Number(start) + 12 : 12;
    const newEnd = end ? Number(end) + 12 : 24;

    params.set("start", String(newStart));
    params.set("end", String(newEnd));

    // Update the URL
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  return (
    <div className="flex items-center gap-x-5">
      <button
        onClick={handlePrev}
        className="rounded-md border border-neutral-4 px-6 py-2.5 hover:bg-neutral-7 button-sm"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="rounded-md border border-neutral-4 px-6 py-2.5 hover:bg-neutral-7 button-sm"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
