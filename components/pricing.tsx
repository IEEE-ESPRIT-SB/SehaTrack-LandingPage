import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function PricingPlans() {
    return (
        <section className="relative" id="pricing">
            {/* Background Shapes */}
            <div
                className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
                aria-hidden="true"
            >
                <Image
                    className="max-w-none"
                    src={BlurredShapeGray}
                    width={760}
                    height={668}
                    alt="Blurred shape"
                />
            </div>
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
                aria-hidden="true"
            >
                <Image
                    className="max-w-none"
                    src={BlurredShape}
                    width={760}
                    height={668}
                    alt="Blurred shape"
                />
            </div>

            {/* Pricing Plans Section */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
                    {/* Section Header */}
                    <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
                        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-green-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-green-200/50">
                            <span className="inline-flex bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                                Pricing Plans
                            </span>
                        </div>
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Choose Your Plan
                        </h2>
                        <p className="text-lg text-green-200/65">
                            Select a plan that fits your needs and get started today.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 md:gap-x-14 md:gap-y-16">
                        {/* Basic Plan */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-2">Basic Plan</h3>
                            <p className="text-xl text-green-200 mb-4">Free</p>
                            <p className="text-gray-300 mb-6">
                                Ideal for individuals or small teams.
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-200">
                                <li>1,000 product scans per month</li>
                                <li>Basic barcode scanning</li>
                                <li>Access to local product data</li>
                                <li>Email support</li>
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href="#"
                                    className="inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-2">Pro Plan</h3>
                            <p className="text-xl text-green-200 mb-4">$15 / month</p>
                            <p className="text-gray-300 mb-6">
                                Best for growing teams and professionals.
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-200">
                                <li>5,000 product scans per month</li>
                                <li>Advanced barcode scanning</li>
                                <li>Local and expert-backed data</li>
                                <li>Priority email support</li>
                                <li>Customizable recommendations</li>
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href="#"
                                    className="inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-2">Enterprise Plan</h3>
                            <p className="text-xl text-green-200 mb-4">$50 / month</p>
                            <p className="text-gray-300 mb-6">
                                Perfect for large teams and enterprises.
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-200">
                                <li>Unlimited product scans</li>
                                <li>Advanced analytics</li>
                                <li>API access</li>
                                <li>Dedicated account manager</li>
                                <li>24/7 premium support</li>
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href="#"
                                    className="inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
