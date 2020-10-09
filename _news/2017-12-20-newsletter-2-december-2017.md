---
    title: SHIELD Newsletter n.2 - December 2017
    layout: news
---

<h2>A universal security infrastructure for ISPs and corporate networks using
NFV-enabled technologies: the SHIELD project</h2>

<p>
<a target="blank" style="float:right;"
  href="{{ site.baseurl | append: '/documents/other-documents/' | append: 'shield_newsletter_2_december_2017.pdf' }}"
  class="btn btn-default">
    <i class="fa fa-download" aria-hidden="true"></i> Download PDF
</a>

</p>



<img src="{{ 'shield.png' | prepend: '/img/logo/' | prepend: site.baseurl }}"
  width="229" height="229" />

<p><strong>SHIELD</strong> exploits NFV for adaptive monitoring of an IT infrastructure and for feeding the data to an analytics engine to detect attacks in real time. An intelligent reaction system is then activated to reconfigure the SDN/NFV infrastructure so that the attacks are thwarted. The SDN/NFV infrastructure itself is protected from attacks thanks to trusted computing techniques that permit to quickly identify misbehaving nodes.</p>
<p><img class="img-responsive" src="{{ 'architecture.png' | prepend: '/img/misc/' | prepend: site.baseurl }}" />
The consortium has focused lately on the development of a first prototype of both the vNSF ecosystem and the DARE (Data Analysis and Remediation Engine), depicted in the picture below. The current release of the framework is available on <a href="https://github.com/shield-h2020">Github</a>.</p>
<p>In this phase, a preliminary integration of these components has been addressed as well, leading to the showcase of three demonstrations:</p>
<ul>
<li><p><strong>Detection of data exfiltration:</strong> SHIELD uses (and contributes to) the Apache Spot analytics framework. This demo showcases how DNS tunnelling can be used for data exfiltration, how it is detected by Spot and how the Recommendation and Remediation engine produces the rules to block further data exfiltration.</p></li>
<li><p><strong>Detection and mitigation of Distributed Denial of Service attacks:</strong> This end-to-end demonstration showcases how vNSFs can be on-boarded. When a Distributed Denial of Service attack is detected by DARE, the recommendation engine sends the appropriate mitigation rules to the user’s dashboard. The rules are then applied by the active vNSF and the attack traffic is dropped.</p></li>
<li><p><strong>Trust monitor and SDN/NFV attestation:</strong> This demonstration shows how SHIELD detects compromised components of its infrastructure (e.g. SDN switches, the SDN controller, vNSFs).</p></li>
</ul>
<p>The project objectives and research outcomes have been presented at the <strong>OPTIMA 2017</strong> conference, organised by the Hellenic Army Academy in Athens (Greece), May 25-26, 2017. The Telefonica <strong>blogthinkbig.com</strong> open research blog has published a <a href="http://en.blogthinkbig.com/2017/06/29/shield-project-applying-cognitive-security-future-virtualized-networks/">public post</a> introducing the SHIELD project on June 29, 2017.</p>
<p>A paper entitled “<em>SHIELD: A Novel NFV-based Cybersecurity Framework”</em> was published and presented at the 3<sup>rd</sup> IEEE Conference on Network Softwarisation (<strong>NetSoft 2017)</strong>, held in Bologna (Italy), July 3-7, 2017. The paper focuses on the SHIELD concepts, use cases, requirements and the overall high-level architecture. Moreover, a paper entitled “<em>On the establishment of trust in the cloud-based ETSI NFV framework”</em> has been accepted for publication and presented at the 3<sup>rd</sup> IEEE International Workshop on Security in NFV-SDN (<strong>SN-2017</strong>), held in conjunction with the IEEE Conference on Network Function Virtualisation and Software Defined Networks (<strong>IEEE NFV-SDN 2017</strong>) in Berlin (Germany), November 6-8, 2017. The paper focuses on the open issues in enabling trust in a NFV environment and proposes an architecture that leverages a cloud attestation framework to be integrated with the NFV ecosystem.</p>
<p>The consortium has accomplished dissemination activities to promote the platform demonstrations as well. The Distributed Denial of Service attack mitigation scenario has been presented at the <strong>ENISA</strong> workshop <em>“Bonding EU Cyber Threat Intelligence”</em>, held in Rome (Italy), October 30-31, 2017. Both the DDoS and attestation demonstrations have been described in a paper, entitled <em>“NFV-based network protection: the SHIELD approach”</em>, which has been published and presented at the <strong>IEEE NFV-SDN 2017</strong> conference demo track. In this context, the SHIELD consortium has been awarded with the <strong>Best Demo Award</strong> for the best demonstration showcase.</p>
<p>The project has increased lately its presence in social media. A <a href="https://www.researchgate.net/project/SHIELD-Securing-against-intruders-and-other-threats-through-a-NFV-enabled-environment">Research Gate</a> account has been activated, to include all the scientific publications related to the project. Moreover, the demonstration videos are available through the <strong>EU SHIELD project</strong> <a href="https://www.youtube.com/channel/UCXBxrz-5eReK4nSC46yks5A/videos">YouTube</a> channel, along with a brief overview of the project goals.</p>
<p>You can find additional information about</p>
<ul>
<li><p>Design, architecture, specifications and technologies of the vNSF ecosystem in the SHIELD <a href="https://www.shield-h2020.eu/documents/project-deliverables/SHIELD_D3.1_Specifications,_Design_and_Architecture_for_the_vNSF_Ecosystem_v1.0.pdf">Deliverable D3.1 Specifications, design and architecture for the vNSF ecosystem</a></p></li>
</ul>
<ul>
<li><p>Design, architecture, specifications and technologies of the DARE in the SHIELD <a href="https://www.shield-h2020.eu/documents/project-deliverables/SHIELD_D4.1_Specifications,_Design_and_Architecture_for_the_Usable_Information-Driven_Engine_v.1.0.pdf">Deliverable D4.1 Specifications, design and architecture for the usable information-driven engine</a></p></li>
<li><p>Consortium plan on standardisation activities <a href="https://www.shield-h2020.eu/documents/project-deliverables/SHIELD_D6.2_Standardisation_Plan_v.1.0.pdf">Deliverable D6.2 Standardisation Plan</a></p></li>
<li><p>Consortium report on exploitation activities <a href="https://www.shield-h2020.eu/documents/project-deliverables/SHIELD_D6.3_Interim_Report_on_Exploitation_Activities_v.1.0.pdf">Deliverable D6.3 Interim Report on Exploitation Activities</a></p></li>
</ul>

<br/>
<p>Contact us at <a
href="mailto:info@shield-h2020.eu">info[at]shield-h2020.eu</a>
<br/>
Visit us at <a href="https://www.shield-h2020.eu"
class="uri">https://www.shield-h2020.eu</a>
<br/>
Follow us on Twitter <a
href="https://twitter.com/shield_h2020">@shield_h2020</a>
<br/>
Connect with us LinkedIn <a
href="https://www.linkedin.com/company-beta/17928049/?pathWildcard=17928049">SHIELD
EU Project</a>
</p>
