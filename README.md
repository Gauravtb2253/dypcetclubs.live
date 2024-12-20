

# 🎓 **dypcetclubs.live**

A comprehensive platform for **managing college clubs, events, and announcements** effectively.



## 🚀 **Table of Contents**

- [Overview](#overview)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)



## 🌟 **Overview**

**dypcetclubs.live** is a robust web application designed to **simplify** the management of college clubs. It provides a user-friendly interface for club leaders to:

- Register their clubs.
- Organize and manage events.
- Make important announcements.
- Engage efficiently with club members.



## ✨ **Key Features**

- **📋 Club Registration & Management**: Register and manage club details seamlessly.
- **📅 Event Organization**: Create, edit, and delete events, complete with images and tags.
- **📢 Announcement System**: Post rich-text announcements for your club members.
- **👥 Member Management**: Easily manage members and assign roles.
- **💻 Mobile & Desktop Friendly**: Fully responsive design.


## ⚙️ **Installation**

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yash-Ainapure/dypcetclubs.live.git
   cd dypcetclubs.live
   ```

2. **Set up the backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Set up the frontend (in a new terminal):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Create a `.env` file** in the backend folder:
   ```
   TURSO_AUTH_TOKEN="YOUR_TURSO_AUTH_TOKEN"
   TURSO_DATABASE_URL="YOUR_TURSO_DATABASE_URL"
   ```

5. **Migrate Prisma schema:**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

6. **Run the application**:
   - Open your browser and visit `http://localhost:3000`.

> **Note**: You'll need a Turso account to obtain the authentication token and database URL. Sign up at [Turso.tech](https://turso.tech/).



## 🧑‍💻 **Usage**

[Include specific instructions on how to use the application features and workflows.]



## 🛠️ **Technologies Used**

- **Frontend**: React, Tailwind CSS, TypeScript
- **Backend**: Node.js, Express
- **Database**: SQLite (Turso Database)
- **ORM**: Prisma



## 🤝 **Contributing**

We welcome contributions to **dypcetclubs.live**!

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

> For major changes, open an issue first to discuss your ideas.

## Our Valuable Contributors ❤️✨

We are grateful to all the contributors who have helped improve this project. Your contributions are what make this project better!

<!-- readme: contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/Yash-Ainapure">
                    <img src="https://private-avatars.githubusercontent.com/u/136250383?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY1ODAsIm5iZiI6MTczNDY1NTM4MCwicGF0aCI6Ii91LzEzNjI1MDM4MyJ9.GFh5aKi4n3xNq2lls_CB4JN7sZeherozmi6ZURNIEMQ&v=4" width="100;" alt="Yash-Ainapure"/>
                    <br />
                    <sub><b>yash ainapure</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/yashksaini-coder">
                    <img src="https://private-avatars.githubusercontent.com/u/115717039?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYyMjAsIm5iZiI6MTczNDY1NTAyMCwicGF0aCI6Ii91LzExNTcxNzAzOSJ9.gN2-lzIIbb14jzEo1xyUZSRBntV0O0oEKiP4gUi_cmc&v=4" width="100;" alt="yashksaini-coder"/>
                    <br />
                    <sub><b>Yash Kumar Saini</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Laxmi01345">
                    <img src="https://private-avatars.githubusercontent.com/u/122423386?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYwNDAsIm5iZiI6MTczNDY1NDg0MCwicGF0aCI6Ii91LzEyMjQyMzM4NiJ9.BY8XgnBgq3AIBwtN6Q7Gw38Pkehaow6y2PnH49w48is&v=4" width="100;" alt="Laxmi01345"/>
                    <br />
                    <sub><b>Laxmi Ray</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Gauravtb2253">
                    <img src="https://private-avatars.githubusercontent.com/u/114927759?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYxMDAsIm5iZiI6MTczNDY1NDkwMCwicGF0aCI6Ii91LzExNDkyNzc1OSJ9.aSSITRT-nqjse-zukAgWjH9PNcyN-00uBZDDEV3z2nw&v=4" width="100;" alt="Gauravtb2253"/>
                    <br />
                    <sub><b>Gaurav Bomble</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/radheypatil6630">
                    <img src="https://private-avatars.githubusercontent.com/u/85211195?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY1ODAsIm5iZiI6MTczNDY1NTM4MCwicGF0aCI6Ii91Lzg1MjExMTk1In0.LfTsOAju7Loyya3n3LDPu94YmG9qF24aQjHcTGD-Kag&v=4" width="100;" alt="radheypatil6630"/>
                    <br />
                    <sub><b>Radhey patil</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/prateek2102">
                    <img src="https://private-avatars.githubusercontent.com/u/130992856?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY2NDAsIm5iZiI6MTczNDY1NTQ0MCwicGF0aCI6Ii91LzEzMDk5Mjg1NiJ9.YyHodliZRKEoFrDVBiJY20MMoWT1CT0wVuujZd4ffZI&v=4" width="100;" alt="prateek2102"/>
                    <br />
                    <sub><b>Prateek </b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/varma-101">
                    <img src="https://private-avatars.githubusercontent.com/u/138625491?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU5ODAsIm5iZiI6MTczNDY1NDc4MCwicGF0aCI6Ii91LzEzODYyNTQ5MSJ9.Ji5BaNnpKR1v7kySiyYg7os_AkznXuMPbkM05BxYFqA&v=4" width="100;" alt="varma-101"/>
                    <br />
                    <sub><b>SAGI VENKATA NAGA GOPAL VARMA</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/rishyym0927">
                    <img src="https://private-avatars.githubusercontent.com/u/136720020?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU5MjAsIm5iZiI6MTczNDY1NDcyMCwicGF0aCI6Ii91LzEzNjcyMDAyMCJ9.8DNmhiIH06uwO1XHik7Hni4a6nIVCLgwRuKOW2Ozalw&v=4" width="100;" alt="rishyym0927"/>
                    <br />
                    <sub><b>RISHIRAJ MUKHERJEE</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Hh440">
                    <img src="https://private-avatars.githubusercontent.com/u/91595810?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYzNDAsIm5iZiI6MTczNDY1NTE0MCwicGF0aCI6Ii91LzkxNTk1ODEwIn0.golX93NrXTTeEMXQY6xdNzO4G1zM-hpVIRbfMSPXl1o&v=4" width="100;" alt="Hh440"/>
                    <br />
                    <sub><b>Harsh</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Pruthviraj-sawant">
                    <img src="https://private-avatars.githubusercontent.com/u/157594404?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY3NjAsIm5iZiI6MTczNDY1NTU2MCwicGF0aCI6Ii91LzE1NzU5NDQwNCJ9.9MaM_TWVEtGAG0I-FIw_sZZglY5UCX_-SdMQQSsWkRA&v=4" width="100;" alt="Pruthviraj-sawant"/>
                    <br />
                    <sub><b>pruthviraj-sawant</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/im-amanjai">
                    <img src="https://private-avatars.githubusercontent.com/u/145966547?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY3NjAsIm5iZiI6MTczNDY1NTU2MCwicGF0aCI6Ii91LzE0NTk2NjU0NyJ9.tg9fQeWoflL3T89J16yQbxMXm_0DedH51f_lfw9eRQ4&v=4" width="100;" alt="im-amanjai"/>
                    <br />
                    <sub><b>im-amanjai</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/ZayedShahcode">
                    <img src="https://private-avatars.githubusercontent.com/u/115407231?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYyMjAsIm5iZiI6MTczNDY1NTAyMCwicGF0aCI6Ii91LzExNTQwNzIzMSJ9.EWSh0r8obFwMbhxwAIrYg2Yug6qSxRqhkCQ6Ao5Dkh8&v=4" width="100;" alt="ZayedShahcode"/>
                    <br />
                    <sub><b>Zayed</b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/vivekrawat21">
                    <img src="https://private-avatars.githubusercontent.com/u/116631005?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY1MjAsIm5iZiI6MTczNDY1NTMyMCwicGF0aCI6Ii91LzExNjYzMTAwNSJ9.qAg2aeUOFcNmPuM6E0RL5J7LPOy-gHE9Zz3j0dgEU9A&v=4" width="100;" alt="vivekrawat21"/>
                    <br />
                    <sub><b>Vivek Rawat</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/vedhcet-07">
                    <img src="https://private-avatars.githubusercontent.com/u/176995332?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYyODAsIm5iZiI6MTczNDY1NTA4MCwicGF0aCI6Ii91LzE3Njk5NTMzMiJ9.ecQUc3E_3qIS1S5Iug4ztleKP8ov1-lL3F9I3s4J_2M&v=4" width="100;" alt="vedhcet-07"/>
                    <br />
                    <sub><b>Vishwas M D</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/VinayLodhi1712">
                    <img src="https://private-avatars.githubusercontent.com/u/135756009?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU5MjAsIm5iZiI6MTczNDY1NDcyMCwicGF0aCI6Ii91LzEzNTc1NjAwOSJ9.Qn_2ERte_0yoaUxLoWVoktqCodDauMXDshovMhHQY2w&v=4" width="100;" alt="VinayLodhi1712"/>
                    <br />
                    <sub><b>Vinay Anand Lodhi</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Swetabh333">
                    <img src="https://private-avatars.githubusercontent.com/u/109225662?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY1MjAsIm5iZiI6MTczNDY1NTMyMCwicGF0aCI6Ii91LzEwOTIyNTY2MiJ9.M_TmsuNFLD6MOZGm64u9Wy01jJGoIGktPuNc65Q9j2Q&v=4" width="100;" alt="Swetabh333"/>
                    <br />
                    <sub><b>Swetabh Shreyam</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/sushil-sagar05">
                    <img src="https://private-avatars.githubusercontent.com/u/169032900?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY1MjAsIm5iZiI6MTczNDY1NTMyMCwicGF0aCI6Ii91LzE2OTAzMjkwMCJ9.4DZh9dxcQF0Uvm-cxdERGNYntSh71MwvIhF9PWDnIGo&v=4" width="100;" alt="sushil-sagar05"/>
                    <br />
                    <sub><b>Sushil Sagar</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Sourabh782">
                    <img src="https://private-avatars.githubusercontent.com/u/103349890?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY3NjAsIm5iZiI6MTczNDY1NTU2MCwicGF0aCI6Ii91LzEwMzM0OTg5MCJ9.tEovASFYbQj8i8BoOeZ6IrwaaU86DcLoD6VK4V66SM0&v=4" width="100;" alt="Sourabh782"/>
                    <br />
                    <sub><b>Sourabh Singh Rawat</b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/sps234">
                    <img src="https://private-avatars.githubusercontent.com/u/141764206?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY2NDAsIm5iZiI6MTczNDY1NTQ0MCwicGF0aCI6Ii91LzE0MTc2NDIwNiJ9.eg-BPctQ4PZld9t1R5tk1PPXRwW3rNtB3_ZIG82twPs&v=4" width="100;" alt="sps234"/>
                    <br />
                    <sub><b>Saumya Pratap Singh</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/devxMani">
                    <img src="https://private-avatars.githubusercontent.com/u/122438942?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY1ODAsIm5iZiI6MTczNDY1NTM4MCwicGF0aCI6Ii91LzEyMjQzODk0MiJ9.00XHhFyMtR9p6HfFknMMPmsMSDGS3M39rIMMN74QPKA&v=4" width="100;" alt="devxMani"/>
                    <br />
                    <sub><b>MANI </b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/KrishChothani">
                    <img src="https://private-avatars.githubusercontent.com/u/143370415?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYxNjAsIm5iZiI6MTczNDY1NDk2MCwicGF0aCI6Ii91LzE0MzM3MDQxNSJ9.eNSUYX-_75eFxFuRNfliJePKDPDXx6ZsrDIj4vahtAw&v=4" width="100;" alt="KrishChothani"/>
                    <br />
                    <sub><b>Krish Chothani</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/JeetuSuthar">
                    <img src="https://private-avatars.githubusercontent.com/u/129197623?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYyODAsIm5iZiI6MTczNDY1NTA4MCwicGF0aCI6Ii91LzEyOTE5NzYyMyJ9.nD3xMjkY-3qdZU44lH6c4AUkn6sfOoDusz17kKuvWqY&v=4" width="100;" alt="JeetuSuthar"/>
                    <br />
                    <sub><b>Jeetu Suthar</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/hetvipopat">
                    <img src="https://private-avatars.githubusercontent.com/u/157787846?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY3MDAsIm5iZiI6MTczNDY1NTUwMCwicGF0aCI6Ii91LzE1Nzc4Nzg0NiJ9.ZPh4HJ_-kxWJgBtZezDZ2u16WX0vMGakf9_3EfcwVcA&v=4" width="100;" alt="hetvipopat"/>
                    <br />
                    <sub><b>Hetvi_26</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Dhruv-pahuja">
                    <img src="https://private-avatars.githubusercontent.com/u/100836518?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY2NDAsIm5iZiI6MTczNDY1NTQ0MCwicGF0aCI6Ii91LzEwMDgzNjUxOCJ9.y9ka36zA9I-Y05-UtmW4uRqho5VkA3xYzOjATsv1HaE&v=4" width="100;" alt="Dhruv-pahuja"/>
                    <br />
                    <sub><b>Dhruv Pahuja</b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/ChetanSingh14">
                    <img src="https://private-avatars.githubusercontent.com/u/153702696?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYwNDAsIm5iZiI6MTczNDY1NDg0MCwicGF0aCI6Ii91LzE1MzcwMjY5NiJ9.gt1LgPDdZl-wOmCsCH7sqp5oLp-mXBoUNZwQtl0f4Zs&v=4" width="100;" alt="ChetanSingh14"/>
                    <br />
                    <sub><b>Chetan SIngh</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/jainaryan04">
                    <img src="https://private-avatars.githubusercontent.com/u/138214350?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYxMDAsIm5iZiI6MTczNDY1NDkwMCwicGF0aCI6Ii91LzEzODIxNDM1MCJ9.wfXfTOlPIbSlT24j1rwa_KprdkIU-9A7B-3fTKs3fw8&v=4" width="100;" alt="jainaryan04"/>
                    <br />
                    <sub><b>Aryan Ramesh Jain</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/NK-Works">
                    <img src="https://private-avatars.githubusercontent.com/u/132702983?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU5MjAsIm5iZiI6MTczNDY1NDcyMCwicGF0aCI6Ii91LzEzMjcwMjk4MyJ9.wtpRnbgohw789Dv2ZxeP5mBEI1vBmkoGUEW2FzH3i8Y&v=4" width="100;" alt="NK-Works"/>
                    <br />
                    <sub><b>Anneshu Nag</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/vastavikadi">
                    <img src="https://private-avatars.githubusercontent.com/u/160533006?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTY3NjAsIm5iZiI6MTczNDY1NTU2MCwicGF0aCI6Ii91LzE2MDUzMzAwNiJ9.hILb2EaThFmPI1LNoW20O0huCUpXHalu_xPfgcyFp3Y&v=4" width="100;" alt="vastavikadi"/>
                    <br />
                    <sub><b>Aditya Shukla</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/AasthaSingh28">
                    <img src="https://private-avatars.githubusercontent.com/u/138100998?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYzNDAsIm5iZiI6MTczNDY1NTE0MCwicGF0aCI6Ii91LzEzODEwMDk5OCJ9.SuzJcsWW58dgnxFjl8y0rbPAzMO6VkTTziLMUyAC6UY&v=4" width="100;" alt="AasthaSingh28"/>
                    <br />
                    <sub><b>Aastha Singh</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: contributors -end -->

## 📄 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Made with ❤️ by the dypcetclubs.live team!

