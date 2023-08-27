const Questions = {
  basics: [
    { q: 'What are common methods of data transmission?', a: '1. Electrical signals<br>2. Optical signals<br>3. Wireless signals', tag: 0 },
    { q: 'Name network types', a: '1. Small home<br>2. Small office/home office<br>3. Medium to large<br>4. Internet', tag: 0 },
    { q: 'Types of personal data', a: '1. Volunteer data<br>2. Observed data<br>3. Inferred data', tag: 0 },
    { q: 'What is P2P network?', a: 'Two computers connected directly, both are client and server at the same time', tag: 0 },
    { q: 'What is IP phone?', a: 'It uses VoIP technology. Can be hardware phone or softphone', tag: 0 },
    { q: 'Two options to connect home user to ISP. Explain each', a: '1) Coaxial cable<br>2. DSL - Digital Subscriber Line', tag: 0 },
    { q: 'What is SSID?', a: 'Service Set Identifier<br>It Uniquely names a WIFI network', tag: 0 },
    { q: 'What is GSM?', a: 'Global System for Mobile Communications', tag: 0 },
    { q: 'Whats is NFC?', a: 'Near Field Communications', tag: 0 },
    { q: 'Distances covered by 1) Wifi<br>2) Bluetooth<br>3) WWAN', a: '1) Wifi - 0.18 miles<br>2) Bluetooth - 0.05mi<br>3) WWAN (Wireless wide-area network) - few miles', tag: 0 },
    { q: 'Which 2 technologies are used in tethering?', a: '1) USB<br>2) Bluetooth', tag: 0 },
    { q: 'Describe combined homenetworking device', a: '1. Build-in modem<br>2. Router<br>3. Wireless transmitter<br>4. Lan switch', tag: 0 },
    { q: 'Three types of wired connections, explain each', a: '1) Category 5e - 4 pairs of wires<br>2) Coaxial - inner wire surrounded by conducting shield<br>3) Fiber-Optic - glass or plastic wire diameter of hair', tag: 0 },
    { q: 'Frequencies of wifi, bluetooth and cordless phone', a: '1) wifi - 2.4 and 5GHz<br>2) blutooth - 2.4GHz<br>3) phone - 900MHz', tag: 0 },
    { q: 'What wireless router configuration would stop outsiders from using your home network', a: 'Encription', tag: 0 },
    { q: 'OSI model', a: '7) Application<br>6) Presentation<br>5) Session<br>4) Transport<br>3) Network <br>2) Data Link <br>1) Physical', tag: 0 },
    { q: 'TCP/IP model', a: '4) Application<br>3)Transport<br>2) Internet<br> 1) Network Access', tag: 0 },
    { q: 'Three types of cables - name and explain', a: '1) Twisted pair - 4 pairs of copper wires<br>2) Coaxial cable - single copper wire in insulation and metal shielding<br> 3)Fiber-optic cable - glass or plastic wire', tag: 0 },
    { q: 'Private addresses', a: '1) 10.0.0.0/8<br>2) 172.16.0.0/12<br>3) 192.168.0.0/16', tag: 0 },
    { q: 'Special addresses', a: '1) Loopback address - 127.0.0.1<br>2) Link-Local addresses - 169.254.0.1 to 169.254.255.254', tag: 0 },
    { q: 'Who manages assignment of ip addresses?', a: 'IANA - Internet Assigned Numbers Authority', tag: 0 },
    { q: 'Which org is responsible for allocating IP addresses to ISPs?', a: 'RIR - Regional Internet Registries', tag: 0 },
    { q: 'What is the range for multicast?', a: '224.0.0.0 to 239.255.25.255', tag: 0 },
    { q: 'Three migration techniques from IPv4 to IPv6', a: '1) Dual Stack<br>2) Tunneling<br>3) Translation', tag: 0 },
    { q: 'Composition of IPv6', a: '8 hextets of hexidecimal digits (0 to f)', tag: 0 },
    { q: 'Four steps in assigning ip address using DHCP', a: '1) Discover from client - multicast with 255x4 and FF-FF-FF-FF-FF-FF<br>2) Offer from server<br>3) Request from client<br>4) Acknowledgment from server', tag: 0 },
    { q: 'What is ARP and ND?', a: 'Address Resolution Protocol<br>Netowrk Discovery', tag: 0 },
    { q: 'What is broadcast MAC address?', a: 'FF:FF:FF:FF:FF:FF', tag: 0 },
    { q: 'Three steps of ARP process', a: '1) Host sends request with ip addr to broadcast MAC addr<br>2) Host with matching ip sends back its MAC addr<br>3) Sending host receives and stores MAC addr in ARP table', tag: 0 },
    { q: 'Which table does a router use to determine which interface to use to send packets to the destination network?', a: 'Routing table', tag: 0 },
    { q: 'Which information is used by routers to forward a data packet toward its destination?', a: 'DEstination ip address', tag: 0 },
    { q: 'What is NAT?<br>What is it used for?', a: 'Network Address Translation<br>Its mapping one IP address (private) to another IP address (public)', tag: 0 },
    { q: 'Wht does UDP stand for?', a: 'User Datagram Protocol', tag: 0 },
    { q: 'Three types of ports', a: '1) Well-known ports: 1-1023<br>2) Registered ports: 1024-49151 <br>3) Private ports: 49152-65535', tag: 0 },
    { q: 'What are FTP port numbers?<br>What is POP3 port number?<br>What are DHCP port numbers?', a: 'FTP - 20, 21<br>POP3 - 110<br>DHCP - 67, 68', tag: 0 },
    { q: 'What are 20 & 21 port numbers?<br>What is 110 port number?<br>What are 67 & 68 port numbers?', a: '20, 21 - FTP, 21<br>110 - POP3<br>67, 68 - DHCP', tag: 0 },
    { q: 'What is SMTP port number?<br>What is DNS port number?<br>What is SSH port number?', a: 'SMTP - 25<br>DNS - 53<br>SSH - 22', tag: 0 },
    { q: 'What is 25 port number?<br>What is 53 port number?<br>What is 22 port number?', a: '25 - SMTP<br>53 - DNS<br>22 - SSH', tag: 0 },
    { q: 'Which command lists protocols, local/foreign addresses and port numbers?', a: 'netstat -n', tag: 0 },
    { q: 'What does netstat command list?', a: 'Protocols, local/foreign addresses and port numbers', tag: 0 },
    { q: 'What is a socket?', a: 'Identifier of all components, that belong in one communication/conversation - source and destination ip/port #', tag: 0 },
    { q: 'What is URI, URL and URN?', a: 'Unified Resource Identifier - entire line<br>URL - name and protocol<br>URN - only the name', tag: 0 },
    { q: 'What is the difference between POP3 and IMAP4?', a: 'POP3 doesnt store messages on the server, it downloads them on clients computer', tag: 0 }
  ],
  networkingDevices1: [
    { q: 'Four basic characteristics of network', a: 'Fault tolerance<br>Scalability<br>Quality of Service (QoS)<br>Security', tag: 0 },
    { q: 'Three requirements for security', a: '1) Confidentiality<br>2) Inrtegrity<br>3) Availability', tag: 0 },
    { q: 'Three layers of hierarchial network design', a: '1) Access LAyer<br>2) Distribution Layer<br>3) Core Layer', tag: 0 },
    { q: 'What is DataCenter', a: 'Physical facility to house large amount of data', tag: 0 },
    { q: 'Three types of cloud services', a: '1) SaaS - Software as Service<br>2) Paas - Platform as Service<br>3) Iaas - Infrastructure as Service', tag: 0 },
    { q: 'Two types of virtualization', a: '1) Bare metal - using computers hardware<br>2) Hosted - on the top of operating system', tag: 0 },
    { q: 'Two major issues with physical server', a: '1) Single point of failurte<br>2) Server sprawl', tag: 0 },
    { q: 'What is hybrid cloud?', a: 'Combination of computing in diffefrent environments', tag: 0 },
    { q: 'What does MAC stand for?', a: 'Media Access Control', tag: 0 },
    { q: 'What does MAC consist of?', a: 'First 3 bites - manufacturer<br>Second 3 bites - unique identifier', tag: 0 },
    { q: 'Minimum and maximum Ethernet frame size', a: '64b and 1518b', tag: 0 },
    { q: 'What are Ethernet frame fields?', a: 'Start of Frame<br>Destination MAC<br>Source MAC<br>LEnth/Type<br>Data Field<br>Frame Check Sequence', tag: 0 },
    { q: 'What does the preamble contain?', a: '10101011', tag: 0 },
    { q: 'Range for multicast addresses', a: '224.0.0.0 to 239.255.255.255<br>IPv6 begins with ff00::/8', tag: 0 },
    { q: 'Destination MAC address of multicast', a: 'IPv4 - 01-00-5E<br>IPv6 - 33-33', tag: 0 },
    { q: 'Ethernet two sublayers', a: '1) LLC Sublayer - between Layer 3 and Layer 2<br> MAC - between LAyer 1 and LAyer 2', tag: 0 },
    { q: 'What is the standart for LLC and MAC?', a: 'LLC - IEEE 802.2<br>MAC - IEEE 802.3, 802.11', tag: 0 },
    { q: 'What is encapsulated into the data field of an Ethernet frame?', a: 'the Layer 3 PDU', tag: 0 },
    { q: 'Length of Ethernet frame', a: '46 to 1500 bits', tag: 0 },
    { q: 'What is PDU?', a: 'Protocol Data Unit', tag: 0 },
    { q: 'Network layer four basic operations ', a: '1) Addressing end device<br>2) Encapsulation<br>3) Routing<br>4) De-encapsulation', tag: 0 },
    { q: 'Name of the packets on different Layers', a: 'Layer 4 - Segment<br>Layer 3 - Packet<br>Layer 2 - Frame', tag: 0 },
    { q: 'What is one major characteristic of the media that the network layer considers?', a: 'Maximum transmission unit (MTU)<br>The data link layer passes the MTU value up to the network layer', tag: 0 },
    { q: '1) Unicast IPv6 address<br>Multicast IPv6 address', a: '1) 2001:6f8<br>2) ff02', tag: 0 },
    { q: 'Link-local IPv6 address', a: 'fe80, ff:fe in the middle', tag: 0 },
    { q: 'How many octets and header fields in IPv6?', a: '40 octets and 8 hea', tag: 0 },
    { q: 'When would a switch record multiple entries for a single switch port in its MAC address table', a: 'When another switch is connected to the switch port', tag: 0 },
    { q: 'What are IPv6 header fields?', a: 'Version (0110), Trafic Class (priority), Flow Label (same treatment by router), Payload Length, Next Header (transport protocol), Hop Limit, Source IPv6, Dest IPv6', tag: 0 },
    { q: 'What are IPv4 header fields?', a: 'Version (0100), DS(priority), TTL, Protocol (transport), Header Checksum, Source IPv4, Dest IPv4', tag: 0 },
    { q:'Some of the DNS records', a: 'A - IPv4 record, NS - authoritative name server, AAAA - IPv6 record, MX - mail exchange records', tag: 0},
    { q:'DNS hierarchy', a: 'Root server -> top-level domain (TLD) -> second-level domain (authoritative)', tag: 0},
    { q:'How to ping for IPv4 address?', a: 'ping -4', tag: 0}
  ],
  networkingDevices2: [
    { q:'TCP header fields', a: 'Source Port, Dest Port, Seq #, Ackn #, Header length, Reserved, Control bits, Window size, Checksum, Urgent', tag: 0},
    { q:'UDP header fields', a: 'Source port, Dest port, Length, Checksum', tag: 0},
    { q:'Well-known ports', a: '20,21 - FTP, 22 - SSH, 23 - Telnet, 25 - SMTP, 53 - DNS, 67,68 - DHCP, 80 - HTTP, 110 - POP3, 143 - IMAP, 443 - HTTPS', tag: 0},
    { q:'Which command lists all protocols in use?', a: 'netstat -n', tag: 0},
    { q:'TCP three-way handshake process', a: '1) SYN<br>2) SYN and ACK<br>3)ACK', tag: 0},
    { q:'TCP session termination', a: 'FIN - ACK, FIN - ACK', tag: 0},
    { q:'Which two numbers are used to confirm receipt of data in TCP?', a: 'The sequence (SEQ) number and acknowledgement (ACK) number', tag: 0},
    { q:'What is window size in TCP transmission?', a: 'The number of bytes that can be sent before expecting an acknowledgment', tag: 0},
    { q:'What is MSS in TCP?', a: 'Maximum Segment Size, usually 1460b', tag: 0},
    { q:'What is PDU?', a: 'Protocol Data Unit', tag: 0},
    { q:'What is conversation multiplexing?', a: 'Sending multiple signals in a form of single complex signal', tag: 0},
    { q:'How TCP protocol addresses conjestion?', a: 'The source decreases the amount of data that it transmits before it receives an acknowledgement from the destination', tag: 0},
    { q:'What acknowledgement number will the file server send to host A to acknowledge receipt of the first three segments of 1000b of data', a: 'The file server will now expect to receive byte number 3001 and above', tag: 0},
    { q:'Which IOS mode allows access to all commands and features', a: 'Privilidged EXEC mode', tag: 0},
    { q:'How to navigate between IOS modes', a: 'User EXEC mode<br>Privilidged EXEC mode - enable<br>Global Config mode - configure terminal', tag: 0},
    { q:'What is Cisco IOS?', a: 'Cisco Internetwork Operating System', tag: 0},
    { q:'List 7 most common show commans', a: 'show running-config, show interfaces, show ip interface, show arp, show ip route, shopw protocol, ', tag: 0},
    { q:'Complete partial command', a: 'Tab', tag: 0},
    { q:'Erase character at cursor', a: 'Ctrl+D', tag: 0},
    { q:'Erase characters to the end of line', a: 'Ctrl+K', tag: 0},
    { q:'Erase characters to the start of line', a: 'Ctrl+U', tag: 0},
    { q:'Moves cursor to the end of line', a: 'Ctrl+E', tag: 0},
    { q:'Moves cursor to the beginning of line', a: 'Ctrl+A', tag: 0},
    { q:'All-purpose break sequence', a: 'Ctrl+Shift+6', tag: 0},
    { q:'Back from configuration mode to EXEC mode', a: 'Ctrl+Z', tag: 0},
    { q:'Verify current configuration and settings', a: 'show running-config', tag: 0},
    { q:'Verify interface status and see error messaged', a: 'show interfaces', tag: 0},
    { q:'Verify Layer 3 information of an interface', a: 'show ip interface', tag: 0},
    { q:'Verify list of known hosts on LAN', a: 'show arp', tag: 0},
    { q:'Verify Layer 3 routing infoirmation', a: 'show ip route', tag: 0},
    { q:'Verify which protocols are operational', a: 'show protocols', tag: 0},
    { q:'Verify the memory interfaces and licences of the devise', a: 'show version', tag: 0}
  ],
  basicConfiguration: [
    { q:'Configure the device name', a: 'hostname name', tag: 0},
    { q:'Secure user EXEC mode - via console port', a: '>line console 0<br>>password password<br>>login', tag: 0},
    { q:'Secure access via network (using ssh or telnet). VTY lines are 0 through 4. Password is "cisco", require users to login', a: '>line vty 0 4<br>>password password<br>>login', tag: 0},
    { q:'Define remote access using SSH', a: '>transport input ssh telnet', tag: 0},
    { q:'Secure privileged EXEC mode', a: '>enable secret password', tag: 0},
    { q:'Encrypt all passwords', a: '>service password-encryption', tag: 0},
    { q:'Provide legal notification', a: '>banner motd #No unauthorized access allowed!#', tag: 0},
    { q:'Configure the management SVI', a: '>interface vlan 1 >ip address 192.168.1.20 255.255.255.0<br>>no shutdown', tag: 0},
    { q:'Save the configuration', a: '>copy running-config startup-config', tag: 0},
    { q:'What is vty', a: 'Virtual Teletype, Virtual terminal lines. Used to access device via network using Telnet/SSH', tag: 0},
    { q:'What is SVI?', a: 'Switch Virtual Interface. Created for each VLAN', tag: 0},
    { q:'What is one difference between using Telnet or SSH?', a: 'Telnet sends a username and password in plain text, whereas SSH encrypts the username and password', tag: 0},
    { q:'What is ICMP?', a: 'Internet Control Message Protocols, ICMP Echo messages is the basis of the ping utility', tag: 0},
    { q:'Destination Unreachable codes for ICMPv4', a: '0 - Net unreachable<br>1 - Host unreachable<br>2 - Protocol unreachable<br>3 - Port unreachable', tag: 0},
    { q:'Destination Unreachable codes for ICMPv6', a: '0 No route to destination<br>1 Communication with the destin is prohibited<br>2 Beyond scope of the source <br>3 Addr unreachable<br>4 Port unreachable', tag: 0},
    { q:'What are ICMPv6 Messages between rounter and device?', a: 'Router Solicitation (RS) message - request from device <br>Router Advertisement (RA) message - response or advertisement (every 200 sec) from router', tag: 0},
    { q:'What are ICMPv6 Messages between devices?', a: 'Neighbor Solicitation (NS) message - request from device<br>Neighbor Advertisement (NA) message - response from other device', tag: 0}
  ],
};

export default Questions;
