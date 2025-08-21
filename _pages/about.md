---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<style>
  .badge {
    font-weight: 600;
    margin-bottom: 5px;
  }
</style>

<style>
  .logo-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem; 
  }
  .logo-row img {
    height: 100px;
    width: auto;
    /* 
       border-radius: 6px;
       box-shadow: 0 0 6px rgba(0,0,0,.15); */
  }
</style>

<style>
  .site-footer {
    text-align: center;
    font-size: 0.85em;
    color: rgb(128, 128, 128);
    margin: 2rem 0 1rem; 
  }
  .site-footer a {
    color: inherit;
    text-decoration: underline;
  }
</style>

<style>
.project {
  margin-bottom: 2em;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
}

.project-title {
  font-weight: bold;
  font-size: 1.2em;
}

.project-role {
  background-color: #d4edda; /* 浅绿色背景 */
  color: #155724;
  padding: 0.2em 0.6em;
  border-radius: 4px;
  margin-left: 1em;
  white-space: nowrap;
  font-size: 0.9em;
}

.project-time {
  background-color: #e2e3e5; /* 浅灰色背景 */
  color: #383d41;
  padding: 0.2em 0.6em;
  border-radius: 4px;
  font-size: 0.9em;
  white-space: nowrap;
}
</style>

<span class='anchor' id='about'></span>

Hello everyone, my name is Xiuming Liu (刘修铭, in Chinese). I am currently an intern at [Ant Research](https://www.antresearch.com/) under Ant Group. I was also an undergraduate student majoring in information security at [College of Cryptology and Cyber Science, Nankai University](https://cyber.nankai.edu.cn/). In September this year, I will enter [Shanghai Jiao Tong University](https://www.cs.sjtu.edu.cn/) to pursue a master's degree (2025.09 - 2028.04), and my supervisor is Associate Professor [Shuo Wang](https://infosec.sjtu.edu.cn/DirectoryDetail.aspx?id=181).

My primary research interests lie in the areas of **security for single-modal and multi-modal large models**, **multi-agent collaborative systems and their security**, as well as **the interpretability of artificial intelligence**. 

My research aims to build safe, reliable, and transparent AI systems, with the goal of creating a more trustworthy AI environment that addresses pressing societal needs in privacy protection, decision-making transparency, and system robustness.

You can contact me via the following emails:

  - lxmliu2002 *[at]* 126.com

  - lxmliu2002 *[at]* gmail.com

  - lxmliu2002 *[at]* mail.nankai.edu.cn

  - liuxiuming.lxm *[at]* antgroup.com

  - liuxiuming.lxm *[at]* sjtu.edu.cn

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News

<!-- *2025.07*: &nbsp;🎉🎉 Our case study on *"Multimodal Large Models Empowering Early Screening and Accurate Diagnosis of Serious Diseases"* was awarded the **"Al & SDGs: Top 10 Beacon Initiatives"** at the 2025 World Artificial Intelligence Conference. -->

*2025.06*: &nbsp;🎉🎉 I joined [Ant Group](https://www.antgroup.com/)'s [Cryptology Lab](https://antcplab.github.io/) as an intern. 

*2025.06*: &nbsp;🎉🎉 I obtained a Bachelor of Engineering degree from [Nankai University](https://www.nankai.edu.cn/). 

<!-- # 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->


# ⚙️ Projects

<div class="project">
  <div class="project-header">
    <div>
      <span class="project-title">“Mingqi” Medical Imaging Large Model Matrix</span>
      <span class="project-role">Subproject Leader</span>
    </div>
    <span class="project-time">2024.12 – Present</span>
  </div>
  <ul style="margin-top: 0.5em; padding-left: 1.5em;">
    <li>Extract multi-granularity image features and combine them with a dedicated large language model to generate high-quality endoscopic imaging diagnostic reports, improving the semantic similarity of diagnostic reports by more than 20%.</li>
    <li>Based on PMC-CLIP, implement cross-modal image and text retrieval, fine-tune the model to adapt to downstream tasks, accurately match related cases, and improve retrieval accuracy by more than 30%.</li>
    <li>Integration with the big voice model enables real-time transcription of the surgical process and automatic matching with images, helping doctors quickly select images and generate structured reports, significantly shortening writing time. The system can also automatically associate graphic content, build high-quality data sets, reduce manual annotation workload, and ultimately shorten the time it takes to write a diagnostic report from 5 minutes to less than 1 minute.</li>
  </ul>
</div>


<div class="project">
  <div class="project-header">
    <div>
      <span class="project-title">T2I-Fuzzer: Jailbreaking Text-to-Image Large Models via Hybrid Strategies</span>
      <span class="project-role">Team Member</span>
    </div>
    <span class="project-time">2024.09 – 2024.10</span>
  </div>
  <ul style="margin-top: 0.5em; padding-left: 1.5em;">
    <li>Identified potential vulnerabilities in T2I models using multi-level attack strategies, optimizing attack effectiveness from a "zero-sum game" perspective to deeply explore security weaknesses.</li>
    <li>Participated in the overall framework design and conducted testing of attack schemes such as adversarial captioning; built an attack knowledge base and implemented automatic prompt sanitization.</li>
  </ul>
</div>

<div class="project">
  <div class="project-header">
    <div>
      <span class="project-title">Web3_MLM</span>
      <span class="project-role">Team Member</span>
    </div>
    <span class="project-time">2024.01 – 2024.04</span>
  </div>
  <ul style="margin-top: 0.5em; padding-left: 1.5em;">
    <li>Supervisor: <strong><a href="https://netsec.ccert.edu.cn/chs/people/chaoz/"  target="_blank" rel="noopener noreferrer">Chao Zhang</a></strong>, Associate Professor, Tenured, Deputy Director of Institute for Network Sciences, Tsinghua University</li>
    <li>Web3_MLM is a subset of the <strong><a href="https://mlm01.com"  target="_blank" rel="noopener noreferrer">MLM</a></strong>  project, providing an intelligent reverse analysis solution for Solidity smart contracts.</li>
    <li>Constructed a high-quality, comprehensive dataset containing Solidity source code, assembly code, and bytecode; performed data augmentation and aligned data formats at both contract-level and function-level granularity.</li>
  </ul>
</div>

<div class="project">
  <div class="project-header">
    <div>
      <span class="project-title">SysY Language Compiler</span>
      <span class="project-role">Team Member</span>
    </div>
    <span class="project-time">2023.10 – 2024.01</span>
  </div>
  <ul style="margin-top: 0.5em; padding-left: 1.5em;">
    <li>Built a compiler from SysY language to ARM assembly using C++ based on a provided framework.</li>
    <li>Performed lexical analysis using Flex, syntactic analysis using Yacc, and control flow translation using backpatching; implemented optimizations including common subexpression elimination and dead code removal.</li>
  </ul>
</div>

<div class="project">
  <div class="project-header">
    <div>
      <span class="project-title">JingZhiYao: A Blockchain-Based Scheme for Precise Rumor Refutation and Traceability</span>
      <span class="project-role">Team Member</span>
    </div>
    <span class="project-time">2023.05 - 2023.07</span>
  </div>
  <ul style="margin-top: 0.5em; padding-left: 1.5em;">
    <li>Designed a cross-platform rumor governance scheme leveraging blockchain technology, aiming to optimize key stages in rumor management including rumor identification, precise refutation, and traceability for accountability.</li>
    <li>Responsible for the design and implementation of the database, as well as backend database integration; achieved secure data upload, encryption, storage, and smart contract-based retrieval for message matching, verification, and filtering, supporting information traceability and evidence preservation.</li>
  </ul>
</div>



# 🎖 Honors and Awards
- *2025.06*: &nbsp;🎖 Outstanding Student Party Member of Nankai University

- *2025.06*: &nbsp;🎖 Head of Red Flag Party Branch of Nankai University

- *2025.05*: &nbsp;💰 Zhou Enlai Scholarship [(the highest scholarship of Nankai University)](https://mp.weixin.qq.com/s/KnG_0Qekv1N_9SGn0ALcKw?click_id=44)

- *2025.04*: &nbsp;💰 First Prize of Yun'an Cryptography Innovation Scholarship

- *2024.12*: &nbsp;💰 National Scholarship (Top 1%)

- *2024.12*: &nbsp;🎖 Outstanding Student of Nankai University

- *2024.12*: &nbsp;💰 Ninety-five Core Scholarship, Nankai University (10 Students in Nankai University)

- *2024.12*: &nbsp;🎖 Outstanding Student Cadre of Tianjin

- *2024.08*: &nbsp;🏆 Third Prize of National College Students' Computer System Ability Competition

- *2024.06*: &nbsp;🎖 Head of the "I Do Practical Things for My Classmates" Excellent Project of the All-China Students' Federation

- *2023.11*: &nbsp;🏆 Second Prize of the Tianjin Division of the National College Students' Mathematical Modeling Competition

- *2022.12*: &nbsp;💰 National Scholarship (Top 1%)

# 📖 Educations
- *2021.09 - 2025.06*, **[College of Cryptology and Cyber Science](https://cyber.nankai.edu.cn/), [Nankai University](https://www.nankai.edu.cn/)**

  *- Bachelor of Information Security, Ranked 1st in the grade*

# 💻 Internships
- *2025.06 - 2025.09 (now)*, [Ant Group](https://www.antgroup.com/), Hangzhou, China.

  *- Lab: [Cryptology Lab](https://antcplab.github.io/), Supervisor: Zhicong Huang*

- *2025.01 - 2025.06*, Wuxi Blockchain Advanced Research Center, Wuxi, China.

  *- Lab: Artificial Intelligence and Data Security Lab, Supervisor: [Shuo Wang](https://infosec.sjtu.edu.cn/DirectoryDetail.aspx?id=181)*

# 🪽 Beyond Academics

I like **music, billiards, traveling and badminton**. At the same time, I am also keen to try various positions of student work. I am a **warm-hearted person**. If you encounter any problems, you can always come to me and I will do my best to help you.


<div class="logo-row">
  <img src="../images/nku_logo.png" alt="NKU Logo">
  <img src="../images/ant_logo.png" alt="Ant Logo">
  <img src="../images/sjtu_logo.png" alt="SJTU Logo">
</div>

<footer class="site-footer">
  <p>&copy; 2025 <a href="https://github.com/lxmliu2002 " target="_blank" rel="noopener">Xiuming Liu</a> all rights reserved</p>
  <p>
    Template adapted from
    <a href="https://github.com/RayeRen/acad-homepage.github.io " target="_blank" rel="noopener">Yi Ren</a>
  </p>
  <p>Last modified: <time datetime="2025-04-05">July 15, 2025</time></p>
</footer>