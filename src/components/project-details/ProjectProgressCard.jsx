import Card from "@/components/common/Card";
import ProgressBar from "@/components/common/ProgressBar";

function Tile({ label, done, total }) {
  return (
    <div className="rounded-xl bg-surface px-4 py-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1.5 text-lg font-semibold leading-none">
        {done} of {total}
      </p>
      <p className="mt-1 text-xs text-muted">completed</p>
    </div>
  );
}

export default function ProjectProgressCard({ project, barTone }) {
  return (
    <Card className="p-6">
      <h2 className="text-[17px] font-semibold">Project Progress</h2>
      <div className="mt-5 flex items-end justify-between">
        <span className="text-sm text-muted">Overall progress</span>
        <span className="text-2xl font-semibold leading-none">{project.progress}%</span>
      </div>
      <div className="mt-3">
        <ProgressBar value={project.progress} tone={barTone} label="Overall progress" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Tile label="Milestones" {...project.milestones} />
        <Tile label="Tasks" {...project.tasksStat} />
      </div>
    </Card>
  );
}