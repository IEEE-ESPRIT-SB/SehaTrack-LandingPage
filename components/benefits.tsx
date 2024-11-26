import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Image from "next/image";

export default function Benefits() {
    const benefits = [
        {
            title: "Personalized Insights",
            description: "Tailored recommendations for unique needs.",
            icon: "/icons/personalized.svg", // Replace with actual SVG paths
        },
        {
            title: "Enhanced Security",
            description: "Your data is safe and encrypted.",
            icon: "/icons/security.svg",
        },
        {
            title: "Community Support",
            description: "Engage with a supportive community.",
            icon: "/icons/community.svg",
        },
        {
            title: "Rewards System",
            description: "Earn points for healthy choices.",
            icon: "/icons/rewards.svg",
        },
        {
            title: "Local Relevance",
            description: "Focused on regional products and habits.",
            icon: "/icons/local.svg",
        },
        {
            title: "Expert Guidance",
            description: "Backed by industry professionals.",
            icon: "/icons/expert.svg",
        },
    ];

    return (
        <section className="relative" id="benefits">
            <div
                className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
                // aria-hidden="true"
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
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border-t  [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] py-12 md:py-20">
                    {/* Section Header */}
                    <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
                        <div className="inline-flex items-center gap-3 pb-3">
              <span className="inline-flex bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                Benefits
              </span>
                        </div>
                        <h2 className="bg-gradient-to-r from-gray-200 to-green-300 bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Why Choose Our Solution?
                        </h2>
                        <p className="text-lg text-green-200/65">
                            Explore key benefits designed to meet your needs efficiently.
                        </p>
                    </div>
                    {/* Cards */}
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-gray-800 p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={benefit.icon}
                                        width={64}
                                        height={64}
                                        alt={`${benefit.title} Icon`}
                                    />
                                </div>
                                <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-green-200/65">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
