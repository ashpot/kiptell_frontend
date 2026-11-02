import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, CircleCheck, ClipboardList } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

const Label = ({ children }) => (
  <p className="text-[11px] font-medium uppercase tracking-wide text-muted">{children}</p>
);

export function TheNeedCard({ impact }) {
  return (
    <Card className="p-6">
      <h2 className="flex items-center gap-2.5 text-base font-semibold">
        <ClipboardList size={15} className="text-muted" /> The Need
      </h2>
      <div className="mt-5">
        <Label>{impact.needTitle}</Label>
        <p className="mt-1.5 text-sm leading-6">{impact.need.description}</p>
      </div>
      <div className="mt-4">
        <Label>Why it mattered</Label>
        <p className="mt-1.5 text-sm leading-6 text-muted">{impact.need.why}</p>
      </div>
      <Button
        as={Link}
        to={`/need-owner/needs/${impact.needId}`}
        variant="outline"
        icon={ArrowRight}
        className="mt-5"
      >
        View Original Need
      </Button>
    </Card>
  );
}

export function WhatWasDoneCard({ impact }) {
  const tiles = [
    ["Provider", impact.provider],
    ["Sponsor", impact.sponsor],
    ["Project duration", impact.duration],
    ["Completed", impact.completedLabel],
  ];
  return (
    <Card className="p-6">
      <h2 className="flex items-center gap-2.5 text-base font-semibold">
        <Briefcase size={15} className="text-muted" /> What Was Done
      </h2>
      <p className="mt-5 text-sm leading-6">{impact.whatWasDone}</p>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        {tiles.map(([label, value]) => (
          <div key={label} className="rounded-xl bg-surface px-4 py-3.5">
            <dt className="text-[11px] font-medium uppercase tracking-wide text-muted">{label}</dt>
            <dd className="mt-1.5 text-sm font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

export function OutcomesCard({ impact }) {
  const tiles = [
    { value: impact.peopleReached.toLocaleString("en-NG"), label: "People reached" },
    { value: impact.deliverables, label: "Deliverables completed" },
    { value: impact.facility.value, label: impact.facility.label },
  ];
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Outcomes</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-xl bg-surface px-3 py-4 text-center">
            <p className="text-2xl font-semibold leading-none">{t.value}</p>
            <p className="mt-2 text-xs text-muted">{t.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-3 rounded-xl border border-success/20 bg-success-50 px-5 py-4">
        <CircleCheck size={15} className="mt-0.5 shrink-0 text-success" />
        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-wide text-success">Key outcome</h3>
          <p className="mt-1.5 text-sm leading-6 text-ink/80">{impact.keyOutcome}</p>
        </div>
      </div>
    </Card>
  );
}