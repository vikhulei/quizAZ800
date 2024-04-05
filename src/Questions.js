const Questions = {
  ADDS: [
    {q: 'Which command is used to check FSMO role?', a: 'netdom query fsmo', tag: 0},
    {q: 'What do you need to run to implement SSPR - self-service password reset in Azure AD?', a: 'Run Microsoft Azure AD Connect and select Password reset', tag: 0},
    {q: 'Three steps to deploy Azure AD Domain Services and prepare it for VM joining', a: '1) Create Az virtual network<br>2) Create Azure AD DS instance<br>3) Modify virtual network settings', tag: 0},
    {q: 'Which tool is used to trigger ADDS schema update?', a: 'ADSIEDIT.MSC', tag: 0},
    {q: 'How to set up replication between two sites?', a: '1) Create sites and move DCs to them<br>2) Create connection objects for the pair of DCs', tag: 0},
    {q: 'Which consoles are used to transfer FSMO roles?', a: '1) Schema master - AD Schema<br>2) Domain naming - AD Domains and Trusts<br>3) RID, PDC and Infrasturcture - AD Usera and Computers<br> 4)Ntdsutil.exe - for all and to seize', tag: 0},
    {q: 'Which account to use to sync on-prem AD with Azure AD tenant using Azure AD Connect?', a: 'group managed service account (gMSA)', tag: 0},
    {q: 'Which two tools are used to sync on-prem with Azure tenant?', a: '1) Azure AD Connect<br>2) Azure portal', tag: 0},
    {q: 'What is lifetime of AD Recycle Bin?', a: '180 days', tag: 0},
    {q: 'What are two ways of AD restoration?', a: '1) Unauthorized - from other servers<br>2) Authorised - full restore from backup', tag: 0},
    {q: 'Where is starter GPO stored?', a: 'SYSVOL/StarterGPO', tag: 0},
    {q: 'What is order of GPO applicaion?', a: 'Local - Site - Domain - OU - Child OU', tag: 0},
    {q: 'Where do we find resulting precedence for Group Policies?', a: 'Group Policy Inheritance tab', tag: 0},
    {q: 'When is Group Policy applied?', a: 'Whem user logs in and every 90-120 min after', tag: 0},
    {q: 'Where is central store found?', a: 'FQDN-SYSVOL-FQDN-Policies', tag: 0},
    {q: 'List four partitions of AD Domain Services', a: '1) Configuration - domain, sites, GP<br>2) Schema<br>3) Domain - everything in the domain<br>4) Application - non-Domain, DNS', tag: 0},
    {q: 'Tool to check and force replication', a: 'Repadmin.exe', tag: 0},
    {q: 'What is Microsoft Entra ID?', a: 'Azure cloud-based directory service', tag: 0},
    {q: 'What are four Microsoft Entra integration options?', a: '1) Extend ADDS to Azure;<br>2) Sync on-prem AD with Entra<br>3) Sync using password hash<br>4) Implement SSO between on-prem AD and Entra ID', tag: 0},
    {q: 'What is process of synchronisation between on-prem AD and Entra ID - 3 steps?', a: '1) Install sync comp in domain<br>2) Account with Domain and Enetrp Admin<br>3) Account with with admin access to Entra ID', tag: 0},
    {q: 'What needs to be created first if you plan to replicate on-prem to Azure?', a: 'Azure VNet with S2S VPN capability', tag: 0},
    {q: 'What is the first and the second things that needs to be configured after creating Azure AD Domain Services?', a: '1) DNS server settings<br>2) Force password reset', tag: 0},
    {q: 'What is the general process of configuring replica AD domain controllers in Azure VM?', a: '1) Assign private static IP address for each VMs NIC<br>2) Set up VNet with S2S VPN - or Express Route<br>3) Configure sites for replication<br>4) Trust relationships between forests OR berween domains', tag: 0},
    {q: 'What are the steps of creating replica AD domain controller?', a: '1) Create VNet with S2S VPN - or Express Route<br>2) Create storage account<br>3) Create VM with static private IP address<br>4) Install ADDS role and DNS role', tag: 0},
  ],
  Management: [
    {q: 'What is Just Enough Administration used for and which tool is used?', a: '1) It is used to set limits to specific tasks;<br>2) Only PowerShell remoting is supported', tag: 0},
    {q: 'Which tool is used for creating and editing Delegation of Control?', a: '1) Creation - Delegation of Control Wizard<br>2) Editing - AD Users and Computers', tag: 0},
    {q: 'Which OS is recommended for Priviledged Access Workstation?', a: 'Windows 10 Enterprise is recommended for PAW', tag: 0},
    {q: 'Which two options does admin have to separate day-to-day tasks with admin activities?', a: '1) Dedicated hardware<br>2) Running VM for daily use', tag: 0},
    {q: 'What is a jump server? What are its security features?', a: '1) It is a hardened server in a zone between internal and perimeter networks<br>2) Security features: Windows Defender Credential Guard, Remote Credential Guard, Device Guard', tag: 0},
    {q: 'Which TCP port is used by a Windows Admin Center? Which version of Server can be used?', a: '1) Port 6516<br>2) Windows Server 2008 R2 and later', tag: 0},
    {q: 'How do you enable RSAT?', a: 'Settings - Manage Optional Features - Add a Feature', tag: 0},
    {q: 'List most used tools from RSAT', a: 'ADDS, DHCP, DNS, File Services, IPAM, Group Policy, Remote Access', tag: 0},
    {q: 'What is graphical environment for PowerShell called?', a: 'Windows PowerShell ISE (Integrated Scripting Environment)', tag: 0},
    {q: 'What is a difference between Powershell remoting and PowerShell Direct?', a: '1)Powershell remoting connects to the remote computers<br>2) PowerShell Direct is used to run cmdlets or scripts inside VM from the host OS', tag: 0},
    {q: 'What should be enabled to use Windows PowerShell to remotely administer a server?', a: '1) On the local computer - Windows PowerShell and Windows PowerShell remoting<br>2) On the remote computer - Windows Remote Management', tag: 0},
    {q: 'What are cmdlets to create a temporary and remote sessions for PowerShell remotely?', a: '1) Temporary session - Invoke-Command -ComputerName<br>2) Persistent session - $s =New-PSSession -> Enter-PSSession', tag: 0},
    {q: 'What are three components of DSC and what they are responsible for?', a: '1) Configurations - declarative PowerShell scripts<br>2) Resources - code that applies DSC<br>3) LCM - engine that is used to verify the state lf the system and apply DSC', tag: 0},
    {q: 'What are answer files, what tool is used and what are their two sections?', a: '1) It is .xml text files to automate Windows deployment<br>2) Windows SIM is used<br>3) The sections are - Components (for settings) and Packages (updates and lang packs)', tag: 0},
    {q: 'What is Azure Cloud Shell, where it is launched from and which environments does it have?', a: '1) It is a browser-accessible shell for managing Azure resources<br>2) It is laucjed from Azure portal<br>3) You can work with Bash or PowerShell', tag: 0},
    {q: 'What is Azure Bastion?<br>Where are Bastion hosts deployed?', a: 'Bastion is a PaaS service that provides direct RDP and SSH connectivity to VMs over TLS (Transport Layer Security)<br>Bastion hosts are deployed in the public side of the permiter network', tag: 0},
    {q: 'Which network is Azure Bastion located in?<br> What is the name of the network?', a: '1) Bastion should be located in the subnet of VNet, where VMs are<br>2) The name of the subnet should be AzureBastionSubnet', tag: 0},
    {q: 'Which protocols and ports are used to connect from the user to Bastion and from Bastion to VMs?', a: 'From user to Bastion - HTTPS 443, from Bastion to VMs - RDP 3389', tag: 0},
    {q: 'What roles are required to connect to VM using Bastion?', a: 'Reader role on VM, NIC and Azure Bastion', tag: 0},
    {q: 'Which ports and protocols are used for JIT Administration?', a: '22 - SSH<br>3389 - RDP<br>5985 & 5986 - WinRM', tag: 0},
    {q: 'What is Just-In-Time administration and where it is enabled?', a: 'JIT Administration opens selected ports for relevant IP address for the specified amount of time.<br> It is enabled through the Security Center', tag: 0},
    {q: 'What can Azure Arc manage?', a: 'Windows Server, Linux Server, Kubernetes clusters, SQL servers, Azure Data Services', tag: 0},
    {q: 'What needs to be installed before registering server with Azure Arc? What are the two options (for large-scale and small scale deployments)?', a: 'Azure Connected Machine agent must be installed first<br>For large-scale - download from Microsoft Download Center, for small-scale - onboarding script from Azure portal', tag: 0},
    {q: 'Which technologies is Azure Arc managing/using?', a: 'Configuration of OS, apps etc.<br>Restrict access to Log Analytics<br>Microsoft Defender<br>Microsoft Sentinel<br>Azure Monitor', tag: 0},
    {q: 'What is the functionality of Azure Policy (four categories)?', a: 'Enforcing compliance when provisioning new resources<br>Auditing compliance of existing resources<br>Remediating non-compliance<br>Auditing compliance of OS, apps configuration etc.', tag: 0},
    {q: 'How to manage access with RBAC?', a: 'Role-Based Access Control tabs:<br>Check access - seach for principals and check access level<br>Role assighnment - review current role assignment<br>Deny assignment - review blocked users<br>Classic administrqaors - if using Azure classic deploy<br>Roles - assign users to built-in roles', tag: 0},
    {q: 'What is the foundation of Azure Automanage best practices?', a: 'It is configuration profiles, buit-in or custom profiles can be used', tag: 0},
    {q: 'What are three ways to enable Azure Automanage?', a: '1) Azure portal - Automanage machines option<br>2) Azure Resource Manager (ARM) templates - JSON template, run with az deployment<br>Azure Policy - Portal -> Policy -> Definitions', tag: 0},
    {q: 'Explain briefly the concept of JEA', a: 'Only a PowerShell session is allowed for a regular user to use specific set of cmdlets, parameters and scripts', tag: 0},
    {q: 'Three limitations of JEA', a: 'JEA cannot be used when the problem is not clearly defined<br>Only on Windows Server 2016 or later<br>Only on Windows 10 or later', tag: 0},
    {q: 'To define role capabilities for JEA - what file, which cmdlet and what configurations have to be defined?', a: 'Role capability file must be created<br>The cmdlet is NewPSRoleCapabilityFile<br>The following must be defined - VisibleAliases, V.Cmdlets, V.Functions, V.ExternalComands, V.Providers', tag: 0},
    {q: 'What is needed to register JEA endpoint and what it controls?<br>Which cmdlet is used?<br>What is the file extension?', a: 'Session configuration file is responsible for naming JEA endpoint and controlling who can access, what roles the user is assigned and which identity is used<br>Cmdlet used is New-PSSessionConfigurationFile<br>The extension is .pssc', tag: 0},
    {q: 'Which cmdlet registers JEA endpont on a single computer?', a: 'Register-PSSessionConfiguration', tag: 0},
    {q: 'Process of configuring JEA (demonstation)', a: '1) Create folder and New_ModuleManifest .psd1 file<br>2) Create RoleCapability folder and .psrc file, open the file in ISE to configure the functionality<br>4) Create session config file .pssc to define the account<br>5) Register endpoint - Register-PSSessionConfiguration -Name and restart WinRM<br>enter-pssession -computername -ConfigurationName', tag: 0},
  ],
  VMs_and_Containers: [
    {q: 'What are three methods except Hyper-V Manager to manage Hyper-V and provide brief explanation', a: '1) PowerShell - configuration, status, general management<br>2) PowerShell Direct - EnterPSSession cmdlet is used, Hyper-V is managed with cmdlets<br>3) Windows Admin Center (WAC) - similar to Hyper-V Manager', tag: 0},
    {q: 'What is the difference between VHD and VHDX?', a: 'VHD - up to 2,040GB<br>VHDX - up to 64TB, minimum corruption issues, extend or shrink while VM is running', tag: 0},
    {q: 'What are three storage options in Hyper-V?', a: '1) VHD storage<br>2) Fibre channel for SANs<br>3) Storing VMs on SMB 3.0 file shares', tag: 0},
    {q: 'What is host clustering?', a: 'It is to implement VM as a clustered role.<br>For example, move VM from one node to another as needed', tag: 0},
    {q: 'What is guest clustering?', a: 'It is to implement clustering inside VM.<br>For example, create two or more VMs within operating system.<br>Guest cluster can also use shared VHDx, when .vhdx files are stored in a shared storage', tag: 0},
    {q: 'What is guarded fabric? What are three core component of guarded fabric?', a: 'Guarded fabric is a collection of Hyper-V resources that host VMs.<br>It consists of the following core components - shielded VMs, guarded hosts and Host Guardian Service', tag: 0},
    {q: 'Which two services does the Host Guardian Service provide?', a: '1) HGS Attestation service<br>2) Key Protection Service', tag: 0},
    {q: 'What are three types of information required by TPM-trusted attestation?', a: '1) TPM identity - unique TPM 2.0 key (to check if the host is in the list)<br>2) Measured Boot sequence - log about most recent boot sequence<br>3) Code integrity (CI) policy - defines the software the host is permitted to run', tag: 0},
    {q: 'Which two things must the host provide to KPS to obtain the keys?', a: 'The following must provided to Key Protection Service - health certificate and encrypted secret', tag: 0},
    {q: 'Which two things must be created first for shielded VMs?', a: '1) Shielded VM signed template disk - it is an OS disk, which is encrypted by Bitlocker with Shielded Template Disk Creation Wizard<br>2) Shielded data file - contains secrets like admin credentials, answer file etc.', tag: 0},
    {q: 'Which are three types of disks Azure VM is using?', a: 'OS disk - up to 2Tb<br>Data disk - max size is 32,767GiB (gibibites) or 65,536GiB for SSDv2<br>Temporary disks - intended to store page file, swap files etc.', tag: 0},
    {q: 'What are 5 types of Azure disks?', a: 'Standard HDD - spindle disk<br>Standard SSD - low throughput, good for non-production<br>Premium SSD - recommended for all production<br>SSD v2 - when high IOPS needed during peak hours<br>Ultra Disks - best performance', tag: 0},
    {q: 'Describe deploying Azure VMs using templates', a: 'Templates are relying on Azure intelligence to deploy all necessary resources in the most optimal way', tag: 0},
    {q: 'Windows Server Datacenter: Azure Edition - what are the three extra capabilities?', a: '1) Azure Extended Network - stretch on-prem subnet into Azure<br>2) Hotpatch - updates are installed without reboot. The reboot is done on planned and unplanned baselines<br>SMB over QUIC - improvement over TCP to connect to edge file servers', tag: 0},
    {q: 'What is generalized image and which tool is used to prepare it?', a: 'The generalized VM image is a saved image after VM was created and customized, which was reset.<br> The tool used is called Sysprep.exe', tag: 0},
    {q: 'What is Azure Image Builder? Which three parts does it have?', a: 'It is an Azure service, that allows to customize existing images.<br>It has three main parts: 1) Source; 2) Customizer; 3) Distribute', tag: 0},
    {q: 'What is the process of creating an image from generalized machine?', a: '1) Connect via RDP and stop the machine<br>2) Capture the image<br>3) Delete the VM from which the image was created', tag: 0},
    {q: 'What is Azure Automation? What is the tool it is using>', a: 'Azure Automation automates repetetive and long-runnings tasks<br>It is using runbooks, which a collection of procedures and operations (similar to scripts)', tag: 0},
    {q: 'What is the core component of Azure Automation?', a: 'It is an Automation Account', tag: 0},
    {q: 'What is LCM and what it does (three steps)?', a: 'Local Configuration MAnager is the core component for Azure Automation with DSC<br> It completes the following steps - 1)Get - gets the current state; 2) Test - compares current state agains DSC script 3) Set - updates the node to match DSC', tag: 0},
    {q: 'What is the process of using DSC?', a: '1. Onboard VM<br>2. Upload a script<br>3) Compile the configuration<br>4) Assign configuration', tag: 0},
    {q: 'How is Custom Script Extension used?', a: 'Primarily for post-depolyment and software installation', tag: 0},
    {q: 'What are three modes of DSC?<br> How to remediate noncompliant servers?', a: 'The three modes are - ApplyOnly, ApplyandMonitor, ApplyAndAutoCorrect<br>To forscefully remediate noncompliant servers, Update-DscConfiguration cmdlet must be used with the Run Command', tag: 0},
    {q: 'What is a container? Which mode is it using?', a: 'Container is a lightweight development and runtime environment, abstract from OS, in which applications can be run and shared easely during development<br>It is sharing OS kernel system and it is running its own copy of user mode environment', tag: 0},
    {q: 'What are the two isolation modes for containers?', a: 'Process isolation for Windows Server container - host OS kernel is used<br>Hyper-V isolation for Hyper-V containers - each container is running inside VM environmanet and is using its own kernel', tag: 0},
    {q: 'What is Docker Hub?', a: 'Web-based library for container images', tag: 0},
    {q: 'What is the process to use Docker for running a container?', a: '1) Start the Docker environment <br>2) Pull the container image from the library<br>3a) Run the container image and start a PowerShell session<br>3b) Alternatively, run the container without PowerShell and connect it to the port (8080:80)', tag: 0},
    {q: 'Describe security options for Windows containers: shared components, isolation mode, Windows updates, user accounts, image & runtime scanning', a: 'Shared components - Firewall and Defender from the host<br> Isolation mode - choose Hyper-V or process<br>Windows updates - taking it from the host<br>User accounts - by default it is Admin account, consider changing<br>Image & runtime scanning - use Defender for Cintainers', tag: 0},
    {q: 'How is persistent stirage provided for containers?<br>What are networking options?', a: 'The default storage is ephemeral - "scratch space". The permanent is provided by the Docker or the orchestrator<br>Networking - each container has a vNIC, connected to vSwitch. There are 5 nnetwork drivers to choose from', tag: 0},
    {q: 'What does Windows container orchestrator do? What is the most popular orchatration tool?', a: 'Orchestrator automates and manages large number of containers and controls how the containers interact with each other<br>The most popular orchatration tool is Kubernetes', tag: 0},
    {q: 'Describe Kubernetes architecture - 4 levels', a: 'Container runs inside a pod (which can have multiple containers)<br>Pod runs inside a node (which can have multiple pods)<br>The node is managed by a master node or control plane', tag: 0},
    {q: 'What is the process of creating Kubernetes orchestration solution (4 steps)?', a: '1) Create Kubernetes master on a host with the help of kubeadm tool<br>2) Configure pod networking solution using kubectl CLI<br>3) Join worker nodes<br>4) Manage Kubernetes resources', tag: 0},
  ],
  Network: [
    {q: 'How many addresses are reserved in each Azure VNet subnet?', a: 'First four addresses', tag: 0},
    {q: 'Which tools are used to create and manage DNS zones? What is the difference between public and private zones?', a: 'Azure portal, Azure CLI and Azure PowerShell<br>Public - anyone on Internet can access it; Private - maintains internal records of the company. Must be connected to specific Azure VNet', tag: 0},
    {q: 'What is the difference between a recursive and authoritative DNS servers?', a: 'Recursive - looks for the information in other DNS servers, if it doesnt have it(e.g. ISP server<br>Authoritative - has the ip address for DNS name', tag: 0},
    {q: 'What does on-prem DNS server do if it doesnt know the answer to the query?<br>What is the IP address for Azure recursive DNS servers?', a: 'It forwards the query to Azure recursive DNS resolver<br>168.63.129.16', tag: 0},
    {q: 'What are the steps to implement split-horizon DNS in Azure?', a: 'Create a public DNS zone and register the public IP addresses in that zone<br>Create a private DNS zone and link it to the appropriate VNet. VMs on that VNet will get automatically registered', tag: 0},
    {q: 'What are the tools to troublshoot DNS issues?', a: 'NSLookup, DNSCmd (manage DNS server role), DNSlint (diagnose DNS issues and generate report), IPConfig', tag: 0},
    {q: 'Name resolution troubleshooting process (4 steps)', a: '1) ipconfig /flushdns<br> 2) Ping the host ny the ip address<br>3) Ping by the host name<br>4) NSLookup.exe -d2 hostname > filename.txt<br>5) Examine the content of filename.txt', tag: 0},
    {q: 'How to prevent an unknown DHCP server to provide invalid information to the clients?', a: 'Register/authorize DHCP server in the Active Directory', tag: 0},
    {q: 'List 5 mostg common option codes for DHCP options', a: '001 - Subnet mask; 003 - Router; 006 - DNS servers; 015 - DNS domain name; 051 - Lease time', tag: 0},
    {q: 'How DHCP options are applied - from least to most specific?', a: 'Server level -> Scope level -> Class level -> Reserved client level', tag: 0},
    {q: 'Which properties are defined when creating a DHCP scope (8 properties)?', a: 'Name, IP address range, subnet mask, exclusions, delay, lease duration, options, activation', tag: 0},
    {q: 'What is DHCP reservation?', a: 'IP address reserved and assigned to a specific device', tag: 0},
    {q: 'What are three DHCP high availability options (provide brief explanation)?', a: '1) DHCP failover - two servers working together<br>2) DHCP clustering - if 1 server fails, another one starts the service<br>3) Split scopes - two servers, each controls a part of tge entire range', tag: 0},
    {q: 'What are the two modes of DHCP failover feature?', a: '1) Load balance - two servers working simultaniously, 50:50 by default<br>2) Hot standby - one server is primary, another one is secondary', tag: 0},
    {q: 'Must a DHCP server have a static IP address?', a: 'Yes', tag: 0},
    {q: 'What is the primary function of DNS?', a: 'Resolve computer names and hostnames to ip address and ip addresses into names', tag: 0},
    {q: 'How are DNS domain names structured?', a: 'Private names - your decide how to organize your domain namespace<br>Public names - start with a root domain, must work with ICANN', tag: 0},
    {q: 'What is FQDN and what is NetBIOS name?', a: 'FQDN is an alias, that is using a structured name, separated with periods (payroll.contoso.com)<br>NetBIOS name is maximum 16-charachter nonhierarchical name (SEA-SVR2)', tag: 0},
    {q: 'Whats is a DNS zone?<br>Where its content is stored?', a: 'DNS zone is a specific portion of DNS namespace, responsible for records in the zone<br>The content is stored in a file or ADDS database', tag: 0},
    {q: 'What are foreward lookup, reverse lookup, primary and secondary DNS zones?', a: 'Forward - names to ip address<br>Reverse - ip address to names<br>Primary - main zone to creade/edit records<br>Secondary - read-only copy', tag: 0},
    {q: 'List 7 most used DNS resource records', a: 'A - name to IPv4; AAA - name to IPv6; Alias (CNAME) - name to another name; Service location (SRV) - location of servers; MAil exchanger (MX) - email servers; Text (TXT - arbitrary strings of information; Pointer (PTR) - ip addresse to a name', tag: 0},
    {q: 'What is the difference between DNS forwarders and conditional forwarders?<br>What is a stub zone?', a: 'Forwarders forward all requests, conditional forwarders forward requests only for a specified domain<br>Stub zone replicates and uses name server records from the remote server, where requests are forwarded to', tag: 0},
    {q: 'What are four modules of IPAM?', a: 'IPAM discovery - discover DC, servers that have DHCPor DNS installed<br>IP addr space management<br>Multiserver management and monitoring<br>Auditing and IP address tracking', tag: 0},
    {q: 'What are two components of IPAM (IPAM topology)?', a: 'IPAM server - performes data collection from managed servers<br>IPAM client - Win 10/11 or Win Server', tag: 0},
    {q: 'What is the process of deployment of IPAM servers?', a: 'Install IPAM Server feature -> Provision each IPAM server -> Configure and run server discovery -> Choose and manage discovered servers', tag: 0},
    {q: 'What are three components of RBAC in IPAM?Name few built-in IPAM security groups', a: 'Role - collection of operation;Access scope - objects for access;Access policy - permissions<br>IPAM Administators, IPAM DNS Administrators, IP Address Record', tag: 0},
    {q: 'Which command should be run to use GPOs to configure IPAM options?', a: 'Invoke-IpamGpoProvisioning', tag: 0},
    {q: 'What are three main tasks IPAM is used for?', a: 'Manage DNS zones<br>Manage DHCP servers<br>Manage IP Adressing', tag: 0},
    {q: 'List four option for remote access', a: 'VPN - secure channel over Internet<br>Routing - between two internal networks<br>Web Application Proxy - access to internal website from Internet<br>DirectAccess - without VPN, ', tag: 0},
    {q: 'What are 4 VPN tunneling protocols?<br>Which 3 features all protocols have?<br>What is the best authentication option?', a: '1)Point-To-Point, 2)Layer 2 with IPsec; 3)SSTP; 4)IKEv2<br>3 features - Encapsulation, Authentication, Encryption<br>Best auth option is EAP', tag: 0},
    {q: 'What is NPS used for?<br>What is NPS implementation for Microsoft?', a: 'Network Policy Server is used to enforce network access policies<br>Microsot implementation of NPS is RADIUS server', tag: 0},
    {q: 'Network policy: what does it do, what are the four categories?', a: 'Network policy determines who is authoriized to connect to network and under which circumstances<br>4 categories: overview, conditions, constrains, settings', tag: 0},
    {q: 'What is the difference between AD FS and Pass-through preauthentication?', a: 'AD FS - the user is preauthenticated in the AD FS server<br>Pass-through - web app is responsible for authentication', tag: 0},
    {q: 'List and explain 4 Azure VPN types', a: 'S2S - IPSec/IKE is used<br>Mutisite - variation of S2S<br>Point-to-site - SSTP or IKEv2. No VPN device or public ip needed<br>VNet-to-VNet - similar to S2S', tag: 0},
    {q: 'Whats is the process of creating an Azure virtual WAN?', a: 'Create WAN -> inside a WAN create a hub -> inside a WAN created a VPN site -> connect a VPN site to hub -> connect VNet to a hub', tag: 0},
    {q: 'What are the limitations of Azure DNS?', a: 'Link VNet to one private DNS zone<br>Reverse DNS works only for private address space<br>Conditional forwarding not supported<br>Zone transfers not supported', tag: 0},
    {q: 'What are two SKUs for public addresses allocation in Azure?', a: 'Two stock keeping untis are:<br>Basic - support both dynamic and static methods<br>Standard - support only static allocation', tag: 0},
    {q: '', a: '', tag: 0},
    {q: '', a: '', tag: 0},
  ],
  Storage: [
    {q: 'Question about Storage', a: 'Answer about storage', tag: 0},
    {q: 'Test question added', a: 'Test answer added', tag: 0},
    {q: '', a: '', tag: 0},
  ],

};

export default Questions;
