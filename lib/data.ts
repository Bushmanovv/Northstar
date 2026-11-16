export type Task = { id: string; title: string; detail?: string; security?: boolean; resourceIds?: string[] };
export type Module = { id: string; name: string; weeks: string; description: string; tasks: Task[] };
export type Phase = { id: string; number: string; title: string; subtitle: string; months: string; color: string; outcome: string; modules: Module[] };
export type Resource = { id: string; name: string; type: "Course" | "Documentation" | "Practice" | "Roadmap"; topic: string; cost: string; url: string; note: string };
export type Project = { id: string; no: string; name: string; phase: string; summary: string; deliverables: string[]; skills: string[] };

export const phases: Phase[] = [
  {
    id: "foundation", number: "01", title: "Build the foundation", subtitle: "Networking, Linux & security essentials", months: "Months 1–3", color: "#a9c5ff",
    outcome: "Configure, troubleshoot and secure a small segmented network with Linux services.",
    modules: [
      { id: "network-basics", name: "Networking fundamentals", weeks: "Weeks 1–4", description: "Understand the network before trying to secure it.", tasks: [
        { id:"net-tcp", title:"Master TCP/IP, OSI, ports and common protocols", resourceIds:["netacad","jeremy"] },
        { id:"net-ip", title:"Practice IPv4/IPv6 addressing and subnetting", resourceIds:["netacad","jeremy"] },
        { id:"net-core", title:"Configure DHCP, DNS, NAT and basic routing in Packet Tracer", resourceIds:["packet","netacad"] },
        { id:"net-vlan", title:"Create VLANs, trunks and inter-VLAN routing", resourceIds:["packet","jeremy"] },
        { id:"sec-wireshark", title:"Capture and explain DNS, TCP, TLS and HTTP traffic", security:true, resourceIds:["wireshark","thm101"] }
      ]},
      { id: "linux", name: "Linux administration", weeks: "Weeks 5–8", description: "Operate systems confidently from the terminal.", tasks: [
        { id:"linux-cli", title:"Navigate Bash, filesystems and text-processing tools", resourceIds:["linuxjourney"] },
        { id:"linux-users", title:"Manage users, groups, permissions and sudo", resourceIds:["linuxjourney"] },
        { id:"linux-service", title:"Configure SSH, systemd services, package updates and logs", resourceIds:["linuxjourney"] },
        { id:"linux-network", title:"Troubleshoot sockets, interfaces, routes and DNS on Linux", resourceIds:["linuxjourney"] },
        { id:"sec-linux", title:"Harden SSH, enable a firewall and audit authentication logs", security:true, resourceIds:["thm101","cis"] }
      ]},
      { id: "network-sec", name: "Routing & network defense", weeks: "Weeks 9–12", description: "Add boundaries, controls and evidence.", tasks: [
        { id:"net-ospf", title:"Configure OSPF and diagnose routing issues", resourceIds:["jeremy","packet"] },
        { id:"net-acl", title:"Implement ACLs and verify allow/deny behavior", security:true, resourceIds:["netacad"] },
        { id:"net-wireless", title:"Review WLAN, WPA2/WPA3 and network device management", security:true, resourceIds:["netacad"] },
        { id:"sec-found", title:"Learn CIA, least privilege, risk and basic vulnerabilities", security:true, resourceIds:["thm101"] },
        { id:"project-network", title:"Publish Secure Enterprise Network lab with diagrams and tests", security:true, resourceIds:["packet","wireshark"] }
      ]}
    ]
  },
  {
    id: "systems", number: "02", title: "Run real infrastructure", subtitle: "Windows, virtualization & blue-team operations", months: "Months 4–6", color: "#b8e2d5",
    outcome: "Deploy a small enterprise domain and collect meaningful security telemetry.",
    modules: [
      { id:"windows", name:"Windows Server & identity", weeks:"Weeks 13–16", description:"Get comfortable with enterprise identity and endpoints.", tasks:[
        { id:"win-install", title:"Install Windows Server and create a test domain", resourceIds:["learn-ad"] },
        { id:"win-ad", title:"Manage Active Directory users, groups and OUs", resourceIds:["learn-ad"] },
        { id:"win-gpo", title:"Configure Group Policy, DNS and DHCP", resourceIds:["learn-ad"] },
        { id:"sec-identity", title:"Apply password policy, role-based access and auditing", security:true, resourceIds:["learn-ad","thm-soc"] }
      ]},
      { id:"virtual", name:"Virtualization & operations", weeks:"Weeks 17–20", description:"Build reliable, recoverable infrastructure.", tasks:[
        { id:"vm-net", title:"Create isolated virtual networks and multi-VM services", resourceIds:["proxmox"] },
        { id:"vm-storage", title:"Understand storage, snapshots, backups and restore testing", resourceIds:["proxmox"] },
        { id:"vm-monitor", title:"Set up basic system metrics, uptime checks and alerts", resourceIds:["grafana"] },
        { id:"sec-patch", title:"Document a patching, hardening and backup policy", security:true, resourceIds:["cis"] }
      ]},
      { id:"blue-team", name:"Firewalls, logging & SOC", weeks:"Weeks 21–24", description:"Observe, detect and investigate security events.", tasks:[
        { id:"fw-lab", title:"Configure a virtual firewall, rules and VPN concepts", security:true, resourceIds:["pfsense"] },
        { id:"siem", title:"Forward Windows and Linux security events to Wazuh", security:true, resourceIds:["wazuh"] },
        { id:"soc-alert", title:"Investigate a simulated suspicious-login event", security:true, resourceIds:["thm-soc","wazuh"] },
        { id:"soc-report", title:"Write a short incident triage and remediation report", security:true, resourceIds:["thm-soc"] },
        { id:"project-soc", title:"Publish Enterprise Infrastructure & SOC Lab", security:true, resourceIds:["wazuh"] }
      ]}
    ]
  },
  {
    id: "automation", number: "03", title: "Automate everything", subtitle: "Python, containers, CI/CD & cloud fundamentals", months: "Months 7–9", color: "#ffdbab",
    outcome: "Deploy and secure a reproducible service using code and cloud infrastructure.",
    modules: [
      { id:"scripts", name:"Scripting & automation", weeks:"Weeks 25–28", description:"Eliminate repetitive tasks safely.", tasks:[
        { id:"py-core", title:"Write Python scripts for files, HTTP APIs and JSON", resourceIds:["python"] },
        { id:"git", title:"Use Git, branches, pull requests and readable READMEs", resourceIds:["gitbook"] },
        { id:"bash-powershell", title:"Automate Linux and Windows administration with scripts", resourceIds:["linuxjourney","learn-ps"] },
        { id:"ansible", title:"Provision and configure a VM with Ansible", resourceIds:["ansible"] },
        { id:"sec-secrets", title:"Handle credentials securely; eliminate hardcoded secrets", security:true, resourceIds:["owasp"] }
      ]},
      { id:"containers", name:"Containers & delivery", weeks:"Weeks 29–32", description:"Build reliable, repeatable releases.", tasks:[
        { id:"docker", title:"Containerize a small service with Docker", resourceIds:["docker"] },
        { id:"cicd", title:"Create CI checks and an automated deployment pipeline", resourceIds:["gha"] },
        { id:"terraform", title:"Declare repeatable infrastructure using Terraform", resourceIds:["terraform"] },
        { id:"sec-scan", title:"Add dependency/container scanning and secret checks to CI", security:true, resourceIds:["owasp","gha"] },
        { id:"roll-back", title:"Demonstrate safe deployment and rollback", resourceIds:["gha"] }
      ]},
      { id:"cloud", name:"Cloud & IAM", weeks:"Weeks 33–36", description:"Apply infrastructure principles in the cloud.", tasks:[
        { id:"cloud-core", title:"Understand VPC/VNet, compute, storage and managed services", resourceIds:["azure"] },
        { id:"cloud-iam", title:"Configure least-privilege IAM and network access", security:true, resourceIds:["azure"] },
        { id:"cloud-logging", title:"Enable cloud monitoring, audit logs and budget alerts", security:true, resourceIds:["azure"] },
        { id:"cloud-deploy", title:"Deploy a small app with infrastructure as code", resourceIds:["terraform","azure"] },
        { id:"project-cloud", title:"Publish Automated Cloud Deployment with security evidence", security:true, resourceIds:["terraform"] }
      ]}
    ]
  },
  {
    id: "security", number: "04", title: "Deepen your security edge", subtitle: "Detection, response & specialization", months: "Months 10–12", color: "#d8c6fb",
    outcome: "Assess, defend and explain the security of your own engineered environment.",
    modules: [
      { id:"detect", name:"Detection engineering", weeks:"Weeks 37–40", description:"Move from collecting logs to producing useful detections.", tasks:[
        { id:"mitre", title:"Map common attack behaviors to MITRE ATT&CK", security:true, resourceIds:["mitre"] },
        { id:"detect-rule", title:"Create and test meaningful detection rules", security:true, resourceIds:["wazuh","sigma"] },
        { id:"triage", title:"Triage alerts, validate false positives and preserve evidence", security:true, resourceIds:["thm-soc"] },
        { id:"net-threat", title:"Investigate suspicious traffic using packet captures", security:true, resourceIds:["wireshark"] }
      ]},
      { id:"risk", name:"Vulnerability management & response", weeks:"Weeks 41–44", description:"Turn findings into risk reduction.", tasks:[
        { id:"threat-model", title:"Threat-model your own infrastructure and document trust boundaries", security:true, resourceIds:["owasp"] },
        { id:"vuln", title:"Assess a permitted, isolated lab and prioritize findings", security:true, resourceIds:["owasp"] },
        { id:"remediate", title:"Fix misconfigurations and validate the remediations", security:true, resourceIds:["cis"] },
        { id:"respond", title:"Write an incident response playbook and recovery checklist", security:true, resourceIds:["nist"] }
      ]},
      { id:"specialize", name:"Capstone & career direction", weeks:"Weeks 45–52", description:"Show employers proof of engineering ability.", tasks:[
        { id:"choose", title:"Choose a primary specialization: security, network, cloud or platform", resourceIds:["roadmap-devops"] },
        { id:"advanced", title:"Complete an advanced lab in your chosen specialization", security:true, resourceIds:["thm-soc","azure"] },
        { id:"project-assess", title:"Publish Security Engineering Assessment with before/after evidence", security:true, resourceIds:["mitre","nist"] },
        { id:"portfolio", title:"Polish four project READMEs and architecture diagrams", resourceIds:["gitbook"] },
        { id:"career", title:"Update CV and apply to suitable engineering positions", resourceIds:["roadmap-devops"] }
      ]}
    ]
  }
];

export const resources: Resource[] = [
 {id:"netacad",name:"Cisco Networking Academy",type:"Course",topic:"Networking",cost:"Free courses available",url:"https://www.netacad.com/",note:"Core networking theory and Cisco labs"},
 {id:"jeremy",name:"Jeremy's IT Lab — CCNA",type:"Course",topic:"Networking",cost:"Free",url:"https://www.youtube.com/@JeremysITLab",note:"Structured CCNA video series and practice labs"},
 {id:"packet",name:"Cisco Packet Tracer",type:"Practice",topic:"Networking",cost:"Free via NetAcad",url:"https://www.netacad.com/cisco-packet-tracer",note:"Build routed and switched topologies"},
 {id:"wireshark",name:"Wireshark Learning",type:"Documentation",topic:"Security",cost:"Free",url:"https://www.wireshark.org/docs/",note:"Inspect real packet captures"},
 {id:"linuxjourney",name:"Linux Journey",type:"Course",topic:"Systems",cost:"Free",url:"https://linuxjourney.com/",note:"Command line and Linux administration"},
 {id:"thm101",name:"TryHackMe — Cyber Security 101",type:"Practice",topic:"Security",cost:"Free + paid content",url:"https://tryhackme.com/path/outline/cybersecurity101",note:"Hands-on introduction to security"},
 {id:"cis",name:"CIS Benchmarks",type:"Documentation",topic:"Security",cost:"Free registration may be needed",url:"https://www.cisecurity.org/cis-benchmarks",note:"Server and operating-system hardening"},
 {id:"learn-ad",name:"Microsoft Learn — Active Directory",type:"Documentation",topic:"Systems",cost:"Free",url:"https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/",note:"Windows domain services, DNS, identity"},
 {id:"proxmox",name:"Proxmox VE Documentation",type:"Documentation",topic:"Systems",cost:"Free",url:"https://pve.proxmox.com/pve-docs/",note:"Virtualization and storage reference"},
 {id:"grafana",name:"Grafana Documentation",type:"Documentation",topic:"Systems",cost:"Free",url:"https://grafana.com/docs/",note:"Metrics and visualization"},
 {id:"pfsense",name:"pfSense Documentation",type:"Documentation",topic:"Security",cost:"Free",url:"https://docs.netgate.com/pfsense/en/latest/",note:"Virtual firewall and networking configuration"},
 {id:"wazuh",name:"Wazuh Documentation",type:"Documentation",topic:"Security",cost:"Free",url:"https://documentation.wazuh.com/current/",note:"Host security telemetry and SIEM lab"},
 {id:"thm-soc",name:"TryHackMe — SOC Level 1",type:"Practice",topic:"Security",cost:"Free + paid content",url:"https://tryhackme.com/path/outline/soclevel1",note:"Security detection and incident triage"},
 {id:"python",name:"Python Official Tutorial",type:"Documentation",topic:"Automation",cost:"Free",url:"https://docs.python.org/3/tutorial/",note:"Scripting and APIs"},
 {id:"gitbook",name:"Pro Git",type:"Course",topic:"Automation",cost:"Free",url:"https://git-scm.com/book/en/v2",note:"Git workflow and collaboration"},
 {id:"learn-ps",name:"PowerShell Documentation",type:"Documentation",topic:"Automation",cost:"Free",url:"https://learn.microsoft.com/en-us/powershell/",note:"Windows scripting"},
 {id:"ansible",name:"Ansible Getting Started",type:"Documentation",topic:"Automation",cost:"Free",url:"https://docs.ansible.com/ansible/latest/getting_started/index.html",note:"Configuration as code"},
 {id:"owasp",name:"OWASP Cheat Sheet Series",type:"Documentation",topic:"Security",cost:"Free",url:"https://cheatsheetseries.owasp.org/",note:"Secure architecture and development practices"},
 {id:"docker",name:"Docker Get Started",type:"Course",topic:"Cloud / DevOps",cost:"Free",url:"https://docs.docker.com/get-started/",note:"Containers and deployment"},
 {id:"gha",name:"GitHub Actions Documentation",type:"Documentation",topic:"Cloud / DevOps",cost:"Free docs; usage limits",url:"https://docs.github.com/en/actions",note:"CI/CD workflows"},
 {id:"terraform",name:"HashiCorp Terraform Tutorials",type:"Course",topic:"Cloud / DevOps",cost:"Free tutorials",url:"https://developer.hashicorp.com/terraform/tutorials",note:"Infrastructure as code"},
 {id:"azure",name:"Microsoft Learn — Azure",type:"Course",topic:"Cloud / DevOps",cost:"Free training; cloud usage may cost",url:"https://learn.microsoft.com/en-us/training/azure/",note:"Cloud services and identity fundamentals"},
 {id:"mitre",name:"MITRE ATT&CK",type:"Documentation",topic:"Security",cost:"Free",url:"https://attack.mitre.org/",note:"Adversary techniques and defensive mapping"},
 {id:"sigma",name:"Sigma Detection Rules",type:"Practice",topic:"Security",cost:"Free",url:"https://sigmahq.io/",note:"Portable log detection formats"},
 {id:"nist",name:"NIST CSF 2.0",type:"Documentation",topic:"Security",cost:"Free",url:"https://www.nist.gov/cyberframework",note:"Security risk and response framework"},
 {id:"roadmap-devops",name:"roadmap.sh — DevOps",type:"Roadmap",topic:"Cloud / DevOps",cost:"Free roadmap",url:"https://roadmap.sh/devops",note:"Reference for deeper specialization"}
];

export const projects: Project[] = [
 {id:"proj-network",no:"01",name:"Secure Enterprise Network",phase:"Phase 1",summary:"A segmented office topology with real controls and verified traffic flows.",deliverables:["Packet Tracer topology and saved configs","VLAN/routing/ACL verification","Wireshark evidence and architecture README"],skills:["CCNA","Networking","Security"]},
 {id:"proj-soc",no:"02",name:"Enterprise Infrastructure & SOC Lab",phase:"Phase 2",summary:"A small Windows/Linux environment with identity, firewalling and centralized security events.",deliverables:["Isolated virtual lab diagram","Windows and Linux logging to Wazuh","Alert triage and restore-test report"],skills:["Windows AD","Linux","Blue Team"]},
 {id:"proj-cloud",no:"03",name:"Automated Cloud Deployment",phase:"Phase 3",summary:"A secure reproducible service with CI/CD, IaC, monitoring and rollback.",deliverables:["GitHub repo with Terraform and Docker","Pipeline security checks","Deployment/rollback demonstration"],skills:["Python","Terraform","DevOps","Cloud"]},
 {id:"proj-assessment",no:"04",name:"Security Engineering Assessment",phase:"Phase 4",summary:"A defensive assessment of your own lab with prioritized findings and verified fixes.",deliverables:["Threat model and risk report","Detection and response evidence","Before/after remediation documentation"],skills:["Security Engineering","Threat Modeling","DFIR"]}
];

export const weeklyPlan = [
 {id:"sun",name:"Sunday",focus:"Networking / CCNA",hours:1.5},
 {id:"mon",name:"Monday",focus:"Linux / Windows systems",hours:1.5},
 {id:"tue",name:"Tuesday",focus:"Cybersecurity labs",hours:1.5},
 {id:"wed",name:"Wednesday",focus:"Infrastructure labs",hours:1.5},
 {id:"thu",name:"Thursday",focus:"Automation / Python",hours:1},
 {id:"fri",name:"Friday",focus:"Capstone project",hours:3},
 {id:"sat",name:"Saturday",focus:"Review & troubleshooting",hours:2}
];

export const allTasks = phases.flatMap(phase => phase.modules.flatMap(module => module.tasks));
