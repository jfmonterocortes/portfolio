export const PROJECTS = [
  {
    slug: 'cattle-weighing-system',
    title: 'Bascula La Esperanza',
    tagline: 'Full-stack cattle weighing system with RBAC, audit logs, and export.',
    category: 'FULLSTACK',
    techStack: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Prisma', 'JWT', 'Zod', 'Vitest'],
    repoUrl: 'https://github.com/jfmonterocortes/cattle-weighing-system',
    liveUrl: null,
    screenshots: [
      '/projects/cattle-weighing/dashboard-overview.png',
      '/projects/cattle-weighing/planillas-list-and-filters.png',
      '/projects/cattle-weighing/register-weighing-sheet.png',
      '/projects/cattle-weighing/people-directory.png',
      '/projects/cattle-weighing/accounts-and-links.png',
      '/projects/cattle-weighing/my-account-settings.png',
    ],
    screenshotLabels: [
      'Dashboard',
      'Sheets list',
      'Register sheet',
      'People directory',
      'Accounts & links',
      'My account',
    ],
    architecture: [
      { id: 'client', label: 'React Client', sub: 'Vite + Tailwind', group: 'frontend' },
      { id: 'api', label: 'Express API', sub: 'JWT + Helmet + Zod', group: 'backend' },
      { id: 'services', label: 'Service Layer', sub: 'Business logic', group: 'backend' },
      { id: 'prisma', label: 'Prisma ORM', sub: '8 models, 10+ migrations', group: 'data' },
      { id: 'pg', label: 'PostgreSQL', sub: 'Transactional writes', group: 'data' },
    ],
    architectureFlow: [
      ['client', 'api'],
      ['api', 'services'],
      ['services', 'prisma'],
      ['prisma', 'pg'],
    ],
    decisions: [
      {
        icon: 'shield',
        title: 'Transactional consistency',
        body: 'Sheet mutations and payment status changes commit atomically so partial writes never corrupt business state.',
      },
      {
        icon: 'users',
        title: 'Person ≠ User',
        body: 'Weighing activity is modeled on Person records so operational data can exist before an account is created or linked.',
      },
      {
        icon: 'file-text',
        title: 'Audit logging',
        body: '16 action types tracked on best-effort — never allowed to turn a committed write into a 500.',
      },
    ],
    stats: ['14 test files', '3 user roles', 'JWT auth', 'PDF + Excel export', 'Audit logging'],
    codeLabel: 'Transactional sheet creation (src/services/sheet.service.js)',
    codeSnippet: `async function createSheet(data, operatorId) {
  return prisma.$transaction(async (tx) => {
    const sheet = await tx.weighingSheet.create({
      data: {
        ...data,
        createdById: operatorId,
        status: 'OPEN',
      },
    });

    await tx.sheetAuditLog.create({
      data: {
        sheetId: sheet.id,
        action: 'SHEET_CREATED',
        performedById: operatorId,
      },
    });

    return sheet;
  });
}`,
  },
  {
    slug: 'coop-application-agent',
    title: 'Co-op Application Agent',
    tagline: 'AI pipeline that generates tailored co-op packages with iterative refinement.',
    category: 'TOOLS',
    techStack: ['Python', 'OpenAI API', 'Pydantic', 'Streamlit', 'LaTeX', 'python-docx', 'Notion API'],
    repoUrl: 'https://github.com/jfmonterocortes/coop-application-agent',
    liveUrl: null,
    screenshots: [],
    screenshotLabels: [],
    architecture: [
      { id: 'ui', label: 'Streamlit UI', sub: 'CLI or web interface', group: 'frontend' },
      { id: 'orchestrator', label: 'Orchestrator', sub: 'apply.py pipeline', group: 'backend' },
      { id: 'openai', label: 'OpenAI API', sub: 'Structured generation', group: 'external' },
      { id: 'validator', label: 'Pydantic Schemas', sub: 'Type-safe output', group: 'backend' },
      { id: 'renderer', label: 'LaTeX Renderer', sub: 'One-page PDF', group: 'output' },
      { id: 'notion', label: 'Notion API', sub: 'Optional sync', group: 'external' },
    ],
    architectureFlow: [
      ['ui', 'orchestrator'],
      ['orchestrator', 'openai'],
      ['openai', 'validator'],
      ['validator', 'renderer'],
      ['orchestrator', 'notion'],
    ],
    decisions: [
      {
        icon: 'refresh-cw',
        title: 'Iterative refinement loop',
        body: 'Generates, scores (target 9/10), and refines up to 3 times. Stops when quality threshold is met, not just after N iterations.',
      },
      {
        icon: 'check-square',
        title: 'Structured output + Pydantic',
        body: 'OpenAI responses are parsed into Pydantic models before any rendering, preventing malformed content from reaching LaTeX.',
      },
      {
        icon: 'maximize-2',
        title: 'Deterministic page-fit',
        body: 'Resume is compressed progressively until it fits one page — no manual tweaking of margins or font sizes.',
      },
    ],
    stats: ['10-step pipeline', 'Pydantic validation', 'LaTeX PDF output', 'Notion API sync', 'Batch mode'],
    codeLabel: 'Iterative refinement loop (app/openai_client.py)',
    codeSnippet: `def generate_with_refinement(job_data, profile, master_resume):
    result = generate_application(job_data, profile, master_resume)

    for attempt in range(MAX_REFINEMENT_ITERATIONS):
        review = score_application(result, job_data)

        if review.score >= TARGET_SCORE:
            break

        result = refine_application(
            result, review.feedback, job_data
        )

    return result, review`,
  },
  {
    slug: 'task-tracker-api',
    title: 'TaskTrackerAPI',
    tagline: 'ASP.NET Core MVC + Minimal API with versioned routes, health checks, and request logging.',
    category: 'BACKEND',
    techStack: ['.NET 8', 'ASP.NET Core', 'C#', 'Razor MVC', 'Minimal API'],
    repoUrl: 'https://github.com/jfmonterocortes/TaskTrackerAPI',
    liveUrl: null,
    screenshots: [
      '/projects/task-tracker/task-list.png',
      '/projects/task-tracker/create-task.png',
      '/projects/task-tracker/search-tasks.png',
    ],
    screenshotLabels: ['Task list', 'Create task', 'Search tasks'],
    architecture: [
      { id: 'ui', label: 'Razor MVC', sub: 'ASP.NET Core views', group: 'frontend' },
      { id: 'api', label: 'Minimal API', sub: 'TaskTrackerApi_SQ', group: 'backend' },
      { id: 'service', label: 'ITaskService', sub: 'Interface + impl', group: 'backend' },
      { id: 'store', label: 'In-memory Store', sub: 'ConcurrentDictionary', group: 'data' },
    ],
    architectureFlow: [
      ['ui', 'api'],
      ['api', 'service'],
      ['service', 'store'],
    ],
    decisions: [
      {
        icon: 'layers',
        title: 'Additive API versioning',
        body: '/api/v1/... was added without removing existing /api/... routes to avoid breaking existing flows.',
      },
      {
        icon: 'settings',
        title: 'Config-driven integration',
        body: 'Frontend API base URL is read from appsettings.json instead of hardcoded in views — one config change to point at any environment.',
      },
      {
        icon: 'activity',
        title: 'Request logging middleware',
        body: 'Both apps log HTTP method and path for quick diagnostics without pulling in a full observability stack.',
      },
    ],
    stats: ['Versioned API routes', 'Health endpoints', 'Request logging', 'Config-driven integration'],
    codeLabel: 'Minimal API endpoints (TaskTrackerApi_SQ/Program.cs)',
    codeSnippet: `app.MapGet("/api/v1/tasks", (ITaskService tasks) =>
    Results.Ok(tasks.GetAll()));

app.MapGet("/api/v1/tasks/{id}", (int id, ITaskService tasks) => {
    var task = tasks.GetById(id);
    return task is null ? Results.NotFound() : Results.Ok(task);
});

app.MapPost("/api/v1/tasks", (TaskItem item, ITaskService tasks) => {
    var created = tasks.Create(item);
    return Results.Created($"/api/v1/tasks/{created.Id}", created);
});

app.MapPatch("/api/v1/tasks/{id}/assign",
    (int id, AssignRequest req, ITaskService tasks) => {
        var updated = tasks.Assign(id, req.Assignee);
        return updated is null ? Results.NotFound() : Results.Ok(updated);
    });`,
  },
  {
    slug: 'messaging-app',
    title: 'MessagingApp',
    tagline: 'C# WPF client + Windows Service TCP server with a custom text protocol.',
    category: 'SYSTEMS',
    techStack: ['C#', '.NET 8', '.NET Framework 4.7.2', 'WPF', 'TCP Sockets', 'Windows Service'],
    repoUrl: 'https://github.com/jfmonterocortes/MessagingApp',
    liveUrl: null,
    screenshots: [
      '/projects/messaging-app/client-main-window.png',
      '/projects/messaging-app/client-message-flow.png',
      '/projects/messaging-app/server-log-view.png',
    ],
    screenshotLabels: ['Client window', 'Message flow', 'Server log'],
    architecture: [
      { id: 'clientA', label: 'WPF Client A', sub: '.NET 8 desktop', group: 'frontend' },
      { id: 'clientB', label: 'WPF Client B', sub: '.NET 8 desktop', group: 'frontend' },
      { id: 'tcp', label: 'TCP Server', sub: 'TcpListener', group: 'backend' },
      { id: 'queue', label: 'Message Queue', sub: 'In-memory', group: 'data' },
      { id: 'logger', label: 'File Logger', sub: 'Custom logger', group: 'data' },
    ],
    architectureFlow: [
      ['clientA', 'tcp'],
      ['clientB', 'tcp'],
      ['tcp', 'queue'],
      ['tcp', 'logger'],
    ],
    decisions: [
      {
        icon: 'wifi',
        title: 'Raw TCP over HTTP',
        body: 'TCP provides ordered, reliable delivery with minimal dependency surface. Ideal for a LAN messaging system with short commands.',
      },
      {
        icon: 'cpu',
        title: 'Client/Service separation',
        body: 'WPF client owns UI; Windows Service owns networking. Each project is independently maintainable and testable.',
      },
      {
        icon: 'alert-triangle',
        title: 'Explicit protocol errors',
        body: 'Server handles empty or malformed requests with explicit protocol errors, not silent drops. Stream/client cleanup through controlled disposal paths.',
      },
    ],
    stats: ['Custom TCP protocol', 'Windows Service host', 'In-memory queue', 'File logging'],
    codeLabel: 'Protocol parser (MessagingApp_Service/TcpMessagingServer.cs)',
    codeSnippet: `private void HandleClient(TcpClient client) {
    using var stream = client.GetStream();
    using var reader = new StreamReader(stream);
    using var writer = new StreamWriter(stream) { AutoFlush = true };

    string line = reader.ReadLine();
    if (string.IsNullOrWhiteSpace(line)) {
        writer.WriteLine("ERROR|EMPTY_REQUEST");
        return;
    }

    string[] parts = line.Split('|');
    switch (parts[0]) {
        case "SEND" when parts.Length == 4:
            Enqueue(parts[1], parts[2], parts[3]);
            writer.WriteLine("OK");
            break;
        case "RECV" when parts.Length == 2:
            var msgs = Dequeue(parts[1]);
            writer.WriteLine(string.Join("\\n", msgs));
            break;
        default:
            writer.WriteLine("ERROR|UNKNOWN_COMMAND");
            break;
    }
}`,
  },
  {
    slug: 'restaurant-management-system',
    title: 'Restaurant Management System',
    tagline: 'C console app demonstrating hash tables, circular linked lists, and FIFO queues.',
    category: 'SYSTEMS',
    techStack: ['C', 'Data Structures', 'Visual Studio'],
    repoUrl: 'https://github.com/jfmonterocortes/restaurant-management-system',
    liveUrl: null,
    screenshots: [
      '/projects/restaurant/screenshot-main-menu.png',
      '/projects/restaurant/screenshot-invalid-text-input.png',
      '/projects/restaurant/screenshot-invalid-range-input.png',
    ],
    screenshotLabels: ['Main menu', 'Input validation', 'Range validation'],
    architecture: [
      { id: 'console', label: 'Console Client', sub: 'Interactive menu loop', group: 'frontend' },
      { id: 'logic', label: 'Business Logic', sub: 'Table, order, billing', group: 'backend' },
      { id: 'hash', label: 'Hash Table', sub: 'Menu items', group: 'data' },
      { id: 'list', label: 'Circular List', sub: 'Tables', group: 'data' },
      { id: 'queue', label: 'FIFO Queue', sub: 'Orders', group: 'data' },
    ],
    architectureFlow: [
      ['console', 'logic'],
      ['logic', 'hash'],
      ['logic', 'list'],
      ['logic', 'queue'],
    ],
    decisions: [
      {
        icon: 'database',
        title: 'Multiple data structures',
        body: 'Hash table for O(1) menu lookup, circular list for round-robin table tracking, queue for FIFO order processing.',
      },
      {
        icon: 'lock',
        title: 'Status-gated billing',
        body: 'Bills can only be generated after orders are processed — invalid state transitions are blocked at the data layer.',
      },
      {
        icon: 'trash-2',
        title: 'Explicit memory management',
        body: 'Every malloc has a paired free. Demonstrates ownership and lifecycle discipline — not just "it works until it leaks".',
      },
    ],
    stats: ['Hash table', 'Circular linked list', 'FIFO queue', 'Explicit malloc/free'],
    codeLabel: 'Hash table insert (RestaurantManagement.c)',
    codeSnippet: `void insertMenuItem(HashTable* table, const char* name, float price) {
    int index = hash(name, TABLE_SIZE);
    MenuNode* node = malloc(sizeof(MenuNode));
    if (!node) return;

    strncpy(node->name, name, MAX_NAME_LEN - 1);
    node->name[MAX_NAME_LEN - 1] = '\\0';
    node->price = price;
    node->next = table->buckets[index];
    table->buckets[index] = node;
}

MenuNode* findMenuItem(HashTable* table, const char* name) {
    int index = hash(name, TABLE_SIZE);
    MenuNode* curr = table->buckets[index];
    while (curr) {
        if (strcmp(curr->name, name) == 0) return curr;
        curr = curr->next;
    }
    return NULL;
}`,
  },
];
