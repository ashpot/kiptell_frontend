import { useRef, useState } from "react";
import { File as FileIcon, Image as ImageIcon, Plus, Trash2, Upload } from "lucide-react";
import Button from "@/components/common/Button";
import Field from "@/components/forms/Field";
import Textarea from "@/components/forms/Textarea";
import StepSectionHeader from "../StepSectionHeader";
import { cn } from "@/lib/cn";

const PHOTO_ACCEPT = ".jpg,.jpeg,.png,.gif,.mp4,.mov";
const DOC_ACCEPT = ".pdf,.doc,.docx,.xls,.xlsx,.txt";

const formatSize = (bytes) =>
  bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;

const matchesAccept = (name, accept) =>
  accept.split(",").some((ext) => name.toLowerCase().endsWith(ext));

const toEntry = (file) => ({
  id: `${file.name}-${file.size}-${file.lastModified}`,
  name: file.name,
  size: formatSize(file.size),
  file,
});

function FileRow({ icon: Icon, name, size, onRemove }) {
  return (
    <li className="flex items-center gap-3.5 rounded-2xl bg-surface px-4 py-3.5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-200/70 text-muted">
        <Icon size={18} strokeWidth={1.5} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{name}</p>
        <p className="text-xs text-muted">{size}</p>
      </div>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${name}`}
        className="p-1 text-muted transition-colors hover:text-danger"
      >
        <Trash2 size={16} strokeWidth={1.5} />
      </button>
    </li>
  );
}

export default function EvidenceStep({ data, update }) {
  const photoInput = useRef(null);
  const docInput = useRef(null);
  const [dragging, setDragging] = useState(false);

  const addFiles = (key, accept, fileList) => {
    const incoming = Array.from(fileList)
      .filter((f) => matchesAccept(f.name, accept))
      .map(toEntry)
      .filter((entry) => !data[key].some((existing) => existing.id === entry.id));
    if (incoming.length) update(key, [...data[key], ...incoming]);
  };
  const removeFile = (key, id) => update(key, data[key].filter((f) => f.id !== id));

  return (
    <>
      <StepSectionHeader title="Photos & videos" description="Show us what the situation looks like." divider />

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          addFiles("photos", PHOTO_ACCEPT, e.dataTransfer.files);
        }}
        className={cn(
          "mt-7 flex flex-col items-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors",
          dragging ? "border-ink bg-surface" : "border-line"
        )}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-ink">
          <Upload size={18} strokeWidth={1.5} />
        </span>
        <h3 className="mt-4 text-sm font-semibold">Upload photos or videos</h3>
        <p className="mt-3 text-[13px] text-muted">Drag and drop files here, or</p>
        <Button
          variant="dark"
          size="lg"
          icon={Upload}
          iconPosition="left"
          className="mt-3 h-10 px-5"
          onClick={() => photoInput.current?.click()}
        >
          Browse files
        </Button>
        <p className="mt-4 text-xs text-muted/80">Accepts JPG, PNG, GIF, MP4, MOV</p>
        <input
          ref={photoInput}
          type="file"
          multiple
          hidden
          accept={PHOTO_ACCEPT}
          onChange={(e) => {
            addFiles("photos", PHOTO_ACCEPT, e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {data.photos.length > 0 && (
        <ul className="mt-5 space-y-3">
          {data.photos.map((f) => (
            <FileRow key={f.id} icon={ImageIcon} name={f.name} size={f.size} onRemove={() => removeFile("photos", f.id)} />
          ))}
        </ul>
      )}

      <hr className="my-8 border-line" />

      <StepSectionHeader
        title="Supporting documents"
        description="Add documents that may help us understand or verify the need — reports, letters, assessments."
      />
      <Button
        variant="outline"
        size="lg"
        icon={Plus}
        iconPosition="left"
        className="mt-4 h-11"
        onClick={() => docInput.current?.click()}
      >
        Add Document
      </Button>
      <p className="mt-3 text-xs text-muted/80">Accepts PDF, DOC, DOCX, XLS, TXT</p>
      <input
        ref={docInput}
        type="file"
        multiple
        hidden
        accept={DOC_ACCEPT}
        onChange={(e) => {
          addFiles("documents", DOC_ACCEPT, e.target.files);
          e.target.value = "";
        }}
      />

      {data.documents.length > 0 && (
        <ul className="mt-4 space-y-3">
          {data.documents.map((f) => (
            <FileRow key={f.id} icon={FileIcon} name={f.name} size={f.size} onRemove={() => removeFile("documents", f.id)} />
          ))}
        </ul>
      )}

      <hr className="my-8 border-line" />

      <Field label="Is there anything else we should know?" htmlFor="additionalContext" hint="This field is optional.">
        <Textarea
          id="additionalContext"
          rows={4}
          value={data.additionalContext}
          onChange={(e) => update("additionalContext", e.target.value)}
        />
      </Field>
    </>
  );
}