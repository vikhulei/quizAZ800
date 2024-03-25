const Questions = {
  ADDS: [
    {q: 'Which command is used to check FSMO role?', a: 'netdom query fsmo', tag: 0},
    {q: 'What do you need to run to implement SSPR - self-service password reset in Azure AD?', a: 'Run Microsoft Azure AD Connect and select Password reset', tag: 0},
    {q: 'Which group can manage GPOs (least priviledge)?', a: 'Domain Admins', tag: 0},
    {q: 'Three steps to deploy AAD DS and prepare it for VM joining', a: '1) Create Az virtual network<br>2) Create Azure AD DS instance<br>3) Modify virtual network settings', tag: 0},
    {q: 'Which tool is used to seize operations master roles?', a: 'ntdsutil.exe', tag: 0},
    {q: 'Which tool is used to trigger ADDS schema update?', a: 'ADSIEDIT.MSC', tag: 0},
    {q: 'Which folder are started GPOs stored at?', a: 'StartGPO in SYSVOL', tag: 0},
    {q: '', a: '', tag: 0},
  ],
  Management: [
    {q: 'What are two ways to connect Windiows Admin Center to Azure VM?', a: '1) Assign public IP to VM;<br>2) Use VPN', tag: 0},
    {q: '', a: '', tag: 0},
  ],

};

export default Questions;
