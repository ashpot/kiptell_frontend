import Card from "@/components/common/Card";

const Item = ({ label, value }) => (
  <div>
    <dt className="text-xs font-medium uppercase tracking-wide text-muted">{label}</dt>
    <dd className="mt-1.5 text-base">{value?.trim() ? value : "N/A"}</dd>
  </div>
);

export default function PersonalInfoCard({ user }) {
  return (
    <Card className="p-7">
      <h2 className="text-[17px] font-semibold">Personal Information</h2>
      <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <Item label="First name" value={user.firstName} />
        <Item label="Last name" value={user.lastName} />
        <Item label="Email" value={user.email} />
        <Item label="Phone number" value={user.phone} />
        <Item label="Address" value={user.address} />
        <Item label="Country" value={user.country} />
      </dl>
    </Card>
  );
}