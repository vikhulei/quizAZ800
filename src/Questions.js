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
    {q: 'What is process of synchromisation between on-prem AD and Entra ID - 3 steps?', a: '1) Install sync comp in domain<br>2) Account with Domain and Enetrp Admin<br>3) Account with with admin access to Entra ID', tag: 0},
    {q: '', a: '', tag: 0},
  ],
  Management: [
    {q: 'What are two ways to connect Windows Admin Center to Azure VM?', a: '1) Assign public IP to VM;<br>2) Use VPN', tag: 0},
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
