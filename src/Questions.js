const Questions = {
  ADDS: [
    {q: 'Which command is used to check FSMO role?', a: 'netdom query fsmo', tag: 0},
    {q: 'What do you need to run to implement SSPR - self-service password reset in Azure AD?', a: 'Run Microsoft Azure AD Connect and select Password reset', tag: 0},
    {q: 'Which group can manage GPOs (least priviledge)?', a: 'Domain Admins', tag: 0},
    {q: 'Three steps to deploy AAD DS and prepare it for VM joining', a: '1) Create Az virtual network<br>2) Create Azure AD DS instance<br>3) Modify virtual network settings', tag: 0},
    {q: 'Which tool is used to seize operations master roles?', a: 'ntdsutil.exe', tag: 0},
    {q: 'Which tool is used to trigger ADDS schema update?', a: 'ADSIEDIT.MSC', tag: 0},
    {q: 'Which folder are started GPOs stored at?', a: 'StartGPO in SYSVOL', tag: 0},
    {q: 'How to set up replication between two sites?', a: '1) Create sites and move DCs to them<br>2) Create connection objects for the pair of DCs', tag: 0},
    {q: 'Which consoles ares used to transfer FSMO roles?', a: '1) Schema master - AD Schema<br>2) Domain naming - AD Domain and Trusts<br>3) RID, PDC and Infrasturcture - AD Usera and Computers<br> 4)Ntdsutil.exe - for all and to seize', tag: 0},
    {q: 'Which account to use to sync on-prem AD with Azure AD tenant using Azure AD Connect?', a: 'group managed service account (gMSA)', tag: 0},
    {q: 'Which two tools are used to sync on-prem with Azure tenant?', a: '1) Azure AD Connect<br>2) Azure portal', tag: 0},
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
    {q: 'Question about network', a: 'Answer about network', tag: 0},
    {q: '', a: '', tag: 0},
  ],
  Storage: [
    {q: 'Question about Storage', a: 'Answer about storage', tag: 0},
    {q: '', a: '', tag: 0},
  ],

};

export default Questions;
