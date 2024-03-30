const Questions = {
  ADDS: [
    {q: 'Which command is used to check FSMO role?', a: 'netdom query fsmo', tag: 0},
    {q: 'What do you need to run to implement SSPR - self-service password reset in Azure AD?', a: 'Run Microsoft Azure AD Connect and select Password reset', tag: 0},
    {q: 'Three steps to deploy Azure AD Domain Services and prepare it for VM joining', a: '1) Create Az virtual network<br>2) Create Azure AD DS instance<br>3) Modify virtual network settings', tag: 0},
    {q: 'Which tool is used to trigger ADDS schema update?', a: 'ADSIEDIT.MSC', tag: 0},
    {q: 'How to set up replication between two sites?', a: '1) Create sites and move DCs to them<br>2) Create connection objects for the pair of DCs', tag: 0},
    {q: 'Which consoles ares used to transfer FSMO roles?', a: '1) Schema master - AD Schema<br>2) Domain naming - AD Domains and Trusts<br>3) RID, PDC and Infrasturcture - AD Usera and Computers<br> 4)Ntdsutil.exe - for all and to seize', tag: 0},
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
    {q: 'Three limitations of JEA', a: 'JEA cannot be used when the problem is not clearly defined<br>Windows Server 2016 or later<br>Windows 10 or later', tag: 0},
    {q: 'To define role capabilities for JEA - what file, which cmdlet and what configurations have to be defined?', a: 'Role capability file must be created<br>The cmdlet is NewPSRoleCapabilityFile<br>The following must be defined - VisibleAliases, V.Cmdlets, V.Functions, V.ExternalComands, V.Providers', tag: 0},
    {q: '', a: '', tag: 0},
    {q: '', a: '', tag: 0},
    {q: '', a: '', tag: 0},
  ],
  VMs_and_Containers: [
    {q: 'Question about VMs', a: 'Answer about VMs', tag: 0},
    {q: '', a: '', tag: 0},
  ],
  Network: [
    {q: 'How many addresses are reserved in each subnet?', a: 'First four addresses', tag: 0},
    {q: '', a: '', tag: 0},
  ],
  Storage: [
    {q: 'Question about Storage', a: 'Answer about storage', tag: 0},
    {q: '', a: '', tag: 0},
  ],

};

export default Questions;
