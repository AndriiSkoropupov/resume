import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DownloadIcon } from "lucide-react";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center text-gray-900">
            <div className="max-w-3xl w-full">
                <Card className="p-6 shadow-xl rounded-2xl bg-white">
                    <CardContent>
                        <h1 className="text-4xl font-bold mb-2 text-center">Skoropupov Andrii, Software Engineer</h1>
                        <h4 className="text-1xl font-sans mb-2 text-center">London ON, Canada, +1 (437) 989 7518, kazis751@gmail.com</h4>
                        <p className="text-lg text-gray-600 mb-6">
                            {/*Experienced Software Engineer with a strong foundation in JavaScript, TypeScript, Solidity, and full-stack development. Proven ability to deliver secure, scalable, and high-performance solutions in blockchain, DeFi, and trading systems. Quick learner, collaborative teammate, and meticulous in execution.*/}
                            Experienced Software Engineer with a strong foundation in JavaScript, TypeScript, Solidity,
                            and full-stack development. Proven ability to deliver secure, scalable, and high-performance solutions
                            in blockchain, DeFi, and trading systems. Quick learner and collaborative teammate, with a track record
                            of owning features end-to-end in fast-paced environments and with an eye for detail. Passionate about
                            building impactful systems that solve problems.
                        </p>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Links</h2>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/andrii-skoropupov-b0b88a123"
                                        className="text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://certificate.ithillel.ua/view/94129429"
                                        className="text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hillel IT School Certificate
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                <li><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS, SQL, Solidity, Rust</li>
                                <li><strong>Frameworks & Libs:</strong> React, Redux, Vue, NestJS, NodeJS</li>
                                <li><strong>Blockchain:</strong> Ethers, Web3, Hardhat, Foundry, Solidity, EVM, Solana</li>
                                <li><strong>Databases:</strong> PostgreSQL, MySQL, Redis</li>
                                <li><strong>Tools:</strong> RabbitMQ, RedisSMQ, GraphQL, Docker, Swagger, TypeORM, TelegrafJS, Git, Jira, Linux</li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                <li><strong>Arbitrage Trading Bot</strong> <i><span className="text-sm">(Apr 2025 – Present)</span></i>: <br/>
                                    Developing high-performance backend services in Rust for an automated arbitrage trading platform.
                                    Implemented trade execution and low-latency processing, ensuring reliable and efficient operation under
                                    heavy load.
                                </li>
                                <li><strong>Trading Bot Platform</strong> <i><span className="text-sm">(Dec 2024 – Apr 2025)</span></i>: <br/>
                                    Developed the backend trading engine and services for a high-frequency automated trading bot. Focused on NestJS, PostgreSQL, and TypeORM for modular and robust infrastructure.
                                </li>
                                <li><strong>baZOOka Telegram Bot</strong> <i><span className="text-sm">(Nov 2023 – Dec 2024)</span></i>: <br/>
                                    Developed a Telegram-based crypto trading bot allowing on-chain swaps directly from chat. Engineered features using NestJS, TelegrafJS, Redis, and RabbitMQ; managed real-time execution logic.
                                </li>
                                <li><strong>Unlimited Trade</strong> <i><span className="text-sm">(Jul 2023 – Nov 2023)</span></i>: <br/>
                                    Built backend services for a synthetic leverage trading platform with up to 100x leverage. Enhanced Solidity smart contracts, collaborated on frontend features using React and develop new features on backend using NodeJS.
                                </li>
                                <li><strong>Liquidity Management App</strong> <i><span className="text-sm">(Feb 2023 – Jul 2023)</span></i>: <br/>
                                    Implemented a bot for managing and rebalancing Uniswap v3 liquidity positions. Developed smart contracts, backend services, integrating Binance API.
                                </li>
                                <li><strong>Custodial Wallet</strong> <i><span className="text-sm">(Nov 2022 – Feb 2023)</span></i>: <br/>
                                    Designed and implemented a secure multi-asset crypto wallet using microservice architecture. Developed APIs, messaging systems, and smart contract interaction layers.
                                </li>
                                <li><strong>LENBOW Protocol</strong> <i><span className="text-sm">(Aug 2022 – Nov 2022)</span></i>: <br/>
                                    Built staking and borrowing smart contracts, React-based UI, and a protocol liquidation bot. Used NestJS, Solidity, React and PostgreSQL.
                                </li>
                                <li><strong>Stablecoin Protocol</strong>  <i><span className="text-sm">(Feb 2022 – Aug 2022)</span></i>: <br/>
                                    Developed a fully on-chain algorithmic stablecoin protocol. Assisted with frontend UI and develop new features used NestJS
                                </li>
                                <li><strong>DEX Widget</strong>  <i><span className="text-sm">(Dec 2021 – Feb 2022)</span></i>: <br/>
                                    Developed a customizable embeddable DEX widget. Worked with VueJS and Solidity-based smart contract interactions.
                                </li>
                                <li><strong>Concentrated Liquidity Bot</strong> <i><span className="text-sm">(Sep 2021 – Dec 2021)</span></i>: <br/>
                                    Built smart contracts and backend infrastructure for automated Uniswap v3 position rebalancing.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                <li>
                                    <strong>Software Engineer @ Peanut.trade</strong> <i><span className="text-sm">(Apr 2025 — Present)</span></i><br />
                                    Developing high-performance backend services in Rust for an automated arbitrage trading platform.
                                </li>
                                <li>
                                    <strong>Software Engineer @ XPIRIO</strong> <i><span className="text-sm">(Aug 2021 — Apr 2025)</span></i><br />
                                    Contributed to multiple DeFi, trading, and blockchain projects as both backend and smart contract engineer.
                                </li>
                                <li>
                                    <strong>Junior Front-End Developer @ Lightemmit</strong> <i><span className="text-sm">(Feb 2021 — Aug 2021)</span></i><br />
                                    The startup focused on automotive accessories. Developed e-commerce features using React, TypeScript, Redux, and PostgreSQL.
                                    Worked on catalog pages, shopping cart logic.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Education</h2>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                <li><strong>Front-End Pro</strong> – Hillel IT School, Odesa <i><span className="text-sm">(2019 — 2020)</span></i></li>
                                <li><strong>Front-End Basic</strong> – Hillel IT School, Odesa <i><span className="text-sm">(2016)</span></i></li>
                                <li><strong>Master’s Degree</strong> – Odesa National Maritime Academy <i><span className="text-sm">(2013 — 2015)</span></i></li>
                                <li><strong>Bachelor</strong> – MCTF ONMA Odesa <i><span className="text-sm">(2007 — 2013)</span></i></li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Languages</h2>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                <li><strong>English</strong> – Highly proficient</li>
                                <li><strong>Ukrainian</strong> – Native</li>
                                <li><strong>Russian</strong> – Native</li>
                            </ul>
                        </section>

                        <a
                            href="/Andrii_Skoropupov-Software_Engineer.pdf"
                            download
                            className="inline-block mt-4"
                        >
                            <Button variant="default" className="flex gap-2 items-center">
                                <DownloadIcon size={16} />
                                Download CV
                            </Button>
                        </a>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
