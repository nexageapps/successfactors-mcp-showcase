export const SPACE_URL = 'https://heisenberglupenix-successfactors-mcp.hf.space'
export const MCP_ENDPOINT = `${SPACE_URL}/mcp`
export const READY_URL = `${SPACE_URL}/ready`
export const HF_SPACE_URL =
  'https://huggingface.co/spaces/HeisenbergLupenix/successfactors-mcp'
export const BLOG_URL =
  'https://community.sap.com/t5/artificial-intelligence-blogs-posts/your-ai-agent-wants-to-talk-to-successfactors-start-with-the-security/ba-p/14469334'
export const DOCS_URL = `${SPACE_URL}/docs`
export const TOOLS_URL = `${SPACE_URL}/tools`
export const CONNECT_URL = `${SPACE_URL}/connect`

export const NAV = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#tools', label: 'Tools' },
  { href: '#democo', label: 'DEMOCO' },
  { href: '#security', label: 'Security' },
  { href: '#connect', label: 'Connect' },
] as const

export const PIPELINE_GROUPS = [
  {
    title: 'The question',
    tone: 'muted' as const,
    steps: [
      { n: '01', label: 'HR question in plain language' },
      { n: '02', label: 'MCP client — Joule, Claude, Cursor' },
      { n: '03', label: 'HTTPS POST /mcp or stdio' },
    ],
  },
  {
    title: 'The boundary',
    tone: 'allow' as const,
    steps: [
      { n: '04', label: 'Tenant middleware — key, request id, rate limit' },
      { n: '05', label: 'READ tool chosen by name, not entity' },
      { n: '06', label: 'Scope check — self / manager / admin' },
    ],
  },
  {
    title: 'The tenant',
    tone: 'scope' as const,
    steps: [
      { n: '07', label: 'OAuth token cache — this tenant only' },
      { n: '08', label: 'GET /odata/v2/…' },
      { n: '09', label: 'JSON the agent can narrate' },
    ],
  },
]

export const TRACE_STEPS = [
  'search_employee(department:"Finance")',
  'scope check → caller: manager',
  'token cache → tenant: DEMOCO',
  'GET /odata/v2/User?$filter=…',
]

export type ToolCategory =
  | 'Employee'
  | 'Organization'
  | 'Job'
  | 'Time off'
  | 'Compensation'
  | 'Career'
  | 'Connection'

export const TOOLS: {
  ask: string
  tool: string
  entity: string
  category: ToolCategory
}[] = [
  {
    ask: 'Who am I / tell me about myself',
    tool: 'who_am_i',
    entity: 'Signed-in MCP employee',
    category: 'Employee',
  },
  {
    ask: 'Find people in Finance',
    tool: 'search_employee',
    entity: 'User $filter',
    category: 'Employee',
  },
  {
    ask: 'Tell me about 100045',
    tool: 'get_employee',
    entity: 'User',
    category: 'Employee',
  },
  {
    ask: 'Richer profile for Jane Smith',
    tool: 'get_employee_profile',
    entity: 'User, PerPerson',
    category: 'Employee',
  },
  {
    ask: 'How do I reach them?',
    tool: 'get_employee_contact_info',
    entity: 'PerEmail, PerPhone, PerAddressDEFLT',
    category: 'Employee',
  },
  {
    ask: 'Who is their manager?',
    tool: 'get_manager',
    entity: 'User.manager',
    category: 'Organization',
  },
  {
    ask: "Who is on Jane's team?",
    tool: 'get_direct_reports',
    entity: 'User by manager',
    category: 'Organization',
  },
  {
    ask: 'How many departments? List them',
    tool: 'search_department',
    entity: 'FODepartment',
    category: 'Organization',
  },
  {
    ask: 'Summarise Engineering',
    tool: 'get_department',
    entity: 'FODepartment',
    category: 'Organization',
  },
  {
    ask: 'What is this position?',
    tool: 'get_position',
    entity: 'MDF Position',
    category: 'Organization',
  },
  {
    ask: 'Where do they work?',
    tool: 'get_location',
    entity: 'FOLocation',
    category: 'Organization',
  },
  {
    ask: 'Org chart / reporting chain',
    tool: 'get_organization_hierarchy',
    entity: 'User walk',
    category: 'Organization',
  },
  {
    ask: 'Current role',
    tool: 'get_job_information',
    entity: 'EmpJob',
    category: 'Job',
  },
  {
    ask: 'Hire date',
    tool: 'get_employment_information',
    entity: 'EmpEmployment',
    category: 'Job',
  },
  {
    ask: 'Leave balance',
    tool: 'get_leave_balance',
    entity: 'EmpTimeAccountBalance',
    category: 'Time off',
  },
  {
    ask: 'Pending absences',
    tool: 'get_time_off_requests',
    entity: 'EmployeeTime',
    category: 'Time off',
  },
  {
    ask: "Who is out on John Lee's team?",
    tool: 'get_team_leave_summary',
    entity: 'Balances + EmployeeTime',
    category: 'Time off',
  },
  {
    ask: 'Pay grade — only if asked',
    tool: 'get_compensation_information',
    entity: 'EmpCompensation',
    category: 'Compensation',
  },
  {
    ask: 'Tell me my story / mid-year review',
    tool: 'tell_my_story',
    entity: 'Profile + job + talent, no compensation',
    category: 'Career',
  },
  {
    ask: 'Is this tenant reachable?',
    tool: 'test_connection',
    entity: 'Connectivity probe, no records',
    category: 'Connection',
  },
]

export const TOOL_CATEGORIES: Array<ToolCategory | 'All'> = [
  'All',
  'Employee',
  'Organization',
  'Job',
  'Time off',
  'Compensation',
  'Career',
  'Connection',
]

export const DEPARTMENTS = [
  {
    name: 'Corporate',
    code: 'CORP',
    lead: { name: 'Amara Okeke', id: '100000' },
    people: [{ name: 'Amara Okeke', title: 'Chief Executive Officer', id: '100000' }],
  },
  {
    name: 'Finance',
    code: 'FIN',
    lead: { name: 'John Lee', id: '100001' },
    people: [
      { name: 'John Lee', title: 'VP Finance', id: '100001' },
      { name: 'Jane Smith', title: 'Finance Analyst', id: '100045' },
      { name: 'Carlos Rivera', title: 'Senior Accountant', id: '100046' },
      { name: 'Priya Patel', title: 'AP Specialist', id: '100047' },
    ],
  },
  {
    name: 'Engineering',
    code: 'ENG',
    lead: { name: 'Alex Kim', id: '100020' },
    people: [
      { name: 'Alex Kim', title: 'Engineering Manager', id: '100020' },
      { name: 'Sam Okonkwo', title: 'Software Engineer', id: '100021' },
      { name: 'Yuki Tanaka', title: 'Senior Software Engineer', id: '100022' },
    ],
  },
  {
    name: 'Human Resources',
    code: 'HR',
    lead: { name: 'Maria Chen', id: '100010' },
    people: [
      { name: 'Maria Chen', title: 'Chief Human Resources Officer', id: '100010' },
      { name: 'Elena Rossi', title: 'HR Business Partner', id: '100030' },
    ],
  },
  {
    name: 'Sales',
    code: 'SALES',
    lead: { name: 'Noah Berg', id: '100050' },
    people: [
      { name: 'Noah Berg', title: 'VP Sales', id: '100050' },
      { name: 'Sofia Alvarez', title: 'Account Executive', id: '100051' },
    ],
  },
]

export const PEOPLE = [
  {
    id: '100000',
    name: 'Amara Okeke',
    email: 'amara.okeke@demo.example',
    title: 'Chief Executive Officer',
    department: 'Corporate',
    location: 'New York',
    manager: '—',
  },
  {
    id: '100001',
    name: 'John Lee',
    email: 'john.lee@demo.example',
    title: 'VP Finance',
    department: 'Finance',
    location: 'New York',
    manager: 'Amara Okeke 100000',
  },
  {
    id: '100045',
    name: 'Jane Smith',
    email: 'jane.smith@demo.example',
    title: 'Finance Analyst',
    department: 'Finance',
    location: 'New York',
    manager: 'John Lee 100001',
  },
  {
    id: '100046',
    name: 'Carlos Rivera',
    email: 'carlos.rivera@demo.example',
    title: 'Senior Accountant',
    department: 'Finance',
    location: 'Austin',
    manager: 'John Lee 100001',
  },
  {
    id: '100047',
    name: 'Priya Patel',
    email: 'priya.patel@demo.example',
    title: 'AP Specialist',
    department: 'Finance',
    location: 'Austin',
    manager: 'Carlos Rivera 100046',
  },
  {
    id: '100010',
    name: 'Maria Chen',
    email: 'maria.chen@demo.example',
    title: 'Chief Human Resources Officer',
    department: 'Human Resources',
    location: 'New York',
    manager: 'Amara Okeke 100000',
  },
  {
    id: '100030',
    name: 'Elena Rossi',
    email: 'elena.rossi@demo.example',
    title: 'HR Business Partner',
    department: 'Human Resources',
    location: 'London',
    manager: 'Maria Chen 100010',
  },
  {
    id: '100020',
    name: 'Alex Kim',
    email: 'alex.kim@demo.example',
    title: 'Engineering Manager',
    department: 'Engineering',
    location: 'Berlin',
    manager: 'Amara Okeke 100000',
  },
  {
    id: '100021',
    name: 'Sam Okonkwo',
    email: 'sam.okonkwo@demo.example',
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Berlin',
    manager: 'Alex Kim 100020',
  },
  {
    id: '100022',
    name: 'Yuki Tanaka',
    email: 'yuki.tanaka@demo.example',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Singapore',
    manager: 'Alex Kim 100020',
  },
  {
    id: '100050',
    name: 'Noah Berg',
    email: 'noah.berg@demo.example',
    title: 'VP Sales',
    department: 'Sales',
    location: 'New York',
    manager: 'Amara Okeke 100000',
  },
  {
    id: '100051',
    name: 'Sofia Alvarez',
    email: 'sofia.alvarez@demo.example',
    title: 'Account Executive',
    department: 'Sales',
    location: 'Austin',
    manager: 'Noah Berg 100050',
  },
]

export const LOCATIONS = [
  { name: 'New York', meta: 'NYC · New York, NY · US' },
  { name: 'Austin', meta: 'AUS · Austin, TX · US' },
  { name: 'London', meta: 'LON · London · GB' },
  { name: 'Berlin', meta: 'BER · Berlin · DE' },
  { name: 'Singapore', meta: 'SIN · Singapore · SG' },
]

export const PROMPTS = [
  { q: 'Find all employees in the Finance department.', tool: 'search_employee' },
  { q: 'Who is the manager of employee 100045?', tool: 'get_manager' },
  { q: 'Show the job information for Jane Smith.', tool: 'get_job_information' },
  { q: 'Which employees have pending time-off requests?', tool: 'get_time_off_requests' },
  {
    q: "Summarise leave balances and who is out on John Lee's Finance team.",
    tool: 'get_team_leave_summary',
  },
  { q: 'Give me a summary of the Engineering organization.', tool: 'get_department' },
  { q: 'How many departments are there? List them.', tool: 'search_department' },
  { q: 'Tell me the career story for Jane Smith.', tool: 'tell_my_story' },
]
