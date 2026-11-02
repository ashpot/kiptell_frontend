/** Mock data for Impact + Impact Details. Replace with API responses later. */

// Numbers shown in the four cards at the top of the Impact page (would come from the API)
export const impactSummary = [
  { title: "People Reached", value: "1,920", icon: "users", tone: "brand" },
  { title: "Under Review", value: 8, icon: "check", tone: "success" },
  { title: "Needs Addressed", value: 8, icon: "notes", tone: "brand" },
  { title: "Outcomes Recorded", value: 3, icon: "chart", tone: "neutral" },
];

/** Same four checks on every recorded impact */
export const verification = [
  { title: "Project completed", by: "Kiptell verified" },
  { title: "Deliverables verified", by: "Kiptell verified" },
  { title: "Progress confirmed", by: "Need Owner confirmed" },
  { title: "Impact information recorded", by: "Kiptell recorded" },
];

// Timeline: the last step stays "upcoming" until Kiptell records the impact
const timeline = ({ submitted, approved, created, completed, recorded }) => [
  { label: "Need submitted", date: submitted, state: "done" },
  { label: "Need approved", date: approved, state: "done" },
  { label: "Project created", date: created, state: "done" },
  { label: "Project completed", date: completed, state: "done" },
  recorded
    ? { label: "Impact recorded", date: recorded, state: "done" }
    : { label: "Impact recorded", date: "Pending", state: "upcoming" },
];

export const impactRecords = [
  {
    id: "imp-1001",
    status: "recorded",
    projectId: "prj-1001",
    needId: "KT-1048",
    title: "Community Health Centre Equipment Upgrade",
    needTitle: "Community Health Centre Equipment",
    category: "Healthcare",
    year: 2026,
    completedLabel: "Nov 20, 2026",
    location: "Nsukka, Enugu State",
    provider: "MedTech Solutions",
    sponsor: "Community Health Initiative",
    duration: "3 months",
    peopleReached: 1240,
    deliverables: 8,
    tasks: 12,
    summary: "Essential healthcare equipment provided",
    achieved: "Essential equipment was provided to improve healthcare services at the community health centre.",
    need: {
      description: "The community health centre lacked essential equipment required to provide reliable basic healthcare services.",
      why: "Without adequate equipment, medical staff could not perform basic diagnostics or provide appropriate care, leaving residents without reliable access to essential health services.",
    },
    whatWasDone:
      "MedTech Solutions supplied and installed the required healthcare equipment at the facility, completing all 12 tasks and 8 deliverables within the approved project scope.",
    facility: { value: 1, label: "Healthcare facility supported" },
    keyOutcome: "Healthcare staff can now provide services using the newly installed equipment, improving the quality of care available to residents.",
    beforeAfter: { before: "Facility without required equipment", after: "Facility with installed equipment" },
    evidence: {
      photos: ["gray", "amber", "gray"],
      videos: [{ name: "Community Centre Walkthrough", size: "18.4 MB · Recorded Nov 20, 2026" }],
      documents: [
        { name: "Equipment Installation Report", size: "PDF · 900 KB" },
        { name: "Project Sign-off Certificate", size: "PDF · 1,200 KB" },
      ],
    },
    beneficiaries: { headline: "1,240 people", description: "Residents served by the community health centre" },
    story: {
      challenge:
        "The community health centre lacked essential equipment needed to provide reliable basic healthcare services. Residents had to travel long distances to access care that should have been available locally.",
      done: "The approved Project supplied and installed the required equipment at the facility. MedTech Solutions coordinated delivery, installation, and staff training within the agreed timeline.",
      outcome:
        "The centre now has access to the equipment needed to improve the services it provides to residents. Healthcare staff can now perform basic diagnostics and provide appropriate care at the local level.",
    },
    projectStory: {
      caption: "Community Health Centre",
      subtitle: "Final handover · Nov 20, 2026",
      items: [
        { title: "Installation complete", meta: "Photo", kind: "photo" },
        { title: "Centre walkthrough", meta: "Video · 2:14", kind: "video" },
      ],
    },
    timeline: timeline({
      submitted: "Aug 18, 2026",
      approved: "Aug 20, 2026",
      created: "Aug 22, 2026",
      completed: "Nov 20, 2026",
      recorded: "Nov 24, 2026",
    }),
  },

  {
    id: "imp-1002",
    status: "recorded",
    projectId: "prj-1004",
    needId: "KT-1053",
    title: "Primary School Library Upgrade",
    needTitle: "Primary School Library Upgrade",
    category: "Education",
    year: 2026,
    completedLabel: "Aug 20, 2026",
    location: "Enugu East, Enugu State",
    provider: "LearnBuild Africa",
    sponsor: "Education Forward",
    duration: "2 months",
    peopleReached: 680,
    deliverables: 6,
    tasks: 9,
    summary: "Library facilities improved",
    achieved: "A restocked and refurbished library now gives pupils access to books and reading materials.",
    need: {
      description: "The primary school library lacked adequate books and reading materials for pupils.",
      why: "Without a functioning library, pupils could not build reading habits or access the materials they need to learn.",
    },
    whatWasDone:
      "LearnBuild Africa supplied books, reading materials and library furniture, completing all 9 tasks and 6 deliverables within the approved project scope.",
    facility: { value: 1, label: "School library supported" },
    keyOutcome: "Pupils now have a functioning library with age-appropriate books and comfortable reading spaces.",
    beforeAfter: { before: "Library without adequate books", after: "Library with new books and furniture" },
    evidence: {
      photos: ["gray", "amber", "gray"],
      videos: [{ name: "Library Walkthrough", size: "12.6 MB · Recorded Aug 20, 2026" }],
      documents: [
        { name: "Book Delivery Report", size: "PDF · 700 KB" },
        { name: "Project Sign-off Certificate", size: "PDF · 1,100 KB" },
      ],
    },
    beneficiaries: { headline: "680 people", description: "Pupils and teachers at the primary school" },
    story: {
      challenge:
        "The primary school library had too few books and reading materials to support pupils. Many children had no access to books outside the classroom.",
      done: "The approved Project supplied age-appropriate books, reading materials and basic furniture. LearnBuild Africa coordinated delivery and set-up within the agreed timeline.",
      outcome:
        "The school now has a functioning library that pupils actively use, helping to build reading habits and support learning across the school.",
    },
    projectStory: {
      caption: "Primary School Library",
      subtitle: "Final handover · Aug 20, 2026",
      items: [
        { title: "Library restocked", meta: "Photo", kind: "photo" },
        { title: "Library walkthrough", meta: "Video · 1:48", kind: "video" },
      ],
    },
    timeline: timeline({
      submitted: "Jun 10, 2026",
      approved: "Jun 12, 2026",
      created: "Jun 15, 2026",
      completed: "Aug 20, 2026",
      recorded: "Aug 24, 2026",
    }),
  },

  {
    id: "imp-1003",
    status: "pending",
    projectId: "prj-1003",
    needId: "KT-1050",
    title: "Community Water Access",
    needTitle: "Community Water Access",
    category: "Infrastructure",
    year: 2026,
    completedLabel: "Jul 12, 2026",
    deliverables: 6,
    tasks: 10,
    timeline: timeline({
      submitted: "Jun 10, 2026",
      approved: "Jun 12, 2026",
      created: "Jun 15, 2026",
      completed: "Jul 12, 2026",
      recorded: null,
    }),
  },
];

export const getImpactById = (id) => impactRecords.find((r) => r.id === id);